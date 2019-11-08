import Vue from 'vue'
import App from './App.vue'
import store from "./store"
import ElementUI from 'element-ui'
import ViewUI from 'view-design';
import router from './router'
import './assets/css/style.scss'

import 'element-ui/lib/theme-chalk/index.css'
import 'view-design/dist/styles/iview.css';


Vue.config.productionTip = false

Vue.use(ElementUI)
Vue.use(ViewUI)
// router.beforeEach((to,from,next)=>{
// 	next({
// 		path:'/login'
// 	})
// })

new Vue({
	el:"#app",
	store,
	router,
	render: h => h(App),
})
