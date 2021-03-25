<template>
  <v-container fluid>
    <div :key="index" class="ms-2">
      <h2>Video Tutorials</h2>
      <v-row justify="center" align="center" class="mx-0 my-8">
        <v-col md="12" lg="10" xs="12" class="pa-0">
          <v-row justify="center" align="center" class="pa-2">
            <v-col sm="4" md="4" lg="4" xl="4" xs="12">
              <VideoCard :item="heimdall_video" />
            </v-col>
            <v-col v-if="!$vuetify.breakpoint.mdAndDown" cols="2" />
            <v-col sm="4" md="4" lg="4" xl="4" xs="12"
              ><VideoCard :item="cinc_video"
            /></v-col> </v-row></v-col
      ></v-row>
    </div>
    <template v-for="(item, index) in resources.items">
      <div :key="index" class="ms-2">
        <h2>{{ item.name }}</h2>
        <span v-html="item.desc" />
        <p
          flat
          dense
          class="ma-2"
          v-for="entry in item.values"
          :key="entry.name"
        >
          <span>
            <a v-if="entry.link" :href="entry.link" target="_blank">{{
              entry.name
            }}</a>
            <a
              v-if="entry.download_link"
              :href="entry.download_link"
              target="_blank"
              download
              >{{ entry.name }}</a
            >
            <!-- <span v-show="entry.desc"> -- {{entry.desc}}</span> -->
          </span>
        </p>
        <v-img
          v-if="item.image"
          :src="require('@/assets/img/tools/' + item.image)"
        />
      </div>
    </template>
  </v-container>
</template>

<script>
import communityData from "@/assets/data/communityData.json";
import trainingData from "@/assets/data/trainingData.json";
import resources from "@/assets/data/resources.json";
import VideoCard from "@/components/gettingstarted/VideoCard.vue";
export default {
  name: "App",
  data: () => ({
    communityData: communityData,
    trainingData: trainingData,
    resources: resources,
    dialog: false,
    dialogData: {
      name: "",
      date: "",
      link: "",
    },
    heimdall_video: {
      name: "VIDEO: Heimdall Docker Installation",
      image: "heimdall",
      link: "https://youtu.be/irFLngy1PCA",
      height: "200px",
    },
    cinc_video: {
      name: "VIDEO: CINC-Auditor Installation",
      image: "cinc",
      link: "https://youtu.be/HSFWE3KEu7o",
      height: "200px",
    },
  }),
  components: {
    VideoCard: VideoCard
  },
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

<style scoped>
.wrap-list-text {
  -webkit-line-clamp: unset !important;
  white-space: normal;
  overflow-wrap: break-word;
  word-wrap: break-word;
  word-break: normal;
  hyphens: none;
  font-size: 150%;
  color: #1a73e8;
}
</style>