<script setup>
import { RouterView } from "vue-router"; 
import { supabase } from "./supabase";

// 정상적으로 로드되는지 확인
// console.log("supabase 모듈 정상 로드", supabase);
</script>

<template>
  <router-view /> 
</template>
<style>
/* MathJax 블록 수식을 강제로 인라인으로 변경 */
mjx-container[jax="CHTML"][display="true"] {
  display: inline !important;
  text-align: inherit !important;
  margin: 0 !important;
}
.MJX-TEX {
  margin: 0.2rem !important;
  font-size: 100% !important;
}
.mathjax-html {
  display: block;
  white-space: normal;
  word-break: break-word;
  overflow-wrap: anywhere;
  width: 100%;
  min-width: 0;
  max-width: 100%;
}

</style>
