<template>
    <main>
        <div class="main-container">
            <TitleComponent :title="sectionTitle" />

            <div class="container-grid">
                <div
                    class="contenedor-card"
                    v-for="(section, index) in sections"
                    :key="index"
                >
                    <Card 
                        @click="$router.push(section.path)"  
                        :section="section"
                    ></Card>
                </div>
            </div>
        </div>
    </main>
</template>

<script>
import Card from './Card.vue';
import TitleComponent from '../../components/Title.vue';

export default {
	name: 'HomeComponent',
	components: {
		Card,
		TitleComponent,
	},

	data() {
		return {
			sectionTitle: 'Home',
			sections: [
				{
					title: 'Productos',
					icon: 'pi-box',
					path: '/productos',
				},
				{
					title: 'Categorías',
					icon: 'pi-tags',
					path: '/categorias',
				},
				{
					title: 'Reseñas',
					icon: 'pi-file-edit',
					path: '/resenias',
				},
				{
					title: 'Mi cuenta',
					icon: 'pi-user',
					path: '/account',
				},
			],
		};
	},

	methods: {
	},
};
</script>

<style lang="scss" scoped>
.main-container {
	height: 93vh;
	.container-grid {
		display: flex;
		flex-wrap: wrap;
		.contenedor-card {
			padding: 10px 0;
			width: 25%;
		}
	}
}
</style>
