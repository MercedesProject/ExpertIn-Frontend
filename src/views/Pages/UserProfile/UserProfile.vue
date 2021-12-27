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
      <div class="container-fluid d-flex align-items-center">
        <div class="row">
          <div class="col-lg-7 col-md-10">
            <h1 class="display-2 text-white">Hello {{this.$store.state.userData.firstName}}</h1>
            <p class="text-white mt-0 mb-5">
              This is your profile page. You can add your projects and edit your skills and personal information.
            </p>
            <router-link to="/editprofilform"> 
            <base-button  size="xl" type="default">Edit profile</base-button>
              
            </router-link>
            
          </div>
        </div>
      </div>
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
                      src="img/user.png"
                      class="rounded-circle"
                    />
                  </a>
                </div>
              </div>
            </div>
            <div
              class="card-header text-center border-0 pt-8 pt-md-4 pb-0 pb-md-4"
            >
              
            </div>
            <div class="card-body pt-0 pt-md-4">
              
              <div class="text-center">
                <h3>
                  {{this.$store.state.userData.firstName}} {{this.$store.state.userData.lastName}}<span class="font-weight-light"></span>
                </h3>
                <div class="h5 font-weight-300" >
                  <i class="fas fa-map-marker-alt"></i>{{this.model.employerCity}}, {{model.employerCountry}}
                </div>
                <div class="h5 mt-4">
                  <i class="ni business_briefcase-24 mr-2"></i>Computer Engineer
                </div>
                <div>
                  <i class="ni education_hat mr-2"></i> Turkish German University
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
                     {{this.model.employerGithub}}
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
                    {{this.model.employerLinkedin}}
                  </div>
                </div>
                <hr class="my-4" />
                
                <p>I am a final year student of Computer Engineering at Turkish German University.</p>
                    
                
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
                    <h3 class="mb-0">My account</h3>
                  </div>
                  <div class="col-4 text-right">
                    <a href="#!" class="btn btn-sm btn-default">Settings</a>
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
                        <base-input :placeholder="this.model.employerLocation"></base-input>
                    </div>
                  </div> 
                  </b-col>
                  <b-col lg="4">
                    <div class="form-group row">
                      <label class="col-md-7 col-form-label form-control-label">Phone Number</label>
                      <div class="col-md-10">
                        <i class="fas fa-phone-volume"></i>
                        <base-input :placeholder= this.model.employerPhoneNumber ></base-input>
                      </div>
                    </div>
                  </b-col>
                  <b-col lg="4">
                    <div class="form-group row">
                      <label class="col-md-5 col-form-label form-control-label">City</label>
                      <div class="col-md-10">
                        <base-input :placeholder= this.model.employerCity></base-input>
                    </div>
                  </div> 
                  </b-col>
                  <b-col lg="4">
                    <div class="form-group row">
                      <label class="col-md-5 col-form-label form-control-label">Country</label>
                      <div class="col-md-10">
                        <base-input :placeholder= this.model.employerCountry></base-input>
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
                      <div class="col-md-10">
                        <base-input placeholder="Jon"></base-input>
                    </div>
                  </div> 
                  </b-col>
                  <b-col lg="4">
                    <div class="form-group row">
                      <label class="col-md-5 col-form-label form-control-label">Degree</label>
                      <div class="col-md-10">
                        <base-input placeholder="Jon"></base-input>
                      </div>
                    </div>
                  </b-col>
                  <b-col lg="4">
                    <div class="form-group row">
                      <label class="col-md-5 col-form-label form-control-label">Study</label>
                      <div class="col-md-10">
                        <base-input placeholder="Jon"></base-input>
                    </div>
                  </div> 
                  </b-col>
                  <b-col lg="5">
                    <div class="form-group row">
                      <label class="col-md-5 col-form-label form-control-label">Starting Date</label>
                      <div class="col-md-10">
                        <base-input placeholder="Jon"></base-input>
                      </div>
                    </div>
                  </b-col>                  
                  <b-col lg="5">
                    <div class="form-group row">
                      <label class="col-md-5 col-form-label form-control-label">Ending Date</label>
                      <div class="col-md-10">
                        <base-input placeholder="Jon"></base-input>
                      </div>
                    </div>
                  </b-col>  
                  <b-col lg="2">
                    <div class="form-group row">
                      <label class="col-md-8 col-form-label form-control-label">Current</label>
                      <div class="col-md-10">
                        <b-checkbox placeholder="Jon"></b-checkbox>
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
                        <base-input placeholder="Jon"></base-input>
                    </div>
                  </div> 
                  </b-col>
                  <b-col lg="4">
                    <div class="form-group row">
                      <label class="col-md-5 col-form-label form-control-label">Company</label>
                      <div class="col-md-10">
                        <base-input placeholder="Jon"></base-input>
                      </div>
                    </div>
                  </b-col>
                  <b-col lg="4">
                    <div class="form-group row">
                      <label class="col-md-5 col-form-label form-control-label">Location</label>
                      <div class="col-md-10">
                        <base-input placeholder="Jon"></base-input>
                    </div>
                  </div> 
                  </b-col>
                  <b-col lg="5">
                    <div class="form-group row">
                      <label class="col-md-5 col-form-label form-control-label">Starting Date</label>
                      <div class="col-md-10">
                        <base-input placeholder="Jon"></base-input>
                      </div>
                    </div>
                  </b-col>                  
                  <b-col lg="5">
                    <div class="form-group row">
                      <label class="col-md-5 col-form-label form-control-label">Ending Date</label>
                      <div class="col-md-10">
                        <base-input placeholder="Jon"></base-input>
                      </div>
                    </div>
                  </b-col>  
                  <b-col lg="2">
                    <div class="form-group row">
                      <label class="col-md-8 col-form-label form-control-label">Current</label>
                      <div class="col-md-10">
                        <b-checkbox placeholder="Jon"></b-checkbox>
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
                    <badge rounded type="default">Default</badge>
                    
                    

                  </b-col>
                  <b-col lg="2">
                    <badge rounded type="default">Default</badge>
                   

                  </b-col>
                  <b-col lg="2">
                    <badge rounded type="default">Default</badge>
                   

                  </b-col>
                 <b-col lg="2">
                    <badge rounded type="default">Default</badge>
                                       
                  </b-col>
                  <b-col lg="2">
                    <badge rounded type="default">Default</badge>
          
                  </b-col>
                  <b-col lg="2">
                    <badge rounded type="default">Default</badge>

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
      model:[],
    };
  },
  methods: {
    getUserInformation(){
      axios.get('api/employers/getbyid?id=' + this.$store.state.userData.id)
            .then((response) => {
                console.log(response);
                this.model = response.data;
            })
            .catch(function (error) {
                alert(error);
            });
    },
    
  },
  created(){
    this.getUserInformation();
    console.log(this.model);
    
  }
};
</script>
<style></style>
