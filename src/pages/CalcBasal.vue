<script>
import CustomHeader from "../components/Header.vue";
import Sidebar from "../components/Sidebar.vue";
import CalcBasalResult from "../components/CalcBasalResult.vue";

export default {
  components: {
    CustomHeader,
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
      let constanteBaseCaloria = 0;
      let constantePeso = 0;
      let constanteAltura = 0;
      let constanteIdade = 0;
      if (sexo === "Feminino") {
        constanteBaseCaloria = 665.1;
        constantePeso = 9.56;
        constanteAltura = 1.8;
        constanteIdade = 4.7;
      } else {
        constanteBaseCaloria = 66.5;
        constantePeso = 13.75;
        constanteAltura = 5.0;
        constanteIdade = 6.8;
      }
      this.result =
        constanteBaseCaloria +
        (constantePeso * peso +
          constanteAltura * altura -
          constanteIdade * idade);
    },
  },
};
</script>

<template>
  <main>
    <CustomHeader />
    <Sidebar />
    <div class="form-container">
      <form
        @submit.prevent="calculaMetabolismoBasal(sexo, idade, peso, altura)"
      >
        <select v-model="sexo" id="sexo">
          <option value="Feminino">Feminino</option>
          <option value="Masculino">Masculino</option>
        </select>

        <label>Idade:</label>
        <input v-model="idade" type="number" name="idade" id="idade" />
        <label>Peso(kg):</label>
        <input v-model="peso" type="number" name="peso" id="peso" />
        <label>Altura(cm):</label>
        <input v-model="altura" type="number" name="altura" id="altura" />

        <button type="submit">Calcular</button>
      </form>

      <CalcBasalResult v-if="result > 0" :content="result" class="result" />
    </div>
  </main>
</template>

<style scoped>
label {
  color: black;
  padding-left: 1%;
}
.form-container {
  position: absolute;
  width: 100%;
  left: 30%;
  top: 30%;
}

.result {
  /* position: absolute;
  left: 25%; */
  margin-left: 15%;
  margin-top: 15%;
}

select {
  width: 10rem;
  height: 2rem;
  margin: 8px 0;

  border: 2px solid #ccc;
  border-radius: 4px;
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
}

button {
  position: absolute;
  top: 200%;
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
