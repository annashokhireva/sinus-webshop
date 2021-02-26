<template>
    <div class="modal">
        <form class="login-form">

          <h3 class="title">Login</h3>

          <div class="login-input">
              <label class="label-email">Email</label><label class="mandatory">*</label>
              <input type="email" class="form-control" placeholder="Email"/>
          </div>

          <div class="login-input">
              <label class="label-password">Password</label><label class="mandatory">*</label>
              <input type="password" class="form-control" placeholder="Password"/>
          </div>

          <button class="btn-login">LOGIN</button>

        </form>
    </div>
</template>

<script>
export default {

    name: 'Login'
    
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

      .label-email, .label-password {
        align-self: flex-start;
      }

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
    background-color: black;
    color: white;
    cursor: pointer;
  }

}
</style>