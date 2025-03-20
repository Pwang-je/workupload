<template>
  <div>
    <h2>{{ selectedMath }} <span v-if="selectedCount">({{ selectedCount }}개 문제)</span></h2>

    <div class="buttons">
      <button v-for="subject in subjects" :key="subject" @click="selectMath(subject)">
        {{ subject }}
      </button>
    </div>

    <div class="checkbox-group">
      <label v-for="num in counts" :key="num">
        <input type="radio" :value="num" v-model="selectedCount" @change="updateMathJax" />
        {{ num }}
      </label>
    </div>

    <button class="download-btn" @click="generatePDF" :disabled="!selectedCount">📄 PDF 다운로드</button>

    <div id="question-list" v-if="selectedCount">
      <div v-for="(item, index) in displayedQuestions" :key="index" class="math-question">
        <span v-html="renderMathJax(`${item.page}페이지 - ${index + 1}번. ${item.question}`)"></span>

        <div class="choices">
          <div v-for="(choice, cIndex) in item.choices" :key="cIndex" class="choice-item">
            <span class="choice-number">{{ cIndex + 1 }}.</span>
            <span v-html="renderMathJax(choice)"></span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>



<script setup>
import { ref, computed, onMounted, nextTick } from "vue";
import axios from "axios";
import _ from "lodash";
import jsPDF from "jspdf";
import { loadMathJax, updateMathJax, renderMathJax } from "@/utils/mathjax";
import NanumGothic from "@/assets/fonts/NanumGothicBase64.js"; // ✅ 한글 폰트 추가

// ✅ 과목 선택 버튼
const subjects = ["미적분1", "미적분2", "미적분3"];
const selectedMath = ref("미적분1");
const questionData = ref([]);
const counts = [50, 80, 100, 150, 180, 200, 250, 300];
const selectedCount = ref(null);

// ✅ 랜덤 문제 선택
const displayedQuestions = computed(() => {
  if (!selectedCount.value || !Array.isArray(questionData.value) || questionData.value.length === 0) {
    return [];
  }
  return _.sampleSize(questionData.value, selectedCount.value);
});

// ✅ JSON 데이터 불러오기
const loadQuestions = async () => {
  try {
    const response = await axios.get("https://raw.githubusercontent.com/Pwang-je/workupload/refs/heads/main/projectupload/src/data/clcls1.json");
    if (response.data.questions) {
      questionData.value = Object.entries(response.data.questions).flatMap(([page, questions]) =>
        questions.map((q) => ({ ...q, page }))
      );
      updateMathJax();
    }
  } catch (error) {
    console.error("📌 JSON 파일 불러오기 오류:", error);
  }
};


// ✅ 과목 선택 시 JSON 로드
const selectMath = (subject) => {
  selectedMath.value = subject;
  loadQuestions();
};

// ✅ MathJax 로드 및 데이터 불러오기
onMounted(() => {
  loadMathJax();
  loadQuestions();
});
</script>

<style scoped>
.buttons button {
  margin: 5px;
  padding: 10px;
  border: none;
  background: #007bff;
  color: white;
  cursor: pointer;
  border-radius: 5px;
}
/* ✅ 보기(선지) 가로 정렬 */
.choices {
  display: flex;
  justify-content: space-around; /* 보기 사이에 일정한 간격 유지 */
  align-items: center; /* 수식을 보기와 수직 정렬 */
  margin-top: 10px;
}

/* ✅ 보기 아이템 스타일 */
.choice-item {
  display: flex;
  align-items: center;
  font-size: 16px;
}

/* ✅ 보기 번호 스타일 (①, ②, ③, ④) */
.choice-number {
  font-weight: bold;
  margin-right: 5px; /* 보기 번호와 수식 간격 */
}

</style>
