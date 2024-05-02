<template>
    <VDatePicker v-model.range="range" :disabled-dates="disabledDates" />
  </template>
  
<script setup>
import { ref } from 'vue';

const range = ref(null);
const disabledDates = ref([]);

const today = new Date();
for (let i = 1; i <= 30; i++) {
  const date = new Date(today);
  date.setDate(today.getDate() - i);
  disabledDates.value.push(date);
}
</script>
