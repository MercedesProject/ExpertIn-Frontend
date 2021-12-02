<template>
  <div>
    <base-header class="pb-5 pt-md-8 bg-gradient-success">
    <!-- Mask -->
      <span class="mask bg-gradient-success opacity-8"></span>
      <!-- Header container -->
      <div class="container-fluid d-flex align-items-center">
        <div class="row">
          <div class="col-lg-12">
            <h1 class="display-2 text-white">Edit Profile</h1>
            
          </div>
        </div>
      </div>
    </base-header>
    <card>

    <b-form @submit.prevent="updateProfile">
      <h6 class="heading-small text-muted mb-4">User information</h6>

      <div class="pl-lg-4">
        <b-row>
          
          <div class="col-lg-6">
            
            <router-link to="/resumeupload" >
            <base-button outline type="default">Resume Upload</base-button>
            </router-link>
            
          </div>
          
          
        </b-row>
        <b-row>
          <b-col lg="6">
            <base-input
              type="text"
              label="Username"
              placeholder="Username"
              v-model="user.username"
            >
            </base-input>
          </b-col>
          <b-col lg="6">
            <base-input
              type="email"
              label="Email address"
              placeholder="mike@email.com"
              v-model="user.email"
            >
            </base-input>
          </b-col>
        </b-row>
        
        <b-row >
          <b-col lg="6">
            
            <base-dropdown>
              <template v-slot:title>
                
                <base-input
                  type="text"
                  placeholder=""
                  v-model="user.title"
                >
                </base-input>
              </template>
              <a class="dropdown-item" href="#">Student</a>
              <a class="dropdown-item" href="#">Junior Developer</a>
              <a class="dropdown-item" href="#">Senior Developer</a>
            </base-dropdown>
            
          </b-col>
          <b-col lg="3">
            <base-input
              type="text"
              label="First Name"
              placeholder="First Name"
              v-model="user.firstName"
            >
            </base-input>
          </b-col>
          <b-col lg="3">
            <base-input
              type="text"
              label="Last Name"
              placeholder="Last Name"
              v-model="user.lastName"
            >
            </base-input>
          </b-col>
        </b-row>
        <b-row>
          <b-col lg="6">
            <base-input
              type="text"
              label="GitHub Link"
              placeholder="github.com/busrasari"
              v-model="user.github"
            >
            </base-input>
          </b-col>
          <b-col lg="6">
            <base-input
              type="email"
              label="Linkedin Link"
              placeholder="https://www.linkedin.com/in/busrasari/"
              v-model="user.linkedin"
            >
            </base-input>
          </b-col>
        </b-row>
      </div>
      <hr class="my-4">
      <!-- Description -->
      <h6 class="heading-small text-muted mb-4">About me</h6>
      <div class="pl-lg-4">
        <b-form-group label="About Me" label-class="form-control-label" class="mb-0" label-for="about-form-textaria">
         <!--  <label class="form-control-label">About Me</label> -->
          <b-form-textarea rows="4" value="" id="about-form-textaria" placeholder="A few words about you ..."></b-form-textarea>
        </b-form-group>
      </div>
      <hr class="my-4">

      <!-- Address -->
      <h6 class="heading-small text-muted mb-4">Contact information</h6>

      <div class="pl-lg-4">
        <b-row>
          <b-col md="12">
            <base-input
              type="text"
              label="Address"
              placeholder="Home Address"
              v-model="user.address"
            >
            </base-input>
          </b-col>
        </b-row>
        <b-row>
          <b-col lg="4">
            <base-input
              type="text"
              label="City"
              placeholder="City"
              v-model="user.city"
            >
            </base-input>
          </b-col>
          <b-col lg="4">
            <base-input
              type="text"
              label="Country"
              placeholder="Country"
              v-model="user.country"
            >
            </base-input>
          </b-col>
          <b-col lg="4">
            <base-input
              label="Phone Number"
              placeholder=""
              v-model="user.email"
            >
            </base-input>
          </b-col>
        </b-row>
      </div>
      <hr class="my-4">
<!-- Education -->
      <h6 class="heading-small text-muted mb-4">Education Information</h6>

      <div class="pl-lg-4">
        <b-row>
          <b-col md="4">
            <base-input
              type="text"
              label="School"
              placeholder="Turkish German University"
              v-model="user.email"
            >
            </base-input>
          </b-col>
          <b-col md="4">
            <base-input
              type="text"
              label="Degree"
              placeholder="Lisans"
              v-model="user.email"
            >
            </base-input>
          </b-col>
          <b-col md="4">
            <base-input
              type="text"
              label="Study"
              placeholder="Computer Engineering"
              v-model="user.email"
            >
            </base-input>
          </b-col>
        </b-row>
        <b-row>
          <b-col lg="6">
            <base-input
              type="text"
              label="Start Date"
              placeholder="Start Date"
              v-model="user.email"
            >
            </base-input>
          </b-col>
          <b-col lg="6">
            <base-input
              type="text"
              label="End Date"
              placeholder="End Date"
              v-model="user.email"
            >
            </base-input>
          </b-col>
          
        </b-row>
      </div>
      <hr class="my-4">
      <!-- Experience-->
      <h6 class="heading-small text-muted mb-4">Experience</h6>

      <div class="pl-lg-4">
        <b-row>
          <b-col md="4">
            <base-input
              type="text"
              label="Title"
              placeholder="Junior Developer"
              v-model="user.title"
            >
            </base-input>
          </b-col>
          <b-col lg="4">
            <base-input
              type="text"
              label="Firma Name"
              placeholder="Doğuş"
              v-model="user.email"
            >
            </base-input>
          </b-col>
          <b-col lg="4">
            <base-input
              type="text"
              label="Location"
              placeholder="Maslak"
              v-model="user.email"
            >
            </base-input>
          </b-col>
        </b-row>
        <b-row>
          <b-col lg="4">
            <base-input
              type="text"
              label="Start Date"
              placeholder="Start Date"
              v-model="user.email"
            >
            </base-input>
          </b-col>
          <b-col lg="4">
            <base-input
              type="text"
              label="End Date"
              placeholder="End Date"
              v-model="user.email"
            >
            </base-input>
          </b-col>
          <b-col lg="4">
            <h4>Current</h4>
            <base-checkbox class="mb-3" v-model="checkboxes.checked">
              
            </base-checkbox>
          </b-col>
        </b-row>
      </div>
      <hr class="my-4">
      <!-- Skill -->
      <h6 class="heading-small text-muted mb-4">Skill</h6>

      <div class="pl-lg-4">
        <b-row>
          <b-col md="1">
            <span><badge type="default">Skill 1</badge></span>
            
          </b-col>
          <b-col md="1">
            <span><badge type="default">Skill 2</badge></span>
          </b-col>
          <b-col md="1">
            <span><badge type="default">Skill 3</badge></span>
            
          </b-col>
          <b-col md="1">
            <span><badge type="default">Skill 4</badge></span>
          </b-col>
          <b-col md="1">
            <span><badge type="default">Skill 5</badge></span>
            
          </b-col>
          <b-col md="1">
            <span><badge type="default">Skill 6</badge></span>
          </b-col>
          <b-col md="1">
            <span><badge type="default">Skill 7</badge></span>
            
          </b-col>
          
        </b-row>
        <b-row>
          <b-col md="1">
            <span><badge type="default">Skill 8</badge></span>
          </b-col>
          <b-col md="1">
            <span><badge type="default">Skill 9</badge></span>
            
          </b-col>
          <b-col md="1">
            <span><badge type="default">Skill 10</badge></span>
          </b-col>
          <b-col md="1">
            <span><badge type="default">Skill 11</badge></span>
            
          </b-col>
          <b-col md="1">
            <span><badge type="default">Skill 12</badge></span>
          </b-col>
          
        </b-row>
      </div>
      <hr class="my-4">
            <!-- Project -->
      <h6 class="heading-small text-muted mb-4">Project</h6>

      <div class="pl-lg-4">
        <b-row>
          <b-col lg="6">
            
            <base-input
              type="text"
              label="Project Name"
              placeholder=""
              v-model="user.email"
            >
            </base-input>
          </b-col>
          <b-col lg="6">
            <base-input
              type="text"
              label="URL"
              placeholder=""
              v-model="user.email"
            >
            </base-input>
          </b-col>
          
        </b-row>
        <b-row>
          <b-col lg="4">
            <base-input
              type="text"
              label="Start Date"
              placeholder="Start Date"
              v-model="user.email"
            >
            </base-input>
          </b-col>
          <b-col lg="4">
            <base-input
              type="text"
              label="End Date"
              placeholder="End Date"
              v-model="user.email"
            >
            </base-input>
          </b-col>
          <b-col lg="4">
            <h4>Current</h4>
            <base-checkbox class="mb-3" v-model="checkboxes.checked">
              
            </base-checkbox>
          </b-col>
        </b-row>
        
        <div class="pl-lg-12">
          <b-form-group label="Description" label-class="form-control-label" class="mb-0" label-for="about-form-textaria">
          <!--  <label class="form-control-label">Description for Project</label> -->
            <b-form-textarea rows="4" value="" id="about-form-textaria" placeholder="A few words about you ..."></b-form-textarea>
          </b-form-group>
          
        
        </div>
        <div class="pl-lg-4" style="padding-top:10px">
        <b-row>
           <div class="col-lg-6">
            <base-button size="sm" type="default"> Add Project</base-button>
          </div>

        </b-row>
        
      </div>
        
      </div>
      <hr class="my-4">
            <!-- Certificate -->
      <h6 class="heading-small text-muted mb-4">Certificate</h6>

      <div class="pl-lg-4">
        <b-row>
           <div class="col-lg-6">
            <base-button outline type="default">Upload Certificate</base-button>
          </div>

        </b-row>
        
      </div>
      
      <h6 class="heading-small text-muted mb-4"></h6>
      <b-row>
          
          <div class="col-lg-6 "> 
            <base-button type="default">Save</base-button>
          </div>
          

      </b-row>
      

    </b-form>
    </card>
  </div>
  
</template>
<script>
import DropZone from "@/components/Inputs/DropZone.vue";
export default {
  name:"editProfile",
  components:{
    DropZone,
  },
  
  data() {
    return {
      user: {
        company: 'Creative Code Inc.',
        username: 'michael23',
        email: '',
        github:'',
        linkedin:'',
        title:'',
        firstName: 'Mike',
        lastName: 'Andrew',
        address: 'Bld Mihail Kogalniceanu, nr. 8 Bl 1, Sc 1, Ap 09',
        city: 'New York',
        country: 'USA',
        postalCode: '',
        aboutMe: `Lamborghini Mercy, Your chick she so thirsty, I'm in that two seat Lambo.`
      },
      checkboxes: {
            unchecked: false,
            checked: true,
            uncheckedDisabled: false,
            checkedDisabled: true
          }
    };
  },
  methods: {
    updateProfile() {
      //alert('Your data: ' + JSON.stringify(this.user));
    },
    
  }
};
</script>
<style lang="scss" scoped>
.home {
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: #f1f1f1;

  h1{
    font-size: 40px;
    margin-bottom: 32px;
  }
  
  .file-info {
    margin-top: 32px;
  }
}
</style>
