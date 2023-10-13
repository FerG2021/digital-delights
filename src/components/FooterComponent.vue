<template>
  <div class="container">
    <a href="http://fssolutions.com.ar" target="_blank" :class="screen">
        Desarrollado por FSSolutions
    </a>
  </div>
</template>

<script>
export default {
	name: 'FooterComponent',
	props: {
		screen: {
			type: String,
			required: true,
		}
	}
};
</script>

<style scoped lang="scss">
.container {
    text-align: center;
    .login {
        color: var(--secondary-color);
        text-decoration: none;
    }
    .login:hover {
        color: var(--secondary-color-hover);
    }
    .main {
        text-align: center;
        color: var(--main-color);
        text-decoration: none;
    }
    .main:hover {
        color: var(--secondary-color-focus);
    }
}
</style>