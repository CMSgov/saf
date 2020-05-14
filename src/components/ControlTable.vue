/*
  phase 0 mvp:
  vuex - dynamic data, totals underneath column, columns
  click on header - as part of filter for true/false
  filters - control names, header names
  default filters
  styling
  */

/*
  text search on first column
  columns = select
  click column = on/off/all
  cosmetics:
    zebra stripe for shading for columns
    wrapping for column headers (no ...s)
    pinstriping/borders on all cells
    swap out the true for inspec/list of 3 things, checkbox and blank for all
    light + dark mode
*/
<template>
<div class="myowndamnwrapper">
  <h1>Control Table</h1>
  <v-container>
    <v-row>
      <v-col>
        <v-combobox v-model="controlFilters" clearable deletable-chips dense :filter="caselessFilter" hide-selected :hint="'If you can see this hint, it probably means you\'re typing a filter that won\'t work'" :items="[{ header: 'Select an option or type one and hit enter' }].concat(controls)" :label="'Control filters'" multiple small-chips/>
      </v-col>
      <v-spacer/>
      <v-col>
        <v-combobox v-model="profileFilters" clearable deletable-chips dense :filter="caselessFilter" hide-selected :hint="'If you can see this hint, it probably means you\'re typing a filter that won\'t work'" :items="[{ header: 'Select an option or type one and hit enter' }].concat(profiles)" :label="'Profile filters'" multiple small-chips/>
      </v-col>
    </v-row>
  </v-container>
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
      controls: 'getControls',
      profiles: 'getProfiles',
      getControlsFilter: 'getControlFilters',
      getProfilesFilter: 'getProfilesFilters',
    }),
    controlFilters: {
      get() {
        return this.getControlFilters;
      },
      set(val) {
        this.setControlFilters(val);
      },
    },
    profileFilters: {
      get() {
        return this.getProfileFilters;
      },
      set(val) {
        this.setProfileFilters(val);
      },
    },
  },
  watch: {
  },
  methods: {
    ...mapMutations({
      setControlFilters: 'setControlFilters',
      setProfileFilters: 'setProfileFilters',
    }),
    caselessFilter(item, queryText, itemText) {
      if(item.header) {
        return false;
      }
      return itemText.toLowerCase().includes(queryText.toLowerCase());
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
      color: white;
    }
  }
}
</style>
