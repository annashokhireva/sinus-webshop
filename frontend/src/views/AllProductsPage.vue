<template>
  <div>
    <main-header>
      <template v-slot:nav>
        <main-nav />
      </template>
    </main-header>

    <div class="mainSkatebords">
      <h1>This is an All Products page</h1>
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
        <button class="buy-now" @click="showModal" >
          Buy Now
          <img class="icon" src="../assets/icons/arrow_right.svg" alt="arrow" />
        </button>
      </div>
    </div>
    <div class="category-name">
      <h1 class="category-name">All products</h1>
      <FilteredProducts
        :products="products"
        @filtering-products="setNewProducts"
      />

      <div class="product-cards">
        <product-card
          v-for="(product, i) in filteredProducts"
          :key="i"
          :product="product"
          :img="product.imgFile"
          :title="product.title"
          :desc="product.shortDesc"
          :price="product.price"
          @addToCart="addToCart(product)"
          :id="product._id"
        />
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions, mapState } from "vuex";
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
      adProduct: {
        _id: 'wafVodPl07dinNpy'
      }
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
    }
  },

  methods: {
    ...mapActions(["getProducts"]),

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

    showModal(id){
      id = this.adProduct._id;
      let product = this.$store.getters.productById(id)
      const index = this.$store.getters.products.indexOf(product)
			this.$store.commit('setActiveIndex', index);
			this.$store.commit('showModal', 'ProductModal');
		}
  }
};
</script>

<style lang="scss" scoped>

.general-grid {
  margin: 5% 10% 2% 20%;
  display: flex;
  align-self: left;
}
.text-general-grid {
  padding: 100px;
  text-align: left;
}
.category-name {
  align-self: center;
  padding-bottom: 20px;
}

h1{
  text-decoration: underline;
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