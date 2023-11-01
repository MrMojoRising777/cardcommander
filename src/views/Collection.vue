<!--card collection showcase: display all cards; obtained and locked-->
<template>
  <div>
    <h1>Collection page</h1>
    <div class="row">
      <card-template v-for="(card, index) in this.cards" :key="index" :card="card" />
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
      userId: null,
    };
  },
  mounted() {
    this.userId = this.$route.params.userId;
    this.fetchCollection();
  },
  methods: {
    fetchCollection() {
      const API_URL = 'http://localhost:8000/';
      axios
        .get(API_URL + `card_collections/${this.userId}`)
        .then(response => {
          this.cards = response.data;
          console.log("cards",this.cards);
        })
        .catch(error => {
          console.error(error);
        });
    },
  },
};
</script>