<template>
<div class="search" :class="{top: top}" @click="SearchAction()">
	<i class="iconfont icon-search"></i>
	<span class="search-input">
		搜索饿了么商家、商品名称
	</span>
</div>
</template>

<script>
import Vuex from 'vuex'
export default {
	name: 'search-com',
	props: {
		top: Boolean
	},
	methods:{
		SearchAction(){
			this.$router.push('/home/search');
		}
	}
}
</script>

<style scoped>
.search{
	background: linear-gradient(90deg,#0af,#0085ff);
	width: 100%;
	height: .4rem;
	padding: .05rem .1rem;
	box-sizing: border-box;
	position: relative;
}
.search.top{
	top: 0;
	left: 0;
	z-index: 1;
}
.icon-search{
	position: absolute;
	top: .12rem;
	left: .95rem;
	font-size: .14rem;
}
.search .search-input{
	display: block;
	height: 100%;
	background: #fff;
	color: #999;
	text-align: center;
	line-height: .3rem;
	font-size: .12rem;
}

</style>