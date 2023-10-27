<template>
  <div class="card" style="width: 18rem;">
    <img :src="card.picture" class="card-img-top" alt="Card Image">
    <div class="card-body" :class="{ 'show-body': isHovered }">
      <div class="title-container" style="position: relative;">
        <div class="box red-box top-left">{{ card.attack }}</div>
        <h5 class="card-title">{{ card.name }}</h5>
        <div class="box blue-box top-right">{{ card.defence }}</div>
      </div>
      <p class="card-text">{{ card.description }}</p>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    card: Object,
  },
  data() {
    return {
      isHovered: false,
    };
  },
  methods: {
    hover(hovered) {
      this.isHovered = hovered;
    },
  },
};
</script>

<style>
.top-left {
  position: absolute;
  top: 0;
  left: 0;
  background-color: red;
  color: white;
  border-radius: 50%;
  padding: 5px;
  font-size: 18px;
}

.top-right {
  position: absolute;
  top: 0;
  right: 0;
  background-color: blue;
  color: white;
  border-radius: 50%;
  padding: 5px;
  font-size: 18px;
}
</style>