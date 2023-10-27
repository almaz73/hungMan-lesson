import {computed, type Ref, ref} from "vue";

export const useLetters = (word:Ref<string>) => {
    const letters = ref<string[]>([])
    const correctLetters = computed(() => letters.value.filter(el => word.value.toLowerCase().includes(el)))
    const wrongLetters = computed(() => letters.value.filter(el => !word.value.toLowerCase().includes(el)))
    const isLose = computed(() => wrongLetters.value.length === 6)
    const isWin = computed(() => [...word.value.toLowerCase()].every(el => correctLetters.value.includes(el)))

    return {
        letters, wrongLetters, correctLetters, isLose, isWin
    }
}