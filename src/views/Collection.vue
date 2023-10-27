<template>
  <div>
    <h1>Collection page</h1>
    <div class="row">
      <card-template v-for="(card, index) in filteredCards" :key="index" :card="card" class="test" />
    </div>
  </div>
</template>

<script>
import axios from 'axios';
import CardTemplate from '../components/CardTemplate.vue';

export default {
  name: "CardCollection",
  components: {
    CardTemplate,
  },
  data() {
    return {
      cards: [],
    };
  },
  computed: {
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
.test {
  margin-left: 10px;
}
</style>