import { ref, watchEffect } from 'vue'
import { defineStore } from 'pinia'

export const useNotificacionStore = defineStore('notificacion', () => {
    const text = ref('')
    const error = ref(false)
    const show = ref(false)

    // function $reset() {
    //     text.value = ''
    //     error.value = false
    //     show.value = false
    // }

    // watch(show, () => {
    watchEffect(() => {
        if(show.value) {
            setTimeout(() => {
                text.value = ''
                error.value = false
                show.value = false
            }, 3000)
        }
    })

    return {
        text,
        error,
        show,

        // $reset
    }
})