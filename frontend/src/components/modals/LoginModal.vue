<template>
    <div class="modal">
        <form class="login-form">

          <h3 class="title">Login</h3>

          <div class="login-input">
                <label class="email required"><b>Email</b></label>
                <input type="email" placeholder="Enter Email" name="email" id="email" required>

                <label class="psw required"><b>Password</b></label>
                <input type="password" placeholder="Enter Password" name="psw" id="psw" required>
          </div>       

          <button class="btn-login">LOGIN</button>

        </form>
        <div class="register">
          <p>Not a member yet?</p>
          <p @click="goToRegister">Register here.</p>
        </div>
    </div>
</template>

<script>
import { mapMutations } from 'vuex';

export default {

	methods: {
		...mapMutations([
		'hideModal',
		]),

		goToRegister: function() {
        this.$router.push("/register")
		this.hideModal();
      }
	},


    
}
</script>

<style lang="scss" scoped>

.login-form {
  width: 282px;
  display: flex;
  flex-direction: column;

  h3 {
    padding: 10px;
    margin-bottom: 10px;
  }

  .login-input {
    flex-direction: column;

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

  .btn-login {
    width: 100%;
    height: 35px;
    margin-top: 10px;
    margin-bottom: 10px;
    background-color: black;
    color: white;
    cursor: pointer;
  }
  

}

div label.required:after
{
    color: red;
    content: " *";
}  

</style>