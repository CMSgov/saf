<template>
  <v-navigation-drawer v-model="drawer" app width="300px" temporary>
    <!-- <v-flex xs12 class="pa-2 white" style="border-bottom: 2px solid rgb(224, 224, 224);">
      <v-img
            :src="require('@/assets/img/logo.png')"
            :lazy-src="require('@/assets/img/logo.png')"
            width="10vh">
            <v-layout
                slot="placeholder"
                fill-height
                align-center
                justify-center
                ma-0
            >
                <v-progress-circular indeterminate color="grey lighten-5"></v-progress-circular>
            </v-layout>
      </v-img>
      <p class=" mt-2" style="font-size:130%">ghh</p>
      
    </v-flex>-->

    <v-list-item>
      <v-list-item-content>
        <v-list-item-title class="google-font" style="font-size: 130%"
          ><img
            slot="img"
            :src="require('@/assets/img/svg/saf_logo.svg')"
            style="width: 2rem; height: 2rem; vertical-align: middle"
            class="mr-2"
          />{{ communityData.communityName }}</v-list-item-title
        >
        <!-- <v-list-item-subtitle class="google-font">
            Google Developers Group
        </v-list-item-subtitle>-->
      </v-list-item-content>
    </v-list-item>

    <v-divider />
    <v-dialog
      v-model="feedbackModalGetter"
      width="50rem"
      @click:outside="showFeedbackModal"
    >
      <template v-slot:activator="{on}">
        <v-btn
          class="ma-2"
          @click="showFeedbackModal"
          style="text-transform: capitalize;"
          text
          >Give Us Feedback!</v-btn
        >
      </template>
      <feedbackModal v-show="feedbackModalGetter"></feedbackModal>
    </v-dialog>
    <v-divider />

    <v-list dense>
      <ul v-for="(link, i) in links" :key="i" class="ma-0 pa-0">
        <v-list-item
          v-show="link.meta.enabled"
          :to="link.to"
          :href="link.href"
          @click="onClick($event, link)"
          class="pl-0"
          color="primary"
        >
          <v-list-item-icon class="pl-4">
            <v-icon>{{
              link.meta.enabled ? link.icon : "mdi-close-circle-outline"
            }}</v-icon>
          </v-list-item-icon>

          <v-list-item-content>
            <v-list-item-title v-text="link.text" />
          </v-list-item-content>
        </v-list-item>
      </ul>
    </v-list>

    <!--<template v-slot:append>
      <div class="pa-2">
        <v-btn text block>Logout</v-btn>
      </div>
    </template>--->
  </v-navigation-drawer>
</template>

<script>
  import communityData from "@/assets/data/communityData.json";
  import feedbackModal from "@/components/core/FeedbackModal.vue";
  // Utilities
  import {mapGetters, mapMutations} from "vuex";
  export default {
    name: "CoreDrawer",
    data() {
      return {
        communityData: communityData,
      };
    },
    components: {
      feedbackModal: feedbackModal,
    },
    computed: {
      ...mapGetters(["links"]),
      ...mapGetters(["feedbackModalGetter"]),
      drawer: {
        get() {
          return this.$store.state.drawer;
        },
        set(val) {
          this.setDrawer(val);
        },
      },
    },
    methods: {
      ...mapMutations(["setDrawer"]),
      ...mapMutations(["showFeedbackModal"]),
      onClick(e, item) {
        e.stopPropagation();
        if (item.to === "/") {
          this.$vuetify.goTo(0);
          this.setDrawer(false);
          return;
        }
        if (item.to || !item.href) return;
        this.$vuetify.goTo(item.href);
        this.setDrawer(false);
      },
    },
  };
</script>
