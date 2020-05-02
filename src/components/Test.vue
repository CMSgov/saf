<template>
<div class="myowndamnwrapper">
  <h1>Vue Tabulator</h1>
  <label>Filter: <input v-model="filterText"/></label>
  <c-grid class="myowndamntable" :data="data" :filter="filter" :frozen-col-count="2">
    <c-grid-column-group v-for="(col, index) in columns" :key="col.value" :caption="col.text">
      <c-grid-column :field="col.value" :caption="index >= 1 ? data.filter(control => control[col.value]).length.toString() : ''" :width="col.width"/>
    </c-grid-column-group>
  </c-grid>
</div>
</template>

<script>
import * as cGridAll from 'vue-cheetah-grid';
import json from "@/assets/data/mitre-saf-control-mapping.json";

export default {
  components: {
    ...cGridAll
  },
  data() {
    return {
      columns: this.getOptions(Object.keys(json[0])),
      data: json,
      filter: undefined,
      filterText: '',
    };
  },
  watch: {
    filterText(text) {
      this.onFilterChange(text);
    },
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
          width: columnWidth,
        },
      ];
      for(let i = 2; i < columnheaders.length; i++) {
        columns.push({ text: columnheaders[i], value: columnheaders[i], align: "center", width: columnWidth });
      }
      return columns;
    },
    onFilterChange(text) {
      if(!text) {
        this.filter = undefined;
      } else {
        this.filter = (record) => record[this.columns[0].value].toLowerCase().includes(this.filterText.toLowerCase());
      }
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
      color: white;
    }
  }
}
</style>
