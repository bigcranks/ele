<template>
<header class="header">
	<span class="iconfont icon-zuojiantou" @click="goBack()"></span>
	<h1 class="title">{{title}}</h1>
</header>
</template>

<script>
export default {
  name: 'app-header',
  props: {
  	title: String
  },
  methods: {
  	goBack(){
  		this.$router.back();
  	}
  }
}
</script>

<style scoped>
.header{
	width: 100%;
	height: .43rem;
	position: absolute;
	top: 0;
	left: 0;
	background: linear-gradient(90deg,#0af,#0085ff);
	z-index: 5;
}
.header .title{
	width: 100%;
	text-align: center;
	line-height: .43rem;
	font-size: .18rem;
	font-weight: normal;
	color: #fff;
}
.header .icon-zuojiantou{
	position: absolute;
	top: .12rem;
	left: .1rem;
	padding: 0 .05rem;
	height: .17rem;
	line-height: .17rem;
	color: #fff;
	font-size: .2rem;	
}
</style>