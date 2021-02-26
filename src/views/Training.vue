<template>
  <v-container fluid class="pa-0 ma-0">
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
          <h2>RSVP – InSpec profile developer training for March/April 2021!</h2>
          <p>Sponsored by CMS under the CMS Security Automation Framework, we’re happy to announce plans to again provide training to developers interested in learning to create and maintain InSpec profiles.</p>
          <p>InSpec profiles are a core tool in establishing tailored, transparent, open-source community-based automated security testing content.</p>
          <p>These are free, on-line virtual, hands-on, instructor-led 2-day classes.</p>
          <p>The <a href="https://mitre-inspec-developer.netlify.com/" target="_blank">base introductory InSpec developer class</a> will again be offered on March 30-31, 2021 (9am-4pm both days)</p>
          <p>The <a href="https://mitre-inspec-advanced-developer.netlify.app/" target="_blank">follow-on Advanced InSpec developer class</a> will again be offered on April 13-14, 2021 (9am-4pm both days)</p>
          <p><b>Please RSVP using <a href="https://forms.office.com/Pages/ResponsePage.aspx?id=SNwgxlAdUkmLOd9NVNdNgkOA91ej9MNHss6_kcyA_29UMFAzTkFSSkFaMVdWRUZFREo5QzBNTkUyRy4u" target="_blank">this form</a></b> if you are interested in attending or have additional questions. If you are having trouble with the form, please email <a href="mailto:SAF@groups.mitre.org" target="_blank">SAF@groups.mitre.org.</a></p> 
          <p>A note on prerequisites: For the basic class, knowledge of basic programming concepts, modern language conventions and some working experience with a modern language (e.g., ruby, python, go, etc) is useful. (Inspec is a Ruby Domain-specific language (DSL)). To become more familiar with Ruby, feel free to review the following Ruby primers. For the follow-on advanced class (basic is a preferred prerequisite), we'll be writing InSpec Resources in the Ruby language, so it is highly recommended students of the advanced class unfamiliar with Ruby review the following Ruby primers <a href="https://www.ruby-lang.org/en/documentation/quickstart/" target="_blank">here</a> and on <a href="https://www.youtube.com/watch?v=t_ispmWmdjY&vl=en" target="_blank">youtube.</a></p>
          
          <h2>About CMS SAF Training</h2>
          <p>
            InSpec is an open-source and precise scripting framework to help you test the functionality and security of your systems. Many profiles are available as part of the open source community, with CMS-tailored profiles located on our
            <router-link to="/validation">Validation</router-link>page. Due to the intuitive nature of the InSpec language, developers and security professionals can spend less time debating about
            <i>how</i> to test, and more time solving problems using the
            <a
              href="https://heimdall-lite.cms.gov/"
              target="_blank"
            >Heimdall Lite</a> or
            <a href="https://github.com/mitre/heimdall" target="_blank">Heimdall Server</a> visualization tools.
          </p>
          <p>
            While using existing InSpec profiles is great, tailoring and creating new profiles helps to increase the precision and relevance of security testing for your environment, and helps to streamline the ATO process. ISPG has a process for peer review and vetting of your tailored profiles
            <a
              href="CMS_InSpec_Profile_Lifecycle_SOP_v1.0_20190702.pdf"
              download
            >here.</a>
          </p>
          <p>
            Our partners at MITRE offer regular InSpec training courses. Signup information will be posted here as new training dates become available. You can find recordings of previous courses on the
            <a
              href="https://saf.mitre.org/#/training"
              target="_blank"
            >MITRE Security Automation Framework website.</a>
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

export default {
  data() {
    return {
      communityData: communityData
    };
  },
  components: {
    Header
    // pastTraining
  },
  created() {
    let metaThemeColor = document.querySelector("meta[name=theme-color]");
    if (this.$vuetify.theme.dark) {
      metaThemeColor.setAttribute("content", "#212121");
    } else {
      metaThemeColor.setAttribute("content", "#0277bd");
    }
  }
};
</script>


