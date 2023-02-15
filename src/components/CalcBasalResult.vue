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
  <div class="result-card">
    <h1>{{ this.content }} kcal</h1>
  </div>
</template>

<style scoped>
.result-card {
  display: flex;
  justify-content: center;
  align-items: center;
  background: rgb(236, 143, 11);
  background: linear-gradient(
    180deg,
    rgba(236, 143, 11, 1) 0%,
    rgba(241, 80, 6, 1) 100%
  );
  color: aliceblue;
  font-weight: bold;
  border-radius: 3px;
  border-style: double;
  border: 5px;
  border-color: #41bf95;
  width: 30rem;
  height: 8rem;
}
</style>
