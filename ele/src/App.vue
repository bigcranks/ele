<template>
<div id="app">

			<keep-alive>
					<router-view></router-view>
			</keep-alive>
			
			<tabs></tabs>
			
</div>
</template>

<script>
import Tabs from './common/Tabs.vue'
import Vuex from 'vuex'
export default {
  name: 'App',
  components: {
  	[Tabs.name]: Tabs
  },
  methods:{
  	...Vuex.mapActions({
  		getLocation: 'prace/getLocation'
  	})
  },
  created(){
  	this.getLocation()
  }
}
</script>

<style>

</style>
