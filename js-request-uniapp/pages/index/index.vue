<template>
	<view class="index">
		{{demoList}}
	</view>
</template>

<script setup lang="ts">
	import { ref } from 'vue';
	import { getDemoList } from '../../services/modules/demo';

	const demoList = ref()
	const dataInit = async () => {
		const res = await getDemoList()
		demoList.value = res

		console.log(res)
	}
	dataInit()
</script>

<style lang="scss" scoped>
	.index {
		white-space: pre-wrap;
	}
</style>