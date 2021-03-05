<template>
	<div>
		<ul v-for="(order, i) in orders" :key="i">
			<li v-for="(item, z) in order.items" :key="z">
				{{ item.title }}
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