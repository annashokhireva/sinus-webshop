import Vue from 'vue'
import VueRouter from 'vue-router'
import StartPage from '../views/StartPage.vue'

Vue.use(VueRouter)

const routes = [
{
	path: '/',
	name: 'Start Page',
	component: StartPage
},
{
	path: '/all-products',
	name: 'All Products',
	component: () => import(/* webpackChunkName: "about" */ '../views/AllProductsPage.vue')
},
{
	path: '/skateboards',
	name: 'Skateboards',
	component: () => import(/* webpackChunkName: "about" */ '../views/SkateboardsPage.vue')
},
{
	path: '/clothing',
	name: 'Clothing',
	component: () => import(/* webpackChunkName: "about" */ '../views/ClothingPage.vue')
},
{
	path: '/sale',
	name: 'Sale',
	component: () => import(/* webpackChunkName: "about" */ '../views/SalePage.vue')
},
{
	path: '/stores',
	name: 'Stores',
	component: () => import(/* webpackChunkName: "about" */ '../views/StoresPage.vue')
},
{
	path: '/contact',
	name: 'Contact',
	component: () => import(/* webpackChunkName: "about" */ '../views/ContactPage.vue')
},
{
	path: '/newsletter',
	name: 'Newsletter',
	component: () => import(/* webpackChunkName: "about" */ '../views/NewsletterPage.vue')
},
{
	path: '/login',
	name: 'Login',
	component: () => import(/* webpackChunkName: "about" */ '../views/LoginView.vue')
}

]

const router = new VueRouter({
routes
})

export default router
