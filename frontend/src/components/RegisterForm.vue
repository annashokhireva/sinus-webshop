<template>
<div>
  <div class="register-container">
    <form class="register-form" @submit.prevent="onSubmit" v-show="unSubmitted">
        <div class="container">
            <h1>Register</h1>
            <p>Please fill in this form to create an account.</p>

            <div class="register-input">
                <label class="name required"><b>Name</b></label>
                <input type="text" placeholder="Enter Name" name="name" id="name" v-model="user.name" required>
                
                <label class="email required"><b>Email</b></label>
                <input type="email" placeholder="Enter Email" name="email" id="email" v-model="user.email" required>

                <label class="psw required"><b>Password</b></label>
                <input type="password" placeholder="Enter Password" name="psw" id="psw" v-model="user.password" required>

                <label class="psw-repeat required"><b>Repeat Password</b></label>
                <input type="password" placeholder="Repeat Password" name="psw-repeat" id="psw-repeat" required>

                <label class="street required"><b>Street</b></label>
                <input type="text" placeholder="Enter Street" name="street" id="street" v-model="user.address.street" required>

                <label class="zip required"><b>Zip Code</b></label>
                <input type="text" placeholder="Enter Zip Code" name="street" id="street" v-model="user.address.zip" required>

                <label class="city required"><b>City</b></label>
                <input type="text" placeholder="Enter City" v-model="user.address.city" required>                

                <p>By creating an account you agree to our <a href="#">Terms & Privacy</a>.</p>

                <button type="submit" class="btn-register" @click="unSubmitted = !unSubmitted">REGISTER</button>  
            </div>
        </div>
    </form>
  </div>
    <div class="registered" v-show="!unSubmitted">
      <h1>Thank you for becoming a member at Sinus Skateboards!</h1>
      <h3>You'll recieve an e-mail confirmation shortly.</h3>
      <button class="btn-gostart" @click="goToStart">GO BACK TO SHOPPING</button>
    </div>
 </div> 
</template>

<script>
export default {

  name: 'Register',

  data() {
    return {

      unSubmitted: true,

      user: {
          name: '',
          email: '',
          password: '',
            
          address: {
                  street: '',
                  zip: '',
                  city: ''
                    }
            }
      }
  },

  methods: {
        
    onSubmit: function() {

        this.$store.dispatch('registerUser', this.user);

    },

    goToStart: function() {

      this.$router.push('/');
    }

  }

}
</script>

<style lang="scss" scoped>

.register-container {
  max-width: 300px;
  margin: auto;  


.register-form {
  width: 282px;

  h1 {
    padding: 10px;
    margin-bottom: 10px;
  }

  .register-input {

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
    }
    
  }

  p {
      margin-top: 20px;
      margin-bottom: 20px;
  }
  
}
}

button {
    width: 100%;
    height: 35px;
    margin-top: 10px;
    margin-bottom: 30px;
    background-color: black;
    color: white;
    cursor: pointer;
  }

.registered {
  max-width: 600px;
  margin: auto;
}  

div label.required:after
{
    color: red;
    content: " *";
}

</style>