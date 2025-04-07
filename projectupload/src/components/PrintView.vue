<template>
  <!-- 출제 개수 표시 -->
  <div
    v-if="Object.keys(subjectCounts).length"
    class="mb-6 text-sm text-gray-700"
  >
    <p class="font-semibold mb-2">출제 개수:</p>
    <ul class="list-disc pl-5 space-y-1">
      <li v-for="(count, subject) in subjectCounts" :key="subject">
        {{ subject }}: {{ count }}문제
      </li>
    </ul>
  </div>

  <!-- 문제 출력 -->
  <div
    v-if="selectedQuestions.length"
    class="max-w-[210mm] mx-auto p-8 bg-white text-gray-900"
  >
    <div
      v-for="(question, index) in selectedQuestions"
      :key="index"
      class="mb-6 p-6 border border-gray-300 rounded-md shadow-sm bg-white break-inside-avoid"
    >
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
          class="flex items-start gap-2 p-2 rounded bg-gray-50 w-full"
        >
          <span class="font-semibold shrink-0">{{
            ["①", "②", "③", "④", "⑤"][i]
          }}</span>
          <span v-html="choice" class="block break-words" />
        </li>
      </ul>
    </div>
  </div>

  <!-- 로딩 중 -->
  <div v-else class="text-center text-gray-400 mt-10">
    문제를 불러오는 중입니다...
  </div>
</template>

<script setup>
import { onMounted, ref, nextTick } from "vue";

const selectedQuestions = ref([]);
const subjectCounts = ref({});

// MathJax가 로드될 때까지 기다리는 함수
function waitForMathJax() {
  return new Promise((resolve) => {
    const check = () => {
      if (window.MathJax && window.MathJax.typesetPromise) {
        resolve();
      } else {
        setTimeout(check, 100);
      }
    };
    check();
  });
}

// choice 레이아웃 결정
function choiceLayoutClass(question) {
  const plainLengths = question.choices.map((c) =>
    typeof c === "string" ? c.replace(/<[^>]+>/g, "").length : 0
  );
  const hasLongChoice = plainLengths.some((len) => len > 40); // ← 요기 고침

  const exampleText =
    typeof question.example === "string"
      ? question.example.replace(/<[^>]+>/g, "")
      : "";
  const isExampleLong = exampleText.length > 250;

  if (hasLongChoice || isExampleLong) return "grid-cols-1";

  const len = question.choices.length;
  if (len === 2 || len === 4) return "grid-cols-2";
  return "grid-cols-2";
}

// 보기 포맷팅
function formatExampleArray(example) {
  const normalizeExample = (example) => {
    let lines = [];

    if (typeof example === "string") {
      const alignedMatch = example.match(
        /\\begin\{aligned\}([\s\S]+?)\\end\{aligned\}/
      );
      if (alignedMatch) {
        const inner = alignedMatch[1];
        lines = inner.split(/\\\\/).map((str) => {
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
        lines = example
          .split(/\n|<br ?\/>|\\\\/)
          .map((l) => l.trim())
          .filter(Boolean);
      }
    } else if (Array.isArray(example)) {
      lines = example.map((str) => str.trim());
    }

    return lines.filter(Boolean);
  };

  const averageEffectiveLength = (items) => {
    const getLength = (text) =>
      text
        .replace(/\\[a-zA-Z]+/g, "")
        .replace(/[{}^_\\$]/g, "")
        .replace(/[^a-zA-Z0-9가-힣]/g, "").length;

    const total = items.reduce((sum, item) => sum + getLength(item), 0);
    return total / (items.length || 1);
  };

  const renderSingleColumn = (items) => {
    return items
      .map(
        (item) => `
      <div class="mb-2 whitespace-pre-line leading-relaxed break-words">
        ${item}
      </div>
    `
      )
      .join("");
  };

  const renderTwoColumns = (items) => {
    const rows = [];
    for (let i = 0; i < items.length; i += 2) {
      const left = items[i] || "";
      const right = items[i + 1] || "";
      rows.push(`
        <div class="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-2">
          <div class="break-words whitespace-pre-wrap">${left}</div>
          <div class="break-words whitespace-pre-wrap">${right}</div>
        </div>
      `);
    }
    return rows.join("");
  };

  const renderMultiRow = (items, perRow = 4) => {
    const rows = [];
    for (let i = 0; i < items.length; i += perRow) {
      const rowItems = items.slice(i, i + perRow);
      const cols = rowItems
        .map(
          (item) =>
            `<div class="inline-block break-inside-avoid whitespace-pre-wrap break-words">${item}</div>`
        )
        .join("");
      rows.push(`<div class="grid grid-cols-1 gap-4 mb-2">${cols}</div>`);
    }
    return rows.join("");
  };

  const items = normalizeExample(example);
  const avgLen = averageEffectiveLength(items);
  const isPureMath = items.every((item) => item.match(/^.*\$\$.*\$\$/));

  if (avgLen > 60) {
    if (isPureMath && avgLen <= 80) return renderTwoColumns(items);
    return renderSingleColumn(items);
  }
  if (avgLen > 40) return renderTwoColumns(items);
  if (items.length <= 4 && avgLen <= 50)
    return renderMultiRow(items, items.length);
  return renderMultiRow(items, 4);
}

onMounted(() => {
  const savedQuestions = sessionStorage.getItem("printQuestions");
  const savedCounts = sessionStorage.getItem("subjectCounts");

  if (savedQuestions) {
    try {
      selectedQuestions.value = JSON.parse(savedQuestions);
    } catch (e) {
      console.error("문제 데이터 파싱 실패:", e);
    }
  }

  if (savedCounts) {
    try {
      subjectCounts.value = JSON.parse(savedCounts);
    } catch (e) {
      console.error("출제 수 데이터 파싱 실패:", e);
    }
  }

  nextTick(() => {
    waitForMathJax()
      .then(() => window.MathJax.typesetPromise())
      .then(() => window.print())
      .catch((err) => console.error("❌ MathJax 렌더링 실패:", err));
  });
});
</script>

<style scoped>
.break-inside-avoid {
  break-inside: avoid;
  page-break-inside: avoid;
}

@media print {
  @page {
    margin: 20mm;
  }

  body {
    background: white;
    margin: 0;
    padding: 0;
  }

  .no-print {
    display: none !important;
  }
}
</style>
