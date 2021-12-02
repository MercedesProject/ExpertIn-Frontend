<template>
<div>
    <base-header
      class="header pb-8 pt-5 pt-lg-8 d-flex align-items-center">
      <!-- Mask -->
      <span class="mask bg-gradient-success opacity-8"></span>
      <!-- Header container -->
      <div class="container-fluid d-flex align-items-center">
        <div class="row">
          <div class="col-lg-7 col-md-10">
            
          </div>
        </div>
      </div>
    </base-header>
    <b-card no-body class="card-profile" alt="Image placeholder" img-top>
    <b-row class="justify-content-center">
      <b-col lg="3" class="order-lg-2">
        <div class="card-profile-image">
          <a href="#">
            <b-img src="img/theme/profil.jpg" rounded="circle" />
          </a>
        </div>
      </b-col>
    </b-row>

    <b-card-header class="text-center border-0 pt-8 pt-md-4 pb-0 pb-md-4">
      <div class="d-flex justify-content-between">
        <a href="#" class="btn btn-sm btn-info mr-4">Download Resume</a>
        <a href="#" class="btn btn-sm btn-default float-right">Send Message</a>
      </div>
    </b-card-header>

    <b-card-body class="pt-0">
      <b-row>
        <b-col >
          <div class="card-profile-stats d-flex justify-content-center mt-md-5">
              <div class="line">
                  <div>
                      <div>
                        <span class="heading">Email Adress:</span>
                    </div>
                    <div>
                        <span class="description">busrasari@gmail.com</span>
                    </div>
                  </div>
                  <div>
                      <div>
                <span class="heading">GitHub Link:</span>
            </div>
            <div>
                <span class="description">https://github.com/busrasari</span>
            </div>
                  </div>
              </div>
            
            
          </div>
        </b-col>
      </b-row>
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
                <a href="#">Show more</a>
                
              </div>
    </b-card-body>
    </b-card>
</div>
  
</template>
<script>
export default {};
</script>
<style></style>
