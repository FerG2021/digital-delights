<template>
    <div 
		class="button logout" 
		v-if="is_expanded" 
		@click="logout()"
	>
        <span @click="logout()">
            <i class="pi pi-sign-out material-icons"></i>
        </span>
        <span class="text">{{ 'Salir' }}</span>
    </div>

    
	<div 
		class="button logout" 
		v-if="!is_expanded" 
		@click="logout()"
		title="Salir"
	>
		<span>
			<i class="pi pi-sign-out material-icons"></i>
		</span>
		<span class="text">{{ 'Salir' }}</span>
	</div>
</template>

<script>
import { mapActions } from 'vuex';

export default {
	name: 'LogOut',
	computed: {
		...mapActions('UsersStore',['deleteUser']),
	},
	methods: {
		async logout() {
			await this.$api.logout();
			this.deleteUser();
		},

		deleteUser() {
			this.deleteUser(null);
		}
	},
};
</script>

<style lang="scss" scoped>
aside {
  display: flex;
  top: 0;
  flex-direction: column;
  width: calc(2rem + 32px);
  min-height: 100vh;
  overflow: hidden;
  padding: 1rem;

  background-color: var(--dark);
  color: var(--light);

  transition: 0.2s ease-out;

  .flex {
    flex: 1 1 0;
  }

  .logo {
    margin-bottom: 1rem;
    img {
      width: 2rem;
      height: 2rem;
    }
  }

  .menu-toggle-wrap {
    display: flex;
    justify-content: flex-end;
    margin-bottom: 1rem;

    position: relative;
    top: 0;
    transition: 0.2s ease-out;

    .menu-toggle {
      transition: 0.2s ease-out;

      .material-icons {
        font-size: 2rem;
        color: var(--light);
        transition: 0.2s ease-out;
      }

      &:hover {
        .material-icons {
          color: var(--primary);
          transform: translateX(0.5rem);
        }
      }
    }
  }

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
      }

      .text {
        color: var(--light);
        transition: 0.2s ease-out;
      }

      &:hover,
      &.router-link-exact-active {
        background-color: var(--main-color-hover);

        .material-icons,
        .text {
          color: var(--secondary-color);
        }
      }

      &.router-link-exact-active {
        border-right: 5px solid var(--secondary-color);
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