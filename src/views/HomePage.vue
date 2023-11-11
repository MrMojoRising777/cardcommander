<script setup>
import { ref, onMounted } from 'vue';
import { useAuthStore } from "../store/auth";

const authStore = useAuthStore();
const isLoading = ref(true);

onMounted(async () => {
  try {
    // get user
    await authStore.getUser();
  } finally {
    isLoading.value = false;
  }
});
</script>

<template>
  <div class="home-container">
    <h1>Home page</h1>
    <div v-if="isLoading">
      <p>Loading...</p>
    </div>
    <div v-else>
      <div v-if="authStore.user">
        <p>Hello</p>
        <p>{{ authStore.user.name }}</p>
      </div>
      <div v-else>
        <p>Not logged in</p>
      </div>
    </div>
  </div>
</template>

<style>
.home-container {
  width: 100vw;
  height: 100vh;
  margin: 0;
  padding: 0;
  background-image: url('https://images8.alphacoders.com/825/825207.jpg');
  background-repeat: no-repeat;
  background-size: cover;
  display: flex;
  justify-content: center;
  align-items: center;
  color: #FFFFFF;
  font-size: 2em;
}
</style>