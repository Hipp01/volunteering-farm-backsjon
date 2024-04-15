<template>
  <div id="Testimonials">
    <h1 class="text-center">{{ $t("Text.Titles.testimonials")}}</h1>
    <div>
      <b-container class="testimonials">
        <b-row class="justify-content-center align-items-center g-3">
          <b-col class="col-lg-6 col-12" v-for="testimonial in testimonials" :key="testimonial.name"
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
