<template>
  <v-content class="pa-0">
    <v-container fluid class="pa-0 mt-2">
      <v-row
        justify="center"
        align="center"
        class="py-0 my-0"
        :class="this.$vuetify.theme.dark == true?'grey darken-4':'grey lighten-4'"
      >
        <v-col md="12" lg="10" xs="12" class="py-3 my-0">
          <Header><h3 slot="title">Hardening</h3></Header>
        </v-col>
      </v-row>
    </v-container>
    <v-container fluid>
      <v-row justify="center" align="center" class="py-0 my-0">
        <v-col md="12" lg="10" xs="12" class="py-3 my-0">
          <div class="ma-2 pa-2 ">
            <p>
              These open-source community-based hardening baselines help to securely configure common system components. CMS is helping to provide stewardship over these hardening baselines, hosted here and at other community vendor sites. If you are interested in new hardening baselines, please contact us at
              <a
                :href="mail_link"
              >{{ db.communityEmail }}</a>.
            </p>
            <profileTemplateCompact :profiles="hardening.hardening" />
          </div>
        </v-col>
      </v-row>
    </v-container>
  </v-content>
</template>

<script>
import profileTemplateCompact from "@/components/profiles/profileTemplateCompact.vue";
import Header from "@/components/core/Header.vue";
import hardening from "@/assets/data/hardening.json";
import db from "@/assets/data/communityData.json";
import { mapMutations, mapGetters } from "vuex";

export default {
  components: {
    profileTemplateCompact,
    Header
  },
  data() {
    return {
      hardening: hardening,
      db: db
    };
  },
  computed: {
    mail_link() {
      return "mailto:" + db.communityEmail;
    },
    showCompact() {
      return this.$store.state.isCompact;
    }
  },
  methods: {
    ...mapMutations(["toggleCompact"]),
    ...mapGetters(["isCompactGetter"])
  }
};
</script>