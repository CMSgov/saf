<template>
  <!-- <div>
    <div
      style="min-height: 360px; max-height: 360px"
      :class="$vuetify.theme.dark == true ? 'darkModeCard' : 'lightModeCard'"
      class="pa-0 hidden-sm-and-down"
    >
      <div class="pa-3">
        <p class="ma-0 mt-2" style="font-size: 120%">
          {{ data.title | summary(30) }}
        </p>
        <p class="mt-0 mb-0" style="font-size: 90%">{{ data.pubDate }}</p>
        <p class="mt-0 mb-4" style="font-size: 90%">{{ data.author }}</p>
        <v-chip x-small v-for="(item,i) in data.data.categories" outlined :key="i">{{item}}</v-chip>
        <v-btn
          target="_blank"
          text
          small
          :href="data.link"
          class="mb-0 mt-0"
          style="color: #1a73e8; text-decoration: none"
          >Read</v-btn
        >
      </div> 
    </div> -->

  <div class="">
    <v-card
      class="mx-auto"
      max-width="100%"
      outlined
      :to="{ path: '/news/' + data.pubDate }"
    >
      <v-list-item three-line>
        <v-list-item-content>
          <div class="mb-4">{{ data.pubDate | dateFilter }}</div>
          <v-list-item-title class="mb-1" style="font-size: 120%">{{
            data.title | summary(30)
          }}</v-list-item-title>
          <!-- <v-list-item-subtitle class="">{{data.data.author}}</v-list-item-subtitle> -->
          <!-- <v-list-item-subtitle class="" v-html="$options.filters.summary(data.data.description,180)"></v-list-item-subtitle> -->
          <v-list-item-subtitle
            class="mb-0"
            v-html="$options.filters.summary(filterData(data.content), 100)"
          ></v-list-item-subtitle>
          <!-- <p class=" mt-0 mb-0" style="font-size:70%;">{{data.data.author}}</p> -->
        </v-list-item-content>
      </v-list-item>
    </v-card>
  </div>
</template>

<script>
export default {
  props: {
    data: {
      data: {},
    },
  },
  data() {
    return {
      dialog: false,
    };
  },
  methods: {
    filterData(d) {
      let r = d.replace(/<img[^>]*>/gi, "");
      return r;
    },
    getCharString(data) {
      var splitArr = data.split(" ");
      if (splitArr.length > 1) {
        return (
          splitArr[0].substring(0, 1) +
          "" +
          splitArr[1].substring(0, 1)
        ).toUpperCase();
      } else {
        return splitArr[0].substring(0, 1).toUpperCase();
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

<style scoped>
img,
figure {
  width: 100%;
}
</style>