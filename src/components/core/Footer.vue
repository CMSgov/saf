<template>
  <v-footer
    height="auto"
    class="ma-0 d-none d-sm-flex"
    :class="this.$vuetify.theme.dark == true?'grey darken-4':'white'"
    style="border-color:#e0e0e0;border-width: 1px;border-style: solid;border-bottom: 0;border-left:0;border-right:0"
  >
    <v-container>
      <v-row align="center" justify="center" class="mb-0">
        <v-col md="12" lg="10" xs="12" class="px-0 mx-0">
          <v-divider></v-divider>
          <v-toolbar
            text
            class="pa-0 px-0 mt-3 mx-0 elevation-0"
            style="padding:0 !important"
            :class="this.$vuetify.theme.dark == true?'grey darken-4':'white'"
          >
            <v-btn
              to="/home"
              style="text-transform: capitalize;font-size:150%"
              text
              aria-label="Footer Bottom Button"
              class=""
            >CMS SAF
            </v-btn>
            <v-spacer />
            <v-btn
              href="mailto:saf@cms.hhs.gov"
              class="ml-0 "
              style="text-transform: capitalize;font-size:120%"
              text
              aria-label="Footer Bottom Button"
            >Contact Us</v-btn>
          </v-toolbar>
        </v-col>
      </v-row>
    </v-container>
  </v-footer>
</template>

<script>
import communityData from "@/assets/data/communityData.json";
import FooterData from "@/assets/data/footer.json";
export default {
  data() {
    return {
      communityData: communityData,
      FooterData: FooterData
    };
  }
};
</script>

<style scoped>
.darkThemeTextLink {
  color: #fafafa;
}
.lightThemeTextLink {
  color: #3e4551;
}
</style>