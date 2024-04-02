<template>
    <div id="BackgroundWinter">
        <div class="canvas">
            <b-container>
    <b-row>
        <b-col cols="auto">
            <ButtonSideBar />
        </b-col>
        <b-col cols="auto" class="ml-auto">
            <ButtonLang />
        </b-col>
    </b-row>
</b-container>

            <!-- <ButtonSideBar />
            <ButtonLang /> -->
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
    </div>
</template>

<script lang="ts">
import ButtonSideBar from './ButtonSideBar.vue';
import ButtonLang from './ButtonLang.vue';

export default {
    components: {
        ButtonSideBar,
        ButtonLang,
    },
}
</script>

<style scoped>
@import "../assets/backgroundWinter.css";
</style>