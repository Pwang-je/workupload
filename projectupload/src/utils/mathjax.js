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

// ✅ JSON의 `$$`를 MathJax가 인식할 수 있도록 변환하는 함수
export const renderMathJax = (latex) => {
  if (!latex) return "";

  // ✅ 백슬래시(`\`)가 사라지지 않도록 유지
  latex = latex.replace(/\\/g, "\\\\");

  // ✅ 줄 바꿈 제거 (수식이 깨지는 현상 방지)
  latex = latex.trim().replace(/\n/g, " ");

  // ✅ `\left`와 `\right`가 올바르게 변환되도록 처리
  latex = latex.replace(/\\left/g, "\\left ").replace(/\\right/g, "\\right ");

  // ✅ 블록 수식(`$$ ... $$`)을 `\[ ... \]`로 변환
  if (latex.startsWith("$$") && latex.endsWith("$$")) {
    return `\\[${latex.slice(2, -2).trim()}\\]`;
  }

  // ✅ 인라인 수식(`$ ... $`)을 `\(...\)`로 변환
  return latex.replace(/\$\$(.*?)\$\$/g, "\\[$1\\]").replace(/\$(.*?)\$/g, "\\($1\\)");
};

