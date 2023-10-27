import { createRouter, createWebHistory } from "vue-router";

// ROUTES
const routes = [
  // DEFAULT
  {
    path: "/",
    name: "default",
    component: () => import('../views/Home.vue')
  },
  // CARD COLLECTION
  {
    path: "/collection",
    name: "cardCollection",
    component: () => import('../views/Collection.vue')
  },
]

// ROUTER
const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router