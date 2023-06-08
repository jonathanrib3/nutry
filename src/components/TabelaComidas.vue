<script setup>
import TrashIcon from "@heroicons/vue/24/outline/TrashIcon";
import PlusIcon from "@heroicons/vue/24/outline/PlusIcon";

defineProps(["addComida", ]);
let quantidade;


</script>

<template>
  <div>
    <div>
      <div
        class="tabela-comidas overflow-x-auto overflow-y-auto max-w-4xl rounded"
      >
        <table>
          <thead class="bg-secondary dark:bg-gray-500/25 dark:text-gray-200">
            <tr>
              <th scope="col" class="px-4 py-3">Ação</th>
              <th scope="col" class="px-4 py-3">Quantidade (g)</th>
              <th scope="col" class="px-4 py-3">Nome</th>
              <th scope="col" class="px-4 py-3">Tipo</th>
              <th scope="col" class="px-4 py-3">Energia(kcal)</th>
              <th scope="col" class="px-4 py-3">Proteína(g)</th>
              <th scope="col" class="px-4 py-3">Lipídeos(g)</th>
              <th scope="col" class="px-4 py-3">Carboidrato(g)</th>
              <th scope="col" class="px-4 py-3">Energia(kJ)</th>
              <th scope="col" class="px-4 py-3">Colesterol(mg)</th>
              <th scope="col" class="px-4 py-3">Fibras(g)</th>
              <th scope="col" class="px-4 py-3">Sódio(mg)</th>
              <th scope="col" class="px-4 py-3">Energia(kJ)</th>
              <th scope="col" class="px-4 py-3">Cinzas(g)</th>
              <th scope="col" class="px-4 py-3">Cálcio(mg)</th>
              <th scope="col" class="px-4 py-3">Magnésio(mg)</th>
              <th scope="col" class="px-4 py-3">Manganês(mg)</th>
              <th scope="col" class="px-4 py-3">Fósforo(mg)</th>
              <th scope="col" class="px-4 py-3">Ferro(mg)</th>
              <th scope="col" class="px-4 py-3">Potássio(mg)</th>
              <th scope="col" class="px-4 py-3">Cobre(mg)</th>
              <th scope="col" class="px-4 py-3">Zinco(mg)</th>
              <th scope="col" class="px-4 py-3">Retinol(mcg)</th>
              <th scope="col" class="px-4 py-3">RE(mcg)</th>
              <th scope="col" class="px-4 py-3">RAE (mcg)</th>
              <th scope="col" class="px-4 py-3">Tiamina(mg)</th>
              <th scope="col" class="px-4 py-3">Riboflavina(mg)</th>
              <th scope="col" class="px-4 py-3">Piridoxina(mg)</th>
              <th scope="col" class="px-4 py-3">Niacina(mg)</th>
              <th scope="col" class="px-4 py-3">Vitamina C(mg)</th>
              <th scope="col" class="px-4 py-3">Umidade (%)</th>
            </tr>
          </thead>
          <tbody>
            <tr class="border-b dark:bg-gray-700/50 dark:border-gray-700">
              <th
                scope="row"
                class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
              >
                <div v-if="!addComida">
                  <button
                    class="w-30 h-8 px-2 bg-red-500 dark:brightness-[.85] flex items-center justify-center rounded font-semibold"
                  >
                    <TrashIcon class="h-6 w-6 mr-1" />
                    Excluir
                  </button>
                </div>
                <div v-if="addComida">
                  <button
                    class="w-30 h-8 px-2 bg-green-600 dark:brightness-[.85] flex items-center justify-center rounded font-semibold"
                  >
                    <PlusIcon class="h-6 w-6 mr-1" />
                    Adicionar
                  </button>
                </div>
              </th>
              <td class="px-6 py-4">
                <div class="flex justify-center">
                  <input
                    class="w-10 pl-2 bg-transparent text-gray-200 border rounded leading-tight focus:outline-none focus:bg-gray-600"
                    type="number"
                    step="1"
                    v-bind="quantidade"
                  />
                </div>
              </td>
              <td class="px-6 py-4">{{  }}</td>
              <td class="px-6 py-4"></td>
              <td class="px-6 py-4"></td>
              <td class="px-6 py-4"></td>
              <td class="px-6 py-4"></td>
              <td class="px-6 py-4"></td>
              <td class="px-6 py-4"></td>
              <td class="px-6 py-4"></td>
              <td class="px-6 py-4"></td>
              <td class="px-6 py-4"></td>
              <td class="px-6 py-4"></td>
              <td class="px-6 py-4"></td>
              <td class="px-6 py-4"></td>
            </tr>
            <tr class="border-b dark:bg-gray-700/50 dark:border-gray-700">
              <th
                scope="row"
                class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
              ></th>
              <td class="px-6 py-4"></td>
              <td class="px-6 py-4"></td>
              <td class="px-6 py-4"></td>
              <td class="px-6 py-4"></td>
              <td class="px-6 py-4"></td>
              <td class="px-6 py-4"></td>
              <td class="px-6 py-4"></td>
              <td class="px-6 py-4"></td>
              <td class="px-6 py-4"></td>
              <td class="px-6 py-4"></td>
              <td class="px-6 py-4"></td>
              <td class="px-6 py-4"></td>
              <td class="px-6 py-4"></td>
              <td class="px-6 py-4"></td>
            </tr>
            <tr class="border-b dark:bg-gray-700/50 dark:border-gray-700">
              <th
                scope="row"
                class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
              ></th>
              <td class="px-6 py-4"></td>
              <td class="px-6 py-4"></td>
              <td class="px-6 py-4"></td>
              <td class="px-6 py-4"></td>
              <td class="px-6 py-4"></td>
              <td class="px-6 py-4"></td>
              <td class="px-6 py-4"></td>
              <td class="px-6 py-4"></td>
              <td class="px-6 py-4"></td>
              <td class="px-6 py-4"></td>
              <td class="px-6 py-4"></td>
              <td class="px-6 py-4"></td>
              <td class="px-6 py-4"></td>
              <td class="px-6 py-4"></td>
            </tr>
            <tr class="border-b dark:bg-gray-700/50 dark:border-gray-700">
              <th
                scope="row"
                class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
              ></th>
              <td class="px-6 py-4"></td>
              <td class="px-6 py-4"></td>
              <td class="px-6 py-4"></td>
              <td class="px-6 py-4"></td>
              <td class="px-6 py-4"></td>
              <td class="px-6 py-4"></td>
              <td class="px-6 py-4"></td>
              <td class="px-6 py-4"></td>
              <td class="px-6 py-4"></td>
              <td class="px-6 py-4"></td>
              <td class="px-6 py-4"></td>
              <td class="px-6 py-4"></td>
              <td class="px-6 py-4"></td>
              <td class="px-6 py-4"></td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
</template>
