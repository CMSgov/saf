<template>
  <v-row dense align="center">
    <v-col :cols="getByFips(entry, 'none') ? '12' : '4'" >
      <profileChip v-if="getByFips(entry, 'none')" :entry="getByFips(entry, 'none')" />
      <div class="body-1 break-word" v-else>{{entry.name}}</div>
    </v-col>
    <v-col cols="8" class="pa-0">
      <v-container class="pa-0 px-2" v-if="!getByFips(entry, 'none')" fluid>
        <v-row align="center">
          <v-col class="pa-0 ma-2">
            <profileChip :entry="getByFips(entry, 'low')" />
          </v-col>
          <v-col class="pa-0 ma-2">
            <profileChip :entry="getByFips(entry, 'mod')" />
          </v-col>
          <v-col class="pa-0 ma-2">
            <profileChip :entry="getByFips(entry, 'high')" />
          </v-col>
        </v-row>
      </v-container>
    </v-col>
  </v-row>
</template>

<script>
import profileChip from "@/components/profiles/profileChip.vue";
export default {
  components: {
    profileChip
  },
  props: {
      entry: Object
  },
  methods: {
    getByFips(profile, fips_cat) {
      var i;
      var j;
      //console.log(profile.links.length)
      for (i = 0; i < profile.links.length; i++) {
        for (j = 0; j < profile.links[i].fips.length; j++) {
          //console.log(profile.links[i].fips)
          if (profile.links[i].fips[j] == fips_cat) {
            //console.log(profile.links[i]);
            return profile.links[i];
          }
        }
      }
    }
  }
};
</script>