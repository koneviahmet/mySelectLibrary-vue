<template>
  <Vue3Marquee
    :gradient="true"
    :gradientColor="[255, 255, 255]"
    :gradientWidth="`30%`"
  >
    <img
      :src="img"
      v-for="img in imgArray"
      :key="img"
      class="image"
      width="100"
    />
  </Vue3Marquee>
</template>

<script>
import { Vue3Marquee } from 'vue3-marquee'
import 'vue3-marquee/dist/style.css'

export default {
  name: "ImagesWithGradient",
  components: {
    Vue3Marquee,
  },
  data() {
    return {
      imgArray: [
        "https://sponsors.vuejs.org/images/vueschool.avif",
        "https://sponsors.vuejs.org/images/vehikl.avif",
        "https://sponsors.vuejs.org/images/dronahq.avif"
      ],
    };
  },
};
</script>

<style scoped>
.image {
  font-size: 30px;
  margin: 0 10px;
}
</style>