<script setup lang="ts">
import {ref} from "vue";
import type {WinType} from "@/types/winType";

interface Props {
  word: string
}

const {word} = defineProps<Props>()
const emits = defineEmits(['restart'])

const isVisible = ref(false)
const isWin = ref(false)


function open(val: WinType) {
  isVisible.value = true
  if (val === 'win') isWin.value = true
  if (val === 'fail') isWin.value = false
}

function close() {
  isVisible.value = false
}

function restart() {
  console.log('restart')
  emits('restart')
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
      <button autofocus @click="restart()" @keyup.enter="restart()">Сыграть еще раз</button>
    </div>
  </div>
</template>