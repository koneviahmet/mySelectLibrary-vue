<template>
  <Vue3Marquee>
    <span
      v-for="(word, index) in helloArray"
      :key="index"
      class="word-style"
      :class="{ word: true, odd: index % 2 === 0, even: index % 2 === 1 }"
    >
      {{ word }}
    </span>
  </Vue3Marquee>
</template>

<script>
import { Vue3Marquee } from 'vue3-marquee'
import 'vue3-marquee/dist/style.css'

export default {
  name: "BasicExample",
  components: {
    Vue3Marquee,
  },
  data() {
    return {
      helloArray: [
        "hello",
        "こんにちは",
        "bonjour",
        "안녕하세요"
      ],
    };
  },
};
</script>

<style scoped>
.word {
  font-size: 30px;
  margin: 0 10px;
}
.odd {
  color: rgb(68, 77, 84);
}
.even {
  color: rgb(137, 147, 156);
}
</style>