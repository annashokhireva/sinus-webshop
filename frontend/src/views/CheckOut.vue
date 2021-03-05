<template>
  <div>
   <main-header>
            <template v-slot:nav>
                <go-back-nav msg="Go back"/>
                    </template>     
        </main-header>
        <br>
        <br>
        <br>
        <br>
        <br>
        <br>
         <br>

                <div class="order-container"> 
                  <br>
                  
                   <br>
                    <br>
                     <br>

                   <div>
                    <h2>COMPLETE YOUR PURCHASE</h2>
                        <OrderForm />
                        
                        <br>
                        
                    </div>
                    
                    <div>
                        <OrderCartitems />
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

    data: function(){
        
        return {
            user:{
            lastname: '',
            firstname: '',

            address: {
                street: '',
                zip: '',
                city: '',
            },

                contact: {
                    email:'',
                    phone: '',
                }
            }
        }

        
    
    },

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
        onSubmit: function(){

        
            this.$store.dispatch('registerUser', this.user);
          
        },
       
    },
    getters: {

        
}
}
        


</script>

<style lang="scss" scoped>
.order-container {
  
    display: flex;
    flex-direction: row;
    justify-content: center;
    margin-top: 50px;
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