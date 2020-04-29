<template>
  <v-container fluid>
    <v-list>
      <template v-for="item in resources.items">
        <v-list-item-group :key="item.name">
          <v-list-item-content class="ms-4">
            <v-list-item-title
              class="google-font mb-2 wrap-list-text"
            >
              <b class>{{item.name}}</b>
            </v-list-item-title>
            <v-list-item class="google-font my-2">{{item.desc}}</v-list-item>
            <v-list-item dense class="ma-0" v-for="entry in item.values" :key="entry.name">
              <span>
                <a v-if="entry.link" :href="entry.link" target="_blank">{{entry.name}}</a>
                <a
                  v-if="entry.download_link"
                  :href="entry.download_link"
                  target="_blank"
                  download
                >{{entry.name}}</a>
                <span v-show="entry.desc"> -- {{entry.desc}}</span>
              </span>
            </v-list-item>
          </v-list-item-content>
        </v-list-item-group>
      </template>
    </v-list>
    <br />
  </v-container>
</template>

<script>
import communityData from "@/assets/data/communityData.json";
import trainingData from "@/assets/data/trainingData.json";
import resources from "@/assets/data/resources.json";
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
      link: ""
    }
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
    }
  },
  methods: {
    make_linkable(str) {
      return str.replace(/\s+/g, "-").toLowerCase();
    },
    passItemData(item) {
      this.dialogData = item;
    }
  }
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
  font-size:150%;
  color: #1a73e8;
}
</style>