import type { UseFetchOptions } from 'nuxt/dist/app/composables'

export type Methods = 'GET' | 'POST' | 'DELETE' | 'PUT'

export interface RenRequestConfig<T> extends UseFetchOptions<T> {
  url: string | Request | Ref<string | Request> | (() => string) | Request

  [index: string]: any
}
