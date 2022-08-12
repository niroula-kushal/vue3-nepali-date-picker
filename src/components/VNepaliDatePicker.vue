<template>
    <input type="text" placeholder="yyyy-mm-dd" ref="elm"/>
</template>
<script lang="ts" setup>
import '@sajanm/nepali-date-picker/dist/nepali.datepicker.v3.7.min.js';
import '@sajanm/nepali-date-picker/dist/nepali.datepicker.v3.7.min.css';
import { onMounted, ref } from 'vue';
const elm = ref<HTMLElement | null>(null);
onMounted(() => {
    elm.value.nepaliDatePicker({});
});
</script>