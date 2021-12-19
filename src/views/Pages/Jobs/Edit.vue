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
                      src="../../../../public/mercedes.png"
                      
                    />
                </div>
              </div>
            </div>
            <div class="card-header border-0 text-center pt-8 pb-0  ">
                
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
                    {{ model.address}}
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
                    <h3 class="mb-0">Edit Job</h3>
                  </div>
                  <div class="col-4 text-right">
                    <button  @click=editJob() class="btn btn-sm btn-primary saveJob">Save</button>
                  </div>
                </div>
              </div>
            </template>

            <form>
              <div class="pl-lg-4">
                <div class="row">
                  <div class="col-lg-6 h5 mt-4">
                    <label ><b>Job:</b></label>
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
                            v-model="jobData.jobType"
                            required
                            id="jobType">
                            <select class="form-control">
                              <option>Backend</option>
                              <option>Frontend</option>
                              <option>Fullstack</option>
                            </select>
                        </base-input>
                  </div>
                  <div class="col-lg-6 h5 mt-4">
                  <label><b>Salary:</b></label>
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
                            v-model="jobData.jobForm"
                            required
                            id="form">
                            <select class="form-control">
                              <option>Remote</option>
                              <option>Office</option>
                              <option>3</option>
                              <option>4</option>
                              <option>5</option>
                            </select>
                        </base-input>
                  </div>
                      <div class="col-lg-6 h5 mt-4">
                    <label><b>Time:</b></label>
                     <base-input
                            type="text"
                            v-model="model.time"
                            required
                            id="time">
                        </base-input>
                  </div>
                  <div class="col-lg-6 h5 mt-4">
                    <label><b>Deadline:</b></label>
                     <base-input
                            type="date"
                            v-model="model.deadline"
                            required
                            id="deadline">
                        </base-input>
                  </div>
              
                  <div class="col-lg-6 h5 mt-4">
                    <label><b>Start Date:</b></label>
                     <base-input
                            type="date"
                            v-model="model.startDate"
                            required
                            id="startDate">
                        </base-input>
                  </div>
                  <div class="col-lg-6 h5 mt-4">
                    <label><b>End Date:</b></label>
                     <base-input
                            type="date"
                            v-model="model.endDate"
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
                  <div class="offset-md-10 col-md-2 text-right">
                    <button  @click=editJob() class="btn btn-sm btn-primary saveJob">Save</button>
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
      model: {
        username: "1",
        email: "2",
        firstName: "3",
        lastName: "4",
        address: "kavakyeli",
        phone:"",
        city: "",
        country: "",
        zipCode: "",
        about: "",
      },
      jobData:[]
    };
  },
   methods:{
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
        editJob(id){
          alert(this.$route.params.jobId);
        }
     },
    created(){
      this.getJobDetail();
    }
};
</script>
<style></style>
