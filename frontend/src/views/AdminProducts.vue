<template>
	<div>
		<main-header>
			<template v-slot:nav>
				<main-nav/>
			</template>
		</main-header>

		<div class="main"></div>
	</div>
</template>

<script>
import MainHeader from '../components/MainHeader.vue';
import MainNav from '../components/MainNav.vue';

export default {
	components: {
		MainHeader,
		MainNav	
	},

}
</script>

<style lang="scss" scoped>

</style>