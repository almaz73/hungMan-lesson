<script setup lang="ts">
interface Props {
  word: string,
  correctLetters: string[]
}

defineProps<Props>()
</script>

<template>
  <div class="word">
    <span v-for="(letter, ind) in word" class="letter" :key="ind">
      {{ correctLetters.includes(letter.toLowerCase()) ? letter : '' }}
    </span>
  </div>
</template>