<script setup lang="ts">
import GameHeader from "@/components/GameHeader.vue";
import GamePopup from "@/components/GamePopup.vue";
import GameNotification from "@/components/GameNotification.vue";
import GameWord from "@/components/GameWord.vue";
import GameWrongLetters from "@/components/GameWrongLetters.vue";
import GameFigure from "@/components/GameFigure.vue";
import {computed, ref} from "vue";

const word = ref('Катамаран')
const letters = ref([])
const correctLetters = computed(() => letters.value.filter(el => word.value.toLowerCase().includes(el)))
const wrongLetters = computed(() => letters.value.filter(el => !word.value.toLowerCase().includes(el)))
const notification = ref<InstanceType<typeof GameNotification> | null>(null)

document.addEventListener('keydown', ({key}) => {
  console.log('key', key)
  if (!/[а-яА-ЯёЁ]/.test(key)) return false
  key = key.toLowerCase()
  if (letters.value.includes(key)) {
    notification.value?.open()
    setTimeout(()=>notification.value?.close(), 500)
  } else {
    letters.value.push(key)
  }
})

</script>

<template>
  <GameHeader/>
  <div class="game-container">
    <GameFigure/>

    <GameWrongLetters :wrongLetters="wrongLetters"/>

    <GameWord :word="word" :letters="correctLetters"/>
  </div>

  <GamePopup/>
  <GameNotification ref="notification"/>
</template>