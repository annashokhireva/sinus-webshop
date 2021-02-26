<template>
	<footer>
		<div class="logos">
			<img src="../assets/sinus-logo.svg" width="182px" alt="Sinus logo">
				
			<div class="social-media">
				<img src="../assets/icons/facebook.svg" alt="Facebook">
				<img src="../assets/icons/instagram.svg" alt="Instagram">
				<img src="../assets/icons/youtube.svg" alt="YouTube">
			</div>
		</div>

		<div class="lists">
			<ul> 
				<h5>Help</h5>
				<li>Customer Service</li>
				<li>Membership</li>
				<li>Shipment</li>
				<li>Returns</li>
				<li>Payments</li>
				<li>Terms & conditions</li>
				<li>Policies & Cooies</li>
			</ul>

			<ul> 
				<h5>ABOUT SINUS</h5>
				<li>Contact</li>
				<li>Careers</li>
				<li>Stores</li>
				<li>Blog</li>
			</ul>
		</div>
	</footer>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>
	footer {
		background-color: $bkg_gray;
		height: 300px;
		display: flex;
		justify-content: space-between;
		align-items: flex-start;
		padding: $space $main_margin;

		.logos {
			height: 80%;
			display: flex;
			flex-direction: column;
			justify-content: space-between;
			align-items: center;

			.social-media {
				width: 70%;
				display: flex;
				justify-content: space-between;
				align-items: center;
			}
		}

		.lists {
			width: 50%;
			display: flex;
			justify-content: space-between;
		}

		ul {
			list-style: none;
			text-align: left;
		}
	}
</style>