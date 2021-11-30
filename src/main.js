import Vue from 'vue';
import DashboardPlugin from './plugins/dashboard-plugin';
import App from './App.vue';
import store from './store'
import './auth'

// google auth setup
// import GAuth from 'vue-google-oauth2'
// const gauthOption = {
//   clientId: '814398517460-3i1orkeppdhqv2a3jj1pca5pn6t5mulq.apps.googleusercontent.com',
//   scope: 'profile email',
//   prompt: 'consent',
//   fetch_basic_profile: true
// }
// Vue.use(GAuth, gauthOption)

// router setup
import router from './routes/router';
// plugin setup
Vue.use(DashboardPlugin);

Vue.config.productionTip = false
/* eslint-disable no-new */
new Vue({
    el: '#app',
    store,
    render: h => h(App),
    router
});