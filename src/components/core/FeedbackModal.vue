<template>
  <v-card class="pa-2">
    <v-card-title class="primary--text mb-2 pa-2 title break-word"
      >We Welcome Your Feedback!</v-card-title
    >
    <div class="mx-4">
      <p color="white">
        This website is a work in progress as the CMS SAF is constantly adding
        new content. We welcome feedback from our users on what content they
        would like to see on this site.
      </p>
      <p>
        You can reach the CMS SAF team directly by email at saf@cms.hhs.gov.
      </p>
      <v-btn target="_blank" class="ma-2" outlined href="mailto:saf@cms.hhs.gov"
        >Email the CMS SAF Team</v-btn
      >
      <p class="mt-4">You can ask questions on our Slack channel, #cms-saf.</p>
      <v-btn
        target="_blank"
        class="ma-2"
        outlined
        href="https://cmsgov.slack.com/archives/C01AJCB8N8P"
        >Go to #cms-saf on Slack</v-btn
      >
      <p class="mt-4">
        If you have access to github.com/CMSgov, feel free to open an issue to
        request a feature or report a bug.
      </p>
      <div class="mb-2">
        <v-btn
          target="_blank"
          href="https://github.com/CMSgov/saf/issues/new?labels=enhancement&template=feature_request.md&title="
          class="primary--text ma-2"
          outlined
          >Request A Feature</v-btn
        >

        <v-btn
          target="_blank"
          href="https://github.com/CMSgov/saf/issues/new?labels=bug&template=bug_report.md&title=%5BBUG%5D"
          color="red"
          class="ma-2"
          outlined
          >Report a Bug</v-btn
        >
      </div>
    </div>
    <v-card-actions>
      <v-spacer />
      <v-btn text @click="showFeedbackModal">Close</v-btn>
    </v-card-actions>
  </v-card>
</template>

<script>
import { mapMutations } from "vuex";
export default {
  methods: {
    ...mapMutations(["showFeedbackModal"]),
  },
};
</script>
