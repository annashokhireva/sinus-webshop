<template>
	<div class="product-modal">
		<button @click="addToCart">Add to cart</button>
	</div>

</template>

<script>
import { mapMutations } from 'vuex';

export default {
	methods: {
		...mapMutations([
		'hideModal',
		]),

		addToCard() {
			// add to cart function

			this.hideModal();
		}
	},
}
</script>

<style lang="scss" scoped>

	.product-modal {
		width: 100px;
		height: 100px;
		background-color: red;
	}

</style>