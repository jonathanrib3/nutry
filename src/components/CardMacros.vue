<script setup>
defineProps(["titulo", "quantidade", "porcentagem"]);
</script>

<template>
  <div
    class="bg-secondary w-36 h-28 rounded-2xl pl-3 pt-2 shadow-xl text-gray-200 dark:brightness-[.85] dark:shadow-[0_10px_10px_rgba(255,255,255,0.080)]"
  >
    <h2 class="font-bold text-lg">{{ this.titulo }}</h2>
    <p class="font-semibold text-lg">{{ this.quantidade }} mg</p>
    <p class="font-semibold">{{ this.porcentagem }} %</p>
  </div>
</template>
