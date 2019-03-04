import Vue from 'vue'
import VueRouter from 'vue-router'
import axios from 'axios'
import App from './App.vue'
import VueRouterConfig from './vueRouter.config'

Vue.use(VueRouter);

var router = new VueRouter(VueRouterConfig);

Vue.prototype.$http = axios;  // 定义全局 axios

new Vue({
  el: '#app',
  render: h => h(App),
  router
});
