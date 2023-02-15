<script setup>
import Header from "../components/Header.vue";
import Sidebar from "../components/Sidebar.vue";
</script>

<template>
  <main>
    <Header />
    <Sidebar class="GTB"/>
    <h1>Welcome</h1>
  </main>
</template>

<style scoped>
.GTB {
  height: 100vh;
}
</style>
