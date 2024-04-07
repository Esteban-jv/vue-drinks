<script setup>
  import Receta from '@/components/Receta.vue';
  import { useFavoritosStore } from '@/stores/favoritos';

  const favorites = useFavoritosStore()
</script>

<template>
  <h1 class="text-6xl font-extrabold">Favoritos</h1>

  <div class="grid grid-cols-1 md:grid-cols-2 2xl:grid-cols-3 my-10 gap-10">
    <p
      class="my-10 text-center text-2xl"
      v-if="favorites.noFavoritos"
    >No hay favoritos</p>
    <Receta
      v-else
      v-for="recepy in favorites.favoritos"
      :recepy="recepy"
      :key="recepy.idDrink"
    />
  </div>
</template>
