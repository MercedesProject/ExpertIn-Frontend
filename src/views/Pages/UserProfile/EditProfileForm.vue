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
                  <router-link to="/profile" >
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
                  <h6 class="heading-small text-muted mb-4">User information</h6>

                  <div class="pl-lg-4">
                    <b-row>
                      
                      <div class="col-lg-6">
                        
                        <router-link to="/resumeupload" >
                        <base-button outline type="default">Resume Upload</base-button>
                        </router-link>
                        
                      </div>
                      
                      
                    </b-row>
                    <b-row>
                      <b-col lg="6">
                        <base-input
                          type="text"
                          label="First Name"
                          placeholder="First Name"
                          v-model="user.EmployerName"
                        >
                        </base-input>
                      </b-col>
                      <b-col lg="6">
                        <base-input
                          type="text"
                          label="Last Name"
                          placeholder="Last Name"
                          v-model="user.EmployerSurname"
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
                            v-model="user.EmployerTitle"
                            required
                            id="Title">
                            <select class="form-control">
                              <option></option>
                              <option>Junior Developer</option>
                              <option>Senior Developer</option>
                              <option>Fullstack Developer</option>
                            </select>
                        </base-input>
                        
                      </b-col>
                      <b-col lg="6">
                        <base-input
                          type="email"
                          label="Email address"
                          placeholder="example@email.com"
                          v-model="user.EmployerEmail"
                        >
                        </base-input>
                      </b-col>
                    </b-row>
                    <b-row>
                      <b-col lg="6">
                        <base-input
                          type="text"
                          label="GitHub Link"
                          placeholder="github.com/busrasari"
                          v-model="user.EmployerGithub"
                        >
                        </base-input>
                      </b-col>
                      <b-col lg="6">
                        <base-input
                          type="email"
                          label="Linkedin Link"
                          placeholder="https://www.linkedin.com/in/busrasari/"
                          v-model="user.EmployerLinkedin"
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
                      <b-form-textarea v-model="user.EmployerAboutMe" rows="4" value="" id="about-form-textaria" placeholder="A few words about you ..."></b-form-textarea>
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
                          placeholder="Home Address"
                          v-model="user.EmployerLocation"
                        >
                        </base-input>
                      </b-col>
                    </b-row>
                    <b-row>
                      <b-col lg="4">
                        <base-input
                          type="text"
                          label="City"
                          placeholder="City"
                          v-model="user.EmployerCity"
                        >
                        </base-input>
                      </b-col>
                      <b-col lg="4">
                        <base-input
                          type="text"
                          label="Country"
                          placeholder="Country"
                          v-model="user.EmployerCountry"
                        >
                        </base-input>
                      </b-col>
                      <b-col lg="4">
                        <base-input
                          label="Phone Number"
                          placeholder=""
                          v-model="user.EmployerPhoneNumber"
                        >
                        </base-input>
                      </b-col>
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
                          placeholder="Turkish German University"
                          v-model="education.EducationSchool"
                        >
                        </base-input>
                      </b-col>
                      <b-col md="4">
                        <base-input
                          type="text"
                          label="Degree"
                          placeholder="Lisans"
                          v-model="education.EducationDegree"
                        >
                        </base-input>
                      </b-col>
                      <b-col md="4">
                        <base-input
                          type="text"
                          label="Study"
                          placeholder="Computer Engineering"
                          v-model="education.EducationStudy"
                        >
                        </base-input>
                      </b-col>
                    </b-row>
                    <b-row>
                      <b-col lg="6">
                        <base-input
                          type="date"
                          label="Start Date"
                          placeholder="Start Date"
                          v-model="education.EducationStartingDate"
                        >
                        </base-input>
                      </b-col>
                      <b-col lg="6">
                        <base-input
                          type="date"
                          label="End Date"
                          placeholder="End Date"
                          v-model="education.EducationEndingDate"
                        >
                        </base-input>
                      </b-col>
                      
                    </b-row>
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
                          placeholder="Junior Developer"
                          v-model="experince.ExperienceTitle"
                        >
                        </base-input>
                      </b-col>
                      <b-col lg="4">
                        <base-input
                          type="text"
                          label="Firma Name"
                          placeholder="Doğuş"
                          v-model="experince.ExperienceCompanyName"
                        >
                        </base-input>
                      </b-col>
                      <b-col lg="4">
                        <base-input
                          type="text"
                          label="Location"
                          placeholder="Maslak"
                          v-model="experince.ExperienceLocation"
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
                          v-model="experince.ExperienceStartingDate"
                        >
                        </base-input>
                      </b-col>
                      <b-col lg="4">
                        <base-input
                          type="date"
                          label="End Date"
                          placeholder="End Date"
                          v-model="experince.ExperienceEndingDate"
                        >
                        </base-input>
                      </b-col>
                      <b-col lg="4">
                        <h4>Current</h4>
                        <base-checkbox  class="mb-3" v-model="checkboxes.unchecked">
                          
                        </base-checkbox>
                      </b-col>
                    </b-row>
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
                  <b-row>
                      
                      <div class="col-lg-6 "> 
                        <base-button @click="saveInformation" type="default">Save</base-button>
                      </div>
                      

                  </b-row>
                  

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
      user: {
        UserTypeId: 1,
        UserId: 3,
        EmployerName: '',
        EmployerSurname: '',
        // EmployerTitle:'',
        // EmployerCity: 'Istanbul',
        // EmployerCountry: 'Turkey',
        // EmployerLocation: '',
        // EmployerEmail: '',
        // EmployerGithub:'',
        // EmployerLinkedin:'',
        // EmployerAboutMe: ``,
        // EmployerResume:'',
      },
      
       education:{
        EducationId: null,
        EmployerId: null,
        EducationSchool:'',
        EducationDegree:'',
        EducationStudy:'',
        EducationStartingDate:'',
        EducationEndingDate:'',
      },
      checkboxes: {
            unchecked: false,
            checked: true,
            uncheckedDisabled: false,
            checkedDisabled: true
      },
      experince:{
        ExperienceId: null,
        EmployerId: null,
        ExperienceTitle:'',
        ExperienceCompanyName:'',
        ExperienceCity: 'Istanbul',
        ExperienceCountry: 'Turkey',
        ExperienceLocation: '',
        ExperienceStartingDate:'',
        ExperienceEndingDate:'',
        ExperienceCurrentStatus: false,
        ExperienceDescription:'',
      },
      // skills:[],
      // getSkill:{
      //   SkillId:null,
      //   SkillName:'',
      // },
      // skill:[{
      //   SkillId: null,
      //   EmployerId: this.$store.state.userData.EmployerId,
      // }],
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
    saveInformation() {
      axios.post("/api/employers/add",this.user).then((response)=>{
            if(response.status==200){
              console.log(this.user.name);
              this.$router.push('employeeprofile');
            }
        });
    }
    
  }
};
</script>
<style lang="scss" scoped>
.home {
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: #f1f1f1;

  h1{
    font-size: 40px;
    margin-bottom: 32px;
  }
  
  .file-info {
    margin-top: 32px;
  }
}
</style>
