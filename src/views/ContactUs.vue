<template>
  <v-content class="pa-0">
    <v-container fluid class="pa-0 mt-2">
      <v-row
        justify="center"
        align="center"
        class="py-0 my-0"
        :class="this.$vuetify.theme.dark == true?'grey darken-4':'grey lighten-4'"
      >
        <v-col md="12" lg="10" xs="12" class="py-3 my-0">
          <Header><h3 slot="title">Contact Us</h3></Header>
        </v-col>
      </v-row>
    </v-container>
    <v-container fluid>
      <v-row justify="center" align="center" class="py-0 my-0">
        <v-col md="12" lg="10" xs="12" class="py-3 my-0">
          <div class="ma-2 pa-2 google-font">
            <p>
              {{ contactus.ContactUsDescription }} <br><br><br>
              <!--ISPGLeadsList-->
              {{ contactus.ForQuestions }}
              <a
                :href="mail_link"
              >{{ contactus.CMSSAFEmail }}</a>
            </p>

          </div>
        </v-col>
      </v-row>
    </v-container>
  </v-content>
</template>

<script>
import profileTemplateCompact from "@/components/profiles/profileTemplateCompact.vue";
import Header from "@/components/core/Header.vue";
import contactus from "@/assets/data/contactus.json"

export default {
  components: {
    profileTemplateCompact,
    Header
  },
  data() {
    return {
      contactus: contactus,
      isCompact: false
    };
  },
  computed: {
    mail_link() {
      return "mailto:" + contactus.CMSSAFEmail;
    },
    showCompact() {
      return this.$store.state.isCompact;
    }
  },
};
</script>
