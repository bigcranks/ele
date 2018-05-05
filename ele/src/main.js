import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store'
import Bus from './bus.js'

Vue.prototype.$bus = Bus


import Header from './common/Header.vue'
import Content from './common/Content.vue'
import Swiper from './common/Swiper.vue'
import SwiperItem from './common/SwiperItem.vue'
import List from './common/List.vue'
import Letter from './common/Letter.vue'
Vue.component(Header.name, Header);
Vue.component(Content.name, Content);
Vue.component(Swiper.name, Swiper);
Vue.component(SwiperItem.name, SwiperItem);
Vue.component(List.name, List);
Vue.component(Letter.name, Letter);

new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
