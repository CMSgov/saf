<template>
  <v-container fluid pa-0>
    <div>
      <p class="mb-2 wrap-list-text">
        <b>Heimdall Data Format</b>
      </p>
      <p
        class="ma-2"
      >One major barrier to security automation is having multiple security tools that do not use a common format for representing security data. MITRE SAF uses the Heimdall Data Format (HDF) as a common format to represent normalized security data. HDF files record vital security data about a completed validation test, such as the test code, description, attributes, and outcome. This allows for the aggregation and analysis of test results from a wide range of validation tools at once.</p>
      <p class="mb-2 wrap-list-text">
        <b>Heimdall Tools</b>
      </p>
      <p class="ma-2">
        MITRE created the
        <a href="https://heimdall-tools.mitre.org/" target="_blank">Heimdall Tools</a> command line toolset to allow the conversion of output from widely used automated security testing tools into HDF. At present, Heimdall Tools can convert output from:
      </p>
      <ul class="ma-2">
        <li>Sonarqube</li>
        <li>Fortify</li>
        <li>OWASP ZAP</li>
        <li>Burp Suite</li>
        <li>Nessus</li>
        <li>Snyk</li>
        <li>Nikto</li>
      </ul>
      <p class="mb-2 wrap-list-text">
        <b>Example HDF Data</b>
      </p>
      <p
        class="ma-2"
      >See below for an example HDF file. HDF records data to describe a validation test and the outcome of running it on a system.</p>
      <v-card class="ma-2 pa-2">
        <pre>{{ hdf_example }}</pre>
      </v-card>
    </div>
  </v-container>
</template>

<script>
import abbrv_hdf from "@/assets/data/abbrv_hdf.json";

export default {
  data() {
    return {
      hdf_example: abbrv_hdf,
    };
  },
};
</script>

<style scoped>
.wrap-list-text {
  -webkit-line-clamp: unset !important;
  white-space: normal;
  overflow-wrap: break-word;
  word-wrap: break-word;
  word-break: normal;
  hyphens: none;
  font-size: 150%;
  color: #1a73e8;
}
</style>