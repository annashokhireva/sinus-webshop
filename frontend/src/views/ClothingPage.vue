<template>
  <div>
    <main-header>
      <template v-slot:nav>
        <main-nav />
      </template>
    </main-header>
    <div class="mainClothing">
      <h1>This is an Skateboards page</h1>
    </div>

    <div class="clothing-grid">
      <div class="hoodie-green">
        <img
          src="../assets/img/hoodie-green 1.png"
          alt="Greta"
        />
      </div>
      <div class="text-general-grid">
        <h1>Sinus wear</h1>
        <br />
        <h3>produces from <span>recycled cotton yarn</span></h3>
        <br />
        <p>
          Available in stores and online
          <br />
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut placerat faucibus odio. Duis fringilla libero est, vel lacinia felis feugiat ut. Etiam odio metus, ultrices eu ullamcorper ac, molestie in libero.
        </p>
      </div>
    </div>
    <div>
      <h3>Clothing</h3>
    </div>
    <div>
        <FilteredProducts
        :products="products"
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
import MainNav from "../components/MainNav";
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
    };
  },

  async mounted() {
    await this.getProducts();
    this.localProducts = this.products;
  },

  computed: {
    ...mapState({
      products: (state) => state.products,
    }),

    filteredProducts() {
      return this.localProducts;
    },
  },

  methods: {
    ...mapActions(["getProducts"]),

    ...mapMutations(["showModal"]),

    setNewProducts(arrayProducts) {
      this.localProducts = [...arrayProducts];
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
.clothing-grid {
  margin: 10% 10% 2% 20%;
  display: flex;
  align-self: left;
}
.text-general-grid {
  padding: 0% 0% 0% 10%;
  text-align: left;
}

h3 {
  text-decoration: underline;
}

h3 span {
  color: #22703A;
  text-decoration: underline;
  text-decoration-color: #22703A;
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