<script>
export default {
  props: {
    inputType: String,
    inputName: String,
    inputId: String,
  },
};
</script>

<template>
  <input :type="this.inputType" :name="this.inputName" :id="this.inputId" />
</template>

<style scoped>
input[type="number"]::-webkit-inner-spin-button,
input[type="number"]::-webkit-outer-spin-button {
  -webkit-appearance: none;
  margin: 0;
}
input[type="number"] {
  -moz-appearance: textfield;
  appearance: textfield;
}
</style>
