<template>
	<div>
		<div class="list">
			<ul>
				<li v-for="(item, i) in cart" :key="i">
					<img :src="`/products/${item.imgFile}`" width="50px" alt="Product image">
					<h5>{{ item.title }}</h5>
					<p>{{ item.shortDesc }}</p>
					<p>{{ item.price }} kr</p>
				</li>
			</ul>
		</div><br>
		<div>Items in shopping cart:{{ cartCount }}</div>
		<div class="totsl">Total: {{ totalAmount }} kr</div>
	</div>
</template>

<script>
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
		}
	}
}
</script>

<style>

</style>