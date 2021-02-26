<template>
	<div class="card">
		<div class="product" @click="showModal('ProductModal')">
			<img src="../assets/products/greta.png" alt="Greta">
		</div>
		<div class="info">
			<div class="top-line">
				<p>Product.Name</p>
				<span class="cart">
					<img src="../assets/icons/shopping-cart.svg" width="24" alt="shoppinng cart">
				</span>
			</div>
			<div class="details">
				<div class="colors">
					<div class="color-box">
						v-for=colors
					</div>
				</div>
				<div class="price">
					<p>kr</p>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
import { mapMutations } from 'vuex';

export default {
	methods: {
		...mapMutations(['showModal']),
	},
}
</script>

<style lang="scss" scoped>

	.card {
		height: 456px;
		width: 242px;
		margin-right: 2%;

		&:first-of-type {
			margin-left: $main_margin;
		}

		.product {
			background-color: $bkg_gray;
			height: 70%;
			cursor: pointer;
		}
	}

	.info {
		height: 30%;
		display: flex;
		flex-direction: column;
		justify-content: space-between;
		align-items: flex-start;
		padding: 5%;

		.top-line {
			display: flex;
			justify-content: space-between;
			align-items: center;
			width: 100%;

			p {
				font-size: 20px;
				cursor: pointer;
			}
		}
	}

	.details {
		display: flex;
		flex-direction: column;
		justify-content: space-evenly;
		align-items: flex-start;
		height: 80%;
	}

	.colors, .cart {
		cursor: pointer;
	}

</style>