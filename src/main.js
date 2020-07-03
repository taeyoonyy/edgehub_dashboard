//npm i vue-router

import Vue from 'vue';
import App from './App.vue';
import router from './router/index';
import BootstrapVue from 'bootstrap-vue';

//css
import './style/style.css';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap-vue/dist/bootstrap-vue.css';

Vue.config.productionTip = false;

Vue.use(BootstrapVue);

new Vue({
  router,
  render: (h) => h(App),
}).$mount('#app');
