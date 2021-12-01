<template>
  <div >
    <!-- Header -->
    <div class="header bg-gradient-busra py-8">   
    </div>
    <div class="body bg-gradient-busra">
      <!-- Page content -->
    <b-container class="mt--9">
       &nbsp;
      <b-row class="justify-content-center ">
          <b-col md="5"> 
            <b-img src="img/theme/forgot.svg" fluid />
          </b-col>
          <b-col md="2"></b-col>  
        <b-col md="5" class="mb-5 mb-xl-0 ">
          <b-card no-body class="bg-secondary border-0 mb-0">
            <b-card-header >
     
                  <h1 style = "font-family:Lato; font-size: 250%; color: black;" class="text-center">Forgot Password</h1> 
   
            </b-card-header>
            <b-card-body class="px-lg-5 py-lg-5" style="background-color: white;">
              <validation-observer v-slot="{handleSubmit}" ref="formValidator">
                <b-form role="form" @submit.prevent="handleSubmit(onSubmit)">
                  <base-input alternative
                              class="mb-3"
                              name="Email"
                              :rules="{required: true, email: true}"
                              prepend-icon="ni ni-email-83"
                              placeholder="  Email"
                              v-model="model.email">
                  </base-input>
                  <div class="text-center">
                    <base-button style="background-color: #8A78C8; border-color: #8A78C8; width: 60%" native-type="submit" class="my-4">Reset Password</base-button> 
                  </div>
                </b-form>
              </validation-observer>
                <h4  class="text-center"><button 
  type="button"    
  @click="hasHistory() 
    ? $router.go(-1) 
    : $router.push('/')" class="my-5 btn btn-outline-success">&laquo; 
  Back to Login
</button></h4>
            </b-card-body>
          </b-card>
        </b-col>
      </b-row>
    </b-container>
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
        },
        isLogin: false
      };
    },
    methods: {
      onSubmit() {
        // this will be called only after form is valid. You can do api call here to login
      },
      async login(){
        const googleUser = await this.$gAuth.signIn()
        console.log("googleUser", googleUser);
      },
       hasHistory () { return window.history.length > 2 }
    }
  };
</script>
