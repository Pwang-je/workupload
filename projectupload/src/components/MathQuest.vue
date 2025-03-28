<script setup>
import { ref, reactive, computed, watch, nextTick } from "vue";
import { useRouter } from "vue-router";
import { clcls1 } from "@/data/clcls1.js";
import { clcls2 } from "@/data/clcls2.js";
import { clcls3 } from "@/data/clcls3.js";

// 과목 정의
const subjects = {
  calculus1: { name: "미적분1", data: clcls1 },
  calculus2: { name: "미적분2", data: clcls2 },
  calculus3: { name: "미적분3", data: clcls3 },
};

// 단원별 범위 설정
const chapters = {
  calculus1: [
    { name: "기초수학", start: 6, end: 33 },
    { name: "삼각함수와 쌍곡선함수", start: 42, end: 63 },
    { name: "여러 가지 함수의 미분법", start: 69, end: 100 },
    { name: "접선의 방정식", start: 107, end: 121 },
    { name: "고계도함수", start: 127, end: 141 },
  ],
  calculus2: [
    { name: "극한", start: 6, end: 49 },
    { name: "적분의 계산", start: 56, end: 94 },
    { name: "정적분의 여러 가지 유형", start: 102, end: 124 },
    { name: "이상적분", start: 131, end: 147 },
  ],
  calculus3: [
    { name: "극좌표", start: 6, end: 18 },
    { name: "미분의 응용", start: 24, end: 49 },
    { name: "정적분의 응용", start: 55, end: 88 },
    { name: "Taylor급수 & Maclaurin급수", start: 96, end: 116 },
    { name: "무한급수의 수렴과 발산", start: 121, end: 155 },
  ],
};

function choiceLayoutClass(question) {
  const plainLengths = question.choices.map(c =>
    typeof c === "string" ? c.replace(/<[^>]+>/g, '') : ''
  );
  const hasLongChoice = plainLengths.some(len => len > 40);

  const exampleText =
    typeof question.example === "string" ? question.example.replace(/<[^>]+>/g, '') : '';
  const isExampleLong = exampleText.length > 250;

  if (hasLongChoice || isExampleLong) return 'grid-cols-1';
  const len = question.choices.length;
  if (len === 2 || len === 4) return 'grid-cols-2';
  return 'grid-cols-2';
}

// 상태 관리 변수
const selectedSubjects = ref([]);
const selectedChapters = reactive({
  calculus1: [],
  calculus2: [],
  calculus3: [],
});
const pageRanges = reactive({
  calculus1: { min: null, max: null },
  calculus2: { min: null, max: null },
  calculus3: { min: null, max: null },
});
const questionCount = ref(30);
const selectedQuestions = ref([]);
const subjectCounts = ref({});
const router = useRouter();
const pdfContent = ref(null);

// 각 과목의 페이지 옵션 계산
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

// 문제 랜덤 추출
function getRandomQuestions() {
  const totalSubjects = selectedSubjects.value.length;
  const totalQuestions = questionCount.value;

  if (totalSubjects === 0) {
    selectedQuestions.value = [];
    subjectCounts.value = {};
    return;
  }

  const perSubjectCount = Math.floor(totalQuestions / totalSubjects);
  const remainder = totalQuestions % totalSubjects;

  const selected = [];
  const counts = {};

  selectedSubjects.value.forEach((subjectKey, index) => {
    const data = subjects[subjectKey].data.questions;
    const range = pageRanges[subjectKey];
    const chapterList = chapters[subjectKey];
    const selectedChapterNames = selectedChapters[subjectKey];

    const pool = [];

    Object.entries(data).forEach(([page, list]) => {
      const pageNum = parseInt(page);
      let inRange =
        (range.min === null || pageNum >= range.min) &&
        (range.max === null || pageNum <= range.max);

      if (selectedChapterNames.length > 0 && chapterList) {
        const included = chapterList.some(
          (ch) =>
            selectedChapterNames.includes(ch.name) &&
            pageNum >= ch.start &&
            pageNum <= ch.end
        );
        inRange = inRange && included;
      }

      if (inRange) {
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

    let count = perSubjectCount;
    if (index < remainder) count += 1;

    const shuffled = pool.sort(() => Math.random() - 0.5);
    const chosen = shuffled.slice(0, count);
    selected.push(...chosen);
    counts[subjects[subjectKey].name] = chosen.length;
  });

  selectedQuestions.value = selected;
  subjectCounts.value = counts;
}

function formatExampleArray(example) {
  const renderSingleColumn = (items) => {
    return items.map((item) => `
      <div class="mb-2 whitespace-pre-line leading-relaxed break-words">
        ${item}
      </div>
    `).join('');
  };

  const renderTwoColumns = (items) => {
    const rows = [];
    for (let i = 0; i < items.length; i += 2) {
      const left = items[i] || '';
      const right = items[i + 1] || '';
      rows.push(`
        <div class="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-2">
          <div class="break-words whitespace-pre-wrap">${left}</div>
          <div class="break-words whitespace-pre-wrap">${right}</div>
        </div>
      `);
    }
    return rows.join('');
  };

  const splitItems = (value) => {
    if (typeof value === 'string') {
      let items = [];

      // 🧠 예외 처리: 전체가 수식이면 분리하지 않음
      const trimmed = value.trim();
      if (trimmed.startsWith('$$') && trimmed.endsWith('$$')) {
        return [trimmed]; // 그대로 출력
      }

      if (value.match(/\([가-힣]\)/)) {
        items = value.split(/(?=\([가-힣]\))/g);
      } else if (value.match(/(^|\s)[가-힣]\./)) {
        items = value.split(/(?<=\s|^)(?=[가-힣]\.)/g);
      } else {
        items = value.split(/\n|(?<=\.)\s/);
      }

      return items.map(str => str.trim()).filter(Boolean);
    }

    if (Array.isArray(value)) {
      return value.map(str => String(str).trim()).filter(Boolean);
    }

    return [];
  };

  const items = splitItems(example);

  const hasLatex = items.some(item => item.includes('\\(') || item.includes('<span class="math">') || item.includes('$$'));
  const isTooLong = items.some(item => item.length > 80);

  // 수식이거나 너무 길면 1열
  if (isTooLong || hasLatex) {
    return renderSingleColumn(items);
  }

  return renderTwoColumns(items);
}


// 프린트 페이지로 이동
function openPrintView() {
  sessionStorage.setItem("printQuestions", JSON.stringify(selectedQuestions.value));
  sessionStorage.setItem("subjectCounts", JSON.stringify(subjectCounts.value));
  router.push("/printview");
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
  <div class="max-w-screen-md mx-auto p-6 print:hidden text-gray-800">
    <h2 class="text-2xl font-bold mb-6 text-center">귀차니즘을 이겨내기 위한 미적분 랜덤 문제 출제용</h2>

    <!-- 과목 선택 -->
    <div class="mb-6">
      <label class="block font-semibold mb-2">과목 선택 (복수 선택 가능)</label>
      <div class="flex flex-wrap gap-4">
        <label v-for="(subject, key) in subjects" :key="key" class="flex items-center gap-2">
          <input
            type="checkbox"
            v-model="selectedSubjects"
            :value="key"
            :class="{
              'checkbox checkbox-accent': key === 'calculus1',
              'checkbox checkbox-success': key === 'calculus2',
              'checkbox checkbox-warning': key === 'calculus3'
            }"
          />
          <span>{{ subject.name }}</span>
        </label>
      </div>
    </div>

    <!-- 과목별 단원 선택 -->
    <div
      v-for="subjectKey in selectedSubjects"
      :key="subjectKey"
      class="mb-6 border border-gray-300 p-4 rounded"
    >
      <label class="block font-semibold mb-2">{{ subjects[subjectKey].name }} - 단원 선택</label>
      <div class="flex flex-wrap gap-4">
        <label
          v-for="chapter in chapters[subjectKey]"
          :key="chapter.name"
          class="flex items-center gap-2"
        >
          <input
            type="checkbox"
            v-model="selectedChapters[subjectKey]"
            :value="chapter.name"
            class="checkbox checkbox-primary"
          />
          <span>{{ chapter.name }}</span>
        </label>
      </div>
    </div>

    <!-- 페이지 범위 선택 -->
    <div class="mb-6">
      <label class="block font-semibold mb-2">과목별 페이지 범위 설정</label>
      <div class="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div v-for="(subject, key) in subjects" :key="key">
          <label class="block text-sm mb-1 text-gray-600">{{ subject.name }}</label>
          <div class="flex gap-2">
            <select v-model.number="pageRanges[key].min" class="select select-secondary w-full">
              <option :value="null">Start</option>
              <option v-for="page in pageOptions[key]" :key="page" :value="page">{{ page }}</option>
            </select>
            <span class="px-1">~</span>
            <select v-model.number="pageRanges[key].max" class="select select-secondary w-full">
              <option :value="null">End</option>
              <option v-for="page in pageOptions[key]" :key="page" :value="page">{{ page }}</option>
            </select>
          </div>
        </div>
      </div>
    </div>

    <!-- 문제 수 설정 -->
    <div class="mb-6">
      <label class="block font-semibold mb-2">출제할 문제 수</label>
      <select v-model="questionCount" class="select select-secondary w-full">
        <option v-for="count in [30, 50, 100, 150, 200, 250, 300, 350]" :key="count" :value="count">
          {{ count }}문제
        </option>
      </select>
    </div>

    <!-- 버튼 영역 -->
    <div class="flex flex-wrap gap-4 mb-8">
      <button @click="getRandomQuestions" class="btn btn-primary" >
        문제 출제
      </button>
      <button @click="openPrintView" :disabled="selectedQuestions.length === 0" class="btn btn-warning disabled:opacity-50">
        인쇄-PDF
      </button>
    </div>
  </div>

  <!-- 출제 결과 요약 -->
  <div v-if="Object.keys(subjectCounts).length" class="max-w-screen-md mx-auto mb-6 bg-gray-100 border border-gray-300 p-4 rounded-md text-sm">
    <p class="font-semibold mb-2">출제된 문제 수</p>
    <ul class="flex flex-wrap gap-6">
      <li v-for="(count, name) in subjectCounts" :key="name" class="flex items-center gap-2">
        <span class="w-3 h-3 bg-blue-500 rounded-full inline-block"></span>
        <span>{{ name }}: <strong>{{ count }}</strong>문제</span>
      </li>
    </ul>
  </div>

  <!-- 문제 미리보기 -->
  <div ref="pdfContent" class="max-w-[210mm] mx-auto p-8 bg-gray-50 text-gray-900 print:bg-white">
    <div v-for="(question, index) in selectedQuestions" :key="index" class="mb-6 p-6 border border-gray-300 rounded-md shadow-sm bg-white break-inside-avoid">
      <p class="font-semibold text-sm mb-2">
        {{ index + 1 }}. [{{ question.subject }}] {{ question.page }}페이지
      </p>
      <div v-html="question.question" class="mb-3 text-sm leading-relaxed" />

      <div
  v-if="question.example"
  class="bg-gray-50 border border-gray-300 p-3 rounded-md text-sm mb-3"
>
  <p class="text-gray-600 font-medium mb-1">[보기]</p>
  <div v-html="formatExampleArray(question.example)" />
</div>

      <ul
  v-if="question.choices.length"
  class="mb-3 grid gap-4 text-sm"
  :class="choiceLayoutClass(question)"
>
  <li
    v-for="(choice, i) in question.choices"
    :key="i"
    class="flex items-start gap-2 p-2 rounded bg-gray-50"
  >
    <span class="font-semibold">{{ ['①','②','③','④','⑤'][i] }}</span>
    <span v-html="choice" />
  </li>
</ul>
    </div>
  </div>
</template>


