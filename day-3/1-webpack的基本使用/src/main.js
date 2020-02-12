const { add, mul } = require('./js/math')
require('./css/style.css')
require('./css/spc.less')

import Vue from 'vue'
import App from './vue/app'

new Vue({
  el: '#app',
  template: '<App/>',
  components: {
    App
  }
})
