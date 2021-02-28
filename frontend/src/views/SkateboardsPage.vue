<template>
	<div>
		<main-header>
			<template v-slot:nav>
				<main-nav/>
			</template>
		</main-header>

    <div class="mainSkatebords">
      <h1>This is an Skateboards page</h1>
    </div>

    <div class="skateboard-grid">
      <div class="mikolaj-img">
        <img
          src="../assets/img/mikolaj-felinski-RH_QLQGu0ts-unsplash 1.png"
          alt="Greta"
        />
      </div>
      <div class="text-general-grid">
        <h1>Skateboards</h1>
        <br />
        <h3>Made with extremely hard Canadian maple wood</h3>
        <br />
        <p>
         Maecenas eget erat interdum, auctor magna nec, pretium nibh. Pellentesque eu aliquet augue. Donec consequat nisl nulla, nec malesuada sem laoreet quis. Sed leo urna, sagittis eget magna sed, <br>
         <br>
         Suspendisse porta felis eu turpis varius, quis ultrices ante accumsan. Integer consectetur tempor nulla quis pellentesque.
        </p>
      </div>
    </div>
    <div>
      <h3>Skateboards</h3>
    </div>
    <!-- <FilterCategory /> -->
    ALL PRODUCT LIST
	</div>

</template>

<script>
import MainHeader from '../components/MainHeader';
import MainNav from '../components/MainNav.vue';

export default {
	components: {
		MainHeader,
		MainNav,
	}
}
</script>

<style lang="scss" scoped>
.skateboard-grid {
  margin: 10% 10% 10% 20%;
  display: flex;
  align-self: left;
}
.text-general-grid {
  padding: 2% 5% 5% 10%;
  text-align: left;
}

h3 {
  text-decoration: underline;
}

</style>