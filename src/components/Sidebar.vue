<script setup>
import DarkMode from "./DarkMode.vue";
</script>

<template>
  <main
    class="side-container bg-nutry-primary dark:brightness-[.80] text-slate-300 h-[100%]"
  >
    <header class="pt-10">
      <nav class="flex justify-center">
        <router-link
          to="/"
          class="hover:bg-nutry-secondary h-16 w-[50%] rounded"
        >
          <h1 class="text-5xl font-bold flex justify-center items-center">
            Nutry
          </h1>
        </router-link>
      </nav>
      <DarkMode />
    </header>

    <nav
      class="side-container text-xl font-semibold pt-16 flex flex-col justify-evenly items-center whitespace-nowrap space-y-14"
    >
      <router-link
        to="/calc-basal"
        class="hover:bg-nutry-secondary h-14 w-[100%] flex items-center justify-center px-2"
        >Calculadora de Metabolismo Basal</router-link
      >
      <router-link
        to="/calc-imc"
        class="hover:bg-nutry-secondary h-14 w-[100%] flex items-center justify-center"
        >Calculadora IMC</router-link
      >
      <router-link
        to="/calc-alimentos"
        class="hover:bg-nutry-secondary h-14 w-[100%] flex items-center justify-center"
        >Calculadora de Alimentos</router-link
      >
    </nav>
  </main>
</template>

<style scoped>
/* .side-container {
  width: 14%;
  height: 10%;
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
} */
</style>
