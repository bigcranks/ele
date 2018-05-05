<template>
<header class="header clearfix">
	<i class="iconfont icon-location"></i>
	<h3 class="info" @click="addressAction()">{{address}}</h3>
	<span class="iconfont icon-xiajiantou"></span>
</header>
</template>

<script>
import { getAddressInfo } from '../../services/home/homeService'
import Vuex from 'vuex'
export default {
	name: 'header-com',
	data(){
		return {
			address: '定位失败'
		}
	},
	computed:{
		...Vuex.mapState({
			prace: state=>state.prace.locValue
		})
	},
	methods: {
		getData(){
			let { latitude,longitude } = this.prace
			//请求地址数据
			getAddressInfo(latitude,longitude)
			.then(result=>{
				this.address = result;
			})
		},
		addressAction(){
			//跳转到选择地址页面
			this.$router.push('/home/address');
		}
	},
	watch: {
		prace: {
			handler(){
				//请求第一次的数据
				//或者修改过地址，重新请求数据
				this.getData();
			},
			deep: true
		}
	}
}
</script>

<style scoped>
.header{
	width: 100%;
	line-height: .3rem;
	height: .3rem;
	background: linear-gradient(90deg,#0af,#0085ff);
	padding: 0 .1rem;
	box-sizing: border-box;
}
.header span,i{
	display: block;
	float: left;
	color: #fff;
}
.header .info{
	display: block;
	float: left;
	font-size: .14rem;
	color: #fff;
	margin: 0 .05rem 0 .1rem;
}
</style>