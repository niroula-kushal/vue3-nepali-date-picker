<script setup lang="ts">
import { computed } from '@vue/reactivity';
import { ref } from 'vue';
import VNepaliDatePicker, { DatePickerLangauges } from './components/VNepaliDatePicker.vue';
const date = ref<Date | null>(new Date());

const minDateValue = ref<string>("2020-01-01");
const maxDateValue = ref<string>("2023-01-01");

const min = computed<Date>(() => new Date(minDateValue.value));
const max = computed<Date>(() => new Date(maxDateValue.value));

const allowedPastDays = ref<number>(-1);
const allowedFutureDays = ref<number>(-1);
const inputClasses = ref<string>("");
const inputDateFormat = ref<string>("YYYY-MM-DD");
const yearSelect = ref<boolean>(false);
const monthSelect = ref<boolean>(false);
const allowClear = ref<boolean>(true);
const yearCount = ref<number>(10);
const language = ref<DatePickerLangauges>("nepali");

const usage = computed<string>(() => {
  let str = `
      const date = ref<Date | null>(new Date());

      <VNepaliDatePicker v-model="date" 
          :allow-clear="${allowClear.value}" 
          :allowed-past-days="${allowedPastDays.value}" 
          :allowed-future-days="${allowedFutureDays.value}" 
          :input-classes="${inputClasses.value}"
          :nepali-date-format="${inputDateFormat.value}"
          :year-select="${yearSelect.value}"
          :month-select="${monthSelect.value}"
          :year-count="${yearCount.value}"
          :max="new Date("${max.value.getFullYear()}-${max.value.getMonth()+1}-${max.value.getDate()}")" 
          :min="new Date("${min.value.getFullYear()}-${min.value.getMonth()+1}-${min.value.getDate()}")" 
          :language="${language.value}"
        >
          <template #clear-btn="{onClear}">
            <span class="clear-btn" @click.prevent="onClear">
                ❌
            </span>
          </template>
        </VNepaliDatePicker>
  `;
  return str;
});

</script>

<template>
  <div class="grid">
    <div class="sidebar">
      <p>
        Allow Clear: <input type="checkbox" v-model="allowClear">
      </p>
      
      <p>
        Year Select: <input type="checkbox" v-model="yearSelect">
      </p>
      <p>
        Month Select: <input type="checkbox" v-model="monthSelect">
      </p>
      <p>
        Input Classes
        <input type="text" v-model="inputClasses" class="w-full">
      </p>
      <p>
        Nepali Date Format
        <input type="text" v-model="inputDateFormat" class="w-full">
      </p>
      <p>
        Year Count: <input type="number" v-model="yearCount" class="w-full">
      </p>
      <p>
        Min Date: <input type="date" v-model="minDateValue" class="w-full">
      </p>
      <p>
        Max Date: <input type="date" v-model="maxDateValue" class="w-full">
      </p>
      <p>
        Allowed Past Days
        <input type="number" step="1" v-model="allowedPastDays" class="w-full">
      </p>
      <p>
        Allowed Future Days
        <input type="number" step="1" v-model="allowedFutureDays" class="w-full">
      </p>
      <p>
        Language
        <select v-model="language" class="w-full">
          <option>english</option>
          <option>nepali</option>
        </select>
      </p>
    </div>
    <div class="content">
        <VNepaliDatePicker v-model="date" 
          :allow-clear="allowClear" 
          :allowed-past-days="allowedPastDays" 
          :allowed-future-days="allowedFutureDays" 
          :input-classes="inputClasses"
          :nepali-date-format="inputDateFormat"
          :year-select="yearSelect"
          :month-select="monthSelect"
          :year-count="yearCount"
          :max="max" 
          :min="min"
          :language="language"
        >
          <template #clear-btn="{onClear}">
            <span class="clear-btn" @click.prevent="onClear">
                ❌
            </span>
          </template>
        </VNepaliDatePicker>
        <h3>
          Selected Date: {{date?.toDateString()}}
        </h3>
        <hr/>
        <textarea readonly v-model="usage" class="w-full" rows="30">
        </textarea>
    </div>
  </div>
</template>

<style scoped>
.clear-btn {
  position: absolute;
  right: 0;
  top: 0;
}

.grid {
  display: grid;
  grid-template-columns: 30% 1fr;
  gap: 10px;
  padding: 10px;
  height: 100vh;
}

.sidebar {
  grid-column-start: 1;
  background-color: rgb(210 210 210);
  box-shadow: 1px 2px 6px rgba(0,0,0, .3);
  border-radius: 25px;
  height: 100%;
  padding: 20px;
}

.content {
    grid-column-start: 2;
    padding: 10px;
    width: 50%;
}

.w-full {
  width: 100%;
}

@media screen and (max-width: 720px) {
  .grid {
    grid-template-columns: 1fr;
  }
  .sidebar {
    height: auto;
  }
  .content {
    grid-row-start: 2;
    grid-column-start: 1;
    width: 100%;
  }
}

</style>