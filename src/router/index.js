import Vue from 'vue'
import Router from 'vue-router'
import routes from './routers'
// import store from '@/store'
// import { setTitle } from '@/libs/util'

Vue.use(Router)
const router = new Router({
  routes,
  mode: 'hash'
})
// router.beforeEach((to, from, next) => {
// 	//to即将进入的目标路由对象，from当前导航正要离开的路由， next : 下一步执行的函数钩子
// 		// console.log(localStorage.getItem('isLogin'))
// 	if (to.path === '/login') {
// 		localStorage.setItem('isLogin', '')
// 		next() // 如果即将进入登录路由，则直接放行
// 	} else { //进入的不是登录路由
// 		if (to.matched.length === 0) { //如果未匹配到路由
// 			from.path ? next({
// 				path: from.path
// 			}) : next('/'); //如果上级也未匹配到路由则跳转主页面，如果上级能匹配到则转上级路由
// 		} else {
// 			if (localStorage.getItem('isLogin')) {
// 				//如果不需要登录验证，或者已经登录成功，则直接放行
// 				next()
// 			} else {
// 				//下一跳路由需要登录验证，并且还未登录，则路由定向到 登录路由
// 				next({
// 					path: '/home'
// 				})
// 			}
// 		}
// 	}

// })
export default router
