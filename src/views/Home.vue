<template>
  <v-container fluid class="pa-0 ma-0">
    <v-row justify="center" align="center" class="mx-0">
      <v-col cols="12" lg="10">
        <homeStartScreen />
      </v-col>
    </v-row>
    <!-- MISSION -->

    <v-row justify="center" align="center">
      <v-col md="12" lg="10" xs="12" class="pa-0">
        <v-row justify="center" align="center" class="pa-0">
          <v-col cols="12" sm="4" md="4" lg="4" xl="4" v-for="item in mission.items" :key="item">
            <div class="google-font title" style="text-align: center">{{ make_readable(item.name) }}</div>
            <ul
              v-for="bullet in item.bullets"
              :key="bullet"
              class="google-font pa-2 body-1"
              style="text-align: center"
            >• {{bullet}}</ul>
          </v-col>
        </v-row>
      </v-col>
    </v-row>

    <v-row justify="center" align="center" class="mx-0">
      <v-col
        cols="12"
        lg="10"
        class="py-0"
        :class="this.$vuetify.theme.dark == true ? 'darkModeContainer' : 'lightModeContainer'"
      >
        <whatwedo :whatwedodata="wwd" />
      </v-col>
    </v-row>
  </v-container>

  <!-- <v-container fluid class="pa-0 py-5">
      <v-row justify="center" align="center" style="background:#4C4A78" class="py-5">
        <v-col md="12" lg="10" xs="12" class="py-0">
          <aboutCommunity />
        </v-col>
      </v-row>
  </v-container>-->

  <!--<v-container fluid class="pa-0 py-2">
      <v-row justify="center" align="center">
        <v-col md="12" lg="10" xs="12" class="py-0">
          <events />
        </v-col>
      </v-row>
  </v-container>-->

  <!--<v-container fluid class="pa-0 py-0">
      <v-row
        v-if="showTraining"
        justify="center"
        align="center"
        class="py-2"
        :class="this.$vuetify.theme.dark == true?'grey darken-4':'grey lighten-4'"
      >
        <v-col md="12" lg="10" xs="12" class="py-0">
          <featureEvents />
        </v-col>
      </v-row>
  </v-container>-->

  <!-- <v-container fluid class="pa-0 py-2">
      <v-row justify="center" align="center">
        <v-col md="12" lg="10" xs="12" class="py-0">
          <partners />
        </v-col>
      </v-row>
  </v-container>-->
</template>

<script>
import homeStartScreen from "../components/home/homeScreen";
import whatwedo from "../components/home/whatwedo";
import whatwedodata from "@/assets/data/whatWeDo.json";
import missiondata from "@/assets/data/mission.json";
//import aboutCommunity from "../components/home/aboutCommunity";
//import events from "../components/home/events";
//import featureEvents from "../components/home/featureEvents";
//import partners from "../components/common/partners";

export default {
  components: {
    homeStartScreen,
    whatwedo
    //aboutCommunity,
    //events,
    //featureEvents,
    // partners
  },
  data: () => ({
    wwd: whatwedodata.whatWeDo,
    mission: missiondata.whatWeDo[0]
  }),
  computed: {
    showTraining() {
      return this.$store.state.showFutureTraining;
    }
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
    }
  }
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


