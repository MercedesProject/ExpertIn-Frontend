import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)
const state = {
    userData: null,
}
const getters = {
    getUserData: state => state.userData
}
const mutations = {
    initUserData(state, userData) {
        state.userData = userData;
    },
    logOutUser(state) {
        state.userData = null;
    },
    setUser(state, userData) {
        state.userData = userData;
    },
}
export default new Vuex.Store({
    state,
    getters,
    mutations
})