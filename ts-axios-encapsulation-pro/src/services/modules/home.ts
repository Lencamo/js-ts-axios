import { testRequest } from '../index'
import type { AxiosResponse } from 'axios'

/**
 * response数据类型
 * - 【默认为any】
 */

interface IHomeData {
  data: any
  returnCode: string
  success: boolean
}

export function getHomeList(): Promise<AxiosResponse<IHomeData, any>> {
  return testRequest.get<IHomeData>({
    url: '/home/multidata',

    // 3、单个请求拦截器 ✨
    interceptors: {
      requestSuccessFn: (config) => {
        console.log('单个请求拦截器')
        return config
      },
      requestFailureFn: (error) => {
        return error
      }
    }
  })
}
