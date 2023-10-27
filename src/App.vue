<script setup lang="ts">
import GameHeader from "@/components/GameHeader.vue";
import GamePopup from "@/components/GamePopup.vue";
import GameNotification from "@/components/GameNotification.vue";
import GameWord from "@/components/GameWord.vue";
import GameWrongLetters from "@/components/GameWrongLetters.vue";
import GameFigure from "@/components/GameFigure.vue";
import {ref} from "vue";
import {useLetters} from "@/composables/useLetters";
import {useNotification} from "@/composables/useNotification";


const word = ref<string>('Пеликан')
const {letters, wrongLetters, isLose, isWin} = useLetters(word)
const popup = ref<InstanceType<typeof GamePopup> | null>(null)
const {notification, showNotification} = useNotification()

const restart = () => letters.value = []

document.addEventListener('keydown', ({key}) => {
  if (isLose.value || isWin.value) return;

  if (!/[а-яА-ЯёЁ]/.test(key)) return
  key = key.toLowerCase()
  if (letters.value.includes(key)) showNotification()
  else letters.value.push(key)

  if (isLose.value) return popup.value?.open('lose')
  if (isWin.value) return popup.value?.open('win')
})
</script>

<template>
  <GameHeader/>
  <div class="game-container">
    <GameFigure :err="wrongLetters.length"/>
    <GameWrongLetters :wrongLetters="wrongLetters"/>
    <GameWord :word="word" :letters="letters"/>
  </div>

  <GamePopup ref="popup" :word="word" @restart="restart"/>
  <GameNotification ref="notification"/>
</template>