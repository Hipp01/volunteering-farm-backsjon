<template>
  <div id="Testimonials">
    <h1 class="text-center">{{ $t("Text.Titles.testimonials")}}</h1>
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
          testimonialText: this.$t("Text.Testimonials.Hippo"),
          imageSrc: 'src/assets/images/testimonials/Hippo.png',
        },
        {
          name: 'Héloïse Cagnard',
          testimonialText: this.$t("Text.Testimonials.Helo"),
          imageSrc: 'src/assets/images/testimonials/Helo.jpg',
        },
        {
          name: 'Linard XXX',
          testimonialText: this.$t("Text.Testimonials.Linard"),
          imageSrc: 'src/assets/images/testimonials/Linard.jpg',
        },
      ]
    };
  }
});
</script>

<style scoped>
</style>
