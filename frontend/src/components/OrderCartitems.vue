<template>
<main>
  <div class="order-container">
       <div class="text-order">
        <h2>YOUR ORDER</h2>
            <h2 v-if="cart.length <= 0" class="empty">Your shopping bag is empty</h2>
            <h2 v-else> 
                <p>Subtotal {{totalAmount}}</p>
                <p>Delivery 49kr</p>
                <br>
            </h2>
                <div class="total-order"><strong>Total    {{ totalAmount }} kr</strong></div>

        </div>
        <div class="each-item">
        
            <li v-for="(product, i) in cart" :key="i" class="item-summary">
                

                <div class="product-image"> 
                    <img :src="`/products/${product.imgFile}`" width="70px" alt="Product image">
                </div>                                         
                <div class="product-information">
                    <strong>{{product.title}}</strong>
                    <br>
                    Type: {{product.category}} 
                    <br>
                    Price: {{product.price}} kr
                </div>
                         
            </li>
        </div>
             
    </div>
</main>
</template>

<script>
export default {
  

    computed: {
		cart() {
			return this.$store.getters.cart;
		},

		cartCount() {
			return this.cart.length;
		},

		totalAmount () {
			return this.$store.getters.total
		},

        
		
	},
    
    methods: {
       
    }
}
    
</script>

<style lang="scss" scoped>
.main {
    display: flex;
    flex-direction: column;
    
}
.order-container {
    padding: 10px;
    display: flex;
    flex-direction:column;
    padding-right:30px;
    width: 300px;
    height: 100%;
    background-color: #F5F4F0;
    border-color: black;
    overflow: scroll;
    text-align: left;
    border-color: black;
    border-style: solid;
    border-width: 0.5px;
}

.text-order{
    margin-top: 10px;
}
.empty {
    font-size: 14px;
}


.item-summary {
display: flex;
flex-direction: row;
padding-bottom: 30px;
padding-left: 20px;
justify-content: center;
}
.product-image{
    display: flex;
    flex-direction: row;
    padding-right: 20px;
}
.product-information{
    padding-left: 30px;
    direction: flex;
    flex-direction: row;
}
.each-items {
    display: flex;
    flex-direction: row;
}
button {
    width: 370px;
    height: 47px;
    margin-top: 10px;
    margin-bottom: 30px;
    background-color: black;
    color: white;
    cursor: pointer;
  }
  .total-order{
      padding-bottom: 10px;
  }
</style>