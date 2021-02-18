import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import './assets/css/base.css'


createApp(App).use(router).mount('#app')

//自定义指令
Vue.directive('color',{
	bind(el,binding,vnode){
		el.style.color = "#" + Math.random().toString(16).slice(2,8)
	}
})
