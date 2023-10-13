export default {
	namespaced: true,

	state: {
		auth: false,
		user: false,
		modules: null,
	},

	getters: {
		auth(state) {
			return state.auth;
		},
		user(state){
			return state.user;
		},
		modules(state) {
			return state.modules;
		},
	},

	mutations: {
		SET_USER(state, user) {
			state.user = user;
			state.auth = Boolean(user);
		},
		setModules(state, modules) {
			state.modules = modules;
		}
	},

	actions: {
		getUser( context, user ) {
			console.log('user');
			console.log(user);
			context.commit('SET_USER', user);
		},
		deleteUser( context ) {
			context.commit('SET_USER', null);
		}
	},
};