<template>
<div class="searchlist" v-if="listData.length>0">
	<app-content ref="content" :canLoadmore="true" @on-loadmore="handleLoadMore()">
		<list :data="listData" @update-list="handleUpdateList()"></list>
	</app-content>
</div>
</template>

<script>
import { getSearchList } from '../../services/home/homeService';
import Vuex from 'vuex'
export default{
	name:'searchlist-com',
	data(){
		return {
			limit: 15,
			value:'',
			listData: []
		}
	},
	props: {
		title: String
	},
	computed: {
		offset(){
			return this.listData.length;
		},
		...Vuex.mapState({
			prace:state=>state.prace.locValue
		})
	},
	methods: {
		getData(val){
			let { longitude, latitude } = this.prace;
			getSearchList(this.offset,this.limit,latitude,longitude,val)
			.then(result=>{
				if(result){
					this.listData = result.newData;
					this.$bus.$emit("pass-navlist",result.ListData)
				}
			})
		},
		appendData(){
			let { longitude, latitude } = this.prace;
			getSearchList(this.offset, this.limit,latitude,longitude,this.title)
			.then(result=>{
				if(result){
					this.listData = [...this.listData, ...result.newData];
				}
			})
		},
		handleUpdateList(){
			//更新滚动视图
			this.$refs.content.refresh();
		},
		handleLoadMore(){
			this.appendData();
		}
	},
	created(){
		this.getData(this.title);
		this.$bus.$on("pass-value",val=>{
			if(val){
				this.value = val
				this.getData(val)
			}
		})	
	}
	
}
</script>

<style scoped>
.searchlist{
	position: absolute;
	top: 1.4rem;
	left: 0;
	width: 100%;
	bottom: 0;
}
</style>