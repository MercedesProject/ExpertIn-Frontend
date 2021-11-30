<template>
  <div>
    <base-header
      class="header pb-8 pt-5 pt-lg-8 d-flex align-items-center"
      style="
        min-height: 600px;
        background-image: url(img/theme/img-1-1000x600.jpg);
        background-size: cover;
        background-position: center top;
      "
    >
      <!-- Mask -->
      <span class="mask bg-gradient-success opacity-8"></span>
      <!-- Header container -->
      <div class="container-fluid d-flex align-items-center">
        <div class="row">
          <div class="col-lg-7 col-md-10">
            <h1 class="display-2 text-white">Hello Büşra</h1>
            <p class="text-white mt-0 mb-5">
              This is your profile page. You can add your projects and edit your skills and personal information.
            </p>
            <router-link to="/editprofilform"> 
              <a href="#!" class="btn btn-info">Edit profile</a>
            </router-link>
            
          </div>
        </div>
      </div>
    </base-header>

    <div class="container-fluid mt--7">
      <div class="row">
        <div class="col-xl-4 order-x2-1 mb-5 mb-xl-0">
          <div class="card card-profile shadow">
            <div class="row justify-content-center">
              <div class="col-lg-3 order-lg-2">
                <div class="card-profile-image">
                  <a href="#">
                    <img
                      src="img/theme/profil.jpg"
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
                <base-button size="sm" type="default" class="mr-4"
                  >CV Download</base-button
                >
                <base-button size="sm" type="default" class="float-right"
                  >Send Message</base-button
                >
              </div>
            </div>
            <div class="card-body pt-0 pt-md-4">
              <div style="padding: 30px 70px 30px 123px" > 
                <base-button size="sm" type="default"> 
                <i class="ni ni-fat-add"></i> Add Photo</base-button>
              </div>
              <div class="text-center">
                <h3>
                  Büşra Sarı<span class="font-weight-light">, 22, 1.74</span>
                </h3>
                <div class="h5 font-weight-300">
                  <i class="ni location_pin mr-2"></i>Istanbul, Turkey
                </div>
                <div class="h5 mt-4">
                  <i class="ni business_briefcase-24 mr-2"></i>Computer Engineer
                </div>
                <div>
                  <i class="ni education_hat mr-2"></i> Turkish German University
                </div>
                <hr class="my-4" />
                
                <p>Ben Türk Alman Üniversitesi Bilgisayar Mühendisliği son sınıf öğrencisiyim.</p>
                    
                
              </div>
            </div>
          </div>
        </div>
        <div class="col-xl-8 order-xl-1">
          <card shadow type="secondary">
            <template v-slot:header>
              <div class="bg-white border-0">
                <div class="row align-items-center">
                  <div class="col-8">
                    <h3 class="mb-0">My account</h3>
                  </div>
                  <div class="col-4 text-right">
                    <a href="#!" class="btn btn-sm btn-default">Settings</a>
                  </div>
                </div>
              </div>
            </template>

            <form>
              <h6 class="heading-small text-muted mb-4">User information</h6>
              <div class="pl-lg-4">
                <div class="row">
                  <div class="col-lg-6">
                    <base-button outline type="default">Resume Upload</base-button>
                  </div>
                  <div class="col-lg-6">
                    <base-button outline type="default">Edit User Information</base-button>
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
