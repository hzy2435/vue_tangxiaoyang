import Vue from 'vue'
import App from './App.vue'
import store from './store'

new Vue({
  el: '#app',
  render: h => h(App),
  store   // 配置 store 选项为 store 对象, 在子组件中可以通过 this.$store 访问该 store 对象
});
