<script setup lang="ts">
import GameHeader from "@/components/GameHeader.vue";
import GamePopup from "@/components/GamePopup.vue";
import GameNotification from "@/components/GameNotification.vue";
import GameWord from "@/components/GameWord.vue";
import GameWrongLetters from "@/components/GameWrongLetters.vue";
import GameFigure from "@/components/GameFigure.vue";
import {computed, ref} from "vue";

const word = 'Катамаран'
const letters = ref(<string[]>[])
const correctLetters = computed(() => letters.value.filter(el => word.toLowerCase().includes(el)))
const wrongLetters = computed(() => letters.value.filter(el => !word.toLowerCase().includes(el)))
const notification = ref<InstanceType<typeof GameNotification> | null>(null)

document.addEventListener('keydown', ({key}) => {
  if (!/[а-яА-ЯёЁ]/.test(key)) return false
  if (letters.value.includes(key.toLowerCase())) {
    notification.value?.open()
    setTimeout(() => notification.value?.close(), 1000)
  } else {
    letters.value.push(key.toLowerCase())
  }
})
</script>

<template>
  <GameHeader/>
  <div class="game-container">
    <GameFigure/>

    <GameWrongLetters :wrongLetters="wrongLetters"/>

    <GameWord :word="word" :correctLetters="correctLetters"/>
  </div>
  <GamePopup/>
  <GameNotification ref="notification"/>
</template>