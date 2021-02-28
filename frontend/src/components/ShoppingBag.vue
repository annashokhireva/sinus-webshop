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
							<div class="product-image"></div>
							<div class="product-info">
								<h2>{{ title }}</h2>
								<div class="product-counter">
									</div>
								</div>
							
							<div class="product-price">{{price}}
								<div class="cart-bin"></div>
								</div>
						
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
		columns: 1fr 1fr 1fr;
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
		columns: 1fr 1fr;
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