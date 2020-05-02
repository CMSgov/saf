/*
  Tabulator feels kinda laggy.  Data is incorrect for some reason.  Does enable frozen rows and columns and infinite scroll.  CSS doesn't work properly on it when going all the way to the right.
  */
<template>
<div class="myowndamnwrapper">
  <h1>Vue Tabulator</h1>
  <VueTabulator class="myowndamntable" v-model="data" :options="options" />
</div>
</template>

<script>
import { TabulatorComponent } from "vue-tabulator";
import json from "@/assets/data/mitre-saf-control-mapping.json";

export default {
  components: {
    VueTabulator: TabulatorComponent
  },
  data() {
    return {
      data: json,
      options: {
        columns: this.getOptions(Object.keys(json[0])),
        layout: 'fitColumns',
      },
    };
  },
  methods: {
    getOptions(columnheaders) {
      const columnWidth = 100;
      let columns = [
        {
          title: columnheaders[0],
          field: columnheaders[0],
          hozAlign: "left",
          width: columnWidth,
          frozen: true,
        },
        {
          title: columnheaders[1],
          field: columnheaders[1],
          hozAlign: "center",
          formatter: "tickCross",
          topCalc: "count",
          width: columnWidth,
          frozen: true,
        },
      ];
      for(let i = 2; i < columnheaders.length; i++) {
        columns.push({ title: columnheaders[i], field: columnheaders[i], hozAlign: "center", formatter: "tickCross", topCalc: "count", width: columnWidth });
      }
      return columns;
    },
  }
};
</script>

<style lang='scss'>
body {
  background: white;
  height: 100%;
  width: 100%;
  margin: 0;

  .myowndamnwrapper {
    width: 100%;
    height: 98vh;

    .myowndamntable {
      height: 90%;
    }
  }
}


//@import "~vue-tabulator/dist/scss/tabulator_site.scss";
//@import "~vue-tabulator/dist/scss/tabulator_modern.scss";
@import "~vue-tabulator/dist/scss/tabulator_midnight.scss";
//@import "~vue-tabulator/dist/scss/bootstrap/tabulator_bootstrap4cd .scss";
</style>
