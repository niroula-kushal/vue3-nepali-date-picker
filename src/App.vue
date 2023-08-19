<script setup lang="ts">
import { computed } from '@vue/reactivity';
import { ref, watch, watchEffect } from 'vue';
import VNepaliDatePicker, { DatePickerLangauges } from './components/VNepaliDatePicker.vue';

const date = ref<Date | null>(new Date());
const nepaliDate = ref<string|null>("");

const minDateValue = ref<string>("2020-01-01");
const maxDateValue = ref<string>("2030-01-01");

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
const disabled = ref<boolean>(false);
const allowInput = ref<boolean>(true);

const usage = ref<string>("");


watchEffect(() => {  
  let str = `
      const date = ref<Date | null>(new Date());
      const nepaliDate = ref<string | null>("");

      <VNepaliDatePicker v-model="date" v-model:nepali-date="nepaliDate"
          :allow-input="${allowInput.value}"
          :allow-clear="${allowClear.value}" 
          :allowed-past-days="${allowedPastDays.value}" 
          :allowed-future-days="${allowedFutureDays.value}" 
          :input-classes="${inputClasses.value}"
          :nepali-date-format="${inputDateFormat.value}"
          :year-select="${yearSelect.value}"
          :month-select="${monthSelect.value}"
          :year-count="${yearCount.value}"
          :max="new Date("${max.value.getFullYear()}-${max.value.getMonth()+1}-${max.value.getDate()}")" // a date instance
          :min="new Date("${min.value.getFullYear()}-${min.value.getMonth()+1}-${min.value.getDate()}")" // a date instance
          :language="${language.value}"
          :disabled="${disabled.value}"
        >
          <template #clear-btn="{onClear}">
            <span class="clear-btn" @click.prevent="onClear">
                ❌
            </span>
          </template>
        </VNepaliDatePicker>
  `;
  usage.value = str;
});


</script>

<template>
  <div class="grid">
    <div class="sidebar">
      <h1 class="mb-0">Props</h1>
      <hr>
      <p>
        Allow Input: <input type="checkbox" v-model="allowInput" />
        <br/>
        <small>Allow/disallow user input of date
          <strong>
            Default: true
          </strong>
        </small>
      </p>
      <p>
        Allow Clear: <input type="checkbox" v-model="allowClear">
        <br/>
        <small>Allow/disallow clearing selected value. If allowClear is true, the returned date may be null. 
          <strong>
            Default: false
          </strong>
        </small>
      </p>
      <p>
        Disabled: <input type="checkbox" v-model="disabled">
        <br/>
        <small>Disable the date picker
          <strong>
            Default: false
          </strong>
        </small>
      </p>
      <p>
        Year Select: <input type="checkbox" v-model="yearSelect">
        <br/>
        <small>Show/hide year select
          <strong>
            Default: false
          </strong>
        </small>
      </p>
      <p>
        Month Select: <input type="checkbox" v-model="monthSelect">
        <br/>
        <small>Show/hide month select
          <strong>
            Default: false
          </strong>
        </small>
      </p>
      <p>
        Input Classes
        <input type="text" v-model="inputClasses" class="w-full">
        <br/>
        <small>Extra classes to add to input element.

          <strong>
            Default: ""
          </strong>

        </small>
      </p>
      <p>
        Nepali Date Format
        <input type="text" v-model="inputDateFormat" class="w-full">
        <br/>
        <small>The format of the date shown in the input.

          <strong> Default: "YYYY-MM-DD" </strong>
        </small>

      </p>
      <p>
        Year Count: <input type="number" v-model="yearCount" class="w-full">
        <br/>
        <small>Number of years to show in year select. Applicable only when yearSelect is true.
          <strong>
            Default: 10
          </strong>
        </small>
      </p>
      <p>
        Min Date: <input type="date" v-model="minDateValue" class="w-full">
        <br/>
        <small>The min date allowed.
          <strong>
            Default: null for no restriction
          </strong>
        </small>
      </p>
      <p>
        Max Date: <input type="date" v-model="maxDateValue" class="w-full">
        <br/>
        <small>The max date allowed
          <strong>
            Default: null for no restriction
          </strong>
        </small>
      </p>
      <p>
        Allowed Past Days
        <input type="number" step="1" v-model="allowedPastDays" class="w-full">
        <br/>
        <small>The max past days allowed.

          <strong>
            Default: -1 for no restriction
          </strong>
        </small>
      </p>
      <p>
        Allowed Future Days
        <input type="number" step="1" v-model="allowedFutureDays" class="w-full">
        <br/>
        <small>The max future days allowed.
          <strong>
            Default: -1 for no restriction
          </strong>

        </small>
      </p>
      <p>
        Language
        <select v-model="language" class="w-full">
          <option>english</option>
          <option>nepali</option>
        </select>
        <br/>
        <small>The language used to show calendar
          <strong>
             Default: nepali
          </strong>
        </small>
      </p>

      <h1 class="mb-0">
        Slots
      </h1>
      <hr/>
      #clear-btn {onClear : () => void} <br/>
      <small>
        Slot to render custom clear button [OPTIONAL]. <br/>
         Call onClear to clear date
      </small>
      <textarea readonly rows="10" class="w-full">
        <template #clear-btn="{onClear}">
            <span class="clear-btn" @click.prevent="onClear">
                ❌
            </span>
          </template>
      </textarea>
    </div>
    <div class="content">
        <VNepaliDatePicker v-model="date" v-model:nepali-date="nepaliDate"
          :allow-input="allowInput"
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
        :disabled="disabled"
        >
          <template #clear-btn="{onClear}">
            <span class="clear-btn" @click.prevent="onClear">
                ❌
            </span>
          </template>
        </VNepaliDatePicker>
        <h3>
          Selected Date: {{date?.toDateString()}} AD <br/>
          Nepali Date: {{nepaliDate}} BS
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
  max-height: 90vh;
  overflow: auto;
  padding: 20px;
  align-self: center;
}

.content {
    grid-column-start: 2;
    padding: 10px;
    width: 50%;
}

.w-full {
  width: 100%;
}

.mb-0 { margin-bottom: 0;}

@media screen and (max-width: 720px) {
  .grid {
    grid-template-columns: 1fr;
    grid-auto-rows: minmax(100vh, 1fr);
  }
  .sidebar {
    height: auto;
    min-height: max-content;
  }
  .content {
    grid-row-start: 2;
    grid-column-start: 1;
    width: 100%;
  }
}

</style>