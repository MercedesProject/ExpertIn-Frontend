import Vue from 'vue';
import DashboardPlugin from './plugins/dashboard-plugin';
import App from './App.vue';
import { appAxios } from './utils/appAxios';
import Axios from 'axios';
import { createApp } from './App.vue';
import store from './store/index';
import VueCompositionAPI from '@vue/composition-api'
import Multiselect from '@vueform/multiselect'
// router setup
import router from './routes/router';
Axios.defaults.headers.common['expertin'] = 'Expert In'
Axios.defaults.baseURL = 'https://localhost:44362'
    // plugin setup
Vue.use(DashboardPlugin);
Vue.use(appAxios);
Vue.use(VueCompositionAPI);
//Vue.prototype.$fileCVPath = 'C:\\Users\\kemal\\Documents\\GitHub\\Projects\\Expert-In-Backend-Release\\WebApplication1\\wwwroot\\Uploads\\CurriculumVitaes\\'
Vue.prototype.$fileCVPath = 'C:\\Users\\arsla\\Documents\\GitHub\\Projects\\Expert-In-Backend-Release\\WebApplication1\\wwwroot\\Uploads\\CurriculumVitaes\\'
    /* eslint-disable no-new */
new Vue({
    el: '#app',
    store,
    render: h => h(App),
    router
});