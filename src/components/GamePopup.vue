<script setup lang="ts">
import type {GameStatus} from "@/types/GameStatus";
import {ref} from "vue";

interface Props {
  word: string
}

defineProps<Props>()

const emits = defineEmits(['restart'])
const status = ref<GameStatus | null>(null)

function open(val: GameStatus) {
  status.value = val
}

function close() {
  status.value = null
}

function restart() {
  emits('restart')
}

defineExpose({open, close})

</script>
<template>
  <!-- Container for final message -->
  <div class="popup-container" v-if="status">
    <div class="popup">
      <h2 v-if="status==='win'">Поздравляю, вы победили! 😃</h2>
      <template v-else>
        <h2>Вы проиграли. 😕</h2>
        <h3>...имя: {{ word }}</h3>
      </template>
      <button autofocus @keyup.enter="restart()" @click="restart()">Сыграть еще раз</button>

    </div>
  </div>
</template>