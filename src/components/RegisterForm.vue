<script setup>
import { ref } from 'vue';
import axios from 'axios';
import { useRouter } from 'vue-router';

const router = useRouter();
const form = ref({
  name: '',
  email: '',
  password: '',
  password_confirmation: ''
});

const getToken = async () => {
  await axios.get('/sanctum/csrf-cookie');
};

const handleRegister = async () => {
  await getToken();
  await axios.post('/register', {
    name: form.value.name,
    email: form.value.email,
    password: form.value.password,
    password_confirmation: form.value.password_confirmation
  });
  router.push("/");
}
</script>

<template>
  <div class="container mt-5">
    <div class="row">
      <div class="col-md-6 mx-auto">
        <div class="card">
          <div class="card-body">
            <h5 class="card-title text-center mb-4">Register</h5>
            <form @submit.prevent="handleRegister">
              <div class="mb-3">
                <label for="name" class="form-label">Name</label>
                <input type="text" id="name" v-model="form.name" class="form-control" required>
              </div>
              <div class="mb-3">
                <label for="email" class="form-label">Email</label>
                <input type="email" id="email" v-model="form.email" class="form-control" required>
              </div>
              <div class="mb-3">
                <label for="password" class="form-label">Password</label>
                <input type="password" id="password" v-model="form.password" class="form-control" required>
              </div>
              <div class="mb-3">
                <label for="password_confirmation" class="form-label">Password Confirmation</label>
                <input type="password" id="password_confirmation" v-model="form.password_confirmation" class="form-control" required>
              </div>
              <div class="mb-4">
                <button type="submit" class="btn btn-primary btn-block">Register</button>
              </div>
            </form>
            <p class="text-muted text-center">
              Already have an account?
              <router-link to="/login" class="text-primary">Login</router-link>
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>