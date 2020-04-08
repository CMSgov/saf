<template>
  <v-content class="pa-0">
    <v-container fluid class="pa-0 mt-2">
      <v-row
        justify="center"
        align="center"
        :class="this.$vuetify.theme.dark == true?'grey darken-4':'grey lighten-4'"
        class="py-0 my-0"
      >
        <v-col md="12" lg="10" xs="12" class="py-3 my-0">
          <Header>
            <h3 slot="title">Fooobar</h3>
            <h4 slot="subtitle">subtitle</h4>
          </Header>
        </v-col>
      </v-row>
    </v-container>
  </v-content>
</template>

<script>

import Header from "@/components/core/Header.vue";

export default {
    components: {
        Header
  },
}
</script>