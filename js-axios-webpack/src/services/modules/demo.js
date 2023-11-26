import { testRequest } from '../index'

// testRequest
//   .get<IHomeData>({
//     url: '/home/multidata'
//   })
//   .then((res) => {
//     console.log(res.data)
//   })

export function getDemoList() {
  return testRequest.get({
    url: '/demo'
  })
}
