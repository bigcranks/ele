<template>
<div class="top" v-if="prace.longitude">
	<div v-if="DiscountList">
		<div class="topList">
			<h3>{{DiscountList.name}}</h3>
			<div class="title">{{DiscountList.description}}</div>
			<div class="num"><span>{{JSON.parse(DiscountList.more).population}}人</span>正在抢></div>
			<img src="//fuss10.elemecdn.com/b/e1/0fa0ed514c093a7138b0b9a50d61fpng.png?imageMogr/format/webp/thumbnail/!240x160r/gravity/Center/crop/240x160/" />
		</div>
		<div class="topList">
			<h3 style="color: #333;">品质套餐</h3>
			<div class="title">搭配齐全吃得好</div>
			<div class="num" style="color: #af8260;">立即抢购 ></div>
			<img src="//fuss10.elemecdn.com/d/d4/16ff085900d62b8d60fa7e9c6b65dpng.png?imageMogr/format/webp/thumbnail/!240x160r/gravity/Center/crop/240x160/" />
		</div>
	</div>
	<div v-else>
		<div class="topList" id="toplist">
			<h3 style="color: #333;">品质套餐</h3>
			<div class="title">搭配齐全吃得好</div>
			<div class="num" style="color: #af8260;">立即抢购 ></div>
			<img src="//fuss10.elemecdn.com/d/d4/16ff085900d62b8d60fa7e9c6b65dpng.png?imageMogr/format/webp/thumbnail/!240x160r/gravity/Center/crop/240x160/"  />
		</div>
	</div>
</div>
</template>

<script>
import { getDiscount } from '../../services/home/homeService'
import Vuex from 'vuex'
export default {
	name: 'top-com',
	data(){
		return {
			DiscountList:null
		}
	},
	computed:{
		...Vuex.mapState({
			prace:state=>state.prace.locValue
		})
	},
	methods:{
		getData(){
			let { longitude, latitude } = this.prace
			getDiscount(latitude,longitude)
			.then(result=>{
				this.DiscountList = result;
			})
		}
	},
	watch: {
		prace: {
			handler(){
				this.getData();
			},
			deep: true
		}
	}
}
</script>

<style scoped>
.top{
	background: #fff;
	overflow: hidden;
	padding: 0 .1rem .05rem .1rem;
}
.top .topList{
	float: left;
	background: #f4f4f4;
	padding: .05rem 0 0 .15rem;
	margin-right: .02rem;
}
.top .topList h3{
	font-size: .16rem;
	font-weight: 700;
	color: #e81919;
	margin-bottom: .02rem;
}
.top .topList .title{
	font-size: .14rem;
	color: #777777;
	margin-bottom: .05rem;
}
.top .topList .num{
	font-size: .12rem;
	color: #333;
	font-weight: 700;
}
.top .topList .num span{
	color: #e81919;
}
.top .topList img{
	width: 1.2rem;
	height: .8rem;
	margin-left: .4rem;
}
#toplist{
	width: 100%;
	height: 1rem;
	position: relative;
}
#toplist img{
	position: absolute;
	top: .05rem;
	right: .125rem;
	width: 1.5rem;
	height: 1rem;
	margin-left: 0;
}
</style>