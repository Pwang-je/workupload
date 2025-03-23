<template>
  <div class="max-w-[210mm] mx-auto px-8 py-10 text-base text-gray-800">
    <div
      v-for="(question, index) in selectedQuestions"
      :key="index"
      class="mb-8 p-6 border border-gray-300 rounded-md shadow-sm bg-white break-inside-avoid"
    >
      <!-- 문제 번호 및 제목 -->
      <p class="font-semibold text-[15px] mb-3">
        {{ index + 1 }}. [{{ question.subject }}] {{ question.page }}페이지
      </p>

      <!-- 문제 내용 -->
      <div v-html="question.question" class="mb-4 leading-relaxed text-sm" />

      <!-- 선지 -->
      <ul v-if="question.choices.length" class="mb-4 space-y-2 text-sm">
        <li
          v-for="(choice, i) in question.choices"
          :key="i"
          class="flex items-start gap-2"
        >
          <span class="font-semibold">{{ ['①', '②', '③', '④', '⑤'][i] }}</span>
          <span v-html="choice" />
        </li>
      </ul>

      <!-- 보기 -->
      <div
        v-if="question.example"
        class="bg-gray-50 border border-gray-300 p-3 rounded-md text-sm"
      >
        <p class="text-gray-600 font-medium mb-1">[보기]</p>
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

      // 수식 렌더링 후 자동 인쇄
      if (window.MathJax) {
        window.MathJax.typesetPromise().then(() => {
          window.print();
        });
      } else {
        window.print();
      }
    } catch (e) {
      console.error("문제 데이터 파싱 실패:", e);
    }
  }
});
</script>

<style scoped>
.break-inside-avoid {
  break-inside: avoid;
  page-break-inside: avoid;
}

@media print {
  @page {
    margin: 20mm;
  }

  body {
    background: white;
    margin: 0;
    padding: 0;
  }

  .no-print {
    display: none !important;
  }
}
</style>
