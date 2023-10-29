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
  {
    path: '/faction-picker/:era_id',
    name: "factionPicker",
    component: () => import('../views/FactionPicker.vue'),
    props: true
  },
]

// ROUTER
const router = createRouter({
  history: createWebHistory(),
  mode: 'history',
  routes,
})

export default router