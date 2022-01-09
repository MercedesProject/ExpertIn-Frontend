<template>
    <b-card no-body class="border border-info" >
        <b-card-header class="border-0 border-primary ">
            <h3 class="mb-0 text-center">Applicants</h3>
        </b-card-header>

        <el-table class="table-responsive table b-table table-hover table-sticky-header table-bordered thead-dark"
                  header-row-class-name="thead-light"
                  :data="applicants">
            <el-table-column label="Applicant "
                             min-width="230px"
                             prop="name">
                <template v-slot="{row}">
                    <b-media no-body class="align-items-center">
                        <a href="" class="avatar rounded-circle mr-3">
                            
                            <img alt="Image placeholder" :src="row.imagePath">
                            
                        </a>
                        <b-media-body>
                            <span class="font-weight-600 name mb-0 text-sm">{{row.employerName}} {{row.employerSurName}}</span>
                        </b-media-body>
                    </b-media>
                </template>
            </el-table-column>
            <!--<el-table-column label="Salary"
                             prop="budget"
                             min-width="140px">
            </el-table-column>
            -->
           

            <el-table-column label="Action" min-width="350px">
                <template v-slot="{row}">
                    <b-media no-body class="align-items-center">
                        
                        <b-media-body  >
                            <!-- <button v-b-modal.jobModal size="m" class="btn btn-info" @click="accept(row.userId)">Accept</button>
                            <button v-b-modal.jobModal  size="m" class="btn btn-danger saveJob" @click="decline(row.userId)" >Decline</button>-->
                             <button v-b-modal.acceptModal size="m" @click="sendUserId(row.userId)"  class="btn btn-info">Accept</button>
                            <button v-b-modal.declineModal  size="m" @click="sendUserId(row.userId)"  class="btn btn-danger saveJob" >Decline</button> 
                            <button  size="m" class=" btn btn-default" @click="commandClick(row.userId)">Review</button> 
                        </b-media-body>
                    </b-media>
                </template>
                  <b-modal id="acceptModal" ref="acceptModal"  title="Accept" hide-footer button-size="sm">
                        <pre>Are you sure you want to accept this applicant?</pre>
                        <div class="float-right">
                        <b-button class="btn btn-success" @click="accept(selectedUserId)">Accept</b-button>
                        <b-button  class="btn btn-primary" @click="toggleAcceptModal">Close</b-button>
                        </div>
                        
                    </b-modal>
                    <b-modal id="declineModal" ref="declineModal" title="Decline" hide-footer  button-size="sm">
                    <pre>Are you sure you want to decline this applicant?</pre>
                    <div class="float-right">
                        <b-button class="btn btn-danger"  @click="decline(selectedUserId)">Decline</b-button>
                        <b-button class="btn btn-primary" @click="toggleDeclineModal" >Cancel</b-button>
                    </div>
                        
                    </b-modal>  
                
            </el-table-column>

            <!--<el-table-column label="Form"
                             prop="completion"
                             min-width="240px">
                <template v-slot="{row}">
                    <div class="d-flex align-items-center">
                        <span class="completion mr-2">{{row.completion}}%</span>
                        <div>
                            <base-progress :type="row.statusType" :value="row.completion"/>
                        </div>
                    </div>
                </template>
            </el-table-column>

             <el-table-column label="Status"
                             min-width="150px"
                             prop="status">
                <template v-slot="{row}">
                    <badge class="badge-dot mr-4" type="">
                        <i :class="`bg-${row.statusType}`"></i>
                        <span class="status" :class="`text-${row.statusType}`">{{row.status}}</span>
                    </badge>
                </template>
            </el-table-column>-->
        </el-table> 

        <b-card-footer class="py-4 d-flex justify-content-end">
            <base-pagination v-model="currentPage" :per-page="10" :total="50"></base-pagination>
        </b-card-footer>
    </b-card>
</template>
<script>
  import projects from '../projects'
  import { Table, TableColumn} from 'element-ui'
  import axios from 'axios'
  import users from '../users'

  export default {
    name: 'light-table',
    components: {
      [Table.name]: Table,
      [TableColumn.name]: TableColumn
    },
    data() {
      return {
        model:[],
        projects,
        users,
        currentPage: 1,
        employerId:null,
        applicationJob:[],
        application:[],
        applicants:[],
        selectedUserId:0,
      };
    },
    methods: {
        sendUserId(id) {
        this.selectedUserId = id;
        console.log("selectedUserId"+this.selectedUserId)
        },
        toggleAcceptModal() {
        this.$refs['acceptModal'].hide()
        },
        toggleDeclineModal() {
        this.$refs['declineModal'].hide()
        },
        getJobDetail() {
            console.log(this.$route.params.jobId);
            axios.get('api/applicationjobs/getallbyjobid?id=' + this.$route.params.jobId)
                .then((response) => {
                    console.log(response.data);
                    this.application= response.data;
                    
                
                })
            axios.get('api/applicationjobs/getallemployerandphoto?JobId=' + this.$route.params.jobId)
                .then((response) => {
                    console.log(response.data);
                    this.applicants = response.data;
                    for(let i=0;i<this.applicants.length;i++){
                        console.log(response.data[i].imagePath);
                        this.applicants[i].imagePath = require('../../../../../Projects/Expert-In-Backend-Release/WebApplication1/wwwroot/Uploads/Images/' + response.data[i].imagePath);
                        console.log(this.applicants[i].imagePath);
                    }
                    
                
                })
        },

      commandClick: function(args) {
        console.log(args);
        this.$router.push({name:'EmployeeProfil', params: {userId: args }});
      },
      resetInfoModal() {
        this.acceptModal.title = ''
        this.infoModal.content = ''
      },
      accept(id){
          axios.post('api/applicationjobs/getallbyuserid?id='+ id)
                .then((response) => {
                    console.log(response.data);
                    this.applicationJob = response.data;
                    for(let i=0;i<this.applicationJob.length;i++){
                        console.log("Job details :"+this.applicationJob[i].jobId);
                        if(this.applicationJob[i].jobId ==this.$route.params.jobId ){
                        console.log("Job details :"+this.applicationJob[i]);
                        axios.post('api/applicationjobs/accepted', this.application[i])
                        .then((response) => {
                            console.log(response.data);
                        })
                    }
                    }
                })
      },
      decline(id){
          axios.post('api/applicationjobs/getallbyuserid?id='+ id)
                .then((response) => {
                    console.log(response.data);
                    this.applicationJob = response.data;
                    for(let i=0;i<this.applicationJob.length;i++){
                        console.log("Job details :"+this.applicationJob[i].jobId);
                        if(this.applicationJob[i].jobId ==this.$route.params.jobId ){
                        console.log("Job details :"+this.applicationJob[i]);
                        axios.post('api/applicationjobs/declined', this.applicationJob[i])
                        .then((response) => {
                            console.log(response.data);
                            axios.post('api/applicationjobs/delete', this.applicationJob[i])
                            .then((response) => {
                                console.log(response.data);
                                
                            })
                        })
                    }
                    }
                    
                    
                })
      },
    
  },
  created(){
     this.getJobDetail();
    // console.log(this.model);
  },
  }
</script>
