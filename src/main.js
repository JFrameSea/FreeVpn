import Vue from 'vue'
import App from './App'
import vue_resource from 'vue-resource'
import { paginates } from './filter/filters'
/*  初始化插件 */
Vue.use(vue_resource)
/* 注册过滤器 */
Vue.filter('paginates', paginates)
/* eslint-disable no-new */
new Vue({
  el: 'body',
  components: { App }
})
