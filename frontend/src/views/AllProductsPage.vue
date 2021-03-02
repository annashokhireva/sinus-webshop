<template>
  <div>
    <main-header>
      <template v-slot:nav>
        <main-nav />
      </template>
    </main-header>
    <div class="mainAllproducts">
      <h1>This is an ALL PRODUCTS page</h1>
    </div>
    <div class="general-grid">
      <div class="greta-img">
        <img
          src="../assets/img/sinus-skateboard-gretasfury 1.png"
          alt="Greta"
        />
      </div>
      <div class="text-general-grid">
        <h1>Don’t blink!</h1>
        <br />
        <h3>Greta’s fury board <span>Limited Edition</span></h3>
        <br />
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut placerat
          faucibus odio. Duis fringilla libero est, vel lacinia felis feugiat
          ut. Etiam odio metus, ultrices eu ullamcorper ac, molestie in libero.
        </p>
        <button class="buy-now" @click="goTo('/skateboards')">
          Buy Now
          <img class="icon" src="../assets/icons/arrow_right.svg" alt="arrow" />
        </button>
      </div>
    </div>
    <div>
      <h2>All products</h2>
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

    onChangeCategory(category) {
      this.$set(this.filters, "category", category);
    },
  },
};
</script>

<style lang="scss" scoped>
.general-grid {
  margin: 10% 10% 10% 20%;
  display: flex;
  align-self: left;
}
.text-general-grid {
  padding: 100px;
  text-align: left;
}

h3 {
  text-decoration: underline;
}

h3 span {
  color: red;
  text-decoration: underline;
  text-decoration-color: red;
}

.buy-now {
  text-decoration: underline;
  border: none;
  padding: 15px 15px;
  font-size: 16px;
  text-align: center;
  padding-bottom: 15px;
  background-color: white;
  text-align: center;
  // .icon {
  // padding: 0px;
  // }
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