<template>
	<div class="product-modal">
		<aside>

		</aside>
		<article class="product-info">
			<div class="details">
				<h3>Product.Name</h3>
				<div class="colors">
					<div class="color-box">
						v-for=colors
					</div>
				</div>
				<div class="sizes">
					<div class="size-box">
						v-for=sizes
					</div>
				</div>
				<div class="price">
					<h3>500kr</h3>
				</div>
				<div class="specifications">
					<h5>Product info</h5>
					<ul>
						<li>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</li>
						<li>Vivamus a pellentesque mauris.</li>
						<li>Nam placerat orci vel orci placerat.</li>
						<li>Phasellus mattis quam a ultricies vehicula.</li>
						<li>Etiam quis malesuada justo.</li>
						<li>Nam placerat orci vel orci placerat.</li>
						<li>Phasellus mattis quam a ultricies vehicula.</li>
					</ul>
				</div>
			</div>
			
			<button class="btn-large dark" @click="addToCart"><h2>Add to cart</h2></button>
		</article>	
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
		width: 100%;
		display: flex;
	}

	aside {
		width: 50%;
		margin: 0;
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
		margin: 0 $space/4 $space/2;
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