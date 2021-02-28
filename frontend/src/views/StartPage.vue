<template>
	<div>
		<main-header>
			<template v-slot:nav>
				<main-nav />
			</template>
		</main-header>
		<div class="main">
			<div class="ad-grid">
				
				<div class="single-img">
					<img src="../assets/img/skater-wood.jpg" alt="Skater on a wooden skateboard">
				</div>
				
				<div class="text">
					<img  src="../assets/img/natural-wood-boards.svg" alt="Natural wood boards">
				</div>

				<div class="hold">
					<img  src="../assets/img/holding-sk8.jpg" alt="Skater holdiing a skateboard">
				</div>

				<div class="listen">
					<img src="../assets/img/music-sk8.jpg" alt="Skater holdiing a skateboard">
				</div>
			
				<div class="discover" @click="goTo('/skateboards')">
					<img src="../assets/img/discover-collection.svg" alt="Discover latest collection">
				</div>

			</div>

			<product-slider header="Best selling skateboards">
				<template v-slot:products>
					<div class="products-view">
						<product-card 
							li v-for="(product, i) in products" 
							:key="i" :img="product.imgFile" 
							:title="product.title" 
							:desc="product.shortDesc" 
							:price="product.price"
							@click="showModal('ProductModal', product._id)"
							:id="product._id"
						/>
					</div>	
				</template>
			</product-slider>

			<div class="ad-window">
				<img src="../assets/img/clothes-ad.png" alt="Jumping man">
				<button class="btn-medium dark" @click="goTo('/clothing')">
					<span>
						<p>Discover latest collection</p>
						<img class="icon" src="../assets/icons/arrow_right_light.svg" alt="arrow">
					</span>
					
				</button>
			</div>

			<cart-test />
			<!-- <ul>
				<li v-for="(pr, i) in cart" :key="i"></li>
			</ul> -->
		</div>
	</div>
</template>

<script>
import MainHeader from '../components/MainHeader.vue';
import MainNav from '../components/MainNav.vue';
import ProductCard from '../components/ProductCard.vue';
import ProductSlider from '../components/ProductSlider.vue';
import { mapMutations } from 'vuex';
import CartTest from '../components/CartTest.vue';
// import { get, PRODUCTS_URL } from '../api/api.js';

export default {
	components: { 
		MainHeader,
		MainNav,
		ProductSlider,
		ProductCard,
		CartTest
	},

	// data() {
	// 	return {
	// 		products: []
	// 	}
	// },

	// async created() {
	// 	const response = await get(PRODUCTS_URL);
	// 	this.products = response.data;
	// 	console.log(...this.products)
	// },

	computed: {
		products() {
			return this.$store.state.products;
		}
	},

	methods: {
		goTo(path) {
			return this.$router.push(path);
		},

		...mapMutations(['showModal'])
	},

	mounted() {
		this.$store.dispatch("getProducts");
	}
}
</script>

<style lang="scss" scoped>
	.ad-grid {
		margin: $space $main_margin;
		display: grid;
		grid-template-columns: repeat(4, minmax(0, 1fr));
		grid-template-rows: repeat(2, 1fr);
		gap: 1%;
	}

	.single-img {
		grid-column: 1 / span 2;
		grid-row: 1 / span 2;
		align-self: center;

		img {
			max-width: 100%; 
			height: auto
		}
	}

	.text {
		grid-column: 3;
		grid-row: 1;
		align-self: center;

		img {
			width: 100%;
			height: auto;
		}	
	}

	.hold {
		grid-column: 4;
		grid-row: 1;
		align-self: center;

		img {
			width: 100%;
			height: auto;
		}
	}

	.listen {
		grid-column: 3;
		grid-row: 2;

		img {
			width: 100%;
			height: auto;
		}
	}

	.discover {
		grid-column: 4;
		grid-row: 2;
		align-self: center;
		cursor: pointer;
		
		img {
			width: 100%;
			height: auto;
		}
	}

	.products-view {
		display: flex;
		justify-content: space-between;
		align-items: center;
		overflow: scroll;
	}

	.ad-window {
		margin: $space $main_margin;
		position: relative;

		img {
			width: 100%;
			height: auto;
		}

		.btn-medium {
			position: absolute;
			top: 75%;
			right: 0%;
		}

		span {
			display: flex;
			align-items: center;
			justify-content: center;
		}

		p {
			color: white;
		}

		.icon {
			height: 20px;
			width: 24px;
		}
	}
</style>