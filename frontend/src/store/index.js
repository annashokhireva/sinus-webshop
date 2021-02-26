import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
	state: {
		modalVisible: false,
		modalComponent: null,
	},
	getters: {
		active: (state) => (state.open.lenght > 0 ? state.open[0] : null)
	},
	mutations: {
		showModal(state, componentName) {
			state.modalVisible = true;
			state.modalComponent = componentName;
		},
		hideModal(state) {
			state.modalVisible = false;
		}
	},
	actions: {
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
