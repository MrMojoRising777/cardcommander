<template>
  <div>
    <h1>Collection page</h1>
    <div
      v-for="(card, index) in filteredCards"
      :key="index"
      class="card"
      :style="{ backgroundImage: `url(${card.picture})` }"
    >
      <div class="card-body" :class="{ 'show-body': card.isHovered }" @mouseover="card.isHovered = true" @mouseleave="card.isHovered = false">
        <div class="title-container">
          <div class="box red-box">{{ card.attack }}</div>
          <h5 class="card-title">
            {{ card.name }}
          </h5>
          <div class="box blue-box">{{ card.defence }}</div>
        </div>
        <p class="card-text">{{ card.description }}</p>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  name: 'BootstrapCard',
  data() {
    return {
      isHovered: false,
      cards: [],
    };
  },
  computed: {
    // get obtained cards only
    filteredCards() {
      return this.cards.filter(card => card.obtained === 1);
    },
  },
  mounted() {
    this.fetchCards();
  },
  methods: {
    fetchCards() {
      const API_URL = 'http://localhost:8000/';
      axios
        .get(API_URL + 'cards')
        .then(response => {
          this.cards = response.data;
        })
        .catch(error => {
          console.error(error);
        });
    },
  },
};
</script>

<style>
  .card {
    width: 18rem;
    margin-bottom: 1rem;
    background-size: cover;
    background-position: center;
    cursor: move;
  }

  .card-body {
    opacity: 0;
    transition: opacity 0.2s;
  }

  .show-body {
    opacity: 1;
  }

  .title-container {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  .box {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 25px;
    height: 25px;
    border-radius: 50%;
    color: white;
    font-weight: bold;
  }

  .red-box {
    background-color: red;
    margin-right: 5px;
  }

  .blue-box {
    background-color: blue;
    margin-left: 5px;
  }
</style>