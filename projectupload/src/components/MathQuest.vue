<script setup>
import { ref, reactive, watch, computed, nextTick } from "vue";
import html2pdf from "html2pdf.js";
import { clcls1 } from "@/data/clcls1.js";
import { clcls2 } from "@/data/clcls2.js";
import { clcls3 } from "@/data/clcls3.js";

// 과목 정의
const subjects = {
  calculus1: { name: "미적분1", data: clcls1 },
  calculus2: { name: "미적분2", data: clcls2 },
  calculus3: { name: "미적분3", data: clcls3 },
};

const selectedSubjects = ref([]);
const pageLimits = reactive({ calculus1: null, calculus2: null, calculus3: null });
const questionCount = ref(30);
const selectedQuestions = ref([]);

// 출력 대상 PDF 컨테이너
const pdfContent = ref(null);

// 페이지 옵션 자동 추출
const pageOptions = computed(() => {
  const result = {};
  for (const key in subjects) {
    const pages = Object.keys(subjects[key].data.questions)
      .map((p) => parseInt(p))
      .sort((a, b) => a - b);
    result[key] = pages;
  }
  return result;
});

// 문제 추출
function getRandomQuestions() {
  const pool = [];

  selectedSubjects.value.forEach((subjectKey) => {
    const data = subjects[subjectKey].data.questions;
    const limit = pageLimits[subjectKey];

    Object.entries(data).forEach(([page, list]) => {
      const pageNum = parseInt(page);
      if (limit === null || pageNum <= limit) {
        list.forEach((q) => {
          pool.push({
            subject: subjects[subjectKey].name,
            page,
            question: q.question,
            choices: q.choices || [],
            example: q.example || "",
          });
        });
      }
    });
  });

  const shuffled = pool.sort(() => Math.random() - 0.5);
  selectedQuestions.value = shuffled.slice(0, questionCount.value);
}


function openPrintView() {
  // 데이터를 sessionStorage에 저장
  sessionStorage.setItem("printQuestions", JSON.stringify(selectedQuestions.value));
  // 새 탭 열기
  window.open("/printview", "_blank");
}


// 수식 렌더링
function renderMath() {
  nextTick(() => {
    if (window.MathJax) {
      window.MathJax.typesetPromise();
    }
  });
}
watch(selectedQuestions, renderMath);
</script>

<template>
  <div class="p-6 max-w-5xl mx-auto print:hidden">
    <h2 class="text-2xl font-bold mb-6">랜덤 미적분 문제 출제기</h2>

    <!-- 과목 선택 -->
    <div class="mb-4">
      <label class="block font-medium mb-2">과목 선택</label>
      <div class="flex flex-wrap gap-4">
        <label
          v-for="(subject, key) in subjects"
          :key="key"
          class="flex items-center gap-2"
        >
          <input type="checkbox" v-model="selectedSubjects" :value="key" />
          {{ subject.name }}
        </label>
      </div>
    </div>

    <!-- 페이지 제한 -->
    <div class="mb-4">
      <label class="block font-medium mb-2">과목별 최대 페이지 제한</label>
      <div class="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div v-for="(subject, key) in subjects" :key="key">
          <label class="block text-sm mb-1">{{ subject.name }}</label>
          <select
            v-model.number="pageLimits[key]"
            class="w-full border px-2 py-1 rounded"
          >
            <option :value="null">전체</option>
            <option v-for="page in pageOptions[key]" :key="page" :value="page">
              {{ page }} 페이지까지
            </option>
          </select>
        </div>
      </div>
    </div>

    <!-- 문제 수 -->
    <div class="mb-4">
      <label class="block font-medium mb-2">출제 문제 수</label>
      <select v-model="questionCount" class="w-full border px-2 py-1 rounded">
        <option v-for="count in [30, 50, 100, 150, 200, 250]" :key="count" :value="count">
          {{ count }}문제
        </option>
      </select>
    </div>

    <!-- 버튼 -->
    <div class="mb-6 flex gap-4">
      <button @click="getRandomQuestions" class="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">
        문제 출제
      </button>
      <button
  @click="openPrintView"
  class="bg-yellow-600 text-white px-4 py-2 rounded hover:bg-yellow-700"
  :disabled="selectedQuestions.length === 0"
>
  PDF로 인쇄 (간편 출력)
</button>
    </div>
  </div>

  <!-- 출력용 PDF 내용 (프린트 & PDF 포함) -->
  <div ref="pdfContent" class="max-w-[210mm] mx-auto p-8 bg-white print:bg-white">
    <div
      v-for="(question, index) in selectedQuestions"
      :key="index"
      class="mb-6 break-inside-avoid-page"
      :class="{ 'page-break-after': (index + 1) % 4 === 0 }"
    >
      <div class="text-base font-semibold mb-1">
        [{{ question.subject }}] {{ question.page }}페이지 - {{ index + 1 }}번
      </div>
      <div v-html="question.question" class="text-sm mb-2"></div>

      <!-- 선택지 -->
      <ul v-if="question.choices.length" class="space-y-1">
        <li
          v-for="(choice, i) in question.choices"
          :key="i"
          class="text-sm pl-2 border-l-4 border-blue-300 bg-blue-50 rounded py-1 px-2"
        >
          <strong>{{ ['①', '②', '③', '④', '⑤'][i] }}</strong>
          <span v-html="choice"></span>
        </li>
      </ul>

      <!-- 보기 -->
      <div v-if="question.example" class="mt-2 text-sm bg-gray-100 border border-gray-300 rounded p-2">
        <p class="font-medium text-gray-700">[보기]</p>
        <div v-html="question.example"></div>
      </div>
    </div>
  </div>
</template>

<style scoped>
/* A4 한 페이지에 문제 4개씩 출력용 스타일 */
.page-break-after {
  page-break-after: always;
}
.break-inside-avoid-page {
  break-inside: avoid;
}
@media print {
  @page {
    margin: 0;
  }

  body {
    margin: 0;
    padding: 0;
    background: white;
  }

  .no-print {
    display: none !important;
  }
}
</style>