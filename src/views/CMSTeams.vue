<template>
  <v-container fluid class="pa-0 ma-0">
    <v-row justify="center" align="center" class="mx-0">
      <v-col cols="12" lg="10" class="pa-0">
        <Header>
          <h3 slot="title">CMS Teams Using SAF</h3>
        </Header>
      </v-col>
    </v-row>
    <v-row justify="center" align="center" class="py-0 my-0">
      <v-col md="12" lg="10" xs="12" class="py-3">
        <div class="ml-2">
          <p style="font-size:1.5rem">
            CMS SAF techniques and tools have seen wide adoption by CMS teams.
            Practitioners include:
          </p>
          <CMSTeamsInfo />
        </div>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
  import Header from "@/components/core/Header.vue";
  import CMSTeamsInfo from "@/components/CMSTeams/CMSTeamsInfo";

  export default {
    components: {
      Header,
      CMSTeamsInfo,
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
