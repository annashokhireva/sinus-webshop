<template>
	<div class="product" @click="showModal">
		<div class="product-img">
			<img :src="`/products/${img}`"  alt="Product image">
		</div>
		<div class="info">
			<div class="top-line">
				<p>{{ title }}</p>
				<span class="cart" @click.stop="$emit('addToCart', $event)">
					<img src="../assets/icons/shopping-cart.svg" width="24" alt="shoppinng cart">
				</span>
			</div>
			<div class="details">
				<div class="short-desc">
					<p> {{ desc }} </p>
				</div>
				<div class="price">
					<p> <b>{{price}}</b> kr</p>
				</div>
			</div>
		</div>
	</div>
</template>

<script>

export default {
	props: {
		product: Object,
		img: String,
		title: String,
		desc: String,
		price: Number,
		id: String
		
	},

	methods: {

		showModal(){
			const index = this.$store.getters.products.indexOf(this.product)
			this.$store.commit('setActiveIndex', index);
			this.$store.commit('showModal', 'ProductModal');
		}
	}
}
</script>

<style lang="scss" scoped>

	.product {
		height: 425px;
		min-width: 242px;
		margin-right: 2%;

		// &:first-of-type {
		// 	margin-left: $main_margin;
		// }

		// &:last-child {
		// 	padding-right: $main_margin;
		// 	box-sizing: content-box;
		// }

		.product-img {
			background-color: $bkg_gray;
			height: 70%;
			cursor: pointer;
			display: flex;
			justify-content: center;
			align-items: flex-end;

			img {
				max-width: 90%;
				max-height: 100%;
			}
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