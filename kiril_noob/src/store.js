import Vuex from "vuex";

const store = new Vuex.Store({
	state: {
		showContent: 0,
	},
	mutations: {
		setShowContent: (state, payload) => (state.showContent = payload),
	},
	getters: {
		getShowContent: (state) => {
			return state.showContent;
		},
	},
});

export default store;
