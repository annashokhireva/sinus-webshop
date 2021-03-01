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
		cart: (state) => state.shoppingCart,
		products: (state) => state.products,
		product: (state) => state.product[state.product],
		// active: (state) => (state.open.lenght > 0 ? state.open[0] : null)
		total: state => {
			if(state.shoppingCart.length > 0) {
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

		showModal(state, componentName, id) {
			state.modalVisible = true;
			state.modalComponent = componentName;
			state.products[state.products._id] = id;
			// state.productsproductId
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

		REMOVE_ITEM(state, index){
			state.shoppingCart.splice(index, 1);
		}

		
	},
	actions: {
		getProducts({ commit }) {
			get(PRODUCTS_URL)
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
