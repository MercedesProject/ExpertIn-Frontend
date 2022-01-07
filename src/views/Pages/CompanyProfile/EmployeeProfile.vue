<template>
  <div>
    <base-header
      class="header pb-8 pt-5 pt-lg-8 d-flex align-items-center"
      style="
        min-height: 600px;
        background-image: url(img/theme/img-1-1000x600.jpg);
        background-size: cover;
        background-position: center top;
      "
    >
      <!-- Mask -->
      <span class="mask bg-gradient-success opacity-8"></span>
      <!-- Header container -->
      
    </base-header>

    <div class="container-fluid mt--7">
      <div class="row">
        <div class="col-xl-4 order-x2-1 mb-5 mb-xl-0">
          <div class="card card-profile shadow">
            <div class="row justify-content-center">
              <div class="col-lg-3 order-lg-2">
                <div class="card-profile-image">
                  <a href="#">
                    
                    <img
                      
                      :src="this.userPhoto"
                      class="rounded-circle"
                      
                    />

                  </a>
                </div>
              </div>
            </div>
            <div
              class="card-header text-center border-0 pt-8 pt-md-4 pb-0 pb-md-4"
            >
              <div class="d-flex justify-content-between">
                
                <base-button size="sm" type="default" class="float-right" v-if="userType==2"
                  >Send Message</base-button
                >
                <base-button @click="downloadCV()" size="sm" type="primary" class="float-right" v-if="userType==2"
                  >Download CV</base-button
                >
              </div>
            </div>
            <div class="card-body pt-100 pt-md-4">
              
              <div class="text-center">
                <h3>
                  {{this.model.employerName}} {{this.model.employerSurname}}<span class="font-weight-light"></span>
                </h3>
                <div class="h5 font-weight-300" >
                  <i class="ni fa-location_pin" ></i>{{this.model.employerCity}}, {{model.employerCountry}}
                </div>
                <div class="h5 mt-4">
                  <i class="ni business_briefcase-24 mr-2"></i> {{this.education[0].educationStudy}}, {{this.education[0].educationDegree}}
                </div>
                <div>
                  <i class="ni education_hat mr-2"></i> {{this.education[0].educationSchool}}
                </div>
                <hr class="my-4" />
                <div class=" line ">
                  <div class="col-lg-12 h5 mt-4">
                    <span class="avatar avatar-sm rounded-circle" style=" width:25px; height:25px ">
                    <img alt="Image placeholder" src="img/icons/github.png" >
                    </span>
                    <span>Github Url:</span>
                     
                  </div>
                  <div class="col-lg-12 ">
                     <a href="https://github.com/busrasari">{{this.model.employerGithub}}</a>
                  </div>
                  <div class="col-lg-12 h5 mt-4">
                    <i class="fas fa-envelope"></i>Email Adress: 
                  </div>
                  <div class="col-lg-12">
                     {{this.model.employerEMail}}
                  </div>
                  <div class="col-lg-12 h5 mt-4">
                    <span class="avatar avatar-sm rounded-circle" style=" width:25px; height:25px ">
                    <img alt="Image placeholder" src="img/icons/linkedin.png" >
                    </span>
                    <span>Linkedin Url:</span>
                     
                  </div>
                  <div class="col-lg-12 ">
                    <a href="#">{{this.model.employerLinkedin}}</a>
                  </div>
                </div>
                <hr class="my-4" />
                
                <!-- <p>I am a final year student of Computer Engineering at Turkish German University.</p> -->
                <p>{{this.model.employerAboutMe}}</p>    
                
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
                    
                  </div>
                  <div class="col-4 text-right">
                    
                  </div>
                </div>
              </div>
            </template>

            <form>
              <!-- Contact Information -->
              <h6 class="heading-small text-muted mb-4">Contact information</h6>
              <div class="pl-lg-4">
                <div class="row">
                  <b-col lg="12">
                    <div class="form-group row">
                      <label class="col-md-5 col-form-label form-control-label">Adress</label>
                      <div class="col-md-10">
                        {{this.model.employerLocation}}
                    </div>
                  </div> 
                  </b-col>
                  <b-col lg="4">
                    <div class="form-group row">
                      <label class="col-md-7 col-form-label form-control-label">Phone Number</label>
                      <div class="col-md-10">
                        {{this.model.employerPhoneNumber }}
                      </div>
                    </div>
                  </b-col>
                  <b-col lg="4">
                    <div class="form-group row">
                      <label class="col-md-5 col-form-label form-control-label">City</label>
                      <div class="col-md-10">
                        {{this.model.employerCity}}
                    </div>
                  </div> 
                  </b-col>
                  <b-col lg="4">
                    <div class="form-group row">
                      <label class="col-md-5 col-form-label form-control-label">Country</label>
                      <div class="col-md-10">
                        {{this.model.employerCountry}}
                      </div>
                    </div>
                  </b-col>                  


                </div>
                
              </div>
              <hr class="my-4" />
              <!-- EDUCATION INFORMATION -->
              <h6 class="heading-small text-muted mb-4">EDUCATION INFORMATION</h6>
              <div class="pl-lg-4">
                <div class="row">
                  <b-col lg="4">
                    <div class="form-group row">
                      <label class="col-md-5 col-form-label form-control-label">School</label>
                      <div class="col-md-15">
                        {{this.education[0].educationSchool}}
                    </div>
                  </div> 
                  </b-col>
                  <b-col lg="4">
                    <div class="form-group row">
                      <label class="col-md-5 col-form-label form-control-label">Degree</label>
                      <div class="col-md-10">
                        {{this.education[0].educationDegree}}
                      </div>
                    </div>
                  </b-col>
                  <b-col lg="4">
                    <div class="form-group row">
                      <label class="col-md-5 col-form-label form-control-label">Study</label>
                      <div class="col-md-10">
                        {{this.education[0].educationStudy}}
                    </div>
                  </div> 
                  </b-col>
                  <b-col lg="6">
                    <div class="form-group row">
                      <label class="col-md-5 col-form-label form-control-label">Starting Date</label>
                      <div class="col-md-10">
                        {{this.education[0].educationStartingDate}}
                      </div>
                    </div>
                  </b-col>                  
                  <b-col lg="6">
                    <div class="form-group row">
                      <label class="col-md-5 col-form-label form-control-label">Ending Date</label>
                      <div class="col-md-10">
                        {{this.education[0].educationEndingDate}}
                      </div>
                    </div>
                  </b-col>  

                </div>
                
              </div>              

              <hr class="my-4" />
              <!-- EXPERIENCE -->
              <h6 class="heading-small text-muted mb-4">EXPERIENCE</h6>
              <div class="pl-lg-4">
                <div class="row">
                  <b-col lg="4">
                    <div class="form-group row">
                      <label class="col-md-5 col-form-label form-control-label">Title</label>
                      <div class="col-md-10">
                        {{this.experiences[0].experienceTitle}}
                    </div>
                  </div> 
                  </b-col>
                  <b-col lg="4">
                    <div class="form-group row">
                      <label class="col-md-5 col-form-label form-control-label">Company</label>
                      <div class="col-md-10">
                        {{this.experiences[0].experienceCompanyName}}
                      </div>
                    </div>
                  </b-col>
                  <b-col lg="4">
                    <div class="form-group row">
                      <label class="col-md-5 col-form-label form-control-label">Location</label>
                      <div class="col-md-10">
                        {{this.experiences[0].experienceLocation}}
                    </div>
                  </div> 
                  </b-col>
                  <b-col lg="6">
                    <div class="form-group row">
                      <label class="col-md-5 col-form-label form-control-label">Starting Date</label>
                      <div class="col-md-10">
                        {{this.experiences[0].experienceStartingDate}}
                      </div>
                    </div>
                  </b-col>                  
                  <b-col lg="6">
                    <div class="form-group row">
                      <label class="col-md-5 col-form-label form-control-label">Ending Date</label>
                      <div class="col-md-10">
                        {{this.experiences[0].experienceEndingDate}}
                      </div>
                    </div>
                  </b-col>  
                  <b-col lg="12">
                    <div class="form-group row">
                      <label class="col-md-5 col-form-label form-control-label">About Experience</label>
                      <div class="col-md-10">
                        <p>{{this.experiences[0].experienceDescription}}</p>
                      </div>
                    </div>
                  </b-col> 
                </div>
                
              </div>               

              <hr class="my-4" />
              <!-- SKILL-->
              <h6 class="heading-small text-muted mb-4">SKILL</h6>
              <div class="pl-lg-4">
                <div class="row">
                  <b-col lg="2">
                    <badge rounded type="default">Java</badge>
                    
                    

                  </b-col>
                  <b-col lg="2">
                    <badge rounded type="default">C#</badge>
                   

                  </b-col>
                  <b-col lg="2">
                    <badge rounded type="default">.Net Core</badge>
                   

                  </b-col>
                 <b-col lg="2">
                    <badge rounded type="default">Python</badge>
                                       
                  </b-col>
                  <b-col lg="2">
                    <badge rounded type="default">C/C++</badge>
          
                  </b-col>
                  <b-col lg="2">
                    <badge rounded type="default">Unity</badge>

                  </b-col>                 
                </div>
                
              </div>
              <hr class="my-4" />
              <!-- PROJECT-->
              <h6 class="heading-small text-muted mb-4">PROJECT</h6>
              <div class="pl-lg-4">
                <div class="row">
                  <b-col lg="6">
                    <div class="form-group row">
                      <label class="col-md-5 col-form-label form-control-label">Project Name</label>
                      <div class="col-md-10">
                        <base-input placeholder="Jon"></base-input>
                    </div>
                  </div> 
                  </b-col>
                  <b-col lg="6">
                    <div class="form-group row">
                      <label class="col-md-5 col-form-label form-control-label">Url</label>
                      <div class="col-md-10">
                        <base-input placeholder="Jon"></base-input>
                      </div>
                    </div>
                  </b-col>
                  <b-col lg="6">
                    <div class="form-group row">
                      <label class="col-md-5 col-form-label form-control-label">Starting Date</label>
                      <div class="col-md-10">
                        <base-input placeholder="Jon"></base-input>
                    </div>
                  </div> 
                  </b-col>
                  <b-col lg="6">
                    <div class="form-group row">
                      <label class="col-md-5 col-form-label form-control-label">Ending Date</label>
                      <div class="col-md-10">
                        <base-input placeholder="Jon"></base-input>
                      </div>
                    </div>
                  </b-col> 
                  <b-col lg="12">
                    <b-form-group label="Description" label-class="form-control-label" class="mb-0" label-for="about-form-textaria">
                    <!--  <label class="form-control-label">Description for Project</label> -->
                      <b-form-textarea  rows="4" value="" id="about-form-textaria" placeholder="A few words about you ..."></b-form-textarea>
                    </b-form-group>
                  </b-col>                 
                  
 
                </div>
                
              </div>               

              <hr class="my-4" />
              <!-- CERTIFICATE-->
              <h6 class="heading-small text-muted mb-4">CERTIFICATE</h6>
              <div class="pl-lg-4">
                <div class="row">
                  <div class="col-lg-6">
                    
                  </div>
                  <div class="col-lg-6">
                    
                  </div>
                </div>
                
              </div>
              <hr class="my-4" />
              
              
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
  name: "user-profile",

  data() {
    return {
      userType:this.$store.state.userData.userTypesID,
      model:[],
      education:[],
      experiences:[],
      employerId: null,
      image: [],
      userPhoto: "img/user.png",
      curriculumVitaePath:"",
    };
  },
  methods: {
    isExistUserPhoto(){
      axios.get("/api/images/getimagesbyuserid?id="+this.$route.params.userId).then((response)=>{
            console.log(response.data.data[0]);
          if(response.data.data[0] != null){   
            this.userPhoto = require('../../../../../Projects/Expert-In-Backend-Release/WebApplication1/wwwroot/Uploads/Images/'+ response.data.data[0].imagePath);
          }
          
        });
    },
    getUserInformation(){
      axios.get('api/employers/getbyid?id=' + this.$route.params.userId)
            .then((response) => {
                console.log(response);
                this.model = response.data;
                this.employerId = this.model.employerId

                
                axios.get('api/educations/getbyid?id=' + this.employerId)
                    .then((response) => {
                        console.log(response);
                        this.education = response.data;
                        //this.Education.educationId = this.education[0].educationId;
                    })
                    .catch(function (error) {
                        alert(error);
                    });
                axios.get('api/experiences/getbyid?id=' + this.employerId)
                    .then((response) => {
                        console.log(response);
                        this.experiences = response.data;
                        
                    })
                    .catch(function (error) {
                        alert(error);
                    });
            })
            .catch(function (error) {
                alert(error);
            });
    },
    // isExistEmployeeCV(){
    //   axios.get("/api/curriculumvitaes/getimagesbyuserid?id="+this.$store.state.userData.id).then((response)=>{
    //       console.log(response.data.data[0]);
    //       if(response.data.data[0] != null){   
    //         this.userCV = require('../../../../../Projects/Expert-In-Backend-Release/WebApplication1/wwwroot/Uploads/CurriculumVitaes/' + response.data.data[0].curriculumVitaePath);
    //       }
          
    //     });
    // },
    downloadCV(){
      axios.get("/api/curriculumvitaes/getimagesbyuserid?id="+this.$route.params.userId).then((response)=>{
          console.log(response.data.data[0]);
          if(response.data.data[0] != null){   
            this.curriculumVitaePath = 'C:\\Users\\arsla\\Documents\\GitHub\\Projects\\Expert-In-Backend-Release\\WebApplication1\\wwwroot\\Uploads\\CurriculumVitaes\\' + response.data.data[0].curriculumVitaePath;
            //this.userCV = 'C:\\Users\\arsla\\Documents\\GitHub\\Projects\\Expert-In-Backend-Release\\WebApplication1\\wwwroot\\Uploads\\CurriculumVitaes\\' + response.data.data[0].curriculumVitaePath;
            console.log("CV path: " + this.curriculumVitaePath);
            axios({
                    url: "/api/curriculumvitaes/download?curriculumvitaepath="+ this.curriculumVitaePath, // File URL Goes Here
                    method: 'GET',
                    responseType: 'blob',
                }).then((response) => {
                     var FILE = window.URL.createObjectURL(new Blob([response.data]));
                     
                     var docUrl = document.createElement('a');
                     docUrl.href = FILE;
                     docUrl.setAttribute('download', 'file.pdf');
                     document.body.appendChild(docUrl);
                     docUrl.click();
                });
            // axios.get("/api/curriculumvitaes/download?curriculumvitaepath="+ this.curriculumVitaePath).then((response)=>{
            //     console.log(response);
                    
            //   });
          }
          
        });
      
    },

    
  },

  created(){
    this.getUserInformation();
    //console.log(this.model);
    this.isExistUserPhoto();
    // this.isExistEmployeeCV();
  }
};
</script>
<style></style>
