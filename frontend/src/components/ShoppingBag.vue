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
							<div class="product-image">
							</div>
								<div class="product-info">
									v for product name
								<div class="product-counter">
							</div>
						</div>			
							<div class="product-price">v for price</div>
								<div class="cart-bin">
									<img src="../assets/icons/bin.svg" alt="Discard" class="bin">
								</div>
								<router-link to="/checkout"><button class="checkout-btn"><h1>CHECK OUT</h1></button></router-link>
						
						</div>
					</li>
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
		top: 60%;
		right: -15%;
		width: 390px;
		height: 618px;
		border: none;
		margin: 10px 30px 0 0;
		background-color: white;
		list-style: none;
		display: flex;
		flex-direction: column;
		justify-content: flex-start;
		align-items: stretch;
		padding: 0 10%;
		box-sizing: border-box;
		text-align: left;
		overflow: scroll;
		cursor: default;

		// .empty-bag {
		
		// }
	}

	.item-container {
		display: flex;
		flex-direction: column;
		grid-template-columns: 1fr 1fr 1fr;
	}

	.h2 {

		font-size: 12px;
	}

	.product-image {
	
		max-height: 95px;
		max-width: auto;
		column: 1;
	}
	.bin {
		
		columns: 3;
		justify-items: right;
	}
	.checkout-btn {
		height: 38px;
		width: 374px; 
		color: black;
	}
	.checkout-btn h1 {
		color: white;
	}
	button {
		margin: 15% auto;
	}

	.fade-enter-active, .fade-leave-active {
		transition: opacity .5s;
	}
	.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
		opacity: 0;
	}

</style>