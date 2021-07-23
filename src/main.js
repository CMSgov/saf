import 'babel-polyfill';
import "intersection-observer";
import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store/store";
import "./registerServiceWorker";
import vuetify from "./plugins/vuetify";
import "./style.css";
// import firebase from "@/firebase";
import cssVars from "css-vars-ponyfill";
import Prism from 'prismjs';
import VueHtmlToPaper from 'vue-html-to-paper';
Prism.highlightAll();

cssVars({
  watch: true,
});

// const printOptions = {
//   "styles": [
//     // "https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css",
//     // "https://unpkg.com/kidlat-css/css/kidlat.css",
//     "src/style.css"
//   ]
// }

IntersectionObserver.prototype.POLL_INTERVAL = 100; // time in ms

Vue.config.productionTip = false;

// firebase.auth.onAuthStateChanged(() => {
  window.Event = new Vue({
    router,
    store,
    vuetify,
    render: h => h(App)
  }).$mount("#app");
  Vue.use(VueHtmlToPaper);
// });
