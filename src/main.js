import 'babel-polyfill';
import "intersection-observer";
import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store/store";
import "./registerServiceWorker";
import vuetify from "./plugins/vuetify";
import "./style.css"; 
import cssVars from "css-vars-ponyfill";


cssVars({
  watch: true,
});

IntersectionObserver.prototype.POLL_INTERVAL = 100; // time in ms

Vue.config.productionTip = false;

const VueApp = 
  new Vue({
    router,
    store,
    vuetify,
    render: (h) => h(App),
  });
VueApp.$mount("#app");

