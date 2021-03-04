<template>
  
                      
        <div class="delivery-details">
            <h2 class="details-title">DELIVERY DETAILS</h2>
            <div class="deliverydetails-container">
                    <form class="OrderForm" @submit.prevent="onSubmit">
                <ul>
                        <label class="firstname required">First Name</label><br>
                        <input v-model="user.firstName" type="firstname" class="input-field" name="firstname" id="firstname" required>
                        <br>
                        <label class="email required">Email Adress</label><br>
                        <input v-model="user.email"  name="email" class="input-field" id="email" required>
                        <br>
                        <br>
                        <br>
                        <label class="c/o">C/O</label><br>
                        <input v-model="user.co"  name="c/o" class="input-field" id="c/o" >
                        <br>
                        <label class="postalcode required">Postal Code</label><br>
                        <input v-model="user.postalCode"  name="postalcode" class="input-field" id="postalcode" required>
                        <br>
                        <label class="lastname required">Last Name</label><br>
                        <input v-model="user.lastName"  name="lastname" class="input-field" id="lastname" required>
                        <br>
                        <label class="phone">Phone Number</label><br>
                        <input v-model="user.phoneNumber" name="phone" class="input-field" id="phone" >
                        <br>
                        <br>
                        <br>
                        <label class="adress required">Adress</label><br>
                        <input v-model="user.yourAdress"  name="adress" class="input-field" id="adress" required>
                        <br>
                        <label class="city required">City</label><br>
                        <input v-model="user.yourCity"  name="city" class="input-field" id="city" required>
                </ul>        
                        <div class="totsl">Total: {{ totalAmount }} kr</div>
                            <!-- <button type="submit"><img src="../assets/icons/BUYNOW.svg"></button>	-->
            <button type="order" class="btn-buy" @click="onSubmit">BUY NOW</button>
            </form>
        </div>
    </div>
                    
   
            
  


</template>

<script>



export default {
    name: 'Checkout',
    
	components: { 
		
        
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
        unSubmitted: function(){

        }
    }
}
        


</script>

<style lang="scss" scoped>


.register-form{

   text-align: left;
}
.input-field {
    width: 280px;
    height: 45px;
    margin-bottom: 20px;
}




.deliverydetails-container {
  margin: 70px;  
}

div label.required:after
{
    color: red;
    content: " *";
}
ul{
    list-style-type: disc;
    -webkit-columns: 2;
    -moz-columns: 2;
    columns: 2;
    list-style-position: inside;
    
}

.item-summary {
display: flex;
flex-direction: row;
padding-bottom: 30px;
padding-left: 20px;
justify-content: center;
}
.product-information{
    padding-left: 30px;;
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