import axios from 'axios'
const { MODE, VITE_SERVER_URL } = import.meta.env

export const API_URL = MODE === 'production' ? 'production-link' : VITE_SERVER_URL

const $api = axios.create({
  withCredentials: true,
  baseURL: API_URL,
})

$api.interceptors.request.use(
  (config) => {
    config.withCredentials = true
    config.headers.Authorization = `Bearer ${localStorage.getItem('accessToken')}`
    return config
  },
  (error) => {
    return Promise.reject(error)
  },
)

$api.interceptors.response.use(
  (config) => {
    return config
  },
  async (error) => {
    const originalRequest = error.config

    if (error.response.status == 401 && error.config && !error.config._isRetry) {
      originalRequest._isRetry = true
      try {
        const { data: tokens }: { data: { accessToken: string } } = await axios.post(
          `${API_URL}/api/auth/refresh`,
          {},
          { withCredentials: true },
        )
        localStorage.setItem('accessToken', tokens.accessToken)
        return $api.request(originalRequest)
      } catch (error) {
        console.error('No authentication user')
      }
    }
    throw error
  },
)

export default $api
