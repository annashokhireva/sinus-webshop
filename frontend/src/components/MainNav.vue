<template>
	<nav>
		<router-link to="/">
			<img class="logo" src="../assets/sinus-logo.svg" width="182px" alt="Sinus Logo">
		</router-link>
		<div class="menu">
			<router-link to="/all-products"><h5>All products</h5></router-link>
			<router-link to="/skateboards"><h5>Skateboards</h5></router-link>
			<router-link to="/clothing"><h5>Clothing</h5></router-link>
			<router-link to="/sale"><h5>Sale</h5></router-link>
		</div>
		<div class="icons">
			<img src="../assets/icons/search.svg" alt="Search glass">
			<img src="../assets/icons/shopping-cart.svg" alt="Shopping cart">
		</div>
	</nav>
</template>

<script>
export default {
	
}
</script>

<style lang="scss" scoped>
	nav {
		display: flex;
		justify-content: space-between;
		align-items: center;
		padding: 20px $main_margin;
		background-color: white;
		height: $nav_slot_height;
	}

	.menu {
		display: flex;
		justify-content: space-between;
		align-items: center;
		margin: 0;
		width: 60%;

		a {
			color: $black;
			text-decoration: none;

			&.router-link-exact-active {
			text-decoration: underline;
			}
		}
	}

	.icons {
		display: flex;
		justify-content: space-between;
		align-items: center;
		width: 10%;
	}

	
</style>