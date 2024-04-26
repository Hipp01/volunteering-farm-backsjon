<template>
    <div id="MenuBar">
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
  import ButtonSideBar from './ButtonSideBar.vue';
  import ButtonLang from './ButtonLang.vue';
  import ButtonChangeTheme from './ButtonChangeTheme.vue';
  
  export default {
    methods: {
      toggleBackground(toggleState) {
        this.$emit('menuBarToggle', toggleState);
      }
    },
    components: {
      ButtonSideBar,
      ButtonLang,
      ButtonChangeTheme,
    }
  };
  </script>
  
<style scoped>
  #MenuBar {
    position: absolute;
    z-index: 10;
    width: 100%;
  }
</style>
  