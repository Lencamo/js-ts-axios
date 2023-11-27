import RenRequest from './request'
import { BASE_URL } from './request/config'

export const testRequest = new RenRequest({
  baseURL: BASE_URL

  // 2、局部拦截器✨
  // onRequest({ request, options }) {
  //   console.log('局部请求拦截器')
  // }
})

export const test2Request = new RenRequest({
  // 测试nuxt编写的接口
})

export * from './modules/demo'
