<template>
  <v-content class="pa-0">
    <v-card v-for="cat in categoryOrder" :key="cat" outlined class="ma-2">
      <v-row align="center" dense no-gutters justify="start">
        <v-col cols="2" v-show="$vuetify.breakpoint.smAndUp">
          <h2
            class="font-weight-bold ma-2 pa-2 break-word justify-center text-center google-font"
            :class="{'subtitle-2': $vuetify.breakpoint.mdAndDown}"
          >{{ cat }}</h2>
        </v-col>
        <v-col :cols="$vuetify.breakpoint.xs ? '12' : '10'">
          <v-container>
            <v-row dense no-gutters align="center" justify="start">
              <v-col cols="auto" v-show="$vuetify.breakpoint.xs">
                <h2
                  class="font-weight-bold subtitle-2 ma-2 pa-2 break-word justify-center text-left google-font"
                >{{ cat }}</h2>
              </v-col>
            </v-row>
            <v-card
              outlined
              class="d-flex pr-4 pl-2 py-2 ma-2"
              :class="$vuetify.theme.dark ?'grey darken-2':'grey lighten-4'"
              color=""
              v-for="(entry, i) in getByCategory(profiles, [cat])"
              :key="i"
            >
              <rowView v-if="$vuetify.breakpoint.smAndUp" :entry="entry" />
              <colView v-else :entry="entry" />
            </v-card>
          </v-container>
        </v-col>
      </v-row>
    </v-card>
  </v-content>
</template>

<script>
import rowView from "@/components/profiles/rowView.vue";
import colView from "@/components/profiles/colView.vue"; 
export default {
  props: {
    profiles: Array
  },
  data() {
    return {
      fab: false,
      categoryOrder: [
        "Cloud Service Providers",
        "Operating Systems",
        "Databases",
        "Application Logic",
        "Web Servers"
      ]
    };
  },
  components: {
    rowView,
    colView
  },
  methods: {
    make_linkable(str) {
      return str.replace(/\s+/g, "-").toLowerCase();
    },
    onScroll(e) {
      if (typeof window === "undefined") return;
      const top = window.pageYOffset || e.target.scrollTop || 0;
      this.fab = top > 200;
    },
    toTop() {
      this.$vuetify.goTo(0);
    },
    getByCategory(profiles, category) {
      var filteredProfiles = [];
      var i;
      var j;
      for (i = 0; i < profiles.length; i++) {
        for (j = 0; j < profiles[i].category.length; j++) {
          if (profiles[i].category[j] == category) {
            filteredProfiles.push(profiles[i]);
          }
        }
      }
      return filteredProfiles.sort(function(a, b) {
        if (a["name"] > b["name"]) {
          return 1;
        } else if (a["name"] < b["name"]) {
          return -1;
        }
        return 0;
      });
    },
    
  },
  computed: {
    moveForBottomNavStyle() {
      if (this.$vuetify.breakpoint.smAndDown) {
        return "z-index: 10; bottom: 60px";
      } else {
        return "";
      }
    }
    // function no longer useable since there is a defined category ordr
    // assume that all profiles fall in defined categories in the categoryOrder var,
    // but any additional categories must be directly added to the order or they will not appear
    // categorized() {
    //   var categories = new Set();
    //   var i;
    //   var j;
    //   for (i = 0; i < this.profiles.length; i++) {
    //     for (j = 0; j < this.profiles[i].category.length; j++) {
    //       categories.add(this.profiles[i].category[j]);
    //     }
    //   }
    //   return Array.from(categories);
    // }
  }
};
</script>

<style scoped>
.div {
  max-width: 1000px;
}
.v-chip__content {
  white-space: nowrap;
}
</style>