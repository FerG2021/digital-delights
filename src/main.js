import { createApp } from 'vue';
import './assets/style.css';
import App from './App.vue';
import axios from 'axios';
import VueAxios from 'vue-axios';
import store from './managers/store/store';
import router from './managers/router/router';
import ApiService from './managers/api/api';
import loadModulesByAccount from './managers/modulesLoader/modulesLoader';

axios.defaults.withCredentials = true;
axios.defaults.baseURL = import.meta.env.VITE_API_URL;

const account = 'admin';
loadModulesByAccount(store, router, account);

import PrimeVue from 'primevue/config';
import 'primevue/resources/themes/lara-light-purple/theme.css';
import 'primevue/resources/primevue.min.css';
import 'primeicons/primeicons.css';

import Button from 'primevue/button';
import InputText from 'primevue/inputtext';
import Password from 'primevue/password';
import Toast from 'primevue/toast';
import ToastService from 'primevue/toastservice';
import Card from 'primevue/card';

const app = createApp(App);

app.use(VueAxios, axios);
app.use(store);
app.use(router);
app.use(PrimeVue);
app.component('ButtonPrime', Button);
app.component('InputText', InputText);
app.component('PasswordPrime', Password);
app.component('ToastPrime', Toast);
app.component('CardPrime', Card);
app.use(ToastService);
app.config.globalProperties.$api = ApiService;
app.mount('#app');

// createApp(App)
// 	.use(VueAxios, axios)
// 	.use(store)
// 	.use(PrimeVue)
// 	.component('Button', Button)
// 	.component('InputText', InputText)
// 	.component('Password', Password)
// 	.component('Toast', Toast)
// 	.use(ToastService)
// 	.config.globalProperties.$api = ApiService	
// 		.mount('#app');
