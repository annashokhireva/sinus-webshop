<template>
	<header>
		<top-nav />
		<slot name="nav"/>
		<shopping-bag v-if="showBag"/>
			<main-nav v-if="visible" class="nav"/>
	</header>
</template>

<script>
import TopNav from './TopNav.vue';
import ShoppingBag from './ShoppingBag.vue';
import { mapMutations } from 'vuex';
import { mapState } from 'vuex';

export default {
	components: { 
		TopNav,
		ShoppingBag
	},

	props: {
		showBag: {
			type: Boolean,
			default: false
		}
	},

	computed: {
		...mapState({
			visible: 'navVisible',
		}),
	},

	methods: {
		...mapMutations([
			'showNav',
		]),
	},
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