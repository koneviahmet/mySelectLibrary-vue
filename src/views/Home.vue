<template>
    <div class="min-h-screen bg-base-200 p-4">
      <div class="flex space-x-2">
        <button class="btn btn-sm" v-for="(m, key) in menu" :key="key" @click="tab = m.id" :class="tab == m.id && 'btn-primary'">{{m.title}}</button>
      </div>
      
      <div class="mt-6">
        <One v-if="tab == 'one'"/>
        <Two v-if="tab == 'two'"/>
        <Three v-if="tab == 'three'"/>
        <Four v-if="tab == 'four'"/>
        <Five v-if="tab == 'five'"/>
        <Six v-if="tab == 'six'"/>
        <Seven v-if="tab == 'seven'"/>
        <Eight v-if="tab == 'eight'"/>
        <Nine v-if="tab == 'nine'"/>
        <Ten v-if="tab == 'ten'"/>
        <Eleven v-if="tab == 'eleven'"/>
      </div>
  </div>
</template>


<script setup>
import One from './libraries/one/main.vue'
import Two from './libraries/two/main.vue'
import Three from './libraries/three/main.vue'
import Four from './libraries/four/main.vue'
import Five from './libraries/five/main.vue'
import Six from './libraries/six/main.vue'
import Seven from './libraries/seven/main.vue'
import Eight from './libraries/eight/main.vue'
import Nine from './libraries/nine/main.vue'
import Ten from './libraries/ten/main.vue'
import Eleven from './libraries/eleven/main.vue'
import {ref} from "vue"

const tab = ref("ten")

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
  },
  {
    id: "six",
    title: "6"
  },
  {
    id: "seven",
    title: "7"
  },
  {
    id: "eight",
    title: "8"
  },
  {
    id: "nine",
    title: "9"
  },
  {
    id: "ten",
    title: "10"
  },
  {
    id: "eleven",
    title: "11"
  }
]

</script>