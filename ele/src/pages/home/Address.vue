<template>
<div id="address">
	<app-header title="选择收货地址"></app-header>
	<app-content :hasFooter="true">
		<div class="top-main">
			<input type="text" v-model="value"
				placeholder="请输入地址"
				 @input="searchAction()" />
			<span class="iconfont icon-search"></span>
			<ul class="listress">
				<li class="one-bottom-px" v-for="address in addressList"
					@click="LiBtn(address)"
					>
					<h3>{{address.name}}</h3>
					<p>{{address.address}}</p>
				</li>
			</ul>
		</div>	
	</app-content>
</div>
</template>

<script>
import { getAddress } from '../../services/home/homeService.js'
import Vuex from 'vuex'
export default{
	data(){
		return {
			value: '',
			addressList: []
		}
	},
	computed: {
		...Vuex.mapState({
			prace: state=>state.prace.locValue
		})
	},
	methods: {
		...Vuex.mapActions({
			userSelectLocation: 'prace/userSelectLocation'
		}),
		searchAction(){
			setTimeout(()=>{
				let {longitude, latitude} = this.prace;
				//发送搜索地址的事件
				getAddress(this.value, latitude,longitude)
				.then(result=>{
					this.addressList = result;
				})
			},2000)
			
		},
		LiBtn(address){
			this.userSelectLocation({
				longitude: address.longitude,
				latitude: address.latitude
			})
			this.$router.back();
		}
	}
}
	
</script>

<style scoped>
#address{
	position: absolute;
	top: 0;
	left: 0;
	bottom: 0;
	width: 100%;
	z-index: 10;
}
.top-main{
	padding: .43rem .15rem 0;
	position: relative;
}
.top-main input{
	margin: .1rem 0;
	width: 100%;
	box-sizing: border-box;
	height: .35rem;
	background: #f2f2f2;
	color: #999;
	padding-left: .3rem;
}
.top-main .icon-search{
	color: #999;
	font-weight: 900;
	font-size: .13rem;
	position: absolute;
	top: .65rem;
	left: .25rem;
}
.listress li{
	color: #333;
	padding: .1rem 0;
	font-size: .12rem;
}
.listress li h3{
	font-size: .16rem;
	font-weight: 700;
}
</style>