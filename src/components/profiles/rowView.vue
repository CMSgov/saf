<template>
  <v-container fluid class="pa-0 my-4">
    <v-row dense align="center" class="pa-1">
      <v-col cols="4" class="pa-0">
        <v-row justify="start" v-if="entry.links.baseline">
          <profileChip :entry="entry.links.baseline" class="pa-0 ml-3" />
        </v-row>
        <div class="body-1 break-word pa-0" v-else>{{ entry.name }}</div>
      </v-col>
      <v-col
        cols="8"
        v-if="entry.links.ars5 || entry.links.low || 
          entry.links.mod || entry.links.high"
        class="pa-0"
      >
        <v-container
          class="pa-0 pl-2 mt-1"
          fluid
        >
          <v-row align="center" >
            <v-col class="pa-0" v-for="(category,i) in ['ars5', 'low', 'mod', 'high']" :key=i>
              <v-row justify="center">
                <profileChip :entry="entry.links[category]" v-if="entry.links[category]"/>
              </v-row>
            </v-col>
          </v-row>
        </v-container>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
  import profileChip from "@/components/profiles/profileChip.vue";
  export default {
    components: {
      profileChip,
    },
    props: {
      entry: Object,
    },
  };
</script>
