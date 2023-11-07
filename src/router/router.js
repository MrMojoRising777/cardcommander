import { createRouter, createWebHistory } from "vue-router";

// ROUTES
const routes = [
  // DEFAULT
  {
    path: "/",
    name: "default",
    component: () => import('../views/HomePage.vue')
  },
  // LOGIN
  {
    path: "/login",
    name: "loginForm",
    component: () => import('../components/LoginForm.vue')
  },
  // REGISTER
  {
    path: "/register",
    name: "registerForm",
    component: () => import('../components/RegisterForm.vue')
  },
  // CARD COLLECTION
  {
    path: "/card_collections/:userId",
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
  // FACTION PICKER
  {
    path: '/factions/:eraId',
    name: "factionPicker",
    component: () => import('../views/FactionPicker.vue')
  },
  // BATTLEFIELD
  {
    path: "/battlefield",
    name: "cardBattleField",
    component: () => import('../components/BattleField.vue')
  },
]

// ROUTER
const router = createRouter({
  history: createWebHistory(),
  mode: 'history',
  routes,
})

export default router