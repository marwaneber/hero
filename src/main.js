// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from "vue";
import App from "./App";
import Router from "@/router";

//vuetify's stuff
import Vuetify from "vuetify";
import("vuetify/dist/vuetify.min.css");
Vue.use(Vuetify);

Vue.config.productionTip = false;

/* eslint-disable no-new */
new Vue({
  el: "#app",
  router: Router,
  components: { App },
  template: "<App/>"
});
