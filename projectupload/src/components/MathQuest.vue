<script setup>
import { ref, onMounted, nextTick, watch, computed } from "vue";
import { clcls1 } from "@/data/clcls1.js";
import { clcls2 } from "@/data/clcls2.js";
import { clcls3 } from "@/data/clcls3.js";

const numQuestions = ref(100);
const selectedQuestions = ref([]);
const selectedSubject = ref("");

const subjects = {
  calculus1: { name: "미적분1", data: clcls1 },
  calculus2: { name: "미적분2", data: clcls2 },
  calculus3: { name: "미적분3", data: clcls3 },
};

const currentQuestions = computed(() => {
  return selectedSubject.value ? subjects[selectedSubject.value]?.data.questions : null;
});

const subjectName = computed(() => {
  return selectedSubject.value ? subjects[selectedSubject.value]?.name : "";
});

// 문제를 3개씩 그룹화하여 A4 한 장에 3문제씩 배치
const paginatedQuestions = computed(() => {
  let result = [];
  for (let i = 0; i < selectedQuestions.value.length; i += 3) {
    result.push(selectedQuestions.value.slice(i, i + 3));
  }
  return result;
});

function getRandomQuestions(num) {
  if (!selectedSubject.value) return;

  const allQuestions = [];

  if (currentQuestions.value) {
    Object.entries(currentQuestions.value).forEach(([page, questions]) => {
      questions.forEach((q) => {
        allQuestions.push({
          page: page,
          question: q.question,
          choices: q.choices || [],
        });
      });
    });
  }

  if (num > allQuestions.length) {
    alert("요청한 문제 수가 전체 문제보다 많습니다!");
    return;
  }

  const shuffled = [...allQuestions].sort(() => Math.random() - 0.5);

  selectedQuestions.value = shuffled.slice(0, num).map((q, index) => ({
    number: index + 1,
    page: q.page,
    question: q.question,
    choices: q.choices,
  }));
}

function renderMath() {
  nextTick(() => {
    if (window.MathJax) {
      window.MathJax.typesetPromise();
    }
  });
}

watch(selectedSubject, () => {
  if (selectedSubject.value) {
    getRandomQuestions(numQuestions.value);
    renderMath();
  } else {
    selectedQuestions.value = [];
  }
});

watch(selectedQuestions, renderMath);

// 프린트 기능 추가 (PDF 저장도 가능)
function printPage() {
  window.print();
}
</script>

<template>
  <div class="flex justify-center items-center min-h-screen bg-gray-100 p-4 md:p-6">
    <div class="w-full max-w-4xl bg-white rounded-lg p-4 md:p-6 shadow-md border border-gray-200 print:p-0">
      
      <!-- 헤더 -->
      <div class="flex justify-between items-center mb-4 md:mb-6 print:hidden">
        <h2 class="text-xl md:text-2xl font-semibold text-gray-800">랜덤 미적분 문제</h2>
        <button @click="printPage" class="bg-blue-500 text-white px-4 py-2 rounded-md shadow-md hover:bg-blue-600">
          PDF로 저장 / 프린트
        </button>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6 mb-4 md:mb-6 print:hidden">
        <!-- 과목 선택 -->
        <div class="flex flex-col">
          <label class="text-base md:text-lg font-medium text-gray-700 mb-2">과목 선택</label>
          <select v-model="selectedSubject"
            class="w-full p-2 md:p-3 rounded-md border border-gray-300 focus:ring-2 focus:ring-blue-500">
            <option value="">과목을 선택하세요</option>
            <option value="calculus1">미적분 1</option>
            <option value="calculus2">미적분 2</option>
            <option value="calculus3">미적분 3</option>
          </select>
        </div>

        <!-- 문제 개수 선택 -->
        <div v-if="selectedSubject" class="flex flex-col">
          <label class="text-base md:text-lg font-medium text-gray-700 mb-2">문제 개수</label>
          <select v-model="numQuestions" @change="getRandomQuestions(numQuestions)"
            class="w-full p-2 md:p-3 rounded-md border border-gray-300 focus:ring-2 focus:ring-blue-500">
            <option v-for="n in [50, 80, 100, 150, 200, 250]" :key="n" :value="n">
              {{ n }}
            </option>
          </select>
        </div>
      </div>

      <p v-if="!selectedSubject" class="text-red-500 text-base md:text-lg font-semibold text-center mt-3 md:mt-4">
        과목을 선택하면 문제가 표시됩니다.
      </p>

      <div v-for="(page, pageIndex) in paginatedQuestions" :key="pageIndex" class="print-page">
        <ul class="space-y-3 md:space-y-4">
          <li v-for="(question, index) in page" :key="index"
            class="p-5 bg-white rounded-md border border-gray-200 shadow-sm">
            <strong class="text-lg font-semibold text-gray-800">
              [{{ subjectName }}] {{ question.page }}페이지 - {{ question.number }}번
            </strong>
            <p v-html="question.question" class="mt-2 text-gray-700 text-sm md:text-base"></p>

            <!-- 보기가 있는 경우 -->
            <ul v-if="question.choices.length > 0" class="mt-3 space-y-2">
              <li v-for="(choice, choiceIndex) in question.choices" :key="choiceIndex"
                class="p-3 rounded-md border border-gray-300 bg-gray-50 flex items-start space-x-2">
                <span class="font-semibold text-gray-800">{{ ['①', '②', '③', '④'][choiceIndex] }}</span>
                <span v-html="choice"></span>
              </li>
            </ul>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>


<style>
/* ✅ A4용지 사이즈에 맞게 프린트 스타일 적용 */
@media print {
  body {
    background: white;
  }

  .print-page {
    page-break-before: always; /* 한 페이지마다 자동으로 줄 바꿈 */
    padding: 20px;
  }

  .print-hidden {
    display: none !important; /* 버튼 등 불필요한 요소 숨김 */
  }

  .print-visible {
    display: block !important;
  }

  .print p, .print strong {
    font-size: 14px; /* 프린트 시 글씨 크기 조정 */
  }
}
</style>
