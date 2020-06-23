<template>
    <v-chip
      v-if="entry.link"
      :href="entry.link"
      target="_blank"
      class="google-font break-word text-none pa-2"
      color="grey darken-3"
      :outlined="!this.$vuetify.theme.dark"
    >
      <v-img
        v-show="entry.svg"
        :src="require('@/assets/img/svg/' + entry.svg + '.svg')"
        svg-inline
        style="max-width:15px; max-height:15px;"
        class="mr-2"
      />
      {{ entry.name }}
    </v-chip>
</template>

<script>
export default {
  props: {
    entry: Object
  }
};
</script>