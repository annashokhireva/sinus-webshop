<template>
  <div class="register-container">
    <form class="register-form" @submit.prevent="onSubmit">
        <div class="container">
            <h1>Register</h1>
            <p>Please fill in this form to create an account.</p>

            <div class="register-input">
                <label for="email"><b>Email</b></label>
                <label class="mandatory">*</label>
                <input type="email" placeholder="Enter Email" name="email" id="email" required>

                <label for="psw"><b>Password</b></label>
                <label class="mandatory">*</label>
                <input type="password" placeholder="Enter Password" name="psw" id="psw" required>

                <label for="psw-repeat"><b>Repeat Password</b></label><label class="mandatory">*</label>
                <input type="password" placeholder="Repeat Password" name="psw-repeat" id="psw-repeat" required>

                <p>By creating an account you agree to our <a href="#">Terms & Privacy</a>.</p>

                <button type="submit" class="btn-register" @click="onClick">REGISTER</button>
            </div>
        
        <div>
            <p>Already have an account? <a href="#">Sign in</a>.</p>
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

        },

        onClick: function() {
            const user = {
                email: '',
                password: ''
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
    flex-direction: column;
    margin-top: 10px;

      .mandatory {
        color: red;
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

</style>