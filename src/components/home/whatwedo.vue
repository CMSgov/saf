<template>
  <v-container fluid>
    <wwdSection :topic="whatwedodata[0]" md="4" lg="4" xl="4" />
    <v-divider v-if="whatwedodata[2]" />
    <wwdSection v-if="whatwedodata[1]" :topic="whatwedodata[1]" md="4" lg="4" xl="4" />
    <v-divider v-if="whatwedodata[2]" />
    <wwdSection v-if="whatwedodata[2]" :topic="whatwedodata[2]" md="4" lg="4" xl="4" />
  </v-container>
</template>

<script>
import wwdSection from "@/components/home/wwdComponents/wwdSection.vue";

export default {
  props: {
    whatwedodata: Array
  },
  // data() {
  //   return {
  //     item: Object
  //   };
  // },

  components: {
    wwdSection
  }
};
</script>