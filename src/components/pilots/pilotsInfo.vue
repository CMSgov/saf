<template>
  <v-container fluid class="py-0">
    <v-col cols="6" mdAndDown="12">
      <v-chip-group column>
        <v-card v-for="(pilot, index) in pilots.pilots" :key="index" outlined class="ma-2 pa-4">{{pilot.name}}</v-card>
      </v-chip-group>
    </v-col>
  </v-container>
</template>

<script>
import communityData from "@/assets/data/communityData.json";
import pilots from "@/assets/data/pilotsData.json";
export default {
  name: "App",
  data: () => ({
    communityData: communityData,
    pilots: pilots,
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