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
  // BATTLE
  {
    path: "/battle",
    name: "cardBattle",
    component: () => import('../views/Battle.vue')
  },
  // ERA PICKER
  {
    path: "/erapicker",
    name: "eraPicker",
    component: () => import('../views/EraPicker.vue')
  },
]

// ROUTER
const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router