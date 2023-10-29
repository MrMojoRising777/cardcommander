<!--display factions(by era.id) to pick from (FactionTemplate)-->
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
  components: {
    FactionTemplate,
  },
  data() {
    return {
      factions: [],
      eraId: null,
    };
  },
  mounted() {
    this.eraId = this.$route.params.eraId;
    this.fetchFactionsByEraId();
  },
  methods: {
    fetchFactionsByEraId() {
      const API_URL = 'http://localhost:8000/';
      axios
        .get(API_URL + `factions/${this.eraId}`)
        .then(response => {
          this.factions = response.data;
          console.log("FACTIONS",this.factions);
        })
        .catch(error => {
          console.error(error);
        });
    },
  },
};
</script>

<style>
.erapicker-container {
  width: 100vw;
  height: 100vh;
  margin: 0;
  padding: 0;
  background-image: url('https://wallpapers.com/images/hd/shogun-1920-x-1080-wallpaper-qrprnm2hctkbgezt.jpg');
  background-repeat: no-repeat;
  background-size: cover;
  color: #FFFFFF;
}
</style>