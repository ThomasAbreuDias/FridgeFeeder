<template>
  	<view class="header">
  		<text class="title">{{ title }}</text>
  	</view>
</template>

<script>
	export default {
	  props: ['title']
	}
</script>

<style>
	.header {
		height: 62px; 
		background-color: #534D56;
		justify-content: center;
		align-items: center;
	}
	.title {
		color: #F8F1FF;
		font-size: 30px;
		font-weight: 900;
	}
</style>
