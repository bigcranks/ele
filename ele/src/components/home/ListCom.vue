<template>
<list :data="listData" @update-list="updateList()"></list>
</template>
<script>
import { getTopSeller } from '../../services/home/homeService';
import Vuex from 'vuex'
export default {
	name: 'list-com',
	data(){
		return {
			limit: 8,
			listData: []
		}
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
		getData(){
			let { longitude, latitude } = this.prace;
			//请求推荐商家数据
			getTopSeller(latitude,longitude, this.offset, this.limit)
			.then(result=>{
				this.listData = result;
			})
		},
		appendData(){
			let { longitude, latitude } = this.prace;
			//请求推荐商家数据
			getTopSeller(latitude,longitude, this.offset, this.limit)
			.then(result=>{
//				this.listData = this.listData.concat(result);
				this.listData = [...this.listData, ...result];
			})
		},
		updateList(){
			this.$emit('update-list');
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