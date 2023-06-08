<script setup>
import { useDark, useToggle } from "@vueuse/core";
import { MoonIcon } from "@heroicons/vue/24/outline";
import { SunIcon } from "@heroicons/vue/24/outline";
import { ref } from "vue";

const isDark = useDark();

const toggleDark = useToggle(isDark);
let btnContent = ref(isDark.value ? "Modo Claro" : "Modo Escuro");

function toggleDarkMode() {
  toggleDark();
  btnContent.value = isDark.value ? "Modo Claro" : "Modo Escuro";
}
</script>

<template>
  <div class="flex justify-center items-center w-20 pt-10 ml-3">
    <button
      @click="toggleDarkMode()"
      class="flex justify-center items-center rounded whitespace-nowrap py-2 px-2 ml-16 bg-[#0055d4] dark:bg-nutry-secondary font-bold"
    >
      {{ btnContent }}
      <MoonIcon v-if="!isDark" class="h-7 w-7 ml-2" />
      <SunIcon v-if="isDark" class="h-7 w-7 ml-2" />
    </button>
  </div>
</template>

<style>
html.dark {
  color-scheme: dark;
}
</style>
