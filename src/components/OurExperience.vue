<template>
  <div id="OurExperience" class="mb-5">
    <h1 class="text-center mb-5">{{ $t("Text.Titles.experience") }}</h1>
    <div>
      <b-container class="testimonials">
        <b-row>
          <b-col cols="5">
            <div id="carouselIndicators" class="carousel slide">
              <div class="carousel-inner same-height">
                <div class="carousel-item active">
                  <img src="../assets/images/farm/2.jpg" class="d-block mx-auto img-fluid same-height">
                </div>
                <div class="carousel-item">
                  <img src="../assets/images/farm/1.jpg" class="d-block mx-auto img-fluid same-height">
                </div>
                <div class="carousel-item">
                  <img src="../assets/images/farm/3.jpg" class="d-block mx-auto img-fluid same-height">
                </div>
                <div class="carousel-item">
                  <img src="../assets/images/farm/4.jpg" class="d-block mx-auto img-fluid same-height">
                </div>
                <div class="carousel-item">
                  <img src="../assets/images/farm/5.jpg" class="d-block mx-auto img-fluid same-height">
                </div>
                <div class="carousel-item">
                  <img src="../assets/images/farm/6.jpg" class="d-block mx-auto img-fluid same-height">
                </div>
                <div class="carousel-item">
                  <img src="../assets/images/farm/7.jpg" class="d-block mx-auto img-fluid same-height">
                </div>
                <div class="carousel-item">
                  <img src="../assets/images/farm/8.jpg" class="d-block mx-auto img-fluid same-height">
                </div>
                <div class="carousel-item">
                  <img src="../assets/images/farm/9.jpg" class="d-block mx-auto img-fluid same-height">
                </div>
                <div class="carousel-item">
                  <img src="../assets/images/farm/10.jpg" class="d-block mx-auto img-fluid same-height">
                </div>
                <div class="carousel-item">
                  <img src="../assets/images/farm/11.jpg" class="d-block mx-auto img-fluid same-height">
                </div>
                <div class="carousel-item">
                  <img src="../assets/images/farm/12.jpg" class="d-block mx-auto img-fluid same-height">
                </div>
                <div class="carousel-item">
                  <img src="../assets/images/farm/13.jpg" class="d-block mx-auto img-fluid same-height">
                </div>
                <div class="carousel-item">
                  <img src="../assets/images/farm/14.jpg" class="d-block mx-auto img-fluid same-height">
                </div>
                <div class="carousel-item">
                  <img src="../assets/images/farm/15.jpg" class="d-block mx-auto img-fluid same-height">
                </div>
                <div class="carousel-item">
                  <img src="../assets/images/farm/16.jpg" class="d-block mx-auto img-fluid same-height">
                </div>
                <div class="carousel-item">
                  <img src="../assets/images/farm/17.jpg" class="d-block mx-auto img-fluid same-height">
                </div>
                <div class="carousel-item">
                  <img src="../assets/images/farm/18.jpg" class="d-block mx-auto img-fluid same-height">
                </div>
                <div class="carousel-item">
                  <img src="../assets/images/farm/19.jpg" class="d-block mx-auto img-fluid same-height">
                </div>
                <div class="carousel-item">
                  <img src="../assets/images/farm/20.jpg" class="d-block mx-auto img-fluid same-height">
                </div>
                <div class="carousel-item">
                  <img src="../assets/images/farm/21.jpg" class="d-block mx-auto img-fluid same-height">
                </div>
                <div class="carousel-item">
                  <img src="../assets/images/farm/22.jpg" class="d-block mx-auto img-fluid same-height">
                </div>
                <div class="carousel-item">
                  <img src="../assets/images/farm/23.jpg" class="d-block mx-auto img-fluid same-height">
                </div>
                <div class="carousel-item">
                  <img src="../assets/images/farm/24.jpg" class="d-block mx-auto img-fluid same-height">
                </div>
              </div>
              <button class="carousel-control-prev" type="button" data-bs-target="#carouselIndicators" data-bs-slide="prev">
                <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                <span class="visually-hidden">Previous</span>
              </button>
              <button class="carousel-control-next" type="button" data-bs-target="#carouselIndicators" data-bs-slide="next">
                <span class="carousel-control-next-icon" aria-hidden="true"></span>
                <span class="visually-hidden">Next</span>
              </button>
            </div>
          </b-col>
          <b-col>
            <p class="mx-2">{{ $t("Text.experience") }}</p>
          </b-col>
        </b-row>
      </b-container>
    </div>
  </div>
</template>

<script lang="ts">
</script>

<style scoped>
.same-height {
  height: 500px; 
  object-fit: cover;
  border-radius: 5%;
}
p.mx-2 {
  white-space: pre-wrap;
}
</style>
