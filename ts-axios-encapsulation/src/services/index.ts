import RenRequest from './request/index'
import { BASE_URL, TIMEOUT } from './request/config'

export const testRequest = new RenRequest({
  baseURL: BASE_URL,
  timeout: TIMEOUT
})

export * from './modules/home'
