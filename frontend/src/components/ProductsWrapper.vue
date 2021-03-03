<template>
	<div class="products-wrapper">
		<ul>
			<li>
				</>
			</li>
		</ul>
	</div>
</template>

<script>
import ProductsItem from "../components/ProductsItem";
// import { mapActions, mapState } from "vuex";

export default {
components: {
	ProductsItem,
	// mapActions,
	// mapState
}
	

}
</script>

<style scoped>
.products-wrapper{
	display: flex;
	justify-content: center;
	align-items: center;
	max-width: 900px;
	margin: 0 auto;
}
</style>