import Vue from "vue";
import Router from "vue-router";
import partager from "@/comps/partager";
import recents from "@/comps/recents";
import page_404 from "@/comps/page_404";
import signin from "@/comps/auth";
import firebase from "@/fb";

Vue.use(Router);
let route = new Router({
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
      component: signin,
      meta: {
        signed: true
      }
    },
    {
      path: "*",
      name: "404",
      component: page_404
    }
  ]
});

route.beforeEach((to, from, next) => {
  if (to.matched.some(record => record.meta.auth)) {
    if (!firebase.auth().currentUser) {
      next({
        path: "/auth"
      });
    } else {
      next();
    }
  } else {
    next(); // make sure to always call next()!
  }
  if (to.matched.some(record => record.meta.signed)) {
    if (!firebase.auth().currentUser) {
      next({
        path: "/"
      });
    } else {
      next();
    }
  } else {
    next(); // make sure to always call next()!
  }
});

export default route;
