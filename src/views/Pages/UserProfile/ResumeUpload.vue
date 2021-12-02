<template>
<div>
  <base-header class="header pb-8 pt-5 pt-lg-8 d-flex align-items-center">
    <!-- Mask -->
      <span class="mask bg-gradient-success opacity-8"></span>
      <!-- Header container -->
      <div class="container-fluid d-flex align-items-center">
        <div class="row">
          <div class="col-lg-12">
            <h1 class="display-2 text-white">Upload Resume</h1>
            
          </div>
        </div>
      </div>
    </base-header>
    <div class=" body container-fluid mt--7">
        <div class="row">
          
          <div class="col-xl-4 order-xl-1">
            <card shadow type="secondary">
              <template v-slot:header>
                <div class="bg-white border-0">
                  <div class="row align-items-center">
                    <div class="col-8">
                      <h3 class="mb-0">Upload from Your Device</h3>
                    </div>
                    <div class="col-4 text-right">
                      
                    </div>
                  </div>
                </div>
              </template>

              <form>
                
                <div class="pl-lg-4">
                  <div class="line">
                    <div class="col-lg-12">
                      <DropZone/>
                    </div>
                    
                    <div class="col-lg-12" style="padding-top:5px">
                      
                      <base-button v-on:click="submitFile()" outline type="default">Submit</base-button>
                    </div>
                  </div>
                  <div class="row">
                    
                  </div>
                </div>
                <hr class="my-4" />
                <!-- Address -->
                
                
                
                
              </form>
            </card>
          </div>
          <div class="col-xl-8 order-xl-1">
            <card shadow type="secondary">
              <template v-slot:header>
                <div class="bg-white border-0">
                  <div class="row align-items-center">
                    <div class="col-8">
                      <h3 class="mb-0">Import from Linkedin</h3>
                    </div>
                    <div class="col-4 text-right">
                      <router-link to="/editprofilform">
                        <a href="#!" class="btn btn-sm btn-default">Back to Edit Profile</a>
                      </router-link>
                      
                    </div>
                  </div>
                </div>
              </template>

              <form>
                
                <div class="pl-lg-4">
                  <div class="row">
                    <div class="col-lg-5 " style=" padding-left:10px">  
                        <img style="width:313px; height:355px;"
                          src="img/linkedin.png"
                        /> 
                    </div>
                    <div class="col-lg-1 " style=" padding-top:40px">  
                        <img src="img/ok-işareti.png" style="width:30px; height:10px"> 
                    </div>
                    <div class="col-lg-6">  
                        <DropZone/>
                        
                        <div style="padding-top:5px"> 
                          <base-button v-on:click="submitFile()" outline type="default">Submit</base-button>
                        </div>
                        
                      
                    </div>
                  </div>
                
                  <div class="row">
                    
                  </div>
                </div>
                <hr class="my-4" />
                <!-- Address -->
                
                
                
                
              </form>
            </card>
          </div>

        </div>
      </div>
</div>
</template>
<script>
import DropZone from "@/components/Inputs/DropZone.vue";
import axios from 'axios';
export default {
  components:{
    DropZone,
  },
  data(){

    return{
      file: "",
    }
  },
  methods: {
    submitFile(){
         //Initialize the form data
        let formData = new FormData();
        //Add the form data we need to submit
        formData.append('file', this.file);
        //Make the request to the POST /single-file URL
        axios.post( '/api/employers/postResume'
                
            ).then(function(){
          console.log('SUCCESS!!');
        })
        .catch(function(){
          console.log('FAILURE!!');
        });
     },
  }
};
</script>
<style></style>
