<template>
  <div>
    <!-- Header -->
    <div class="header bg-gradient-busra py-6">      
    </div>
    <div class="body bg-gradient-busra">
      <!-- Page content -->
    <b-container class="mt--8 ">
       &nbsp;
      <b-row class="justify-content-center ">
                  <b-col md="5">
                  <!-- <h1 style = "font-family:Lato; font-size: 250%; color: black; allign: center;" class="text-center">Sign In to Expert In!</h1>    -->
            <b-img src="img/theme/login_company_page.svg" fluid />
                      <h4  class="text-center" >If you don't have an account yet</h4>
                        <h4  class="text-center"> You can <router-link to="/registercompany" style= "color: #7E57C2;" class="text"><bold>Register here!</bold></router-link></h4>
          </b-col>
          <b-col md="2"></b-col>  
        <b-col md="5" class="mb-5 mb-xl-0 ">
           <h1 style = "font-family:Lato; font-size: 250%; color: black; padding-left: 10%" class="text-left">Sign In</h1> 
          <b-card no-body class="bg-secondary border-0 mb-0">
            <b-card-header >
               &nbsp;
              <div class="btn-wrapper text-center ">
                <a href="#" class="btn btn-neutral btn-icon">
                  <span class="btn-inner--icon"><img src="img/icons/common/google.svg"></span>
                  <span class="btn-inner--text"> Sign in with Google</span>
                </a>
              </div>
            </b-card-header>
            <b-card-body class="px-lg-5 py-lg-5" style="background-color: white;">
              
              <validation-observer v-slot="{handleSubmit}" ref="formValidator">
                <b-form role="form" @submit.prevent="handleSubmit(onSubmit)">
                  <base-input alternative
                              class="mb-3"
                              name="Email"
                              :rules="{required: true, email: true}"
                              prepend-icon="ni ni-email-83"
                              placeholder="  Company Email"
                              v-model="model.email">
                  </base-input>

                  <base-input alternative
                              class="mb-3"
                              name="Password"
                              :rules="{required: true, min: 6}"
                              prepend-icon="ni ni-lock-circle-open"
                              type="Password"
                              placeholder="  Password"
                              v-model="model.password" style="background-color:#8A78C8;"> 
                  </base-input>
               <b-row  class="justify-content-end">
              <router-link to="/forgotpasswordcompany" class="text-dark"><small>Forgot password?</small></router-link>
            </b-row>
                  <b-form-checkbox v-model="model.rememberMe">Remember me</b-form-checkbox>
                  <div class="text-center">
                    <base-button style="background-color: #8A78C8; border-color: #8A78C8; width: 60%" native-type="submit" class="my-4">Sign in</base-button>
                  </div>
                </b-form>
              </validation-observer>
            </b-card-body>
          </b-card>
        </b-col>
      </b-row>
    </b-container>
    <!-- <div class="footer bg-gradient-busra"></div> -->
    </div>
  </div>
  
</template>
<script>
  export default {
    data() {
      return {
        model: {
          email: '',
          password: '',
          rememberMe: false
        }
      };
    },
    methods: {
      onSubmit() {
        // this will be called only after form is valid. You can do api call here to login
      }
    }
  };
</script>
