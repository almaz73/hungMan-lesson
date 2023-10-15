<script setup lang="ts">
interface Props {
  word: string
}

defineProps<Props>()
</script>

<template>
  <div class="word">
    <span v-for="letter in word" class="letter"></span>
  </div>
</template>