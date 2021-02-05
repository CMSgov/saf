<template>
  <v-content class="pa-0">
    {{ data }}
    <v-container fluid class="pa-0 mt-2">
      <v-row
        justify="center"
        align="center"
        class="py-0 my-0"
        :class="
          this.$vuetify.theme.dark == true ? 'grey darken-4' : 'grey lighten-4'
        "
      >
        <v-col md="12" lg="10" xs="12" class="py-3 my-0">
          <Header>
            <h3 slot="title">{{ data.name }}</h3>
            <span slot="subtitle"
              ><h4>By {{ data.author }}</h4>
              <h4>{{ data.pubDate | dateFilter }}</h4></span
            >
          </Header>
        </v-col>
      </v-row>
    </v-container>
    <v-container fluid>
      <v-row justify="center" align="center">
        <v-col md="8" lg="8" xs="12" class="d-flex py-0">
          <v-html>{{ data.data }}</v-html>
        </v-col>
      </v-row>
    </v-container>
  </v-content>
</template>

<script>
import Header from "@/components/core/Header.vue";
import newsData from "@/assets/data/news.json";
export default {
  components: {
    Header,
  },
  data() {
    return {
      newsData: newsData,
    };
  },
  computed: {
    date: function () {
      return this.$route.params.date;
    },
    data: function () {
      return this.getNewsItem(this.date);
    },
  },
  methods: {
    getNewsItem(date) {
      var i;
      for (i = 0; i < this.newsData.data.length; i++) {
        if (this.newsData.data[i]["pubDate"] == date) {
          return this.newsData.data[i];
        }
      }
    },
  },
  filters: {
    summary: (val, num) => {
      if (val.length > num) {
        return val.substring(0, num) + "..";
      } else {
        return val;
      }
    },
    dateFilter: (value) => {
      const date = new Date(value);
      return date.toLocaleString(["en-US"], {
        month: "short",
        day: "2-digit",
        year: "numeric",
      });
    },
  },
};
</script>