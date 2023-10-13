<template>
	<div class="item-form-container">
		<div class="p-inputgroup flex-1">
			<span class="p-inputgroup-addon">
				<i class="pi pi-user"></i>
			</span>
			<InputText 
				v-model="user"
				placeholder=" Usuario" 
			/>
		</div>

		<div class="p-inputgroup flex-1">
			<span class="p-inputgroup-addon">
				<i class="pi pi-key"></i>
			</span>
			<PasswordPrime 
				v-model="password"
				class="password"
				toggleMask
				placeholder=" Contraseña" 
				:feedback="false"
			/>
		</div>

		<MainButton
			@click="login()"
			:label="'Ingresar'"
			:loading="loading"
			:disabled="disabled"
		/>
	</div>

	<ToastPrime />
</template>

<script>
import MainButton from '../MainButton.vue';
import { mapActions } from 'vuex';
// import loadModulesByAccount from '../../managers/modulesLoader/modulesLoader';
// import store from '../../managers/store/store';
// import router from '../../managers/router/router';

export default {
	components: { MainButton },
	data() {
		return {
			user: null,
			password: null,
			loading: false,
		};
	},

	computed: {
		disabled() {
			return (this.user !== null && this.user !== '') && (this.password !== null && this.password !== '') ? false : true;
		}
	},

	methods: {
		...mapActions('UsersStore',['getUser']),
		async login() {
			let error = 0;
			this.loading = true;
			await this.$api.csrfCookie();
			await this.$api.login(this.user, this.password)
				.then ((response) => {
					this.getUser(response.data);
					// loadModulesByAccount(store, router, 'admin');
				})
				.catch(function () {
					error = 1;
				});
			this.loading = false;

			if (error === 1) {
				this.showErrors();
			}
		},

		showErrors() {
			this.$toast.add({
				severity: 'error',
				summary: 'Mensaje de error',
				detail: 'Usuario o contraseña incorrectos',
				life: 3000,
			});
		}
	}
};
</script>

<style lang="scss" scoped>
.item-form-container {
	height: 85%;
	display: flex;
	flex-direction: column;
	justify-content: space-evenly;
	align-items: center;
	.p-inputgroup {
		height: 4vh;
		width: 80%;
	}
	.submit-button {
		padding: 10px;
	}
}

</style>