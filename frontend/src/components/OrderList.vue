<template>
  <div>
    <div class="order-cart">
      <ul v-for="(order, i) in orders" :key="i" class="order-list">
        <li v-for="(item, z) in order.items" :key="z" class="order-item">
          <img
            :src="`/products/${item.imgFile}`"
            width="70px"
            alt="Product image"
            class="order-img"
          />
          <strong class="order-title">{{ item.title }} </strong>
<br>
           <strong class="order-price">{{ item.price }} kr</strong>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  computed: {
    orders() {
      return this.$store.getters.orders;
    },
  },

  mounted() {
    this.$store.dispatch("getOrders");
  },
};
</script>

<style>
.order-list{
	/* display: inline; */
	display: flex;
	list-style-type: none;
}
.order-item{
	width: 200px;
	max-height: 100%;
	align-items: center;
}
.order-title{
	display: inline;
	font-size: 32px;
}
.order-img {
  background-color: $bkg_gray;
  width: 200px;
  display: flex; 
  object-fit: scale-down;
}
.order-price{
	font-size: 18px;
}
</style>