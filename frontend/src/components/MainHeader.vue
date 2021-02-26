<template>
	<header>
		<top-nav />
		<slot name="nav"/>
	</header>
</template>

<script>
import TopNav from './TopNav.vue';

export default {
	components: { 
		TopNav
	}
}
</script>

<style lang="scss" scoped>
	header {
		position: fixed;
		background-color: white;
		width: 100vw;
		padding: 0;
		height: $header_height;
		box-shadow: 0px 5px 5px rgba(236, 236, 236, 0.247);
		z-index: 1;
	}

	.nav {
		height: $nav_slot_height;
	}

</style>