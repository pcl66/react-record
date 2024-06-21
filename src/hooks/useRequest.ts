import axios from 'axios'
import { useNavigate } from 'react-router-dom'

export type Options = {
  url: string
  method: string
  data?: any
  headers?: any
  params?: any
  withCredentials?: boolean
  timeout?: number
  onSuccess?: (res: any) => void
  onError?: (err: any) => void
}

export const useRequest = () => {
  const nav = useNavigate()
  const axiosInstance = axios.create({
    // baseURL: isDev ? '/' : 'https://mangosteen2.hunger-valley.com/',
    baseURL: isDev ? 'https://mangosteen2.hunger-valley.com/' : 'https://mangosteen2.hunger-valley.com/',
    headers: {
      post: {
        'Content-Type': 'application/json',
      },
    },
    timeout: 5000,
  })
  // Request Interceptor
  axiosInstance.interceptors.request.use(
    (config) => {
      const token = localStorage.getItem('token')
      if (token) {
        config.headers.Authorization = `Bearer ${token}`
      }
      return config
    },
    (err) => {
      return Promise.reject(err)
    },
  )
  // Response Interceptor
  axiosInstance.interceptors.response.use(
    (res) => {
      return res
    },
    (err) => {
      if (err.response.status === 401) {
        nav('/login')
      }
      return Promise.reject(err)
    },
  )

  return axiosInstance
}
