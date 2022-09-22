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
      </div>
  </div>
</template>


<script setup>
import One from './exercises/one/main.vue'
import Two from './exercises/two/main.vue'
import Three from './exercises/three/main.vue'
import Four from './exercises/four/main.vue'
import Five from './exercises/five/main.vue'
import Six from './exercises/six/main.vue'
import Seven from './exercises/seven/main.vue'
import Eight from './exercises/eight/main.vue'
import {ref} from "vue"

const tab = ref(null)

const menu = [
  {
    id: "one",
    title: "One"
  },
  {
    id: "two",
    title: "Two"
  },
  {
    id: "three",
    title: "Three"
  },
  {
    id: "four",
    title: "Four"
  },
  {
    id: "five",
    title: "Five"
  },
  {
    id: "six",
    title: "Six"
  },
  {
    id: "seven",
    title: "seven"
  },
  {
    id: "eight",
    title: "eight"
  }
]

</script>