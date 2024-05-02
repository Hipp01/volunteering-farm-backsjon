<template>
    <div id="BackgroundSummer">
        <img src="../../assets/images/background/tulip.jpg" alt="Summer Background" width="100%"/>
        <div class="image-grid">
            <img v-for="(image, index) in randomImages" :key="index" :src="image.src" :style="{ transform: `rotate(${image.rotation}deg)` }" alt="Summer Background" class="background-image"/>
        </div>
    </div>
</template>

<script lang="ts">
import { ref } from 'vue';

export default {
  setup() {
    const images = [
      'src/assets/images/tulips/orange.png',
      'src/assets/images/tulips/pink.png',
      'src/assets/images/tulips/red.png',
      'src/assets/images/tulips/blue.png',
      'src/assets/images/tulips/purple.png',
      'src/assets/images/tulips/light-orange.png',
      'src/assets/images/tulips/white.png',
    ];

    const randomImages = ref([]);

    for(let i = 0; i < 80; i++) { // Adjust this value to change the number of images
      const randomImageSrc = images[Math.floor(Math.random() * images.length)];
      const randomRotation = Math.floor(Math.random() * 80) - 40; // Generate a random number between -60 and 60
      randomImages.value.push({ src: randomImageSrc, rotation: randomRotation });
    }

    return { randomImages };
  },
};
</script>

<style scoped>
@import "../../assets/backgroundSummer.css";
</style>