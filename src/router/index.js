import Vue from "vue";
import VueRouter from "vue-router";
import News from "../components/News";
import About from "../components/About";

Vue.use(VueRouter);

const routes = [
  { path: "/news", component: News },
  { path: "/about", component: About },
];

const router = new VueRouter({
  routes,
});

export default router;
