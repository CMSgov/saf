<template>
  <v-container fluid pa-0>
    <div v-for="(row, index) in normalize_data" :key="index">
      <p class="header">{{row.header}}</p>
      <p class="ma-2">
        <span v-html="row.desc" />
      </p>
      <ul v-if="row.bullets" class="ma-2">
        <li v-for="bullet in row.bullets" :key="bullet">{{bullet}}</li>
      </ul>
      <div v-if="row.examples">
        <div v-for="ex in row.examples" :key="ex" class="ma-4">
        <p class="subheader ma-0">{{ex.title}}</p>
          <prism :language="ex.syntax">{{ex.code}}</prism>
        </div>
      </div>
    </div>
  </v-container>
</template>

<script>
import normalize_data from "@/assets/data/normalize.json";
import Prism from "vue-prism-component";

export default {
  data() {
    return {
      normalize_data: normalize_data.normalize,
    };
  },
  components: {
    Prism,
  },
};
</script>

<style scoped>
.header {
  font-size: 150%;
  font-weight: bold;
  color: #1a73e8;
}
.subheader {
  font-size: 125%;
  font-weight: bold;
  color: #1a73e8;
}
</style>