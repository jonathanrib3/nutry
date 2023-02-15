<script>
import CustomHeader from "../components/Header.vue";
import Sidebar from "../components/Sidebar.vue";
import CalcImcResult from "../components/CalcImcResult.vue";

export default {
  components: {
    CustomHeader,
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
      if (peso <= 0 || peso <= 4 || altura <= 0 || altura >= 3) {
        alert("Insira peso(kg) E altura(m) válidos!");
        return;
      }
      this.result = peso / (altura * altura);
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
  <main>
    <div class="header">
      <CustomHeader />
    </div>
    <div class="sidebar">
      <Sidebar />
    </div>
    <div class="main-content">
      <form @submit.prevent="calculaImc(peso, altura)">
        <div class="data-inputs">
          <label id="label-peso">Peso(kg):</label>
          <input
            v-model="peso"
            type="number"
            name="peso"
            id="peso"
            step="0.01"
          />
          <label id="label-altura">Altura(m):</label>
          <input
            v-model="altura"
            type="number"
            name="altura"
            id="altura"
            step="0.01"
          />
        </div>
        <button type="submit">Calcular</button>
        <CalcImcResult
          v-if="result > 0 && classificacao.length > 0"
          :result="result"
          :classificacao="classificacao"
          class="result"
        />
      </form>
    </div>
  </main>
</template>

<style lang="css" scoped>
#label-altura {
  padding-left: 2%;
  padding-right: 3%;
}

#label-peso {
  padding-right: 3%;
}

main {
  display: grid;
  grid-template-columns: 1fr 3fr;
  grid-template-rows: 6vh 88vh;
  grid-column-gap: 0px;
  grid-row-gap: 0px;
}

.result {
  margin-top: 10%;
  display: flex;
  justify-content: center;
  height: 100%;
}

.header {
  grid-area: 1 / 1 / 2 / 3;
  background-color: blueviolet;
}

.sidebar {
  grid-area: 2 / 1 / 6 / 2;
  background-color: aquamarine;
}
.main-content {
  grid-area: 2 / 2 / 6 / 3;
  background-color: #333333;
  color: aliceblue;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
}

.data-inputs {
  display: flex;
  justify-content: center;
  align-items: center;
}

button {
  width: 13rem;
  height: 4rem;
  font-size: 1.25rem;
  background-color: #f06537;
  color: white;
  box-shadow: 0px 0px 12px -2px rgba(143, 47, 12, 1);
  border-radius: 5px;
  cursor: pointer;
  border-color: #f06537;
  margin-top: 5%;
  margin-left: 32%;
}

button:hover {
  background-color: #ed8442;
  border-color: #ed8442;
  box-shadow: 0px 0px 12px -2px rgb(200, 98, 60);
}

input[type="number"]::-webkit-inner-spin-button,
input[type="number"]::-webkit-outer-spin-button {
  -webkit-appearance: none;
  margin: 0;
}
input[type="number"] {
  -moz-appearance: textfield;
  appearance: textfield;
  height: 2rem;
  width: 14rem;
}
</style>
