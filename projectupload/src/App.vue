<script setup>
import FileUpload from './components/FileUpload.vue';
import AdminPage from './components/AdminPage.vue';
import { supabase } from "./supabase";

// 정상적으로 로드되는지 확인
console.log("supabase 모듈 정상 로드", supabase);
</script>

<template>
  <FileUpload />
</br>
  <AdminPage />
</template>

<style scoped>

</style>
