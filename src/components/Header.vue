<script>
export default {};
</script>

<template>
  <header>
    <router-link to="/">Nutry</router-link>
  </header>
</template>

<style scoped>
header {
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0;
  padding: 0;
  width: 100%;
  height: 100%;
  font-size: 2vw;
  white-space: nowrap;
  background-color: #990099;
}

header a {
  text-decoration: none;
  color: aliceblue;
  font-size: 2vw;
}

@media (min-width: 300px) and (max-width: 970px) {
  header {
    font-size: 5.8vw;
  }
}
</style>
