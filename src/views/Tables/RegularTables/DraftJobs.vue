<template>
    <b-card no-body class="border border-info" >
        <b-card-header class="border-0 border-primary ">
            <h3 class="mb-0 text-center">Draft Job Advertisements</h3>
        </b-card-header>

        <el-table class="table-responsive table b-table table-hover table-sticky-header table-bordered thead-dark"
                  header-row-class-name="thead-light"
                  :data="draftJobs"
                  >
            <el-table-column label="Job Title"
                             min-width="190px"
                             prop="name"
                             >
                <template v-slot="{row}">
                    <b-media no-body class="align-items-center">
                        
                        <b-media-body>
                            <span class="font-weight-600 name mb-0 text-sm">{{row.jobName}}</span>
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
            

            <el-table-column label="Action" min-width="225px" >
                <template v-slot="{row}">
                <b-media no-body class="align-items-center">
                    <b-media-body>
                        <base-button size="m" type="default" class="order-1 float-right" @click="commandClick(row.jobId)">Edit</base-button>
                        <a href="#!" class="order-2 btn btn-info" @click="publish(row)">Publish</a>
                    </b-media-body>
                </b-media>
                </template>
                
            </el-table-column>

             
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
  import ApplicationTable from '@/views/Tables/RegularTables/ApplicationTable.vue';
  export default {
    name: 'light-table',
    components: {
      [Table.name]: Table,
      [TableColumn.name]: TableColumn,
      ApplicationTable,
    },
    data() {
      return {
        projects,
        currentPage: 1,
        model:[],
        draftJobs:[],
        // fields:[
        //     { key: 'jobName', label: 'Job Title'},
        //     { key: 'jobType', label: 'Job Type'},
        //     { key: 'jobForm', label: 'Job Form'},
        //   { key: 'action', label: 'Action'},

        // ],
        user:{
            companyId:null,

        },
        published:{
            
        },
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
                  axios.get('api/draftjobs/getallbycompanyid?id=' + this.user.companyId)
                    .then((response) => {
                        console.log(response);
                        this.draftJobs = response.data;
                        console.log(this.draftJobs);
                    })
                    
              })
      },

      commandClick: function(args) {
        console.log("edit tuşuna basıldı:"+args.jobId);
        this.$router.push({name:'JobEdit', params: { jobId: args}});
      },
      publish(args) {
          console.log("Tıklanan veri post ediliyor:"+ args.jobId);
          this.published = {
                                companyId: args.companyId,
                                jobName : args.jobName,
                                jobDescription : args.jobDescription,
                                jobType: args.jobType,
                                jobForm: args.jobForm,
                                jobSalary : args.jobSalary,
                                jobStartDate: args.jobStartDate,
                                jobEndDate: args.jobEndDate,
                                jobApplyLastDate: args.jobApplyLastDate,
                                jobWeekDay: args.jobWeekDay
                            };
          console.log(this.published);
          axios.post('api/jobs/add',  this.published)
              .then((response) => {
                  console.log(response);

                  axios.post('api/draftjobs/delete', args)
                    .then((response) => {
                        this.getUserInformation();
                    })
                    
              })
      },

      
    
  },
  created(){
     this.getUserInformation();
     console.log(this.draftJobs);
  
  },
  
  }
</script>
