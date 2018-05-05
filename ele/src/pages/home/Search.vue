<template>
<div id="search">
	<div v-if="Searchmain">
		<seaheader-com @searchout="handSearchout()" :title="value"></seaheader-com>
		<searnav-com></searnav-com>
		<searchnavlist-com></searchnavlist-com>
		<searchlist-com :title="value"></searchlist-com>
	</div>
	<app-content ref="content" v-else>
		<seaheader-com @search="handSearch()" ></seaheader-com>
		<seamain-com @update-list="handleUpdateList()"></seamain-com>
		<searchlocal-com v-if="Search"></searchlocal-com>
		<searchhot-com v-if="Search"></searchhot-com>
	</app-content>
</div>
</template>
<script>
import SearchHeaderCom from '../../components/home/SearchHeader.vue'
import SearchLocalCom from '../../components/home/SearchLocal.vue'
import SearchHotCom from '../../components/home/SearchHot.vue'
import SearchMainCom from '../../components/home/Searchmain.vue'
import SearchNavCom from '../../components/home/SearNav.vue'
import SearchListCom from '../../components/home/SearchList.vue'
import SearchNavlistCom from '../../components/home/SearchNavlist.vue'
export default{
	data(){
		return {
			Search:true,
			Searchmain:false,
			value:''
		}
	},
	components: {
		[SearchHeaderCom.name]: SearchHeaderCom,
		[SearchLocalCom.name]: SearchLocalCom,
		[SearchHotCom.name]: SearchHotCom,
		[SearchMainCom.name]: SearchMainCom,
		[SearchNavCom.name]: SearchNavCom,
		[SearchListCom.name]: SearchListCom,
		[SearchNavlistCom.name]: SearchNavlistCom
	},
	methods:{
		handleUpdateList(){
			//更新滚动视图
			this.$refs.content.refresh();
		},
		handleLoadMore(){
			this.$refs.list.appendData();
		},
		handSearch(){
			this.$bus.$on("pass-value",val=>{
				if(val){
					this.value = val;
				}
			})
			this.Searchmain = true;
			
		},
		handSearchout(){
			this.Searchmain = false;
		}
	},
	created(){
		this.$bus.$on("pass-btn",val=>{
			if(val){
				this.Search = false
			}else{
				this.Search = true
			}
		})
	}
}
</script>
<style scoped>
#search{
	position: absolute;
	width: 100%;
	top: 0;
	left: 0;
	bottom: 0;
	background: #fff;
	z-index: 10;
}
</style>