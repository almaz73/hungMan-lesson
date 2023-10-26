import {type Ref, computed, ref} from "vue";

export const useLetters = (word: Ref<string>) => {
    const letters = ref<string[]>([])
    const correctLetters = computed(() => letters.value.filter(el => word.value.toLowerCase().includes(el)))
    const wrongLetters = computed(() => letters.value.filter(el => !word.value.toLowerCase().includes(el)))
    const isFail = computed(() => wrongLetters.value.length > 5)
    const isWin = computed(() => word.value.split('').every(el => correctLetters.value.includes(el.toLowerCase())))
    const addLetters = (key: string) => {
        letters.value.push(key)
    }

    return {
        letters,
        correctLetters,
        wrongLetters,
        isWin,
        isFail,
        addLetters
    }
}