// run with npx vue serve src/components/Test.vue
<template>
  <v-content>
    <div class="myowndamnwrapper">
      <h1>Vue Tabulator</h1>
      <VueTabulator class="myowndamntable" v-model="dados" :options="options" />
    </div>
  </v-content>
</template>

<script>
import { TabulatorComponent } from "vue-tabulator";
// import { VuePapaParse } from "vue-papa-parse";
// import myfile from "../assets/data/mitre-csv.csv";

export default {
  components: {
    VueTabulator: TabulatorComponent
    // VuePapaParse
  },
  data() {
    return {
      dados: this.genData(10, 10),
      options: { columns: this.genOptions(10) }
    };
  },
  methods: {
    genOptions(numcolumns) {
      let columns = [
        {
          title: "CMS ARS 3-1 Control",
          hozAlign: "left",
          field: "CMS ARS 3-1 Control",
          headerFilter: "tickCross",
          headerFilterParams: { tristate: true },
          headerFilterEmptyCheck: function(value) {
            return value === null;
          }
        },
        {
          title: "ALL",
          field: "ALL",
          hozAlign: "center",
          formatter: "tickCross",
          topCalc: "count",
          headerFilter: "tickCross",
          headerFilterParams: { tristate: true },
          headerFilterEmptyCheck: function(value) {
            return value === null;
          }
        }
      ];
      for (let i = 0; i < numcolumns; i++) {
        columns.push({
          title: i.toString(),
          field: i.toString(),
          hozAlign: "center",
          formatter: "tickCross",
          topCalc: "count",
          headerFilter: "tickCross",
          headerFilterParams: { tristate: true },
          headerFilterEmptyCheck: function(value) {
            return value === null;
          }
        });
      }
      console.log("columsn", columns); // eslint-disable-line
      return columns;
    },
    genData(numColumns, numRows) {
      let rows = [];
      for (let j = 0; j < numRows; j++) {
        let row = {
          "CMS ARS 3-1 Control": j.toString(),
          ALL: Math.random() < 0.5
        };
        for (let i = 0; i < numColumns; i++) {
          row[i.toString()] = Math.random() < 0.5;
        }
        rows.push(row);
      }
      console.log("rows", rows); // eslint-disable-line
      return rows;
    }
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
