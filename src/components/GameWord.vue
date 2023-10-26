<script setup lang="ts">
interface Props {
  word: string,
  correctLetters: string[]
}

defineProps<Props>()

</script>
<template>
  <div class="word">
    <span class="letter" v-for="letter in word">
      {{ correctLetters.includes(letter.toLowerCase()) ? letter : '' }}
    </span>
  </div>
</template>