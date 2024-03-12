<template>
  <div>
    <h1 class="text-center">Témoignages</h1>
    <div>
      <b-container class="testimonials">
        <b-row>
          <b-col v-for="(testimonial, index) in testimonials"
              :key="index"
              :cols="(index === testimonials.length - 1 && testimonials.length % 2 !== 0) ? 12 : 6"
              :md="(index % 2 === 0) ? 6 : null"
              class="my-3"
              :class="{ 'offset-md-3': index === testimonials.length - 1 && testimonials.length % 2 !== 0 }"
            >
            <OneTestimonial
        :name="testimonial.name"
        :testimonialText="testimonial.testimonialText"
        :imageSrc="testimonial.imageSrc"
      />
          </b-col>
        </b-row>
      </b-container>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import OneTestimonial from './One_Testimonial.vue';

export default defineComponent({
  components: {
    OneTestimonial,
  },
  data() {
    return {
      testimonials: [
        {
          name: 'Hippolyte Larzul',
          testimonialText: 'Cette expérience avec les chiens de traîneau m\'a transporté dans un monde d\'aventure et de découvertes. Une expérience unique, entre complicité avec les animaux et exploration des paysages nordiques, à recommander à tous les passionnés d\'évasion.',
          imageSrc: 'src/assets/images/testimonials/Hippo.png',
        },
        {
          name: 'Héloïse Cagnard',
          testimonialText: 'lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
          imageSrc: 'src/assets/images/testimonials/Helo.jpg',
        },
        {
          name: 'Linard XXX',
          testimonialText: 'lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
          imageSrc: 'src/assets/images/testimonials/Linard.jpg',
        },
      ]
    };
  }
});
</script>

<style scoped>
</style>
