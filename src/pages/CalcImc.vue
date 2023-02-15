<script>
import CustomHeader from "../components/Header.vue";
import Sidebar from "../components/Sidebar.vue";
import CalcImcResult from "../components/CalcImcResult.vue";

export default {
  components: {
    CalcImcResult,
    CustomHeader,
    Sidebar,
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
        case imc > 18.5 && imc < 25:
          this.classificacao = "Peso normal";
          break;
        case imc > 25 && imc < 30:
          this.classificacao = "Excesso de peso";
          break;
        case imc > 30 && imc < 35:
          this.classificacao = "Obesidade grau I";
          break;
        case imc > 35 && imc < 40:
          this.classificacao = "Obesidade grau II";
          break;
        default:
          this.classificacao = "Obesidade grau III";
      }
    },
  },
};
</script>

<template>
  <main>
    <CustomHeader />
    <Sidebar />
    <div class="form-container">
      <form @submit.prevent="calculaImc(peso, altura)">
        <label>Peso(kg):</label>
        <input v-model="peso" type="number" name="peso" id="peso" step="0.01" />
        <label>Altura(m):</label>
        <input
          v-model="altura"
          type="number"
          name="altura"
          id="altura"
          step="0.01"
        />

        <button type="submit">Calcular</button>
      </form>
    </div>
    <CalcImcResult
      v-if="result > 0 && classificacao.length > 0"
      :result="result"
      :classificacao="classificacao"
      class="result"
    />
  </main>
</template>

<style scoped>
label {
  color: black;
  padding-left: 8%;
}
.form-container {
  position: absolute;
  width: 100%;
  left: 30%;
  top: 30%;
}

.result {
  position: absolute;
  left: 45%;
  top: 65%
}

input {
  margin-left: 0.5rem;
}

input[type="number"]::-webkit-inner-spin-button,
input[type="number"]::-webkit-outer-spin-button {
  -webkit-appearance: none;
  margin: 0;
}
input[type="number"] {
  -moz-appearance: textfield;
  appearance: textfield;
  width: 15%;
  height: 10%;
}

button {
  position: absolute;
  top: 300%;
  right: 58%;
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
</style>
