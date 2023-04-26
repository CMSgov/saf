<template>
  <v-container fluid class="py-0 mt-6">
      <Header>
          <h3 slot="title" style="font-size: 3rem; color: ">
              CMS Security Automation Framework</h3>
          <p slot="subtitle" class="mt-4 title">
              {{ communityData.communityShortDescription }}
          </p>
      </Header>
      <p class="ma-0">
          <ul class="title mt-4">
              <li>The ACT (Adaptive Capabilities Testing) team will accept security testing data from this framework. See the <router-link to="/faq#act">FAQ</router-link> for more on the ACT program.</li>
              <li>Developers can harden and run validation security early and often in their environments, using their own orchestration, functional and unit testing systems, to keep security defects as low as possible.</li>
              <li>ARS (Acceptable Risk Safeguards) 5 Support: CMS SAF has updated relevant InSpec profiles (see “ARS 5” links on our <a href=\"https://saf.cms.gov/#/validate\">Validate page</a>) to allow teams to validate against CMS’ latest organizational-specific requirements.</li>
              <li>Open-source tool support: The SAF CLI’s <a href=\"https://github.com/mitre/saf#convert-hdf-to-other-formats\">\"convert\"</a> tool continues to support import/export/interchange of security data for a variety of open-source and vendor security tools such as AWS Security Hub, Snyk, Scoutsuite, and Splunk.</li>
          </ul>
      </p>
  </v-container>
</template>


<script>
import communityData from "@/assets/data/communityData.json";
export default {
    data() {
        return {
            communityData: communityData
        };
    },
    methods: {
        color_mode() {
            if (this.$vuetify.theme.dark) return "color:white";
            return "color:grey lighten-4";
        }
    }
};
</script>
