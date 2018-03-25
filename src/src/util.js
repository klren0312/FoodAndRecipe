import axios from 'axios'

axios.defaults.timeout = 5000
axios.defaults.baseURL = ' https://easy-mock.com/mock/5ab3141317cfc314f32c4c23/api'
axios.defaults.headers = {'Content-Type':'application/json'}
/**
 * 请求拦截器
 */
axios.interceptors.request.use(function (config) {
  return config
}, function (error) {
  return Promise.reject(error)
})

/**
 * 响应拦截器
 */
axios.interceptors.response.use(function (response) {
  return response.data
}, function (error) {
  return Promise.reject(error)
})

export default axios