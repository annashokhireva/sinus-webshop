<template>
	<div>
		<main-header>
			<template v-slot:nav>
				<go-back-nav msg="Go back"/>
			</template>
		</main-header>
		<div class="main">
			<h1>This is page is currently under cosnstruction</h1>
		</div>		
	</div>
</template>

<script>
import GoBackNav from '../components/GoBackNav.vue';
import MainHeader from '../components/MainHeader.vue';

export default {
	components: { 
		MainHeader,
		GoBackNav 
	}
}
</script>