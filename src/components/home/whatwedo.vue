<template>
  <v-container fluid>
      <wwdSection :topic="whatwedodata[0]" />
      <v-divider />
      <wwdSection :topic="whatwedodata[1]" xl="3"/>
      <v-divider />
      <wwdSection :topic="whatwedodata[2]" md="4" lg="4" xl="4"/>
  </v-container>
</template>

<script>

import wwdSection from "@/components/home/wwdComponents/wwdSection.vue";

export default {

  props: {
    whatwedodata: Object
  },
  components : {
    wwdSection,
  },
   

};
</script>