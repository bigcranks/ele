<template>
<swiper ref="banner" v-if="categoryList.length>0">
	<swiper-item v-for="(list, i) in categoryList" :key="i" v-once>
		<div class="banner">
			<div v-for="(item, j) in list" class="banner-item" :key="j">
				<img :src="item.imgPath" />
				<span>{{item.name}}</span>
			</div>
		</div>
	</swiper-item>
</swiper>
</template>

<script>
import { getSellerCategory } from '../../services/home/homeService'
import Vuex from 'vuex'
export default {
	name: 'banner-com',
	data(){
		return {
			categoryList: []
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
			//请求商家分类数据
			getSellerCategory(latitude,longitude, ['main_template', 'favourable_template', 'svip_template'])
			.then(result=>{
				//dom显示数据
				//改变轮播数据
				this.categoryList = result;
				//数据变化，导致dom更新完毕之后，刷新轮播图
				this.$nextTick(()=>{
					//更新滚动视图
					this.swiper.update();
				})
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

</style>