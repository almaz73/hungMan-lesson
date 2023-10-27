<script setup lang="ts">
interface Props {
  wrongLetters: string[]
}

defineProps<Props>()
</script>
<template>
  <div class="wrong-letters-container">
    <div class="wrong-letters">
      <p>Ошибки</p>
      <span>{{ wrongLetters.join(', ') }}</span>
    </div>
  </div>
</template>