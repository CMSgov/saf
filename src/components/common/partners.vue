<template>
  <v-container fluid class="mb-8">
    <v-row align="center" justify="center" class="mb-0">
      <v-col cols="12" md="12" lg="12" sm="12" class="mb-0">
        <p class=" mb-1" style="font-weight: 350;color: #1a73e8;font-size:200%">
          <b>
            The CMS SAF Community
          </b>
        </p>
      </v-col>
    </v-row>

    <!-- <v-container fluid> -->
    <v-row
      justify="center"
      align="center"
      v-for="(itemp, i) in partnerData"
      :key="i"
      :class="color_mode"
    >
      <!-- <v-col cols="12" md="12" lg="12" sm="12" class="mx-1 mt-5" v-if="itemp.length>0">
          <p class=" mb-0" style="font-size:130%">{{i}}</p>
        </v-col> -->
      <v-slide-group class="pa-2" show-arrows>
        <v-col v-for="(item, j) in itemp" :key="j">
          <!--:color="active ? 'primary' : '#574B75'"         // This was never configured properly - what is "active"? -->
          <v-card
            class="ma-4"
            elevation="4"
            height="180"
            width="200"
            v-bind:href="sponsor.link"
            target="_blank"
            text-center
          >
            <v-tooltip bottom>
              <template v-slot:activator="{on}">
                <v-img
                  :src="getImgUrl(item.img)"
                  :lazy-src="getImgUrl(item.img)"
                  class="white"
                  height="100"
                  width="200"
                  contain
                ></v-img>
                <!-- <v-card-subtitle class=" mb-0 justify-center">{{item.name}}</v-card-subtitle> -->
              </template>
            </v-tooltip>
            <v-card-title class="justify-center align-center">{{
              item.name
            }}</v-card-title>
          </v-card>
          <!-- </v-slide-item> -->
        </v-col>
      </v-slide-group>
      <!-- </v-col> -->
    </v-row>

    <!-- <v-container fluid>
      <v-row
        justify="space-between"
        v-for="(itemp,i) in commercialpart"
        :key="i"
        :class="color_mode"
      >
        <v-col cols="12" md="12" lg="12" sm="12" class="mx-1 mt-5" v-if="itemp.length>0">
          <p class=" mb-0" style="font-size:130%">{{i}}</p>
        </v-col>
        <v-slide-group class="pa-2" show-arrows>
          <v-col v-for="(item,j) in itemp" :key="j" class>

            <v-card
              class="ma-4"
              elevation="4"
              height="150"
              width="200"
              v-bind:href="partner.link"
              target="_blank"
            >
              <v-img
                :src="getImgUrl(partner.img)"
                class="white fixed-ratio-resize"
                height="150"
                width="200"
                contain
              ></v-img>
            </v-card>
          </v-slide-item>
        </v-slide-group>
      </v-row>
    </v-container> -->
  </v-container>
</template>

<script>
  import partnerData from "@/assets/data/partners.json";
  import communityData from "@/assets/data/communityData.json";
  export default {
    data() {
      return {
        partners: partnerData["Commercial Partners"],
        communityData: communityData,
        showArrows: true,
      };
    },
    methods: {
      getImgUrl(pic) {
        return require("@/assets/img/partners/" + pic);
      },
      jump(ref) {
        var element = this.$refs[ref];
        var top = element.offsetTop;
        this.$vuetify.goTo(top);
      },
    },
    computed: {
      color_mode() {
        return this.$vuetify.theme.dark
          ? "darkModeContainer"
          : "lightModeContainer";
      },
    },
    mounted: function() {
      if (this.$route.hash) {
        this.jump(this.$route.hash.substring(1));
      }
    },
  };
</script>

<style scoped>
  .client-logo {
    height: 90px;
    padding: 12px 12px;
    border-radius: 7px;
    background: white;
    border: 1px solid #ebebeb;
    text-align: center;
  }

  .fixed-ratio-resize {
    /* basic responsive img */
    max-width: 100%;
    height: auto;
    width: auto\9; /* IE8 */
  }
</style>
