<template>
<ul class="navlist">
	<li v-for="item in listData1">{{item.name}}</li>
	<li v-for="item in listData2">{{item.name}}</li>
</ul>
</template>

<script>
import { getSearchNavList } from '../../services/home/homeService';
import Vuex from 'vuex'
export default{
	name:'searchnavlist-com',
	data(){
		return {
			listData1: [],
			listData2: []
		}
	},
	created(){
		this.$bus.$on("pass-navlist",val=>{
			if(val.single){
				this.listData2 = val.single;
			}
			if(val.multi){
				this.listData1 = val.multi;
			}
		})
	}
}
</script>

<style scoped>
.navlist{
	position:absolute;
	top: .9rem;
	left: 0;
	width: 100%;
	box-sizing: border-box;
	padding-left: .2rem;
	height: .5rem;
	display: flex;
	align-items: center;
	overflow-x: scroll;
	border-bottom: 1px solid #F5F5F5
}
.navlist>li{
	flex: none;
	height: .3rem;
	line-height: .3rem;
	padding: 0 .1rem;
	margin-right: .1rem;
	background-color: #f5f5f5;
    border-radius: .04rem;
    color: #666;
}
</style>