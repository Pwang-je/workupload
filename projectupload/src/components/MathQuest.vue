<template>
  <div>
    <h2>{{ selectedMath }} ({{ selectedCount }}개 문제)</h2>

    <div class="buttons">
      <button v-for="subject in subjects" :key="subject" @click="selectMath(subject)">
        {{ subject }}
      </button>
    </div>

    <div class="checkbox-group">
      <label v-for="num in counts" :key="num">
        <input type="radio" :value="num" v-model="selectedCount" />
        {{ num }}
      </label>
    </div>

    <button class="download-btn" @click="generatePDF">📄 PDF 다운로드</button>

    <div id="question-list">
      <div v-for="(item, index) in displayedQuestions" :key="index" class="math-question">
        <p v-html="renderMath(item.question)"></p>
        <ul v-if="item.choices">
          <li v-for="(choice, cIndex) in item.choices" :key="cIndex">
            <span v-html="renderMath(choice)"></span>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, computed, onMounted } from "vue";
import axios from "axios";
import katex from "katex";
import "katex/dist/katex.min.css";
import jsPDF from "jspdf";
import html2canvas from "html2canvas";
import _ from "lodash";

// 📌 과목 선택 버튼
const subjects = ["미적분1", "미적분2", "미적분3"];
const selectedMath = ref("미적분1");
const questionData = ref([]); // JSON 데이터를 저장할 변수

// 📌 문제 개수 선택 (50~300 중 선택)
const counts = [50, 80, 100, 150, 180, 200, 250, 300];
const selectedCount = ref(50); // ✅ 사용자가 직접 선택 가능하도록 설정

// 📌 표시할 랜덤 문제
const displayedQuestions = computed(() => _.sampleSize(questionData.value, selectedCount.value));

// 📌 JSON 데이터 불러오기
const loadQuestions = async () => {
  try {
    const response = await axios.get(`/data/${selectedMath.value}.json`);
    questionData.value = response.data;
  } catch (error) {
    console.error("JSON 파일을 불러오는 중 오류 발생:", error);
  }
};

// 📌 수식 변환 (KaTeX 사용)
const renderMath = (latex) => {
  return katex.renderToString(latex.replace(/\$\$/g, ""), { throwOnError: false });
};

// 📌 과목 변경 시 JSON 로드
const selectMath = (subject) => {
  selectedMath.value = subject;
  loadQuestions();
};

// 📌 PDF 생성
const generatePDF = async () => {
  const doc = new jsPDF();
  const element = document.getElementById("question-list");

  await html2canvas(element, { scale: 2 }).then((canvas) => {
    const imgData = canvas.toDataURL("image/png");
    const imgWidth = 210;
    const imgHeight = (canvas.height * imgWidth) / canvas.width;
    doc.addImage(imgData, "PNG", 0, 10, imgWidth, imgHeight);
  });

  doc.save(`${selectedMath.value}-${selectedCount.value}.pdf`);
};

// 📌 처음 실행 시 미적분1 JSON 로드
onMounted(() => {
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

.checkbox-group {
  margin: 10px 0;
}

.download-btn {
  margin: 10px 0;
  padding: 10px;
  border: none;
  background: #28a745;
  color: white;
  cursor: pointer;
  border-radius: 5px;
}

.math-question {
  margin-bottom: 20px;
}
</style>
