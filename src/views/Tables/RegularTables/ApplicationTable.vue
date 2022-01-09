<template>
    <b-card no-body class="border border-info" >
        <b-card-header class="border-0 border-primary ">
            <h3 class="mb-0 text-center">Posted Job Advertisements</h3>
        </b-card-header>

        <el-table class="table-responsive table b-table table-hover table-sticky-header table-bordered thead-dark"
                  header-row-class-name="thead-light"
                  :data="jobs"
                  >
            <el-table-column label="Job Title"
                             min-width="200px"
                             
                             >
                
                <template v-slot="{row}">
                    <b-media no-body class="align-items-center">
                        <b-media-body>
                            <a href="#!"  v-on:click=commandClick(row.jobId)>
                                <span class="font-weight-600 name mb-0 text-sm">{{row.jobName}}</span>
                            </a>
                                
                                                    
                        </b-media-body>
                        </b-media>
                </template>
            </el-table-column>
            <el-table-column label="Job Form"
                             min-width="110px"
                             >
                <template v-slot="{row}">
                    <b-media no-body class="align-items-center">
                        
                        <b-media-body>
                            <span class="font-weight-600 name mb-0 text-sm">{{row.jobForm}}</span>
                        </b-media-body>
                    </b-media>
                </template>
            </el-table-column>
            <el-table-column label="Job Type"
                             min-width="130px"
                             
                             >
                <template v-slot="{row}">
                    <b-media no-body class="align-items-center">
                        
                        <b-media-body>
                            <span class="font-weight-600 name mb-0 text-sm">{{row.jobType}}</span>
                        </b-media-body>
                    </b-media>
                </template>
            </el-table-column>
            <!--<el-table-column label="Salary"
                             prop="budget"
                             min-width="140px">
            </el-table-column>
            -->
           

            <el-table-column label="Applicants" min-width="170px"  >
                <template >
                    <div class="avatar-group" >
                    <a href="#" class="avatar avatar-sm rounded-circle" data-toggle="tooltip"
                       data-original-title="Ryan Tompson">
                        <img alt="Image placeholder" src="img/theme/team-1.jpg">
                    </a>
                    <a href="#" class="avatar avatar-sm rounded-circle" data-toggle="tooltip"
                       data-original-title="Romina Hadid">
                        <img alt="Image placeholder" src="img/theme/team-3.jpg">
                    </a>
                    <a href="#" class="avatar avatar-sm rounded-circle" data-toggle="tooltip"
                       data-original-title="Alexander Smith">
                        <img alt="Image placeholder" src="img/theme/team-2.jpg">
                    </a>
                    <!-- <a href="#" class="avatar avatar-sm rounded-circle" data-toggle="tooltip"
                       data-original-title="Jessica Doe">
                        <img alt="Image placeholder" :src="this.userPhotos[3]">
                    </a> -->
                </div>
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
  import projects from './../projects'
  import { Table, TableColumn} from 'element-ui'
  import axios from 'axios'
  
  export default {
    name: 'light-table',
    components: {
      [Table.name]: Table,
      [TableColumn.name]: TableColumn,
    },
    data() {
      return {
        model:[],
        projects,
        currentPage: 1,
        user:{
            companyId:'',
        },
        jobs:[],
        employees:[],
        


      };
    },
    methods: {
      getUserInformation(){
        axios.get('api/companies/getbyid?id=' + this.$store.state.userData.id)
              .then((response) => {
                  console.log(response);
                  this.model = response.data;
                  this.user.companyId = this.model.companyId;
                  console.log("Bu company iddir"+this.user.companyId);
                  axios.get('api/jobs/getallbycompanyid?id=' + this.user.companyId)
                    .then((response) => {
                        console.log(response);
                        this.jobs = response.data;
                        console.log(this.jobs);
                        for(let i=0; i<this.jobs.length; i++){
                        axios.get('api/applicationjobs/getallemployerandphoto?JobId=' + this.jobs[i].jobId)
                        .then((response) => {
                            //console.log(response.data);
                            // this.employees[i] = response.data[i];
                            // console.log(this.employees[i]);
                             this.jobs.push(response.data)
                             console.log("jobs arrayi bilgileri:"+this.jobs);
                        
                    })
                  }
  
                    })
                    
                  
                  
                   
              })
              
      },

    commandClick: function(args) {
        console.log("bu sayfaya yönlendiriliyor:" + args);
        this.$router.push({name:'JobCompanyDetail', params: { jobId: args}});
      },
    
  },
  created(){
    this.getUserInformation();
  },

  }
</script>
