<template>
    bir olacak resim düzenleme


    <div class="flex">
        <div class="w-1/2">
            <vue-cropper
                ref="cropper"
                :src="imgSrc"
                alt="Source Image">
            </vue-cropper>
        </div>

        <div>asd</div>
    </div>



    <!-- 
    <vue-cropper
        ref="cropper"
        :src="imgSrc"
        alt="Source Image"
        @ready="..."
        @cropstart="..."
        @cropmove="..."
        @cropend="..."
        @crop="..."
        @zoom="..."
    </vue-cropper>
  -->




</template> 

<script setup>
import {ref} from 'vue'
import VueCropper from 'vue-cropperjs';
import 'cropperjs/dist/cropper.css';
const imgSrc = ref('/optik.jpg');

</script>