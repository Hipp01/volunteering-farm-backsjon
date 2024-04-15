<template>
    <div id="BackgroundWinter">
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
    </div>
</template>

<style scoped>
@import "../../assets/backgroundWinter.css";
</style>