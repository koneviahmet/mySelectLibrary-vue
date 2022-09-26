<template>

    <div>
        Seçilen sayfa: {{page}}
    </div>

    <paginate
       v-model="page"
      :page-count="20"
      :page-range="3"
      :margin-pages="2"
      :click-handler="clickCallback"
      :prev-text="'Geri'"
      :next-text="'İleri'"
      :next-link-class="'border-2 px-2 cursor-pointer'"
      :prev-link-class="'border-2 px-2 cursor-pointer'"
      :container-class="'flex space-x-2'"
      :page-class="'border-2 px-2 cursor-pointer'"
    >
    </paginate>
  </template>
  
  <script setup>
    import {ref} from 'vue'
    import Paginate from 'vuejs-paginate-next';
    const page = ref(12)

    const clickCallback = (selectedPage) => {
        console.log("selectPage", selectedPage);
    }
  </script>
  
 