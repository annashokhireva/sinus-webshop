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
			
			<form class="add-edit-form" v-if="cardPressed" @submit.prevent="submitProduct">
				<div class="product-img">
					<label :for="product.imgFile" class="label"><p class="label-txt">Product Image</p></label>
					<input 
						type="file" 
						:id="product.imgFile"
						class="inputfile"
						value="product.imgFile"
					>
				</div>

				<div class="product-form">
					<label :for="product.title">Product Name</label>
					<input 
						type="text" 
						:id="product.title"
						v-model="product.title"
						required
					>

					<label :for="product.shortDesc">Product Short Description</label>
					<input 
						type="text" 
						name="product-short-desc"
						:id="product.shortDesc"
						v-model="product.shortDesc"
						required
					>

					<label :for="product.price">Product Price</label>
					<input 
						type="text" 
						name="product-price"
						:id="product.price"
						v-model="product.price"
						required
					>

					<label :for="product.serial">Product Serial</label>
					<input 
						type="text" 
						name="product-serial"
						:id="product._id"
						v-model="product._id"
					>
				</div>

				<div class="product-desc">
					<label :for="product.longDesc">Product Description</label>
					<textarea 
						type="message" 
						name="product-desc"
						:id="product.longDesc"
						v-model="product.longDesc"
					/>
				</div>

				<div class="error-box" v-if="errors.length">
					<ul>
						<li class="error-message" v-for="(error, index) in errors" :key="index">{{ error }}</li>
					</ul>
				</div>
				<button class="btn-small light" type="submit" @click="getProducts">
					<h5>add product</h5>
				</button>

			</form>

			<section class="all-cards">
				<product-card 
					v-for="(product, i) in adminProducts" 
					:key="i" 
					:product="product" 
					:price="product.price"
					:desc="product.shortDesc"
					:title="product.title"
					:longDesc="product.longDesc" 
					:id="id"
				/>
				<div class="add-card-box" @click.stop="showForm">
					<img src="../assets/icons/plus.svg" alt="" class="plus">
				</div>
				
			</section>
	
		</div>
	</div>
</template>

<script>
import MainHeader from '../components/MainHeader.vue';
import MainNav from '../components/MainNav.vue';
import ProductCard from '../components/ProductCard.vue';

export default {
	data () {
		return {
			cardPressed: false,
			product: this.productDefinition(),
			errors: [],
			adminProducts: []
		}
	},

	// props: {
	// 	products: Array
	// },

	components: {
		MainHeader,
		MainNav,
		ProductCard
	},

	computed: {
		// adminProducts() {
		// 	return this.$store.getters.products
		// }
	},

	methods: {
		productDefinition() {
			return {
				_id: '', // generated serverside
				title: '',
				price: 0,
				shortDesc: '',
				longDesc: '',
				imgFile: '' 
			};
		},

		getProducts() {
			this.adminProducts.push(this.product);
		},

		showForm() {
			this.cardPressed = true;

			//do not forget to hide form when product is submited
		},

		submitProduct() {
			// if (this.checkForm()){
				this.addProduct();
			// }
		},

		// checkForm() {
		// 	this.errors = [];

		// 	if (!this.product.title) {
		// 		this.errors.push('Title required.');
		// 	}
		// 	if (!this.product.shortDesc) {
		// 		this.errors.push('Short description required.');
		// 	} 
		// 	if (!this.product.price) {
		// 		this.errors.push('Price required.');
		// 	} 
		// 	if (!this.product._id) {
		// 		this.errors.push('Serial required.');
		// 	} 
		// 	if (!this.errors.length) {
		// 		return true;
		// 	}

		// 	return false;
		// },

		addProduct() {
			console.log(this.product);

			this.$store.dispatch('addNewProduct', this.product);
			this.product = this.productDefinition();
		},
	}

}
</script>

<style lang="scss" scoped>
	h2 {
		margin: $space $main_margin $space/4;
		text-align: left;
	}

	.sub-header {
		margin: 0 $main_margin $space;
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
		flex-wrap: wrap;
		justify-content: space-around;
		align-items: stretch;
		padding: $space/2;

		button {
			margin: $space/2 0 $space/4;
			border-radius: 5px;
		}
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
		display: grid;
		grid-template-columns: repeat(3, 1fr);
		grid-auto-rows: minmax(500px, auto);
		gap: 1.5rem;
		margin: 0 $main_margin $space;

		.add-card-box {
			object-fit: cover;
			width: 100%;
			max-height: 100%;
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