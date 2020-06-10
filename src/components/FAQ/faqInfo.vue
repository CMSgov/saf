<template>
  <v-container fluid>
    <v-expansion-panels focusable hover tile multiple v-model="panel">
      <v-expansion-panel v-for="(faq, index) in faqs" :key="index">
        <v-expansion-panel-header class="google-font" style="font-weight: 200; font-size:120% ">
          <div>
            <v-btn icon :to="$route.path + '#' + faq.tag[0]" class="mr-2" @click.native.stop>
              <v-icon>mdi-link</v-icon>
            </v-btn>
            <span>{{index + 1}}. {{faq.question}}</span>
          </div>
        </v-expansion-panel-header>
        <v-expansion-panel-content v-if="faq.answer">
          <p><span v-html="faq.answer"></span></p>
        </v-expansion-panel-content>
        <v-expansion-panel-content v-if="faq.links">
          <ul>
            <li v-for="(link, index) in faq.links" :key="index">
              <span>
                <router-link v-if="link.router_link" :to="link.router_link">{{link.name}}</router-link>
                <a
                  v-else
                  :href="link.download_link ? link.download_link : link.link"
                  target="_blank"
                  :download="link.download_link"
                >{{link.name}}</a>
                {{link.desc}}
              </span>

              <ul v-if="link.bullets">
                <li v-for="entry in link.bullets" :key="entry">{{entry}}</li>
              </ul>
            </li>
          </ul>
        </v-expansion-panel-content>
        <v-expansion-panel-content v-if="faq.code" class="hidden-sm-and-down">
          <v-row>
            <v-col xs="3">
              <code class="pa-2" v-if="faq.code">{{faq.code}}</code>
            </v-col>
          </v-row>
        </v-expansion-panel-content>
        <v-expansion-panel-content v-if="faq.code" class="hidden-sm-and-down">
          <v-row>
            <v-col xs="3">
              <code class="pa-2" v-if="faq.code">{{faq.code}}</code>
            </v-col>
          </v-row>
        </v-expansion-panel-content>
        <v-expansion-panel-content v-if="faq.images" class>
          <v-container fluid>
            <v-row justify="center">
              <v-col cols="auto" class="d-flex" v-for="img in faq.images" :key="img.path">
                <v-img
                  :src="require('@/assets/img/tools/' + img.path)"
                  :width="img.maxwidth ? img.maxwidth : ''"
                  class="ma-2"
                />
              </v-col>
            </v-row>
          </v-container>
        </v-expansion-panel-content>
      </v-expansion-panel>
    </v-expansion-panels>
  </v-container>
</template>

<script>
import faqs from "@/assets/data/faqs.json";
export default {
  data: () => ({
    faqs: faqs.faqs

  }),
  computed: {
    panel: {
      get: function() {
      //allow for a URL to specify which faq to open by default
      var panel = this.$route.hash.slice(1);
      return [this.lookupOrder(panel)];
      },
      set: function(index) {
        return [index]
      }
    }
  },
  methods : {
    lookupOrder(name) {
      var ord, i;
      for(i = 0; i < this.faqs.length; i++) {
        var faq = this.faqs[i]
        if (faq.tag[0] == name) {
          ord = parseInt(faq.tag[1]) - 1
        }
      }
      return ord;
    }
  }
};
</script>