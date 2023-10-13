<template>
    <CardPrime class="card">
        <template #title>
            <h3 class="card-titulo">
                {{ section.title }}
            </h3>
        </template>

        <template #content>
            <div class="card-contenedor-icono">
                <span class="material-icons icon-card">
                    <!-- {{ section.icon }} -->
                    <i 
					class="pi"
					:class="section.icon"
				></i>
                </span>
            </div>
        </template>
    </CardPrime>
</template>

<script>
export default {
	name: 'HomeCard',
	props: {
		section: {
			type: Object,
			required: true,
		}
	}
};
</script>

<style lang="scss" scoped>
    .card {
        margin: auto;
        width: 90%;
        background-color: var(--dark);
        color: var(--light);
        border-radius: 8px;
        &:hover {
            cursor: pointer;
            background-color: var(--main-color-hover);
            .card-titulo { 
                color: var(--secondary-color) !important;
            }
            .icon-card {
                font-size: 10vh;
                text-align: center;
                margin: auto;
                transition: 0.3s;
                i {
                    color: var(--secondary-color) !important;
                    font-size: 10vh;
                }
            }
        }
        .card-titulo {
            text-align: center;
            transition: 0.3s;
            color: var(--main-color);
        }
        .card-contenedor-icono {
            display: flex;
            .icon-card {
                font-size: 10vh;
                text-align: center;
                margin: auto;
                transition: 0.3s;
                i {
                    color: var(--main-color);
                    font-size: 10vh;
                }
            }
        }
    }
</style>