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

			<div class="ad-window">
				<img src="../assets/img/clothes-ad.png" alt="Jumping man">
				<button class="btn-medium dark" @click="goTo('/clothing')">
					<span>
						<p>Discover latest collection</p>
						<img class="icon" src="../assets/icons/arrow_right_light.svg" alt="arrow">
					</span>
					
				</button>
			</div>

			<product-slider header="Our products">
				<template v-slot:products>
					<div class="products-view">
						<product-card 
							v-for="(product, i) in products"
							:key="i" 
							:product="product"
							:img="product.imgFile" 
							:title="product.title" 
							:desc="product.shortDesc" 
							:price="product.price"
							@addToCart="addToCart(product)"
							:id="product._id"
						/>
					</div>	
				</template>
			</product-slider>

		</div>
	</div>
</template>

<script>
import MainHeader from '../components/MainHeader.vue';
import MainNav from '../components/MainNav.vue';
import ProductCard from '../components/ProductCard.vue';
import ProductSlider from '../components/ProductSlider.vue';

export default {
	components: { 
		MainHeader,
		MainNav,
		ProductSlider,
		ProductCard
	},

	computed: {
		products() {
			return this.$store.getters.products;
		}
	},

	methods: {
		goTo(path) {
			return this.$router.push(path);
		},

		addToCart(id) {
			this.$store.dispatch("addToCart", id);
		}
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
			object-fit: cover;
			width: 100%;
			max-height: 100%;
		}
	}

	.text {
		grid-column: 3;
		grid-row: 1;
		align-self: center;

		img {
			object-fit: cover;
			width: 100%;
			max-height: 100%;
		}	
	}

	.hold {
		grid-column: 4;
		grid-row: 1;
		align-self: center;

		img {
			object-fit: cover;
			width: 100%;
			max-height: 100%;
		}
	}

	.listen {
		grid-column: 3;
		grid-row: 2;

		img {
			object-fit: cover;
			width: 100%;
			max-height: 100%;
		}
	}

	.discover {
		grid-column: 4;
		grid-row: 2;
		align-self: center;
		cursor: pointer;
		
		img {
			object-fit: cover;
			width: 100%;
			max-height: 100%;
		}
	}

	.products-view {
		display: flex;
		justify-content: space-between;
		align-items: center;
		overflow: scroll;

		.product:first-of-type {
			margin-left: $main_margin;
		}

		.product:last-child {
			padding-right: $main_margin;
			box-sizing: content-box;
		}
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