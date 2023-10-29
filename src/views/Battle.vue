<!--main battle page w/ stats, battle options, ..-->
<template>
  <div class="battle-container">
    <h2>Battle page</h2>
    <router-link :to="'/erapicker'">Choose Era</router-link>
  </div>
</template>

<script>
export default {
  name: "cardBattle"
};
</script>

<style>
.battle-container {
  width: 100vw;
  height: 100vh;
  margin: 0;
  padding: 0;
  background-image: url('https://cdn.steamstatic.com/steamcommunity/public/images/items/1183470/ef5a12448b95c2e088bc67fda7f583f2577f7a15.jpg');
  background-repeat: no-repeat;
  background-size: cover;
  display: flex;
  justify-content: center;
  align-items: center;
  color: #FFFFFF;
  font-size: 2em;
}
</style>