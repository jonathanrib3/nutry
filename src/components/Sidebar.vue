<script>
export default {};
</script>

<template>
  <div class="side-container">
    <router-link to="/calc-basal" class="calc-basal"
      >Calculadora de Metabolismo Basal</router-link
    >
    <router-link to="/calc-imc" class="calc-basal">Calculadora IMC</router-link>
    <a href="#" class="calc-basal-3">Calculadora de Alimentos</a>
    <a href="#" class="calc-basal-4">To Be Defined</a>
  </div>
</template>

<style scoped>
.side-container {
  width: 82%;
  height: 6%;
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
