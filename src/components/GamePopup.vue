<script setup lang="ts">
import {ref} from "vue";
import type {GameStatus} from "@/types/GameStatus";

interface Props {
  word: string
}

defineProps<Props>()


const emits = defineEmits(['restart'])
const isVisible = ref(false)
const isStatus = ref<GameStatus | null>(null)

const open = (status: GameStatus) => {
  isVisible.value = true
  isStatus.value = status
}
const close = () => isVisible.value = false

defineExpose({open, close})
</script>
<template>
  <!-- Container for final message -->
  <div class="popup-container" v-if="isVisible">
    <div class="popup">
      <h2 v-if="isStatus === 'win'">Поздравляю, вы победили! 😃</h2>
      <template v-else>
        <h2>Вы проиграли. 😕</h2>
        <h3>...имя: {{ word }}</h3>
      </template>
      <button @click="emits('restart'); isVisible = false">Сыграть еще раз</button>
    </div>
  </div>
</template>