<script setup lang="ts">
import GameHeader from "@/components/GameHeader.vue";
import GamePopup from "@/components/GamePopup.vue";
import GameWord from "@/components/GameWord.vue";
import GameWrongLetters from "@/components/GameWrongLetters.vue";
import GameFigure from "@/components/GameFigure.vue";
import {ref} from "vue";
import GameNotification from "@/components/GameNotification.vue";
import {useLetters} from "@/composables/useLetters";
import {useNotification} from "@/composables/useNotification";

const word = 'Катамаран'
const {letters, correctLetters, wrongLetters, isLose, isWin, resetLetters} = useLetters(word)
const {notification, showNotification} = useNotification()
const popup = ref<InstanceType<typeof GamePopup> | null>(null)
const restart = () => {
  resetLetters()
  popup.value?.close()
}

document.addEventListener('keydown', ({key}) => {
  if (!/[а-яА-ЯёЁ]/.test(key)) return false
  if (isWin.value || isLose.value) return false

  key = key.toLowerCase()

  if (letters.value.includes(key)) showNotification()
  else letters.value.push(key)

  if (isLose.value) popup.value?.open('lose')
  if (isWin.value) popup.value?.open('win')
})

</script>

<template>
  {{ isWin }} {{ isLose }}
  <GameHeader/>
  <div class="game-container">
    <GameFigure/>
    <GameWrongLetters :wrongLetters="wrongLetters"/>

    <GameWord :word="word" :correctLetters="correctLetters"/>
  </div>
  <GamePopup @restart="restart" ref="popup" :word="word"/>
  <GameNotification ref="notification"/>
</template>