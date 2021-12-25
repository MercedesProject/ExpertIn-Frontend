<template>
  <base-nav
    container-classes="container-fluid"
    class="navbar-top navbar-expand"
    :class="{'navbar-dark': type === 'default'}"
  >
    <div class="d-flex justify-content-left ml-3 mr-n8" style="width:15%; height:20%"><img src="img/brand/logo.png" style="max-width:30%; max-height:20%">
    </div>

    <b-navbar-nav  class="align-items-lg-center mr-lg-auto">
           <b-nav-item to="/employeedashboard">
               <i class="ni ni-planet"></i>
               <span class="nav-link-inner--text"> Home </span>
           </b-nav-item>
           <b-nav-item to="/employeeapplications">
               <i class="ni ni-briefcase-24"></i>
               <span class="nav-link-inner--text"> My Applications </span>
           </b-nav-item>
           <b-nav-item to="/employeefavourites">
               <i class="ni ni-favourite-28"></i>
               <span class="nav-link-inner--text"> My Favourites </span>
           </b-nav-item>
           <b-nav-item to="/employeeprofile">
               <i class="ni ni-single-02"></i>
               <span class="nav-link-inner--text"> My Profile </span>
           </b-nav-item>
            <b-nav-item to="/employeemessages">
               <i class="ni ni-email-83"></i>
               <span class="nav-link-inner--text"> Messages </span>
           </b-nav-item>
        </b-navbar-nav>
       <!-- <b-navbar-nav  class="align-items-lg-center ml-lg-auto">
               <b-nav-item to="/login">
               <i class="ni ni-key-25 text-info"></i>
               <span class="nav-link-inner--text"> Login </span>
           </b-nav-item>
            <b-nav-item to="/logincompany">
               <i class="ni ni-circle-08 text-pink"></i>
               <span class="nav-link-inner--text"> For Company </span>
           </b-nav-item> -->

      
    <b-navbar-nav class="align-items-center ml-auto ml-md-0">
      <base-dropdown menu-on-right
                     class="nav-item"
                     tag="li"
                     title-tag="a"
                     title-classes="nav-link pr-0">
        <a href="#" class="nav-link pr-0" @click.prevent slot="title-container">
          <b-media no-body class="align-items-center">
                  <span class="avatar avatar-sm rounded-circle">
                    <img alt="Image placeholder" src="img/theme/profil.jpg">
                  </span>
            <b-media-body class="ml-2 d-none d-lg-block">
              <span class="mb-0 text-sm  font-weight-bold">{{this.$store.state.userData.firstName}} {{this.$store.state.userData.lastName}}</span>
            </b-media-body>
          </b-media>
        </a>

        <template>

          <b-dropdown-item href="#!">
            <i class="ni ni-single-02"></i>
            <span>Profile</span>
          </b-dropdown-item>
          <b-dropdown-item href="#!">
            <i class="ni ni-settings-gear-65"></i>
            <span>Settings</span>
          </b-dropdown-item>
          <div class="dropdown-divider"></div>
          <b-dropdown-item href="#!">
            <i class="ni ni-user-run"></i>
            <router-link to="/landingpage">Logout</router-link>
          </b-dropdown-item>
        </template>
      </base-dropdown>
    </b-navbar-nav>
  </base-nav>
</template>
<script>
import { CollapseTransition } from 'vue2-transitions';
import { BaseNav, Modal } from '@/components';

export default {
  components: {
    CollapseTransition,
    BaseNav,
    Modal
  },
  props: {
    type: {
      type: String,
      default: 'default', // default|light
      description: 'Look of the dashboard navbar. Default (Green) or light (gray)'
    },
    show: {
      type: Boolean,
      default: false,
      description:
        'Whether navbar menu is shown (valid for viewports < specified by `expand` prop)'
    },
     transparent: {
      type: Boolean,
      default: false,
      description: 'Whether navbar is transparent'
    },
    expand: {
      type: String,
      default: 'lg',
      description: 'Breakpoint where nav should expand'
    },
    menuClasses: {
      type: [String, Object, Array],
      default: '',
      description:
        'Navbar menu (items) classes. Can be used to align menu items to the right/left'
    },
    containerClasses: {
      type: [String, Object, Array],
      default: 'container',
      description:
        'Container classes. Can be used to control container classes (contains both navbar brand and menu items)'
    },
  },
  model: {
    prop: 'show',
    event: 'change'
  },
  computed: {
    routeName() {
      const { name } = this.$route;
      return this.capitalizeFirstLetter(name);
    },
    hasMenu() {
      return this.$slots.default;
    }
  },
  data() {
    return {
      activeNotifications: false,
      showMenu: false,
      searchModalVisible: false,
      searchQuery: ''
    };
  },
  methods: {
    capitalizeFirstLetter(string) {
      return string.charAt(0).toUpperCase() + string.slice(1);
    },
    toggleNotificationDropDown() {
      this.activeNotifications = !this.activeNotifications;
    },
    closeDropDown() {
      this.activeNotifications = false;
    },
    toggleMenu() {
      this.$emit('change', !this.show);
    },
    closeMenu() {
      this.$emit('change', false);
    },
    closeNavbar(){
    },
  }
};
</script>
