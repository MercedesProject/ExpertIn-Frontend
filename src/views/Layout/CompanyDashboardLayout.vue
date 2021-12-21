<template>
  <div>
   <!-- <base-nav
      v-model="showMenu"
      :transparent="true"
      menu-classes="justify-content-end"
      class="navbar-horizontal navbar-main navbar-top bg-gradient-success"
      expand="lg"
    >
     <template>
       <div class="navbar-collapse-header">
         <b-row>
           <b-col cols="6" class="collapse-brand">
             <router-link to="/">
               <img src="img/brand/logo.png">
             </router-link>
           </b-col>
           <b-col cols="6" class="collapse-close">
             
           </b-col>
         </b-row>
       </div>
         <b-navbar-nav  class="align-items-lg-center ml-lg-auto">
           <b-nav-item to="/dashboard">
               <i class="ni ni-planet"></i>
               <span class="nav-link-inner--text">Anasayfa</span>
           </b-nav-item>
           <b-nav-item to="/register">
               <i class="ni ni-circle-08"></i>
               <span class="nav-link-inner--text">İlanlar</span>
           </b-nav-item>
           <b-nav-item to="/login">
               <i class="ni ni-key-25"></i>
               <span class="nav-link-inner--text">Mesajlar</span>
           </b-nav-item>
           <b-nav-item to="/profile">
               <i class="ni ni-single-02"></i>
               <span class="nav-link-inner--text">Login</span>
           </b-nav-item>
          </b-navbar-nav>
    </template>
    </base-nav> -->
    <div class="main-content navbar-nav">
      <company-dashboard-navbar :type="$route.meta.navbarType"></company-dashboard-navbar>
        <fade-transition :duration="200" origin="center top" mode="out-in">
          <router-view></router-view>
        </fade-transition>
      </div>
      <content-footer v-if="!$route.meta.hideFooter"></content-footer>
    </div>
</template>

<script>
  import PerfectScrollbar from 'perfect-scrollbar';
  import 'perfect-scrollbar/css/perfect-scrollbar.css';

  function hasElement(className) {
    return document.getElementsByClassName(className).length > 0;
  }

  function initScrollbar(className) {
    if (hasElement(className)) {
      new PerfectScrollbar(`.${className}`);
    } else {
      // try to init it later in case this component is loaded async
      setTimeout(() => {
        initScrollbar(className);
      }, 100);
    }
  }

  import CompanyDashboardNavbar from './CompanyDashboardNavbar.vue';
  import ContentFooter from './ContentFooter.vue';
  import DashboardContent from './Content.vue';
  import { FadeTransition } from 'vue2-transitions';
   import { BaseNav } from '@/components';

  export default {
    components: {
      CompanyDashboardNavbar,
      ContentFooter,
      DashboardContent,
      FadeTransition,
      BaseNav,
    },
    data(){
      return{
        showMenu: false,
      };
    },
    methods: {
      initScrollbar() {
        let isWindows = navigator.platform.startsWith('Win');
        if (isWindows) {
          initScrollbar('sidenav');
        }
      },
       toggleNavbar() {
        document.body.classList.toggle('nav-open');
        this.showMenu = !this.showMenu;
      },
      closeMenu() {
        document.body.classList.remove('nav-open');
        this.showMenu = false;
      },
    },
    mounted() {
      this.initScrollbar()
    }
  };
</script>
<style lang="scss">
</style>
