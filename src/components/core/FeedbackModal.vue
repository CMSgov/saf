<template>
  <v-card class="pa-2">
    <v-card-title class="primary--text mb-2 title break-word">We Welcome Your Feedback!</v-card-title>
    <div class="mx-6">
      <p
        color="white"
      >This website is a work in progress as the CMS SAF is constantly adding new content. We welcome feedback from our users on what content they would like to see on this site.</p>
      <p>You can reach the CMS SAF team directly by email. Please feel free to open issues on this site's GitHub repository to report bugs or ask for enhancements!</p>
      <v-card-actions>
        <v-btn  target="_blank" href="https://github.com/CMSgov/saf/issues/new?labels=bug&template=bug_report.md&title=%5BBUG%5D" color="red">Report a Bug</v-btn>
        <v-btn  target="_blank" href="https://github.com/CMSgov/saf/issues/new?labels=enhancement&template=feature_request.md&title=" class="primary--text">Request A Feature</v-btn>
        <v-btn  target="_blank" href="mailto:saf@cms.hhs.gov">Email the CMS SAF Team</v-btn>
      </v-card-actions>
    </div>
  </v-card>
</template>
