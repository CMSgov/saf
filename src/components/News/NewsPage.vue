<template>
  <v-content class="pa-0">
    <v-container fluid class="pa-0 ma-0">
      <v-row justify="center" align="center" class="mx-0">
        <v-col cols="12" lg="10" class="pa-0">
          <Header>
            <h3 slot="title">{{ data.title }}</h3>
            <span slot="subtitle">
              <!-- <h4>{{ data.pubDate | dateFilter }}</h4> -->
              <router-link to="/news">News</router-link> >
              <router-link :to="date"> {{ data.pubDate }} </router-link>
            </span>
          </Header>
        </v-col>
      </v-row>
    </v-container>
    <v-container fluid class="mt-4">
      <v-row justify="center" align="center">
        <v-col md="8" lg="8" xs="12" class="d-flex py-0">
          <v-html
            >{{ data.content }}
            <ul>
              <li v-for="(bullet, index) in data.bullets" :key="index">
                {{ bullet }}
              </li>
            </ul>
          </v-html>
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