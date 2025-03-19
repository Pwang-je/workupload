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
        <ul v-if="item.choices && item.choices.length">
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
import html2canvas from "html2canvas";
import _ from "lodash";
import jsPDF from "jspdf";
import "jspdf-autotable";
import NanumGothic from "@/assets/fonts/NanumGothicBase64.js"; 

// 과목 선택 버튼
const subjects = ["미적분1"];
const selectedMath = ref("미적분1"); // 기본 과목 설정
const questionData = ref([]); // JSON 데이터 저장

// 문제 개수 선택 (50~300 중 선택)
const counts = [50, 80, 100, 150, 180, 200, 250, 300];
const selectedCount = ref(50); // 기본값 50개

// 랜덤 문제 출력 (데이터가 없을 경우 빈 배열 반환)
const displayedQuestions = computed(() => {
  if (!questionData.value.length) {
    console.error("📌 오류: questionData가 비어 있음! JSON 로딩을 확인하세요.");
    return [];
  }

  const randomQuestions = _.sampleSize(questionData.value, selectedCount.value); // ✅ 랜덤 문제 선택
  console.log("📌 선택된 랜덤 문제:", randomQuestions); // ✅ 확인용 로그 추가
  return randomQuestions;
});


const loadQuestions = async () => {
  try {
    const response = await axios.get(
      "https://raw.githubusercontent.com/Pwang-je/workupload/refs/heads/main/projectupload/src/data/clcls1.json"
    );

    console.log("📌 불러온 JSON 데이터:", response.data); // ✅ JSON 데이터 확인용 로그

    // JSON이 { "calculus1": [...] } 형식이라면 내부 데이터 추출
    if (response.data.calculus1) {
      questionData.value = response.data.calculus1;
    } else {
      console.error("📌 오류: JSON 구조가 예상과 다릅니다. 데이터 확인 필요!");
      return;
    }

    console.log("📌 저장된 문제 데이터:", questionData.value); // ✅ 문제 데이터 확인
  } catch (error) {
    console.error("📌 JSON 파일을 불러오는 중 오류 발생:", error);
  }
};


// 수식 변환 (KaTeX 사용)
const renderMath = (latex) => {
  return katex.renderToString(latex.replace(/\$\$/g, ""), { throwOnError: false });
};

// 과목 변경 시 JSON 로드
const selectMath = (subject) => {
  selectedMath.value = subject;
  loadQuestions();
};

const generatePDF = async () => {
  try {
    await nextTick(); // Vue 렌더링 완료 후 실행

    console.log("📌 PDF 생성 시작 - 현재 랜덤 문제 데이터:", displayedQuestions.value);

    if (!displayedQuestions.value.length) {
      console.error("📌 오류: 랜덤 문제 데이터가 없습니다! 랜덤 선택이 정상적으로 동작하는지 확인하세요.");
      return;
    }

    const doc = new jsPDF();
    
    doc.setFont("NanumGothic", "normal");
    doc.setFontSize(16);
    doc.text(`${selectedMath.value} 문제 (${selectedCount.value}개)`, 10, 10);

    let y = 20;

    displayedQuestions.value.forEach((item, index) => {
      if (!item.question) return;

      doc.setFontSize(12);
      doc.text(`${index + 1}. ${item.question}`, 10, y);
      y += 7;

      if (item.choices && item.choices.length) {
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
    console.error("📌 PDF 생성 중 오류 발생:", error);
  }
};


// 처음 실행 시 JSON 로드
onMounted(async () => {
  await loadQuestions(); // ✅ JSON 데이터를 불러옴
  console.log("📌 onMounted()에서 불러온 문제 데이터:", questionData.value);
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
