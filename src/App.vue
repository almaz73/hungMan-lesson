<script setup lang="ts">
import GameHeader from "@/components/GameHeader.vue";
import GamePopup from "@/components/GamePopup.vue";
import GameNotification from "@/components/GameNotification.vue";
import GameWord from "@/components/GameWord.vue";
import GameWrongLetters from "@/components/GameWrongLetters.vue";
import GameFigure from "@/components/GameFigure.vue";

const word = 'Катамаран'

</script>

<template>
  <GameHeader/>
  <div class="game-container">
    <GameFigure/>

    <GameWrongLetters/>

    <GameWord :word="word"/>
  </div>
  <GamePopup/>
  <GameNotification/>
</template>