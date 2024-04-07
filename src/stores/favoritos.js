import { ref, watch, onMounted, computed } from 'vue'
import { defineStore } from "pinia"
import { useBebidasStore } from "./bebidas"
import { useModalStore } from './modal'
import { useNotificacionStore } from './notificaciones'

export const useFavoritosStore = defineStore('favoritos', () => {

    const bebidas = useBebidasStore()
    const modal = useModalStore()
    const notificacion = useNotificacionStore()
    const favoritos = ref([])

    onMounted(() => {
        favoritos.value = JSON.parse(localStorage.getItem('favorites')) ?? []
    })

    function handleClickFavorito(e) {
        if(existeFavorito()) {
            eliminarFavorito()
            // e.target.textContent = 'Agregar a favoritos'

        }
        else {
            agregarFavorito()
            // e.target.textContent = 'Eliminar de favoritos'
        }
        modal.modal = false
    }

    function sincronizeLocalStorage() {
        localStorage.setItem('favorites', JSON.stringify(favoritos.value))
    }

    function existeFavorito() {
        const favoritosLocalStorage = JSON.parse(localStorage.getItem('favorites')) ?? []
        return favoritosLocalStorage.some(favorito => favorito.idDrink === bebidas.recepy.idDrink)
    }

    function eliminarFavorito() {
        favoritos.value = favoritos.value.filter( f => f.idDrink !== bebidas.recepy.idDrink)

        notificacion.show = true
        notificacion.text = 'Eliminado de favoritos'

        // setTimeout(() => {
        //     notificacion.$reset()
        // }, 3000)
    }

    function agregarFavorito() {
        favoritos.value.push(bebidas.recepy)

        notificacion.show = true
        notificacion.text = 'Se agregó a favoritos'

        // setTimeout(() => {
        //     notificacion.$reset()
        // }, 3000)
    }

    const noFavoritos = computed(() => favoritos.value.length === 0)

    watch(favoritos, () => {
        sincronizeLocalStorage()
    }, {
        deep: true
    })

    return {
        favoritos,
        handleClickFavorito,
        existeFavorito,
        noFavoritos
    }
}) 