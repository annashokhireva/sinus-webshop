import Vue from 'vue';
import Vuex from 'vuex';
import { get, PRODUCTS_URL } from '../api/api.js';

Vue.use(Vuex)


export default new Vuex.Store({
	state: {
		products: [],
		shoppingCart: [],
		modalVisible: false,
		modalComponent: null,
		bagVisible: false,
	},
	getters: {
		// allProducts: (state) => state.products
		// active: (state) => (state.open.lenght > 0 ? state.open[0] : null)
	},
	mutations: {
		SET_PRODUCTS(state, products) {
			state.products = products;
			console.log(products);
		},

		showModal(state, componentName, id) {
			state.modalVisible = true;
			state.modalComponent = componentName;
			state.products[state.products._id] = id;
			// state.productsproductId
		},
		hideModal(state) {
			state.modalVisible = false;
		},

		addToCart(state, payload) {
			return state.shoppingCart.push(payload);
		},
		toggleBag(state) {

			state.bagVisible = !state.bagVisible;
		}

		
	},
	actions: {
		getProducts({ commit }) {
			get(PRODUCTS_URL)
			.then(response => {
				commit('SET_PRODUCTS', response.data);
			})
		}
	},
	modules: {
	}
})


//import Vue from 'vue';
// import Vuex from 'vuex';

// Vue.use(Vuex);

// export default new Vuex.Store({
//   strict: process.env.NODE_ENV !== 'production',
// });
