import Vue from 'vue'
import App from './App.vue'
import axios from 'axios'

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')

//axios框架的基本使用 
// axios({
//   url: 'http://httpbin.org/base64/{01}'
// }).then(res => {
//   document.querySelector('#app').innerHTML = res.data
// })

//axios框架的并发请求
axios.all([
  axios({
    url: 'http://httpbin.org/base64/{02}'
  }),
  axios({
    url: 'http://httpbin.org/base64/{03}'
  })
]).then(axios.spread(({data}, res2) => {
  document.querySelector('#app').innerHTML = data + res2.data
}))