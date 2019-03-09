import Vue from "vue";
import Router from "vue-router";
import partager from "@/comps/partager";
import recents from "@/comps/recents";
import page_404 from "@/comps/page_404";
import signin from "@/comps/auth";
Vue.use(Router);
export default new Router({
  routes: [
    {
      path: "/",
      name: "Home",
      component: recents,
      meta: {
        auth: true
      }
    },
    {
      path: "/partager",
      name: "Partager",
      component: partager,
      meta: {
        auth: true
      }
    },
    {
      path: "/auth",
      name: "Signing",
      component: signin
    },
    {
      path: "*",
      name: "404",
      component: page_404
    }
  ]
});
