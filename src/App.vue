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

const word = ref('Барабан')
const {letters, correctLetters, wrongLetters, isWin, isFail, addLetters} = useLetters(word)
const {notification, showNotification} = useNotification()
const popup = ref<InstanceType<typeof GamePopup> | null>(null)

const restart = () => {
  letters.value = []
  popup.value?.close()
}

document.addEventListener('keydown', ({key}) => {
  if (isFail.value || isWin.value) return;
  if (!/[а-яА-ЯёЁ]/.test(key)) return;

  if (letters.value.includes(key.toLowerCase())) {
    showNotification()
    return;
  }
  addLetters(key)

  if (isWin.value) popup.value!.open('win')
  if (isFail.value) popup.value!.open('fail')
})

</script>
<template>
  <GameHeader/>
  <div class="game-container">
    <GameFigure :len="wrongLetters.length"/>
    <GameWrongLetters :wrongLetters="wrongLetters"/>
    <GameWord :word="word" :correctLetters="correctLetters"/>
  </div>
  <GamePopup ref="popup" :word="word" @restart="restart"/>
  <GameNotification ref="notification"/>
</template>