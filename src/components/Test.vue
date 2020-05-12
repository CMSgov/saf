/*
  phase 0 mvp:
  vuex - dynamic data, totals underneath column, columns
  click on header - as part of filter for true/false
  filters - control names, header names
  default filters
  styling
  */
<template>
<div class="myowndamnwrapper">
  <h1>Vue Tabulator</h1>
  <label>Filter: <input type="text" v-debounce:100ms.fireonempty="setFilterText"/></label>
  <c-grid class="myowndamntable" :data="data" :frozen-col-count="2">
    <c-grid-column-group v-for="(col, index) in columns" :key="col.value" :caption="col.text">
      <c-grid-column :field="col.value" :caption="index >= 1 ? data.filter(control => control[col.value]).length.toString() : ''" :width="col.width"/>
    </c-grid-column-group>
  </c-grid>
</div>
</template>

<script>
import { createNamespacedHelpers } from 'vuex';
import * as cGridAll from 'vue-cheetah-grid';

const { mapGetters, mapMutations } = createNamespacedHelpers('controlTable');

export default {
  components: {
    ...cGridAll
  },
  data() {
    return {
    };
  },
  computed: {
    ...mapGetters({
      data: 'getData',
      columns: 'getColumns',
      getFilterText: 'getFilterText',
    }),
  },
  watch: {
  },
  methods: {
    ...mapMutations({
      setFilterText: 'setFilterText',
    }),
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
