<template>
  <div class="battlefield-container">
    <h2>Battlefield</h2>
    <div class="battlefield" v-if="!gameOver">
      <!-- Enemy General Card Container -->
      <div class="general-card-container enemy-general-container"  @drop="event => drop(event, 'enemyGeneral')" @dragover="allowDrop">
        Enemy General Card
        <card-template v-for="(card, index) in enemyGeneral" :key="index" :card="card" draggable="true" @dragstart="cardDragStart($event, card)"
          :height="120" :width="60"/>
      </div>
      <div class="enemy-flanks">
        <!-- Enemy Left Flank Area for Cards -->
        <div class="flank left-flank enemy-flank" @drop="event => drop(event, 'enemyLeftFlank')" @dragover="allowDrop">
          Enemy left
          <card-template v-for="(card, index) in enemyLeftFlank" :key="index" :card="card" draggable="true" @dragstart="cardDragStart($event, card)"
          :height="120" :width="60"/>
        </div>
        <!-- Enemy Center Flank Area for Cards -->
        <div class="flank center-flank enemy-flank" @drop="event => drop(event, 'enemyCenterFlank')" @dragover="allowDrop">
          Enemy center
          <card-template v-for="(card, index) in enemyCenterFlank" :key="index" :card="card" draggable="true" @dragstart="cardDragStart($event, card)"
          :height="120" :width="60"/>
        </div>
        <!-- Enemy Right Flank Area for Cards -->
        <div class="flank right-flank enemy-flank" @drop="event => drop(event, 'enemyRightFlank')" @dragover="allowDrop">
          Enemy right
          <card-template v-for="(card, index) in enemyRightFlank" :key="index" :card="card" draggable="true" @dragstart="cardDragStart($event, card)"
          :height="120" :width="60"/>
        </div>
      </div>
      <div class="divider"></div>
      <!-- Player General Card Container -->
      <div class="general-card-container player-general-container" @drop="event => drop(event, 'playerGeneral')" @dragover="allowDrop">
        Player General Card
        <card-template v-for="(card, index) in playerGeneral" :key="index" :card="card" draggable="true" @dragstart="cardDragStart($event, card)"
          :height="120" :width="60"/>
      </div>
      <div class="player-flanks">
        <!-- Left Flank Area for Cards -->
        <div class="flank left-flank player-flank" @drop="event => drop(event, 'playerLeftFlank')" @dragover="allowDrop">
          Left
          <card-template v-for="(card, index) in playerLeftFlank" :key="index" :card="card" draggable="true" @dragstart="cardDragStart($event, card)"
          :height="120" :width="60"/>
        </div>
        <!-- Center Flank Area for Cards -->
        <div class="flank center-flank player-flank" @drop="event => drop(event, 'playerCenterFlank')" @dragover="allowDrop">
          Center
          <card-template v-for="(card, index) in playerCenterFlank" :key="index" :card="card" draggable="true" @dragstart="cardDragStart($event, card)"
          :height="120" :width="60"/>
        </div>
        <!-- Right Flank Area for Cards -->
        <div class="flank right-flank player-flank" @drop="event => drop(event, 'playerRightFlank')" @dragover="allowDrop">
          <div class="flank-title">Right</div>
          <div class="card-container">
            <card-template v-for="(card, index) in playerRightFlank" :key="index" :card="card" draggable="true" @dragstart="cardDragStart($event, card)"
            :height="120" :width="60"/>
          </div>
        </div>
      </div>
      <!-- Enemy Deck Area -->
      <div class="deck enemy-deck top-left">
        Enemy Deck
        <button class="btn btn-danger" @click="endTurn">END TURN</button>
      </div>
      <!-- Player Deck Area -->
      <div class="deck player-deck bottom-right">
        Player Deck
      </div>
      <div class="hand-container" @drop="event => drop(event, 'cards')" @dragover="allowDrop">
        <div class="row">
          <card-template v-for="(card, index) in cards" :key="index" :card="card" draggable="true" @dragstart="cardDragStart($event, card)"
          :height="240" :width="120"/>
        </div>
      </div>
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
      userId: null,
      cards: [],
      enemyGeneral: [],
      enemyLeftFlank: [],
      enemyCenterFlank: [],
      enemyRightFlank: [],
      playerGeneral: [],
      playerLeftFlank: [],
      playerCenterFlank: [],
      playerRightFlank: [],
      gameOver: false,
      turnCounter: 0
    };
  },
  methods: {
    fetchCollection() {
      const API_URL = 'http://localhost:8000/';
      axios
        .get(API_URL + `battlefield/${this.userId}`)
        .then((response) => {
          this.cards = response.data;
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
      event.dataTransfer.setData('text/plain', card.id);
    },
    drop(ev, flank) {
      ev.preventDefault();
      var cardId = parseInt(ev.dataTransfer.getData('text/plain'), 10);

      // Check in main cards array
      var cardIndex = this.cards.findIndex(card => card.id === cardId);

      if (cardIndex !== -1) {
        // Remove card from main cards array
        const droppedCard = this.cards.splice(cardIndex, 1)[0];

        // Ensure that array is defined before pushing card
        if (this[flank]) {
          // Add card to corresponding flank array
          this[flank].push(droppedCard);
        } else {
          console.error('Flank array not found:', flank);
        }
      } else {
        // Check in all flank arrays
        const allFlanks = ['enemyLeftFlank', 'enemyCenterFlank', 'enemyRightFlank', 'playerLeftFlank', 'playerCenterFlank', 'playerRightFlank'];

        for (const currentFlank of allFlanks) {
          var cardIndexInFlank = this[currentFlank].findIndex(card => card.id === cardId);
          if (cardIndexInFlank !== -1) {
            // Remove card from current flank array
            const droppedCard = this[currentFlank].splice(cardIndexInFlank, 1)[0];

            // Ensure that array is defined before pushing card
            if (this[flank]) {
              // Add card to corresponding flank array
              this[flank].push(droppedCard);
            } else {
              console.error('Flank array not found:', flank);
            }

            // Exit loop once card is found and moved
            break;
          }
        }
      }
    },
    calcFlank(array) {
      let totalAttack = 0;
      let totalDefence = 0;
      let name = "";

      for (let i = 0; i < array.length; i++) {
        totalAttack += array[i].attack;
        totalDefence += array[i].defence;
        name = array[i].name;
      }

      return { totalAttack, totalDefence, name };
    },
    checkHitOrBlock(attacker, defender) {
      return attacker.totalAttack > defender.totalDefence;
    },
    applyAttack(attacker, defender, generalHealth) {
      let damage = 0;
      if (this.checkHitOrBlock(attacker, defender)) {

        // if attack overpowers defence, calc attack received
        damage = attacker.totalAttack - defender.totalDefence;
        generalHealth -= damage;
        console.log("ATTACK HIT", attacker.name, attacker.totalAttack, "VS", defender.name, defender.totalDefence,
          " BREAKTHROUGH ::", generalHealth, " damage taken -", damage);

        // check if general health < 0
        this.checkGeneralHealth(generalHealth);
      } else {
        // attack was blocked
        console.log("ATTACK BLOCKED", defender.name, defender.totalDefence, "VS", attacker.name, attacker.totalAttack);
      }
      return generalHealth;
    },
    checkGeneralHealth(generalHealth) {
      if (generalHealth <= 0) {
        console.log("GENERAL DIED!!")
        this.gameOver = true;
      }
    },
    endTurn() {
      this.turnCounter++;
      console.log(this.turnCounter);

      let playerGeneralHealth = this.playerGeneral[0].health;
      let enemyGeneralHealth = this.enemyGeneral[0].health;

      console.log("PLAYER general:", this.playerGeneral[0].name);
      console.log("GENERAL HEALTH", playerGeneralHealth);

      console.log("ENEMY general:", this.enemyGeneral[0].name);
      console.log("GENERAL HEALTH", enemyGeneralHealth);
      
      // enemy = attacker (attacks first)
      const sum_enemy_left = this.calcFlank(this.enemyLeftFlank);
      const sum_player_left = this.calcFlank(this.playerLeftFlank);

      const sum_enemy_center = this.calcFlank(this.enemyCenterFlank);
      const sum_player_center = this.calcFlank(this.playerCenterFlank);

      // enemy attack left
      console.log("ENEMY left", this.enemyLeftFlank, sum_enemy_left);
      if (this.checkHitOrBlock(sum_enemy_left, sum_player_left)) {
        playerGeneralHealth = this.applyAttack(sum_enemy_left, sum_player_left, playerGeneralHealth);
      }
      if (this.checkHitOrBlock(sum_player_left, sum_enemy_left)) {
        enemyGeneralHealth = this.applyAttack(sum_player_left, sum_enemy_left, enemyGeneralHealth);
      }

      // general health should update after applyAttack
      console.log("GENERAL HEALTH after attack left", playerGeneralHealth);
      console.log("ENEMY HEALTH after attack left", enemyGeneralHealth);

      // enemy attack center
      console.log("ENEMY center", this.enemyCenterFlank, sum_enemy_center);
      if (this.checkHitOrBlock(sum_enemy_center, sum_player_center)) {
        playerGeneralHealth = this.applyAttack(sum_enemy_center, sum_player_center, playerGeneralHealth);
      }
      if (this.checkHitOrBlock(sum_player_center, sum_enemy_center)) {
        enemyGeneralHealth = this.applyAttack(sum_player_center, sum_enemy_center, enemyGeneralHealth);
      }

      // general health should update after applyAttack
      console.log("GENERAL HEALTH after attack center", playerGeneralHealth);
      console.log("ENEMY HEALTH after attack left", enemyGeneralHealth);

      // Update player_general health property with the calculated playerGeneralHealth
      this.playerGeneral[0].health = playerGeneralHealth;
      this.enemyGeneral[0].health = enemyGeneralHealth;
    }
  },
  mounted() {
    this.userId = this.$route.params.userId;
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
.hand-container {
  background-color: #ff6b6b;
  min-height: 100px;
  margin-top: 20px;
  position: relative;
  z-index: 1;
}
.general-card-container {
  width: 240px;
  height: 120px;
  border: 1px solid #666;
  background-color: #f2f2f2;
  margin: 10px;
  text-align: center;
  line-height: 120px;
}
.enemy-general-container {
  order: -1;
}
.player-general-container {
  order: 1;
  margin-top: 20px;
  z-index: 2;
}
</style>