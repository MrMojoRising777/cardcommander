<!--base template for cards-->
<template>
  <div class="col-sm-12 col-md-6 col-lg-4 mb-4">
    <div class="card-container" @click="flipCard" :style="{ width: `${width}px`, height: `${height}px` }">
      <div class="card text-dark card-has-bg" :class="{ flipped: isFlipped }">
        <div class="card-front" :style="'background-image: url(' + card.picture + ');'">
          <img class="card-img d-none" :src="card.picture" alt="Card Image">
          <div class="card-img-overlay d-flex flex-column">
            <div class="card-body">
              <div class="title-container" style="position: relative;">
                <div class="box red-box top-left">
                  <span class="material-symbols-outlined">swords</span>
                  {{ card.attack }}
                </div>
                <h5 class="card-title">{{ card.name }}</h5>
                <div class="box blue-box top-right">
                  <span class="material-symbols-outlined">shield</span>
                  {{ card.defence }}
                </div>

                <div class="box yellow-box center">
                  <span class="material-symbols-outlined">lightbulb</span>
                  {{ card.intelligence }}
                </div>
              </div>
            </div>
            <div class="card-footer">
                <div class="media">
                  <!-- <img class="mr-3 rounded-circle" src="https://assets.codepen.io/460692/internal/avatars/users/default.png?format=auto&version=1688931977&width=80&height=80" alt="Generic placeholder image" style="max-width:50px"> -->
                  <div class="media-body">
                    <h6 class="my-0 text-dark d-block">TEXT</h6>
                    <small>small text</small>
                  </div>
                </div>
              </div>
          </div>
        </div>
        <div class="card-back">
          <div class="card-body">
            <h5 class="card-title">{{ card.name }}</h5>
            <p>{{ card.description }}</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    props: {
      card: Object,
      height: Number,
      width: Number,
    },
    data() {
      return {
        isFlipped: false,
      };
    },
    methods: {
      flipCard() {
        this.isFlipped = !this.isFlipped;
      },
    },
  };
</script>

<style>
.card-container {
  width: 100%; /*width = prop*/
  height: 100%; /*height = prop*/
  perspective: 1000px;
  cursor: pointer;
  margin: 0 auto;
}

.card {
  width: 100%;
  height: 100%;
  position: relative;
  transform-style: preserve-3d;
  transition: transform 0.5s, box-shadow 0.5s;
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.2);
  border-radius: 10px;
}

.card .card-front,
.card .card-back {
  width: 100%;
  height: 100%;
  position: absolute;
  backface-visibility: hidden;
  transition: opacity 0.5s, transform 0.5s;
  border-radius: 10px;
}

.card .card-front {
  transform: rotateY(0deg);
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center center;
  color: #000;
  opacity: 1;
}

.card .card-back {
  transform: rotateY(180deg);
  background-image: url('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRVy5fl61NHJKyHc2u2kgJncxbyuXoez-DFGg&usqp=CAU');
  background-size: contain;
  background-repeat: no-repeat;
  color: #000;
  opacity: 0;
}

.card.flipped .card-front {
  transform: rotateY(180deg);
  opacity: 0;
}

.card.flipped .card-back {
  transform: rotateY(0deg);
  opacity: 1;
}

.card-img {
  width: 100%;
  height: auto;
}

.card-body {
  padding: 20px;
  text-align: center;
  border-radius: 10px;
}

.card-title {
  font-size: 20px;
  font-weight: bold;
}

.top-left {
  position: absolute;
  top: 0;
  left: 0;
  background-color: red;
  color: white;
  border-radius: 50%;
  padding: 5px;
  font-size: 18px;
}

.top-right {
  position: absolute;
  top: 0;
  right: 0;
  background-color: blue;
  color: white;
  border-radius: 50%;
  padding: 5px;
  font-size: 18px;
}

.card {
  border: none;
  transition: all 500ms cubic-bezier(0.19, 1, 0.22, 1);
  overflow: hidden;
  border-radius: 20px;
  min-height: 450px;
  box-shadow: 0 0 12px 0 rgba(0, 0, 0, 0.2);

  @media (max-width: 768px) {
    min-height: 350px;
  }

  @media (max-width: 420px) {
    min-height: 300px;
  }

  &.card-has-bg {
    transition: all 500ms cubic-bezier(0.19, 1, 0.22, 1);
    background-size: 120%;
    background-repeat: no-repeat;
    background-position: center center;
    &:before {
      content: '';
      position: absolute;
      top: 0;
      right: 0;
      bottom: 0;
      left: 0;
      background: inherit;
      /* -webkit-filter: grayscale(1);
      -moz-filter: grayscale(100%);
      -ms-filter: grayscale(100%);
      -o-filter: grayscale(100%);
      filter: grayscale(100%); */
    }

    &:hover {
      transform: scale(0.98);
      box-shadow: 0 0 5px -2px rgba(0, 0, 0, 0.3);
      background-size: 130%;
      transition: all 500ms cubic-bezier(0.19, 1, 0.22, 1);

      .card-img-overlay {
        transition: all 800ms cubic-bezier(0.19, 1, 0.22, 1);
      }
    }
  }

  .card-footer {
    background: none;
    border-top: none;
    .media {
      img {
        border: solid 3px rgba(255, 255, 255, 0.3);
      }
    }
  }

  .card-title {
    font-weight: 800;
  }

  .card-meta {
    color: rgba(0, 0, 0, 0.3);
    text-transform: uppercase;
    font-weight: 500;
    letter-spacing: 2px;
  }

  .card-body {
    transition: all 500ms cubic-bezier(0.19, 1, 0.22, 1);
  }

  &:hover {
    .card-body {
      margin-top: 30px;
      transition: all 800ms cubic-bezier(0.19, 1, 0.22, 1);
    }
    cursor: pointer;
    transition: all 800ms cubic-bezier(0.19, 1, 0.22, 1);
  }

  .card-img-overlay {
    transition: all 800ms cubic-bezier(0.19, 1, 0.22, 1);
  }
}
</style>