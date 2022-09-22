<template>
    <DDR :value="transform">
        <div style="width:100%;height:100%;background:red" />
    </DDR>
</template>

<script setup>
import {ref} from "vue"
import DDR from 'yoyoo-ddr-vue3'
import 'yoyoo-ddr-vue3/dist/yoyoo-ddr-vue3.css'

const transform = ref({ x: 100, y: 100, width: 100, height: 100, rotation: 0 })

</script>


