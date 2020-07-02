<template>
  <v-container fluid class="py-0">
    <v-row align="center">
      <!-- <v-col md="3" sm="5">
        <v-img
          :src="require('@/assets/img/home.svg')"
          :lazy-src="require('@/assets/img/home.svg')"
          width="100%"
          style="border-radius:8px"
        >
          <template v-slot:placeholder>
            <v-row class="fill-height ma-0" align="center" justify="center">
              <v-progress-circular indeterminate color="grey lighten-5"></v-progress-circular>
            </v-row>
          </template>
        </v-img> 
      </v-col>-->
      <v-col md="12" lg="10" xs="12" class="pa-0">
        <p class="primary--text" style="font-weight: 350;font-size:300%">
          <b>
              CMS Security Automation Framework
          </b>
        </p>

        <p class=" ms-0 title">{{communityData.communityShortDescription}}</p>
        <p class="ma-0">
          <ul class="title mt-4">
            <li>The ACT (Adaptive Capabilities Testing) team will accept security testing data from this framework.</li>
            <li>Developers can harden and run validation security early and often in their environments, using their own orchestration, functional and unit testing systems, to keep security defects as low as possible.</li>
          </ul>
        </p>
        <!-- <p class=" mt-0 mb-0" style="font-size:150%">{{communityData.community}}</p>
        <p class="" style="font-size:100%">{{communityData.communityShortDescription}}</p>
        <p class="" style="font-size:100%">{{communityData.communityLongDec}}</p>-->
        <!-- <p class="" style="font-size:100%;color:#9e9e9e">
          <span v-for="(item,i) in communityData.communityHashTags" :key="i">#{{item}} &nbsp;</span>
        </p>-->

        <!-- <v-btn
          :href="communityData.CommunityMeetupLink"
          target="_blank"
          class="ma-0  elevation-1 primary"
          style="text-transform: capitalize;border-radius:5px;color:white"
        >Become a Member</v-btn>
&nbsp;
        <v-btn
          :href="communityData.GDGProgramWebsite"
          target="_blank"
          rounded
          color="cyan"
          style="text-transform: capitalize;border-radius:5px;text-transform: capitalize;"
          outlined
          class="ml-0"
          dark
        >Learn More</v-btn>-->
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import communityData from "@/assets/data/communityData.json";
export default {
  data() {
    return {
      communityData: communityData
    };
  },

  methods: {
    color_mode() {
      if (this.$vuetify.theme.dark) return "color:white";
      return "color:grey lighten-4";
    }
  }
};
</script>