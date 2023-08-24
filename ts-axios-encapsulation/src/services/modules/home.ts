import { testRequest } from '../index'
import type { AxiosResponse } from 'axios'

interface IHomeData {
  data: any
  returnCode: string
  success: boolean
}

// testRequest
//   .get<IHomeData>({
//     url: '/home/multidata'
//   })
//   .then((res) => {
//     console.log(res.data)
//   })

export function getHomeList(): Promise<AxiosResponse<IHomeData, any>> {
  return testRequest.get<IHomeData>({
    url: '/home/multidata'
  })
}
