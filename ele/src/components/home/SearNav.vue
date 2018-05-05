<template>
<div class="nav">
	<div class="cover" v-show="Fily1||Fily2||Fily3"></div>
	<ul class="navlist">
		<li>
			<i :class="{'Backcor':Fily1}" @click.stop="showAct1()">分类</i><img :src="imgs1" :class="{'img_open':Fily1}"/>
			<div class="classfily" v-if="Fily1">
				<app-content>
					<ul class="classList" v-for="item in Classifly">
						<li>
							<span>{{ item.name }}</span>
							<span>{{ item.count }}</span>
						</li>
					</ul>
				</app-content>
			</div>
		</li>
		<li>
			<i @click.stop="showAct2()" :class="{'Backcor':Fily2}">综合排序</i>
			<img :src="imgs1" :class="{'img_open':Fily2}" />
			<ul class="Comprehensive" v-show="Fily2">
				<li v-for=" item in Comprehensive">{{item}}</li>
			</ul>
		</li>
		<li>
			<i @click.stop="showAct3()" :class="{'Backcor':Fily3}">筛选</i>
			<span class="iconfont icon-shaixuan" :class="{'Backcor':Fily3}"></span>
			<div class="screen" v-if="Fily3">
				<dl>
					<dt>配送方式</dt>
					<dd class="distribution">
						<div v-for="item in Distribution">
							<img :src="item.icon_hash" />
							<span>{{item.text}}</span>
						</div>
					</dd>
				</dl>
				<dl>
					<dt>人均消费</dt>
					<dd>
						<div v-for="item in Consumption">
							<span>{{item.description}}</span>
						</div>
					</dd>
				</dl>
				<dl>
					<dt>优惠活动</dt>
					<dd class="discount">
						<div v-for="item in ActDiscount">
							<app-letter :color="item.icon_color" :title="item.icon_name" id="letter"></app-letter>
							<span>{{item.name}}</span>
						</div>
					</dd>
				</dl>
				<dl>
					<dt>商家属性(可多选)</dt>
					<dd class="business">
						<div v-for="item in Business">
							<app-letter :color="item.icon_color" :title="item.icon_name" id="letter"></app-letter>
							<span>{{item.name}}</span>
						</div>
					</dd>
				</dl>
				<div class="classbtn">
					<span>清空</span>
					<span id="spanbtn">确定</span>
				</div>
			</div>
		</li>
	</ul>
</div>
</template>

<script>
import { getClassify,getDistribution,getConsumption,getActDiscount,getBusiness } from '../../services/home/homeService'
import Vuex from 'vuex'
export default{
	name:'searnav-com',
	data(){
		return {
			imgs1:'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTIiIGhlaWdodD0iNiIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cGF0aCBmaWxsPSIjOTk5IiBkPSJNNC41NzcgNS40MjNjLjc5Ljc3IDIuMDczLjc2NyAyLjg1NyAwbDQuMTItNC4wMjZDMTIuMzQ1LjYyNSAxMi4wOSAwIDEwLjk4NSAwSDEuMDI3Qy0uMDc3IDAtLjMzLjYzLjQ1NyAxLjM5N2w0LjEyIDQuMDI2eiIgZmlsbC1ydWxlPSJldmVub2RkIi8+PC9zdmc+',
			Classifly:null,
			Distribution:null,
			Consumption:null,
			ActDiscount:null,
			Business:null,
			Fily1:false,
			Fily2:false,
			Fily3:false,
			Comprehensive:["综合排序","销量最高","起送价最低","配送最快"]
		}
	},
	computed:{
		...Vuex.mapState({
			prace: state=>state.prace.locValue
		})
	},
	methods:{
		getData1(){
  			let { latitude,longitude } = this.prace;
  			getClassify(latitude,longitude)
  			.then(result=>{
  				this.Classifly = result
  			})
		},
		getData2(){
  			let { latitude,longitude } = this.prace;
  			getDistribution(latitude,longitude)
  			.then(result=>{
  				this.Distribution = result
  			})
		},
		getData3(){
  			let { latitude,longitude } = this.prace;
  			getConsumption(latitude,longitude)
  			.then(result=>{
  				this.Consumption = result
  			})
		},
		getData4(){
  			let { latitude,longitude } = this.prace;
  			getActDiscount(latitude,longitude)
  			.then(result=>{
  				this.ActDiscount = result
  			})
		},
		getData5(){
  			let { latitude,longitude } = this.prace;
  			getBusiness(latitude,longitude)
  			.then(result=>{
  				this.Business = result
  			})
		},
		showAct1(){
			if(!this.Classifly&&this.prace.latitude){
				this.getData1()
			}
			if(this.Fily2){
				this.Fily2 = !this.Fily2
			}
			if(this.Fily3){
				this.Fily3 = !this.Fily3
			}
			this.Fily1 = !this.Fily1
		},
		showAct2(){
			if(this.Fily1){
				this.Fily1 = !this.Fily1
			}
			if(this.Fily3){
				this.Fily3 = !this.Fily3
			}
			this.Fily2 = !this.Fily2
		},
		showAct3(){
			if(!this.Distribution&&this.prace.latitude){
				this.getData2()
				this.getData3()
				this.getData4()
				this.getData5()
			}
			if(this.Fily1){
				this.Fily1 = !this.Fily1
			}
			if(this.Fily2){
				this.Fily2 = !this.Fily2
			}
			this.Fily3 = !this.Fily3
		},
		BackBtn(){
			this.Liback = !this.Liback
		}
	},
	created(){
		
	}
}
</script>

<style scoped>
.navlist{
	width: 100%;
	height: .4rem;
	display: flex;
	justify-content: space-around;
	align-items: center;
}
.navlist>li{
	display: flex;
	justify-content: space-between;
	align-items: center;
	color: #666;
	font-size: .14rem;
}
.navlist>li>img{
	height: .05rem;
	width: .1rem;
	margin-left: .02rem;
}
.Backcor{
	color: dodgerblue;
}
.img_open{
	transform: rotate(180deg);
}
.navlist>li>span{
	font-size: .12rem;
	margin-top: .04rem;
}
.classfily{
	position: absolute;
	top: .92rem;
	left: 0;
	width: 100%;
	height: 3.6rem;
	background: #FFFFFF;
	overflow: hidden;
	z-index: 15;
	border-top: 1px solid #ddd;
}
.classList{
	background: #fafafa;
	width: 100%;
}
.classList>li{
	width: 100%;
	display: flex;
	box-sizing: border-box;
	padding: 0 .08rem;
	font-size: .1rem;
	height: .4rem;
	justify-content: space-between;
	align-items: center;
}
.content{
	width: 1.4rem;
}
.Comprehensive{
	position: absolute;
	top: .92rem;
	z-index: 15;
	left: 0;
	width: 100%;
	background: #FFFFFF;
	padding: .1rem 0;
	box-sizing: border-box;
	padding-left: .2rem;
	border-top: 1px solid #ddd;
}
.Comprehensive>li{
	font-size: .14rem;
	height: .4rem;
	line-height: .4rem;
}
.cover{
	position: absolute;
	width: 100%;
	top: .92rem;
	left: 0;
	bottom: 0;
	z-index: 15;
    background: rgba(0,0,0,.1);
}
.screen{
	position: absolute;
	top: .92rem;
	z-index: 15;
	left: 0;
	width: 100%;
	background: #FFFFFF;
	border-top: 1px solid #ddd;
}
.screen dd,dt{
	width: 100%;
	box-sizing: border-box;
	padding:0 .2rem;
}
.screen dt{
	height: .4rem;
	line-height: .4rem;
	font-size: .12rem;
	color:#666;
	background: #fafafa;
}
.screen dd{
	display: flex;
	justify-content: space-between;
	align-items: center;
	flex-wrap: wrap;
}
.screen dd>div{
	display: flex;
	justify-content: space-around;
	align-items: center;
	color: #000;
	margin: .1rem .2rem .1rem 0;
}
.distribution img{
	width: .15rem;
	margin-right: .05rem;
}
#letter{
	font-size: .1rem;
	margin-right: .04rem;
}
.classbtn{
	width: 100%;
	height: .5rem;
	padding-top: .1rem;
}
.classbtn>span{
	display: block;
	width: 50%;
	text-align: center;
	line-height: .5rem;
	float: left;
	background-color: #fff;
    color: #ddd;
    font-size: .18rem;
}
#spanbtn{
	color: #fff;
    background-color: #00d762;
}
</style>