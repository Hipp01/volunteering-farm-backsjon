<template>
    <div>
        <HeaderView />
        <Introduction />
        <Experience />
        <Testimonials />
        <Contact />
        <FooterView />
    </div>
</template>
  
<script>
    import HeaderView from '@/components/HeaderView.vue';
    import Introduction from '@/components/Introduction.vue';
    import Experience from '@/components/Experience.vue';
    import Testimonials from '@/components/Testimonials.vue';
    import Contact from '@/components/Contact.vue';
    import FooterView from '@/components/FooterView.vue';
  
    export default {
        components: {
            HeaderView,
            Introduction,
            Experience,
            Testimonials,
            Contact,
            FooterView,
        },
    }
</script>
  