<script setup lang="ts">
import GameHeader from "@/components/GameHeader.vue";
import GamePopup from "@/components/GamePopup.vue";
import GameNotification from "@/components/GameNotification.vue";
import GameWord from "@/components/GameWord.vue";
import GameWrongLetters from "@/components/GameWrongLetters.vue";
import GameFigure from "@/components/GameFigure.vue";
import {ref} from "vue";
import {useLetters} from "@/composables/useLetters";
import {useNotifocation} from "@/composables/useNotifocation";

const word = ref('Катамаран')
const {letters, correctLetters, wrongLetters, isWin, isFail, addLetter} = useLetters(word)
const {notification, showNotification} = useNotifocation()
const popup = ref<InstanceType<typeof GamePopup> | null>(null)


function restart() {
  letters.value = []
  popup.value?.close()
}

document.addEventListener('keydown', ({key}) => {
  if (isFail.value || isWin.value) return false
  if (!/[а-яА-ЯёЁ]/.test(key)) return false
  key = key.toLowerCase()

  if (letters.value.includes(key)) {
    showNotification()
    return;
  }

  addLetter(key)

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