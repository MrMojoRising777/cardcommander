<template>
  <div>
    <h2>FactionPicker page</h2>
    <p>You selected Era with ID: {{ eraId }}</p>
    <div class="row">
      <faction-template v-for="(faction, index) in this.factions" :key="index" :faction="faction" class="test" />
    </div>
  </div>
</template>

<script>
import axios from 'axios';
import FactionTemplate from '../components/FactionTemplate.vue';

export default {
  name: "eraPicker",
  props: ['eraId'],
  components: {
    FactionTemplate,
  },
  data() {
    return {
      factions: [],
    };
  },
  mounted() {
    this.fetchFactions();
  },
  methods: {
    fetchFactions() {
      const API_URL = 'http://localhost:8000/';
      axios
        .get(API_URL + 'eras')
        .then(response => {
          this.factions = response.data;
          console.log(this.factions);
        })
        .catch(error => {
          console.error(error);
        });
    },
  },
};
</script>