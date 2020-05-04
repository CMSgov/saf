<template>
  <v-chip
    v-if="entry.link"
    :href="entry.link"
    target="_blank"
    class="google-font break-word 2 text-none"
    label
    outlined
  >
    <v-img
      v-show="entry.svg"
      :src="require('@/assets/img/svg/' + entry.svg + '.svg')"
      svg-inline
      max-width="15"
      max-height="15"
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