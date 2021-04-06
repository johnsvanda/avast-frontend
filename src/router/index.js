import { createWebHistory, createRouter } from "vue-router";

import CreateAccount from "../views/CreateAccount.vue";
import ViewAccount from "../views/ViewAccount.vue";

const routes = [
  {
    path: "/",
    name: "Create Account",
    component: CreateAccount,
  },
  {
    path: "/ViewAccounts",
    name: "View Accounts",
    component: ViewAccount,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
