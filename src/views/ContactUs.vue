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

              {{ contactus.ForQuestions }}<a :to="contactus.FAQLink">{{ contactus.FAQ }}</a>{{ contactus.ForMoreQuestions }}
              <a href="mailto:saf@cms.hhs.gov">{{ contactus.CMSSAFEmail }}</a>
              <br><br>
              {{ contactus.ContactUsDescription }}
              <!--ISPGLeadsList-->
                <template>
                  <v-container fluid>
                      <v-list one-line>
                        <template v-for="item in contactus.ISPGLeads">
                          <v-list-item :key="item.name">
                            <v-list-item-content>
                              <v-list-item-title  class="google-font mt-0 mb-0" style="font-size:100%;color: #1a73e8;">
                              {{item.name}}
                              </v-list-item-title>
                              <v-list-item class="google-font mt-0 mb-0">{{item.email}} | {{item.phone}}</v-list-item>
                              <v-list-item v-for="entry in item.values" :key="entry.name">
                              </v-list-item>
                            </v-list-item-content>
                          </v-list-item>
                        </template>
                      </v-list>
                  </v-container>
                </template>
              <!--ISPGLeadsListEnd-->
              
              
            </p>

          </div>
        </v-col>
      </v-row>
    </v-container>
  </v-content>
</template>

<script>
import Header from "@/components/core/Header.vue";
import contactus from "@/assets/data/contactus.json"

export default {
  components: {
    Header
  },
  data() {
    return {
      contactus: contactus.ContactUs,
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
