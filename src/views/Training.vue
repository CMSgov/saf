<template>
  <v-container fluid class="pa-0 ma-0" :id="this.$route.name">
    <v-row justify="center" align="center" class="mx-0">
      <v-col cols="12" lg="10" class="pa-0">
        <Header>
          <h3 slot="title">Training</h3>
        </Header>
      </v-col>
    </v-row>
    <v-row justify="center" align="center" class="mx-0">
      <v-col cols="12" lg="10" class="pa-0">
        <v-container fluid>
          <!-- <RSVPBlock /> -->
          <h2>About CMS SAF Training</h2>
          <p>
            InSpec is an open-source and precise scripting framework to help you
            test the functionality and security of your systems. Many profiles
            are available as part of the open source community, with
            CMS-tailored profiles located on our
            <router-link to="/validation">Validation</router-link>page. Due to
            the intuitive nature of the InSpec language, developers and security
            professionals can spend less time debating about <i>how</i> to test,
            and more time solving problems using the
            <a href="https://heimdall-lite.cms.gov/" target="_blank"
              >Heimdall Lite</a
            >
            or
            <a href="https://github.com/mitre/heimdall" target="_blank"
              >Heimdall Server</a
            >
            visualization tools.
          </p>
          <p>
            While using existing InSpec profiles is great, tailoring and
            creating new profiles helps to increase the precision and relevance
            of security testing for your environment, and helps to streamline
            the ATO process. ISPG has a process for peer review and vetting of
            your tailored profiles
            <a
              href="CMS_InSpec_Profile_Lifecycle_SOP_v1.0_20190702.pdf"
              download
              >here.</a
            >
          </p>
          <p>
            Our partners at MITRE offer regular InSpec training courses. Signup
            information will be posted here as new training dates become
            available. You can find recordings of previous courses on the
            <a href="https://saf.mitre.org/#/training" target="_blank"
              >MITRE Security Automation Framework website.</a
            >
          </p>
        </v-container>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
  // import pastTraining from "../components/training/traininginfo";
  import communityData from "@/assets/data/communityData.json";
  import Header from "@/components/core/Header.vue";
  // import RSVPBlock from "@/components/training/RSVPBlock.vue";

  export default {
    data() {
      return {
        communityData: communityData,
      };
    },
    components: {
      Header,
      // RSVPBlock,
      // pastTraining
    },
    created() {
      let metaThemeColor = document.querySelector("meta[name=theme-color]");
      if (this.$vuetify.theme.dark) {
        metaThemeColor.setAttribute("content", "#212121");
      } else {
        metaThemeColor.setAttribute("content", "#0277bd");
      }
    },
  };
</script>
