<template>
  <div class="col-sm-12 col-md-6 col-lg-4 mb-4">
    <div class="card-container">
      <div class="card text-dark card-has-bg">
        <div class="card-front" :style="'background-image: url(' + era.picture + ');'">
          <img class="card-img d-none" :src="era.picture" alt="Card Image">
          <div class="card-img-overlay d-flex flex-column">
            <div class="card-body">
              <div class="title-container" style="position: relative;">
                <h5 class="card-title">{{ era.name }}</h5>
                <p>{{ era.description }}</p>
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
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "eraTemplate",
  props: {
    era: Object,
  },
}
</script>