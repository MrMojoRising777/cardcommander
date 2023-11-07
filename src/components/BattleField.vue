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
        <div class="flank left-flank player-flank">
          <!-- Your Left Flank Area for Cards -->
          Left
        </div>
        <div class="flank center-flank player-flank">
          <!-- Your Center Flank Area for Cards -->
          Center
        </div>
        <div class="flank right-flank player-flank">
          <!-- Your Right Flank Area for Cards -->
          Right
        </div>
      </div>
    </div>
  </div>
</template>

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

<script>
export default {
  name: "cardBattleField"
};
</script>