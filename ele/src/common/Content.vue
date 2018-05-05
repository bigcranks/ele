<template>
<div ref="content" class="content" 
	:class="{'has-footer': hasFooter}">
	<div class="wrap">
		
		
		
		<slot></slot>
		
		<div class="down" v-if="canLoadmore">
			<img :src="loadmoreImg" />
			<span>{{loadmoreText}}</span>
		</div>
		
	</div>
</div>
</template>

<script>
export default{
  name: 'app-content',
  props: {
  	hasFooter: Boolean,
  	canLoadmore: Boolean
  },
  data(){
  	return {
		loadmoreImg:'static/img/arrow.png',
		loadmoreText: '上拉加载更多'
  	}
  },
  methods: {
  	refresh(){
  		this.contentScroll.refresh();
  	}
  },
  mounted(){
  	//创建滚动视图
  	const contentScroll = new IScroll(this.$refs.content, {
  		probeType: 3,
  		fadeScrollbars: true,
  		scrollbars: true,
		bounce:false
  	});
  	this.contentScroll = contentScroll;
  	
  	//开始滚动前，更新视图大小
  	contentScroll.on('beforeScrollStart', ()=>{
  		this.refresh();
  	});
  	//向父组件传递滚动的位置
  	contentScroll.on('scroll', ()=>{
  		this.$emit('scroll', this.contentScroll.y);
  	});
  	
  	if(this.canLoadmore){
  		contentScroll.on("scrollEnd",()=>{
  			
  			var maxY = contentScroll.maxScrollY;
			var y = contentScroll.y;
			if(y > maxY && y < maxY+50){
				contentScroll.scrollTo(0, maxY+50, 200);
			}
			else if(y<=maxY){
				this.loadmoreImg = 'static/img/ajax-loader.gif';
				this.loadmoreText = '正在加载中...';
				this.$emit('on-loadmore');
				setTimeout(()=>{
					this.loadmoreImg = 'static/img/arrow.png';
					this.loadmoreText = '上拉加载更多';
				}, 2000);
			}
  		})
  	}
  	
 }
  		
}
</script>

<style scoped>
.content{
	width: 100%;
	position: absolute;
	left: 0;
	top: 0;
	bottom: 0;
	overflow: hidden;
	background: #fff;
	z-index: 5;
}
.content.has-footer{
	z-index: 0;
	bottom: .49rem;
}
.down{
	height: .5rem;
	line-height: .5rem;
	text-align: center;
	font-size: 14px;
}
.down img{
	width: .25rem;
	height: .25rem;
	display: inline-block;
	vertical-align: middle;
}
</style>