<template>
	<div class="top-search">
		<span class="iconfont icon-zuojiantou" @click="goBack()"></span>
		<span class="iconfont icon-search bbb"></span>
		<input type="text" v-model="value"
			placeholder="请输入商家、商品名称"
			 @input="searchAction()" />
		<i class="xxx" v-if='value' @click="xxxBtn()">x</i>
		<span class="btn-search" @click="valBtn()">搜索</span>
	</div>
</template>

<script>
export default{
	name:'seaheader-com',
	data(){
		return {
			value:'',			
		}
	},
	props: {
		title: String
	},
	methods: {
		searchAction(){
			this.$bus.$emit("pass-btn",this.value)
		},
	  	goBack(){
	  		this.$router.back();
	  	},
	  	xxxBtn(){
	  		this.value = '';
	  		this.$emit("searchout")
	  		this.$bus.$emit("pass-btn",this.value)
	  	},
	  	valBtn(){
	  		this.$emit("search");
	  		this.$bus.$emit("aaa");
	  		this.$bus.$emit("pass-value",this.value);
	  		var Local = localStorage.getItem("LOCAL")
			var arr = JSON.parse(Local);
			if(!arr){
				arr = [];
			}
			if(this.value){
				arr.push(this.value)
			}
			arr = JSON.stringify(arr)
			localStorage.setItem("LOCAL",arr)
	  	}
  	},
  	created(){
  		if(this.title){
  			this.value = this.title
  		}
  		this.$bus.$on("pass-val",val=>{
  			this.value = val
  		})
  	}
}
</script>

<style scoped>
.top-search{
	position: relative;
	display: flex;
	box-sizing: border-box;
	width: 100%;
	height: .5rem;
	padding: 0 .1rem;
	justify-content: space-between;
	align-items: center;
}
.icon-zuojiantou{
	color: #999;
	font-size: .18rem;
	font-weight: 700;
}
.top-search input {
	width: 80%;
	border-radius: .04rem;
	box-sizing: border-box;
	padding: .08rem .1rem .08rem .35rem;
	background: #f8f8f8;
	color: #666;
}
.bbb{
	position: absolute;
	top: .18rem;
	left: .52rem;
	font-size: .13rem;
}
.xxx{
	position: absolute;
	top: .14rem;
	right: .64rem;
	font-size: .14rem;
	color: blue;
	font-weight: 900;
}
.btn-search{
	font-size: .16rem;
	color: #333;
	font-weight: 700;
}
</style>