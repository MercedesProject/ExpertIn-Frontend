<template>
  <div class="pb-5 pt-md-8 bg-gradient-success">
    <base-header class="pb-5 pt-md-8 bg-gradient-success">
    <!-- Mask -->
      <span class="mask bg-gradient-success opacity-8"></span>
      <!-- Header container -->
      <div class="container-fluid mt--7 align-items-center">
        <div class="line">
          <div class="col-xl-36 order-x2-1 mb-5 mb-xl-0">
          <div class="card card-profile shadow">

            <div
              class="card-header text-center border-0 pt-8 pt-md-4 pb-0 pb-md-4"
            >
              <div class="d-flex justify-content-between">
                <h1 size="sm" type="default" class="mr-4"
                  >Edit Profile</h1>
                  <router-link to="/employeeprofile" >
                    <base-button size="sm" type="default" class="float-right"
                    >Back to Profile</base-button>
                  </router-link>
                
              </div>
            </div>
            
          </div>
        </div>



        </div>
      </div>
    </base-header>

    <div class=" container-fluid mt--1 align-items-center">
      <div class="line">
        <div class="col-xl-12 order-x2-1 mb-5 mb-xl-0">
          <div class="card card-profile shadow">
              <card>

                <b-form @submit.prevent="updateProfile">
                  <h6 class="heading-small text-muted mb-6">User File Upload</h6>
                  <div class="pl-lg-4">
                    <b-row>
                      <b-col lg="6">
                        <b-container fluid="xl">
                          <div class="line">
                            <div class="col-xl-8 mb-5 mb-xl-0">
                              <div class=" row justify-content-left">
                                <div class="col-lg-5 order-lg-2">
                                  <div class="card-profile-image">
                                    
                                      <img
                                      :src=this.userPhoto
                                        class="rounded-circle"
                                      />
                                      
                                    
                                  </div>
                                  <div class="mb-5"> 
                                  
                                  </div>
                                </div>
                              </div>
                            
                            </div>
                            <div class="mb-5" style="padding-left:20px; padding-top:40px"> 
                              <div class="mb-5">

                              </div>
                              
                              <label for="file" ><i class="ni ni-fat-add"></i>Select Photo</label>
                              <input class="input" type="file"  @change="filesChange" id="file"/>                      
                              <div style="padding-left:15px;">
                                <base-button outline type="default" @click="onUpload" >Upload</base-button>
                              </div>
                            </div>

                            
                          </div>
                      
                        </b-container>
                      </b-col>
                      
                      <b-col lg="6">
                        <router-link to="/resumeupload" >
                        <base-button outline type="default">Upload Resume </base-button>
                        </router-link>
                      </b-col>
                    </b-row>
                    
                  </div>
                  <hr >
                                    <h6 class="heading-small text-muted mb-4">User information</h6>

                  <div class="pl-lg-4">
                    <b-row>
                      
                      
                      
                    </b-row>
                    <b-row>
                      <b-col lg="6">
                        <base-input
                          type="text"
                          label="First Name"
                          v-model="user.employerName"
                          required
                          id="firstName"
                        >
                        </base-input>
                      </b-col>
                      <b-col lg="6">
                        <base-input
                          type="text"
                          label="Last Name"
                          v-model="user.employerSurname"
                          required
                          id="lastName"
                        >
                        </base-input>
                      </b-col>
                      
                    </b-row>
                    
                    <b-row >
                      <b-col lg="6">
                        
                        <!-- <label><b>Title</b></label> -->
                    <base-input
                            type="select"
                            label="Title"
                            required
                            id="Title">
                            <select v-model="user.employerTitle" class="form-control">
                              <option></option>
                              <option>Junior Developer</option>
                              <option>Senior Developer</option>
                              <option>Fullstack Developer</option>
                              <option>Backend Developer</option>
                              <option>Frontend Developer</option>
                            </select>
                        </base-input>
                        
                      </b-col>
                      <b-col lg="6">
                        <base-input
                          type="email"
                          label="Email address"
                          v-model="user.employerEMail"
                          required
                          id="email"
                        >
                        </base-input>
                      </b-col>
                    </b-row>
                    <b-row>
                      <b-col lg="6">
                        <base-input
                          type="text"
                          label="GitHub Link"
                          v-model="user.employerGithub"
                          required
                          id="github"
                        >
                        </base-input>
                      </b-col>
                      <b-col lg="6">
                        <base-input
                          type="text"
                          label="Linkedin Link"
                          v-model="user.employerLinkedin"
                          required
                          id="linkedin"
                        >
                        </base-input>
                      </b-col>
                    </b-row>
                  </div>
                  <hr class="my-4">
                  <!-- Description -->
                  <h6 class="heading-small text-muted mb-4">About me</h6>
                  <div class="pl-lg-4">
                    <b-form-group label="About Me" label-class="form-control-label" class="mb-0" label-for="about-form-textaria">
                    <!--  <label class="form-control-label">About Me</label> -->
                      <b-form-textarea v-model="user.employerAboutMe" rows="3" value="" id="about-form-textaria" ></b-form-textarea>
                    </b-form-group>
                  </div>
                  <hr class="my-4">

                  <!-- Address -->
                  <h6 class="heading-small text-muted mb-4">Contact information</h6>

                  <div class="pl-lg-4">
                    <b-row>
                      <b-col md="12">
                        <base-input
                          type="text"
                          label="Address"
                          v-model="user.employerLocation"
                          required
                          id="employerAdress"
                        >
                        </base-input>
                      </b-col>
                    </b-row>
                    <b-row>
                      <b-col lg="4">
                        <base-input
                          type="text"
                          label="City"
                          v-model="user.employerCity"
                          required
                          id="employerCity"
                        >
                        </base-input>
                      </b-col>
                      <b-col lg="4">
                        <base-input
                          type="text"
                          label="Country"
                          v-model="user.employerCountry"
                          required
                          id="employerCountry"
                        >
                        </base-input>
                      </b-col>
                      <b-col lg="4">
                        <base-input
                          label="Phone Number"
                          v-model="user.employerPhoneNumber"
                          required
                          id="employerPhoneNumber"
                        >
                        </base-input>
                      </b-col>
                    </b-row>
                    <b-row>
                      
                      <div class="col-lg-6 "> 
                        <base-button @click="updateInformation" type="default">Save</base-button>
                      </div>
                      

                  </b-row>
                  </div>
                  <hr class="my-4">
            <!-- Education -->
                  <h6 class="heading-small text-muted mb-4">Education Information</h6>

                  <div class="pl-lg-4">
                    <b-row>
                      <b-col md="4">
                        <base-input
                          type="text"
                          label="School"
                          v-model="education[0].educationSchool"
                          required
                          id="school"
                        >
                        </base-input>
                      </b-col>
                      <b-col md="4">
                        <base-input
                          type="text"
                          label="Degree"
                          v-model="education[0].educationDegree"
                          required
                          id="degree"
                        >
                        </base-input>
                      </b-col>
                      <b-col md="4">
                        <base-input
                          type="text"
                          label="Study"
                          v-model="education[0].educationStudy"
                          required
                          id="study"
                        >
                        </base-input>
                      </b-col>
                    </b-row>
                    <b-row>
                      <b-col lg="6">
                        <base-input
                          type="date"
                          label="Start Date"
                          v-model="education[0].educationStartingDate"
                          required
                          id="educationStartDate"
                        >
                        </base-input>
                      </b-col>
                      <b-col lg="6">
                        <base-input
                          type="date"
                          label="End Date"
                          v-model="education[0].educationEndingDate"
                          required
                          id="educationEndDate"
                        >
                        </base-input>
                      </b-col>
                      
                    </b-row>
                    <div class="pl-lg-4" style="padding-top:10px">
                    <b-row>
                      <div class="col-lg-6">
                        <base-button @click="addEducation" size="sm" type="default"> Add Education</base-button>
                      </div>

                    </b-row>
                    
                  </div>
                  </div>
                  <hr class="my-4">
                  <!-- Experience-->
                  <h6 class="heading-small text-muted mb-4">Experience</h6>

                  <div class="pl-lg-4">
                    <b-row>
                      <b-col md="4">
                        <base-input
                          type="text"
                          label="Title"
                          v-model="Experience.experienceTitle"
                          required
                        >
                        </base-input>
                      </b-col>
                      <b-col lg="4">
                        <base-input
                          type="text"
                          label="Firma Name"
                          placeholder="Doğuş"
                          v-model="Experience.experienceCompanyName"
                        >
                        </base-input>
                      </b-col>
                      <b-col lg="4">
                        <base-input
                          type="text"
                          label="Location"
                          placeholder="Maslak"
                          v-model="Experience.experienceLocation"
                        >
                        </base-input>
                      </b-col>
                    </b-row>
                    <b-row>
                      <b-col lg="4">
                        <base-input
                          type="date"
                          label="Start Date"
                          placeholder="Start Date"
                          v-model="Experience.experienceStartingDate"
                        >
                        </base-input>
                      </b-col>
                      <b-col lg="4">
                        <base-input
                          type="date"
                          label="End Date"
                          placeholder="End Date"
                          v-model="Experience.experienceEndingDate"
                        >
                        </base-input>
                      </b-col>
                      <b-col lg="4">
                        <h4>Current</h4>
                        <base-checkbox  class="mb-3" v-model="checkboxes.unchecked">
                          
                        </base-checkbox>
                      </b-col>
                    </b-row>
                    <div class="pl-lg-12">
                      <b-form-group label="Description" label-class="form-control-label" class="mb-0" label-for="about-form-textaria">
                      <!--  <label class="form-control-label">Description for Project</label> -->
                        <b-form-textarea v-model="Experience.experienceDescription" rows="4" value="" id="about-form-textaria" placeholder="A few words about you ..."></b-form-textarea>
                      </b-form-group>
                      
                    
                    </div>
                    <div class="pl-lg-4" style="padding-top:10px">
                    <b-row>
                      <div class="col-lg-6">
                        <base-button @click="addExperience" size="sm" type="default"> Add Experience</base-button>
                      </div>

                    </b-row>
                    
                  </div>
                  </div>
                  <hr class="my-4">
                  <!-- Skill -->
                  <h6 class="heading-small text-muted mb-4">Skill</h6>

                  <div class="pl-lg-4">
                    <b-row>
                      <b-col md="4">
                      <multiselect/>
                      </b-col>
                    </b-row>
                    
                  
                  </div>
                  <hr class="my-4">
                        <!-- Project -->
                  <h6 class="heading-small text-muted mb-4">Project</h6>

                  <div class="pl-lg-4">
                    <b-row>
                      <b-col lg="6">
                        
                        <base-input
                          type="text"
                          label="Project Name"
                          placeholder=""
                          v-model="project.ProjectName"
                        >
                        </base-input>
                      </b-col>
                      <b-col lg="6">
                        <base-input
                          type="text"
                          label="URL"
                          placeholder=""
                          v-model="project.ProjectUrl"
                        >
                        </base-input>
                      </b-col>
                      
                    </b-row>
                    <b-row>
                      <b-col lg="4">
                        <base-input
                          type="date"
                          label="Start Date"
                          placeholder="Start Date"
                          v-model="project.ProjectStartingDate"
                        >
                        </base-input>
                      </b-col>
                      <b-col lg="4">
                        <base-input
                          type="date"
                          label="End Date"
                          placeholder="End Date"
                          v-model="project.ProjectEndingDate"
                        >
                        </base-input>
                      </b-col>
                      <b-col lg="4">
                        <h4>Current</h4>
                        <base-checkbox class="mb-3" v-model="checkboxes.unchecked">
                          
                        </base-checkbox>
                      </b-col>
                    </b-row>
                    
                    <div class="pl-lg-12">
                      <b-form-group label="Description" label-class="form-control-label" class="mb-0" label-for="about-form-textaria">
                      <!--  <label class="form-control-label">Description for Project</label> -->
                        <b-form-textarea v-model="project.ProjectDescription" rows="4" value="" id="about-form-textaria" placeholder="A few words about you ..."></b-form-textarea>
                      </b-form-group>
                      
                    
                    </div>
                    <div class="pl-lg-4" style="padding-top:10px">
                    <b-row>
                      <div class="col-lg-6">
                        <base-button size="sm" type="default"> Add Project</base-button>
                      </div>

                    </b-row>
                    
                  </div>
                    
                  </div>
                  <hr class="my-4">
                        <!-- Certificate -->
                  <h6 class="heading-small text-muted mb-4">Certificate</h6>

                  <div class="pl-lg-4">
                    <b-row>
                      <div class="col-lg-6">
                        <base-button outline type="default">Upload Certificate</base-button>
                      </div>

                    </b-row>
                    
                  </div>
                  
                  <h6 class="heading-small text-muted mb-4"></h6>
                  
                  

                </b-form>
              </card>
          </div>
        </div>
      </div>
    </div>
    
  </div>
  
</template>
<script>
import DropZone from "@/components/Inputs/DropZone.vue";
import Multiselect from '../../../components/Inputs/Multiselect.vue';
import axios from 'axios';
export default {
  name:"editProfile",
  components:{
    DropZone,
    Multiselect 
  },
  
  data() {
    return {
      model:[],
      education:[],
      experiences:[],
      user:[],
      userData:{
        employerId:null,
        userId: this.$store.state.userData.id,
        userTypeId: 1,
        employerName: this.$store.state.userData.firstName,
        employerSurname: this.$store.state.userData.lastName,
        employerTitle:'',
        employerCity: '',
        employerCountry: '',
        employerLocation: '',
        employerEmail: this.$store.state.userData.email,
        employerGithub: '',
        employerLinkedin:'',
        employerAboutMe: ``,
        // EmployerResume:'',
        EmployerPhoneNumber: 0,
      },
      userPhoto: "img/user.png",
      
      file: null,
      Education:{
        educationId:null,
        employerId: null,
        educationSchool:'',
        educationDegree:'',
        educationStudy:'',
        educationStartingDate:'',
        educationEndingDate:'',
      },
      checkboxes: {
            unchecked: false,
            checked: true,
            uncheckedDisabled: false,
            checkedDisabled: true
      },
      Experience:{
        experienceId: 0,
        employerId: 0,
        experienceTitle:'Senior Developer',
        experienceCompanyName:'Doğuş',
        experienceCity: 'Istanbul',
        experienceCountry: 'Turkey',
        experienceLocation: '',
        experienceStartingDate:'',
        experienceEndingDate:'',
        experienceCurrentStatus: "",
        experienceDescription:'',
      },
      // skills:[],
      // getSkill:{
      //   SkillId:null,
      //   SkillName:'',
      // },
      //  savedSkill:[{
      //    SkillId: null,
      //    EmployerId: this.$store.state.userData.id,
      //    }],
      project: {
        ProjectName:'',
        ProjectStartingDate:'',
        ProjectEndingDate:'',
        ProjectCurrentStatus:false,
        ProjectUrl:'',
        ProjectDescription:'',
      },
    };
  },
  methods: {
    updateProfile() {
      //alert('Your data: ' + JSON.stringify(this.user));
    },
    updateInformation(id) {
      axios.post("/api/employers/update",this.user).then((response)=>{
            if(response.status==200){
              console.log(this.user);
              this.$router.push('employeeprofile');
            }
        });
    },


    getUserInformation(){
      axios.get('api/employers/getbyid?id=' + this.$store.state.userData.id)
            .then((response) => {
                console.log(response);
                this.model = response.data;
                this.user = response.data;
                this.Education.employerId = this.model.employerId;
                this.Experience.employerId = this.model.employerId;
                axios.get('api/educations/getbyid?id=' + this.Education.employerId)
                    .then((response) => {
                        console.log(response);
                        this.education = response.data;
                        this.Education.educationId = this.education[0].educationId;
                        console.log("Bu education iddir"+this.Education.educationId);
                    })
                    .catch(function (error) {
                        alert(error);
                    });
                
                axios.get('api/experiences/getbyid?id=' + this.Experience.employerId)
                    .then((response) => {

                      if(response.status==200){
                        console.log(this.Experience.employerId);
                        //console.log(response);
                        this.experiences = response.data;
                        this.Experience.experienceId = this.experiences[0].experienceId;
                        console.log("Bu experience iddir"+this.Experience.experienceId);
                      }
                     
                      // if(response.status==400){
                      //   console.log(this.Experience.employerId);
                      //   //console.log(response);
                      //   axios.post("/api/experiences/add",this.Experience).then((response)=>{
                      //     if(response.status==200){
                      //       console.log("Yeni experience eklendi:"+this.Experience);

                      //     }
                      //   });
                      // }
                        
                    })

                    

            })
            .catch(function (error) {
                alert(error);
            });
    },

    addEducation(){
      //böyle bi education varsa güncelle
      console.log(this.education[0].employerId);
      console.log(this.Education.employerId);
      console.log(this.education[0].educationId);
      if(this.education[0].employerId == this.Education.employerId){
        axios.post("/api/educations/update",this.Education).then((response)=>{
            if(response.status==200){
              console.log("Güncellendi:"+ this.Education);
              // this.$router.push('employeeprofile');
            }
        });
      }
      //böyle bi education yoksa ekle
      else{
        axios.post("/api/educations/add",this.Education).then((response)=>{
          if(response.status==200){
            console.log("Yeni education eklendi:"+this.Education);

          }
        });
      }


    },
    addExperience(){
      //böyle bi experience varsa güncelle
      console.log(this.experiences[0].employerId);
      console.log(this.Experience.employerId);
      console.log(this.experiences[0].experienceId);
      if(this.experiences[0].employerId == this.Experience.employerId){
        axios.post("/api/experiences/update",this.Experience).then((response)=>{
            if(response.status==200){
              console.log("Experience Güncellendi:"+ this.Experience);
              // this.$router.push('employeeprofile');
            }
        });
      }
      //böyle bi experience yoksa ekle
      else{
        axios.post("/api/experiences/add",this.Experience).then((response)=>{
          if(response.status==200){
            console.log("Yeni experience eklendi:"+this.Experience);

          }
        });
      }


    },
    //Dosya işlemleri
    filesChange(event) {
        console.log(event);
        this.file = event.target.files[0];
    },
    onUpload(){
      const fd = new FormData();
      fd.append('file', this.file, this.file.name);
      //this.image.file = fd; 
      axios.post("/api/images/add?UserId="+this.$store.state.userData.id,fd).then((response)=>{
            axios.get("/api/images/getimagesbyuserid?id="+this.$store.state.userData.id).then((response)=>{
            console.log(response.data.data[0].imagePath);
           this.userPhoto = require('../../../../../Projects/Expert-In-Backend-Release/WebApplication1/wwwroot/Uploads/Images/'+ response.data.data[0].imagePath);
       
        });
              
        });

     
    },
    isExistUserPhoto(){
      axios.get("/api/images/getimagesbyuserid?id="+this.$store.state.userData.id).then((response)=>{
            console.log(response.data.data[0]);
          if(response.data.data[0] != null){
            // this.userPhoto  = require('../../../../../../Projec/Expert-In-Backend-Release/WebApplication1//wwwroot/Uploads/Images/' + response.data.data[0].imagePath );   
            this.userPhoto = require('../../../../../Projects/Expert-In-Backend-Release/WebApplication1/wwwroot/Uploads/Images/'+ response.data.data[0].imagePath);
          }
          
        });
    },
    
  },
  created(){
    this.getUserInformation();
    //console.log(this.model);
    this.isExistUserPhoto()
    // console.log(this.experiences[0].employerId);
  }

    
  
};
</script>
<style lang="scss" scoped>

.label {

  color: black;
  align-items: center;

  border: 1.5px solid black;
  background-color: #fff;
  transition: 0.3s ease all;
}
.input {
        display: none;
}
</style>
