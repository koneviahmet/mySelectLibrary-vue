<template>
    <div id="app">
      <div class="container">
        <div id="bar">
          <h1>Vue Email Editor (Demo)</h1>
  
          <button v-on:click="saveDesign">Save Design</button>
          <button v-on:click="exportHtml">Export HTML</button>
        </div>
        
        <div class="min-h-screen h-full">
            <EmailEditor  ref="emailEditor" @load="editorLoaded"   />
        </div>
      </div>
    </div>
</template>


<script setup>
    import { EmailEditor } from 'vue-email-editor'
    

    const saveDesign = () => {
        
    }

    const editorLoaded = () => {

    }

    const exportHtml = () => {

    }


  </script>