<template>
    xls den alınan veriler => {{data}}
</template>

<script setup>
import {ref, onMounted} from 'vue'
import { read, utils, writeFile } from 'xlsx';
const data = ref(null)

onMounted(async () => {
    const f = await (await fetch("https://sheetjs.com/pres.xlsx")).arrayBuffer();
    const wb = read(f);
    const res = utils.sheet_to_json(wb.Sheets[wb.SheetNames[0]]);
    data.value = res
})




</script>