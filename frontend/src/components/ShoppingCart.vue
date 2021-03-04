<template>
	<div class="shopping-cart" >
		<div @click="toggleBag" class="icon">
			<div v-if="cart.length > 0" class="circle">
			{{ cart.length }}
			</div>
			
			<img src="../assets/icons/shopping-cart.svg" alt="Shopping cart">
		</div>
		
		<transition name="fade">
			<ul v-if="visible" class="bag-view">
				<h1>YOUR CART ({{cart.length}})</h1>
				<h2 v-if="cart.length <= 0" class="empty-bag">Your shopping bag is empty</h2>
				<!-- <h2 v-else></h2> -->
					<li v-for="(item, i) in cart" :key="i">
						
						<div class="item-container">
							<div class="product-image"> 
								<img :src="`/products/${item.imgFile}`" width="50px" alt="Product image">
							</div>

							<div class="product-info">
								<h5>{{ item.title }}</h5>
								<p>{{ item.shortDesc }}</p>
					
							</div>

							<div class="product-price">
								<p>{{ item.price }} kr</p>
							</div>

							<!-- <div class="product-counter">
								<span>-</span>
								2 ganska svårt function. lägger till om vi hinner
								<span>+</span>
							</div> -->

							<div class="cart-bin" @click="removeFromCart(item)">
								<img src="../assets/icons/bin.svg" alt="Discard" class="bin">
							</div>
								
						</div>
						
					</li>

					<div class="totsl">Total: {{ totalAmount }} kr</div>
					<router-link to="/checkout">
						<button class="btn-large dark"><h4>Check out</h4></button>
					</router-link>
			</ul>
			

			
		</transition>
	</div>
	
</template>

<script>
import { mapState, mapMutations } from 'vuex';


export default {

	computed: {
		cart() {
			return this.$store.getters.cart;
		},

		cartCount() {
			return this.cart.length;
		},

		totalAmount () {
			return this.$store.getters.total
		},

		...mapState({
			visible: 'bagVisible',
		})
	},

	methods: {
		...mapMutations([
			'toggleBag' 
		]),

		removeFromCart(item) {
			const index = this.cart.indexOf(item)
			this.$store.dispatch("removeFromCart", index);
			console.log(index)
		}
	}

}
</script>

<style lang="scss" scoped>
	.shopping-cart {
		position: relative;

		.icon {
			cursor: pointer;
		}

		.circle {
		background-color: $black;
		color: white;
		margin: 0;
		border-radius: 50%;
		width: 22px;
		height: 22px;
		text-align: center;
		position: absolute;
		top: 1%;
		right: 25%;
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
		overflow:auto;
		cursor: default;


	}

	.item-container {
		display: grid;
		flex-direction: column;
		grid-template-columns: 20% 50% 26%;
		grid-template: 1fr;
		column-gap: 2%;
	}

	.h2 {
		
		font-size: 12px;
	}

	.product-image {
		grid-column: 1;
		grid-row: 1 / span 2;
		justify-self: center;
		align-self: center;
		
	}

	.thumbnail {
		max-height: 80px;
	}

	.product-info {
		grid-column: 2;
		justify-self: left;
		align-self: start;
	}

	.product-counter {
		grid-column: 2;
		grid-row: 2;
		justify-self: left;
		align-self: center;
	}

	.product-price {
		grid-column: 3;
		justify-self: right;
		align-self: start;
	}

	.cart-bin {
		justify-content: right;
		grid-column: 3;
		justify-self: right;
		align-self: center;
	}

	a {
		margin: 10% auto;
	}
	

</style>