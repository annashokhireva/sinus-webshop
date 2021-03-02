<template>
  <div class="register-container">
    <form class="register-form" @submit.prevent="onSubmit">
        <div class="container">
            <h1>Register</h1>
            <p>Please fill in this form to create an account.</p>

            <div class="register-input">
                <label class="name required"><b>Name</b></label>
                <input type="text" placeholder="Enter Name" name="name" id="name" required>
                
                <label class="email required"><b>Email</b></label>
                <input type="email" placeholder="Enter Email" name="email" id="email" required>

                <label class="psw required"><b>Password</b></label>
                <input type="password" placeholder="Enter Password" name="psw" id="psw" required>

                <label class="psw-repeat required"><b>Repeat Password</b></label>
                <input type="password" placeholder="Repeat Password" name="psw-repeat" id="psw-repeat" required>

                <label class="Address required"><b>Address</b></label>
                <input type="text" placeholder="Enter Address" name="address" id="address" required>                

                <p>By creating an account you agree to our <a href="#">Terms & Privacy</a>.</p>

                <button type="submit" class="btn-register">REGISTER</button>
            </div>
        </div>
    </form>
  </div>
</template>

<script>
export default {

    name: 'Register',

    methods: {
        
        onSubmit: function() {

            const user = {
                name: '',
                email: '',
                password: '',
                address: ''
            }

            this.$store.dispatch('registerUser', user);

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
  display: flex;
  flex-direction: column;

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

  .btn-register {
    width: 100%;
    height: 35px;
    margin-top: 10px;
    margin-bottom: 10px;
    background-color: black;
    color: white;
    cursor: pointer;
  }

  p {
      margin-top: 20px;
      margin-bottom: 20px;
  }
  
}
}

div label.required:after
{
    color: red;
    content: " *";
}

</style>