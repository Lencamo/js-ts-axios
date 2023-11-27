<template>
  <div>
    <NuxtWelcome />
  </div>
</template>

<script setup>
import { getDemoList, getDemoList2 } from './services'

const { data: res } = await getDemoList()
console.log('调用外部接口的响应数据：', res.value)

// 测试nuxt中编写的接口
const { data: res2 } = await getDemoList2()
console.log('调用nuxt接口的响应数据：', res2.value)
</script>
