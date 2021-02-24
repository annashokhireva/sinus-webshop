<template>
	<div>
		<main-header>
			<template v-slot:nav>
				<main-nav />
			</template>
		</main-header>
		<div class="main">
			<img alt="Vue logo" src="../assets/sinus-logo.svg">
		</div>
	</div>
</template>

<script>
import MainHeader from '../components/MainHeader.vue'
import MainNav from '../components/MainNav.vue'

export default {
	components: { 
		MainHeader,
		MainNav 
	},
}
</script>
