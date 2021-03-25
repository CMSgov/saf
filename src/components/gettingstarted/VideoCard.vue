<template>
  <v-hover v-slot:default="{ hover }">
    <v-card
      outlined
      class="d-flex flex-column"
      :to="item.router_link"
      :href="item.link"
      :class="hover && (item.link || item.router_link) ? getHighlight() : ''"
      :target="item.link ? '_blank' : ''"
      style="width: 100%"
    >
      <v-icon
        v-if="item.icon"
        large
        style="font-size:300%"
        class="mt-4"
        :color="hover && (item.router_link || item.link) ? '#1a73e8' : ''"
      >mdi-{{ item.icon }}</v-icon>
      <v-img
        v-if="item.image"
        :src="require('@/assets/img/tools/' + item.image + '.png')"
        class="ma-2 mx-auto"
        max-height="100"
        max-width="100"
      />
      <v-card-title class="google-font mt-2 title align-bottom justify-center break-word">
        <!-- :color="hover && (item.router_link || item.link) ? '#1a73e8' : ''" -->
        <v-icon class="mr-2">mdi-{{ item.side_icon }}</v-icon>
        <span v-html="make_readable(item.name)" />
      </v-card-title>
      <v-spacer />
      <v-card-text v-if="item.desc" class="pa-2 body-1">{{ item.desc }}</v-card-text>
    </v-card>
  </v-hover>
</template>

<script>

export default {
  data() {
    return {
      mouseOverCheck: "",
    };
  },
  props: {
    item: Object,
  },
  components: {
    //toolBlock
  },
  methods: {
    make_readable(str) {
      return str.replace(/_/, " ");
    },
    getHighlight() {
      return {
        lighten: this.$vuetify.theme.isDark,
        darken: !this.$vuetify.theme.isDark,
      };
    }
  }
};
</script>

<style scoped lang="scss">
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

.lighten {
  background-color: lighten(#1d1d1d, 20%);
}

.darken {
  background-color: darken(#ffff, 20%);
}

</style>