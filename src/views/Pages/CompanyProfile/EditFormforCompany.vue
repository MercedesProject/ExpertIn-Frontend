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
                  <h6 class="heading-small text-muted mb-4">Company information</h6>

                  <div class="pl-lg-4">

                    <b-row>
                      <b-col lg="6">
                        <base-input
                          type="text"
                          label="Company Name"
                          placeholder=""
                          v-model= this.$store.state.userData.firstName
                        >
                        </base-input>
                      </b-col>
                      <b-col lg="6">
                        <base-input
                          type="email"
                          label="Email address"
                          placeholder=""
                          v-model= this.$store.state.userData.email
                        >
                        </base-input>
                      </b-col>
                    </b-row>
                    
                    <b-row >
                      <b-col lg="6">
                        
                        <base-input
                            type="select"
                            label="Sector"
                            v-model="sector"
                            required
                            id="Sector">
                            <select class="form-control">
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
                          placeholder="Adress"
                          v-model="user.CompanyLocation"
                        >
                        </base-input>
                      </b-col>

                    </b-row>
                    <b-row>
                      <b-col lg="6">
                        <base-input
                          type="text"
                          label="Website"
                          placeholder=""
                          v-model="user.CompanyWebsite"
                        >
                        </base-input>
                      </b-col>
                      <b-col lg="6">
                        <base-input
                          type="text"
                          label="Phone Number"
                          placeholder=""
                          v-model="user.CompanyPhoneNumber"
                        >
                        </base-input>
                      </b-col>
                    </b-row>
                  </div>
                  <!-- Description -->
                  <h6 class="heading-small text-muted mb-4">About Company</h6>
                  <div class="pl-lg-4">
                    <b-form-group label="About Me" label-class="form-control-label" class="mb-0" label-for="about-form-textaria">
                    <!--  <label class="form-control-label">About Me</label> -->
                      <b-form-textarea v-model="user.CompanyDescription" rows="4" value="" id="about-form-textaria" placeholder="A few words about you ..."></b-form-textarea>
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
      user: {
        CompanyId: this.$store.userData.id,
        UserTypeId: 2,
        SectorId:1,
        CompanyName: '',
        CompanyEmail: '',
        CompanyLocation: '',
        CompanyWebsite:'',
        CompanyPhoneNumber:654365,
        CompanyDescription: '',
        CompanyPhoto:'',
      },
      sector:'',

    };
  },
  methods: {
    updateProfile() {
      //alert('Your data: ' + JSON.stringify(this.user));
    },
    saveData(){
      axios.post("/api/companies/update",this.user).then((response)=>{
            if(response.status==200){
              console.log(this.user);
              
              this.$router.push('companyprofile');
            }
        });
    },
    
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
