import type { UseFetchOptions, AsyncData } from 'nuxt/dist/app/composables'

import type { RenRequestConfig } from './types'

class RenRequest {
  initConfig: UseFetchOptions<any, any>

  constructor(config: UseFetchOptions<any, any>) {
    this.initConfig = config

    // 1、全局拦截器✨
    // this.initConfig.onRequest = function ({ request, options }) {
    //   console.log('全局响应拦截器')
    // }
  }

  request<T = any>(config: RenRequestConfig<T>): Promise<AsyncData<T, Error>> {
    return new Promise((resolve, reject) => {
      // 生成 url
      let url = config.url
      // 生成 options
      let options: any = { ...this.initConfig }
      for (let key in config) {
        if (key !== 'url') {
          options[key] = config[key]
        }
      }

      // 使用 Nuxt 中的useFetch
      useFetch<T>(url, options)
        .then((res) => {
          resolve(res as AsyncData<T, Error>)
        })
        .catch((error) => {
          reject(error)
        })
    })
  }

  // 封装常用方法

  get<T = any>(options: RenRequestConfig<T>) {
    return this.request<T>({ ...options, method: 'GET' })
  }

  post<T = any>(options: RenRequestConfig<T>) {
    return this.request<T>({ ...options, method: 'POST' })
  }

  delete<T = any>(options: RenRequestConfig<T>) {
    return this.request<T>({ ...options, method: 'DELETE' })
  }

  patch<T = any>(options: RenRequestConfig<T>) {
    return this.request<T>({ ...options, method: 'PATCH' })
  }
}

export default RenRequest
