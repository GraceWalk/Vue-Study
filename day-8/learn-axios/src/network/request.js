import axios from 'axios'

//方法1 传入success 和 error函数进行回调
// export function request(config, success, error) {
//   const instance = axios.create({
//     baseURL: 'http://httpbin.org/',
//     timeout: 5000
//   })

//   instance(config)
//   .then(res => {
//     success(res)
//   }).catch(res => {
//     error(res)
//   })
// }

//方法2 config内部传入 success 和 error函数进行回调
// export function request(config) {
//     const instance = axios.create({
//       baseURL: 'http://httpbin.org/',
//       timeout: 5000
//     })
  
//     instance(config.baseConfig)
//     .then(res => {
//       config.success(res)
//     }).catch(res => {
//       config.error(res)
//     })
//   }

//方法3 使用 new Promise
// export function request(config) {
//   return new Promise((resolve, reject) => {
//     const instance = axios.create({
//       baseURL: 'http://httpbin.org/',
//       timeout: 5000
//     })
  
//     instance(config)
//     .then((res) => {
//       resolve(res)
//     }).catch((res) => {
//       reject(res)
//     })
//   })
// }

//方法四 直接返回   instance方法本身就是new Promise
export function request(config) {
    const instance = axios.create({
      baseURL: 'http://httpbin.org/',
      timeout: 5000
    })
  
    return instance(config)
}