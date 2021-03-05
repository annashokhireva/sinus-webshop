<template>
	<div>
		<main-header>
			<template v-slot:nav>
				<main-nav/>
			</template>
		</main-header>

		<div class="main">
			<order-list />
		</div>
	</div>
</template>

<script>
import MainHeader from '../components/MainHeader.vue';
import MainNav from '../components/MainNav.vue';
import OrderList from '../components/OrderList.vue';

export default {
	components: {
		MainHeader,
		MainNav,
OrderList	
	},

}
</script>

<style lang="scss" scoped>

</style>