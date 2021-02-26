<template>
    <div class="modal">
        <form class="login-form">

          <h3 class="title">Login</h3>

          <div class="login-input">
              <label for="email"><b>Email</b></label>
              <label class="mandatory">*</label>
              <input type="email" placeholder="Email" name="email" id="email" required>
          </div>

          <div class="login-input">
              <label for="psw"><b>Password</b></label>
              <label class="mandatory">*</label>
              <input type="password" placeholder="Password" name="psw" id="psw" required>
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
export default {

    name: 'Login',

    methods: {
      goToRegister: function() {
        this.$router.push("/register")
      }
    }
    
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
</style>