<template>
  <div class =bg-gradient-busra>
    <!-- Header -->
    <div class="header py-7 py-lg-8">
    </div>
    <!-- Page content -->
    <b-container class="mt--8">
      <!-- Table -->
      <b-row class="justify-content-center">
        <b-col md="5">
          <b-card no-body class="bg-secondary border-0">
            <b-card-body class="px-lg-5 py-lg-5" style="background-color: white;">
              <validation-observer v-slot="{handleSubmit}" ref="formValidator">
                <b-form role="form" @submit.prevent="handleSubmit(onSubmit)">
                  <base-input alternative
                              class="mb-3"
                              prepend-icon="ni ni-hat-3"
                              placeholder="  Company Name"
                              name="Name"
                              :rules="{required: true}"
                              v-model="model.name">
                  </base-input>

                  <base-input alternative
                              class="mb-3"
                              prepend-icon="ni ni-email-83"
                              placeholder="  Company Email"
                              name="Email"
                              :rules="{required: true, email: true}"
                              v-model="model.email">
                  </base-input>

                  <base-input alternative
                              class="mb-3"
                              prepend-icon="ni ni-lock-circle-open"
                              placeholder="  Password"
                              type="password"
                              name="Password"
                              :rules="{required: true, min: 6}"
                              v-model="model.password" >
                  </base-input>
                  <!-- <div class="text-muted font-italic"><small>password strength: <span
                    class="text-success font-weight-700">strong</span></small></div> -->
                  <b-row class=" my-4">
                    <b-col cols="12">
                      <div class="text-muted text-center mt-2 mb-4"></div>
                        <div class="text-center">
                          <a href="#" class="btn btn-neutral btn-icon">
                           <span class="btn-inner--icon"><img src="img/icons/common/google.svg"></span>
                           <span class="btn-inner--text"> Sign up with Google</span>
                         </a>
                        </div>
                      <div class="mt-4 mb-4">
                        <base-input :rules="{ required: { allowFalse: false } }" name=Privacy Policy>
                          <b-form-checkbox v-model="model.agree">
                            <span class="text-muted">I agree with the <a href="#!">Privacy Policy</a></span>
                          </b-form-checkbox>
                        </base-input>
                        <div class="text-center">
                         <b-button style="background-color: #3aaf85; border-color: #3aaf85; width: 60%" type="submit" variant="primary" class="mt-4">Create account</b-button>
                        </div>
                      </div>
                    </b-col>
                  </b-row>
                  
                </b-form>
              </validation-observer>
            </b-card-body>
          </b-card>
        </b-col>
            <b-col md="2"></b-col>    
         <b-col md="5">
            <b-img src="img/theme/company_register.png" fluid />
          </b-col>
      </b-row>
    </b-container>
  </div>
</template>
<script>

  export default {
    name: 'register',
    data() {
      return {
        model: {
          name: '',
          email: '',
          password: '',
          agree: false
        }
      }
    },
    methods: {
      onSubmit() {
        // this will be called only after form is valid. You can do an api call here to register users
      }
    }

  };
</script>
<style></style>
