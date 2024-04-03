import { createRouter, createWebHistory } from "vue-router";

const homePage = () => import("@/views/HomeView.vue");
const aboutPage = () => import("@/views/AboutView.vue");

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      meta: {
        title: "UI Platform app - Uikitku",
      },
      component: homePage,
    },
    {
      path: "/about",
      name: "about",
      meta: {
        title: "Uikitku - About Us",
      },
      component: aboutPage,
    },
  ],
});

router.beforeEach((to, from, next) => {
  document.title = to.meta.title;
  next();
});
export default router;
