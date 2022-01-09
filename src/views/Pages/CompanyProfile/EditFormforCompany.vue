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
                  <router-link to="/companyprofile" >
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
                  <h6 class="heading-small text-muted mb-7">Company Image Upload</h6>
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
                                        :src="this.userPhoto"
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
                              <div style="padding-left:10px;">
                                <base-button outline type="default" @click="onUpload" >Upload</base-button>
                              </div>
                            </div>

                            
                          </div>
                      
                        </b-container>
                      </b-col>

                    </b-row>
                    
                  </div>
                  <hr >
                  <h6 class="heading-small text-muted mb-4">Company information</h6>

                  <div class="pl-lg-4">
                    <b-row>
                      <b-col lg="6">
                        <base-input
                          type="text"
                          label="Company Name"
                          :placeholder="this.model.companyName"
                          v-model="user.companyName"
                        >
                        </base-input>
                      </b-col>
                      <b-col lg="6">
                        <base-input
                          type="email"
                          label="Email address"
                          :placeholder="this.model.companyEMail"
                          v-model="user.companyEmail"
                        >
                        </base-input>
                      </b-col>
                    </b-row>
                    
                    <b-row >
                      <b-col lg="6">
                        
                        <base-input
                            type="select"
                            label="Sector"
                            required
                            id="Sector">
                            <select v-model="sector" class="form-control">
                              <option></option>
                              <option>Internet</option>
                              <option>Technology</option>
                              <option>Media</option>
                            </select>
                        </base-input>
                        
                      </b-col>
                      <b-col lg="6">
                        <base-input
                          type="text"
                          label="Adress"
                          :placeholder="this.model.companyLocation"
                          v-model="user.companyLocation"
                        >
                        </base-input>
                      </b-col>

                    </b-row>
                                        <b-row>
                      <b-col lg="6">
                        <base-input
                          type="text"
                          label="City"
                          :placeholder="this.model.companyCity"
                          v-model="user.companyCity"
                        >
                        </base-input>
                      </b-col>
                      <b-col lg="6">
                        <base-input
                          type="text"
                          label="Country"
                          :placeholder="this.model.companyCountry"
                          v-model="user.companyCountry"
                        >
                        </base-input>
                      </b-col>
                    </b-row>
                    <b-row>
                      <b-col lg="6">
                        <base-input
                          type="text"
                          label="Website"
                          :placeholder="this.model.companyWebSite"
                          v-model="user.companyWebSite"
                        >
                        </base-input>
                      </b-col>
                      <b-col lg="6">
                        <base-input
                          type="text"
                          label="Phone Number"
                          :placeholder="this.model.companyPhoneNumber"
                          v-model="user.companyPhoneNumber"
                        >
                        </base-input>
                      </b-col>
                    </b-row>
                  </div>
                  <!-- Description -->
                  <h6 class="heading-small text-muted mb-4">About Company</h6>
                  <div class="pl-lg-4">
                    <b-form-group label="" label-class="form-control-label" class="mb-0" label-for="about-form-textaria">
                    <!--  <label class="form-control-label">About Me</label> -->
                      <b-form-textarea v-model="user.companyDescription" rows="4" value="" id="about-form-textaria" :placeholder="this.model.companyDescription"></b-form-textarea>
                    </b-form-group>
                  </div>
                  
                  <h6 class="heading-small text-muted mb-4"></h6>
                  <b-row>
                      
                      <div class="col-lg-6 "> 
                        <base-button @click="saveData" type="default">Save</base-button>
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
import axios from 'axios';

export default {
  name:"editProfile",
  components:{
    DropZone,
  },
  
  data() {
    return {
      model:[],
      userPhoto: "img/user.png",
      user: {
        companyId:null,
        userId: this.$store.state.userData.id,
        UserTypeId: 2,
        SectorId:1,
        companyName: this.$store.state.userData.firstName,
        companyEmail: this.$store.state.userData.email,
        companyCity: '',
        companyCountry: '',
        companyLocation: '',
        companyWebsite:'',
        companyPhoneNumber: 0,
        companyDescription: '',
        companyPhoto:'',
      },
      sector:'',

    };
  },
  methods: {
    updateProfile() {
      //alert('Your data: ' + JSON.stringify(this.user));
    },
    saveData(){
      axios.get('api/companies/getbyid?id=' + this.$store.state.userData.id)
            .then((response) => {
                console.log(response);
                this.model = response.data;
                this.user.companyId =this.model.companyId;
                axios.post("/api/companies/update",this.user).then((response)=>{
                    if(response.status==200){
                      console.log(this.user);
                      
                      this.$router.push('companyprofile');
                    }
                });
            })

      
    },
    getUserInformation(){
      axios.get('api/companies/getbyid?id=' + this.$store.state.userData.id)
            .then((response) => {
                console.log(response);
                this.model = response.data;

            })
            .catch(function (error) {
                alert(error);
            });
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
      console.log(this.imageData);
      axios.post("/api/images/add?UserId="+this.$store.state.userData.id,fd).then((response)=>{
            console.log(response)
            axios.get("/api/images/getimagesbyuserid?id="+this.$store.state.userData.id).then((response)=>{
                this.userPhoto = require("../../../../../Projects/Expert-In-Backend-Release/WebApplication1/wwwroot/Uploads/Images/" + response.data.data[0].imagePath);
       
            });
            
      });

           
    },
    isExistUserPhoto(){
      axios.get("/api/images/getimagesbyuserid?id="+this.$store.state.userData.id).then((response)=>{
            console.log(response.data.data[0]);
          if(response.data.data[0] != null){
             this.userPhoto = require("../../../../../Projects/Expert-In-Backend-Release/WebApplication1/wwwroot/Uploads/Images/" + response.data.data[0].imagePath);
          }
          
        });
    },
  },
  created(){
    this.getUserInformation();
    console.log(this.model);
    this.isExistUserPhoto();
    
  },
  
};
</script>
<style lang="scss" scoped>
.label {
  padding: 8px 20px;
  color: rgb(83, 43, 177);
  align-items: center;
  row-gap: 16px;
  border: 2px dashed rgb(83, 43, 177);
  background-color: #fff;
  transition: 0.3s ease all;
}
.input {
        display: none;
}
</style>
