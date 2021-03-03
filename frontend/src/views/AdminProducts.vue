<template>
	<div>
		<main-header>
			<template v-slot:nav>
				<main-nav/>
			</template>
		</main-header>

		<div class="main">
			<h2>Admin Products</h2>
			<div class="sub-header">
				<p >Add / Edit</p>
				<span class="line"></span>
			</div>
			
			<section class="add-edit-form" v-if="cardPressed">
				<div class="product-img">
					<!-- <div class="img-box"> -->
						<label for="image" class="label"><p class="label-txt">Product Image</p></label>
						<input type="file" name="image" class="inputfile">
					<!-- </div> -->

				</div>

				<form class="product-form">
					<label for="product-name">Product Name</label>
					<input type="text" name="product-name">

					<label for="product-short-desc">Product Short Description</label>
					<input type="text" name="product-short-desc">

					<label for="product-price">Product Price</label>
					<input type="text" name="product-price">

					<label for="product-serial">Product Serial</label>
					<input type="text" name="product-serial">
				</form>

				<div class="product-desc">
					<label for="product-desc">Product Description</label>
					<textarea type="message" name="product-desc"> </textarea>
				</div>
			</section>

			<section class="all-cards">
				<div class="add-card-box">
					<img src="../assets/icons/plus.svg" alt="" class="plus">
				</div>


				<div class="add-card-box">
					<img src="../assets/icons/plus.svg" alt="" class="plus">
				</div>
				<div class="add-card-box">
					<img src="../assets/icons/plus.svg" alt="" class="plus">
				</div>
				<div class="add-card-box">
					<img src="../assets/icons/plus.svg" alt="" class="plus">
				</div>
				<div class="add-card-box">
					<img src="../assets/icons/plus.svg" alt="" class="plus">
				</div>
				
			</section>
	
		</div>
	</div>
</template>

<script>
import MainHeader from '../components/MainHeader.vue';
import MainNav from '../components/MainNav.vue';

export default {
	data () {
		return {
			cardPressed: true
		}
	},

	components: {
		MainHeader,
		MainNav
	},

}
</script>

<style lang="scss" scoped>
	h2 {
		margin: $space $main_margin $space/4;
		text-align: left;
	}

	.sub-header {
		margin: 0 $main_margin;
		display: flex;
		justify-content: space-between;
		justify-content: center;

		p {
			text-align: left;
			margin-right: $space/2;
		}

		.line {
			flex: 1;
			border-bottom: 1px solid $details_gray;
			margin: auto 0;
		}
		
	}

	.add-edit-form {
		height: fit-content;
		margin: $space/2 $main_margin $space;
		background-color: $bkg_gray;
		box-shadow: inset 0 0 5px $details_gray;
		display: flex;
		justify-content: space-around;
		align-items: stretch;
		padding: $space/2;
	}

	label {
		line-height: 1.5em;
		font-size: 14px;
	}

	input {
		font-size: 14px;
		font-family: 'Raleway', sans-serif;
	}

	.product-img {
		width: 30%;
		display: flex;
		flex-direction: column;
		align-items: stretch;
		text-align: left;

		.inputfile{
			flex: 1;
			border-radius: 5px;
			border: 1px solid $details_gray;
			background-image: url("../assets/icons/pictures.svg");
			background-size: 50%;
			background-position: center;
			background-repeat: no-repeat;
			color: rgba(255, 255, 255, 0);
			cursor: pointer;

			&:focus {
				outline: none;
			}

			&::-webkit-file-upload-button {
				visibility: hidden;
			}

			&::before {
				content: '';
			}
		}
	}

	.product-form {
		width: 30%;
		display: flex;
		flex-direction: column;
		justify-content: space-between;
		align-items: stretch;
		text-align: left;

		input {
			background-color: transparent;
			border-radius: 2px;
			border: 1px solid $details_gray;
			height: $space/2;
			padding: 0 5%;
			margin-bottom: 5%;

			&:last-of-type {
				margin-bottom: 0;
			}

			&:focus {
				outline: none;
			}
		}
	}

	.product-desc {
		width: 30%;
		display: flex;
		flex-direction: column;
		align-items: stretch;
		text-align: left;

		textarea {
			flex: 1;
			background-color: transparent;
			border-radius: 2px;
			border: 1px solid $details_gray;
			padding: 5%;
			margin: 0;
			resize: none;
			overflow: scroll;
			box-sizing: border-box;
			font-family: 'Raleway', sans-serif;

			&:focus {
				outline: none;
			}
		}
	}

	.all-cards {
		display: flex;
		flex-flow: wrap;
		flex-direction: row;
		justify-content: stretch;
		margin: 0 $main_margin $space;

		.add-card-box {
			height: 456px;
			min-width: 242px;
			border: 1px solid $details_gray;
			display: flex;
			justify-content: center;
			align-items: center;
			cursor: pointer;
			margin: 0 $space/2 $space/2 0;

			& img:hover {
				zoom: 90%;
				filter: contrast(50%);
			}
		}
	}
</style>