<template>
  <div>
    <main-header>
      <template v-slot:nav>
        <main-nav />
      </template>
    </main-header>
    <div class="mainSale">
      <div class="text-general-grid">
        <h1>SALE</h1>
      </div>
    </div>
    <div>
      <h2>All products</h2>
    </div>
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
.text-general-grid {
  padding: 100px;
  text-align: center;
  color: $red_text;
  font-size: 64px;
}
h1 {
	margin-top: 10%;
}
</style>