<template>
	<div class="shopping-bag" >

		<div class="shadow"></div>
		<div v-if="cartItemsCount.length > 0" class="circle">
			{{ cartItemsCount.length }}
		</div>
		

		<img src="../assets/icons/shopping-cart.svg" alt="Shopping cart" @click="toggleBag">
	
		<transition name="fade">
			<ul v-if="visible" class="bag-view">
				<h1>YOUR CART ({{cartItemsCount.length}})</h1>
				<h2 v-if="cartItemsCount.length <= 0" class="empty-bag">Your shopping bag is empty</h2>
				<h2 v-else></h2>
					<li>
						
						<div class="item-container">
							<div class="product-image"> <img src="../assets/products/greta.png" class="thumbnail">
							</div>
								<div class="product-info">
									v for  product name
									<li>color : { {kod }}
									Size: { { kod} }</li>
									
								<div class="product-counter"> - 2 + 
							</div>
							</div>			
							<div class="product-price">v for price</div>
								<div class="cart-bin">
									<img src="../assets/icons/bin.svg" alt="Discard" class="bin">
								</div>
								
						
						</div>
						
					</li>
					<router-link to="/checkout">
						<button class="checkout-btn"><h1>CHECK OUT</h1></button>
					</router-link>
			</ul>
			

			
		</transition>
	</div>
	
</template>

<script>
import { mapState, mapMutations } from 'vuex';


export default {


	props: {
		showAmount: {
			type: Boolean,
			default: false,
			img: String,
			title: String,
			desc: String,
			price: Number,
			id: String
		}
	},

	computed: {
		// items: function() {
		// 	return this.$store.state.bagItems;
		// },
		cartItemsCount: function() {
			return this.$store.getters.cart;
		},
		...mapState({
			visible: 'bagVisible',
		}),
	},

	methods: {
		...mapMutations([
			'toggleBag' 
		])
	}

}
</script>

<style lang="scss" scoped>
	.shopping-bag {
		position: relative;

		.icon {
			cursor: pointer;
		}

	
	}

	.bag-view {	
		position: absolute;
		
		right: -15%;
		width: 390px;
		height: 618px;
		border: none;
		background-color: white;
		list-style: none;
		display: flex;
		flex-direction: column;
		justify-content: flex-start;
		align-items: stretch;
		box-sizing: border-box;
		text-align: left;
		
		cursor: default;

		// .empty-bag {
			
		// }
		


	}

	.item-container {
		display: grid;
		flex-direction: column;
		grid-template-columns: 33% 33% 34%;
		grid-template: 1fr;
	}

	.h2 {
		
		font-size: 12px;
	}

	.product-image {
		grid-column: 1;
		
	}
	.thumbnail {
		max-height: 80px;
		padding-left: 20px;
	}
	.product-info {
		grid-column: 2;
		
	}

	.product-price {
		grid-column: 3;
		margin-left: 80px;
	}
	.cart-bin {
		justify-content: right;
		grid-column: 3;
		margin-left: 80px
	}

	.checkout-btn {
		color: black;
		height: 38px;
		width: 374px; 
		border-radius: 0%;
		border-style: none;
		
		
	}
	.checkout-btn h1 {
		color: white;
	}
	button {
		margin: 15% auto;
	}

	

</style>