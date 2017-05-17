import Vue from 'vue'
import Router from 'vue-router'
import Hello from '@/components/Home'
import About from '@/components/About'
import Packages from '@/components/Packages'
import Contact from '@/components/Contact'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Hello',
      component: Hello
    },
	{
		path:'/about',
		name: 'About',
		component: About
	},
	{
		path:'/packages',
		name: 'Packages',
		component: Packages
	},
	{
		path:'/contact',
		name: 'Contact',
		component: Contact
	}
  ]
})
