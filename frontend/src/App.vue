<template>
	<div id="app">
		<router-view />
		<base-modal />
		<main-footer />
	</div>
</template>

<script>
import BaseModal from './components/modals/BaseModal.vue';
import MainFooter from './components/MainFooter.vue';

export default {
	components: { 
		MainFooter,
BaseModal,
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
