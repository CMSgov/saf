/*
  csv-loader component is unnecessary for our usecase.  being able to directly import csvs and have it be autoconverted to json is pretty dope tho esp the conversion from string true/false to booleans.
  */
<!--
Notes: Loading the full on MITRE 900 controls csv seems to streach the limits of the 
filereader library. We may have to account for this...

However this seems to work.

see: https://stackoverflow.com/questions/40325410/filereader-is-unable-to-read-large-files

Second note: 

It looks like this template should have some load and next buttons however they are not showing up

Not sure if this library vs the more formal javascript csv libary is better but this may be good
enough for the limited about we use csv.

-->

<template>
  <div>
    <section>
      <csv-loader v-on:loadSuccess="loadSuccess"></csv-loader>
    </section>

    <section class="table-container">
      <table class="table is-bordered is-hoverable is-fullwidth">
        <thead>
          <tr v-for="(row, rowIndex) in csvHeader" v-bind:key="rowIndex">
            <td v-if="showCheckbox && rowIndex === 0">
              <input type="checkbox" />
            </td>
            <th v-for="(data, colIndex) in row" v-bind:key="colIndex">{{ data }}</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(row, rowIndex) in csvBody" v-bind:key="rowIndex">
            <td v-if="showCheckbox">
              <input type="checkbox" @change="onCheckBoxCheck(row)" />
            </td>
            <td v-for="(data, colIndex) in row" v-bind:key="colIndex">{{ data }}</td>
          </tr>
        </tbody>
      </table>
    </section>
    {{ test }}
  </div>
</template>

<script>
import CsvLoader from "vue-csv-loader";
import "vue-csv-loader/dist/csv-loader.css";
import test from "../assets/data/cms-saf-control-mapping.csv";

export default {
  name: "app",
  components: {
    CsvLoader
  },
  data: function() {
    return {
      showCheckbox: true,
      csvHeader: [],
      csvBody: [],
      test: test
    };
  },
  methods: {
    loadSuccess: function(result) {
      this.csvHeader = result.csvHeader;
      this.csvBody = result.csvBody;
    },
    onCheckBoxCheck: function(row) {
      console.log(row);
    }
  }
};
</script>
<style>
table th + th {
  border-left: 1px solid #dddddd;
}
table td + td {
  border-left: 1px solid #dddddd;
}
</style>
