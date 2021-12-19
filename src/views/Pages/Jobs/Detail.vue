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
                      src="img/theme/profil.jpg"
                      class="rounded-circle"
                    />
                </div>
              </div>
            </div>
            <div class="card-header border-0 text-center pt-8 pb-0  ">
               <a href="#" class="btn btn-sm btn-default ">Message</a> 
            </div>
            <div class="card-body pt-0 pt-md-4">
              <div class="text-center">
                <h3>
                  Mercedes QLM
                </h3>
                <div class="h5 font-weight-300">
                  <i class="ni location_pin mr-2"></i>Istanbul, Turkey
                </div>
                <!-- <div class="h5 mt-4">
                  <i class="ni business_briefcase-24 mr-2"></i>Computer Engineer
                </div>
                <div>
                  <i class="ni education_hat mr-2"></i> Turkish German University
                </div> -->
                <hr class="my-4" />
                <div class=" line ">
                    <p>Buraya Neler Eklenebilir ?</p>
                </div>
                <hr class="my-4" />
                <div class="col-lg-12 h5 mt-4">
                    <i class="fas fa-map-marker-alt"></i> Address: 
                  </div>
                  <div class="col-lg-12 ">
                    {{ dummyData.address}}
                  </div>
                  <div class="col-lg-12 h5 mt-4">
                    <i class="fas fa-envelope"></i> Email Adress: 
                  </div>
                  <div class="col-lg-12">
                    busrasari@gmail.com
                  </div>
                  <div class="col-lg-12 h5 mt-4">
                    <i class="fas fa-phone-volume"></i> Phone Number: 
                  </div>
                  <div class="col-lg-12">
                    05000
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
                    <h3 class="mb-0">Detail</h3>
                  </div>
                  <div class="col-4 text-right">
                      <a href="#" class="btn btn-sm btn-default ">Message</a> 
                    <button  @click=ApplyJob() class="btn btn-sm btn-success">Apply</button>
                  </div>
                </div>
              </div>
            </template>

            <form>
              <div class="pl-lg-4">
                <div class="row">
                  <!-- <div class="col-lg-6 h5 mt-4">
                    <label><b>Adress:</b></label>
                    deneme
                  </div>
                  <div class="col-lg-6 h5 mt-4">
                    <label><b>Phone Number:</b></label>
                    Phone Number:
                  </div>
                  <div class="col-lg-6 h5 mt-4">
                    <label><b>City:</b></label>
                    City
                  </div>
                  <div class="col-lg-6 h5 mt-4">
                    <label><b>Country:</b></label>
                    Country
                  </div> -->
                  <div class="col-lg-6 h5 mt-4">
                    <label ><b>Job:</b></label>
                       <b-form-text class="form-control">{{jobData.jobName}}</b-form-text>
                  </div>
                  <div class="col-lg-6 h5 mt-4">
                    <label><b>Type:</b></label>
                    <b-form-text class="form-control">{{jobData.jobType}}</b-form-text>
                  </div>
                  <div class="col-lg-6 h5 mt-4">
                  <label><b>Salary:</b></label>
                       <b-form-text class="form-control">{{jobData.jobSalary}}</b-form-text>
                  </div>
                  <div class="col-lg-6 h5 mt-4">
                    <label><b>Form:</b></label>
                     <b-form-text class="form-control">{{jobData.jobForm}}</b-form-text>
                  </div>
                      <div class="col-lg-6 h5 mt-4">
                    <label><b>Time:</b></label>
                     <b-form-text class="form-control">{{jobData.username}}</b-form-text>
                  </div>
                  <div class="col-lg-6 h5 mt-4">
                    <label><b>Deadline:</b></label>
                     <b-form-text class="form-control">{{jobData.username}}</b-form-text>
                  </div>
              
                  <div class="col-lg-6 h5 mt-4">
                    <label><b>Start Date:</b></label>
                     <b-form-text class="form-control">{{jobData.username}}</b-form-text>
                  </div>
                  <div class="col-lg-6 h5 mt-4">
                    <label><b>End Date:</b></label>
                     <b-form-text class="form-control">{{jobData.username}}</b-form-text>
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
      </div>
    </div>
  </div>
</template>
<script>
import axios from 'axios';

export default {
  name: "job-detail",
  data() {
    return {
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
    };
  },
   methods:{
     ApplyJob: function() {
         alert(this.$route.params.jobId);
      },
       getJobDetail() {
        axios.get('api/jobs/getbyid?id=' + this.$route.params.jobId)
            .then((response) => {
                console.log(response);
                this.jobData = response.data;
            })
            .catch(function (error) {
                alert(error);
            });
        },
     },
    created(){
      this.getJobDetail();
    }
};
</script>
<style></style>
