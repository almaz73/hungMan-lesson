<script setup lang="ts">
import GameHeader from "@/components/GameHeader.vue";
import GamePopup from "@/components/GamePopup.vue";
import GameNotification from "@/components/GameNotification.vue";
import GameWord from "@/components/GameWord.vue";
import GameWrongLetters from "@/components/GameWrongLetters.vue";
import GameFigure from "@/components/GameFigure.vue";
import {computed, ref} from "vue";

const word = ref('Катамаран')
const letters = ref<string[]>([])
const correctLetters = computed(() => letters.value.filter(el => word.value.toLowerCase().includes(el)))
const wrongLetters = computed(() => letters.value.filter(el => !word.value.toLowerCase().includes(el)))
const notification = ref<InstanceType<typeof GameNotification> | null>(null)
const popup = ref<InstanceType<typeof GamePopup> | null>(null)
const isFail = computed(() => wrongLetters.value.length > 6)
const isWin = computed(() => word.value.toLowerCase().split('').every(el => correctLetters.value.includes(el)))

function restart() {
  letters.value = []
  popup.value?.close()
}

document.addEventListener('keydown', ({key}) => {
  if (!/[а-яА-ЯёЁ]/.test(key)) return false
  key = key.toLowerCase()
  if (letters.value.includes(key)) {
    notification.value?.open()
    setTimeout(() => notification.value?.close(), 500)
  } else {
    letters.value.push(key)
  }

  if (isFail.value) popup.value?.open('fail')
  if (isWin.value) popup.value?.open('win')
})

</script>

<template>
  <GameHeader/>
  <div class="game-container">
    <GameFigure :len="wrongLetters.length"/>

    <GameWrongLetters :wrongLetters="wrongLetters"/>

    <GameWord :word="word" :letters="correctLetters"/>
  </div>

  <GamePopup ref="popup" :word="word" @restart="restart"/>
  <GameNotification ref="notification"/>
</template>