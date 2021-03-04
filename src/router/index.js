import { createRouter, createWebHistory } from 'vue-router'
import Index from '../views/Index.vue'
import AddBlog from '../views/Blog.vue'

import NotFound from '../views/NotFound.vue'

// 接口字典
const routes = [
	{name:'Index', path: '/', component: Index},    //主页
	{name:'Blog', path: '/blog', component: AddBlog},   //博客管理页
	
	{name:'NotFound', path: '/:pathNotFound(.*)', component: NotFound},
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
