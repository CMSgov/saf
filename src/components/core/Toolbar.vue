<template>
  <v-app-bar app>
    <v-app-bar-nav-icon
      class="d-md-none d-lg-none"
      @click="toggleDrawer"
    ></v-app-bar-nav-icon>

    <v-toolbar-title class="px-0">
      <router-link
        :to="{name: 'home'}"
        class
        style="text-decoration:none;font-size:110%"
        :class="this.$vuetify.theme.dark ? 'whiteText' : 'blackText'"
        >{{ communityData.communityName }}</router-link
      >
    </v-toolbar-title>

    <v-spacer />
    <div v-show="$vuetify.breakpoint.smAndUp">
      <v-dialog
        v-model="feedbackModalGetter"
        width="50rem"
        @click:outside="showFeedbackModal"
        slot="activator"
      >
        <template v-slot:activator="{on}">
          <v-btn
            @click="showFeedbackModal"
            style="text-transform: capitalize;"
            text
            >Give Us Feedback!</v-btn
          >
        </template>
        <feedbackModal v-show="feedbackModalGetter"></feedbackModal>
      </v-dialog>
    </div>
    <!-- <feedbackModal v-show="feedbackModalGetter" @close="showFeedbackModal">Hello World!</feedbackModal>
    <div v-show="feedbackModalGetter">
      <v-btn>what</v-btn>
    </div>-->
    <v-spacer />
    <v-btn
      v-for="(link, i) in metalinks"
      :key="i"
      :to="link.to"
      class="ml-2 hidden-sm-and-down"
      style="text-transform: capitalize;"
      text
      @click="onClick($event, link)"
    >
      {{ link.text }}
    </v-btn>

    <v-btn icon v-on:click="darkMode" class="ml-2">
      <v-icon v-if="this.$vuetify.theme.dark">mdi-brightness-7</v-icon>
      <v-icon v-else>mdi-brightness-4</v-icon>
    </v-btn>
  </v-app-bar>
</template>

<script>
  import communityData from "@/assets/data/communityData.json";
  import feedbackModal from "@/components/core/FeedbackModal.vue";
  import {mapMutations, mapGetters} from "vuex";
  export default {
    data() {
      return {
        communityData: communityData,
      };
    },
    components: {
      feedbackModal: feedbackModal,
    },
    computed: {
      metalinks() {
        return this.$store.getters.links.filter((link) => link.meta.enabled);
      },
      ...mapGetters(["feedbackModalGetter"]),
    },
    methods: {
      ...mapMutations(["toggleDrawer"]),
      ...mapMutations(["showFeedbackModal"]),

      onClick(e, item) {
        e.stopPropagation();
        if (item.to || !item.href) return;
        this.$vuetify.goTo(item.href);
      },

      darkMode() {
        let metaThemeColor = document.querySelector("meta[name=theme-color]");
        this.$vuetify.theme.dark = !this.$vuetify.theme.dark;
        if (localStorage)
          localStorage.setItem("darkMode", this.$vuetify.theme.dark);
        if (this.$vuetify.theme.dark) {
          metaThemeColor.setAttribute("content", "#212121");
        } else {
          metaThemeColor.setAttribute("content", "#0277bd");
        }
      },
    },
  };
</script>

<style scoped>
  .whiteText {
    color: white;
  }
  .blackText {
    color: rgba(0, 0, 0, 0.87);
  }
</style>
