<template>
  <v-card outlined class="d-flex flex-column" :to="item.link" flat style="width: 100%">
    <!--<toolBlock v-if="item.tools" :tools="item.tools" />-->
    
      <v-icon v-if="item.icon" large style="font-size:300%" class="mt-4">{{ item.icon }}</v-icon>
      <transition v-if="item.graphic" name="fade">
        <v-img
          v-on:mouseover="mouseOverCheck = current"
          v-on:mouseout="mouseOverCheck = ''"
          :key="current"
          :src="mouseOverCheck === current ? require('@/assets/img/gif/' + item.graphic + '.gif') : require('@/assets/img/gif/' + item.graphic_frame + '.png')"
          :lazy-src="item.graphic_frame"
          v-on="on"
          class="ma-2"
          max-height="328"
        />
      </transition>

      <v-img
        v-else-if="item.graphic_frame"
        v-on:mouseover="mouseOverCheck = current"
        v-on:mouseout="mouseOverCheck = ''"
        v-bind:src="mouseOverCheck === current ? require('@/assets/img/gif/' + item.graphic + '.gif') : require('@/assets/img/gif/' + item.graphic_frame + '.png')"
        v-on="on"
        class="ma-2"
        max-height="328"
      />
    <v-card-title class="google-font mt-2 title align-bottom justify-center break-word">
      <v-icon class="mr-2">{{item.side_icon}}</v-icon>
      {{ make_readable(item.name) }}
    </v-card-title>
    <v-spacer />
    <v-card-text class="google-font pa-2">{{ item.desc }}</v-card-text>
    <v-spacer />
    <v-card-actions class="pa-0">
      <v-container row dense>
        <v-row justify="center">
          <v-tooltip top>
            <template v-slot:activator="{ on }">
              <v-btn
                color="primary"
                v-if="item.app_link"
                :href="item.app_link"
                target="_blank"
                text
                v-on="on"
              >
                <v-icon>mdi-desktop-classic</v-icon>
              </v-btn>
            </template>
            <span>Demo</span>
          </v-tooltip>
          <v-tooltip top>
            <template v-slot:activator="{ on }">
              <v-btn
                color="primary"
                v-if="item.doc_link"
                :href="item.doc_link"
                target="_blank"
                text
                v-on="on"
              >
                <v-icon>mdi-file-document</v-icon>
              </v-btn>
            </template>
            <span>Documentation</span>
          </v-tooltip>
          <v-tooltip top>
            <template v-slot:activator="{ on }">
              <v-btn
                color="primary"
                v-if="item.github_link"
                :href="item.github_link"
                target="_blank"
                text
                v-on="on"
              >
                <v-icon>mdi-github</v-icon>
              </v-btn>
            </template>
            <span>GitHub</span>
          </v-tooltip>
        </v-row>
      </v-container>
    </v-card-actions>
  </v-card>
</template>

<script>
// see https://stackoverflow.com/questions/58556447/is-there-a-card-footer-card-deck-feature-on-vuetify
// for details on arranging card components

//import toolBlock from "@/components/home/wwdComponents/toolBlock.vue";
export default {
  data() {
    return {
      mouseOverCheck: ""
    };
  },
  props: {
    item: Object
  },
  components: {
    //toolBlock
  },
  methods: {
    make_readable(str) {
      return str.replace(/_/, " ");
    }
  }
};
</script>

<style scoped>
.card-outer {
  position: relative;
  padding-bottom: 10px;
}
.card-actions {
  position: absolute;
  bottom: 0;
}
.flexcard {
  display: flex;
  flex-direction: column;
}
.svg-style {
  max-width: 24px;
  max-height: 24px;
}
</style>
