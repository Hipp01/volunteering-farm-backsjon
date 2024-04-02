<template>
    <div id="HomeView">
        <SideBar />
        <BackgroundWinter />
        <div class="overlay">
            <HeaderView />
            <Introduction />
            <Experience />
            <Testimonials />
            <ContactUs />
            <FooterView />
        </div>
    </div>
</template>
  
<script>
    import SideBar from '@/components/SideBar.vue';
    import BackgroundWinter from '@/components/BackgroundWinter.vue';
    import HeaderView from '@/components/HeaderView.vue';
    import Introduction from '@/components/Introduction.vue';
    import Experience from '@/components/Experience.vue';
    import Testimonials from '@/components/Testimonials.vue';
    import ContactUs from '@/components/ContactUs.vue';
    import FooterView from '@/components/FooterView.vue';
  
    export default {
        components: {
            SideBar,
            BackgroundWinter,
            HeaderView,
            Introduction,
            Experience,
            Testimonials,
            ContactUs,
            FooterView,
        },
    }
</script>

<style scoped>
@import "@/assets/styles.css";
</style>
