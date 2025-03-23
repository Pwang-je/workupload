<script setup>
import { ref, watch, computed, nextTick } from "vue";
import { clcls1 } from "@/data/clcls1.js";
import { clcls2 } from "@/data/clcls2.js";
import { clcls3 } from "@/data/clcls3.js";

// 문제 개수 선택, 선택된 과목, 문제 리스트 초기화
const selectedSubject = ref(""); // 선택된 과목
const selectedQuestions = ref([]); // 보여줄 문제들
const subjects = {
  calculus1: { name: "미적분1", data: clcls1 },
  calculus2: { name: "미적분2", data: clcls2 },
  calculus3: { name: "미적분3", data: clcls3 },
};

// 과목 선택에 따라 문제 가져오기
const currentQuestions = computed(() => {
  if (!selectedSubject.value) return [];
  
  const questions = subjects[selectedSubject.value]?.data.questions || [];
  let allQuestions = [];
  Object.entries(questions).forEach(([page, questionsList]) => {
    questionsList.forEach((q) => {
      allQuestions.push({
        subject: subjects[selectedSubject.value].name, 
        page: page,
        question: q.question,
        choices: q.choices || [],
        example: q.example || "" 
      });
    });
  });
  return allQuestions;
});

// 문제들을 한번에 모두 출력할 때 사용될 변수
watch(selectedSubject, () => {
  if (selectedSubject.value) {
    selectedQuestions.value = currentQuestions.value;
  } else {
    selectedQuestions.value = [];
  }
});

// 수식 렌더링
function renderMath() {
  nextTick(() => {
    if (window.MathJax) {
      window.MathJax.typesetPromise(); // MathJax 수식 렌더링
    }
  });
}

// 초기 설정을 마친 후 MathJax 렌더링
watch(selectedQuestions, renderMath);
</script>

<template>
  <div class="flex justify-center items-center min-h-screen bg-gray-100 p-4 md:p-6">
    <div class="w-full max-w-4xl bg-white rounded-lg p-4 md:p-6 shadow-md border border-gray-200">

      <!-- 헤더 -->
      <div class="flex justify-between items-center mb-4 md:mb-6">
        <h2 class="text-xl md:text-2xl font-semibold text-gray-800">랜덤 미적분 문제</h2>
      </div>

      <!-- 과목 선택 -->
      <div class="flex flex-col mb-6">
        <label class="text-base md:text-lg font-medium text-gray-700 mb-2">과목 선택</label>
        <div class="flex gap-4">
          <label v-for="(subject, key) in subjects" :key="key" class="flex items-center space-x-2">
            <input type="radio" :value="key" v-model="selectedSubject" class="rounded border-gray-300">
            <span class="text-gray-800">{{ subject.name }}</span>
          </label>
        </div>
      </div>

      <!-- 문제 출력 -->
      <div v-if="selectedSubject" class="space-y-4">
        <ul class="space-y-3 md:space-y-4">
          <li v-for="(question, index) in selectedQuestions" :key="index" class="p-5 bg-white rounded-md border border-gray-200 shadow-sm">
            <strong class="text-lg font-semibold text-gray-800">
              [{{ question.subject }}] {{ question.page }}페이지 - {{ index + 1 }}번
            </strong>
            <p v-html="question.question" class="mt-2 text-gray-700 text-sm md:text-base"></p>

            <!-- 📌 선지 표시 -->
            <ul v-if="question.choices.length > 0" class="mt-3 space-y-2">
              <li v-for="(choice, choiceIndex) in question.choices" :key="choiceIndex" class="p-3 rounded-md border border-gray-300 bg-gray-50">
                <span class="font-semibold text-gray-800">{{ ['①', '②', '③', '④', '⑤'][choiceIndex] }}</span>
                <span v-html="choice"></span>
              </li>
            </ul>

            <!-- 예시 (example) 표시 -->
            <div v-if="question.example && question.example.length > 0" class="mt-4">
              <div class="bg-gray-100 p-4 rounded-md border border-gray-300">
                <p class="text-sm text-gray-700">보기</p>
                <div v-html="question.example" class="space-y-2 mt-2"></div>
              </div>
            </div>
          </li>
        </ul>
      </div>
      
      <!-- 과목을 선택하지 않은 경우 -->
      <p v-if="!selectedSubject" class="text-red-500 text-base md:text-lg font-semibold text-center mt-3 md:mt-4">
        과목을 선택하면 문제가 표시됩니다.
      </p>
    </div>
  </div>
</template>
