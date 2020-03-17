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
            <h3 slot="title"> Our Training</h3>
            <p slot="subtitle">
              Questions? Please contact
              <a
                style="color:#1565C0;text-decoration: none;"
                :href="`mailto:${communityData.communityEmail}`"
              >{{communityData.communityEmail}}</a>
            </p>
          </Header>
        </v-col>
      </v-row>
    </v-container>

    <v-container fluid class="pa-0 py-2">
      <v-row justify="center" align="center">
        <v-col md="12" lg="10" xs="12" class="py-0">
          <pastTraining />
        </v-col>
      </v-row>
    </v-container>
  </v-content>
</template>

<script>
import pastTraining from "../components/training/traininginfo";
import communityData from "@/assets/data/communityData.json";
import Header from "@/components/core/Header.vue";

export default {
  data() {
    return {
      communityData: communityData
    };
  },
  components: {
    Header,
    pastTraining
  },
  created() {
    let metaThemeColor = document.querySelector("meta[name=theme-color]");
    if (this.$vuetify.theme.dark) {
      metaThemeColor.setAttribute("content", "#212121");
    } else {
      metaThemeColor.setAttribute("content", "#0277bd");
    }
  },

}
</script>


