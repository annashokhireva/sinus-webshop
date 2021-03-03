<template>
	<div class="slider">
		<div class="headline">
			<h3>{{header}}</h3>
			<!-- <span class="buttons">
				<img src="../assets/icons/arrow-gray.svg" alt="arrow left" @click.prevent="slideLeft">
				<img src="../assets/icons/arrow-black.svg" alt="arrow right" @click.prevent="slideRight">
			</span> -->
		</div>
		
		<slot name="products" />
	</div>
</template>

<script>
export default {
	props: {
		header: String
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
		
	}

</style>