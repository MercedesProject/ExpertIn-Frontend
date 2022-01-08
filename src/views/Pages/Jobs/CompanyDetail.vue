<template>
  <div>
    <base-header
      class="header pb-8 pt-5 pt-lg-8 d-flex align-items-center"
      style="
        background-image: url(img/theme/img-1-1000x600.jpg);
        background-size: cover;
        background-position: center top;
      "
    >
      <!-- Mask -->
      <span class="mask bg-gradient-success opacity-8"></span>
      <!-- Header container -->
      <div class="container-fluid align-items-center">
        <div class="line " >
          <div class="col-xl-12 " >
          <div class="card card-profile shadow">

            <div
              class="card-header text-center border-0 pt-8 pt-md-4 pb-0 pb-md-4"
            >
              <div class="d-flex justify-content-between">
                <h1 size="sm" type="default" class="mr-4"
                  >{{jobData.jobName}}</h1>
                  
                  <div class="row float-right">

                    <button   class="btn btn-sm btn-danger ">Delete this Advertisement</button>
                  </div>
                  
                
              </div>
            </div>
            
          </div>
        </div>



        </div>
      </div>
    </base-header>

    <div class="container-fluid mt--7 " >
      <div class="row col-xl-12 " style="margin-left:37px">
          <div class="row col-xl-6">
          <div >
          <card shadow type="secondary">
            <template v-slot:header>
              <div class="bg-white border-0">
                <div class="row align-items-center">
                  <div class="col-8">
                    <h3 class="mb-0">Job Detail</h3>
                  </div>
                  
                </div>
              </div>
            </template>

            <form>
              <div class="pl-lg-4">
                <div class="row">
                 <div class="col-lg-6 h5 mt-4">
                    <label ><b>Job Title:</b></label>
                       <b-form-text class="form-control">{{jobData.jobName}}</b-form-text>
                  </div>
                  <div class="col-lg-6 h5 mt-4">
                    <label><b>Type:</b></label>
                    <b-form-text class="form-control">{{jobData.jobType}}</b-form-text>
                  </div>
                  <div class="col-lg-6 h5 mt-4">
                  <label><b>Payment:</b></label>
                       <b-form-text class="form-control">{{jobData.jobSalary}}</b-form-text>
                  </div>
                  <div class="col-lg-6 h5 mt-4">
                    <label><b>Form:</b></label>
                     <b-form-text class="form-control">{{jobData.jobForm}}</b-form-text>
                  </div>
                      <div class="col-lg-6 h5 mt-4">
                    <label><b>Working days(per week)</b></label>
                     <b-form-text class="form-control">{{jobData.jobWeekDay}}</b-form-text>
                  </div>
                  <div class="col-lg-6 h5 mt-4">
                    <label><b>Application Deadline:</b></label>
                     <b-form-text class="form-control">{{jobData.jobApplyLastDate}}</b-form-text>
                  </div>
              
                  <div class="col-lg-6 h5 mt-4">
                    <label><b>Job Start Date:</b></label>
                     <b-form-text class="form-control">{{jobData.jobStartDate}}</b-form-text>
                  </div>
                  <div class="col-lg-6 h5 mt-4">
                    <label><b>Job End Date:</b></label>
                     <b-form-text class="form-control">{{jobData.jobEndDate}}</b-form-text>
                  </div>
                  <div class="col-lg-12 h5 mt-4">
                    <label><b>Description:</b></label>
                    <b-form-text class="form-control">{{jobData.jobDescription}}</b-form-text>
                  </div>
                 
                  
                  
                </div>
              </div>
            </form>
          </card>
          </div>
        
          
          
          </div>
        
          <div class="row col-xl-6 ">
            <b-container  class="">
                    <b-row class="">
                      <b-col xl="12" class=" mb-5 mb-xl-0" border-variant="success" header="Success" align="center">
                        <applicants> </applicants>

                      </b-col>
                      
                    </b-row>
                </b-container>
          </div>
          
      </div>
          <!-- <div class="line col-xl-12">
            <div >
              <card shadow type="secondary">
                <template v-slot:header>
                  
                </template>
                
              </card>
            </div>
             
          </div> -->
    </div>
        
      
  </div>
 
</template>
<script>
import axios from 'axios';


import Applicants from '../../Tables/RegularTables/Applicants.vue';
import App from '../../../App.vue';

export default {
  name: "job-detail",
  components: {
    Applicants,
    App,
    },
  data() {
    return {
      company:[],
      model: {
        username: "1",
        email: "2",
        firstName: "3",
        lastName: "4",
        address: "",
        city: "",
        country: "",
        zipCode: "",
        about: "",
      },
      dummyData: {
        username: "1",
        email: "2",
        firstName: "3",
        lastName: "4",
        address: "kavakyelisokak",
        city: "6",
        country: "7",
        zipCode: "8",
        about: "9",
      },
      jobData:[],
      applicationJob:{
        // ApplicationJobId: 0,
        JobId : this.$route.params.jobId,
        EmployerId : this.$store.state.userData.id,
        ApplicationJobStatus : 'pending'
      }
    };
  },
   methods:{
     getJobDetail() {
        axios.get('api/jobs/getbyid?id=' + this.$route.params.jobId)
            .then((response) => {
                this.jobData = response.data;
                console.log(this.jobData);
                
            })
        },
     },
    created(){
     this.getJobDetail();
    }
};
</script>
<style></style>
