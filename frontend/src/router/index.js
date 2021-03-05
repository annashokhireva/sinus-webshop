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
	component: () => import('../views/AllProductsPage.vue')
},
{
	path: '/skateboards',
	name: 'Skateboards',
	component: () => import('../views/SkateboardsPage.vue')
},
{
	path: '/clothing',
	name: 'Clothing',
	component: () => import('../views/ClothingPage.vue')
},
{
	path: '/sale',
	name: 'Sale',
	component: () => import('../views/SalePage.vue')
},
{
	path: '/stores',
	name: 'Stores',
	component: () => import('../views/StoresPage.vue')
},
{
	path: '/contact',
	name: 'Contact',
	component: () => import('../views/ContactPage.vue')
},
{
	path: '/newsletter',
	name: 'Newsletter',
	component: () => import('../views/NewsletterPage.vue')
},
{
	path: '/register',
	name: 'Register',
	component: () => import('../views/RegisterPage.vue')
},
{
	path: '/checkout',
	name: 'Checkout',
	component: () => import('../views/CheckOut.vue')
},
{
	path: '/admin-products',
	name: 'AdminProducts',
	component: () => import('../views/AdminProducts.vue')
},
{
	path: '/orders',
	name: 'Orders',
	component: () => import('../views/AdminOrders.vue')
},
{
	path: '/profile',
	name: 'Profile',
	component: () => import('../views/Profile.vue')
},
{
	path: '/thankyou',
	name: 'ThankYou',
	component: () => import('../views/ThankYou.vue')
}
]

const router = new VueRouter({
routes
})

export default router
