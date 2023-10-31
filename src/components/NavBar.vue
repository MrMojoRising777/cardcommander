<script setup>
import { useAuthStore } from '@/store/auth';

const authStore = useAuthStore();
</script>

<!--header and navbar-->
<template>
  <header>
    <i class="bi bi-list" @click="toggleSidebar"></i>
    <h1>CardCommander</h1>
    <nav>
      <ul>
        <li><router-link :to="'/'">Home</router-link></li>
        <template v-if="!authStore.user">
          <li><router-link :to="'/login'">Login</router-link></li>
          <li><router-link :to="'/register'">Register</router-link></li>
        </template>
        <template v-else>
          <li><router-link :to="'/collection'">Cards</router-link></li>
          <li><router-link :to="'/battle'">Battle</router-link></li>
          <button @click="authStore.handleLogout">Logout</button>
        </template>
      </ul>
    </nav>
  </header>
</template>

<style scoped>
header {
  background-color: #333;
  color: #fff;
  padding: 10px;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

ul {
  list-style: none;
  display: flex;
  gap: 20px;
}

li {
  font-size: 18px;
}

a {
  text-decoration: none;
  color: #fff;
}
</style>