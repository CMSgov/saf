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
            <h3 slot="title"><template v-if="$vuetify.breakpoint.xs">Implementation/<br />Hardening</template><template v-else>Implementation/Hardening</template></h3>
          </Header>
        </v-col>
      </v-row>
    </v-container>
    <br />
    <v-container fluid class="pa-0 py-2">
      <v-row justify="center" align="center">
        <v-col md="12" lg="10" xs="12" class="py-0">
          <v-container fluid>
            <p class="google-font" style="font-size:150%;color: #1a73e8;">CMS Official Content</p>
            <p>CMS SAF implementation and hardening content will be added to this site as it is developed.</p>
            <p class="google-font" style="font-size:150%;color: #1a73e8;">Partner Content</p>
            <p>
              The open-source community has developed basic hardening baselines to help securely configure common system components. Our partners at MITRE are providing stewardship over these hardening baselines <a href="https://saf.mitre.org/#/hardening">here</a>. Please note that this content is not designed to align with CMS ARS controls. 
            </p>
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


