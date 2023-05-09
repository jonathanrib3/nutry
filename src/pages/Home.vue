<script setup>
import Header from "../components/Header.vue";
import Sidebar from "../components/Sidebar.vue";
</script>

<template>
  <main>
    <header>
      <Header />
    </header>
    <div class="sidebar">
      <Sidebar />
    </div>
    <div class="main-content">
      <h1>Bem-Vindo(a)!</h1>
      <p>
        Esta é uma plataforma que visa centralizar utilidades a fim de auxiliar
        as pessoas a se nutrirem melhor, sendo elas:
      </p>
      <h2>Cálculo de Metabolismo Basal</h2>
      <p>
        Metabolismo basal ou metabólica basal é definida como a quantidade
        mínima de calorias (medida de energia) necessária para manter funções
        vitais do organismo, como batimentos cardíacos, manutenção da
        temperatura corporal em mamíferos na situação de repouso.
      </p>
      <h2>Cálculo de IMC - Índice de Massa Corporal</h2>
      <p>
        Índice de Massa Corporal é o principal indicador utilizado pela
        Organização Mundial da Saúde que diagnostica a obesidade, o qual é
        calculado utilizando a altura e o peso do indivíduo para tal.
      </p>
      <h2>Calculadora de Alimentos</h2>
      <p>
        Calculadora que utiliza dados da TACO - Tabela Brasileira de Composição
        de Alimentos, projeto criado e mantido por pesquisadores da UNICAMP com
        a finalidade de fornecer uma fonte de dados sólida e confiável acerca
        dos nutrientes dos alimentos. Nela contém diversos dados de macro e
        micronutrientes sobre a maioria dos alimentos comumente consumidos pela
        população brasileira. A calculadora de alimentos utiliza dessa tabela
        para calcular a quantidade total de calorias contidas a cada 100g de
        alimentos, lipídeos, proteína, carboidratos e fibra alimentar. Basta
        procurar pelo alimento na tabela e adicionar ao total na calculadora.
      </p>
    </div>
  </main>
</template>

<style scoped>
main {
  display: grid;
  grid-template-columns: 1fr 3fr;
  grid-template-rows: 6vh 94vh;
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
</style>
