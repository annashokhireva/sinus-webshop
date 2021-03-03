import Vue from 'vue';
import Vuex from 'vuex';
import {get, post, setToken, PRODUCTS_URL, REGISTER_URL, AUTH_URL } from '../api/api.js';
Vue.use(Vuex)


export default new Vuex.Store({ 
	state: {
			products: [],
			activeProductIndex: null,
			shoppingCart: [],
			modalVisible: false,
			modalComponent: null,
			bagVisible: false,
		},
	getters: {
		cart: (state) => state.shoppingCart,
		products: (state) => state.products,
		productById: (state) => (id) => {
			return state.products.find(product => product._id === id)
		},
		// active: (state) => (state.open.lenght > 0 ? state.open[0] : null)
		total: state => {
			if (state.shoppingCart.length > 0) {
				return state.shoppingCart.map(item => item.price).reduce((total, amount) => total + amount);
			} else {
				return 0;
			}
		}
	},
	mutations: {
		SET_PRODUCTS(state, products) {
			state.products = products;
			console.log(products);
		},

		showModal(state, componentName) {
			state.modalVisible = true;
			state.modalComponent = componentName;
		},
		hideModal(state) {
			state.modalVisible = false;
		},

		toggleBag(state) {

			state.bagVisible = !state.bagVisible;
		},

		ADD_ITEM(state, product) {
			state.shoppingCart.push(product);
		},

		REMOVE_ITEM(state, index) {
			state.shoppingCart.splice(index, 1);
		},

		setActiveIndex(state, index) {
			state.activeProductIndex = index;
		}

	},
	actions: {
		getProducts({ commit }) {
			return get(PRODUCTS_URL)
			.then(response => {
				commit('SET_PRODUCTS', response.data)
			})
		},

		addToCart(context, product) {
			context.commit("ADD_ITEM", product);
		},

		removeFromCart(context, index) {
			context.commit("REMOVE_ITEM", index);
		},

		async registerUser(context, payload) {

			const response = await post(REGISTER_URL, payload)
			console.log(response)

			console.log(context)
		},

		async authenticateUser(context, payload) {

			const response = await post(AUTH_URL, payload)
			console.log(response)

			setToken(response.data.token);

			console.log(context)
		}

	},
	modules: {}
}) 
