import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex);
import store from './store'
import App from './App.vue'
import router from './router'
import axios from 'axios'



Vue.prototype.$http = axios;

Vue.config.productionTip = false;

new Vue({
    router,
    store,
    axios,
    render: h => h(App)
}).$mount('#app');
