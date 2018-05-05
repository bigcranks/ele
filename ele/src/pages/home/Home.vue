<template>
<div>
<div id="home">
	<!-- 悬停搜索框 -->
	<search-com v-show="showSearch" :top="true"></search-com>
	
	<app-content 
		:canLoadmore="true" @on-loadmore="handleLoadMore()"
		ref="content" @scroll="handleContentScroll"
		:hasFooter="true">
		
		<!-- 头部 -->
		<header-com ref="header"></header-com>
		<!-- 搜索 -->
		<search-com></search-com>
		<!-- 轮播 -->
		<activity-com></activity-com>
		
		<banner-com ref="banner"></banner-com>
		
		<!-- 品牌推荐 -->
		<top-com></top-com>
		<div class="shoplist-title">推荐商家</div>
		<!-- 推荐商家列表 -->
		<list-com ref="list" @update-list="handleUpdateList()"></list-com>
	</app-content>
	
</div>
<transition enter-active-class="slideInRight" leave-active-class="slideOutRight">
<router-view></router-view>
</transition>

</div>
</template>

<script>
import HeaderCom from '../../components/home/HeaderCom.vue'
import SearchCom from '../../components/home/SearchCom.vue'
import ActivityCom from '../../components/home/ActivityCom.vue'
import BannerCom from '../../components/home/BannerCom.vue'
import TopCom from '../../components/home/TopCom.vue'
import ListCom from '../../components/home/ListCom.vue'


export default {
	data(){
		return {
			showSearch: false
		}
	},
	components: {
		[HeaderCom.name]: HeaderCom,
		[SearchCom.name]: SearchCom,
		[ActivityCom.name]: ActivityCom,
		[BannerCom.name]: BannerCom,
		[TopCom.name]: TopCom,
		[ListCom.name]: ListCom
	},
	methods: {
		//处理滚动事件，控制搜索框的显示方式
		handleContentScroll(position){
			if(position < -75){
				this.showSearch = true;
			}else{
				this.showSearch = false;
			}
		},
		//更新列表，更新滚动视图大小
		handleUpdateList(){
			//更新滚动视图
			this.$refs.content.refresh();
		},
		handleLoadMore(){
			this.$refs.list.appendData();
		}
	}
}

</script>


<style>
.banner{
	overflow: hidden;
	padding-bottom: .2rem;
	background: #fff;
}
.banner .banner-item{
	padding: .1rem 0;
	width: 20%;
	float: left;
}
.banner .banner-item img{
	width: .3rem;
	margin: 0 auto;
}
.banner .banner-item span{
	display: block;
	text-align: center;
	color: #666;
	font-size: .12rem;
}
.activity img{
	width: 100%;
}
.shoplist-title{
	line-height: .66rem;
	font-size: .16rem;
    color: #000;
    display: flex;
    justify-content: center;
    align-items: center;
}
.shoplist-title:before{
	display: block;
    content: "";
    width: .2rem;
    height: .02rem;
    background-color: #ccc;
    margin-right: .15rem;
}
.shoplist-title:after{
	display: block;
    content: "";
    width: .2rem;
    height: .02rem;
    background-color: #ccc;
    margin-left: .15rem;
}
</style>


