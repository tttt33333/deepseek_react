import axios from 'axios'

// 统一请求实例：baseURL 走 vite 代理，避免跨域
const request = axios.create({
  baseURL: '/api',
  timeout: 60000,
})

request.interceptors.response.use(
  // 直接返回业务数据，调用方不用再 .data
  (response) => response.data,
  (error) => {
    console.error('请求失败:', error)
    return Promise.reject(error)
  }
)

export default request
