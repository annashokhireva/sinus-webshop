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
    </div>
    <!-- <FilterCategory /> -->
    ALL PRODUCT LIST

  </div>
</template>

<script>
import MainHeader from "../components/MainHeader";
import MainNav from "../components/MainNav";
// import FilterCategory from "@/components/FilterCategory";

export default {
  components: {
    MainHeader,
    MainNav,
 },

  methods: {
    goTo(path) {
      return this.$router.push(path);
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
</style>