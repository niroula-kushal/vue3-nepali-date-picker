<script setup lang="ts">
import { ref } from 'vue';
import VNepaliDatePicker from './components/VNepaliDatePicker.vue';
const date = ref<Date | null>(new Date());
const max = ref<Date | null>(new Date());
const allowedPastDays = ref<number>(5);
</script>

<template>
  Allowed Past Days: <input type="number" step="1" v-model="allowedPastDays">
  <VNepaliDatePicker v-model="date" :allow-clear="true" :year-select="true" :month-select="true" :max="max" :allowed-past-days="allowedPastDays" language="english">
    <template #clear-btn="{onClear}">
      <span class="clear-btn" @click.prevent="onClear">
          ❌
      </span>
    </template>
  </VNepaliDatePicker>
  <h3>
    Selected Date: {{date?.toDateString()}}
  </h3>
</template>

<style scoped>
.clear-btn {
  position: absolute;
  right: 0;
  top: 0;
}

</style>