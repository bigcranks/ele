<template>
<div class="searchhot">
	<header class="header">
		<span>热门搜索</span>
	</header>
	<ul class="hotList clearfix">
		<li v-for="item in SearchHot"
			 @click=LiBtn(item.name)>
			 {{item.name}}
		</li>
	</ul>
</div>
</template>

<script>
import { getSearchHot } from '../../services/home/homeService'
import Vuex from 'vuex'
export default{
	name:'searchhot-com',
	data(){
		return {
			SearchHot:null
		}
	},
	computed:{
		...Vuex.mapState({
			prace: state=>state.prace.locValue
		})
	},
	methods:{
		getData(){
			let { latitude,longitude } = this.prace
			getSearchHot(latitude,longitude)
			.then(result=>{
				this.SearchHot = result
			})
		},
		LiBtn(val){
			this.$bus.$emit("pass-val",val)
		}
	},
	watch: {
		prace: {
			handler(){
				this.getData();
			},
			deep: true
		}
	},
	created(){
		if(this.prace.latitude){
			this.getData();
		}	
	}
}
</script>

<style scoped>
.searchhot{
	width: 100%;
	box-sizing: border-box;
	padding: .15rem .15rem 0 .15rem;
}
.searchhot .header{
	width: 100%;
	color: #666;
	font-size: .16rem;
	font-weight: 700;
}
.hotList li{
	float: left;
	padding: .1rem;
	background: #F7F7F7;
	color: #777;
	margin: .1rem;
}
</style>