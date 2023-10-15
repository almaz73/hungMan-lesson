<script setup lang="ts">
interface Props {
  word: string,
  correctLetters: string[]
}

defineProps<Props>()
</script>

<template>
  <div class="word">
    <span v-for="letter in word" class="letter">
      {{ correctLetters.includes(letter.toLowerCase()) ? letter : '' }}
    </span>
  </div>
</template>