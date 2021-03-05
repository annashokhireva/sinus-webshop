<template>
	<nav>
		<div class="social-media">
			<img src="../assets/icons/facebook.svg" alt="Facebook">
			<img src="../assets/icons/instagram.svg" alt="Instagram">
			<img src="../assets/icons/youtube.svg" alt="YouTube">
		</div>

		<div class="options">

			<div class="menu">
				<router-link to="/stores"><p class="medium">Stores</p></router-link>
				<router-link to="/contact"><p class="medium">Contact</p></router-link>
				<router-link to="/newsletter"><p class="medium">Newsletter</p></router-link>
			</div>

			<div class="log-in" @click.stop="showModal('LoginModal')">
				<div class="option">

					<div class="account" v-if="visible" @click.stop="toggleDropdown">
						<img src="../assets/icons/avatar.svg" alt="Avatar icon" >
						<p v-if="admin" class="medium">Admin</p>
						<p v-else class="medium">My account</p>
						
						<span v-if="showDropdown">
							<img src="../assets/icons/polygon_up.svg" alt="arrow up">
						</span>
						<span v-else> 
							<img src="../assets/icons/polygon_down.svg" alt="arrow down">
						</span>
					</div>
					
					<div class="account" v-else>
						<img src="../assets/icons/avatar.svg" alt="Avatar icon" >
						<p class="medium">Log in </p>
					</div>
					
				</div>
			</div>

			<div v-if="showDropdown" class="account-options">
				<ul>
					<!-- <li>
						<p><b>Admin</b></p>
					</li> -->
					<li>
						<router-link to="/profile"><p>My Account</p></router-link>
					</li>
					<li v-if="admin">
						<router-link to="/admin-products">
							<p><b>Admin Products</b></p> 
						</router-link>
					</li>
					<li>
						<router-link to="/orders">
							<p>Orders</p> 
						</router-link>
					</li>
					<!-- <li v-for="(link, index) in links" :key="index">
						<router-link :to="{name: link.page}">
							<p>{{ link.name }}</p>
						</router-link>
					</li> -->
					<li>
						<p @click.stop="logOut"><i>Log out</i></p>
					</li>
				</ul>
			</div>
		</div>
	</nav>
</template>

<script>

import { mapMutations, mapState } from 'vuex';

export default {

	data() {
		return {
			showDropdown: false,

			links: [
				{
					name: 'Admin Products',
					page: 'AdminProducts'       
				},
				{
					name: 'Orders',
					page: 'Orders'       
				}
			]
		}
	},

	// props: {
	// 	logedIn: {
	// 		type: Boolean,
	// 		default: false
	// 	}
	// },

	computed: {
		...mapState({
			visible: 'logedIn',
			admin: 'isAdmin'
		}),
	},

	methods: {
		...mapMutations([
			'showModal'
		]),

		toggleDropdown() {
			return this.showDropdown = !this.showDropdown;
		},

		logOut() {
			this.$store.commit('logOut');
			this.showDropdown = false;
			this.$store.commit('clearLocalstorage');
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

		img {
			cursor: pointer;
		}
	}

	.options {
		display: flex;
		justify-content: space-between;
		align-items: center;
		width: 45%;

		.option {
			display: flex;
			justify-content: space-evenly;
			align-items: center;
		}

		.menu {
			display: flex;
			justify-content: space-between;
			align-items: center;
			width: 60%;

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
			justify-content: flex-end;
			align-items: center;
			width: 130px;
			cursor: pointer;
			position: relative;
			
			p {
				margin-left: $space/4;
			}
		}

		.account {
			display: flex;
			justify-content: space-between;
			align-items: center;
		}

		.account-options {
			position: absolute;
			top: $top_nav_height;
			right: $main_margin;
			min-width: 130px;
			height: fit-content;
			background-color: white;
			border: none;
			box-shadow: 0px 5px 5px rgba(99, 99, 99, 0.247);
			display: flex;
			flex-direction: column;
			justify-content: space-between;
			align-items: flex-end;
			z-index: 2;

			ul {
				list-style: none;
				padding: 0 $space/4 $space/4;
				text-align: right;
				
				a {
					text-decoration: none;
					color: $black;
				}

				li {
					margin: 20px 0;
					cursor: pointer;
				}
			}
		}
	}
</style>