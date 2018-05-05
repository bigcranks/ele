const state = {
	locValue: {
		longitude: null,
		latitude: null
	}
}
const getters = {
	
}
const mutations = {
	praceBtn(state,params){
		state.locValue = params;
	}
}

const actions = {
	getLocation(context){
		setTimeout(()=>{
			context.commit('praceBtn', {
				longitude: '113.837884',
				latitude: '22.626024'
			})
		}, 2000);
	},
	userSelectLocation(context, params){
		context.commit('praceBtn', params);
	}
}

export default {
	namespaced: true,
	state,
	getters,
	mutations,
	actions
}