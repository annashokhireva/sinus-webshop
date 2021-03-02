<template>
	<div class="product-modal" >
		<aside>
			<img :src="`/products/${activeProduct.imgFile}`"  alt="Product image">
		</aside>
		<article class="product-info">
			<div class="details" >
				<h3> {{ activeProduct.title }}</h3>

				<div class="price">
					<h3>{{ activeProduct.price }} kr</h3>
				</div>
				<div class="specifications">
					<p>{{ activeProduct.longDesc }}</p>
				</div>
			</div>
			
			<button class="btn-large dark" @click="addToCart"><h2>Add to cart</h2></button>
		</article>	
	</div>

</template>

<script>
// import { mapMutations } from 'vuex';

export default {

	computed: {
		activeProduct() {
			return this.$store.getters.products[this.$store.state.activeProductIndex];
		}
	},

	methods: {
		// ...mapMutations([
		// 'hideModal',
		// ]),

		addToCart() {
			this.$store.dispatch('addToCart', this.activeProduct);

			// this.hideModal();
		}
	}
}
</script>

<style lang="scss" scoped>

	.product-modal {
		width: 100%;
		display: flex;
	}

	aside {
		width: 50%;
		margin: 0;
		display: flex;
		justify-content: center;
		align-items: center;

		img {
			max-width: 100%;
		}
	}

	.product-info {
		width: 50%;
		margin: 0;
		padding: $space $space/2;
		display: flex;
		flex-direction: column;
		justify-content: space-between;
		align-items: center;

		.details {
			width: 100%;
			height: 90%;
			display: flex;
			flex-direction: column;
			justify-content: space-between;
			align-items: flex-start;
		}

		.price {
			margin: $space/3 0;
		}
	}

	.specifications {
		text-align: left;
		margin: $space/2 0;
		height: 40%;
		overflow: scroll;

		ul {
			text-align: left;
			list-style: square;
			padding-left: 20px;
			font-size: 16px;
		}
	}

</style>