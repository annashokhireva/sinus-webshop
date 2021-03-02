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
                    <div class="delivery-input">
                        <ul>
                        <label class="firstname required">First Name</label><br>
                        <input type="firstname" name="firstname" id="firstname" required>
                        <br>
                        <label class="lastname required">Last Name</label><br>
                        <input type="lastname"  name="lastname" id="lastname" required>
                        <br>
                        <label class="email required">Email Adress</label><br>
                        <input type="email"  name="email" id="email" required>
                        <br>
                        <label class="phone">Phone Number</label><br>
                        <input type="phone" name="phone" id="phone" >
                        <br>
                        <label class="c/o">C/O</label><br>
                        <input type="c/o"  name="c/o" id="c/o" >
                        <br>
                        <label class="adress required">Adress</label><br>
                        <input type="adress"  name="adress" id="adress" required>
                        <br>
                        <label class="postalcode required">Postal Code</label><br>
                        <input type="postalcode"  name="postalcode" id="postalcode" required>
                        <br>
                        <label class="city required">City</label><br>
                        <input type="city"  name="city" id="city" required>
                        </ul>        
                    </div>
                </div>
             </form>
              </div>

                <div class="payment-method">
                <h2>CHOOSE PAYMENT METHODS</h2>
                <ul class="payment-options">
                <input type="checkbox" name="check" onclick="onlyOne(this)">Klarna
                <br>
                <input type="checkbox" name="check" onclick="onlyOne(this)">Paypal
                <br>
                <input type="checkbox" name="check" onclick="onlyOne(this)">Card Payment
                <br>
                <input type="checkbox" name="check" onclick="onlyOne(this)">Gift voucher
                <br>
                </ul>
                </div>
            </div>

            <div class="your-order">
             <div class="order-container">
                <h2>YOUR ORDER</h2>
                <shopping-cart />
             </div>
            </div>
           
        </div>
    </div>
    <div class="totsl">Total: {{ totalAmount }} kr</div>
    <button type="submit" class="btn-register" @click="onClick"><img src="../assets/icons/BUYNOW.svg"></button>	
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
    

}
        


</script>

<style>
.main{
    max-height: 12px;
}
.order-summary{
    display: grid;
    grid-template-columns: 65% 35%;
}
.details-title{
    
    font-size: 15px;
}


.register-container {
  max-width: 200px;
  margin: auto;  


.register-form {
  width: 282px;
  display: flex;
  flex-direction: column;

  h1 {
    padding: 10px;
    margin-bottom: 10px;
  }

  .delivery-input {

      label {
        display: block;
        text-align: left;
      }  

      input {
        width: 100%;
        padding: 12px 20px;
        margin: 8px 0;
        display: inline-block;
        border: 1px solid #ccc;
        box-sizing: border-box;
        align-items: left;
    }
    
  }

  .btn-register {
    width: 100%;
    height: 35px;
    margin-top: 10px;
    margin-bottom: 10px;
    background-color: black;
    color: white;
    cursor: pointer;
  }


  
}
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
}

</style>