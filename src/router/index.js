import { createRouter, createWebHistory } from 'vue-router'
import Index from '../views/Index.vue'

import NotFound from '../views/NotFound.vue'

// 接口字典
const routes = [
	{name:'Index', path: '/', component: Index},
	
	{name:'NotFound', path: '/:pathNotFound(.*)', component: NotFound},
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
