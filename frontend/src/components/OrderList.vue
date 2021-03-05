<template>
	<div>
		<ul v-for="(order, i) in orders" :key="i">
			<li v-for="(item, z) in order.items" :key="z">
			<img :src="`/products/${item.imgFile}`" width="70px" alt="Product image">
				<strong>{{ item.title }} </strong>

				{{ item.price }} kr
				
			</li>
		</ul>
	</div>
</template>

<script>
export default {
	computed: {
		orders() {
			return this.$store.getters.orders;
		}
	},

	mounted() {
		this.$store.dispatch("getOrders");
	}
}
</script>

<style>

</style>