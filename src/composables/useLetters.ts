import {computed, ref} from "vue";

export const useLetters = (word: String) => {

    const letters = ref(<string[]>[])
    const correctLetters = computed(() => letters.value.filter(el => word.toLowerCase().includes(el)))
    const wrongLetters = computed(() => letters.value.filter(el => !word.toLowerCase().includes(el)))
    const isLose = computed(() => wrongLetters.value.length == 6)
    const isWin = computed(() => new Set([...word]).size === correctLetters.value.length)
    const resetLetters = () => letters.value = []

    return {letters, correctLetters, wrongLetters, isLose, isWin, resetLetters}
}