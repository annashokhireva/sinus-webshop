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
    <!-- <FilterCategory /> -->
    ALL PRODUCT LIST
  </div>
</template>

<script>
import MainHeader from "../components/MainHeader";
import MainNav from "../components/MainNav.vue";

export default {
  components: {
    MainHeader,
    MainNav,
  },
};
</script>

<style lang="scss" scoped>
.clothing-grid {
  margin: 10% 10% 10% 20%;
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
</style>