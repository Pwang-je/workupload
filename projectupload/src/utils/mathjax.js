import { nextTick } from "vue";

// ✅ MathJax가 여러 번 로드되지 않도록 확인
let mathJaxLoaded = false;

// ✅ MathJax 최신 버전 CDN 로드
export const loadMathJax = () => {
  if (mathJaxLoaded) return;
  mathJaxLoaded = true;

  const script = document.createElement("script");
  script.src = "https://cdnjs.cloudflare.com/ajax/libs/mathjax/3.2.2/es5/tex-mml-chtml.js"; // ✅ 최신 버전
  script.async = true;
  script.onload = () => {
    console.log("📌 MathJax 로드 완료");
    if (window.MathJax) {
      window.MathJax.typesetPromise();
    }
  };
  document.head.appendChild(script);
};

// ✅ MathJax 렌더링 업데이트 (Vue 데이터 변경 시 실행)
export const updateMathJax = () => {
  nextTick(() => {
    if (window.MathJax && window.MathJax.typesetPromise) {
      console.log("📌 MathJax 렌더링 업데이트");
      window.MathJax.typesetPromise().catch((err) => console.error("📌 MathJax 오류:", err));
    }
  });
};

export const renderMathJax = (latex) => {
  if (!latex) return "";

  // ✅ 백슬래시(`\`)가 사라지지 않도록 유지
  latex = latex.replace(/\\/g, "\\\\");

  // ✅ 줄 바꿈 제거 (수식이 깨지는 현상 방지)
  latex = latex.trim().replace(/\n/g, " ");

  // ✅ `\left`, `\right` 강제 변환 (잘못된 변환 방지)
  latex = latex.replace(/\\left/g, "").replace(/\\right/g, "");

  // ✅ `\frac`, `\theta`, `\quad` 등의 수식 문제 해결
  latex = latex.replace(/\\frac/g, "\\frac ")
               .replace(/\\theta/g, "\\theta ")
               .replace(/\\quad/g, " \\quad ");

  // ✅ 블록 수식(`$$ ... $$`)을 `\[ ... \]`로 변환
  if (latex.startsWith("$$") && latex.endsWith("$$")) {
    return `\\[${latex.slice(2, -2).trim()}\\]`;
  }

  // ✅ 인라인 수식(`$ ... $`)을 `\(...\)`로 변환
  return latex.replace(/\$\$(.*?)\$\$/g, "\\[$1\\]").replace(/\$(.*?)\$/g, "\\($1\\)");
};


