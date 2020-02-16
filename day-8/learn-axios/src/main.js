import Vue from 'vue'
import App from './App.vue'
// import axios from 'axios'
import {request} from './network/request'

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
// axios.all([
//   axios({
//     url: 'http://httpbin.org/base64/{02}'
//   }),
//   axios({
//     url: 'http://httpbin.org/base64/{03}'
//   })
// ]).then(axios.spread(({data}, res2) => {
//   document.querySelector('#app').innerHTML = data + res2.data
// }))

//使用封装模块
//1.
// request({
//   url: '/base64/{01}'
// }, success => {
//   console.log(success)
// }, error => {
//   console.log(error)
// })

// 2.
// request({
//   baseConfig: {
//     url: '/status/{404}'
//   },
//   success(suc) {
//     console.log(suc)
//   },
//   error(err) {
//     console.log(err)
//   }
// })
// 3.
request({
  url: '/base64/{200}'
}).then(res => {
  console.log(res)
}).catch(res => {
  console.log(res)
})
