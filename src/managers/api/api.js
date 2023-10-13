import axios from 'axios';


axios.defaults.withCredentials = true;
axios.defaults.baseURL = import.meta.env.VITE_API_URL;

export default {
	csrfCookie() {
		return axios.get('/sanctum/csrf-cookie');
	},

	login(email, password) { 
		return axios.post('/login', { email: email, password: password });
	},

	getUser() { 
		return axios.get('/api/user');
	},

	logout() {
		return axios.post('/logout');
	},

	getProducts() {
		return axios.get('/api/producto');
	}
};