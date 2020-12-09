<template>
  <v-container fluid>
    <template v-for="(item, index) in resources.items">
      <div :key="index" class="ms-2">
        <p class="mb-2 wrap-list-text">
          <b>{{ item.name }}</b>
        </p>
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
        <v-template v-if="item.videos">
          <v-row>
            <v-col cols="2"></v-col>
            <v-col
              cols="3"
              v-for="(goal, index) in item.videos.goals"
              :key="index"
              ><p class="table-row-col ma-0">{{ goal.name }}</p></v-col
            >
          </v-row>
          <v-divider class="ma-2" />
          <v-row>
            <v-col cols="2" ><p class="table-row-col ma-0">Install</p></v-col>
            <v-col
              cols="3"
              v-for="goal in item.videos.goals"
              :key="goal"
              class="pa-0"
            >
              <v-row justify="center">
                <v-col
                  cols="9"
                  class="ma-0 pa-0"
                  alignSelf="center"
                  justify="center"
                >
                  <v-card
                    v-for="(link, index) in goal.install_links"
                    :key="index"
                    :href="link.link"
                    target="_blank"
                    class="ma-2"
                    ><v-card-text>{{ link.name }}</v-card-text></v-card
                  >
                </v-col>
              </v-row>
            </v-col>
          </v-row>
          <v-divider class="ma-2" />
          <v-row>
            <v-col cols="2"><p class="table-row-col ma-0">Run</p></v-col>
            <v-col
              cols="3"
              v-for="goal in item.videos.goals"
              :key="goal"
              class="pa-0"
            >
              <v-row justify="center">
                <v-col cols="9" class="ma-0 pa-0">
                  <v-card
                    v-for="(link, index) in goal.run_links"
                    :key="index"
                    :href="link.link"
                    target="_blank"
                    class="ma-2"
                    ><v-card-text>{{ link.name }}</v-card-text></v-card
                  >
                </v-col>
              </v-row>
            </v-col>
          </v-row>
        </v-template>
        <!-- <v-simple-table dark v-if="item.videos">
          <template v-slot:default class="ma-2">
            <thead>
              <tr />
              <tr>
                <th
                  v-for="goal in item.videos.goals"
                  :key="goal"
                  class="text-left"
                >
                  {{ goal.name }}
                </th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="goal in item.videos.goals" :key="goal">
                <td>Install</td>
                <td v-if="goal.labels">
                  {{ goal.install_links }}
                </td>
                <td>Run</td>
                <td>{{ goal.run_links }}</td>
              </tr>
            </tbody>
          </template>
        </v-simple-table> -->
      </div>
    </template>
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
.table-row-col {
  font-size: 125%;
  color: #1a73e8;
  text-align: center;
}
.link-card {

}
</style>