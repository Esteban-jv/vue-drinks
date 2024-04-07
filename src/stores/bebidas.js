import { ref, reactive, onMounted, computed } from 'vue'
import { defineStore } from 'pinia'
import APIService from '@/services/APIService'
import { useModalStore } from './modal'

export const useBebidasStore = defineStore('bebidas', () => {

    const modal = useModalStore() // store modal dentro de store bebidas es posible incluso recomendable

    const categories = ref([])
    const search = reactive({
        name: '',
        category: ''
    })
    const recepies = ref([])
    const recepy = ref({})

    onMounted(async function() {
        const { data: {drinks} } = await APIService.getCategories()
        categories.value = drinks
    })

    // Pinia sugiere que se usen function() {} en lugar de () => {}
    async function getRecepies() {
        const {data: {drinks}} = await APIService.searchRecepies(search)
        recepies.value = drinks
    }

    async function selectDrink(id) {
        const {data: {drinks}} = await APIService.getRecepy(id)
        recepy.value = drinks[0]
        
        modal.handleClickModal()
    }

    const noRecepies = computed(() => recepies.value.length === 0)

    return {
        categories,
        search,
        recepies,
        recepy,

        getRecepies,
        selectDrink,
        noRecepies
    }
})