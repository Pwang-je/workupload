<script setup>
import { ref, reactive, watch, computed, nextTick } from "vue";
import { clcls1 } from "@/data/clcls1.js";
import { clcls2 } from "@/data/clcls2.js";
import { clcls3 } from "@/data/clcls3.js";

const subjects = {
  calculus1: { name: "미적분1", data: clcls1 },
  calculus2: { name: "미적분2", data: clcls2 },
  calculus3: { name: "미적분3", data: clcls3 },
};

const selectedSubjects = ref([]);
const pageLimits = reactive({ calculus1: null, calculus2: null, calculus3: null });
const questionCount = ref(30);
const selectedQuestions = ref([]);

const pdfContent = ref(null);

const pageOptions = computed(() => {
  const result = {};
  for (const key in subjects) {
    const pages = Object.keys(subjects[key].data.questions)
      .map(p => parseInt(p))
      .sort((a, b) => a - b);
    result[key] = pages;
  }
  return result;
});

function getRandomQuestions() {
  const pool = [];

  selectedSubjects.value.forEach(subjectKey => {
    const data = subjects[subjectKey].data.questions;
    const limit = pageLimits[subjectKey];

    Object.entries(data).forEach(([page, list]) => {
      const pageNum = parseInt(page);
      if (limit === null || pageNum <= limit) {
        list.forEach(q => {
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
  sessionStorage.setItem("printQuestions", JSON.stringify(selectedQuestions.value));
  window.open("/printview", "_blank");
}

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
  <div class="max-w-screen-md mx-auto p-6 print:hidden text-gray-800">
    <h2 class="text-2xl font-bold mb-6 text-center">랜덤 미적분 문제</h2>

    <!-- 과목 선택 -->
    <div class="mb-6">
      <label class="block font-semibold mb-2">과목 선택 (복수 선택 가능)</label>
      <div class="flex flex-wrap gap-4">
        <label
          v-for="(subject, key) in subjects"
          :key="key"
          class="flex items-center gap-2"
        >
          <input type="checkbox" v-model="selectedSubjects" :value="key" class="accent-blue-600" />
          <span>{{ subject.name }}</span>
        </label>
      </div>
    </div>

    <!-- 페이지 제한 -->
    <div class="mb-6">
      <label class="block font-semibold mb-2">과목별 최대 페이지 제한</label>
      <div class="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div v-for="(subject, key) in subjects" :key="key">
          <label class="block text-sm mb-1 text-gray-600">{{ subject.name }}</label>
          <select v-model.number="pageLimits[key]" class="w-full border px-3 py-2 rounded-md">
            <option :value="null">전체</option>
            <option v-for="page in pageOptions[key]" :key="page" :value="page">
              {{ page }} 페이지까지
            </option>
          </select>
        </div>
      </div>
    </div>

    <!-- 문제 수 -->
    <div class="mb-6">
      <label class="block font-semibold mb-2">출제할 문제 수</label>
      <select v-model="questionCount" class="w-full border px-3 py-2 rounded-md">
        <option v-for="count in [30, 50, 100, 150, 200, 250, 300, 350]" :key="count" :value="count">
          {{ count }}문제
        </option>
      </select>
    </div>

    <!-- 버튼 -->
    <div class="flex flex-wrap gap-4 mb-8">
      <button
        @click="getRandomQuestions"
        class="bg-blue-600 hover:bg-blue-700 text-white font-semibold px-5 py-2 rounded"
      >
        문제 출제
      </button>
      <button
        @click="openPrintView"
        :disabled="selectedQuestions.length === 0"
        class="bg-yellow-500 hover:bg-yellow-600 text-white font-semibold px-5 py-2 rounded disabled:opacity-50"
      >
        PDF로 인쇄 (간편 출력)
      </button>
    </div>
  </div>

  <!-- 프린트용 미리보기 (선택적) -->
  <div ref="pdfContent" class="max-w-[210mm] mx-auto p-8 bg-gray-50 text-gray-900 print:bg-white">
    <div
      v-for="(question, index) in selectedQuestions"
      :key="index"
      class="mb-6 p-6 border border-gray-300 rounded-md shadow-sm bg-white break-inside-avoid"
    >
      <p class="font-semibold text-sm mb-2">
        {{ index + 1 }}. [{{ question.subject }}] {{ question.page }}페이지
      </p>
      <div v-html="question.question" class="mb-3 text-sm leading-relaxed" />

      <!-- 보기 -->
<div
v-if="question.example"
class="bg-gray-50 border border-gray-300 p-3 rounded-md text-sm mb-3"
>
<p class="text-gray-600 font-medium mb-1">[보기]</p>
<div v-html="question.example" />
</div>

<!-- 선택지 -->
<ul v-if="question.choices.length" class="mb-3 space-y-2 text-sm">
<li v-for="(choice, i) in question.choices" :key="i" class="flex gap-2">
  <strong>{{ ['①', '②', '③', '④', '⑤'][i] }}</strong>
  <span v-html="choice" />
</li>
</ul>




    </div>
  </div>
</template>

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

  .print\:hidden {
    display: none !important;
  }

  .no-print {
    display: none !important;
  }
}
</style>
