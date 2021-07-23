<template>
  <v-container fluid class="pa-0 ma-0" :id="this.$route.name">
    <v-row justify="center" align="center" class="mx-0">
      <v-col cols="12" lg="10" class="pa-0 ma-0">
        <Header>
          <h3 slot="title">Validation</h3>
        </Header>
      </v-col>
    </v-row>
    <v-row justify="center" align="center" class="py-0 my-0">
      <v-col md="12" lg="10" xs="12" class="py-3">
        <div class="ml-2">
          <p>
            These open-source community-based InSpec profiles validate the
            security of common system components. CMS ISPG is helping to provide
            stewardship over these profiles, hosted here and at other community
            vendor sites. If you are interested in new profiles, please contact
            us at
            <a :href="mail_link">{{ db.communityEmail }}</a
            >. If you are interested in developing and contributing your own
            profiles, please see our links to Training material.
          </p>
          <p>
            All assessment tests under SAF are associated with CMS ARS 3.1 (NIST
            SP 800-53) Security Controls. Explore these associations in this
            <router-link to="control-table"
              >Control Assessment Range table</router-link
            >!
          </p>
          <p>
            For CMS Cloud users, AWS Foundations and Infrastructure scans are
            also provided via AWS SecurityHub. See the
            <a href="https://cloud.cms.gov" target="_blank"
              >CMS Cloud website</a
            >
            for details.
          </p>
        </div>
        <profileTemplateCompact :profiles="profiles.profiles" />
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
  import profileTemplateCompact from "@/components/profiles/profileTemplateCompact.vue";
  import Header from "@/components/core/Header.vue";
  import profiles from "@/assets/data/profiles.json";
  import db from "@/assets/data/communityData.json";
  import { mapMutations } from "vuex";

  export default {
    components: {
      profileTemplateCompact,
      Header,
    },
    data() {
      return {
        profiles: profiles,
        db: db,
        isCompact: false,
      };
    },
    computed: {
      mail_link() {
        return "mailto:" + db.communityEmail;
      },
      showCompact() {
        return this.$store.state.isCompact;
      },
    },
    methods: {
      ...mapMutations(["toggleCompact"]),
    },
  };
</script>
