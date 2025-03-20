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
import { ref, computed, onMounted, nextTick } from "vue";
import axios from "axios";
import katex from "katex";
import "katex/dist/katex.min.css";
import jsPDF from "jspdf";
import _ from "lodash";
import NanumGothic from "@/assets/fonts/NanumGothicBase64.js"; // ✅ Base64 한글 폰트 추가

// ✅ 과목 선택 버튼
const subjects = ["미적분1", "미적분2", "미적분3"];
const selectedMath = ref("미적분1");
const questionData = ref([]); // JSON 문제 저장

// ✅ 문제 개수 선택 (50~300)
const counts = [50, 80, 100, 150, 180, 200, 250, 300];
const selectedCount = ref(50);

// ✅ 랜덤 문제 선택
const displayedQuestions = computed(() => {
  if (!Array.isArray(questionData.value) || questionData.value.length === 0) {
    console.error("📌 오류: questionData가 올바른 배열이 아닙니다!");
    return [];
  }
  const randomQuestions = _.sampleSize(questionData.value, selectedCount.value);
  console.log("📌 선택된 랜덤 문제:", randomQuestions);
  return randomQuestions;
});

// ✅ JSON 데이터 불러오기 (과목별 동적 로드)
const loadQuestions = async () => {
  try {
    const subjectMap = {
      "미적분1": "clcls1.json",
      "미적분2": "clcls2.json",
      "미적분3": "clcls3.json",
    };

    const fileName = subjectMap[selectedMath.value] || "clcls1.json";

    const response = await axios.get(
      `https://raw.githubusercontent.com/Pwang-je/workupload/refs/heads/main/projectupload/src/data/${fileName}`
    );

    console.log(`📌 ${selectedMath.value} JSON 데이터 로드:`, response.data);

    if (response.data.calculus1 && Array.isArray(response.data.calculus1)) {
      questionData.value = response.data.calculus1;
    } else {
      console.error("❌ JSON 데이터 구조가 예상과 다름!");
      questionData.value = [];
    }
  } catch (error) {
    console.error("📌 JSON 파일 불러오기 오류:", error);
  }
};

// ✅ 수식 변환 (KaTeX 사용, 줄바꿈 처리 추가)
const renderMath = (latex) => {
  return katex.renderToString(
    latex.replace(/\$\$/g, "").replace(/\n/g, "<br>"),
    { throwOnError: false }
  );
};

// ✅ 과목 선택 시 JSON 로드
const selectMath = (subject) => {
  selectedMath.value = subject;
  loadQuestions();
};

// ✅ PDF 생성 (한글 깨짐 방지)
const generatePDF = async () => {
  try {
    await nextTick();

    console.log("📌 PDF 생성 시작 - 현재 랜덤 문제 데이터:", displayedQuestions.value);

    if (!displayedQuestions.value.length) {
      console.error("❌ 오류: 문제가 없습니다!");
      return;
    }

    const doc = new jsPDF();

    // ✅ Base64 한글 폰트 적용 확인
    doc.addFileToVFS("NanumGothic.ttf", NanumGothic);
    doc.addFont("NanumGothic.ttf", "NanumGothic", "normal");
    doc.setFont("NanumGothic", "normal");

    doc.setFontSize(16);
    doc.text(`${selectedMath.value} 문제 (${selectedCount.value}개)`, 10, 10);

    let y = 20;
    displayedQuestions.value.forEach((item, index) => {
      if (!item.question) return;

      doc.setFontSize(12);
      doc.text(`${index + 1}. ${item.question}`, 10, y);
      y += 7;

      if (item.choices) {
        item.choices.forEach((choice, cIndex) => {
          doc.text(`  ${String.fromCharCode(65 + cIndex)}. ${choice}`, 15, y);
          y += 7;
        });
      }

      y += 10;

      if (y > 280) {
        doc.addPage();
        y = 20;
      }
    });

    doc.save(`${selectedMath.value}-${selectedCount.value}.pdf`);
  } catch (error) {
    console.error("📌 PDF 생성 오류:", error);
  }
};

// ✅ 처음 실행 시 기본 JSON 로드
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
