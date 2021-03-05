<template>          
    <div class="delivery-details">
        <h5 class="details-title">DELIVERY DETAILS</h5>

            <form class="order-form" @submit.prevent="onSubmit">
        
                <label :for="user.name" class="firstname required">First Name</label><br>
                <input 
                    :id="user.name"
                    v-model="user.name" 
                    type="firstname" 
                    class="input-field" 
                    value="user.name"
                    required
                >
                
                <label :for="user.email" class="email required">Email Adress</label><br>
                <input 
                    :id="user.email"
                    v-model="user.email"  
                    class="input-field" 
                    required
                >
                
                <!-- <label :for="user.adress[user.street]" class="postalcode required">Street Adress</label><br>
                <input 
                    :id="user.adress[user.street]"
                    v-model="user.adress[user.street]"  
                    class="input-field" 
                    required
                > -->
                
                <!-- <div class="zip-city">
                    <span class="zip">
                        <label :for="user.address.zip" class="required">Zip Code</label>
                        <input 
                            :id="user.address.zip"
                            v-model="user.address.zip"  
                            class="input-field" 
                            required
                        >
                    </span> 

                    <span class="city">   
                        <label :for="user.address.city" class="required">City</label>
                        <input 
                            :id="user.address.city"
                            v-model="user.address.city" 
                            class="input-field" 
                            required
                        >
                    </span>
                </div> -->
                
                
                <div class="total"> <h4>{{ totalAmount }} kr</h4></div>
                    <!-- <button type="submit"><img src="../assets/icons/BUYNOW.svg"></button>	-->
                <button type="order" class="btn-large dark" @click.stop="$emit('placeOrder', $event)" @click="thankYou"><h3>Buy now</h3></button>
            </form>
    </div>
                    
</template>

<script>



export default {
    name: 'Checkout',

    // props: {
    //     items: Array
    // },
    // data: function(){
        
    //     return {
    //         user: {
    //             name: '',
    //             email: '',

    //             address: {
    //                 street: '',
    //                 zip: '',
    //                 city: '',
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
        
        user() {
			return this.$store.state.user;
		}
		
	},
    
    methods: {
        userDefinition() {
			return {
				user: {
                    name: '',
                    email: '',

                    address: {
                        street: '',
                        zip: '',
                        city: '',
                    }
                }
            };
        },

        onSubmit: function(){
            console.log(this.user);
          
            this.user = this.userDefinition;
        },
        unSubmitted: function(){

        },
        thankYou() {
			this.$router.push("thankyou");
        }    
    },

    mounted() {
		this.$store.dispatch("getUser");
	}
}
        


</script>

<style lang="scss" scoped>

.delivery-details {
    margin: $space/4 $space;
}

.order-form{
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: stretch;
    text-align: left;

    .zip-city {
        display: flex;
        justify-content: space-between;
        align-items: center;
    }

    .zip, 
    .city {
        display: flex;
        flex-direction: column;

        input {
            flex: 1;
            padding: 4% 5%;
        }
    }

    .zip {
        margin-right: 5%;
    }
}

label{
    line-height: 1em;
}
.input-field {
    font-size: 14px;
	font-family: 'Raleway', sans-serif;
    width: 100%;
    padding: 4% 5%;
    margin-bottom: 20px;
}

.total  {
    margin: auto;
}

div label.required:after
{
    color: red;
    content: " *";
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