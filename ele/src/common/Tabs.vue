<template>
<nav class="tabs one-top-px">
	<li class="tab" v-for="tab in tabData">
		<router-link :to="tab.path">
			<em class="iconfont" :class="tab.icon"></em>
			<span>{{tab.title}}</span>
		</router-link>
	</li>
</nav>
</template>

<script>
export default {
  name: 'tabs',
  data(){
  	return {
  	  tabData: [
  	  	{title: '首页', path: '/home', icon: 'icon-shouye'},
  	  	{title: '发现', path: '/discover', icon: 'icon-faxian'},
  	  	{title: '订单', path: '/order', icon: 'icon-dingdan'},
  	  	{title: '我的', path: '/mine', icon: 'icon-wode'}
  	  ]
  	}
  }
}
</script>

<style>
.tabs{
	width: 100%;
	height: .49rem;
	position: absolute;
	left: 0;
	bottom: 0;
	display: flex;
	z-index: 5;
	background: #fff;
}
.tabs .tab{
	flex: 1;
}
.tabs .tab a{
	display: block;
	width: 100%;
	height: 100%;
	color: #8e8e93;
}
.tabs .tab a.router-link-active{
	color: #0089dc;
}
.tabs .tab a em, .tabs .tab a span{
	display: block;
	text-align: center;
}
.tabs .tab a em{
	padding-top: .06rem;
	font-size: .18rem;
}
.tabs .tab a span{
	padding-top: .02rem;
	font-size: .12rem;
}
</style>
