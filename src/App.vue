<template>
	<div v-if="!auth"> 
		<div class="login">
			<Login />
		</div>
		<div class="footer">
			<FooterComponent :screen="'login'" />
		</div>
	</div>
	<div v-else>
		<div class="app">
			<Sidebar/>
			<router-view></router-view>	
		</div>
		<div class="footer">
			<FooterComponent :screen="'main'" />
		</div>
	</div>
</template>

<script>
import { mapGetters } from 'vuex';
import Login from './components/login/Login.vue';
import FooterComponent from './components/FooterComponent.vue';
import Sidebar from './components/sidebar/Sidebar.vue';

export default {
	components: { Login, FooterComponent, Sidebar },

	data() {
		return {};
	},

	computed: {
		...mapGetters('UsersStore', ['auth']),
	},

	methods: {
	}
};
</script>

<style lang="scss" scoped> 
@import url('./assets/style.css');
.login {
	height: 97vh !important;
}

.app {
        display: flex;
        height: 97vh !important;
        main{
            flex: 1 1 0;
            padding: 2rem;

            @media (max-width: 768px){
                padding-left: 6rem;
            }
        }
    }
</style>
