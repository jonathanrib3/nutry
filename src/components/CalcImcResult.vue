<script>
export default {
  beforeMount() {
    this.defineEstiloResultCard(this.classificacao);
  },
  beforeUpdate() {
    this.defineEstiloResultCard(this.classificacao);
  },
  data() {
    return {
      classificacao_css_class_object: {
        "abaixo-normal": false,
        "peso-normal": false,
        "excesso-peso": false,
        "obesidade-1": false,
        "obesidade-2": false,
        "obesidade-3": false,
      },
    };
  },
  props: {
    result: Number,
    classificacao: String,
  },
  methods: {
    defineEstiloResultCard(classificacao) {
      this.resetaClassesResultCard();
      switch (classificacao) {
        case "Abaixo do peso normal":
          this.classificacao_css_class_object["abaixo-normal"] = true;
          break;
        case "Peso normal":
          this.classificacao_css_class_object["peso-normal"] = true;
          break;
        case "Excesso de peso":
          this.classificacao_css_class_object["excesso-peso"] = true;
          break;
        case "Obesidade grau I":
          this.classificacao_css_class_object["obesidade-1"] = true;
          break;
        case "Obesidade grau II":
          this.classificacao_css_class_object["obesidade-2"] = true;
          break;
        default:
          this.classificacao_css_class_object["obesidade-3"] = true;
          break;
      }
    },
    resetaClassesResultCard() {
      Object.keys(this.classificacao_css_class_object).forEach((key) => {
        this.classificacao_css_class_object[key] = false;
      });
    },
  },
};
</script>

<template>
  <div
    class="w-full h-36 flex text-center justify-center items-center text-3xl font-semibold rounded dark:brightness-[.8] text-gray-200"
    :class="classificacao_css_class_object"
  >
    <div>
      <h1>{{ this.result }} kg/m²</h1>

      <h2>{{ this.classificacao }}</h2>
    </div>
  </div>
</template>

<style lang="css" scoped>
.abaixo-normal {
  background: rgb(108, 11, 236);
  background: linear-gradient(
    180deg,
    rgba(108, 11, 236, 1) 0%,
    rgba(25, 6, 241, 1) 100%
  );
}

.peso-normal {
  background: rgb(37, 175, 38);
  background: linear-gradient(
    180deg,
    rgba(37, 175, 38, 1) 0%,
    rgba(24, 113, 0, 1) 100%
  );
}

.excesso-peso {
  background: rgb(222, 235, 7);
  background: linear-gradient(
    180deg,
    rgba(222, 235, 7, 1) 0%,
    rgba(180, 169, 0, 1) 100%
  );
}

.obesidade-1 {
  background: rgb(242, 155, 4);
  background: linear-gradient(
    180deg,
    rgba(242, 155, 4, 1) 0%,
    rgba(196, 103, 2, 1) 100%
  );
}

.obesidade-2 {
  background: rgb(242, 107, 4);
  background: linear-gradient(
    180deg,
    rgba(242, 107, 4, 1) 0%,
    rgba(196, 18, 2, 1) 100%
  );
}

.obesidade-3 {
  background: rgb(126, 125, 125);
  background: linear-gradient(
    180deg,
    rgba(126, 125, 125, 1) 0%,
    rgba(27, 25, 25, 1) 100%
  );
}
</style>
