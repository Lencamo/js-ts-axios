import { getDemoList } from './services/modules/demo'

getDemoList().then((res) => {
  console.log(res.data)
})

export {}
