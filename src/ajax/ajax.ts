import axios from 'axios'

axios.defaults.baseURL = isDev ? '/' : 'https://mangosteen2.hunger-valley.com/'
axios.defaults.headers.post['Content-Type'] = 'application/json'
axios.defaults.headers.Authorization = 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJ1c2VyX2lkIjoxLCJleHAiOjE3MTM3MTgwMDV9.An1LeYrv1DXG7Fik2B8aZhlm4KCzPIuiH6RwzEC2AYg'
axios.defaults.timeout = 10000

export const ajax = {
  get: <T extends {}>(path: string) => {
    return axios.get<T>(path)
  },
  post: () => { },
  patch: () => { },
  delete: () => { },
}
