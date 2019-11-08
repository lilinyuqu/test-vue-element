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
		},
		children:[
			{
				path:'/rolemanage',
				name:'RoleManage',
				meta:{
					title:'角色列表',
					keepAlive:true
				},
				component:()=>import("../views/permissionManage/role/Role")  //懒加载
			},
			{
				path:'/usermanage',
				name:'UserManage',
				meta:{
					title:'用户管理',
					keepAlive:true
				},
				children:[



				],
				component:()=>import("../views/permissionManage/user/User")  //懒加载
			},
			{
				path:'/UserManageDetail',
				name:'用户管理详情',
				meta:{
					title:'用户管理详情',
					keepAlive:false
				},
				component:()=>import("../views/permissionManage/user/UserDetail")  //懒加载
			},
			{
				path:'/userGroupmanage',
				name:'UserGroupManage',
				meta:{
					title:'用户组管理',
					keepAlive:true
				},
				component:()=>import("../views/permissionManage/userGroup/UserGroup")  //懒加载
			},
			{
				path:'/operationmanage',
				name:'OperationManage',
				meta:{
					title:'操作管理',
					keepAlive:true
				},
				component:()=>import("../views/permissionManage/operation/Operation")  //懒加载
			}
		]
	},


]
// 3：创建路由实例
const router = new VueRouter({
	routes:RouteList,
	mode: 'history',
	linkActiveClass: 'active'
})
// 4：导出router实例
export default router