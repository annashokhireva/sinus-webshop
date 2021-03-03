<template>
  <div>
    <select v-model="filters.category" title="Category">
      Category
      <option value>All Products</option>
      <option v-for="(category, i) in categories" :key="i" :value="category">
        {{ category }}
      </option>
    </select>
    <select v-model="filters.sort">
       <option value>All Pice</option>
      <option
        v-for="(sortOption, i) in sortOptions"
        :key="i"
        :value="sortOption"
      >
        {{ sortOption }}
      </option>
    </select>
    <input v-model="filters.search" type="search" placeholder="Search" />
  </div>
</template>

<script>
export default {
  props: {
    products: {
      type: Array,
    },
  },

  data() {
    return {
      filters: {
        category: "",
        sort: "",
        search: "",
      },
      categories: ["board", "wheels", "clothes", "t-shirt", "caps"],
      sortOptions: ["lower price", "higher price"],
    };
  },
  watch: {
    filters: {
      deep: true,
      handler() {
        this.filteredProducts();
      },
    },
  },
  methods: {
    filteredProducts() {
      let products = this.products;
      if (this.filters.search.length) {
        products = products.filter(
          (product) => product.title.indexOf(this.filters.search) !== -1
        );
      }
      if (this.filters.category.length) {
        products = products.filter(
          (product) => product.category === this.filters.category
        );
      }
      if (this.filters.sort.length) {
        switch (this.filters.sort) {
          case "lower price": {
            products = products.sort((a, b) => {
              if (a.price < b.price) {
                return -1;
              }
              return 1;
            });
            break;
          }
          case "higher price": {
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
      this.$emit("filtering-products", products);
    },
  },
};
</script>