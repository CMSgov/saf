import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import "./registerServiceWorker";
import vuetify from "./plugins/vuetify";
import "./style.css";
import firebase from "@/firebase";
import VueTabulator from "vue-tabulator";

Vue.config.productionTip = false;

firebase.auth.onAuthStateChanged(() => {
  new Vue({
    router,
    store,
    vuetify,
    VueTabulator,
    render: (h) => h(App),
  }).$mount("#app");
});
