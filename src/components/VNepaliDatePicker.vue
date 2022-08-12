<template>
<div class="wrapper">
    <input type="text" placeholder="yyyy-mm-dd" ref="elm" :value="dateValue"/>
    <slot v-if="allowClear" :on-clear="onClear" name="clear-btn">
        <span  class="clear-btn" @click.prevent="onClear">
            X
        </span>
    </slot>
</div>
</template>
<script lang="ts" setup>
import { onMounted, ref, computed } from 'vue';

import NepaliFunctions from '../nepali-date-picker/NepaliFunctions.js';
import '../nepali-date-picker/nepali-date-picker.js';
import '../nepali-date-picker/nepali-date-picker.css';


const props = defineProps<{
    modelValue: Date | null,
    nepaliDateFormat?: string,
    allowClear?: boolean,
    yearSelect?: boolean,
    monthSelect?: boolean,
    yearCount?: number,
    min?: Date | null,
    max?: Date | null
}>();

const emit = defineEmits<{
    (e: "update:modelValue", value: Date | null): void
}>();

const elm = ref<HTMLElement | null>(null);

const nepaliDateFormat = computed<string>(() => props.nepaliDateFormat ?? "MM/DD/YYYY");

const dateValue = computed<string>(() => convertAdDateToFormattedBsDate(props.modelValue));

const onClear = () => {
    emit("update:modelValue", null);
};

function convertAdDateToFormattedBsDate(date: Date | null | undefined){
    if(date === null || date === undefined) return "";
     // @ts-ignore
    const dateObj = NepaliFunctions.AD2BS({
        year: date.getFullYear(),
        month: date.getMonth() + 1,
        day: date.getDate()
    });
    return NepaliFunctions.ConvertDateFormat(dateObj, nepaliDateFormat.value);
}

onMounted(() => {
    // @ts-ignore
    elm.value.nepaliDatePicker({
        dateFormat: nepaliDateFormat.value,
        ndpYear: props.yearSelect,
        ndpMonth: props.monthSelect,
        ndpYearCount: props.yearCount ?? 10,
        disableBefore: convertAdDateToFormattedBsDate(props.min),
        disableAfter: convertAdDateToFormattedBsDate(props.max),
        readOnlyInput: true,
        onChange(date: {ad: string,bs:string}) {
            emit("update:modelValue", new Date(date.ad));
        }
    });
});

</script>

<style scoped>
.wrapper {
    position: relative;
}
.wrapper input {
    width: 100%;
}
.clear-btn {
    position: absolute;
    right: 0;
    top: 50%;
    transform: translateY(-50%);
    color: gray;
    cursor: pointer;
}
</style>