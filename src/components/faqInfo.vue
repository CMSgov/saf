<template>
  <v-container fluid>
    <v-list two-line>
      <template v-for="faq in faqs.faqs">
        <v-list-item :key="faq.question">
          <v-list-item-content>
            <v-list-item>
              <p
                class="google-font"
                style="color: #1a73e8; font-weight: 200; font-size:120% "
              >{{faq.question}}</p>
            </v-list-item>
            <v-list-item class="google-font">
              <p>{{faq.answer}}</p>
            </v-list-item>
            <v-list-item class="google-font" v-show="faq.link">
              <a :href="faq.link" download>{{faq.link_text}}</a>
            </v-list-item>
            <v-list-item class="google-font" v-show="faq.img">
              <p>{{faq.img}}</p>
            </v-list-item>
            <v-list-item v-show="faq.code">
              <pre><code class="pa-2">{{faq.code}}</code></pre>
            </v-list-item>
          </v-list-item-content>
        </v-list-item>
      </template>
    </v-list>
  </v-container>
</template>

<script>
import faqs from "@/assets/data/faqs.json";
export default {
  data: () => ({
    faqs: faqs
  }),

};
</script>