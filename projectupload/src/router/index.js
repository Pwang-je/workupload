import { createRouter, createWebHistory } from "vue-router";
import FileUpload from "@/components/FileUpload.vue"; // ✅ 업로드 페이지
import AdminPage from "@/components/AdminPage.vue"; // ✅ 관리자 페이지

const routes = [
  { path: "/", component: FileUpload },
  { path: "/adminpage", component: AdminPage }, // 관리자 페이지 경로 설정
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
