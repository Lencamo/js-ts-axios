import { getHomeList } from './services/modules/home'

getHomeList().then((res) => {
  console.log(res.data)
})

export {}
