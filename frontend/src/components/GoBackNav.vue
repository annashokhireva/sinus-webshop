<template>
	<nav>
		<div class="go-back" @click="goBack">
			<img src="../assets/icons/arrow_left.svg" alt="Arrow left">
			{{msg}}
		</div>
		<router-link to="/" class="logo">
			<img class="logo" src="../assets/sinus-logo.svg" width="182px" alt="Sinus Logo">
		</router-link>
	</nav>
</template>

<script>
export default {
	props: {
		msg: String
	},

	methods: {
		goBack() {
			return this.$router.go(-1);
		}
	}

}
</script>

<style lang="scss" scoped>
	nav {
		display: flex;
		justify-content: flex-start;
		align-items: center;
		height: $nav_slot_height;
		padding: 0 $main_margin;
	}

	.go-back {
		margin-right: -$main_margin;
		display: flex;
		justify-content: flex-start;
		align-items: center;
		cursor: pointer;
	}

	.logo {
		margin: auto;
	}
</style>