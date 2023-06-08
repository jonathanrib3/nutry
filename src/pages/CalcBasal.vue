<script>
import Sidebar from "../components/Sidebar.vue";
import CalcBasalResult from "../components/CalcBasalResult.vue";

export default {
  components: {
    Sidebar,
    CalcBasalResult,
  },
  data() {
    return {
      sexo: "",
      result: 0,
    };
  },
  methods: {
    //665,1 + (9,56 x Peso) + (1,8 x Altura em cm) – (4,7 x Idade).
    //66,5 + (13,75 x Peso) + (5,0 x Altura em cm) – (6,8 x Idade).
    calculaMetabolismoBasal(sexo, idade, peso, altura) {
      if (!sexo) {
        alert("Escolha o sexo desejado!");
        return;
      }
      if (idade <= 0 || peso <= 0 || altura <= 0) {
        alert("Insira idade, peso e altura válidos!");
        return;
      }
      const dadosNumericosConvertidos = {
        alturaValor: Number(altura),
        idadeValor: idade.includes(",")
          ? parseFloat(idade.replace(",", "."))
          : parseFloat(idade),
        pesoValor: peso.includes(",")
          ? parseFloat(peso.replace(",", "."))
          : parseFloat(peso),
      };

      const constantes = {
        baseCaloria: 0,
        peso: 0,
        altura: 0,
        idade: 0,
      };

      if (sexo === "Feminino") {
        constantes.baseCaloria = 665.1;
        constantes.peso = 9.56;
        constantes.altura = 1.8;
        constantes.idade = 4.7;
      } else {
        constantes.baseCaloria = 66.5;
        constantes.peso = 13.75;
        constantes.altura = 5.0;
        constantes.idade = 6.8;
      }
      this.result =
        constantes.baseCaloria +
        (constantes.peso * dadosNumericosConvertidos.pesoValor +
          constantes.altura * dadosNumericosConvertidos.alturaValor -
          constantes.idade * dadosNumericosConvertidos.idadeValor);
    },
  },
};
</script>

<template>
  <main class="grid grid-cols-[1fr_5fr] grid-rows-[100vh]">
    <div class="col-start-1">
      <Sidebar />
    </div>

    <div class="col-start-2 flex justify-center items-center bg-primary">
      <form
        @submit.prevent="calculaMetabolismoBasal(sexo, idade, peso, altura)"
        class="w-[80%] h-[80%] dark:bg-secondary pt-16 px-40 bg-gray-400/20 rounded leading-tight shadow-lg dark:shadow-[0_7px_7px_rgba(255,255,255,0.080)]"
      >
        <div class="flex flex-wrap -mx-3 mb-6">
          <div class="w-full md:w-1/2 px-3 mb-6 md:mb-0">
            <label
              class="block uppercase tracking-wide text-xs font-bold mb-2"
              for="grid-first-name"
            >
              Peso (Kg)
            </label>
            <input
              class="appearance-none block w-full bg-gray-200 text-gray-700 border border-red-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
              v-model="peso"
              id="peso"
              type="text"
              pattern="[0-9]+([,\.][0-9]+)?"
              placeholder="50,00"
            />
          </div>
          <div class="w-full md:w-1/2 px-3">
            <label
              class="block uppercase tracking-wide text-xs font-bold mb-2"
              for="altura"
            >
              Altura (cm)
            </label>
            <input
              class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
              v-model="altura"
              id="altura"
              type="text"
              pattern="[0-9]+"
              placeholder="165"
            />
          </div>
        </div>
        <div class="flex flex-wrap -mx-3 mb-6">
          <div class="w-full md:w-1/2 mb-6 md:mb-0 px-3">
            <label
              class="block uppercase tracking-wide text-xs font-bold mb-2"
              for="idade"
            >
              Idade
            </label>
            <input
              class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
              v-model="idade"
              id="idade"
              type="text"
              placeholder="18"
              pattern="[0-9]+{,2}"
            />
          </div>
          <div class="w-full md:w-1/2 mb-6 md:mb-0 px-3">
            <label
              class="block uppercase tracking-wide text-xs font-bold mb-2"
              for="sexo"
            >
              Sexo
            </label>
            <div class="relative">
              <select
                class="block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                id="sexo"
                v-model="sexo"
              >
                <option value="Feminino">Feminino</option>
                <option value="Masculino">Masculino</option>
              </select>
              <div
                class="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700"
              >
                <svg
                  class="fill-current h-4 w-4"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                >
                  <path
                    d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"
                  />
                </svg>
              </div>
            </div>
          </div>
        </div>
        <div class="flex justify-center items-center pt-7">
          <button
            class="w-52 h-16 bg-nutry-primary hover:bg-nutry-secondary text-white dark:brightness-[.80] font-semibold text-xl border rounded shadow appearance-none border-[#9002bf]"
            type="submit"
          >
            Calcular
          </button>
        </div>
        <div class="flex justify-center items-center pt-7">
          <CalcBasalResult v-if="result > 0" :content="result" class="result" />
        </div>
      </form>
      <!-- <form
        @submit.prevent="calculaMetabolismoBasal(sexo, idade, peso, altura)"
        class="grid grid-cols-1 grid-rows-3"
      >
        <div class="flex justify-center items-center row-start-1 space-x-4">
          <label> Sexo: </label>
          <select v-model="sexo" id="sexo">
            <option value="Feminino">Feminino</option>
            <option value="Masculino">Masculino</option>
          </select>

          <label id="label-idade">Idade:</label>
          <input
            v-model="idade"
            type="number"
            name="idade"
            id="idade"
            class="rounded w-20 h-8 bg-zinc-400 opacity-25"
          />
          <label id="label-peso">Peso(kg):</label>
          <input v-model="peso" type="number" name="peso" id="peso" />
          <label id="label-altura">Altura(cm):</label>
          <input v-model="altura" type="number" name="altura" id="altura" />
        </div>
        button { * /width: 13rem; height: 4rem; font-size: 1.25rem;
        background-color: #f06537; color: white; box-shadow: 0px 0px 12px -2px
        rgba(143, 47, 12, 1); border-radius: 5px; cursor: pointer; border-color:
        #f06537; } button:hover { background-color: #ed8442; border-color:
        #ed8442; box-shadow: 0px 0px 12px -2px rgb(200, 98, 60); } */
        <div class="flex justify-center items-center row-start-2 pt-7">
          <button
            class="w-52 h-16 bg-nutry-primary hover:bg-nutry-secondary text-white dark:brightness-75 font-semibold text-xl border rounded shadow appearance-none border-[#9002bf]"
            type="submit"
          >
            Calcular
          </button>
        </div>
        <div class="flex justify-center items-center row-start-3">
          <CalcBasalResult v-if="result > 0" :content="result" class="result" />
        </div>
      </form> -->
    </div>
  </main>
</template>
