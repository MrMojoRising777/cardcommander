<template>
  <header>
    <i class="bi bi-list" @click="toggleSidebar"></i>
    <h1>{{ title }}</h1>
    <nav>
      <ul>
        <li><a href="/">Home</a></li>
        <li><a href="/collection">Cards</a></li>
      </ul>
    </nav>
  </header>
</template>

<script>
export default {
  name: 'HeaderComponent',
  data() {
    return {
      title: "My Vue Header",
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