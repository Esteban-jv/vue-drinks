<script setup>
  import { useBebidasStore } from '@/stores/bebidas'

  const drinks = useBebidasStore()

  defineProps({
    recepy: {
        type: Object
    }
  })

</script>

<template>
  <div class="border shadow-lg">
    <div class="overflow-hidden">
        <img
            class="hover:scale-125 transition-transform hover:rotate-2"
            :src="recepy.strDrinkThumb"
            :alt="'Imagen de :'+recepy.strDrink"
        />
    </div>
    <div class="p-5">
        <h2 class="text-2xl truncate font-extrabold">
            {{ recepy.strDrink }}
        </h2>
        <button
            type="button"
            class="bg-orange-400 hover:bg-orange-500 mt-5 w-full p-3 font-bold text-white text-lg"
            @click="drinks.selectDrink(recepy.idDrink)"
        >Ver receta</button>
    </div>

  </div>
</template>
