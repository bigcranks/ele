<template>
<div class="main">
	<div v-for="item in SeahList" class="seahlist">
		<img :src="item.imgPath" />
		<div>
			<p>
				<span class="title">{{item.name}}</span>
				<span v-if="item.tags"
					class="spana"
					:style="backbtn(item.tags)"
					>{{item.tags[0].name}}</span>
			</p>
			<span class="rating">评价
				{{ratingbtn(item.rating)}}</span>
		</div>
	</div>
	<div v-for="item in SeahWord" class="seahword">
		<span class="iconfont icon-search aaa"></span>
		<p>{{item}}</p>
	</div>
</div>
</template>

<script>
import { getShoping } from '../../services/home/homeService'
import Vuex from 'vuex'
export default{
	name:'seamain-com',
	data(){
		return {
			value:'',
			SeahList:null,
			SeahWord:null,
			Seah:true
		}
	},
	computed:{
		...Vuex.mapState({
			prace: state=>state.prace.locValue
		})
	},
	methods: {
	  	searchAction(){		
	  		if(this.prace.latitude&&this.Seah){
	  			let { latitude,longitude } = this.prace;
	  			getShoping(this.value,latitude,longitude)
	  			.then(result=>{
	  				this.SeahList = result.newData
					this.SeahWord = result.words;
					this.$emit("update-list");
	  			})
	  		}
	  	},
	  	backbtn(tags){
	  		return 'background:#'+tags[0].name_color
	  	},
	  	ratingbtn(rating){
	  		return Number(rating).toFixed(1)
	  	}
  	},
  	created(){
  		this.$bus.$on("aaa",()=>{
  			this.Seah = false
  		})
  		this.$bus.$on("pass-btn",val=>{
  			this.value = val;
  			if(val){
  				this.searchAction();
  			}else{
				this.SeahList = null
				this.SeahWord = null
  			}  			
  		})
  	}
}
</script>

<style scoped>
.main{
	width: 100%;
	/*position: absolute;
	
	top: .5rem;
	left: 0;
	z-index: 1;*/
	background: #fff;
}
.seahlist{
	width: 100%;
	box-sizing: border-box;
	padding: 0 .2rem;
	display: flex;
	height: .5rem;
	justify-content: space-between;
	align-items: center;
}
.seahlist img{
	width: .25rem;
}
.seahlist div{
	width: 85%;
	height: .5rem;
	display: flex;
	align-items: center;
	justify-content: space-between;
	border-bottom: 1px solid #e3e3e3;
	color: #333;
	font-size: .14rem;
}
.seahlist div>p{
	display: flex;
	align-items: center;
}
.spana{
	display: inline-block;
	font-size: .1rem;
	color: #fff;
	margin-left: .05rem;
}
.title{
	display: inline-block;
	max-width: 2rem;
	overflow: hidden;
	text-overflow:ellipsis;
	white-space: nowrap;
}
.rating{
	font-size: .1rem;
	color: #999;
}
.seahword{
	width: 100%;
	box-sizing: border-box;
	padding: 0 .2rem;
	display: flex;
	height: .5rem;
	align-items: center;
	font-size: .14rem;
}
.aaa{
	margin-right: .1rem;
	font-size: .14rem;
}
</style>