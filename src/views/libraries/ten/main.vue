<template>
    <div class="min-h-screen bg-base-200 p-4">
      <div class="flex space-x-2">
        <button class="btn btn-sm" v-for="(m, key) in menu" :key="key" @click="tab = m.id" :class="tab == m.id && 'btn-primary'">{{m.title}}</button>
      </div>
      
      <div class="mt-6">
        <div>
            Click <a class="font-bold text-blue-500" target="_blank" href="https://github.com/devforth/painterro">here</a> from npm package 
        </div>
        <One v-if="tab == 'one'"/>
        <Two v-if="tab == 'two'"/>
      </div>
  </div>
</template>


<script setup>

import One from './one.vue'
import Two from './two.vue'
import {ref} from "vue"

const tab = ref("two")

const menu = [
  {
    id: "one",
    title: "1"
  },
  {
    id: "two",
    title: "2"
  }
]

</script>