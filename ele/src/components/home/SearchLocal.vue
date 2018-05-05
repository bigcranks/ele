<template>
<div class="searchlocal" v-if="SearchLocal">
	<header class="header">
		<span>历史搜索</span>
		<i class="iconfont icon-shanchu" @click="removeBtn()"></i>
	</header>
	<ul class="localList clearfix">
		<li v-for="item in SearchLocal" @click="LiBtn(item)">{{item}}</li>
	</ul>
</div>
</template>

<script>
export default{
	name:"searchlocal-com",
	data(){
		return {
			SearchLocal:null
		}
	},
	methods:{
		getLocal(){
			var Local = localStorage.getItem("LOCAL");
			Local = JSON.parse(Local);
			if(Local){
				Local = Local.filter(function(e,i,a) {
					return a.indexOf(e) === i;
				});
				this.SearchLocal = Local;
			}
		},
		removeBtn(){
			this.SearchLocal = null;
			localStorage.removeItem("LOCAL")
		},
		LiBtn(val){
			this.$bus.$emit("pass-val",val)
		}
	},
	created(){
		this.getLocal();
	}
}
</script>

<style scoped>
.searchlocal{
	width: 100%;
	box-sizing: border-box;
	padding: .15rem .15rem 0 .15rem;
}
.searchlocal .header{
	width: 100%;
	display: flex;
	justify-content: space-between;
	color: #666;
	font-size: .16rem;
	font-weight: 700;
	align-items: center;
}
.searchlocal .header .icon-shanchu{
	color: #cecece;
	font-size: .1rem;
}
.localList li{
	float: left;
	padding: .1rem;
	background: #F7F7F7;
	color: #777;
	margin: .1rem;
}
</style>