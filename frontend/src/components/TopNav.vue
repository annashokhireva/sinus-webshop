<template>
	<nav>
		<div class="social-media">
			<img src="../assets/icons/facebook.svg" alt="Facebook">
			<img src="../assets/icons/instagram.svg" alt="Instagram">
			<img src="../assets/icons/youtube.svg" alt="YouTube">
		</div>

		<div class="options">

			<div class="globe">
				<img src="../assets/icons/earth.svg" alt="Earth icon">
				<span class="option">
					<p class="medium">SE </p>
					<span v-if="countryClosed">
						<img src="../assets/icons/polygon_down.svg" alt="arrow down">
					</span>
					<span v-else>
						<img src="../assets/icons/polygon_up.svg" alt="arrow up"/>
					</span> 
				</span> |
				<span class="option">
					<p class="medium">EN </p>
					<span v-if="languageClosed">
						<img src="../assets/icons/polygon_down.svg" alt="arrow down">
					</span>
					<span v-else> 
						<img src="../assets/icons/polygon_up.svg" alt="arrow up">
					</span>
				</span>
			</div>

			<div class="menu">
				<router-link to="/stores"><p class="medium">Stores</p></router-link>
				<router-link to="/contact"><p class="medium">Contact</p></router-link>
				<router-link to="newsletter"><p class="medium">Newsletter</p></router-link>
			</div>

			<div class="log-in">
				<img src="../assets/icons/avatar.svg" alt="Avatar icon">
				<span class="option">
					<p class="medium">Log in </p>
					<span v-if="loginClosed">
						<img src="../assets/icons/polygon_down.svg" alt="arrow down">
					</span>
					<span v-else> 
						<img src="../assets/icons/polygon_up.svg" alt="arrow up">
					</span>
				</span>
			</div>
		</div>
	</nav>
</template>

<script>
export default {
	data() {
		return {
			countryClosed: true,
			languageClosed: true,
			loginClosed: true,
		}
	}
}
</script>

<style lang="scss" scoped>
	nav {
		display: flex;
		justify-content: space-between;
		align-items: center;
		background-color: $bkg_gray;
		padding: 5px $main_margin;
	}

	.social-media {
		display: flex;
		justify-content: space-between;
		align-items: center;
		width: 136px;
		margin-left: 20px;
	}

	.options {
		display: flex;
		justify-content: space-between;
		align-items: center;
		width: 55%;

		.globe {
			display: flex;
			justify-content: space-between;
			align-items: center;
		}

		.option {
			display: flex;
			justify-content: space-evenly;
			align-items: center;
			margin: 0 5%;
		}

		.menu {
			display: flex;
			justify-content: space-between;
			align-items: center;
			width: 50%;

			a {
				color: $black;
				text-decoration: none;

				&.router-link-exact-active {
				text-decoration: underline;
				}
			}
		}

		.log-in {
			display: flex;
			justify-content: space-between;
			align-items: center;
			width: 85px;
			
			p {
				margin: 0;
			}
		}
	}
</style>