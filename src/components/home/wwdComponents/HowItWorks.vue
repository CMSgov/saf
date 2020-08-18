<template>
  <v-container class="roboto-font" style="width:100%">
    <v-row align="center" justify="center" style="height : 5rem">
      <p class="roboto-font ma-0 tool-header primary--text" style="font-size:300%">
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
          <p class="rotate inner">{{row.name}}</p>
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
            <v-col
              v-for="(item, index) in row.data"
              :key="index"
              :cols="item.cols"
              class="text-center"
            >
              <v-card flat outlined height="100%">
                <v-card-title v-if="item.title" class="primary--text">
                  <span v-if="item.svg">
                    <v-img
                      :src="require('@/assets/img/svg/' + item.svg + '.svg')"
                      style="max-width: 28px; max-height: 28px;"
                    />
                  </span>
                  <span>{{item.title}}</span>
                </v-card-title>
                <v-card-subtitle v-if="item.subtitle" class="primary--text" style="text-align:left">
                  <span v-html="item.subtitle" />
                </v-card-subtitle>
                <v-container style="height:100%">
                  <v-row
                    v-for="(subcard, doublen) in item.subcards"
                    :key="doublen"
                    :style="{ height: (100/item.subcards.length) + '%' }"
                  >
                    <v-col>
                      <v-card flat height="100%">
                        <v-container fluid style="height:100%">
                          <v-row style="height:100%">
                            <v-col v-if="subcard.svg" cols="auto" align-self="center">
                              <v-img
                                :src="require('@/assets/img/svg/' + subcard.svg + '.svg')"
                                style="max-width: 28px; max-height: 28px;"
                                class="ma-1"
                              />
                            </v-col>
                            <v-col cols="8" v-if="subcard.title">
                              <v-card-title
                                v-if="typeof subcard.title === 'string'"
                                class="primary--text ma-0 pa-0 text-svg-title"
                                v-html="subcard.title"
                              />
                              <v-card-title v-else class="primary--text ma-0 pa-0 text-svg-title">
                                <span v-for="(fragment, triplen) in subcard.title" :key="triplen">
                                  <v-img
                                    inline
                                    v-if="fragment.type === 'svg'"
                                    :src="require('@/assets/img/svg/' + fragment.contents + '.svg')"
                                    style="max-width: 14px; max-height: 14px;"
                                    class="ma-1"
                                  />
                                  <span v-else v-html=fragment.contents />
                                </span>
                              </v-card-title>
                              <v-card-subtitle
                                v-if="typeof subcard.subtitle === 'string'"
                                class="primary--text ma-0 pa-0 text-svg-subtitle"
                                v-html="subcard.subtitle"
                              />
                              <v-card-subtitle
                                v-else
                                class="primary--text ma-0 pa-0 text-svg-subtitle"
                              >
                                <span
                                  v-for="(fragment, triplen) in subcard.subtitle"
                                  :key="triplen"
                                >
                                  <v-img
                                    
                                    v-if="fragment.type === 'svg'"
                                    :src="require('@/assets/img/svg/' + fragment.contents + '.svg')"
                                    style="max-width: 5px; max-height: 5px;"
                                    class="ma-1"
                                  />
                                  <span v-else v-html=fragment.contents />
                                </span>
                              </v-card-subtitle>
                            </v-col>
                          </v-row>
                        </v-container>
                      </v-card>
                    </v-col>
                  </v-row>
                </v-container>
              </v-card>
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

.text-svg {
  &-title {
    font-size: 1rem;
    font-weight: bold;
  }
  &-subtitle {
    font-size: 0.75rem;
    text-align: left;
  }
}
</style>
