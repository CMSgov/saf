<template>
  <v-container fluid class="pa-0 ma-0" :id="this.$route.name">
    <v-row justify="center" align="center" class="mx-0">
      <v-col cols="12" lg="10" class="pa-0 ma-0">
        <Header>
          <h3 slot="title">
            Implementation/
            <br v-if="$vuetify.breakpoint.xs" />Hardening
          </h3>
        </Header>
      </v-col>
    </v-row>
    <v-row justify="center" align="center" class="mx-0">
      <v-col cols="12" lg="10" class="pa-0">
        <v-container fluid>
          <p class="ma-0">
            CMS ISPG is helping to provide stewardship over open-source community-based implementation/hardening content to help configure the security of common system components, hosted here and at other community vendor sites. Our partners at MITRE host baseline implementation/hardening content
            <a href="https://saf.mitre.org/#/hardening" target="_blank">here</a>. Over time, CMS will populate this page with overlays to these implementation baselines, tailored to specific CMS-policy requirements.
          </p>
        </v-container>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import Header from "@/components/core/Header.vue";

export default {
  components: {
    Header
    // pastTraining
  }
};
</script>


