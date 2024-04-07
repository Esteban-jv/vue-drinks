<script setup>
    import { computed } from 'vue'
    import { RouterLink, useRoute } from 'vue-router'
    import { useBebidasStore } from '../stores/bebidas';
    import { useNotificacionStore } from '@/stores/notificaciones';

    const route = useRoute()
    const store = useBebidasStore() // Nunca se le aplica distructoring a un store porque rompe la reactividad
    const notificaciones = useNotificacionStore()
    // console.log(store.categories)

    const homePage = computed(() => route.name === 'inicio')

    const handleSubmit = () => {
        if(Object.values(store.search).includes('')) {
            // notificaciones.text = "Todos los textos son obligatorios"
            // notificaciones.show = true
            // notificaciones.error = true

            notificaciones.$patch({
                text: 'Todos los textos son obligatorios',
                show: true,
                error:true
            })

            return
        }

        store.getRecepies()
    }
</script>

<template>
  <header
    class="bg-slate-800"
    :class="{'header' : homePage}"
    >
    <div class="mx-auto container px-5 py-16">
        <div class="flex justify-between items-center">
            <div>
                <RouterLink :to="{ name: 'inicio' }">
                    <img src="/img/logo.svg" alt="Logotipo" class="w-32" />
                </RouterLink>
            </div>
            <nav class="flex gap-4 text-white">
                <RouterLink
                    :to="{ name: 'inicio' }"
                    class="uppercase hover:text-orange-300"
                    active-class="text-orange-500 font-bold"
                >
                    Inicio
                </RouterLink>
                <RouterLink
                    :to="{ name: 'favorites' }"
                    class="uppercase hover:text-orange-300"
                    active-class="text-orange-500 font-bold"
                >
                    Favoritos
                </RouterLink>
            </nav>
        </div>
        <form
            v-if="homePage"
            class="md:w-1/2 2xl:w-1/3 bg-orange-400 my-32 p-10 rounded-lg shadow space-y-6"
            @submit.prevent="handleSubmit"
        >
            <div class="space-y-4">
                <label 
                    for="ingredient"
                    class="block text-white uppercase font-extrabold text-lg"
                >Nombre o Ingredientes</label>
                <input
                    type="text"
                    id="ingredient"
                    class="p-3 w-full rounded-lg focus:outline-none"
                    placeholder="Nombre o ingrediente: pe Vodka, Tequila, etc..."
                    v-model="store.search.name"
                >
            </div>

            <div class="space-y-4">
                <label 
                    for="category"
                    class="block text-white uppercase font-extrabold text-lg"
                >Nombre o Ingredientes</label>
                <select
                    id="category"
                    class="p-3 w-full rounded-lg focus:outline-none"
                    v-model="store.search.category"
                >
                    <option value="">-- Seleccione --</option>
                    <option
                        v-for="cat in store.categories"
                        :key="cat.strCategory"
                        :value="cat.strCategory"
                    >{{ cat.strCategory }}</option>
                </select>

                <input
                    type="submit"
                    value="Buscar recetas"
                    class="bg-orange-800 hover:bg-orange-900 cursor-pointer text-white font-extrabold w-full p-2 rounded-lg uppercase"
                >
            </div>
        </form>
    </div>
  </header>
</template>
<style scoped>
    .header {
        background-image: url('/img/bg.jpg');
    }
</style>