import Vue from 'vue'
import App from './App'
import vue_resource from 'vue-resource'
/*  初始化插件 */
Vue.use(vue_resource)
/* eslint-disable no-new */
new Vue({
  el: 'body',
  components: { App }
})
