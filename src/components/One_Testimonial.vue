<template>
  <div class="bg-card rounded">
    <div class="aurora-inner">
      <b-container class="testimonials">
        <b-row class="py-3">
          <b-col cols="3" align-self="center" class="ms-2">
            <img :src="imageSrc" :alt="name.split(' ')[0]" class="img-fluid rounded-circle border-0 night">
          </b-col>
          <b-col>
            <h1 class="text-center">{{ name }}</h1>
            <p class="m-2">{{ testimonialText }}</p>
          </b-col>
        </b-row>
      </b-container>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  props: {
    name: {
      type: String,
      required: true
    },
    testimonialText: {
      type: String,
      required: true
    },
    imageSrc: {
      type: String,
      required: true
    }
  },
});
</script>

<style scoped>
.bg-card {
    background: linear-gradient(45deg, #32a6ff 0%, #3f6fff 49%, #54f585c4 82%);
    background-size: 200%;
    animation: aurora 10s infinite;
}

.aurora-inner {
    background: radial-gradient(rgba(255, 255, 255, 0), rgba(255, 255, 255, 0.15));
    background-size: 200%;
    animation: aurora 7s infinite;
}

@keyframes aurora {
    0% {
        background-position: left top;
    }
    25% {
        background-position: right top;
    }
    50% {
        background-position: right bottom;
    }
    75% {
        background-position: left bottom;
    }
    100% {
        background-position: left top;
    }
}

.night {
    box-shadow: 0 0 0 0.2em #2626ad;
}
</style>