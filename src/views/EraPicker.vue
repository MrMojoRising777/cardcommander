<template>
  <div class="erapicker-container">
    <h2>EraPicker page</h2>
    <div class="row">
      <era-template
        v-for="(era, index) in this.eras"
        :key="index"
        :era="era"
        class="test"
      >
      </era-template>
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

<style>
.erapicker-container {
  width: 100vw;
  height: 100vh;
  margin: 0;
  padding: 0;
  background-image: url('https://s3.envato.com/files/231381519/Historical%20Background_pic_preview.jpg');
  background-repeat: no-repeat;
  background-size: cover;
  color: #FFFFFF;
}
</style>