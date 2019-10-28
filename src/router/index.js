import VueRouter from 'vue-router'
import Vue from 'vue'


//组件
import App from '../views/layout/App'
import Login from '../views/login/login'


//1：注入插件

Vue.use(VueRouter)


//2：定义路由
const RouteList = [
	{
		path:"/",
		redirect:'/login'
	},
	{
		path: '/login',
		component: Login,
		meta: {
			title:'后台登录',
			// keepAlive: false
		}
	},
	{
		path: '/app',
		component: App,
		meta: {
			title:'首页',
			// keepAlive: false
		}
	}

]
// 3：创建路由实例
const router = new VueRouter({
	routes:RouteList,
	mode: 'history',
	linkActiveClass: 'active'
})
// 4：导出router实例
export default router