<template>
  <div class="card" style="width: 18rem;">
    <img :src="card.picture" class="card-img-top" alt="Card Image">
    <div class="card-body" :class="{ 'show-body': isHovered }">
      <div class="title-container">
        <div class="box red-box">{{ card.attack }}</div>
        <h5 class="card-title">{{ card.name }}</h5>
        <div class="box blue-box">{{ card.defence }}</div>
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