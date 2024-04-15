<template>
    <div id="HomeView">
        <MenuBar :isChecked="isChecked" />
        <SideBar />
        <div id="background">
            <BackgroundWinter v-if="!isChecked" />
            <BackgroundSummer v-else />
        </div>
        <div class="overlay">
            <HeaderView />
            <IntroductionText />
            <OurExperience />
            <SomeTestimonials />
            <ContactUs />
            <FooterView />
        </div>
    </div>
</template>
  
<script>
    import MenuBar from '@/components/menu/MenuBar.vue';
    import SideBar from '@/components/menu/SideBar.vue';
    import BackgroundWinter from '@/components/backgrounds/BackgroundWinter.vue';
    import BackgroundSummer from '@/components/backgrounds/BackgroundSummer.vue';
    import HeaderView from '@/components/HeaderView.vue';
    import IntroductionText from '@/components/IntroductionText.vue';
    import OurExperience from '@/components/OurExperience.vue';
    import SomeTestimonials from '@/components/SomeTestimonials.vue';
    import ContactUs from '@/components/ContactUs.vue';
    import FooterView from '@/components/FooterView.vue';
  
    export default {
        data() {
            return {
                isChecked: false
            };
        },
        components: {
            MenuBar,
            SideBar,
            BackgroundWinter,
            BackgroundSummer,
            HeaderView,
            IntroductionText,
            OurExperience,
            SomeTestimonials,
            ContactUs,
            FooterView,
        },
    }
</script>

<style scoped>
@import "../assets/styles.css";
</style>
