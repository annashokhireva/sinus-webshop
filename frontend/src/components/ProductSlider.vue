<template>
	<div class="slider">
		<div class="headline">
			<h3>Best selling skateboards</h3>
			<span class="buttons">
				<img src="../assets/icons/arrow-gray.svg" alt="arrow left" @click.prevent="slideLeft">
				<img src="../assets/icons/arrow-black.svg" alt="arrow right" @click.prevent="slideRight">
			</span>
		</div>
		
		<div class="product-display">
			<div>
				<product-card />
			</div>	
		</div>
	</div>
</template>

<script>
import ProductCard from './ProductCard.vue';
export default {
	components: { 
		ProductCard 
	}
}
</script>

<style lang="scss" scoped>
	.slider {
		height: $slider_height;
		width: 100vw;
		margin: $space 0;
	}

	.headline {
		display: flex;
		justify-content: space-between;
		align-items: center;
		margin: 0 $main_margin;

		h3 {
			text-align: left;	
		}

		.buttons {
			width: 5%;
			display: flex;
			justify-content: space-between;

			img {
				cursor: pointer;
			}
		}
	}

	.product-display {
		display: flex;
		align-items: center;
		margin-top: $space/2;
	}
</style>