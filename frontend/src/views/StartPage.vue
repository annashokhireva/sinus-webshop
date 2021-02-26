<template>
	<div>
		<main-header>
			<template v-slot:nav>
				<main-nav />
			</template>
		</main-header>
		<div class="main">
			<div class="add-window">
				<span class="single-img">
					<img src="../assets/img/skater-wood.jpg" alt="Skater on a wooden skateboard">
				</span>
				<span class="squares">
					<div class="text">
						<h2>Natural</h2>
						<h2 class="large">Wood</h2>
						<h2>boards</h2>
					</div>

					<span class="hold">
						<img src="../assets/img/holding-sk8.jpg" alt="Skater holdiing a skateboard">
					</span>
					<span class="listen">
						<img src="../assets/img/music-sk8.jpg" alt="Skater holdiing a skateboard">
					</span>
					
					<div class="discover">
						<router-link to="/skateboards">
							<span class="link">
								<p>Discover latest collection</p>
								<img src="../assets/icons/arrow_right.svg" alt="Arrow right">
							</span>
						</router-link>
					</div>
				</span>
			</div>
		</div>
	</div>
</template>

<script>
import MainHeader from '../components/MainHeader.vue'
import MainNav from '../components/MainNav.vue'

export default {
	components: { 
		MainHeader,
		MainNav 
	},
}
</script>

<style lang="scss" scoped>
	.add-window {
		margin: $space $main_margin;
		display: grid;
		grid-template-columns: repeat(4, 1fr);
		grid-template-rows: repeat(2, minmax($ad_height/4, $ad_height/2));
	}

	.single-img {
		grid-column: 1 / span 2;
		grid-row: 1 / span 2;
		img {
			width: 100%;
			max-width: 590px;
			height: auto;
		}
	}



	.text {
		grid-column: 3;
		display:flex;
		flex-direction: column;
		justify-content: space-between;
		align-items: stretch;
		width: 100%;
		max-width: 285px;
		height: auto;

		h2 {
			font-family: 'Raleway', sans-serif;
			font-weight: bold;

			&:nth-of-type(2){
				font-size: 2.1em;
			}	

			&:nth-of-type(3){
				font-size: 1.7em;
			}	
		}
		
	}

	.discover {
		background-color: $bkg_gray;
		display: flex;
		justify-content: center;
		align-items: center;
		width: 285px;
		height: 231px;

		.link {
			display: flex;
			justify-content: space-between;
		}

		a {
			color: $black;
		}
	}
</style>