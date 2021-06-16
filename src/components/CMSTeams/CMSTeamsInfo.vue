<template>
  <v-container fluid class="py-">
    <v-row class="py-0 my-0">
      <v-col md="10" lg="9" xs="12" xl="6">
        <v-row>
          <v-col
            smAndUp="4"
            xs="12"
            v-for="(CMSTeam, index) in CMSTeams.CMSTeams"
            :key="index"
          >
            <v-card height="150px" width="350px" outlined class="ma-2 pa-4"
              ><p align="center" style="font-size:3rem">
                {{ CMSTeam.name }}
              </p></v-card
            >
          </v-col>
        </v-row>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
  import communityData from "@/assets/data/communityData.json";
  import CMSTeams from "@/assets/data/CMSTeamsData.json";
  import wwdCard from "@/components/home/wwdComponents/wwdBasicCard.vue";
  export default {
    name: "App",
    data: () => ({
      communityData: communityData,
      CMSTeams: CMSTeams,
      wwdCard: wwdCard,
      dialog: false,
      dialogData: {
        name: "",
        date: "",
        link: "",
      },
    }),
    computed: {
      color_mode() {
        if (this.$vuetify.theme.dark) return "darkModeContainer";
        return "lightModeContainer";
      },
      moveForBottomNavStyle() {
        if (this.$vuetify.breakpoint.smAndDown) {
          return "z-index: 10; bottom: 60px";
        } else {
          return "";
        }
      },
    },
    methods: {
      make_linkable(str) {
        return str.replace(/\s+/g, "-").toLowerCase();
      },
      passItemData(item) {
        this.dialogData = item;
      },
    },
  };
</script>
