<template>
  <div>
    <h2>EraPicker page</h2>
    <div class="row">
      <era-template v-for="(era, index) in this.eras" :key="index" :era="era" class="test" />
    </div>
  </div>
</template>

<script>
import axios from 'axios';
import EraTemplate from '../components/EraTemplate.vue';

export default {
  name: "eraPicker",
  components: {
    EraTemplate,
  },
  data() {
    return {
      eras: [],
    };
  },
  mounted() {
    this.fetchEras();
  },
  methods: {
    fetchEras() {
      const API_URL = 'http://localhost:8000/';
      axios
        .get(API_URL + 'eras')
        .then(response => {
          this.eras = response.data;
          console.log(this.eras);
        })
        .catch(error => {
          console.error(error);
        });
    },
  },
};
</script>