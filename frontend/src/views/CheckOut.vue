<template>
  <div>
        <main-header>
            <template v-slot:nav>
                <go-back-nav msg="Go back"/>
                    </template>
        </main-header>
            
            <div class="main">
            
                    <div class="left">
                    <h2>COMPLETE YOUR PURCHASE</h2>
                        <div class="order-summary">
                        
                            <div class="delivery-details">
                            <h2 class="details-title">DELIVERY DETAILS</h2>
                            
                            <div class="deliverydetails-container">
                            <form class="register-form" @submit.prevent="onSubmit">
                                <ul>
                                    <label class="firstname required">First Name</label><br>
                                    <input v-model="firstName" type="firstname" class="input-field" name="firstname" id="firstname" required>
                                    <br>
                                    <label class="email required">Email Adress</label><br>
                                    <input v-model="eMail"  name="email" class="input-field" id="email" required>
                                    <br>
                                    <br>
                                    <br>
                                    <label class="c/o">C/O</label><br>
                                    <input v-model="co"  name="c/o" class="input-field" id="c/o" >
                                    <br>
                                    <label class="postalcode required">Postal Code</label><br>
                                    <input v-model="postalCode"  name="postalcode" class="input-field" id="postalcode" required>
                                    <br>
                                    <label class="lastname required">Last Name</label><br>
                                    <input v-model="lastName"  name="lastname" class="input-field" id="lastname" required>
                                    <br>
                                    <label class="phone">Phone Number</label><br>
                                    <input v-model="phoneNumber" name="phone" class="input-field" id="phone" >
                                    <br>
                                    <br>
                                    <br>
                                    <label class="adress required">Adress</label><br>
                                    <input v-model="yourAdress"  name="adress" class="input-field" id="adress" required>
                                    <br>
                                    <label class="city required">City</label><br>
                                    <input v-model="yourCity"  name="city" class="input-field" id="city" required>
                                </ul>        
                                    
                            </form>
                        </div>

                        <div class="payment-method">
                            <h2>CHOOSE PAYMENT METHODS</h2>
                                <ul class="payment-options">
                                   
                                
                                    <br>
                                </ul>
                            </div>
                            <div class="totsl">Total: {{ totalAmount }} kr</div>
                            <button type="submit"><img src="../assets/icons/BUYNOW.svg"></button>	
                    
                        </div>

                    <div class="right">
                        
                        <div class="order-container">
                        <h2>YOUR ORDER</h2>
                        <h2 v-if="cart.length <= 0" class="empty">Your shopping bag is empty</h2>
                            <h2 v-else> 
                                <p>Subtotal {{totalAmount}}</p>
                                <p>Delivery 49kr</p>
                                <br>
                                
                            </h2>
                            <div class="total-order"><strong>Total    {{ totalAmount }} kr</strong></div>
                            <br>
                        
                            <br>
                                <li v-for="(product, i) in cart" :key="i" class="item-summary">
                                    <p>Details</p>
                                    <div class="product-image"> 
                                        <img :src="`/products/${product.imgFile}`" width="50px" alt="Product image">
                                    </div>
                                                                    
                                    <div class="product-information">
                                    <strong>{{product.title}}</strong>
                                    <br>
                                    Type: {{product.category}} 
                                    <br>
                                    Price: {{product.price}} kr
                                    </div>
                                </li>
                                <br>
                            
                        
                        </div>
                        

                    </div>
                    
                    </div>
                </div>
                    <!-- <button><img src="../assets/icons/BUYNOW.svg"></button> -->
                </div>
    </div>
</template>

<script>
import GoBackNav from '../components/GoBackNav.vue';
import MainHeader from '../components/MainHeader.vue';


export default {
    
	components: { 
		MainHeader,
		GoBackNav,
        
	},

    data: function(){

        return {
            firstName: '',
            lastName: '',
            co: '',
            eMail: '',
            phoneNumber: '',
            yourAdress: '',
            postalCode: '',
            yourCity: ''
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

            this.firstName,
            this.lastName,
            this.co,
            this.eMail,
            this.phoneNumber,
            this.yourAdress,
            this.postalCode,
            this.yourCity
           
        }
    }
}
        


</script>

<style lang="scss" scoped>
.main{
  display: flex;
  flex-direction: row;
  width: 1200px;
  padding-top: 200px;;
  margin-left: auto;
  margin-right: auto;
  margin-bottom: 60px;
  

}

.register-form{

   text-align: left;
}
.input-field {
    width: 280px;
    height: 45px;
    margin-bottom: 20px;
}
.order-summary{
    display: flex;
    padding: 30px;
    justify-content: center;
    
}
.details-title{
    
    font-size: 20px;
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


.order-container {
   margin-top: 30px;
    display: flex;
    flex-direction:column;
    padding-right:30px;
    width: 300px;
    height: 774px;
    background-color: #F5F4F0;
    border-color: black;
    overflow: auto;
    text-align: left;
    border-color: black;
    border-style: solid;
    border-width: 0.5px;
    margin-right: 40px;
    
}
.empty {
    font-size: 14px;
}

.payment-options {
    display: flex;
    flex-direction: column;
    margin-left: 30px;
    margin-right: auto;
    margin-top:30px;

}
.payment-method {
    text-align: left;
    padding-left: 50px;
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
</style>