<!--card collection showcase: display all cards; obtained and locked-->
<template>
  <div class="collection-container">
    <h1>Collection page</h1>
    <div class="row">
      <card-template v-for="(card, index) in this.cards" :key="index" :card="card" :height="120" :width="300"/>
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

<style>
.collection-container {
  width: 100vw;
  height: 100vh;
  margin: 0;
  padding: 0;
  background-image: url('https://www.worldhistory.org/uploads/images/14298.png');
  background-repeat: no-repeat;
  background-size: cover;
  color: #FFFFFF;
}
</style>