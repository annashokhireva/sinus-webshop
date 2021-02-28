<template>
	<div>
		<div class="list">
			<ul>
				<li v-for="(items, i) in cart" :key="i"></li>
			</ul>
		</div>
		<div>{{ cartCount }}</div>
		<div class="totsl">{{ totalAmount }} kr</div>
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