<template>
  <v-card
    v-if="entry"
    :href="entry.link"
    target="_blank"
    class=" break-word text-none pa-0 ma-0"
    :outlined="!this.$vuetify.theme.dark"
  >
    <v-list class="pa-0" :color="this.$vuetify.theme.dark ? 'grey darken-3' : ''">
      <v-list-item class="ma-0 pa-0 pr-2" dense>
        <v-list-item-avatar class="ma-0 pa-0" width="20px" height="20px">
          <v-img
            v-show="entry.svg"
            :src="require('@/assets/img/svg/' + entry.svg + '.svg')"
            svg-inline
            style="max-width:20px; max-height:20px;"
            class=""
          />
        </v-list-item-avatar>
        {{entry.name}}
      </v-list-item>
    </v-list>
  </v-card>
</template>

<script>
export default {
  props: {
    entry: Object
  }
};
</script>

<style scoped>
.v-list-item-content {
  padding: 0;
}
</style>