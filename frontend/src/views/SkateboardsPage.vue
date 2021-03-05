<template>
  <div>
    <main-header>
      <template v-slot:nav>
        <main-nav />
      </template>
    </main-header>

    <div class="mainSkatebords">
      <h1>This is an Skateboards page</h1>
    </div>

    <div class="skateboard-grid">
      <div class="mikolaj-img">
        <img
          src="../assets/img/mikolaj-felinski-RH_QLQGu0ts-unsplash 1.png"
          alt="Mikolaj"
        />
      </div>
      <div class="text-general-grid">
        <h1>Skateboards</h1>
        <br />
        <h3>Made with extremely hard Canadian maple wood</h3>
        <br />
        <p>
          Maecenas eget erat interdum, auctor magna nec, pretium nibh.
          Pellentesque eu aliquet augue. Donec consequat nisl nulla, nec
          malesuada sem laoreet quis. Sed leo urna, sagittis eget magna sed,
          <br />
          <br />
          Suspendisse porta felis eu turpis varius, quis ultrices ante accumsan.
          Integer consectetur tempor nulla quis pellentesque.
        </p>
      </div>
    </div>
    <div class="category-name">
      <h3>Skateboards</h3>
    </div>
    <div>
      <FilteredProducts
      :config="filterConfig"
        :products="localProducts"
        @filtering-products="setNewProducts"
      />

      <div class="product-cards">
        <product-card
          v-for="(product, i) in filteredProducts"
          :key="i"
          :img="product.imgFile"
          :title="product.title"
          :desc="product.shortDesc"
          :price="product.price"
          @showModal="showModal('ProductModal', product._id)"
          @addToCart="addToCart(product)"
          :id="product._id"
        />
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions, mapState, mapMutations } from "vuex";
import MainHeader from "../components/MainHeader";
import MainNav from "../components/MainNav.vue";
import ProductCard from "../components/ProductCard";
import FilteredProducts from "../components/FilterProduct";

export default {
  components: {
    MainHeader,
    MainNav,
    ProductCard,
    FilteredProducts,
  },

  props: {
    product: Object,
  },

  data() {
    return {
      localProducts: [],
      localFilteredProducts: [],
      filterConfig: {
        category: false,
        sort: true,
        search: true,
      },

    };
  },

  async mounted() {
    await this.getProducts();
    this.localProducts = this.products.filter((product) => product.category === "board");
    this.localFilteredProducts = [...this.localProducts];
  },

  computed: {
    ...mapState({
      products: (state) => state.products,
    }),

    filteredProducts() {
      return this.localFilteredProducts;
    },
  },

  methods: {
    ...mapActions(["getProducts"]),

    ...mapMutations(["showModal"]),

    setNewProducts(arrayProducts) {
      this.localFilteredProducts = [...arrayProducts];
    },

    goTo(path) {
      return this.$router.push(path);
    },

    addToCart(id) {
      this.$store.dispatch("addToCart", id);
    },

    showModal(id) {
      // const index = this.$store.getters.products(this.product._id);
      this.$store.commit("setActiveIndex", id);
      this.$store.commit("showModal", "ProductModal");
    },

    onChangeCategory(category) {
      this.$set(this.filters, "category", category);
    },
  },
};
</script>

<style lang="scss" scoped>
.skateboard-grid {
  margin: 10% 10% 2% 20%;
  display: flex;
  align-self: left;
}
.text-general-grid {
  padding: 2% 5% 5% 10%;
  text-align: left;
}
h1 {
  align-items: left;
}
h3 {
  text-decoration: underline;
}
.product-cards {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-template-rows: auto;
  grid-gap: 20px;
  width: auto;
  padding: 0 20px;
  // & /deep/ .product {
  // margin: 0;
  // min-width: 20%;
  // width: auto;
  // }
}
</style>