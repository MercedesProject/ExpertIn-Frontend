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
    </base-header>

    <div class="container-fluid mt--5">
      <div class="row">
        <div class="col-xl-4 order-x2-1 mb-5 mb-xl-0">
          <div class="card card-profile shadow">
            <div class="row justify-content-center">
              <div class="col-lg-3 order-lg-2">
                <div class="card-profile-image">
                    <img
                      :src="this.userPhoto"
                      class="rounded-circle"
                    />
                </div>
              </div>
            </div>
            <div class="card-header border-0 text-center pt-8 pb-0  ">
                
            </div>
            <div class="card-body pt-0 pt-md-4">
              <div class="text-center">
                <h3>
                  {{this.$store.state.userData.firstName}}
                </h3>
                <div class="h5 font-weight-300">
                  <i class="ni location_pin mr-2"></i>{{this.company.companyCity}},{{this.company.companyCountry}}
                </div>
                <!-- <div class="h5 mt-4">
                  <i class="ni business_briefcase-24 mr-2"></i>Computer Engineer
                </div>
                <div>
                  <i class="ni education_hat mr-2"></i> Turkish German University
                </div> -->
                <hr class="my-4" />
                <div class=" line ">
                    <p>{{this.company.companyDescription}}</p>
                </div>
                <hr class="my-4" />
                <div class="col-lg-12 h5 mt-4">
                    <i class="fas fa-map-marker-alt"></i> Address: 
                  </div>
                  <div class="col-lg-12 ">
                    {{this.company.companyLocation}}
                  </div>
                  <div class="col-lg-12 h5 mt-4">
                    <i class="fas fa-envelope"></i> Email Adress: 
                  </div>
                  <div class="col-lg-12">
                    {{this.$store.state.userData.email}}
                  </div>
                  <div class="col-lg-12 h5 mt-4">
                    Website: 
                  </div>
                  <div class="col-lg-12">
                    {{this.company.companyWebSite}}
                  </div>
                  <div class="col-lg-12 h5 mt-4">
                    <i class="fas fa-phone-volume"></i> Phone Number: 
                  </div>
                  <div class="col-lg-12">
                    {{this.company.companyPhoneNumber}}
                  </div>
              </div>
            </div>
          </div>
        </div>
        <div class="line col-xl-8">
          <div >
          <card shadow type="secondary">
            <template v-slot:header>
              <div class="bg-white border-0">
                <div class="row align-items-center">
                  <div class="col-8">
                    <h3 class="mb-0">Edit Job</h3>
                  </div>
                  <div class="col-4 text-right">
                  </div>
                </div>
              </div>
            </template>

            <form>
              <div class="pl-lg-4">
                <div class="row">
                  <div class="col-lg-6 h5 mt-4">
                    <label ><b>Job Title:</b></label>
                        <base-input
                            type="text"
                            v-model="jobData.jobName"
                            required
                            id="address">
                        </base-input>
                  </div>
                  <div class="col-lg-6 h5 mt-4">
                    <label><b>Type:</b></label>
                    <base-input
                            type="select"
                            required
                            id="type">
                            <select v-model="jobData.jobType" class="form-control">
                              <option value="Backend">Backend</option>
                              <option value="Frontend">Frontend</option>
                              <option value="Fullstack">Fullstack</option>
                            </select>
                        </base-input>
                  </div>
                  <div class="col-lg-6 h5 mt-4">
                  <label><b>Payment:</b></label>
                       <base-input 
                            type="number"
                            v-model="jobData.jobSalary"
                            required
                            id="city">
                        </base-input>
                  </div>
                  <div class="col-lg-6 h5 mt-4">
                    <label><b>Form:</b></label>
                     <base-input  
                            type="select"
                            required
                            id="form">
                            <select v-model="jobData.jobForm" class="form-control">
                              <option value="Remote">Remote</option>
                              <option value="Office">Office</option>
                              <option value="Hybrid">Hybrid</option>
                            </select>
                        </base-input>
                  </div>
                      <div class="col-lg-6 h5 mt-4">
                    <label><b>Working days(per week)</b></label>
                     <base-input
                            type="text"
                            v-model="jobData.jobWeekDay"
                            required
                            id="time">
                        </base-input>
                  </div>
                  <div class="col-lg-6 h5 mt-4">
                    <label><b>Application Deadline:</b></label>
                     <base-input
                            type="date"
                            v-model="jobData.jobApplyLastDate"
                            required
                            id="deadline">
                        </base-input>
                  </div>
              
                  <div class="col-lg-6 h5 mt-4">
                    <label><b>Job Start Date:</b></label>
                     <base-input
                            type="date"
                            v-model="jobData.jobStartDate"
                            required
                            id="startDate">
                        </base-input>
                  </div>
                  <div class="col-lg-6 h5 mt-4">
                    <label><b>Job End Date:</b></label>
                     <base-input
                            type="date"
                            v-model="jobData.jobEndDate"
                            required
                            id="endDate">
                        </base-input>
                  </div>
                  <div class="col-lg-12 h5 mt-4">
                    <label><b>Description:</b></label>
                     <base-input>
                            <textarea class="form-control" 
                            rows="3"
                            v-model="jobData.jobDescription"
                            required
                            id="description"
                            ></textarea>
                           
                        </base-input>
                  </div>
                  <div class="offset-md-6  ">
                    <div class="d-flex justify-content-between">
                      <div class="row">
                        <div class="col-lg-3">
                        <router-link :to="{ name: 'companydashboard', params: { }}"><button size="m" @click="publishJob()" class="btn   btn-info saveJob">Publish</button></router-link>
                        </div>
                        <div class="col-lg-3">
                        <router-link :to="{ name: 'companydashboard', params: {  }}"><button size="m" @click="deleteDraftJob()" class="btn  btn-danger saveJob">Delete</button></router-link>
                        </div>
                        <div class="col-lg-6">
                        <router-link :to="{ name: 'companydashboard', params: {  }}"><button size="m"  @click="editJob()" class="btn  btn-default saveJob">Save as Draft</button></router-link>
                        </div>
                      
                      
                      </div>
                      
                    </div>
                    
                    
                    
                  </div>
                  
                </div>
              </div>
            </form>
          </card>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import axios from 'axios';

export default {
  name: "job-edit",
  data() {
    return {
      company:[],
      model: {
        companyId:null,
      },
      jobData:[],
      jobId:this.$route.params.jobId,
      userPhoto:'',
    };
  },
   methods:{
    deleteDraftJob(){
      axios.post('api/draftjobs/delete', this.jobId)
          .then((response) => {
            console.log("Draftjob Silindi.");
          })
    },
     publishJob(){
       this.jobData.jobId = 0;
       axios.post('api/jobs/add',this.jobData)
          .then((response) => {
               this.jobData.jobId = this.jobId
               axios.post('api/draftjobs/delete', this.jobData)
              .then((response) => {
            })
          })
     },
       getJobDetail() {
        axios.get('api/draftjobs/getbyid?id=' + this.jobId)
            .then((response) => {
                this.jobData = response.data;
               console.log(this.jobData);

            })
        },
        editJob(id){
          console.log(this.jobData);
          axios.post('api/draftjobs/update' , this.jobData)
            .then((response) => {

            })
        },
        getCompanyInformation(){
        axios.get('api/companies/getbyid?id=' + this.$store.state.userData.id)
              .then((response) => {
                  this.company = response.data;
                  this.model.companyId = this.company.companyId;
              })
        },
        isExistUserPhoto(){
          axios.get("/api/images/getimagesbyuserid?id="+this.$store.state.userData.id).then((response)=>{
                console.log(response.data.data[0]);
              if(response.data.data[0] != null){   
                this.userPhoto = require('../../../../../Projects/Expert-In-Backend-Release/WebApplication1/wwwroot/Uploads/Images/'+ response.data.data[0].imagePath);
              }
              
            });
        },
     },
     
    created(){
      this.getJobDetail();
      this.getCompanyInformation();
      this.isExistUserPhoto();
    },
};
</script>
<style></style>
