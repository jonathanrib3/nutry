<script>
import Sidebar from "../components/Sidebar.vue";
import CalcImcResult from "../components/CalcImcResult.vue";

export default {
  components: {
    Sidebar,
    CalcImcResult,
  },
  data() {
    return {
      result: 0,
      classificacao: "",
    };
  },
  methods: {
    calculaImc(peso, altura) {
      const pesoValor = peso.includes(",")
        ? parseFloat(peso.replace(",", "."))
        : parseFloat(peso);
      const alturaValor = altura.includes(",")
        ? parseFloat(altura.replace(",", "."))
        : parseFloat(altura);
      console.log(typeof pesoValor, typeof alturaValor);
      if (
        pesoValor <= 0 ||
        pesoValor <= 4 ||
        alturaValor <= 0 ||
        alturaValor >= 3
      ) {
        alert("Insira peso(kg) E altura(m) válidos!");
        return;
      }
      this.result = Number(
        (pesoValor / (alturaValor * alturaValor)).toFixed(2)
      );
      this.defineClassificacao(this.result);
    },
    defineClassificacao(imc) {
      switch (true) {
        case imc < 18.5:
          this.classificacao = "Abaixo do peso normal";
          break;
        case imc >= 18.5 && imc < 25:
          this.classificacao = "Peso normal";
          break;
        case imc >= 25 && imc < 30:
          this.classificacao = "Excesso de peso";
          break;
        case imc >= 30 && imc < 35:
          this.classificacao = "Obesidade grau I";
          break;
        case imc >= 35 && imc < 40:
          this.classificacao = "Obesidade grau II";
          break;
        case imc >= 40:
          this.classificacao = "Obesidade grau III";
          break;
        default:
          alert("Alguma coisa deu errado");
          break;
      }
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
        @submit.prevent="calculaImc(peso, altura)"
        class="w-[80%] h-[80%] dark:bg-secondary pt-16 px-40 bg-gray-400/20 rounded leading-tight shadow-lg dark:shadow-[0_7px_7px_rgba(255,255,255,0.080)]"
      >
        <div class="flex flex-wrap -mx-3 mb-6">
          <div class="w-full md:w-1/2 px-3 mb-6 md:mb-0">
            <label
              class="block uppercase tracking-wide text-xs font-bold mb-2"
              for="peso"
            >
              Peso (Kg)
            </label>
            <input
              class="appearance-none block w-full bg-gray-200 text-gray-700 border border-red-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
              v-model="peso"
              id="peso"
              type="text"
              pattern="[0-9]+([,\.][0-9]+)?"
              placeholder="50,25"
            />
          </div>
          <div class="w-full md:w-1/2 px-3">
            <label
              class="block uppercase tracking-wide text-xs font-bold mb-2"
              for="altura"
            >
              Altura (m)
            </label>
            <input
              class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
              v-model="altura"
              id="altura"
              type="text"
              pattern="[0-9]+([,\.][0-9]+)?"
              placeholder="1,65"
            />
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
          <CalcImcResult
            v-if="result > 0 && classificacao.length > 0"
            :result="result"
            :classificacao="classificacao"
          />
        </div>
      </form>
    </div>
  </main>
</template>
