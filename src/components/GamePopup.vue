<script setup lang="ts">
import {ref} from "vue";

interface Props {
  word: string
}
const {word} = defineProps<Props>()
const emits = defineEmits(['restart'])

const isVisible = ref(false)
const isWin = ref(false)

type typeWin = 'win' | 'fail'

function open(val: typeWin) {
  isVisible.value = true
  if (val === 'win') isWin.value = true
  if (val === 'fail') isWin.value = false
}

function close() {
  isVisible.value = false
}

defineExpose({open, close})
</script>
<template>
  <!-- Container for final message -->
  <div class="popup-container" v-if="isVisible">
    <div class="popup">
      <h2 v-if="isWin">Поздравляю, вы победили! 😃</h2>
      <template v-else>
        <h2>Вы проиграли. 😕</h2>
        <h3>...имя: {{ word }}</h3>
      </template>
      <button @click="emits('restart')">Сыграть еще раз</button>
    </div>
  </div>
</template>