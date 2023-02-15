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
  <main>
    <div class="result-card" :class="classificacao_css_class_object">
      <div class="result-card-content">
        <h1>{{ this.result }} kg/m²</h1>

        <h2>{{ this.classificacao }}</h2>
      </div>
    </div>
  </main>
</template>

<style lang="css" scoped>
.result-card {
  color: white;
  font-weight: bold;
  border-radius: 3px;
  height: 40%;
  width: 75%;
  padding-top: 1%;
  display: flex;
  justify-content: center;
  align-items: center;
}

.result-card-content {
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: repeat(2, 1fr);
  grid-column-gap: 0px;
  grid-row-gap: 0px;
}

.result-card h1 {
  display: flex;
  justify-content: center;
  align-items: center;
}
.result-card h2 {
  display: flex;
  justify-content: center;
  align-items: center;
}

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
  /* background: rgb(242, 4, 69);
  background: linear-gradient(
    180deg,
    rgba(242, 4, 69, 1) 0%,
    rgba(196, 39, 4, 1) 100%
  ); */
  background: rgb(126, 125, 125);
  background: linear-gradient(
    180deg,
    rgba(126, 125, 125, 1) 0%,
    rgba(27, 25, 25, 1) 100%
  );
}
</style>
