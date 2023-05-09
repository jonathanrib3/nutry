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
    <header>
      <CustomHeader />
    </header>

    <div class="sidebar">
      <Sidebar />
    </div>

    <div class="main-content">
      <form
        @submit.prevent="calculaMetabolismoBasal(sexo, idade, peso, altura)"
      >
        <div class="data-inputs-grid">
          <select v-model="sexo" id="sexo">
            <option value="Feminino">Feminino</option>
            <option value="Masculino">Masculino</option>
          </select>

          <label id="label-idade">Idade:</label>
          <input v-model="idade" type="number" name="idade" id="idade" />
          <label id="label-peso">Peso(kg):</label>
          <input v-model="peso" type="number" name="peso" id="peso" />
          <label id="label-altura">Altura(cm):</label>
          <input v-model="altura" type="number" name="altura" id="altura" />
        </div>
        <div class="button-grid">
          <button type="submit">Calcular</button>
        </div>
        <div class="result-grid">
          <CalcBasalResult v-if="result > 0" :content="result" class="result" />
        </div>
      </form>
    </div>
  </main>
</template>

<style scoped>
#label-idade {
  margin-left: 2%;
  margin-right: 1%;
}

#label-peso {
  margin-left: 1%;
  margin-right: 1%;
}

#label-altura {
  margin-left: 1%;
  margin-right: 1%;
}

main {
  display: grid;
  grid-template-columns: 1fr 3fr;
  grid-template-rows: 6vh 94vh;
  grid-column-gap: 0px;
  grid-row-gap: 0px;
}

form {
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: repeat(3, 1fr);
  grid-column-gap: 0px;
  grid-row-gap: 0px;
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

.data-inputs-grid {
  display: flex;
  justify-content: space-evenly;
  align-items: center;
}

.button-grid {
  display: flex;
  justify-content: center;
  margin-top: 3%;
}

.result-grid {
  display: flex;
  justify-content: center;
  margin-top: 3%;
}

select {
  width: 10rem;
  height: 2rem;
  margin: 8px 0;

  border: 2px solid #ccc;
  border-radius: 4px;
}

input {
  height: 2rem;
  width: 12rem;
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
