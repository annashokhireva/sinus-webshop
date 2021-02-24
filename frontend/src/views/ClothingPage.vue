<template>
	<div>
		<main-header>
			<template v-slot:nav>
				<main-nav/>
			</template>
		</main-header>
		<div class="main">
			<h1>This is a CLOTHING page</h1>
		</div>
	</div>
</template>

<script>
import MainHeader from '../components/MainHeader';
import MainNav from '../components/MainNav.vue';

export default {
	components: {
		MainHeader,
		MainNav
	}
}
</script>