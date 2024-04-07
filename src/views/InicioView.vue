<script setup>
  import { useBebidasStore } from '@/stores/bebidas';
  import Receta from '@/components/Receta.vue';

  const drinks = useBebidasStore()
</script>

<template>
  <h1 class="text-6xl font-extrabold">Recetas</h1>

  <div class="grid grid-cols-1 md:grid-cols-2 2xl:grid-cols-3 my-10 gap-10">
    <p
      class="my-10 text-center text-2xl"
      v-if="drinks.noRecepies"
    >No hay resultados, usa el formulario para buscar recetas</p>
    <Receta
      v-else
      v-for="recepy in drinks.recepies"
      :recepy="recepy"
      :key="recepy.idDrink"
    />
  </div>
</template>
