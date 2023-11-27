import { testRequest, test2Request } from '..'

interface IDemoData {
  code: number
  message: string
  data?: any
}

export function getDemoList() {
  return testRequest.get<IDemoData>({
    url: '/demo',

    // 3、单个请求拦截器 ✨
    onRequest({ request, options }) {
      console.log('单个请求拦截器')
    }
  })
}

export function getDemoList2() {
  return test2Request.get<IDemoData>({
    url: '/api/demo',

    onRequest({ request, options }) {
      console.log('单个请求拦截器2')
    }
  })
}
