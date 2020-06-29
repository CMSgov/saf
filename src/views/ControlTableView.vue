<template>
  <v-container fluid class="pa-0 ma-0">
    <v-row justify="center" align="center" class="mx-0">
      <v-col cols="12" lg="10" class="pa-0">
        <Header>
          <h3 slot="title">Control Assessment Range</h3>
          <p
            slot="subtitle"
          >All assessment tests under SAF are associated with CMS ARS 3.1 (NIST SP 800-53) Security Controls. Explore these associations in the table below!</p>
        </Header>
      </v-col>
    </v-row>
    <v-row justify="center" align="center" class="mx-0 pb-5">
      <v-col cols="12" lg="10" class="pa-0">
        <controlTable />
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import Header from "@/components/core/Header.vue";
import controlTable from "@/components/controlTable/ControlTable.vue";

export default {
  components: {
    Header,
    controlTable
  }
};
</script>


