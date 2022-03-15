<template>
  <v-container fluid class="pa-2 ma-0">
    <v-row justify="center" align="center" class="mx-0">
      <v-col cols="12" lg="10">
        <homeStartScreen class="mb-4" />
      </v-col>
    </v-row>
    <!-- MISSION -->

    <v-row justify="center" align="center">
      <v-col md="12" lg="10" xs="12" class="pa-0">
        <v-row justify="center" align="center" class="pa-0">
          <v-col
            cols="12"
            sm="4"
            md="4"
            lg="4"
            xl="4"
            v-for="(item, index) in mission.items"
            :key="index"
          >
            <div class="google-font title" style="text-align: center">
              {{ make_readable(item.name) }}
            </div>
            <ul
              v-for="bullet in item.bullets"
              :key="bullet"
              class="google-font pa-2 body-1"
              style="text-align: center"
            >
              •
              {{
                bullet
              }}
            </ul>
          </v-col>
        </v-row>
      </v-col>
    </v-row>
    <v-row justify="center" align="center" class="mx-0 my-8">
      <v-col md="12" lg="10" xs="12" class="pa-0">
        <v-row justify="center" align="center" class="pa-2">
          <v-col sm="4" md="4" lg="4" xl="4" xs="12">
            <wwdBasicCard :item="video" />
          </v-col>
          <v-col v-if="!$vuetify.breakpoint.mdAndDown" cols="2" />
          <v-col sm="4" md="4" lg="4" xl="4" xs="12"
            ><wwdBasicCard :item="whats_new"
          /></v-col> </v-row></v-col
    ></v-row>
    <v-row justify="center" align="center" class="mx-0 mb-2">
      <v-col
        cols="12"
        lg="10"
        class="py-0"
        :class="
          this.$vuetify.theme.dark == true
            ? 'darkModeContainer'
            : 'lightModeContainer'
        "
      >
        <whatwedo :whatwedodata="wwd" />
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
  import homeStartScreen from "../components/home/homeScreen";
  import whatwedo from "../components/home/whatwedo";
  import whatwedodata from "@/assets/data/whatWeDo.json";
  import missiondata from "@/assets/data/mission.json";
  import wwdBasicCard from "@/components/home/wwdComponents/wwdBasicCard.vue";
  //import aboutCommunity from "../components/home/aboutCommunity";
  //import events from "../components/home/events";
  //import featureEvents from "../components/home/featureEvents";
  //import partners from "../components/common/partners";

  export default {
    components: {
      homeStartScreen,
      whatwedo,
      wwdBasicCard,
      //aboutCommunity,
      //events,
      //featureEvents,
      // partners
    },
    data: () => ({
      wwd: whatwedodata.whatWeDo,
      mission: missiondata.whatWeDo[0],
      video: {
        name: "VIDEO: CMS SAF Overview",
        icon: "play-circle",
        icon_sizer: "600%",
        link: "https://youtu.be/Vgr5wR1SFuA",
        height: "200px",
      },
      whats_new: {
        name: "What's New?",
        icon: "newspaper",
        icon_sizer: "600%",
        router_link: "/whats-new",
        height: "200px",
      },
    }),
    computed: {
      showTraining() {
        return this.$store.state.showFutureTraining;
      },
    },
    created() {
      let metaThemeColor = document.querySelector("meta[name=theme-color]");
      if (this.$vuetify.theme.dark) {
        metaThemeColor.setAttribute("content", "#212121");
      } else {
        metaThemeColor.setAttribute("content", "#0277bd");
      }
    },
    methods: {
      make_readable(str) {
        return str.replace(/_/, " ");
      },
    },
  };
</script>

<style scoped>
  /* for large screen */
  @media screen and (min-width: 600px) {
    .container-margin-top {
      margin-top: 40px;
    }
  }
  /* for small screen */
  @media screen and (max-width: 600px) {
  }
</style>
