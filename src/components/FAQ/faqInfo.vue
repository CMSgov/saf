<template>
  <v-container fluid>
    <v-expansion-panels accordion tile v-model="panel" multiple flat>
      <v-expansion-panel v-for="faq in faqs" :key="faq">
        <v-expansion-panel-header
          class="google-font"
          style="color: #1a73e8; font-weight: 200; font-size:120% "
        >{{faq.question}}</v-expansion-panel-header>
        <v-expansion-panel-content v-if="faq.answer">
          <v-html>{{faq.answer}}</v-html>
        </v-expansion-panel-content>
        <v-expansion-panel-content v-if="faq.links">
          <ul>
            <li v-for="link in faq.links" :key="link">
              <span><a
                :href="link.download_link ? link.download_link : link.link"
                target="_blank"
                :download="link.download_link"
              >{{link.name}}</a>{{link.desc}}
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
    faqs: faqs.faqs,
    panel: []
  })
};
</script>