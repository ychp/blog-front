// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import filters from './filter'

Vue.config.productionTip = false

Vue.filter('dateCn', filters.dateCn)
Vue.filter('dateSlash', filters.dateSlash)

Vue.use(require('vue-resource'))

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  render: h => h(App)
})
