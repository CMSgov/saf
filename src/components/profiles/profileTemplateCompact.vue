<template>
  <v-content class="pa-0">
    <v-card v-for="cat in categoryOrder" :key="cat" outlined class="ma-2">
      
      <v-row
        align="center"
        dense
        no-gutters
        justify="center"
        :class="$vuetify.theme.dark ?'black':'white'"
      >
        <v-col cols="2" v-show="$vuetify.breakpoint.mdAndUp">
          <h2
            class="font-weight-bold ma-2 break-word justify-center text-center google-font"
            :class="{'subtitle-2': $vuetify.breakpoint.mdAndDown, 'black' : $vuetify.theme.dark, 'white' : !$vuetify.theme.dark}"
          >{{ cat }}</h2>
        </v-col>
        <v-col :cols="$vuetify.breakpoint.xs ? '12' : '10'">
          <v-container class="pa-0">
            <v-row dense no-gutters align="center" justify="center">
              <v-col cols="auto" v-show="$vuetify.breakpoint.smAndDown">
                <h2
                  class="font-weight-bold text-h6 ma-2 break-word justify-center text-center google-font"
                >{{ cat }}</h2>
              </v-col>
            </v-row>
            <v-card
              outlined
              class="d-flex pr-1 pl-1 ma-2"
              :class="$vuetify.theme.dark ?'grey darken-4':'grey lighten-5'"
              v-for="(entry, i) in getByCategory(profiles, [cat])"
              :key="i"
            >
              <rowView v-if="$vuetify.breakpoint.mdAndUp" :entry="entry" />
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
    }
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
