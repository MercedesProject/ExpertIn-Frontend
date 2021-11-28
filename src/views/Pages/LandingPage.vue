<template>

<div>
  <!--NavBar-->
  <div class="main-content navbar-main ml-auto">
    <base-nav
      v-model="showMenu"
      :transparent="true"
      menu-classes="justify-content-end"
      class="navbar-horizontal navbar-main navbar-top navbar-dark"
      expand="lg"  
       style="background:linear-gradient(135deg, #0B8F8812,  #7E65C2)" 
     >
  
      <div slot="brand" class="navbar-wrapper">
        <b-navbar-brand to="/">
          <img style="width:210px; height: 70px" src="img/brand/logo_employee.png">
        </b-navbar-brand>
      </div>

     <template>
       <div class="navbar-collapse-header" style="background:linear-gradient(135deg, #0B8F8812,  #7E65C2);">
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
         <b-navbar-nav  class="align-items-lg-center ml-lg-auto">
           <b-nav-item to="/login">
           <i class="ni ni-circle-08" style="color: #32284d; text-shadow: 0px 0px 1px #ffffff;"></i>
              <base-button style=
                    "text-transform:capitalize;
                    text-shadow: 0px 1px 1px #0B8F8812; 
                    border-bottom: 2px solid #b2b2b2; 
                    background-color: #ffffff; 
                    border-radius: 10px; 
                    color: #32284d; 
                    padding:10px 24px;
                    border-color: #7e65c2; 
                    height:auto; 
                    width: auto" 
                    outline type="login">Login</base-button>
           </b-nav-item>
           <b-nav-item to="/logincompany">
           <i class="ni ni-circle-08" style="color: #32284d; text-shadow: 0px 0px 1px #ffffff;"></i>
              <base-button style=
                    "text-transform:capitalize; 
                    text-shadow: 0px 1px 1px #0B8F8812; 
                    border-bottom: 2px solid #b2b2b2; 
                    background-color: #ffffff; 
                    border-radius: 10px; 
                    color: #32284d; 
                    padding:10px 24px; 
                    border-color: #7e65c2; 
                    height:auto; 
                    width: auto" 
                    outline type="logincompany">Login for Company</base-button>
           </b-nav-item>
       </b-navbar-nav>
     </template>
    </base-nav>
  </div>
    
    <!--Content-->
 <div class="body bg-gradient-busra py-7">
    <!-- Page content -->

      <div class="container-fluid px-lg-5">
        <b-container class="mt-auto" >
          <b-row class="justify-content">
            <div class="container-fluid " 
            style="
            min-height: auto; 
            max-width: 100%;
            background-repeat: no-repeat;
            background-attachment: fixed;
            background-size: cover; 
            background-position: center top;
            background-image: linear-gradient(to top, rgba(255,255,255,0.4) 40%, rgba(255,255,255,0.9) 100%), url(img/brand/bg9.png) "
          >  
      
          <div class="row justify-content-center text-center py-7">  
               <h1 style=
                "font-size: 72px; 
                font-family: Nucleolcons;
                text-transform: uppercase; 
                text-shadow: 2px -1px 0px #d8d0ec; 
                font-weight: bold; 
                color: #191426; 
                border-color: #7e65c2"
              > EXPERT IN</h1>

          </div> 
            <div class="btn-wrapper text-center">
                <h1 style=
                "font-size: 48px; 
                font-family: Nucleolcons;  
                text-shadow: 0px 0px 1px #d8d0ec;
                font-weight: bold; 
                color: #64509b; 
                position: relative;
                border-color: #b1a2da"
                > Finding a job is just a click away</h1>  

            </div>

            <div class="container-fluid">
            <div class="row justify-content-center text-center"> 
                <router-link to="/register">
                <base-button style=
                "font-size: 24px; 
                font-weight: bold; 
                background:linear-gradient(0deg, #0B8F8812,  #7E65C2); 
                font-family: Nucleolcons;
                text-shadow: 0px 1px 10px #ffffff; 
                border-bottom: 1px solid #ffffff; 
                border-radius: 10px;
                padding:15px 30px; 
                border-color: #b1a2da; 
                height: auto; 
                color: #191426; 
                background-position: absolute;
                width: auto" 
                outline type="register" class="my-4 mt-mb-4">Explore Jobs</base-button>
                </router-link>
            </div>
            
        </div>
       
            </div>
          </b-row>
        </b-container>
      </div>
  </div>
   
    <!--Footer-->
    <div class="footer bg-gradient-busra py-5" style="background:linear-gradient(135deg, #0B8F8812,  #7E65C2)">
      <div class="container-fluid">
        <div class="row text-center">
            <div class="col-12" style="color: #191426">© 2021 - TDU </div>
        </div>
        <div class="row justify-content-center text-center">
            <div class="col-12 col-md-2">
                <a href="/" style="color: #32284d">Terms and conditions</a>
            </div>                        
            <div class="col-12 col-md-2">
                <a href="/" style="color: #32284d">Privacy policy</a>
            </div>                        
            <div class="col-12 col-md-1">
                <a href="/" style="color: #32284d">Careers</a>
            </div>
        </div>
      </div>        
    </div>
</div>
</template>
<script>

</script>
<style></style>
