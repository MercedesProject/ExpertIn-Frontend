<template>
<div>
  <!--NavBar-->  
  <div class="navbar-main ml-auto bg-gradient-success">
    <base-nav
      v-model="showMenu"
      :transparent="true"
      menu-classes="justify-content-end"
      class="navbar-horizontal navbar-main navbar-top navbar-dark"
      expand="lg"  
      
     >
  
   <div slot="brand" class="navbar-wrapper">
     <b-navbar-brand to="/">
       <img style="width:210px; height: 70px" src="img/brand/logo_employee.png">
     </b-navbar-brand>
   </div>

     <template>  
       <div class="navbar-collapse-header" >
         <b-row>
           <b-col cols="6" class="collapse-brand">
             <router-link to="/">
               <img src="img/brand/logo_employee.png">
             </router-link>
           </b-col>
           <b-col cols="6" class="collapse-close">
             <button type="button" class="navbar-toggler" @click="showMenu = false">
               <span></span>
               <span></span>
             </button>
           </b-col>
         </b-row>
       </div>
        
       <b-navbar-nav class="align-items-lg-center ml-lg-auto">

           <b-nav-item to="/login">
              <span class="nav-link-inner--text" style=
                "font-size: 18px; 
                 font-weight: bold;
                 text-transform:capitalize; 
                 text-shadow: 0px 1px 1px #0B8F8812; 
                 border-bottom: 1px solid #e5e0f2; 
                 border-radius: 4px; 
                 padding:10px 24px; 
                 border-color: #9783ce;                  
                 height:auto; 
                 width: auto;"
                 > Login </span>
           </b-nav-item>

            <b-nav-item to="/logincompany">
              <span class="nav-link-inner--text" style=
                "font-size: 18px; 
                 font-weight: bold;

                 text-transform:capitalize; 
                 text-shadow: 0px 1px 1px #0B8F8812; 
                 border-bottom: 1px solid #e5e0f2; 
                 border-radius: 4px; 
                 padding: 10px 24px; 
                 border-color: #9783ce;                  
                 height:auto; 
                 width: auto;"
                 > Company Login</span>
           </b-nav-item>
       </b-navbar-nav>
     </template>
    </base-nav>
  </div>
 
    <!-- Page content -->
      <div class="container-fluid px-lg-5 bg-gradient-success"  >
        <b-container class="mt-mx-auto" >
          <b-row class="justify-content">
            <div class="container-fluid" 
            style="
            min-height: 600px; 
            width: 100%;
            background-repeat: no-repeat;
            background-attachment: fixed;
            background-size: cover; 
            background-position: center center;
            "
          >  
<!--
          <div class="row justify-content-center text-center pt-7 pb-4">  
               <h1 style=
                "font-size: 72px; 
                font-family: Nucleolcons;
                text-transform: uppercase; 
                text-shadow: 2px -1px 10px #d8d0ec; 
                font-weight: bold; 
                color: #191426; 
                border-color: #7e65c2"
              > EXPERT IN</h1>
          </div>
         
            <div class="row justify-content-center text-center">
 --> 
            <div class="row justify-content-center text-center pt-8 pb-3"> 
              
                <h1 style=
                "font-size: 70px; 
                  
                text-shadow: 1px 20px 20px #311474;
                font-weight: bold; 
                color: #000000; 
                position: relative;
                border-color: #7e65c2"
                > Finding a job is just a click away </h1> 
                
                
            </div>

            <div class="container-fluid">
              <div class="row justify-content-center text-center pt-1"> 
                  <router-link to="/register">
                  <base-button style=
                  "font-size: 26px; 
                  font-weight: bold; 
                  background:linear-gradient(180deg, #0B8F8812,  #7E65C2); 
                  
                  text-shadow: 0px 0px 5px #ffffff; 
                  border: 1.8px solid #f2eff8; 
                  border-radius: 10px;
                  padding: 15px 25px; 
                  border-color: #b1a2da; 
                  height: auto; 
                  color: #0c0a13; 
                  background-position: absolute;
                  width: auto" 
                  outline type="register" class="my-3 mb-5">Explore Jobs</base-button>
                  </router-link>
              </div>     
            </div>
            </div>
          </b-row>
        </b-container>
      </div>
 

</div>
</template>
<script></script>
<style></style>