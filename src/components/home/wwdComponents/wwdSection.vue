<template>
  <v-container fluid>
    <v-row align="center" justify="center" v-if="topic.sectionHeader" class="my-4">
      <p class=" ma-4 tool-header">{{ topic.sectionHeader }}</p>
    </v-row>
    <v-row align="center" justify="center" v-if="topic.sectionDesc">
      <p class=" mb-4 body-2">{{ topic.sectionDesc }}</p>
    </v-row>
    <v-row justify="center" v-for="(image, index) in topic.images" :key="index" class="d-flex">
      <v-col cols="12" class="d-flex flex-column">
        <v-card
          :to="image.router_link ? image.router_link : ''"
          :href="image.link ? image.link : ''"
          flat outlined
        >
          <v-img :src="require('@/assets/img/what-we-do/' + image.filename + '.png')" />
        </v-card>
      </v-col>
    </v-row>
    <v-row justify="center" v-if="topic.chevrons" class="d-flex">
        <Chevrons :chevrons="topic.chevrons" />
    </v-row>
    <v-row justify="center">
      <v-col
        v-for="(item, i) in topic.items"
        :key="i"
        :cols="cols"
        :sm="sm"
        :md="md"
        :lg="lg"
        :xl="xl"
        class="text-center pa-1 d-flex justify-center"
      >
        <wwdBasicCard :item="item" />
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import wwdBasicCard from "@/components/home/wwdComponents/wwdBasicCard.vue";
import Chevrons from "@/components/home/wwdComponents/Chevrons.vue"
export default {
  components: {
    wwdBasicCard,
    Chevrons
  },
  props: {
    topic: Object,
    cols: {
      type: String,
      default: "12"
    },
    sm: {
      type: String,
      default: "6"
    },
    md: {
      type: String,
      default: "6"
    },
    lg: {
      type: String,
      default: "3"
    },
    xl: {
      type: String,
      default: "3"
    }
  },
  data: function() {
    return {};
  },
  methods: {
    make_readable(str) {
      return str.replace(/_/, " ");
    }
  }
};
</script>

<style scoped>
.tool-header {
  font-size: 200%;
  color: #1a73e8;
}
</style>