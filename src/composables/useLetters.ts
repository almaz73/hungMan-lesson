import {computed, type Ref, ref} from "vue";

export const useLetters = (word: Ref<string>) => {
    const letters = ref<string[]>([])
    const correctLetters = computed(() => letters.value.filter(el => word.value.toLowerCase().includes(el)))
    const wrongLetters = computed(() => letters.value.filter(el => !word.value.toLowerCase().includes(el)))
    const isFail = computed(() => wrongLetters.value.length > 6)
    const isWin = computed(() => word.value.toLowerCase().split('').every(el => correctLetters.value.includes(el)))
    const addLetter = (key: string) => letters.value.push(key)


    return {
        letters,
        correctLetters,
        wrongLetters,
        isFail,
        isWin,
        addLetter

    }
}