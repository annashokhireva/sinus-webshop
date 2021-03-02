<template>
	<div>
		<main-header>
			<template v-slot:nav>
				<go-back-nav msg="Go back"/>
			</template>
		</main-header>
		<div class="main">
			<h1>COMPLETE YOUR PURCHASE</h1>
		
        <div class="order-summary">
            <div class="delivery-details">
            <h2 class="details-title">DELIVERY DETAILS</h2>
          
            <div class="deliverydetails-container">
            <form class="register-form" @submit.prevent="onSubmit">
                <div class="container">
                        <ul>
                            <label class="firstname required">First Name</label><br>
                            <input v-model="firstName" type="firstname" name="firstname" id="firstname" required>
                            <br>
                            <label class="email required">Email Adress</label><br>
                            <input v-model="eMail"  name="email" id="email" required>
                            <br>
                            <label class="c/o">C/O</label><br>
                            <input v-model="co"  name="c/o" id="c/o" >
                            <br>
                            <label class="postalcode required">Postal Code</label><br>
                            <input v-model="postalCode"  name="postalcode" id="postalcode" required>
                            <br>
                            <label class="lastname required">Last Name</label><br>
                            <input v-model="lastName"  name="lastname" id="lastname" required>
                            <br>
                            <label class="phone">Phone Number</label><br>
                            <input v-model="phoneNumber" name="phone" id="phone" >
                            <br>
                            <label class="adress required">Adress</label><br>
                            <input v-model="yourAdress"  name="adress" id="adress" required>
                            <br>
                            <label class="city required">City</label><br>
                            <input v-model="yourCity"  name="city" id="city" required>
                        </ul>        
                </div>
             </form>
              </div>

            <div class="payment-method">
                <h2>CHOOSE PAYMENT METHODS</h2>
                    <ul class="payment-options">
                        
                        
                    </ul>
                </div>
            </div>

            <div class="your-order">
             <div class="order-container">
                    <h2>YOUR ORDER</h2>
                        <ul>
                            <li v-for="(product, i) in cart" :key="i">
                                {{product.imgFile}}
                                <strong>{{product.title}}</strong>
                                {{product.category}}
                                <br>
                                {{product.price}}
                            </li>
                        </ul>
                </div>
            </div>

        </div>
    </div>
    <div class="totsl">Total: {{ totalAmount }} kr</div>
    <button type="submit"><img src="../assets/icons/BUYNOW.svg"></button>	
        <!-- <button><img src="../assets/icons/BUYNOW.svg"></button> -->
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

            // this.firstName
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

<style>
.main{
   
}
.order-summary{
    display: flex;
    padding: 30px;
    justify-content: center;
    
}
.details-title{
    
    font-size: 15px;
}


.deliverydetails-container {
  margin: 50px;  
  
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

    max-width: 295px;
    height: 500px;
    background-color: lightgray;
    border-color: black;
    overflow: scroll;
    display: flex;
    flex-direction:column;
}


</style>