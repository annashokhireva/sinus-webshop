<template>
	<div>
		<main-header>
			<template v-slot:nav>
				<main-nav />
			</template>
		</main-header>
		<div class="main">
			<div class="add-window">
				
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
			
				<router-link to="/skateboards" tag="div" class="discover">
					<img src="../assets/img/discover-collection.svg" alt="Discover latest collection">
				</router-link>

			</div>

			<product-slider />
		</div>
	
	</div>
</template>

<script>
import MainHeader from '../components/MainHeader.vue';
import MainNav from '../components/MainNav.vue';
import ProductSlider from '../components/ProductSlider.vue';

export default {
	components: { 
		MainHeader,
		MainNav,
		ProductSlider
	},
}
</script>

<style lang="scss" scoped>
	.add-window {
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
</style>