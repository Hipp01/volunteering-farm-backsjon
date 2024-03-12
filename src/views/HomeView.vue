<template>
    <div>
        <Navbar />
        <div class="canvas">
            <div class="stars" v-for="n in 3" :key="n">
                <div class="star"></div>
            </div>
            <section class="moon">
                <div v-for="n in 8" :key="n" :class="'crater--' + n"></div>
            </section>
            <div class="trees">
                <div v-for="n in 2" class="tree" :key="n"></div>
            </div>
            <div class="lights">
                <div v-for="n in 12" class="borealis" :key="n"></div>
            </div>
        </div>
        <div class="overlay">
            <HeaderView />
            <Introduction />
            <Experience />
            <Testimonials />
            <Contact />
            <FooterView />
        </div>
        
    </div>
</template>
  
<script>
    import Navbar from '@/components/Navbar.vue';
    import HeaderView from '@/components/HeaderView.vue';
    import Introduction from '@/components/Introduction.vue';
    import Experience from '@/components/Experience.vue';
    import Testimonials from '@/components/Testimonials.vue';
    import Contact from '@/components/Contact.vue';
    import FooterView from '@/components/FooterView.vue';
  
    export default {
        components: {
            Navbar,
            HeaderView,
            Introduction,
            Experience,
            Testimonials,
            Contact,
            FooterView,
        },
    }
</script>

<style scoped>
@import "@/assets/styles.css";
@import "@/assets/backgroundWinter.css";
</style>
