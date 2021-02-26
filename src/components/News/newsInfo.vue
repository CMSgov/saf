<template>
  <v-container fluid class="ma-2">
    <RSVPBlock />
    <span v-html="newsData.content"></span>
    <ul>
      <li v-for="(bullet, index) in newsData.bullets" :key="index">
        {{ bullet }}
      </li>
    </ul>
  </v-container>
</template>

<script>
import newsData from "@/assets/data/news.json";
import RSVPBlock from "@/components/training/RSVPBlock.vue"
export default {
  data() {
    return {
      newsData: newsData,
    };
  },
  components: {
    RSVPBlock
  },
};
</script>