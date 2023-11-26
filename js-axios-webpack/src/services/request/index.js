import axios from 'axios'

class RenRequest {
  constructor(config) {
    this.instance = axios.create(config)

    // 响应拦截
    this.instance.interceptors.response.use(
      (response) => {
        return response.data
      },
      (error) => {
        return error
      }
    )
  }

  request(config) {
    return this.instance.request(config)
  }

  get(config) {
    return this.request({ ...config, method: 'GET' })
  }

  post(config) {
    return this.request({ ...config, method: 'POST' })
  }

  delete(config) {
    return this.request({ ...config, method: 'DELETE' })
  }

  patch(config) {
    return this.request({ ...config, method: 'PATCH' })
  }
}

export default RenRequest
