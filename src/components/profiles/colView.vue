<template>
  <v-container class="pa-0 ma-5" fluid>
    <v-row justify="center">
      <v-col cols="12" class="pa-0 ma-2">
        <v-row justify="center">
          <profileChip
            v-if="getByFips(this.entry, 'none')"
            :entry="getByFips(this.entry, 'none')"
          />
          <profileChip
            class="ma-1"
            v-if="getByFips(entry, 'ars5')"
            :entry="getByFips(entry, 'ars5')"
          />
          <div class="ma-1 body-2 break-word" v-else>
            {{ entry.name }}
          </div> </v-row
        ><v-row justify="center">
          <profileChip
            class="ma-1"
            v-if="getByFips(entry, 'low')"
            :entry="getByFips(entry, 'low')"
          />
          <profileChip
            class="ma-1"
            v-if="getByFips(this.entry, 'mod')"
            :entry="getByFips(entry, 'mod')"
          />
          <profileChip
            class="ma-1"
            v-if="getByFips(this.entry, 'high')"
            :entry="getByFips(entry, 'high')"
          />
        </v-row>
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
      },
    },
  };
</script>
