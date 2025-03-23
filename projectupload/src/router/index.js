import { createRouter, createWebHistory, createWebHashHistory } from "vue-router"; // 올바른 import 확인!
import FileUpload from "../components/FileUpload.vue";
import AdminPage from "../components/AdminPage.vue";
import MathQuest from "../components/MathQuest.vue";
import MathTest from "../components/MathTest.vue";

const routes = [
  { path: "/", component: FileUpload },
  { path: "/adminpage", component: AdminPage },
  { path: "/mathquest", component: MathQuest },
  { path: "/mathtest", component: MathTest },
];

const router = createRouter({
  history: process.env.NODE_ENV === "production" ? createWebHashHistory() : createWebHistory(), // 환경에 따라 변경
  routes,
});

export default router;
