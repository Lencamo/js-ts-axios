import { testRequest } from '../index'

interface IDemoData {
  code: number
  message: string
  data?: any
}

// testRequest
//   .get<IDemoData>({
//     url: '/demo'
//   })
//   .then((res) => {
//     console.log(res.data)
//   })

export function getDemoList() {
  return testRequest.get<IDemoData>({
    url: '/demo'
  })
}
