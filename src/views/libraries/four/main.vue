<template>
    <div class="min-h-screen bg-base-200 p-4">
      <div class="flex space-x-2">
        <button class="btn btn-sm" v-for="(m, key) in menu" :key="key" @click="tab = m.id" :class="tab == m.id && 'btn-primary'">{{m.title}}</button>
      </div>
      
      <div class="mt-6">
        <div>
            Click <a class="font-bold text-blue-500" target="_blank" href="https://github.com/megasanjay/vue3-marquee?ref=vuejsexamples.com">here</a> from npm package 
        </div>
        <One v-if="tab == 'one'"/>
        <Two v-if="tab == 'two'"/>
        <Three v-if="tab == 'three'"/>
        <Four v-if="tab == 'four'"/>
        <Five v-if="tab == 'five'"/>
      </div>
  </div>
</template>


<script setup>

import One from './one.vue'
import Two from './two.vue'
import Three from './three.vue'
import Four from './four.vue'
import Five from './five.vue'

import {ref} from "vue"

const tab = ref(null)

const menu = [
  {
    id: "one",
    title: "1"
  },
  {
    id: "two",
    title: "2"
  },
  {
    id: "three",
    title: "3"
  },
  {
    id: "four",
    title: "4"
  },
  {
    id: "five",
    title: "5"
  }
]

</script>