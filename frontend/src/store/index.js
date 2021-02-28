import Vue from 'vue';
import Vuex from 'vuex';
import { get, post, PRODUCTS_URL, REGISTER_URL } from '../api/api.js';
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

		addToCart(state, payload) {
			return state.shoppingCart.push(payload);
		},
		toggleBag(state) {

			state.bagVisible = !state.bagVisible;
		},
		ADD_ITEM(state, id) {
			return state.shoppingCart.push(id);
		},

		REMOVE_ITEM(state, index){
			return state.shoppingCart.splice(index, 1);
		}

		
	},
	actions: {
		getProducts({ commit }) {
			get(PRODUCTS_URL)
			.then(response => {
				commit('SET_PRODUCTS', response.data)
			})
		},

		addToCart(context, id) {
			context.commit("ADD_Item", id);
		},
		
		removeFromCart(context, index) {
			context.commit("REMOVE_Item", index);
		},

		async registerUser(context, payload) {

			const response = await post(REGISTER_URL, payload)
			console.log(response)

			console.log(context)
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
