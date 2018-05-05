import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex);

//引入模块
import praceModule from './prace.js'


const state = {
	
}

const mutations = {
	
}

const actions = {

}


//创建管理全局状态的对象
//store
const store = new Vuex.Store({
	//配置全局状态
	state,
	mutations,
	actions,
	//配置模块
	modules:{
		prace: praceModule
	}
});

export default store;


