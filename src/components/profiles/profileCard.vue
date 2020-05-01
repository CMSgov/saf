<template>
  <v-card target="_blank" class="mx-auto google-font break-word text-none" max-width="350px" label outlined>
    <v-card-title class="body-2 break-word">{{entry.name}}</v-card-title>
    
    <v-card-text>
      <profileChip v-for="link in entry.links" :key="link" :entry="link" />
    </v-card-text>
  </v-card>
</template>

<script>
import profileChip from "@/components/profiles/profileChip.vue";
export default {
  props: {
    entry: Object
  },
  components: {
    profileChip
  }
};
</script>