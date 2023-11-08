<template>
  <div class="hand">
    <card-template v-for="(card, index) in uniqueCards" :key="index" :card="card" draggable="true" @dragstart="event => dragStart(event, card, index)" />
  </div>
</template>

<script>
import axios from 'axios';
import CardTemplate from '../components/CardTemplate.vue';

export default {
  components: {
    CardTemplate,
  },
  data() {
    return {
      cards: [],
    };
  },
  computed: {
    uniqueCards() {
      // Create a Set to store unique card names
      const uniqueCardNames = new Set();

      // Filter out duplicates and create a new array of unique cards
      return this.cards.filter((card) => {
        if (!uniqueCardNames.has(card.name)) {
          uniqueCardNames.add(card.name);
          return true;
        }
        return false;
      });
    },
  },
  mounted() {
    this.fetchCollection();
  },
  methods: {
    fetchCollection() {
      const API_URL = 'http://localhost:8000/';
      axios
        .get(API_URL + `card_collections/1`)
        .then((response) => {
          this.cards = response.data;
          console.log('cards', this.cards);
        })
        .catch((error) => {
          console.error(error);
        });
    },
    dragStart(card, index, event) {
      // Emit a custom event to indicate the start of a drag operation
      event.dataTransfer.setData('text', card.id);
      this.$emit('card-drag-start', { card, index });
    },
  },
};
</script>