<template>
  <div id="ApplicationForm" class="mb-5">
    <VDatePicker v-model.range="selectedRange" :disabled-dates="disabledDates" mode="date" />
    <div v-if="selectedRange !== null">
      <p>Dates sélectionnées :</p>
      <ul>
        <li>{{ formatDate(selectedRange.start) }} - {{ formatDate(selectedRange.end) }}</li>
      </ul>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';

const selectedRange = ref(null);
const disabledDates = ref([]);

const today = new Date();
for (let i = 1; i <= 100; i++) {
  const date = new Date(today);
  date.setDate(today.getDate() - i + 1);
  disabledDates.value.push(date);
}

const formatDate = (date) => {
  const options = { year: 'numeric', month: 'long', day: 'numeric' };
  return date.toLocaleDateString('fr-FR', options);
};
</script>
