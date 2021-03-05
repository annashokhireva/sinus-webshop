<template>
<div>
    <main-header>
        <template v-slot:nav>
            <go-back-nav msg="Go back"/>
        </template>     
    </main-header>

    <div class="main">
        <h2>COMPLETE YOUR PURCHASE</h2>
        <div class="order-container"> 

        <order-form
            @placeOrder="placeOrder(cart)"
        />

        <OrderCartitems :cart="cart"/>
        
        </div>
    </div>
</div>
</template>


<script>
import GoBackNav from '../components/GoBackNav.vue';
import MainHeader from '../components/MainHeader.vue';
import OrderForm from '../components/OrderForm';
import OrderCartitems from '../components/OrderCartitems';



export default {
    name: 'Checkout',
    
	components: { 
		MainHeader,
		GoBackNav,
        OrderForm,
        OrderCartitems
        
    },
    
    
    // data: function(){
        
    //     return {
    //         user:{
    //         lastname: '',
    //         firstname: '',

    //         address: {
    //             street: '',
    //             zip: '',
    //             city: '',
    //         },

    //             contact: {
    //                 email:'',
    //                 phone: '',
    //             }
    //         }
    //     }
    
    // },

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
        placeOrder(){
            this.$store.dispatch('sendOrder', {items: this.cart.map(item => item._id)});
        },
       
    },
   
}
        


</script>

<style lang="scss" scoped>
// .check-out {
//     display: flex;
//     flex-direction: column;
//     justify-content: space-between;
//     align-items: center;
// }
.main {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    
    .order-container {
    width: 100%;
    max-width: 800px;
    display: flex;
    justify-content: space-between;
    align-items: stretch;
    margin: $space 0;
}
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

</style>