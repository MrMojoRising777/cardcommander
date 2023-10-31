<script setup>
import { ref } from 'vue';
import axios from 'axios';
import { useRouter } from 'vue-router';

const router = useRouter();
const form = ref({
  email: '',
  password: ''
});

const getToken = async () => {
  await axios.get("/sanctum/csrf-cookie");
};

const handleLogin = async () => {
  await getToken();
  await axios.post('/login', {
    email: form.value.email,
    password: form.value.password
  });
  router.push('/');
}
</script>

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
                <input type="email" id="email" v-model="form.email" class="form-control" required>
              </div>
              <div class="mb-3">
                <label for="password" class="form-label">Password</label>
                <input type="password" id="password" v-model="form.password" class="form-control" required>
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