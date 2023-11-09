<template>
  <div class="battlefield-container">
    <h2>Battlefield</h2>
    <div class="battlefield">
      <div class="enemy-flanks">
        <!-- Enemy Left Flank Area for Cards -->
        <div class="flank left-flank enemy-flank" @drop="event => drop(event, 'enemy_leftFlank')" @dragover="allowDrop">
          Enemy left
          <card-template v-for="(card, index) in enemy_leftFlank" :key="index" :card="card" draggable="true" @dragstart="cardDragStart($event, card)"
          :height="120" :width="60"/>
        </div>
        <!-- Enemy Center Flank Area for Cards -->
        <div class="flank center-flank enemy-flank" @drop="event => drop(event, 'enemy_centerFlank')" @dragover="allowDrop">
          Enemy center
          <card-template v-for="(card, index) in enemy_centerFlank" :key="index" :card="card" draggable="true" @dragstart="cardDragStart($event, card)"
          :height="120" :width="60"/>
        </div>
        <!-- Enemy Right Flank Area for Cards -->
        <div class="flank right-flank enemy-flank" @drop="event => drop(event, 'enemy_rightFlank')" @dragover="allowDrop">
          Enemy right
          <card-template v-for="(card, index) in enemy_rightFlank" :key="index" :card="card" draggable="true" @dragstart="cardDragStart($event, card)"
          :height="120" :width="60"/>
        </div>
      </div>
      <div class="divider"></div>
      <div class="player-flanks">
        <!-- Left Flank Area for Cards -->
        <div class="flank left-flank player-flank" @drop="event => drop(event, 'player_leftFlank')" @dragover="allowDrop">
          Left
          <card-template v-for="(card, index) in player_leftFlank" :key="index" :card="card" draggable="true" @dragstart="cardDragStart($event, card)"
          :height="120" :width="60"/>
        </div>
        <!-- Center Flank Area for Cards -->
        <div class="flank center-flank player-flank" @drop="event => drop(event, 'player_centerFlank')" @dragover="allowDrop">
          Center
          <card-template v-for="(card, index) in player_centerFlank" :key="index" :card="card" draggable="true" @dragstart="cardDragStart($event, card)"
          :height="120" :width="60"/>
        </div>
        <!-- Right Flank Area for Cards -->
        <div class="flank right-flank player-flank" @drop="event => drop(event, 'player_rightFlank')" @dragover="allowDrop">
          <div class="flank-title">Right</div>
          <div class="card-container">
            <card-template v-for="(card, index) in player_rightFlank" :key="index" :card="card" draggable="true" @dragstart="cardDragStart($event, card)"
            :height="120" :width="60"/>
          </div>
        </div>
      </div>
    </div>
    <!-- Enemy Deck Area -->
    <div class="deck enemy-deck top-left">
      Enemy Deck
    </div>
    <!-- Player Deck Area -->
    <div class="deck player-deck bottom-right">
      Player Deck
    </div>
    <div class="row">
      <card-template v-for="(card, index) in cards" :key="index" :card="card" draggable="true" @dragstart="cardDragStart($event, card)"
      :height="240" :width="120"/>
    </div>
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
      enemy_leftFlank: [],
      enemy_centerFlank: [],
      enemy_rightFlank: [],
      player_leftFlank: [],
      player_centerFlank: [],
      player_rightFlank: [],
    };
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
    allowDrop(ev) {
      ev.preventDefault();
    },
    cardDragStart(event, card) {
      // Handle start of drag
      console.log(`Card dragged: ${card.name}, ID: ${card.id}`);
      event.dataTransfer.setData('text/plain', card.id);
    },
    drop(ev, flank) {
      ev.preventDefault();
      var cardId = parseInt(ev.dataTransfer.getData('text/plain'), 10);
      var cardIndex = this.cards.findIndex(card => card.id === cardId);
      if (cardIndex !== -1) {
        // Remove card from main cards array
        const droppedCard = this.cards.splice(cardIndex, 1)[0];
        // Ensure that array is defined before pushing card
        if (this[flank]) {
          // Add card to corresponding flank array
          this[flank].push(droppedCard);

          console.log('Card dropped into flank:', flank);
          console.log('Card Data:', droppedCard);
        } else {
          console.error('Flank array not found:', flank);
        }
      } else {
        console.log('Card not found for ID:', cardId);
      }
    },
  },
  mounted() {
    this.fetchCollection();
  },
}
</script>

<style>
.battlefield-container {
  color: #FF0000;
  text-align: center;
  background-image: url('https://cdn.steamstatic.com/steamcommunity/public/images/items/814380/15a2ff3e56ec511ec8f2aa05cd5afe605f16985f.jpg');
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
}
.divider {
  width: 100%;
  border-top: 12px solid #FF0000;
  margin: 20px 0;
}
.flank {
  width: 240px;
  height: 320px;
  border: 1px solid #666;
  background-color: #f2f2f2;
  margin: 10px;
  display: inline-block;
  text-align: center;
}
.battlefield {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
}
.enemy-flanks, .player-flanks {
  display: flex;
  justify-content: space-between;
}
.deck {
  width: 100px;
  height: 120px;
  border: 2px solid #000;
  background-color: #0077b6;
  color: #fff;
  text-align: center;
  font-size: 16px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  border-radius: 5px;
}
.player-deck {
  background-color: #00a896;
}
.enemy-deck {
  background-color: #ff6b6b;
}
.top-left {
  position: absolute;
  top: 20px;
  left: 20px;
}
.bottom-right {
  position: absolute;
  bottom: 20px;
  right: 20px;
}
</style>