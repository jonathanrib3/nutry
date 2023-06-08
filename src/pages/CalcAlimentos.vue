<script setup>
import Sidebar from "../components/Sidebar.vue";
import CardMacros from "../components/CardMacros.vue";
import CarrosselMacros from "../components/CarrosselMacros.vue";
import { ChevronLeftIcon } from "@heroicons/vue/24/outline";
import { ChevronRightIcon } from "@heroicons/vue/24/outline";
import TabelaComidas from "../components/TabelaComidas.vue";
import Modal from "../components/Modal.vue";
</script>
<template class="bg-primary">
  <div class="grid grid-cols-[1fr_5fr] grid-rows-[100vh]">
    <div class="col-start-1">
      <Sidebar />
    </div>
    <div class="col-start-2 row-start-1 flex justify-center pt-9">
      <CarrosselMacros />
    </div>
    <div class="flex col-start-2 row-start-1 mb-2 items-end justify-center">
      <div>
        <div class="mb-4 col-start-2 row-start-1 flex items-center">
          <button
            class="w-44 h-10 bg-nutry-primary hover:bg-nutry-secondary text-white dark:brightness-[.80] font-semibold text-xl border rounded shadow appearance-none border-[#9002bf]"
          >
            Adicionar Comida
          </button>
        </div>
        <TabelaComidas class="flex items-end" />
      </div>
    </div>
    <Modal />
  </div>
</template>
