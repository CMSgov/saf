<template>
  <v-row dense align="center" class="pa-1">
    <v-col :cols="getByFips(entry, 'none') ? '12' : '4'" class="pa-0">
      <profileChip v-if="getByFips(entry, 'none')" :entry="getByFips(entry, 'none')" class="pa-0" />
      <div class="body-1 break-word pa-0" v-else>{{entry.name}}</div>
    </v-col>
    <v-col cols="8" v-if="!getByFips(entry, 'none')" class="pa-0">
      <v-container class="pa-0 pl-2" v-if="!getByFips(entry, 'none')" fluid>
        <v-row align="center">
          <v-col class="pa-0">
            <v-row justify="center">
              <profileChip :entry="getByFips(entry, 'low')" />
            </v-row>
          </v-col>
          <v-col class="pa-0">
            <v-row justify="center">
              <profileChip :entry="getByFips(entry, 'mod')" />
            </v-row>
          </v-col>
          <v-col class="pa-0">
            <v-row justify="center">
              <profileChip :entry="getByFips(entry, 'high')" />
            </v-row>
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