<template>
	<div>
		<ButtonPrime 
			class="button"
			:label="label"
			:loading="loading"
			:disabled="disabled"
		/>
	</div>
</template>

<script>
export default {
	name: 'MainButton',
	props: {
		label: {
			type: String,
			required: false,
			default: 'Button'
		},
		loading: {
			type: Boolean,
			required: false,
			default: false
		},
		disabled: {
			type: Boolean,
			required: false,
			default: false
		}
	},
	data() {
		return {
			
		};
	},
};
</script>

<style lang="scss" scoped>
.button {
	background-color: var(--secondary-color);
	border: none;
	&:focus {
		background-color: var(--secondary-color-focus);
	}
	&:hover {
		background-color: var(--secondary-color-hover);
	}
}

</style>