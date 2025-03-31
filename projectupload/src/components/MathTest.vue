<script setup>
import { ref, computed, nextTick, watch } from "vue";
import { clcls1 } from "@/data/clcls1.js";
import { clcls2 } from "@/data/clcls2.js";
import { clcls3 } from "@/data/clcls3.js";

// 과목 정의
const subjects = {
  calculus1: { name: "미적분1", data: clcls1 },
  calculus2: { name: "미적분2", data: clcls2 },
  calculus3: { name: "미적분3", data: clcls3 },
};

const selectedSubject = ref("");
const selectedQuestions = ref([]);

// 선택된 과목의 전체 문제 가져오기
const currentQuestions = computed(() => {
  if (!selectedSubject.value) return [];

  const questions = subjects[selectedSubject.value]?.data?.questions || {};
  const allQuestions = [];

  Object.entries(questions)
    .sort((a, b) => parseInt(a[0]) - parseInt(b[0]))
    .forEach(([page, questionList]) => {
      if (!Array.isArray(questionList)) return;

      questionList.forEach((q) => {
        allQuestions.push({
          subject: subjects[selectedSubject.value].name,
          page,
          question: q.question,
          choices: q.choices || [],
          example: q.example || ""
        });
      });
    });

  return allQuestions;
});

// 선택 변경 시 전체 문제 업데이트
watch(selectedSubject, () => {
  selectedQuestions.value = currentQuestions.value;
});

// 수식 렌더링
function renderMath() {
  nextTick(() => {
    if (window.MathJax) {
      window.MathJax.typesetPromise();
    }
  });
}
watch(selectedQuestions, renderMath);

// 보기 렌더링 함수
function formatExampleArray(example) {
  const normalizeExample = (example) => {
    let lines = [];

    if (typeof example === 'string') {
      const alignedMatch = example.match(/\\begin\{aligned\}([\s\S]+?)\\end\{aligned\}/);
      if (alignedMatch) {
        const inner = alignedMatch[1];
        lines = inner.split(/\\\\/).map(str => {
          const textMatch = str.match(/\\text\{(.+?)\}(.*)/);
          if (textMatch) {
            const label = textMatch[1].trim();
            const content = textMatch[2].trim();
            return `${label} $$${content}$$`;
          } else {
            return str.trim();
          }
        });
      } else {
        lines = example.split(/\n|<br ?\/>|\\\\/).map(l => l.trim()).filter(Boolean);
      }
    } else if (Array.isArray(example)) {
      lines = example.map(str => str.trim());
    }

    return lines.filter(Boolean);
  };

  const renderSingleColumn = (items) => {
    return items.map((item) => `<div class="mb-2 leading-relaxed break-words">${item}</div>`).join('');
  };

  const items = normalizeExample(example);
  return renderSingleColumn(items);
}

// 선지 레이아웃 판단
function choiceLayoutClass(question) {
  const plainLengths = question.choices.map(c =>
    typeof c === "string" ? c.replace(/<[^>]+>/g, '') : ''
  );
  const hasLongChoice = plainLengths.some(len => len.length > 40);

  const exampleText =
    typeof question.example === "string" ? question.example.replace(/<[^>]+>/g, '') : '';
  const isExampleLong = exampleText.length > 250;

  if (hasLongChoice || isExampleLong) return 'grid-cols-1';
  return 'grid-cols-2';
}
</script>

<template>
  <div class="max-w-screen-md mx-auto p-6">
    <h2 class="text-2xl font-bold mb-6 text-center">수식 확인용 전체 미적분 문제 보기</h2>

    <!-- 과목 선택 -->
    <div class="mb-6">
      <label class="block font-semibold mb-2">과목 선택</label>
      <div class="flex gap-6">
        <label v-for="(subject, key) in subjects" :key="key" class="flex items-center gap-2">
          <input type="radio" v-model="selectedSubject" :value="key" class="radio radio-primary" />
          <span>{{ subject.name }}</span>
        </label>
      </div>
    </div>

    <!-- 문제 리스트 -->
    <div v-if="selectedSubject && selectedQuestions.length" class="space-y-6">
      <div
        v-for="(q, index) in selectedQuestions"
        :key="index"
        class="p-5 bg-white rounded-md border border-gray-200 shadow-sm"
      >
        <p class="font-semibold text-sm mb-2 text-gray-800">
          {{ index + 1 }}. [{{ q.subject }}] {{ q.page }}페이지
        </p>
        <div v-html="q.question" class="mb-3 text-sm text-gray-700" />

        <div
          v-if="q.example"
          class="bg-gray-50 border border-gray-300 p-3 rounded-md text-sm mb-3"
        >
          <p class="text-gray-600 font-medium mb-1">[보기]</p>
          <div v-html="formatExampleArray(q.example)" />
        </div>

        <ul
          v-if="q.choices.length"
          class="mb-3 grid gap-4 text-sm"
          :class="choiceLayoutClass(q)"
        >
          <li
            v-for="(choice, i) in q.choices"
            :key="i"
            class="flex items-start gap-2 p-2 rounded bg-gray-50"
          >
            <span class="font-semibold">{{ ['①','②','③','④','⑤'][i] }}</span>
            <span v-html="choice" />
          </li>
        </ul>
      </div>
    </div>

    <p v-else class="text-center text-gray-500 mt-6">과목을 선택하면 전체 문제가 표시됩니다.</p>
  </div>
</template>
