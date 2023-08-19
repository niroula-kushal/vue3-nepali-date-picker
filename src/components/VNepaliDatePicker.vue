<template>
    <div class="wrapper">
        <input type="text" placeholder="yyyy-mm-dd" ref="elm" :value="dateValue" :class="inputClasses"
            :disabled="disabled" />
        <slot v-if="allowClear && !disabled" :on-clear="onClear" name="clear-btn">
            <span class="clear-btn" @click.prevent="onClear">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                    stroke="currentColor" class="w-6 h-6">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
                </svg>
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

export type DatePickerLangauges = "english" | "nepali";

const props = withDefaults(defineProps<{
    modelValue: Date | null,
    nepaliDate?: string | null,
    allowClear?: boolean,
    inputClasses?: string,
    nepaliDateFormat?: string,
    yearSelect?: boolean,
    monthSelect?: boolean,
    yearCount?: number,
    min?: Date | null,
    max?: Date | null,
    allowedPastDays?: number,
    allowedFutureDays?: number,
    language?: DatePickerLangauges
    disabled?: boolean,
    allowInput?: boolean
}>(), {
    allowInput: true
});

const emit = defineEmits<{
    (e: "update:modelValue", value: Date | null): void,
    (e: "update:nepaliDate", value: string | null): void
}>();

const elm = ref<HTMLInputElement | null>(null);

const changeableProps = computed(() => ({
    allowedPastDays: props.allowedPastDays,
    yearSelect: props.yearSelect,
    monthSelect: props.monthSelect,
    yearCount: props.yearCount,
    nepaliDateFormat: props.nepaliDateFormat,
    allowedFutureDays: props.allowedFutureDays,
    min: props.min,
    max: props.max,
    language: props.language,
    allowInput: props.allowInput
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

function emitNepaliDate(value: string | null) {
    emit("update:nepaliDate", value);
}

watch(() => changeableProps.value, () => {
    // @ts-ignore
    elm.value && elm.value.nepaliDatePicker("remove");
    initializeDatePicker();
}, {
    deep: true
});

watch(() => dateValue.value, (value) => {
    emitNepaliDate(value);
})

onMounted(() => {
    initializeDatePicker();
    elm.value?.addEventListener('change', onUserInput as any);
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
        readOnlyInput: !props.allowInput,
        language: props.language,
        onChange(date: { ad: string, bs: string }) {
            emit("update:modelValue", new Date(date.ad));
        }
    });
};

function onUserInput({ target } : { target: EventTarget} ) {
    const value = (target as HTMLInputElement).value ?? "";
    const dateObj = NepaliFunctions.ConvertToDateObject(value, props.nepaliDateFormat) ?? { year: 0, month: 0, day: 0 };
    document.querySelector("#ndp-nepali-box")?.remove();
    if (!NepaliFunctions.ValidateBsDate(dateObj)) {
        // @ts-ignore
        elm.value.value = dateValue.value; //Not resetting value. Setting the input value to date displayed string
    }
    else {
        const adDate = NepaliFunctions.BS2AD(dateObj);
        emit("update:modelValue", new Date(`${adDate.year}-${adDate.month}-${adDate.day}`)); //Updating date if valid
    }
}

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