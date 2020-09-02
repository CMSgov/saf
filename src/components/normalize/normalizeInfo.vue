<template>
  <div>
    <p>One major barrier to security automation is having multiple security tools that do not use a common format for representing security data. MITRE SAF uses the Heimdall Data Format (HDF) as a common format to represent normalized security data.</p>
    <v-card class="ma-2 pa-2"> 
      <pre>{{ hdf_example }}</pre>
    </v-card>
    <p>MITRE created the <a href="https://heimdall-tools.mitre.org/" target="_blank"> Heimdall Tools</a> command line toolset to allow the conversion of output from widely used automated security testing tools into HDF. At present, Heimdall Tools can convert output from:</p>
    <ul>
        <li>Sonarqube</li>
        <li>Fortify</li>
        <li>OWASP ZAP</li>
        <li>Burp Suite</li>
        <li>Nessus</li>
        <li>Snyk</li>
        <li>Nikto</li>
    </ul>
  </div>
</template>

<script>
import abbrv_hdf from "@/assets/data/abbrv_hdf.json"

export default {
  data() {
    return {
      hdf_example: abbrv_hdf
    };
  }
//   filters: {
//     pretty: function(value) {
//       return JSON.stringify(JSON.parse(value), null, 2);
//     }
//   }
};
</script>