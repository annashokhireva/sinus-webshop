import Vue from "vue";
import Vuex from "vuex";
import {
  get,
  post,
  setToken,
  PRODUCTS_URL,
  REGISTER_URL,
  AUTH_URL,
  ORDERS_URL,
  USER_URL
} from "../api/api.js";
Vue.use(Vuex);

const userDefault = {
	name: '',
	email: '',
	role: '',

	address: {
		street: '',
		zip: '',
		city: '',
	}
}

export default new Vuex.Store({
	state: {
		products: [],
		orders: [],
		user: userDefault,
		activeProductIndex: null,
		shoppingCart: [],
		modalVisible: false,
		navVisible: false,
		modalComponent: null,
		bagVisible: false,
		logedIn: false,
		isAdmin: false
	},

	getters: {
		cart: (state) => state.shoppingCart,
		products: (state) => state.products,
		orders: (state) => state.orders,
		productById: (state) => (id) => {
		return state.products.find((product) => product._id === id);
		},
		// active: (state) => (state.open.lenght > 0 ? state.open[0] : null)
		total: (state) => {
		if (state.shoppingCart.length > 0) {
			return state.shoppingCart
			.map((item) => item.price)
			.reduce((total, amount) => total + amount);
		} else {
			return 0;
		}
		},
	},

	mutations: {
		setProducts(state, products) {
			state.products = products;
		},

		setOrders(state, orders) {
			state.orders = orders;
			console.log(orders);
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

		hideBag(state){
			state.bagVisible = false;
		},

		addItem(state, product) {
			state.shoppingCart.push(product);
		},

		addNewProduct(state, product) {
			state.products.push(product);
		},

		removeItem(state, index) {
			state.shoppingCart.splice(index, 1);
		},

		setActiveIndex(state, index) {
			state.activeProductIndex = index;
		},
		
		showUser(state) {
			state.logedIn = true;
		},

		getUser(state, user) {
			state.user = user;
			console.log(user);
		},

		logOut(state) {
			state.logedIn = false;
			state.user = userDefault;
		},

		initialiseStore(state) {

			const user = localStorage.getItem("user");

			if (user) {
				setToken(user);
				state.user = JSON.parse(user);
				if (user.role === 'admin') {
					state.isAdmin = true;
				}
			}
			console.log(user.role)

			if (localStorage.getItem("cartProducts") !== null) {
				this.replaceState(
				Object.assign(state, JSON.parse(localStorage.getItem("cartProducts")))
				);
			}

			const token = localStorage.getItem("token");

			if (token) {
				setToken(token);
				state.logedIn = true;
			}
		},

		clearLocalstorage() {
			localStorage.removeItem("token");
		},
	},

	actions: {
		getProducts({ commit }) {
			return get(PRODUCTS_URL).then((response) => {
				commit("setProducts", response.data);
			});
		},

		async getOrders({ commit }) {
			const response = await get(ORDERS_URL);
			commit("setOrders", response.data);
			// console.log(response.data);
		},

		async getUser({commit}) {
			const response = await get(USER_URL);

			commit("getUser", response.data);
		},

		addToCart(context, product) {
			context.commit("addItem", product);
			localStorage.setItem(
				"cartProducts",
				JSON.stringify(this.state.shoppingCart)
			);
		},

		addNewProduct(context, product) {
			context.commit("addNewProduct", product);
		},

		removeFromCart(context, index) {
			context.commit("removeItem", index);
		},

		async sendOrder(context, payload) {
			const response = await post(ORDERS_URL, payload);
			console.log(response);
			console.log(context);
		},

		async registerUser(context, payload) {
			const response = await post(REGISTER_URL, payload);
			setToken(response.data.token);

			console.log(context);
		},

		async authenticateUser(context, payload) {
			const response = await post(AUTH_URL, payload);
			setToken(response.data.token);
			localStorage.setItem("token", response.data.token);

			if (response.status === 200) {
				const userResp = await get(USER_URL);
				context.state.user = userResp;

				localStorage.setItem('user', JSON.stringify(userResp));

				if (userResp.data.role === 'admin') {
					context.state.isAdmin = true;
				}
				else {
					context.state.isAdmin = false;
				}	
			}
			
			context.commit("hideModal");
			context.commit("showUser");
		},
	},
	
	modules: {},
});