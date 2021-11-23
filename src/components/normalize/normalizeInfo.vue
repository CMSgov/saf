<template>
  <v-container fluid class="pa-0">
    <div v-for="(row, index) in normalize_data" :key="index">
      <p class="header">{{ row.header }}</p>
      <p class="ma-2">
        <span v-html="row.desc" />
      </p>
      <p class="ma-2 pb-2" v-if="row.jsonviewer">
        <v-container fluid class="pa-0">
          <v-row>
            <v-col
              v-for="(jsonwrapper, index_jsonwrapper) in row.jsonviewer"
              :key="index_jsonwrapper"
            >
              <v-container fluid class="pa-0">
                <v-row>
                  <v-col>
                    <p class="json-title ma-0">{{ jsonwrapper.title }}</p>
                  </v-col>
                </v-row>
                <v-row>
                  <v-col>
                    <json-viewer
                      :value="jsonwrapper.json"
                      :theme="
                        darkTheme ? 'json-theme-dark' : 'json-theme-light'
                      "
                      copyable
                    />
                  </v-col>
                </v-row>
              </v-container>
            </v-col>
          </v-row>
        </v-container>
      </p>
      <p class="ma-2" v-if="row.image">
        <!-- <v-img :src="require('@/assets/img/svg/' + row.image + '.svg')" /> -->
        <HDFSVG class="pa-2" />
      </p>
      <ul v-if="row.bullets" class="ma-2">
        <li v-for="(bullet, index) in row.bullets" :key="index">
          <a v-if="bullet.link" :href="bullet.link" target="_blank">{{
            bullet.main
          }}</a>
          <div v-else>{{ bullet.main }}</div>
          <ul v-if="bullet.sub">
            <li v-for="(sub_bullet, index2) in bullet.sub" :key="index2">
              {{ sub_bullet }}
            </li>
          </ul>
        </li>
      </ul>
      <div v-if="row.examples">
        <div v-for="(ex, index3) in row.examples" :key="index3" class="ma-4">
          <p class="subheader ma-0">{{ ex.title }}</p>
          <p>{{ ex.desc }}</p>
          <PrismComponent :language="ex.syntax">{{ ex.code }}</PrismComponent>
        </div>
      </div>
      <p v-if="row.footer" class="ma-2">
        <span v-html="row.footer" />
      </p>
    </div>
  </v-container>
</template>

<script>
  import normalize_data from "@/assets/data/normalize.json";

  import "prismjs";

  import "prismjs/components/prism-json";
  import "prismjs/components/prism-ruby";
  import "prismjs/themes/prism-tomorrow.css";
  import "prismjs/plugins/normalize-whitespace/prism-normalize-whitespace";

  import PrismComponent from "vue-prism-component";

  import JsonViewer from "vue-json-viewer";
  import HDFSVG from "@/components/normalize/HDFSVG.vue";

  export default {
    data() {
      return {
        normalize_data: [],
      };
    },
    computed: {
      darkTheme: function() {
        return this.$vuetify.theme.dark;
      },
    },
    components: {
      PrismComponent,
      JsonViewer,
      HDFSVG,
    },
    async created() {
      for (const [index_row, row] of normalize_data.normalize.entries()) {
        if (Object.prototype.hasOwnProperty.call(row, "jsonviewer")) {
          for (const [
            index_jsonwrapper,
            jsonwrapper,
          ] of row.jsonviewer.entries()) {
            if (Object.prototype.hasOwnProperty.call(jsonwrapper, "url")) {
              try {
                const response = await fetch(jsonwrapper.url);
                const data = await response.json();
                normalize_data.normalize[index_row].jsonviewer[
                  index_jsonwrapper
                ].json = data;
              } catch (_) {
                console.log(`Couldn't resolve the url: ${jsonwrapper.url}`);
                normalize_data.normalize[index_row].jsonviewer[
                  index_jsonwrapper
                ].json = jsonwrapper.url;
              }
            }
          }
        }
      }

      this.normalize_data = normalize_data.normalize;
    },
  };

  // eslint-disable-next-line
  Prism.languages.rb.string[1].pattern = /("|')(\1|(?:(?![^\\]\1)[\s\S])*[^\\]\1)/g;
</script>

<style scoped>
  code {
    background-color: #292929;
  }

  .json-title {
    font-size: 112%;
    font-weight: bold;
    color: #1a73e8;
  }
</style>

<style lang="scss">
  .json-theme-dark {
    background: #222222;

    .jv-ellipsis {
      color: #eee;
      background-color: #353535;
    }

    .jv-key {
      color: #eee;
    }

    .jv-item {
      &.jv-array {
        color: #eee;
      }
      &.jv-object {
        color: #eee;
      }
    }
  }

  .json-theme-light {
    background: #fff;

    .jv-ellipsis {
      color: #999;
      background-color: #eee;
    }

    .jv-key {
      color: #111;
    }

    .jv-item {
      &.jv-array {
        color: #111;
      }
      &.jv-object {
        color: #111;
      }
    }
  }

  .jv-container {
    white-space: nowrap;
    color: #525252;
    font-size: 14px;
    font-family: Consolas, Monaco, "Andale Mono", "Ubuntu Mono", monospace;
    max-height: 50em;

    .jv-ellipsis {
      display: inline-block;
      line-height: 0.9;
      font-size: 0.9em;
      padding: 0px 4px 2px 4px;
      margin: 0 4px;
      border-radius: 3px;
      vertical-align: 2px;
      cursor: pointer;
      user-select: none;
    }

    .jv-button {
      color: #49b3ff;
    }

    .jv-key {
      margin-right: 4px;
    }

    .jv-item {
      &.jv-boolean {
        color: #fc1e70;
      }

      &.jv-function {
        color: #067bca;
      }

      &.jv-number {
        color: #fc1e70;
      }
      &.jv-number-float {
        color: #fc1e70;
      }
      &.jv-number-integer {
        color: #fc1e70;
      }

      &.jv-undefined {
        color: #e08331;
      }

      &.jv-string {
        color: #42b983;
        word-break: break-word;
        white-space: normal;

        .jv-link {
          color: #0366d6;
        }
      }
    }

    .jv-code {
      max-height: inherit;
      overflow: auto;

      .jv-toggle {
        &:before {
          padding: 0px 2px;
          border-radius: 2px;
        }

        &:hover {
          &:before {
            background: #eee;
          }
        }
      }
    }
  }
</style>
