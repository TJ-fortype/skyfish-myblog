import { createRouter, createWebHistory } from 'vue-router'
import Index from '../views/Index.vue'
import Blog from '../views/Blog.vue'

import NotFound from '../views/NotFound.vue'

// 接口字典
const routes = [
	{name:'Index', path: '/', component: Index},
	{name:'Blog', path: '/blog', component: Blog},
	
	{name:'NotFound', path: '/:pathNotFound(.*)', component: NotFound},
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
