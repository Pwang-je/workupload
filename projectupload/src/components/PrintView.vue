<template>
  <div class="p-8 text-base max-w-[210mm] mx-auto">
    <div
      v-for="(question, index) in selectedQuestions"
      :key="index"
      class="mb-6 p-4 border border-gray-300 rounded-md shadow-sm break-inside-avoid"
      :class="{ 'page-break-after': (index + 1) % 4 === 0 }"
    >
      <p class="font-semibold mb-2">
        [{{ question.subject }}] {{ question.page }}페이지 - {{ index + 1 }}번
      </p>
      <div v-html="question.question" class="mb-2 text-sm" />

      <!-- 선택지 -->
      <ul v-if="question.choices.length" class="mb-2 space-y-1 text-sm">
        <li v-for="(choice, i) in question.choices" :key="i">
          <strong>{{ ['①', '②', '③', '④', '⑤'][i] }}</strong>
          <span v-html="choice"></span>
        </li>
      </ul>

      <!-- 보기 -->
      <div
        v-if="question.example"
        class="bg-gray-50 border border-gray-300 rounded px-3 py-2 text-sm"
      >
        <p class="font-medium mb-1 text-gray-600">[보기]</p>
        <div v-html="question.example" />
      </div>
    </div>
  </div>
</template>

<script setup>
import { onMounted, ref } from "vue";

const selectedQuestions = ref([]);

onMounted(() => {
  const saved = sessionStorage.getItem("printQuestions");
  if (saved) {
    try {
      selectedQuestions.value = JSON.parse(saved);

      // 수식 렌더 후 자동 인쇄
      if (window.MathJax) {
        window.MathJax.typesetPromise().then(() => {
          window.print();
        });
      } else {
        window.print();
      }
    } catch (e) {
      console.error("저장된 문제 파싱 실패:", e);
    }
  }
});
</script>

<style scoped>
.page-break-after {
  page-break-after: always;
}
.break-inside-avoid {
  break-inside: avoid;
}
@media print {
  @page {
    margin: 1remm;
  }

  body {
    margin: 1rem;
    padding: 0;
    background: white;
  }

  .no-print {
    display: none !important;
  }
}
</style>