<template>
	<div class="container">
		<div class="form-container">
			<div class="greeting">
				Bienvenido
			</div>
			<LoginItems />
		</div>
	</div>
</template>

<script>
import LoginItems from './LoginItems.vue';

export default {
	components: { LoginItems },
	name: 'LoginComponent',
};
</script>

<style lang="scss" scoped>
.container {
	height: 100vh;
	background: var(--background);
	display: flex;
	justify-content: center;
	align-items: center;
	.form-container {
		width: 22rem;
		height: 50vh;
		border-radius: 20px;
		background: var(--background-light);
		.greeting {
			display: flex;
			justify-content: center;
			align-items: center;
			padding: 10px;
			font-size: 2rem;
			text-align: center;
			height: 15%;
		}
	}
}
</style>