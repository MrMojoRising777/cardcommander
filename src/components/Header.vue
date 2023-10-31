<!--header and navbar-->
<template>
  <header>
    <i class="bi bi-list" @click="toggleSidebar"></i>
    <h1>{{ title }}</h1>
    <nav>
      <ul>
        <li><router-link :to="'/'">Home</router-link></li>
        <li><router-link :to="'/login'">Login</router-link></li>
        <li><router-link :to="'/register'">Register</router-link></li>
        <li><router-link :to="'/collection'">Cards</router-link></li>
        <li><router-link :to="'/battle'">Battle</router-link></li>
      </ul>
    </nav>
  </header>
</template>

<script>
export default {
  name: 'HeaderComponent',
  data() {
    return {
      title: "CardCommander",
    };
  },
};
</script>

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