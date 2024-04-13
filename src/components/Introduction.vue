<template>
    <div id="Introduction">
      <h1 class="text-center mb-3">{{ $t("Text.Titles.introduction")}}</h1>
      <div>
        <b-container>
          <b-row>
            <b-col>
              <p class="mx-3">
                {{ $t("Text.introduction") }}
              </p>
            </b-col>
            <b-col>
            </b-col>
          </b-row>
        </b-container>
      </div>
    </div>
</template>
  
<script lang="ts">
  import { defineComponent } from 'vue';
  
  export default defineComponent({
  });
</script>
  
<style scoped>
</style>
  