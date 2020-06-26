import Vue from "vue";
import VueRouter from "vue-router";
import store from "../store"; //index.js 는 안써도 알아서 잡아줌

import AuthHandler from "../views/AuthHandler.vue";
import ImageList from "../views/ImageList.vue";
import UploadForm from "../views/UploadForm.vue";
Vue.use(VueRouter);

const routes = [
  {
    path: "/oauth2/callback",
    name: "AuthHandler",
    component: AuthHandler,
  },
  {
    path: "/",
    name: "ImageList",
    component: ImageList,
  },
  {
    path: "/upload",
    name: "UploadForm",
    component: UploadForm,
  },

  // '/'
  // '/upload'
  // '/oauth2/callback'
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

router.beforeEach((to, from, next) => {
  // 로그인 안하면 접근 불가 페이지로 가려 하면
  const authRequiredPages = ["UploadForm"];
  const authRequired = authRequiredPages.includes(to.name);

  // const isLoggedIn = store.getters.isLoggedIn;
  const { isLoggedIn } = store.getters;
  if (authRequired && !isLoggedIn) {
    next("/");
  } else {
    // 로그인 했으면

    next();
  }
});

export default router;
