<template>
	<div id="app">
		<router-view />
		<main-footer />
	</div>
</template>

<script>
import MainFooter from './components/MainFooter.vue'

export default {
	components: { 
		MainFooter
	},

	
}
</script>

<style lang="scss">
	#app {
		font-family: Avenir, Helvetica, Arial, sans-serif;
		-webkit-font-smoothing: antialiased;
		-moz-osx-font-smoothing: grayscale;
		text-align: center;
	}

</style>
