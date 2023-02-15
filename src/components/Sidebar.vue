<script>
export default {};
</script>

<template>
  <main>
    <div class="side-container">
      <router-link to="/calc-basal" class="calc-basal"
        >Calculadora de Metabolismo Basal</router-link
      >
      <router-link to="/calc-imc" class="calc-basal"
        >Calculadora IMC</router-link
      >
      <a href="#" class="calc-basal-3"
        >Tabela Brasileira de Composição de Alimentos</a
      >
      <a href="#" class="calc-basal-4">To Be Defined</a>
    </div>
  </main>
</template>

<style scoped>
main {
  background-color: #660066;
  width: 100%;
  height: 100%;
  white-space: nowrap;
}

.side-container a {
  display: flex;
  justify-content: center;
  align-items: center;
  text-decoration: none;
  background-color: #9900cc;
  font-size: 1vw;
  height: 120%;
  width: 124%;
  color: aliceblue;
  margin-top: 15%;
}
</style>
