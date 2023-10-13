import Store from '../store/store';
import api from '../api/api';

export default function loadModulesByAccount(store, router, account) {
	const accountsModules = {
		// Agrega otros tipos de account y los módulos correspondientes aquí
		admin: [
			// {
			// 	name: 'home',
			// 	componentName: 'Home',
			// },
			{
				name: 'products',
				componentName: 'Products',
				loadMethod: 'getProducts'
			},
			// {
			// 	name: 'categories',
			// 	componentName: 'Categories',
			// },
			// {
			// 	name: 'reviews',
			// 	componentName: 'Reviews',
			// }
		],
		empresa: [
			{
				name: 'home',
				componentName: 'Home',
			},
			{
				name: 'products',
				componentName: 'Products',
				loadMethod: 'getProducts'
			}
		]
	};

	const processModules = accountsModules[account] || [];

	processModules.forEach(module => {
		import(`../../modules/${module.name}/${module.name}Store.js`).then(moduleStore => {
			store.registerModule(`${module.componentName}Store`, moduleStore.default);
		});

		router.addRoute({
			path: `/${module.name}`,
			component: () => import(`../../modules/${module.name}/${module.componentName}.vue`)
		});


		Store.commit('UsersStore/setModules', processModules);

		loadMethod(module);
	});
}

async function loadMethod(module) {
	console.log('module');
	console.log(module);

	if (module.loadMethod) {
		await api[module.loadMethod]()
			.then ((response) => {
				console.log('response.data.data');
				console.log(response.data.data);
				// this.$store.dispatch(`${module.componentName}Store/${module.name}`, response.data.data);
				// this.getUser(response.data);
				// this.$store.dispatch('UsersStore/logout');
			});		
	}

	
}