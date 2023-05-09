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
      this.result = (peso / (altura * altura)).toFixed(2);
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
    <header>
      <CustomHeader />
    </header>
    <div class="sidebar">
      <Sidebar />
    </div>
    <div class="main-content">
      <form @submit.prevent="calculaImc(peso, altura)">
        <div class="data-inputs-grid">
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
        <div class="button-grid">
          <button type="submit">Calcular</button>
        </div>
        <div class="result-grid">
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

<style lang="css" scoped>
#label-altura {
  padding-left: 2%;
  padding-right: 3%;
}

#label-peso {
  padding-right: 3%;
}

form {
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: repeat(3, 1fr);
  grid-column-gap: 0px;
  grid-row-gap: 0px;
}

main {
  display: grid;
  grid-template-columns: 1fr 3fr;
  grid-template-rows: 6vh 94vh;
  grid-column-gap: 0px;
  grid-row-gap: 0px;
}

.data-inputs-grid {
  display: flex;
  justify-content: space-evenly;
  align-items: center;
}

.button-grid {
  display: flex;
  justify-content: center;
  align-items: center;
}

.result-grid {
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 5%;
}

header {
  grid-area: 1 / 1 / 2 / 3;
}

.sidebar {
  grid-area: 2 / 1 / 6 / 2;
  background-color: #660066;
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
