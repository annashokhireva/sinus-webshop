<template>
  <div class="backdrop">
    <div class="modal">
        <form class="login-form">

          <h3 class="title">Login</h3>

          <div class="login-input">
              <label>Email</label>
              <input type="email" class="form-control" placeholder="Email"/>
          </div>

          <div class="login-input">
              <label>Password</label>
              <input type="password" class="form-control" placeholder="Password"/>
          </div>

          <button class="btn-login">Login</button>

    </form>
    </div>
  </div>
</template>

<script>
export default {

    name: 'Login'
    
}
</script>

<style>

</style>