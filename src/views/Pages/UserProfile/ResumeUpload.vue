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
                      
                    </div>
                    
                    <div class="col-lg-12" style="padding-top:5px">
                      
                      <label class="label" for="file" >Select File</label>
                      <input class="input" type="file"  @change="filesChange" id="file"/>                      
                      <div style="padding-left:95px;">
                        <base-button outline type="default" @click="onUpload" >Submit</base-button>
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
                        <div style="padding-top:5px"> 
                          <label class="label" for="file" >Select File</label>
                          <input class="input" type="file"  @change="filesChange" id="file"/>                      
                          <div style="padding-left:95px;">
                            <base-button outline type="default" @click="onUpload" >Submit</base-button>
                          </div>
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
      <!-- <div class="embed-responsive embed-responsive-16by9 z-depth-1-half">
    <iframe class="embed-responsive-item" src="https://www.google.com.tr/" allowfullscreen></iframe>
  </div> -->
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
    filesChange(event) {
        console.log(event);
        this.file = event.target.files[0];
    },
     onUpload(){
      const fd = new FormData();
      fd.append('file', this.file, this.file.name);
      //this.image.file = fd; 
      axios.post("/api/curriculumvitaes/add?UserId="+this.$store.state.userData.id,fd).then((response)=>{
          if(response.status==200){
            console.log("CV eklendi");

          }
              
        });

     
    },
  }
};
</script>
<style>
.label {
  width: 280px;
  height: 140px;
  color: black;
  background-color: #fff;
  transition: 0.3s ease all;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  row-gap: 16px;
  border: 2px dashed #41b8;

}
.input {
  display: none;
}
</style>
