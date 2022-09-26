<template>
    <div class="w-1/3">
      <img  :src="startImage" @click="setImage">

    </div>
</template>

<script setup>
//https://github.com/devforth/painterro

import Painterro from 'painterro'
import {ref, onMounted} from 'vue'


const src = ref("/optik.jpg")
const startImage = ref(null)

onMounted(() => {
    toDataURL(src.value, (imgBase64) => {
        startImage.value = imgBase64
    })
})


const setImage = () => {
    let that = this
    Painterro({
        //footer style design
        colorScheme: {
            main: '#fdf6b8', // make panels light-yellow
            control: '#FECF67' // change controls color
        },
        //backplateImgUrl: src.value,
        how_to_paste_actions: ['replace_all'],
        saveHandler: (image, done) => {
            startImage.value = image.asDataURL();
            src.value =  image.asDataURL();
            done(true);
        }
    }).show(startImage.value)
}


const toDataURL = (url, callback) => {
  var xhr = new XMLHttpRequest();
  xhr.onload = function() {
    var reader = new FileReader();
    reader.onloadend = function() {
      callback(reader.result);
    }
    reader.readAsDataURL(xhr.response);
  };
  xhr.open('GET', url);
  xhr.responseType = 'blob';
  xhr.send();
}

const blobToBase64 = (blob) => {
  return new Promise((resolve, _) => {
    const reader = new FileReader();
    reader.onloadend = () => resolve(reader.result);
    reader.readAsDataURL(blob);
  });
}




</script>
