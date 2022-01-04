<template>
    <b-card no-body class="border border-info" >
        <b-card-header class="border-0 border-primary ">
            <h3 class="mb-0 text-center">Draft Job Advertisements</h3>
        </b-card-header>

        <el-table class="table-responsive table b-table table-hover table-sticky-header table-bordered thead-dark"
                  header-row-class-name="thead-light"
                  :data="projects">
            <el-table-column label="Job Title"
                             min-width="310px"
                             prop="name">
                <template v-slot="{row}">
                    <b-media no-body class="align-items-center">
                        
                        <b-media-body>
                            <span class="font-weight-600 name mb-0 text-sm">{{row.title}}</span>
                        </b-media-body>
                    </b-media>
                </template>
            </el-table-column>
            

            <el-table-column label="Action" min-width="160px">
                <div class="d-flex justify-content-between">
                    
                    
                    <base-button size="m" type="default" class="float-right" v-on:click=commandClick(row)>Edit</base-button>
                    
                    <a href="#!" class="btn btn-info">Post</a>
                    
                </div>
                
                
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
  
  export default {
    name: 'light-table',
    components: {
      [Table.name]: Table,
      [TableColumn.name]: TableColumn
    },
    data() {
      return {
        projects,
        currentPage: 1,
        model:[],
        draftJobs:[],
        user:{
            companyId:'',

        }
      };
    },
    methods: {
      // getUserInformation(){
      //   axios.get('api/companies/getbyid?id=' + this.$store.state.userData.id)
      //         .then((response) => {
      //             console.log(response);
      //             this.model = response.data;
      //             this.user.companyId = this.model.companyId;
      //             console.log("Bu company iddir"+this.user.companyId);
      //             axios.get('api/draftjobs/getallbycompanyid?id=' + this.user.companyId)
      //               .then((response) => {
      //                   console.log(response);
      //                   this.draftJobs = response.data;
      //                   console.log(this.draftJobs);
      //               })
                    
      //         })
      // },

      commandClick: function(args) {
      console.log(args);
     
      //this.$router.push({name:'JobDetail', params: { jobId: args.jobId}});
      },
    
  },
  created(){
    // this.getUserInformation();
    // console.log(this.model);
    
    
  },
  
  }
</script>
