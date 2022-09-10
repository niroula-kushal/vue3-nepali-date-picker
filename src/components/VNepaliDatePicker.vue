<template>
    <div class="wrapper">
        <input type="text" placeholder="yyyy-mm-dd" ref="elm" :value="dateValue" :class="inputClasses"/>
        <slot v-if="allowClear" :on-clear="onClear" name="clear-btn">
            <span class="clear-btn" @click.prevent="onClear"
                style="position: absolute;right: 5px;top: 50%;transform: translateY(-50%);color: gray;cursor: pointer;"
            >
                X
            </span>
        </slot>
    </div>
</template>
<script lang="ts" setup>
import { onMounted, ref, computed, watch } from 'vue';

// @ts-ignore
import NepaliFunctions from '../nepali-date-picker/NepaliFunctions.js';
import '../nepali-date-picker/nepali-date-picker.js';
import '../nepali-date-picker/nepali-date-picker.css';

export type DatePickerLangauges =  "english" | "nepali";

const props = defineProps<{
    modelValue: Date | null,
    nepaliDate?: string | null,
    allowClear?: boolean,
    inputClasses?:string,
    nepaliDateFormat?: string,
    yearSelect?: boolean,
    monthSelect?: boolean,
    yearCount?: number,
    min?: Date | null,
    max?: Date | null,
    allowedPastDays?: number,
    allowedFutureDays?: number,
    language?: DatePickerLangauges
}>();

const emit = defineEmits<{
    (e: "update:modelValue", value: Date | null): void,
    (e: "update:nepaliDate", value:string|null):void
}>();

const elm = ref<HTMLElement | null>(null);

const changeableProps = computed(() => ({
    allowedPastDays: props.allowedPastDays,
    yearSelect: props.yearSelect,
    monthSelect: props.monthSelect,
    yearCount: props.yearCount,
    nepaliDateFormat: props.nepaliDateFormat,
    allowedFutureDays: props.allowedFutureDays,
    min: props.min,
    max: props.max,
    language: props.language
}));

const nepaliDateFormat = computed<string>(() => props.nepaliDateFormat ?? "MM/DD/YYYY");

const dateValue = computed<string>(() => convertAdDateToFormattedBsDate(props.modelValue));

const onClear = () => {
    emit("update:modelValue", null);
};

function convertAdDateToFormattedBsDate(date: Date | null | undefined) {
    if (date === null || date === undefined) return "";
    // @ts-ignore
    const dateObj = NepaliFunctions.AD2BS({
        year: date.getFullYear(),
        month: date.getMonth() + 1,
        day: date.getDate()
    });
    return NepaliFunctions.ConvertDateFormat(dateObj, nepaliDateFormat.value);
}

function emitNepaliDate(value: string|null) {
    emit("update:nepaliDate", value);
}

watch(() => changeableProps.value, () => {
    initializeDatePicker();
});

watch(() => dateValue.value, (value) => {
    emitNepaliDate(value);
})

onMounted(() => {
    initializeDatePicker();
    emitNepaliDate(dateValue.value);
});

function initializeDatePicker() {
    // @ts-ignore
    elm.value.nepaliDatePicker({
        dateFormat: nepaliDateFormat.value,
        ndpYear: props.yearSelect,
        ndpMonth: props.monthSelect,
        ndpYearCount: props.yearCount ?? 10,
        disableBefore: convertAdDateToFormattedBsDate(props.min),
        disableAfter: convertAdDateToFormattedBsDate(props.max),
        disableDaysBefore: props.allowedPastDays ?? -1,
        disableDaysAfter: props.allowedFutureDays ?? -1,
        readOnlyInput: true,
        language: props.language,
        onChange(date: { ad: string, bs: string }) {
            emit("update:modelValue", new Date(date.ad));
        }
    });
};

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
    right: 5px;
    top: 50%;
    transform: translateY(-50%);
    color: gray;
    cursor: pointer;
}
</style>