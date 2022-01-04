<template>
    <b-card no-body class="border border-info" >
        <b-card-header class="border-0 border-primary ">
            <h3 class="mb-0 text-center">Applicants</h3>
        </b-card-header>

        <el-table class="table-responsive table b-table table-hover table-sticky-header table-bordered thead-dark"
                  header-row-class-name="thead-light"
                  :data="projects">
            <el-table-column label="Applicant"
                             min-width="280px"
                             prop="name">
                <template v-slot="{row}">
                    <b-media no-body class="align-items-center">
                        <a href="" class="avatar rounded-circle mr-3">
                            <router-link to="/Job/CompanyDetail/:jobId">
                                <img alt="Image placeholder" :src="row.img">
                            </router-link>
                        </a>
                        <b-media-body>
                            <span class="font-weight-600 name mb-0 text-sm">{{row.title}}</span>
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
                <div class="d-flex justify-content-between">
                    
                    
                    <base-button size="m" type="default" class="float-right" v-on:click=commandClick(row)>Review</base-button>
                    
                    
                    
                </div>
                
                
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
        currentPage: 1,
        user:{
            companyId:'',
        },
        jobs:[],
      };
    },
    methods: {
    //   getUserInformation(){
    //     axios.get('api/companies/getbyid?id=' + this.$store.state.userData.id)
    //           .then((response) => {
    //               console.log(response);
    //               this.model = response.data;
    //               this.user.companyId = this.model.companyId;
    //               console.log("Bu company iddir"+this.user.companyId);
    //               axios.get('api/jobs/getallbycompanyid?id=' + this.user.companyId)
    //                 .then((response) => {
    //                     console.log(response);
    //                     this.jobs = response.data;
    //                     console.log(this.jobs);
    //                 })
    //                 .catch(function (error) {
    //                     alert(error);
    //                 });
    //           })
    //           .catch(function (error) {
    //               alert(error);
    //           });
    //   },

    //   commandClick: function(args) {
    //   console.log(args);
     
    //   //this.$router.push({name:'JobDetail', params: { jobId: args.jobId}});
    //   },
    
  },
  created(){
    // this.getUserInformation();
    // console.log(this.model);
  },
  }
</script>
