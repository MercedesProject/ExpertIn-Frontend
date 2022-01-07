<template>
    <b-card no-body class="border border-info" >
        <b-card-header class="border-0 border-primary ">
            <h3 class="mb-0 text-center">Applicants</h3>
        </b-card-header>

        <el-table class="table-responsive table b-table table-hover table-sticky-header table-bordered thead-dark"
                  header-row-class-name="thead-light"
                  :data="applicants">
            <el-table-column label="Applicant "
                             min-width="280px"
                             prop="name">
                <template v-slot="{row}">
                    <b-media no-body class="align-items-center">
                        <a href="" class="avatar rounded-circle mr-3">
                            
                            <img alt="Image placeholder" :src="row.employerTitle">
                            
                        </a>
                        <b-media-body>
                            <span class="font-weight-600 name mb-0 text-sm">{{row.employerName}} {{row.employerSurname}}</span>
                        </b-media-body>
                    </b-media>
                </template>
            </el-table-column>
            <!--<el-table-column label="Salary"
                             prop="budget"
                             min-width="140px">
            </el-table-column>
            -->
           

            <el-table-column label="Action" min-width="100px">
                <template v-slot="{row}">
                    <b-media no-body class="align-items-center">
                        
                        <b-media-body>
                            <a href="#!"  @click="commandClick(row.userId)">
                                <base-button size="m" type="default" class="float-right" >Review</base-button>
                            </a>  
                        </b-media-body>
                    </b-media>
                </template>

                
                
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
        applicants:[],
      };
    },
    methods: {
        getJobDetail() {
                axios.get('api/applicationjobs/getallbyjobid?id=' + this.$route.params.jobId)
                    .then((response) => {
                        this.applicationJob = response.data;
                        console.log(this.applicationJob);
                        
                        console.log(this.applicationJob.length);
                        for(let i=0;i<this.applicationJob.length;i++){
                            console.log("application job id:"+ this.applicationJob[i].employerId);
                            axios.get('api/employers/getbyid?id=' + this.applicationJob[i].employerId)
                                .then((response) => { 
                                    console.log(response.data);
                                    this.applicants.push(response.data);
                                    console.log("applicants data:" + this.applicants);
                                })
                        }
                        
                })
        },

      commandClick: function(args) {
        console.log(args);
        this.$router.push({name:'EmployeeProfil', params: {userId: args }});
      },
    
  },
  created(){
     this.getJobDetail();
    // console.log(this.model);
  },
  }
</script>
