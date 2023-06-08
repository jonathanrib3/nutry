<script setup>
import Sidebar from "../components/Sidebar.vue";
</script>

<template>
  <main class="grid grid-cols-[1fr_5fr] grid-rows-[100vh]">
    <div class="sidebar col-start-1">
      <Sidebar />
    </div>
    <div class="col-start-2">
      <div class="text-center">
        <h1 class="text-3xl font-bold pt-9">Bem-Vindo(a)!</h1>
        <p class="pt-4 font-semibold">
          Esta é uma plataforma que visa centralizar utilidades a fim de
          auxiliar as pessoas a se nutrirem melhor, sendo elas:
        </p>
        <div class="space-y-8">
          <h2 class="text-xl font-bold pt-14">Cálculo de Metabolismo Basal</h2>
          <p class="font-medium">
            Metabolismo basal ou metabólica basal é definida como a quantidade
            mínima de calorias (medida de energia) necessária para manter
            funções vitais do organismo, como batimentos cardíacos, manutenção
            da temperatura corporal em mamíferos na situação de repouso.
          </p>

          <h2 class="text-xl font-bold">
            Cálculo de IMC - Índice de Massa Corporal
          </h2>
          <p class="font-medium">
            Índice de Massa Corporal é o principal indicador utilizado pela
            Organização Mundial da Saúde que diagnostica a obesidade, o qual é
            calculado utilizando a altura e o peso do indivíduo para tal.
          </p>
          <h2 class="text-xl font-bold">Calculadora de Alimentos</h2>
          <p class="font-medium">
            Calculadora que utiliza dados da TACO - Tabela Brasileira de
            Composição de Alimentos, projeto criado e mantido por pesquisadores
            da UNICAMP com a finalidade de fornecer uma fonte de dados sólida e
            confiável acerca dos nutrientes dos alimentos. Nela contém diversos
            dados de macro e micronutrientes sobre a maioria dos alimentos
            comumente consumidos pela população brasileira. A calculadora de
            alimentos utiliza dessa tabela para calcular a quantidade total de
            calorias contidas a cada 100g de alimentos, lipídeos, proteína,
            carboidratos e fibra alimentar. Basta procurar pelo alimento na
            tabela e adicionar ao total na calculadora.
          </p>
        </div>
      </div>
    </div>
  </main>
</template>

<style scoped>
/* main {
  display: grid;
  grid-template-columns: 1fr 5fr;
  grid-template-rows: 100vh;
  grid-column-gap: 0px;
  grid-row-gap: 0px;
}

.sidebar {
  grid-area: 1 / 1 / 2 / 3;
  background-color: #660066;
}
.main-content {
  grid-area: 1 / 2 / 6 / 3;
  background-color: #333333;
  color: aliceblue;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
} */
</style>
