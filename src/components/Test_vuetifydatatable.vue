/*
  Doesn't seem to support infinite scroll without bringing into play stuff like v-intersect and manually checking for and updating the data oneself - seems very opinionated to like pagination or showing the entire data set.  Doesn't seem to support frozen columns explicitly - might be possible to do it via css/sticky but not a sure thing without doing a lot more work.
  */
<template>
<div class="myowndamnwrapper">
  <h1>Vue Tabulator</h1>
  <v-data-table :dark="true" :fixed-header="true" :headers="columns" :loading-text="'hold your horses'" :items="data"/>
</div>
</template>

<script>
import json from "@/assets/data/mitre-saf-control-mapping.json";

export default {
  components: {
  },
  data() {
    return {
      data: json,
      columns: this.getOptions(Object.keys(json[0])),
    };
  },
  methods: {
    getOptions(columnheaders) {
      const columnWidth = 100;
      let columns = [
        {
          text: columnheaders[0],
          value: columnheaders[0],
          align: "start",
          width: columnWidth,
        },
        {
          text: columnheaders[1],
          value: columnheaders[1],
          align: "center",
          formatter: "tickCross",
          topCalc: "count",
          width: columnWidth,
        },
      ];
      for(let i = 2; i < columnheaders.length; i++) {
        columns.push({ text: columnheaders[i], value: columnheaders[i], align: "center", formatter: "tickCross", topCalc: "count", width: columnWidth });
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
