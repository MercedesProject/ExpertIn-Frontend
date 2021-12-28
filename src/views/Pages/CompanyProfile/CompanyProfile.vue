<template>
  <div>
    <base-header
      class="header pb-8 pt-5 pt-lg-8 d-flex align-items-center"
      
    >
      <!-- Mask -->
      <span class="mask bg-gradient-success opacity-8"></span>
      <!-- Header container -->
      <div class="container-fluid d-flex align-items-center">
        <div class="row">
          <div class="col-lg-12 col-md-10">
            
          </div>
        </div>
      </div>
    </base-header>

    <div class="container-fluid mt--7">
      <div class="line">
        <div class="col-xl-12 order-xl-2 mb-5 mb-xl-0">
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
              <div class="d-flex justify-content-between">
                
                <base-button size="m" type="default" class="float-right"
                  >Send Message</base-button
                >
                <router-link to="/editformforcompany"> 
                  <a href="#!" class="btn btn-info">Edit profile</a>
                </router-link>
              </div>
            </div>
            <div class="card-body pt-0 pt-md-4">
              
              <div class="text-center">
                <hr class="my-4" />
                <h3>
                  {{this.$store.state.userData.firstName}}<span class="font-weight-light"></span>
                </h3>
                <div class="h5 font-weight-300">
                  <i class="ni location_pin mr-2"></i>{{this.model.companyCity}},{{this.model.companyCountry}}
                </div>
                <div class="col-lg-12 h5 mt-4">
                  Sector: 
                </div>
                <div class="col-lg-12">
                    Internet
                  </div>
                <hr class="my-4" />
                <div class="col-lg-12 h5 mt-4">
                     About Company: 
                  </div>
                <p>
                  {{this.model.companyDescription}}
                </p>
                
                <hr class="my-4" />
                <div class="col-lg-12 h5 mt-4">
                    <i class="fas fa-map-marker-alt"></i> Address: 
                  </div>
                  <div class="col-lg-12 ">
                    {{this.model.companyLocation}}
                  </div>
                  <div class="col-lg-12 h5 mt-4">
                    <i class="fas fa-envelope"></i> Company Contact Email Adress: 
                  </div>
                  <div class="col-lg-12">
                    {{this.$store.state.userData.email}}
                  </div>
                  <div class="col-lg-12 h5 mt-4">
                    Website: 
                  </div>
                  <div class="col-lg-12">
                    {{this.model.companyWebSite}}
                  </div>
                  <div class="col-lg-12 h5 mt-4">
                    <i class="fas fa-phone-volume"></i> Phone Number: 
                  </div>
                  <div class="col-lg-12">
                    {{this.model.companyPhoneNumber}}
                  </div>
              </div>
            </div>

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
        axios.get('api/companies/getbyid?id=' + 14)
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
    
  },
};
</script>
<style></style>
