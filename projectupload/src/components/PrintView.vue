<template>
  <!-- 출제 개수 표시 -->
  <div v-if="Object.keys(subjectCounts).length" class="mb-6 text-sm text-gray-700">
    <p class="font-semibold mb-2">출제 개수:</p>
    <ul class="list-disc pl-5 space-y-1">
      <li v-for="(count, subject) in subjectCounts" :key="subject">
        {{ subject }}: {{ count }}문제
      </li>
    </ul>
  </div>

  <!-- 문제 목록 출력 (데이터 있을 때만) -->
  <div
    v-if="selectedQuestions && selectedQuestions.length"
    class="max-w-[210mm] mx-auto px-8 py-10 text-base text-gray-800"
  >
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

  <!-- 로딩 중일 때 메시지 -->
  <div v-else class="text-center text-gray-400 mt-10">
    문제를 불러오는 중입니다...
  </div>
</template>

<script setup>
import { onMounted, ref } from "vue";

const selectedQuestions = ref([]);
const subjectCounts = ref({});

onMounted(() => {
  const savedQuestions = sessionStorage.getItem("printQuestions");
  const savedCounts = sessionStorage.getItem("subjectCounts");

  if (savedQuestions) {
    try {
      selectedQuestions.value = JSON.parse(savedQuestions);
    } catch (e) {
      console.error("문제 데이터 파싱 실패:", e);
    }
  }

  if (savedCounts) {
    try {
      subjectCounts.value = JSON.parse(savedCounts);
    } catch (e) {
      console.error("출제 수 데이터 파싱 실패:", e);
    }
  }

  // 수식 렌더링 후 프린트
  waitForMathJax().then(() => {
    return window.MathJax.typesetPromise();
  }).then(() => {
    window.print();
  });
});

// MathJax가 로드될 때까지 기다리는 함수
function waitForMathJax() {
  return new Promise((resolve) => {
    const check = () => {
      if (window.MathJax && window.MathJax.typesetPromise) {
        resolve();
      } else {
        setTimeout(check, 100); // 100ms마다 재시도
      }
    };
    check();
  });
}
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
