<template>
  <v-container fluid>
    <v-simple-table>
      <template v-slot:default>
        <thead>
          <tr>
            <th class="text-left google-font title">Team</th>
            <th class="text-left google-font title">Scope</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="pilot in pilots.pilots" :key="pilot.name" class="google-font">
            <td class="subtitle-1">{{ pilot.name }}</td>
            <td class="body-2">{{ pilot.scope }}</td>
          </tr>
        </tbody>
      </template>
    </v-simple-table>
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