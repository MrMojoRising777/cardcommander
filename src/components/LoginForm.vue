<template>
  <div class="container mt-5">
    <div class="row">
      <div class="col-md-6 mx-auto">
        <div class="card">
          <div class="card-body">
            <h5 class="card-title text-center mb-4">Login</h5>
            <form @submit.prevent="handleLogin">
              <div class="mb-3">
                <label for="email" class="form-label">Email</label>
                <input type="email" id="email" v-model="email" class="form-control" required>
              </div>
              <div class="mb-3">
                <label for="password" class="form-label">Password</label>
                <input type="password" id="password" v-model="password" class="form-control" required>
              </div>
              <div class="mb-4">
                <button type="submit" class="btn btn-primary btn-block">Login</button>
              </div>
            </form>
            <p class="text-muted text-center">
              Don't have an account?
              <router-link to="/register" class="text-primary">Register</router-link>
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    
  }
</script>

<style lang="scss" scoped>

</style>