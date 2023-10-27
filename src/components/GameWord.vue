<script setup lang="ts">
interface Props {
  word: string,
  letters: string[]
}

defineProps<Props>()
</script>
<template>
  <div class="word">
    <span class="letter" v-for="(letter, ind) in word" :key="ind">
      {{ letters.includes(letter.toLowerCase()) ? letter : '' }}
    </span>
  </div>
</template>