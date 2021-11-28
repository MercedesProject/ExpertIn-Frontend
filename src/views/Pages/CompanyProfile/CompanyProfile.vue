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
            <router-link to="/editformforcompany"> 
              <a href="#!" class="btn btn-info">Edit profile</a>
            </router-link>
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
                      src="img/brand/logo.png"
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
              </div>
            </div>
            <div class="card-body pt-0 pt-md-4">
              
              <div class="text-center">
                <hr class="my-4" />
                <h3>
                  Expert In<span class="font-weight-light">, 27</span>
                </h3>
                <div class="h5 font-weight-300">
                  <i class="ni location_pin mr-2"></i>Frankfurt, Germany 
                </div>
                <div class="h5 mt-4">
                  <i class="ni business_briefcase-24 mr-2"></i>Internet 
                </div>
                
                <hr class="my-4" />
                <p>
                  Yeni bir istihdam platformu olan Expert In,
                   iş arama ve işe alım süreçlerinde yeni nesil teknolojilerle, 
                   iş arayanlarla işverenleri internet ortamında bir araya getiriyor.
                </p>
                <a href="#">Show more</a>
              </div>
            </div>
          </div>
        </div>
        <div class="col-xl-12 order-xl-1">
          <card shadow type="secondary">
            <template v-slot:header>
              <div class="bg-white border-0">
                <div class="row align-items-center">
                  <div class="col-8">
                    <h3 class="mb-0">My account</h3>
                  </div>
                  <div class="col-4 text-right">
                    <a href="#!" class="btn btn-sm btn-primary">Settings</a>
                  </div>
                </div>
              </div>
            </template>

            <form>
              <h6 class="heading-small text-muted mb-4">User information</h6>
              <div class="pl-lg-4">
                <div class="row">
                  <div class="col-lg-6">
                    <base-input
                      alternative=""
                      label="Username"
                      placeholder="Username"
                      input-classes="form-control-alternative"
                      v-model="model.username"
                    />
                  </div>
                  <div class="col-lg-6">
                    <base-input
                      alternative=""
                      label="Email address"
                      placeholder="jesse@example.com"
                      input-classes="form-control-alternative"
                      v-model="model.email"
                    />
                  </div>
                </div>
                <div class="row">
                  <div class="col-lg-6">
                    <base-input
                      alternative=""
                      label="First name"
                      placeholder="First name"
                      input-classes="form-control-alternative"
                      v-model="model.firstName"
                    />
                  </div>
                  <div class="col-lg-6">
                    <base-input
                      alternative=""
                      label="Last name"
                      placeholder="Last name"
                      input-classes="form-control-alternative"
                      v-model="model.lastName"
                    />
                  </div>
                </div>
              </div>
              <hr class="my-4" />
              <!-- Address -->
              <h6 class="heading-small text-muted mb-4">Contact information</h6>
              <div class="pl-lg-4">
                <div class="row">
                  <div class="col-md-12">
                    <base-input
                      alternative=""
                      label="Address"
                      placeholder="Home Address"
                      input-classes="form-control-alternative"
                      v-model="model.address"
                    />
                  </div>
                </div>
                <div class="row">
                  <div class="col-lg-4">
                    <base-input
                      alternative=""
                      label="City"
                      placeholder="City"
                      input-classes="form-control-alternative"
                      v-model="model.city"
                    />
                  </div>
                  <div class="col-lg-4">
                    <base-input
                      alternative=""
                      label="Country"
                      placeholder="Country"
                      input-classes="form-control-alternative"
                      v-model="model.country"
                    />
                  </div>
                  <div class="col-lg-4">
                    <base-input
                      alternative=""
                      label="Postal code"
                      placeholder="Postal code"
                      input-classes="form-control-alternative"
                      v-model="model.zipCode"
                    />
                  </div>
                </div>
              </div>
              <hr class="my-4" />
              <!-- Description -->
              <h6 class="heading-small text-muted mb-4">About me</h6>
              <div class="pl-lg-4">
                <div class="form-group">
                  <base-input alternative="" label="About Me">
                    <textarea
                      rows="4"
                      class="form-control form-control-alternative"
                      placeholder="A few words about you ..."
                    >
A beautiful Dashboard for Bootstrap 4. It is Free and Open Source.</textarea
                    >
                  </base-input>
                </div>
              </div>
            </form>
          </card>
        </div>
        

        
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "user-profile",
  data() {
    return {
      model: {
        username: "",
        email: "",
        firstName: "",
        lastName: "",
        address: "",
        city: "",
        country: "",
        zipCode: "",
        about: "",
      },
    };
  },
};
</script>
<style></style>
