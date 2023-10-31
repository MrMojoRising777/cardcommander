<script setup>
import { ref, onMounted } from 'vue';
import axios from 'axios';

const user = ref();
onMounted(async () => {
  const data = await axios.get('/api/user');
  user.value = data.data;
  console.log(user.value);
})
</script>

<!--home page w/ News, Friends, Shop, ..-->
<template>
  <div class="home-container">
    <h1>Home page</h1>
    <p>{{ user?.name }}</p>
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