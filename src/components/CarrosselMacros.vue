<script setup>
import CardMacros from "./CardMacros.vue";
import { ChevronLeftIcon } from "@heroicons/vue/24/outline";
import { ChevronRightIcon } from "@heroicons/vue/24/outline";
import { ClickAndHold } from "../functions/ClickAndHold.js";
import { onMounted } from "vue";

function scrollLeft() {
  document.getElementById("content").scrollLeft -= 400;

  console.log(document.getElementById("content").scrollLeft);
}
function scrollRight() {
  document.getElementById("content").scrollLeft += 400;
  console.log(document.getElementById("content").scrollLeft);
}

onMounted(() => {
  const carouselLeftBtn = document.getElementById("leftButton");
  const carouselRightBtn = document.getElementById("rightButton");

  ClickAndHold.apply(carouselLeftBtn, scrollLeft);
  ClickAndHold.apply(carouselRightBtn, scrollRight);
});

const dadosMacros = [
  {
    titulo: "Carboidrato (g)",
    quantidade: 0,
    porcentagem: 0,
    id: 1,
  },
  {
    titulo: "Carboidrato (g)",
    quantidade: 0,
    porcentagem: 0,
    id: 2,
  },
  {
    titulo: "Carboidrato (g)",
    quantidade: 0,
    porcentagem: 0,
    id: 3,
  },
  {
    titulo: "Carboidrato (g)",
    quantidade: 0,
    porcentagem: 0,
    id: 4,
  },
  {
    titulo: "Carboidrato (g)",
    quantidade: 0,
    porcentagem: 0,
    id: 5,
  },
  {
    titulo: "Carboidrato (g)",
    quantidade: 0,
    porcentagem: 0,
    id: 6,
  },
  {
    titulo: "Carboidrato (g)",
    quantidade: 0,
    porcentagem: 0,
    id: 7,
  },
  {
    titulo: "Carboidrato (g)",
    quantidade: 0,
    porcentagem: 0,
    id: 8,
  },
  {
    titulo: "Carboidrato (g)",
    quantidade: 0,
    porcentagem: 0,
    id: 9,
  },
  {
    titulo: "Carboidrato (g)",
    quantidade: 0,
    porcentagem: 0,
    id: 10,
  },
];
</script>
<template>
  <div class="flex max-h-44 max-w-4xl relative">
    <button id="leftButton" @click="scrollLeft()" @mousedown="scrollLeft()">
      <ChevronLeftIcon class="w-8 h-8" />
    </button>

    <div
      class="carrossel flex w-max h-full overflow-x-auto scroll-smooth scrollbar-hide"
      id="content"
    >
      <ul v-for="item in dadosMacros" :key="item.id">
        <li class="px-2">
          <CardMacros
            :titulo="item.titulo"
            :quantidade="item.quantidade"
            :porcentagem="item.porcentagem"
          />
        </li>
      </ul>
    </div>
    <button id="rightButton" @click="scrollRight()" @mousedown="scrollRight()">
      <ChevronRightIcon class="w-8 h-8 ml-2" />
    </button>
  </div>
</template>
