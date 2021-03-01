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
        <div v-for="product in filteredProducts" :key="product._id">
          <h4>{{ product.title }}</h4>
          <p>{{ product._id }}</p>
          <img :src="`../assets/products/${product.imgFile}`" :alt="product.title">
        </div>
    </div>
</div>
</template>

<script>
import { mapActions, mapState } from "vuex";
import MainHeader from "../components/MainHeader";
import MainNav from "../components/MainNav";


export default {
  components: {
    MainHeader,
    MainNav,
 },

 data () {
   return {
     filters: {
       category: '',
       sort: '',
       search: ''
     },
     categories: [
       'board',
       'wheel'
     ]
   }
 },

 mounted() {
   this.getProducts();

   setTimeout(() => {

     this.$set(this.filters, 'sort', 'lower price')
   }, 1000)
 },

 computed: {
   ...mapState({
    products: state => state.products
   }),

   filteredProducts () {
     let products = this.products;

      if (this.filters.search.length) {
        products = products.filter(product => product.title.indexOf(this.filters.search) !== -1 );
     }

     if (this.filters.category.length) {
        products = products.filter(product => product.category === this.filters.category);
     }
     
     if (this.filters.sort.length) {
       switch (this.filters.sort) {
         case 'lower price': {
           products = products.sort((a, b) => {
             if (a.price > b.price) {
               return -1;
             }
             return 1;
           });
           break;
         }
       }
        
     }

     return products;
   }
 },

  methods: {
    ...mapActions(['getProducts']),

    goTo(path) {
      return this.$router.push(path);
    },

    onChangeCategory (category) {
      this.$set(this.filters, 'category', category);
    }
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
</style>