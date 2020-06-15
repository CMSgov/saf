<template>
  <v-content class="pa-0">
    <v-container fluid class="pa-0 mt-2">
      <v-row
        justify="center"
        align="center"
        :class="this.$vuetify.theme.dark == true?'grey darken-4':'grey lighten-4'"
        class="py-0 my-0"
      > 
        <v-col md="12" lg="10" xs="12" class="py-3 my-0">
          <Header>
            <h3 slot="title">Implementation/<br v-if="$vuetify.breakpoint.xs"/>Hardening</h3>
          </Header>
        </v-col>
      </v-row>
    </v-container>
    <br />
    <v-container fluid class="pa-0 py-2">
      <v-row justify="center" align="center">
        <v-col md="12" lg="10" xs="12" class="py-0">
          <v-container fluid>
            <p>CMS ISPG is helping to provide stewardship over open-source community-based implementation/hardening content to help configure the security of common system components, hosted here and at other community vendor sites. Our partners at MITRE host baseline implementation/hardening content <a href="https://saf.mitre.org/#/hardening" target="_blank">here</a>. Over time, CMS will populate this page with overlays to these implementation baselines, tailored to specific CMS-policy requirements.</p>
            
          </v-container>
        </v-col>
      </v-row>
    </v-container>
  </v-content>
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


