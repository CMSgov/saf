<template>
  <v-container class="roboto-font" style="width:100%">
    <v-row align="center" justify="center" style="height : 8rem">
      <p class="roboto-font tool-header primary--text ma-0" style="font-size:4rem">
        <b>HOW MITRE SAF WORKS</b>
      </p>
    </v-row>
    <v-row justify="center">
      <v-col cols="1">
        <v-card
          v-for="(row,index) in data"
          :key="index"
          flat
          class="primary--text"
          :style="{ height : row.row_height }"
          color="rgba(0, 0, 0, 0.0)"
        >
          <b>
            <p class="rotate inner" style="font-size:2rem">{{row.name}}</p>
          </b>
        </v-card>
      </v-col>
      <v-col cols="11">
        <v-container fluid>
          <v-row
            v-for="(row, n) in data"
            :key="n"
            :style="{height:row.row_height}"
            justify="center"
          >
            <v-col v-for="(item, index) in row.data" :key="index" :cols="item.cols">
              <v-hover v-slot:default="{ hover }">
                <v-card
                  :class="hover && (item.link || item.router_link) ? getHighlight() : ''"
                  flat
                  outlined
                  height="100%"
                  :href="item.link"
                  :to="item.router_link"
                  :target="item.link ? '_blank' : ''"
                >
                  <v-card-title v-if="item.title" class="primary--text mb-2">
                    <span v-if="item.svg">
                      <v-img
                        :src="require('@/assets/img/svg/' + item.svg + '.svg')"
                        style="max-width: 28px; max-height: 28px;"
                        class="mr-2"
                      />
                    </span>
                    <span
                      :style="'font-size:' + item.title.size"
                      class="mb-2"
                      v-html="item.title.text"
                    ></span>
                  </v-card-title>
                  <v-card-subtitle v-if="item.subtitle" class="primary--text text-subtitle">
                    <span v-html="item.subtitle" />
                  </v-card-subtitle>
                  <v-container style="height:100%" class="pa-1">
                    <v-row
                      v-for="(subcard, doublen) in item.subcards"
                      :key="doublen"
                      :style="{ height: (100/item.subcards.length) + '%' }"
                    >
                      <v-col>
                        <v-hover v-slot:default="{ hover }">
                          <v-card
                            :class="hover && (subcard.link || subcard.router_link) ? getHighlight() : ''"
                            flat
                            height="100%"
                            :href="subcard.link"
                            :to="subcard.router_link"
                            :target="subcard.link ? '_blank' : ''"
                          >
                            <v-container fluid style="height:100%">
                              <v-row style="height:100%">
                                <v-col v-if="subcard.svg" cols="auto" align-self="center">
                                  <v-img
                                    :src="require('@/assets/img/svg/' + subcard.svg + '.svg')"
                                    style=""
                                    class="ma-1"
                                  />
                                </v-col>
                                <v-col
                                  v-if="subcard.title"
                                  :cols="subcard.svg ? '8' : 'auto'"
                                  align-self="center"
                                >
                                  <v-card-title
                                    v-if="typeof subcard.title === 'string'"
                                    class="primary--text ma-0 pa-0 text-svg-title"
                                    v-html="subcard.title"
                                  />
                                  <v-card-title
                                    v-else
                                    class="primary--text ma-0 pa-0 text-svg-title"
                                  >
                                    <span
                                      v-for="(fragment, triplen) in subcard.title"
                                      :key="triplen"
                                    >
                                      <img
                                        inline
                                        v-if="fragment.type === 'svg'"
                                        :src="require('@/assets/img/svg/' + fragment.contents + '.svg')"
                                        style="max-width: 14px; max-height: 14px;"
                                        class="ma-1"
                                      />
                                      <span v-else v-html="fragment.contents" />
                                    </span>
                                  </v-card-title>
                                  <v-card-subtitle
                                    v-if="typeof subcard.subtitle === 'string'"
                                    class="primary--text ma-0 pa-0 text-svg-subtitle"
                                    v-html="subcard.subtitle"
                                  />
                                  <v-card-subtitle
                                    v-else
                                    class="primary--text ma-0 pa-0 text-svg-subtitle break-word"
                                  >
                                    <template v-for="(fragment, triplen) in subcard.subtitle">
                                      <span :key="triplen" v-if="fragment.type === 'svg'">
                                        <img
                                          :key="triplen"
                                          :src="require('@/assets/img/svg/' + fragment.contents + '.svg')"
                                          style="max-width: 5px; max-height: 5px; "
                                          class="ma-1"
                                        />
                                      </span>
                                      <span
                                        v-else
                                        class="break-word"
                                        :key="triplen"
                                        v-html="fragment.contents"
                                      />
                                    </template>
                                  </v-card-subtitle>
                                </v-col>
                              </v-row>
                            </v-container>
                          </v-card>
                        </v-hover>
                      </v-col>
                    </v-row>
                  </v-container>
                </v-card>
              </v-hover>
            </v-col>
          </v-row>
        </v-container>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import howitworks from "@/assets/data/howitworks.json";
export default {
  data() {
    return {
      data: howitworks.rows,
    };
  },
  methods: {
    getHighlight() {
      return {
        lighten: this.$vuetify.theme.isDark,
        darken: !this.$vuetify.theme.isDark,
      };
    },
  },
};
</script>

<style scoped lang="scss">
.col {
  padding: 2px;
  margin: 0px;
}
.row {
  padding: 0px;
  margin: 0px;
}
.container {
  padding: 0px;
  margin: 0px;
  max-width: 2000px;
}

.inner {
  position: absolute;
  top: 50%;
  left: 50%;
}

.rotate {
  transform: translateX(-50%) translateY(-50%) rotate(-90deg);
}

.text {
  &-title {
    font-size: 1.8rem;
    font-weight: bold;
  }
  &-subtitle {
    font-size: 1.3rem;
  }
  &-svg-title {
    font-size: 1.55rem;
    font-weight: bold;
  }
  &-svg-subtitle {
    font-size: 1.3rem;
    text-align: left;
  }
}

.lighten {
  background-color: lighten(#1d1d1d, 20%);
}

.darken {
  background-color: darken(#ffff, 20%);
}
</style>
