<script setup>
import { ref, nextTick, watch, computed } from "vue";
import { useRouter } from "vue-router";
import { clcls1 } from "@/data/clcls1.js";
import { clcls2 } from "@/data/clcls2.js";
import { clcls3 } from "@/data/clcls3.js";

const numQuestions = ref(100);
const selectedQuestions = ref([]);
const selectedSubjects = ref([]); // 다중 선택 가능하게 변경

const subjects = {
  calculus1: { name: "미적분1", data: clcls1 },
  calculus2: { name: "미적분2", data: clcls2 },
  calculus3: { name: "미적분3", data: clcls3 },
};


const ADMIN_PASSWORD = "2580";
// mathquest 페이지 이동 함수 (비밀번호 확인)
const goToMathTest = (event) => {
  const userInput = prompt("🔑: ");

  if (userInput === ADMIN_PASSWORD) {
    router.push("/mathtest"); // 비밀번호가 맞으면 이동
  } else {
    alert("❌");
    event.preventDefault(); // 비밀번호 틀리면 이동 차단
    router.push("/"); // 비밀번호 틀리면 홈으로 이동
  }
};


// 선택된 과목들에서 문제 가져오기
const currentQuestions = computed(() => {
  let allQuestions = [];
  selectedSubjects.value.forEach((subjectKey) => {
    if (subjects[subjectKey]) {
      const subjectQuestions = subjects[subjectKey].data.questions;
      Object.entries(subjectQuestions).forEach(([page, questions]) => {
        questions.forEach((q) => {
          allQuestions.push({
            subject: subjects[subjectKey].name, // 문제별 과목명 추가
            page: page,
            question: q.question,
            choices: q.choices || [],
            example: q.example || "" // example이 있을 경우만 추가
          });
        });
      });
    }
  });
  return allQuestions;
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
  if (selectedSubjects.value.length === 0) return;

  const shuffled = [...currentQuestions.value].sort(() => Math.random() - 0.5);

  selectedQuestions.value = shuffled.slice(0, num).map((q, index) => ({
    number: index + 1,
    subject: q.subject, // 문제별 과목 정보 유지
    page: q.page,
    question: q.question,
    choices: q.choices,
    example: q.example // example 포함
  }));
}

function renderMath() {
  nextTick(() => {
    if (window.MathJax) {
      window.MathJax.typesetPromise();
    }
  });
}

watch(selectedSubjects, () => {
  if (selectedSubjects.value.length > 0) {
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
        <router-link 
        to="/mathtest"
        @click="goToMathTest"
        class="absolute text-white transition-opacity duration-300 top-3 right-4 opacity-10 hover:opacity-100"
      >
        ⚙️a
      </router-link>

        <button @click="printPage" class="bg-blue-500 text-white px-4 py-2 rounded-md shadow-md hover:bg-blue-600">
          PDF로 저장 / 프린트
        </button>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6 mb-4 md:mb-6 print:hidden">
        <!-- ✅ 과목 다중 선택 가능 -->
        <div class="flex flex-col">
          <label class="text-base md:text-lg font-medium text-gray-700 mb-2">과목 선택</label>
          <div class="flex flex-wrap gap-2">
            <label v-for="(subject, key) in subjects" :key="key" class="flex items-center space-x-2">
              <input type="checkbox" :value="key" v-model="selectedSubjects" class="rounded border-gray-300">
              <span class="text-gray-800">{{ subject.name }}</span>
            </label>
          </div>
        </div>

        <!-- 문제 개수 선택 -->
        <div v-if="selectedSubjects.length > 0" class="flex flex-col">
          <label class="text-base md:text-lg font-medium text-gray-700 mb-2">문제 개수</label>
          <select v-model="numQuestions" @change="getRandomQuestions(numQuestions)"
            class="w-full p-2 md:p-3 rounded-md border border-gray-300 focus:ring-2 focus:ring-blue-500">
            <option v-for="n in [50, 80, 100, 150, 200, 250]" :key="n" :value="n">
              {{ n }}
            </option>
          </select>
        </div>
      </div>

      <p v-if="selectedSubjects.length === 0" class="text-red-500 text-base md:text-lg font-semibold text-center mt-3 md:mt-4">
        과목을 선택하면 문제가 표시됩니다.
      </p>

      <div v-for="(page, pageIndex) in paginatedQuestions" :key="pageIndex" class="print-page">
        <ul class="space-y-3 md:space-y-4">
          <li v-for="(question, index) in page" :key="index"
            class="p-5 bg-white rounded-md border border-gray-200 shadow-sm">
            
            <!-- ✅ 문제마다 개별적으로 과목 표시 -->
            <strong class="text-lg font-semibold text-gray-800">
              [{{ question.subject }}] {{ question.page }}페이지 - {{ question.number }}번
            </strong>
            
            <p v-html="question.question" class="mt-2 text-gray-700 text-sm md:text-base"></p>

            <!-- 📌 선지를 가로 정렬 -->
            <ul v-if="question.choices.length > 0" class="mt-3 grid grid-cols-1 md:grid-cols-2 gap-2">
              <li v-for="(choice, choiceIndex) in question.choices" :key="choiceIndex"
                class="p-3 rounded-md border border-gray-300 bg-gray-50 flex items-center space-x-2">
                <span class="font-semibold text-gray-800">{{ ['①', '②', '③', '④', '⑤'][choiceIndex] }}</span>
                <span v-html="choice"></span>
              </li>
            </ul>

            <!-- ✅ Example 항목에 사각형 추가 -->
            <div v-if="question.example && question.example.length > 0" class="mt-4">
              <div class="bg-gray-100 p-4 rounded-md border border-gray-300">
                <p class="text-sm text-gray-700">보기</p>
                <div v-html="question.example" class="space-y-2 mt-2"></div>
              </div>
            </div>
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
