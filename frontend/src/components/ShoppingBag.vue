<template>
	<div class="shopping-bag" >
		<div class="shadow"></div>
		<div v-if="cartItemsCount.length > 0" class="circle">
			{{ cartItemsCount.length }}
		</div>
		

		<img src="../assets/icons/shopping-cart.svg" alt="Shopping cart" @click="toggleBag">
	
		<transition name="fade">
			<ul v-if="visible" class="bag-view">
				<h2 v-if="cartItemsCount.length <= 0" class="empty-bag">Your shopping bag is empty</h2>
				<h2 v-else>Din beställning</h2>
				<div class="specification">
					<li>
						<div class="item-container">
							<div class="item-header">
								<h3>V-for bagItems</h3>
								<div class="dots"></div>
							</div>
							<p>47 kr</p>
						</div>
						<div class="counter">
							
						</div>
					</li>

					<div class="total">
						<div class="total-container">
							<div class="total-header">
								<h3>Total</h3>
								<div class="dots"></div>
							</div>
							<p>inkl moms + drönarleverans</p>
						</div>
						<div class="total-price">
							<h3>473kr</h3> 
						</div>
					</div>
				</div>
				<button class="brown">
					<router-link to="/order-status" >
						<h4>Take my money!</h4>	
					</router-link>	
						
				</button>			

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
			default: false
		}
	},

	computed: {
		// items: function() {
		// 	return this.$store.state.bagItems;
		// },
		cartItemsCount: function() {
			return this.$store.state.cart;
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

		.circle {
		background-color: rgba(229, 103, 78, 1);
		color: white;
		margin: 0;
		border-radius: 50%;
		width: 22px;
		height: 22px;
		text-align: center;
		position: absolute;
		top: 15%;
		right: 15%;
		}
	}

	.bag-view {	
		position: absolute;
		top: 60%;
		right: -15%;
		width: 341px;
		height: 575px;
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

		h2 {
			font-size: 10px;
			margin: 10% 0;
			text-align: center;
		}

		h3 {
			flex: 2 50%;
			font-size: 20px;
			line-height: 1em;
			margin: 0;
		}

		p {
			font-size: 12px;
		}

		.specification {
			display: flex;
			flex-direction: column;
			justify-content: space-between;
		}

		li, .total {
			display: flex;
			justify-content: space-between;
			margin: 2% 0;
		}

		.item-container {
			min-height: 75px;
			display: flex;
			flex-direction: column;
			justify-content: flex-end;
			flex-basis: 90%;

			p {
				margin: 2% 0 0;
			}
		}

		.item-header, 
		.total-header {
			display: flex;
			justify-content: flex-start;
			align-items: flex-end;
			flex-basis: 90%;
		}

		.dots {
			flex: 1 40%;
			border-bottom: 1px dotted black;
		}

		.counter, .total-price {
			width: 10%;
			display: flex;
			flex-direction: column;
			justify-content: space-evenly;
			align-items: center;
			cursor: pointer;
		}
	
		.total {
			margin-top: 15%;

			h3 {
				font-size: 12px;
				flex: 2 30%;
			}

			.total-container {
				width: 70%;
				flex-basis: 100%;
			}

			.dots {
				flex: 1 70%;
			}
			.total-price {
				width: 30%;
				display: flex;
				justify-content: flex-end;
				align-items: flex-end;
				cursor: default;
			}
		}
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