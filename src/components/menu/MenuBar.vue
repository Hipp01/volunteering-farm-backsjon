<template>
    <div :class="{ 'transparent': isTransparent, 'dark': !isTransparent }" id="MenuBar">
      <b-container class="mt-2">
        <b-row>
          <b-col>
            <ButtonSideBar />
          </b-col>
          <b-col cols="12" md="auto">
            <ButtonLang />
          </b-col>
          <b-col col lg="2">
            <ButtonChangeTheme @toggle="toggleBackground" />
          </b-col>
        </b-row>
      </b-container>
    </div>
  </template>
  
  <script lang="ts">
  import { defineComponent, ref, onMounted, onUnmounted } from 'vue';
  import ButtonSideBar from './ButtonSideBar.vue';
  import ButtonLang from './ButtonLang.vue';
  import ButtonChangeTheme from './ButtonChangeTheme.vue';
  
  export default defineComponent({
    data() {
      return {
        isChecked: false
    };
    },
    methods: {
      toggleBackground() {
        this.isChecked = !this.isChecked;
      }
    },
    components: {
      ButtonSideBar,
      ButtonLang,
      ButtonChangeTheme,
    },
    setup() {
      const isTransparent = ref(true);
  
      const handleScroll = () => {
        isTransparent.value = window.scrollY === 0;
      };
  
      onMounted(() => {
        window.addEventListener('scroll', handleScroll);
      });
  
      onUnmounted(() => {
        window.removeEventListener('scroll', handleScroll);
      });
  
      return { isTransparent };
    },
  });
  </script>
  
  <style scoped>
  #MenuBar {
    position: fixed;
    z-index: 10;
    width: 100%;
    transition: background-color 0.3s ease;
  }
  
  .transparent {
    background-color: rgba(0, 0, 0, 0);
  }
  
  .dark {
    background-color: rgba(0, 0, 0, 0.8);
  }
  </style>
  