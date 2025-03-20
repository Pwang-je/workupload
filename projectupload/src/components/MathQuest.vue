<script setup>
import { ref, onMounted, nextTick, watch } from "vue";
import { clcls1 } from "@/data/clcls1.js";

const numQuestions = ref(100); // 기본값 100개
const selectedQuestions = ref([]);

function getRandomQuestions(num) {
  const allQuestions = [];

  // 📌 문제와 해당 페이지 번호 가져오기
  Object.entries(clcls1.questions).forEach(([page, questions]) => {
    questions.forEach((q) => {
      allQuestions.push({
        page: page, // 실제 페이지 번호
        question: q.question,
        choices: q.choices || [] // 보기가 없으면 빈 배열로 처리
      });
    });
  });

  if (num > allQuestions.length) {
    alert("요청한 문제 수가 전체 문제보다 많습니다!");
    return;
  }

  // 문제를 랜덤하게 섞음
  const shuffled = [...allQuestions].sort(() => Math.random() - 0.5);
  
  // 선택한 문제를 1번부터 번호를 매겨 저장
  selectedQuestions.value = shuffled.slice(0, num).map((q, index) => ({
    number: index + 1, // 1번부터 연속된 번호
    page: q.page,
    question: q.question,
    choices: q.choices // 보기를 포함
  }));
}

// 📌 MathJax로 수식 다시 렌더링
function renderMath() {
  nextTick(() => {
    if (window.MathJax) {
      window.MathJax.typesetPromise();
    }
  });
}

// 문제 변경 감지 → 수식 렌더링
watch(selectedQuestions, renderMath);

// 컴포넌트가 처음 로드될 때 실행
onMounted(() => {
  getRandomQuestions(numQuestions.value);
  renderMath();
});
</script>

<template>
  <div>
    <h2>랜덤 미적분 문제</h2>
    <label for="questionCount">문제 개수 선택:</label>
    <select v-model="numQuestions" @change="getRandomQuestions(numQuestions)">
      <option v-for="n in [50, 80, 100, 150, 200, 250]" :key="n" :value="n">
        {{ n }}
      </option>
    </select>

    <ul>
      <li v-for="(question, index) in selectedQuestions" :key="index">
        <strong>{{ question.page }}페이지 - {{ question.number }}번</strong>
        <p v-html="question.question"></p>
        
        <!-- 📌 보기가 있는 경우만 출력 -->
        <ul v-if="question.choices.length > 0">
          <li v-for="(choice, choiceIndex) in question.choices" :key="choiceIndex">
            <p v-html="choice"></p>
          </li>
        </ul>
      </li>
    </ul>
  </div>
</template>

<style scoped>
h2 {
  color: #2c3e50;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  margin-bottom: 10px;
  padding: 10px;
  border: 1px solid #ddd;
  border-radius: 5px;
}
strong {
  font-size: 1.1em;
  color: #333;
}
</style>
