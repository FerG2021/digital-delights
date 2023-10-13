<template>
    <div>
        <router-link 
            class="button" 
            :to="item.route" 
            v-if="is_expanded"
        >
            <span 
				class="material-icons"
			>
				<i 
					class="pi"
					:class="item.icon"
				></i>
			</span>
            <span class="text">{{ item.name }}</span>
        </router-link>

		<router-link
			class="button"
			:to="item.route" 
			v-if="!is_expanded"
		>
			<span 
				class="material-icons"
				:title="item.name"
			>
				<i 
					class="pi"
					:class="item.icon"
				></i>
			</span>
			<span class="text">{{ item.name }}</span>
		</router-link>
      </div>
</template>

<script>
export default {
	props: {
		item: {
			type: Object,
			required: true,
		},
		is_expanded: {
			type: Boolean,
			required: true,
		}
	}
};
</script>

<style lang="scss" scoped>
aside {
	h3,
	.button .text {
		opacity: 0;
		transition: 0.3s ease-out;
	}

	.menu {
		margin: 0 -1rem;

		.button {
			display: flex;
			align-items: center;
			text-decoration: none;

			padding: 0.5rem 1rem;
			transition: 0.2s ease-out;

			.material-icons {
				font-size: 1.8rem;
				color: var(--light);
				transition: 0.2s ease-out;
				i {
					font-size: 1.5rem;
					color: var(--light);
				}
			}

			.text {
				color: var(--light);
				transition: 0.2s ease-out;
			}

			&:hover,
			&.router-link-exact-active {
				background-color: var(--main-color-hover);
				cursor: pointer;

				.material-icons,
				.text {
					color: var(--secondary-color);
				}
			}

			&.router-link-exact-active {
				border-right: 5px solid var(--primary);
			}
		}
	}

	&.is-expanded {
		width: var(--sidebar-width);

		.menu-toggle-wrap {
			top: -3rem;
			.menu-toggle {
			transform: rotate(-180deg);
			}
		}

		h3,
		.button .text {
			opacity: 1;
		}

		h3 {
			color: var(--grey);
			font-size: 0.875rem;
			margin-bottom: 0.5rem;
			text-transform: uppercase;
		}

		.button {
			.material-icons {
				margin-right: 1rem;
			}
		}
	}

	@media (max-width: 768px) {
		position: fixed;
		z-index: 99;
	}

	.logout {
		cursor: pointer;
	}
}
</style>