<template>
  <div class="battlefield-container">
    <h2>Battlefield</h2>
    <div class="battlefield">
      <div class="enemy-flanks">
        <div class="flank left-flank enemy-flank">
          <!-- Enemy Left Flank Area for Cards -->
          Enemy left
        </div>
        <div class="flank center-flank enemy-flank">
          <!-- Enemy Center Flank Area for Cards -->
          Enemy center
        </div>
        <div class="flank right-flank enemy-flank">
          <!-- Enemy Right Flank Area for Cards -->
          Enemy right
        </div>
      </div>
      <div class="divider"></div>
      <div class="player-flanks">
        <div class="flank left-flank player-flank" @drop="event => drop(event, 'left')" @dragover="allowDrop">
          <!-- Your Left Flank Area for Cards -->
          Left
        </div>
        <div class="flank center-flank player-flank" @drop="drop(event, 'center')" @dragover.prevent="allowDrop">
          <!-- Your Center Flank Area for Cards -->
          Center
        </div>
        <div class="flank right-flank player-flank" @drop="drop(event, 'right')" @dragover.prevent="allowDrop">
          <!-- Your Right Flank Area for Cards -->
          Right
        </div>
      </div>
    </div>
    <TestHand :cards="cards" @card-drag-start="cardDragStart"/>
  </div>
</template>

<script>
import TestHand from '../components/TestHand.vue';

export default {
  components: {
    TestHand,
  },
  methods: {
    allowDrop(ev) {
      ev.preventDefault();
    },
    cardDragStart(data) {
      // Handle the start of a card drag from TestHand
      // You can update the state accordingly
      console.log('Card dragged:', data.card, 'from index:', data.index);
    },
    drop(ev, flank) {
      ev.preventDefault();
      var cardId = ev.dataTransfer.getData("text");
      // Handle the drop event, including which flank the card was dropped into
      console.log('Dropped into flank:', flank);
      console.log('Card ID:', cardId);
    },
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
</style>