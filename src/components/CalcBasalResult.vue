<script>
export default {
  setup() {
    return {};
  },
  props: {
    content: Number,
  },
};
</script>

<template>
  <div
    class="flex justify-center items-center w-[80%] h-32 bg-gradient-to-b from-fuchsia-500/90 to-purple-800 dark:brightness-[.85] text-gray-200 font-bold text-3xl rounded"
  >
    <h1>{{ this.content }} kcal</h1>
  </div>
</template>

<style scoped>
/* .result-card {
  /* display: flex;
  justify-content: center;
  align-items: center;
  background: rgb(168, 37, 175);
  background: linear-gradient(
    180deg,
    rgba(168, 37, 175, 1) 0%,
    rgba(81, 0, 113, 1) 100%
  );
  color: aliceblue;
  font-weight: bold;
  border-radius: 3px;
  border-style: double;
  border: 5px;
  border-color: #41bf95;
  width: 45%;
  height: 170%;
  margin-top: 3%;
} */
</style>
