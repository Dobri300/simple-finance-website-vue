import Vue from "vue";
import VueRouter from "vue-router";

import Index1 from "./pages/index1.vue";
import Index2 from "./pages/index2.vue";
import Index3 from "./pages/index3.vue";
import Index4 from "./pages/index4.vue";
import Index5 from "./pages/index5.vue";
import Index1bg from "./pages/index1-bg.vue";
import Index2bg from "./pages/index2-bg.vue";
import Index3bg from "./pages/index3-bg.vue";
import Index4bg from "./pages/index4-bg.vue";
import Index5bg from "./pages/index5-bg.vue";
import Login from "./pages/login.vue";
import Signup from "./pages/signup.vue";
import Forgotpassword from './pages/password-forgot.vue';

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Index-1",
    component: Index1
  },
  {
    path: "/index-1",
    component: Index1
  },
  {
    path: "/simple-it",
    name: "Index-2",
    component: Index2
  },
  {
    path: "/simple-law",
    name: "Index-3",
    component: Index3
  },
  {
    path: "/simple-marketing",
    name: "Index-4",
    component: Index4
  },
  {
    path: "/contacts",
    name: "Index-5",
    component: Index5
  },
  {
    path: "/home-bg",
    name: "Index-1-bg",
    component: Index1bg
  },
  {
    path: "/simple-it-bg",
    name: "Index-2-bg",
    component: Index2bg
  },
  {
    path: "/simple-law-bg",
    name: "Index-3-bg",
    component: Index3bg
  },
  {
    path: "/simple-marketing-bg",
    name: "Index-4-bg",
    component: Index4bg
  },
  {
    path: "/contacts-bg",
    name: "Index-5-bg",
    component: Index5bg
  },
  {
    path: "/login",
    name: "Login page",
    component: Login
  },
  {
    path: "/signup",
    name: "Signup page",
    component: Signup
  },
  {
    path: '/password_forgot',
    name: 'Forgot Password page',
    component: Forgotpassword
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
