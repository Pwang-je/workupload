export const clcls2 = {
  subject: "calculus2",
  questions: {
    공식: [
      {
        question: "함수 형태 암기",
        example: [
          "(1) $$\\lim_{x \\to \\infty} x^{\\frac{1}{x}} =$$",
          "(2) $$\\lim_{x \\to 0^+} x^{\\frac{1}{x}} =$$",
          "(3) $$\\lim_{x \\to \\infty} \\left(1 + \\frac{1}{x}\\right)^x =$$",
          "(4) $$\\lim_{x \\to \\infty} f(x) = 0 \\text{일 때, } \\lim_{x \\to \\infty} \\left(1 + f(x)\\right)^{\\frac{1}{f(x)}} =$$",
          "(5) $$\\lim_{x \\to \\infty} \\left(1 \\pm \\frac{c}{ax \\pm b}\\right)^{\\pm dx \\pm e} =$$",
          "(6) $$\\lim_{x \\to 0} \\left(e^{ax} + \\sin bx\\right)^{\\frac{1}{x}} =$$",
          "(7) $$a < b < c \\text{일 때, } \\lim_{n \\to \\infty} (a^n + b^n + c^n)^{\\frac{1}{n}} =$$",
        ],
        answer:
          "(1) $$1$$, (2) $$0$$, (3) $$e$$, (4) $$e$$, (5) $$ e^{\\pm \\frac{c}{a} \\times \\pm {d}} $$, (6) $$e^{a+b}$$, (7) $$c$$",
      },
      {
        question: "매클로린 급수 공식",
        example: [
          "(1) $$e^x =$$",
          "(2) $$\\sin x =$$",
          "(3) $$\\cos x =$$",
          "(4) $$\\tan x =$$",
          "(5) $$\\tan^{-1} x =$$",
          "(6) $$\\sin^{-1} x =$$",
          "(7) $$\\ln(1 + x) =$$",
          "(8) $$\\ln(1 - x) =$$",
          "(9) $$-\\ln(1 - x) =$$",
          "(10) $$(1 + x)^p =$$",
        ],
        answer: [
          "(1) $$ 1+x+ \\frac{x^2}{2!} + \\frac{x^3}{3!} + \\frac{x^4}{4!} + \\cdots = \\sum_{n=0}^{\\infty} \\frac{x^{n}}{n!} $$",
          "(2) $$ x - \\frac{x^3}{3!} +  \\frac{x^5}{5!} - \\frac{x^7}{7!} + \\cdots = \\sum_{n=0}^{\\infty} \\frac{(-1)^{n} x^{2n+1}}{(2n+1)!} $$",
          "(3) $$ 1- \\frac{x^2}{2!} + \\frac{x^4}{4!} - \\frac{x^6}{6!} + \\cdots = \\frac{(-1)^{n} x^{2n}}{(2n)!} $$",
          "(4) $$ x+ \\frac{1}{3} x^{3} + \\frac{2}{15} x^{5} + \\cdots $$",
          "(5) $$ x - \\frac{x^3}{3} + \\frac{x^5}{5} - \\frac{x^7}{7} \\cdots = \\frac{(-1)^{n} x^{2n+1}}{(2n+1)} $$",
          "(6) $$ x + \\frac{1}{6} x^{3} + \\frac{3}{40} x^{5} + \\cdots $$",
          "(7) $$x - \\frac{x^2}{2} + \\frac{x^3}{3} - \\frac{x^4}{4} \\cdots = \\frac{(-1)^{n} x^{n}}{n} $$",
          "(8) $$x - \\frac{x^2}{2} - \\frac{x^3}{3} - \\frac{x^4}{4} \\cdots $$",
          "(9) $$x + \\frac{x^2}{2} + \\frac{x^3}{3} + \\frac{x^4}{4} \\cdots = \\frac{x^{n}}{n} $$",
          "(10) $$ 1 + px + \\frac{p(p-1)}{2!} x^{2} + \\frac{p(p-1)(p-2)}{3!} x^{3} + \\cdots$$",
        ],
      },
      {
        question: "다항함수, 지수함수, 로그함수",
        example: [
          "(1) $$\\int x^n \\, dx =$$",
          "(2) $$\\int \\ln x \\, dx =$$",
          "(3) $$\\int x^n \\ln x \\, dx =$$",
          "(4) $$\\int \\frac{1}{x} \\, dx =$$",
          "(5) $$\\int \\frac{1}{x^2} \\, dx =$$",
          "(6) $$\\int e^x \\, dx =$$",
          "(7) $$\\int a^x \\, dx =$$",
          "(8) $$\\int \\frac{f'(x)}{f(x)} \\, dx =$$",
          "(9) $$\\int \\{f(x)\\}^n f'(x) \\, dx =$$",
        ],
        answer: [
          "(1) $$\\frac{1}{n+1} x^{n+1}+C$$)",
          "(2) $$x \\ln x - x + C$$",
          "(3) $$ \\frac{1}{n+1} x^{n+1} lnx - \\frac{1}{(n+1)^2} x^{n+1}+C $$",
          "(4) $$\\ln |x| + C$$",
          "(5) $$-\\frac{1}{x} + C$$",
          "(6) $$e^x + C$$",
          "(7) $$\\frac{a^x}{\\ln a} + C$$",
          "(8) $$\\ln |f(x)| + C$$",
          "(9) $$ \\frac{1}{n+1} {f(x)}^{n+1} \\cdot + C$$",
        ],
      },
      {
        question: "삼각함수",
        example: [
          "(1) $$\\int \\sin x \\, dx =$$",
          "(2) $$\\int \\cos x \\, dx =$$",
          "(3) $$\\int \\tan x \\, dx =$$",
          "(4) $$\\int \\cot x \\, dx =$$",
          "(5) $$\\int \\sec x \\tan x \\, dx =$$",
          "(6) $$\\int \\csc x \\cot x \\, dx =$$",
          "(7) $$\\int \\sec x \\, dx =$$",
          "(8) $$\\int \\csc x \\, dx =$$",
          "(9) $$\\int \\sec^2 x \\, dx =$$",
          "(10) $$\\int \\csc^2 x \\, dx =$$",
          "(11) $$\\int \\sec^3 x \\, dx =$$",
          "(12) $$\\int \\csc^3 x \\, dx =$$",
          "(13) $$\\int \\sin^2 x \\, dx =$$",
          "(14) $$\\int \\cos^2 x \\, dx =$$",
          "(15) $$\\int e^{ax} \\sin bx \\, dx =$$",
          "(16) $$\\int e^{ax} \\cos bx \\, dx =$$",
        ],
        answer: [
          "(1) $$-\\cos x + C$$",
          "(2) $$\\sin x + C$$",
          "(3) $$-\\ln (\\cos x) + C$$",
          "(4) $$\\ln(\\sin x) + C$$",
          "(5) $$\\sec x + C$$",
          "(6) $$- \\csc x + C$$",
          "(7) $$\\ln (\\sec x+ \\tan x) + C$$",
          "(8) $$- \\ln(\\csc x + \\cot x) + C$$",
          "(9) $$\\tan x + C$$",
          "(10) $$-\\cot x + C$$",
          "(11) $$\\frac{1}{2} \\left[ \\ln (\\sec x + \\tan x)+ \\sec x \\tan x \\right] + C$$",
          "(12) $$\\frac{1}{2} \\left[ -\\ln (\\csc x + \\cot x) - \\csc x \\cot x \\right] + C$$",
          "(13) $$\\frac{1}{2} \\left( x - \\frac{1}{2} \\sin 2x \\right) + C$$",
          "(14) $$\\frac{1}{2} \\left( x + \\frac{1}{2} \\sin 2x \\right) + C$$",
          "(15) $$\\frac{e^{ax}}{a^{2}+b^{2}} (a \\sin b x - b \\cos b x) + C$$",
          "(16) $$\\frac{e^{ax}}{a^{2}+b^{2}} (a \\cos b x + b \\sin b x) + C$$",
        ],
      },
      {
        question: "쌍곡선함수",
        example: [
          "(1) $$\\int \\sinh x \\, dx =$$",
          "(2) $$\\int \\cosh x \\, dx =$$",
          "(3) $$\\int \\operatorname{sech^2} x \\, dx =$$",
          "(4) $$\\int \\operatorname{csch^2} x \\, dx =$$",
          "(5) $$\\int \\tanh x \\, dx =$$",
          "(6) $$\\int \\coth x \\, dx =$$",
          "(7) $$\\int \\operatorname{sech x} \\tanh x \\, dx =$$",
          "(8) $$\\int \\operatorname{csch x} \\coth x \\, dx =$$",
        ],
        answer: [
          "(1) $$ \\cosh x + C $$",
          "(2) $$ \\sinh x + C $$",
          "(3) $$ \\tanh x + C $$",
          "(4) $$ -\\coth x + C $$",
          "(5) $$ \\ln (\\cosh x) + C $$",
          "(6) $$ \\ln (\\sinh x) + C $$",
          "(7) $$ - \\operatorname{sech} x + C $$",
          "(8) $$ - \\operatorname{csch} x + C $$",
        ],
      },
      {
        question: "역삼각함수",
        example: [
          "(1) $$\\int \\frac{1}{\\sqrt{1 - x^2}} \\, dx =$$",
          "(2) $$\\int \\frac{-1}{\\sqrt{1 - x^2}} \\, dx =$$",
          "(3) $$\\int \\frac{1}{1 + x^2} \\, dx =$$",
          "(4) $$\\int \\frac{-1}{1 + x^2} \\, dx =$$",
          "(5) $$\\int \\frac{1}{x \\sqrt{x^2 - 1}} \\, dx =$$",
          "(6) $$\\int \\frac{-1}{x \\sqrt{x^2 - 1}} \\, dx =$$",
          "(7) $$\\int \\frac{1}{\\sqrt{a^2 - x^2}} \\, dx =$$",
          "(8) $$\\int \\frac{1}{x^2 + a^2} \\, dx =$$",
          "(9) $$\\int \\frac{1}{a^2 x^2 + b^2} \\, dx =$$",
        ],
        answer: [
          "(1) $$ \\sin^{-1} x + C $$",
          "(2) $$ \\cos^{-1} x + C $$",
          "(3) $$ \\tan^{-1} x + C $$",
          "(4) $$ \\cot^{-1} x+C $$",
          "(5) $$ \\sec^{-1} x+C  $$",
          "(6) $$ \\csc^{-1} x+C  $$",
          "(7) $$ \\sin^{-1} \\left( \\frac{x}{a} \\right) + C $$",
          "(8) $$ \\frac{1}{a} \\tan^{-1} \\left( \\frac{x}{a} \\right) + C $$",
          "(9) $$ \\frac{1}{ab} \\tan^{-1} \\left( \\frac{ax}{b} \\right) + C $$",
        ],
      },
      {
        question: "역쌍곡선함수",
        example: [
          "(1) $$\\int \\frac{1}{\\sqrt{1 + x^2}} \\, dx =$$",
          "(2) $$\\int \\frac{1}{\\sqrt{x^2 - 1}} \\, dx =$$",
          "(3) $$\\int \\frac{1}{1 - x^2} \\, dx =$$",
          "(4) $$\\int \\frac{1}{\\sqrt{x^2 + a^2}} \\, dx =$$",
          "(5) $$\\int \\frac{1}{\\sqrt{x^2 - a^2}} \\, dx =$$",
        ],
        answer: [
          "(1) $$ \\sinh^{-1} x+ C$$",
          "(2) $$ \\cosh^{-1} x + C$$",
          "(3) $$ \\tanh^{-1} x + C$$",
          "(4) $$ \\sinh^{-1} \\left( \\frac{x}{a} \\right) + C$$",
          "(5) $$ \\cosh^{-1} \\left( \\frac{x}{a} \\right) + C$$",
        ],
      },
      {
        question: "삼각치환적분",
        example: [
          "$$\\text{(1) 피적분함수에 } \\sqrt{x^2 + a^2} \\text{ 가 보일 때 : } x = ~~~~~~~~~~~~~~~~~$$, $$dx = ~~~~~~~~~~~~~~~~~$$, $$\\sqrt{x^2 + a^2} =$$",
          "$$\\text{(2) 피적분함수에 } \\sqrt{a^2 - x^2} \\text{ 가 보일 때 : } x = ~~~~~~~~~~~~~~~~~$$, $$dx = ~~~~~~~~~~~~~~~~~$$, $$\\sqrt{a^2 - x^2} =$$",
          "$$\\text{(3) 피적분함수에 } \\sqrt{x^2 - a^2} \\text{ 가 보일 때 : } x = ~~~~~~~~~~~~~~~~~$$, $$dx = ~~~~~~~~~~~~~~~~~$$, $$\\sqrt{x^2 - a^2} =$$",
        ],
        answer: [
          "(1) $$ a \\tan \\theta ,~ a \\sec^2 \\theta d \\theta ,~ a \\sec \\theta $$",
          "(2) $$ a \\sin \\theta ,~ a \\cos \\theta d \\theta ,~ a \\cos \\theta $$",
          "(3) $$ a \\sec \\theta ,~ a \\sec \\theta \\tan \\theta d \\theta ,~ a \\tan \\theta $$",
        ],
      },
      {
        question:
          "$$\\int \\sin^n x dx,~~ \\int \\cos^n x dx,~~ \\int \\tan^n x dx$$ 점화식 형태 암기",
        example: [
          "$$\\int \\sin^n x \\, dx =$$",
          "$$\\int \\cos^n x \\, dx =$$",
          "$$\\int \\tan^n x \\, dx =$$",
        ],
        answer: [
          "$$ - \\frac{1}{n} \\sin^{n-1} x \\cos x + \\frac{n-1}{n} \\int \\sin^{n-2} x dx $$",
          "$$ \\frac{1}{n} \\sin x \\cos^{n-1} x+ \\frac{n-1}{n} \\int \\cos^{n-2} x dx $$",
          "$$ \\frac{1}{n-1} \\tan^{n-1} x - \\int \\tan^{n-2} x dx $$",
        ],
      },
      {
        question: "분모에 삼각함수가 포함된 형태",
        example: [
          "(1) $$\\int \\frac{c}{a + b \\cos x} \\, dx$$, $$\\int \\frac{c}{a + b \\sin x} \\, dx$$, $$\\int \\frac{c}{a \\cos x + b \\sin x} \\, dx \\text{의 형태가 보일 때}$$",
          "$$\\tan \\frac{x}{2} =~~~~~~~$$, $$\\sin x =~~~~~~~$$, $$\\cos x =~~~~~~~$$, $$dx =~~~~~~~~~~~~$$를 대입",
          "(2) $$\\int \\frac{c}{a + b \\cos 2x} \\, dx$$, $$\\int \\frac{c}{a + b \\sin 2x} \\, dx$$, $$\\int \\frac{c}{a + b \\tan x} \\, dx \\text{의 형태가 보일 때}$$",
          "$$\\tan x =~~~~~~~$$, $$\\sin 2x =~~~~~~~$$, $$\\cos 2x =~~~~~~~$$, $$dx =~~~~~~~~~~~~$$를 대입",
        ],
        answer: [
          "(1) $$ t ,~ \\frac{2t}{1+t^{2}} ,~ \\frac{1-t^2}{1+t^2} ,~ \\frac{2}{1+t^2} $$",
          "(2) $$ t ,~ \\frac{2t}{1+t^{2}} ,~ \\frac{1-t^2}{1+t^2} ,~ \\frac{1}{1+t^2} $$",
        ],
      },
      {
        question: "삼각함수의 곱으로 이루어진 형태",
        example: [
          "(1) $$\\int \\sin(ax) \\cdot \\cos(bx) \\, dx =$$",
          "(2) $$\\int \\cos(ax) \\cdot \\cos(bx) \\, dx =$$",
          "(3) $$\\int \\sin(ax) \\cdot \\sin(bx) \\, dx =$$",
        ],
        answer: [
          "(1) $$ \\frac{1}{2} \\int \\sin (a+b)x + \\sin (a-b)x dx $$",
          "(2) $$ \\frac{1}{2} \\int \\cos (a+b)x + \\cos (a-b)x dx $$",
          "(3) $$ -\\frac{1}{2} \\int \\cos (a+b)x - \\cos (a-b)x dx $$",
        ],
      },
      {
        question: "감마 함수 정리",
        example: [
          "(1) $$\\Gamma(n) = \\int_0^{\\infty} x^{n - 1} e^{-x} \\, dx = ~~~~~~~~~~~~~~~~~~~~$$ (단, $$n > 0$$)",
          "(2) $$\\Gamma(n + 1) =$$",
        ],
        answer: ["(1) $$ (n-1)!$$", "(2) $$ n \\Gamma (n) $$"],
      },
      {
        question: "암기해야 하는 이상적분",
        example: [
          "(1) $$\\int_0^{\\infty} e^{-x^2} \\, dx =$$",
          "(2) $$\\int_0^{\\infty} \\frac{e^{-x}}{\\sqrt{x}} \\, dx =$$",
          "(3) $$\\int_0^{\\infty} \\sqrt{x} \\, e^{-x} \\, dx =$$",
          "(4) $$\\int_0^{\\infty} x^2 e^{-x^2} \\, dx =$$",
          "(5) $$\\int_0^1 (\\ln x)^n \\, dx =$$",
        ],
        answer: [
          "(1) $$ \\frac{\\sqrt{\\pi}}{2} $$",
          "(2) $$ \\sqrt{\\pi} $$",
          "(3) $$ \\frac{\\sqrt{\\pi}}{2} $$",
          "(4) $$ \\frac{\\sqrt{\\pi}}{4} $$",
          "(5) $$ (-1)^{n} n! $$",
        ],
      },
      {
        question: "수업에 알려준 공식들",
        example: [
          "(1) $$ \\tan^{2}x = $$",
          "(2) $$ \\tan^{3}x = $$",
          "(3) $$ \\tan^{4}x = $$",
          "(4) $$ \\int_{0}^{1} \\frac{2t^{2}}{(t^{2}+1)^{2}} = $$",
          "(5) $$ \\int_{0}^{\\infty} \\frac{\\ln x}{x^{2}+1} dx = $$",
          "(6) $$ \\text{유리함수 적분 1.} \\int \\frac{x+a}{(x+p)(x+q)} dx = ~~~~~~~~~~~~~~~~~~~~ = ~~~~~~~~~~~~~~~~~~~~ $$",
          "(7) $$ \\text{유리함수 적분 2.} \\int \\frac{ax^{2}+bx+c}{(x+p)(x+q)^{2}} dx = ~~~~~~~~~~~~~~~~~~~~ = ~~~~~~~~~~~~~~~~~~~~ $$",
          "(8) $$ \\text{유리함수 적분 3.} \\frac{ax^{2}+bx+c}{(x+p)(x^{2}+q)} dx = ~~~~~~~~~~~~~~~~~~~~ = ~~~~~~~~~~~~~~~~~~~~ $$",
          "(9) $$ \\text{유리함수 적분 4.} \\int \\frac{a}{(x^{2}+p)(x^{2}+q)} = ~~~~~~~~~~~~~~~~~~~~ = ~~~~~~~~~~~~~~~~~~~~ $$",
          "(10) $$ \\text{점화식 4, 5, 6번 추가} \\int_{0}^{\\frac{\\pi}{4}} \\tan^{n}xdx+ \\int_{0}^{\\frac{\\pi}{4}} \\tan^{n+2}x dx = $$",
          "(11) $$ \\text{점화식 4, 5, 6번 추가} \\int_{\\frac{\\pi}{4}}^{\\frac{\\pi}{2}} \\cot^{n} x dx + \\int_{\\frac{\\pi}{4}}^{\\frac{\\pi}{2}} \\cot^{n+2} x dx = $$",
          "(12) $$ \\text{점화식 4, 5, 6번 추가} \\int_{0}^{\\frac{\\pi}{2}} \\frac{\\sin^{n}x}{\\sin^{n}x+\\cos^{n}x} dx = $$",
          "(13) $$ \\text{자주나오는 적분공식 1.} \\int_{0}^{1} \\frac{1}{(x+1)(x^{2}+1)} = $$",
          "(14) $$ \\text{자주나오는 적분공식 2.} \\int_{0}^{1} \\frac{1}{1+x^{2}} = $$",
          "(15) $$ \\text{자주나오는 적분공식 3.} \\int_{1}^{0} \\frac{1}{1+x^{2}} = $$",
          "(16) $$ \\text{자주나오는 적분공식 4.} \\int_{0}^{\\infty} \\frac{1}{1+x^{2}} = $$",
        ],
        answer: [
          "(1)$$\\tan x - x + C$$",
          "(2)$$\\frac{1}{2} \\tan^{2}x + \\ln \\cos x + C$$",
          "(3)$$\\frac{1}{3} \\tan^{3}x - \\frac{1}{2} \\tan^{2}x - \\ln \\cos x + C$$",
          "(4)$$\\frac{\\pi}{4} - \\frac{1}{2}$$",
          "(5)$$0$$",
          "(6)$$\\int \\frac{A}{x+p} + \\frac{B}{x+q} \\, dx = A \\ln(x+p) + B \\ln(x+q) + C$$",
          "(7)$$\\int \\frac{A}{x+p} + \\frac{B}{x+q} + \\frac{C}{(x+q)^2} \\, dx = A \\ln(x+p) + B \\ln(x+q) - \\frac{C}{x+q} + C$$",
          "(8)$$\\int \\frac{A}{x+p} + \\frac{bx+C}{x^2+q} \\, dx = A(x+p) + \\frac{B}{2} \\ln(x^2+q) + \\frac{C}{\\sqrt{q}} \\tan^{-1} \\left( \\frac{x}{\\sqrt{q}} \\right) + C$$",
          "(9)$$\\frac{a}{q-p} \\int \\left( \\frac{1}{x^2+p} - \\frac{1}{x^2+q} \\right) dx = \\frac{a}{q-p} \\left( \\frac{1}{\\sqrt{p}} \\tan^{-1} \\left( \\frac{x}{\\sqrt{p}} \\right) - \\frac{1}{\\sqrt{q}} \\tan^{-1} \\left( \\frac{x}{\\sqrt{q}} \\right) \\right) + C$$",
          "(10)$$\\frac{1}{n+1}$$",
          "(11)$$\\frac{1}{n+1}$$",
          "(12)$$\\frac{\\pi}{4}$$",
          "(13)$$\\frac{1}{4} \\ln 2 + \\frac{\\pi}{8}$$",
          "(14)$$\\frac{\\pi}{4}$$",
          "(15)$$\\frac{\\pi}{4}$$",
          "(16)$$\\frac{\\pi}{2}$$"
          ],
      },
    ],
    6: [
      {
        question:
          "다음 극한값을 계산하시오. 1. $$\\lim_{{x \\to 0}} \\sin \\frac{1}{x}$$",
        choices: [],
        answer: "$$0$$",
      },
      {
        question:
          "다음 극한값을 계산하시오. 2. $$\\lim_{{x \\to 0^+}} \\tan^{-1} \\frac{1}{x}$$",
        choices: [],
        answer: "$$\\frac{\\pi}{2}$$",
      },
      {
        question:
          "다음 극한값을 계산하시오. 3. $$\\lim_{{x \\to 0}} x e^{-x}$$",
        choices: [],
        answer: "$$0$$",
      },
      {
        question:
          "다음 극한값을 계산하시오. 4. $$\\lim_{{x \\to 0^+}} \\frac{x}{\\ln x}$$",
        choices: [],
        answer: "$$0$$",
      },
      {
        question:
          "다음 극한값을 계산하시오. 5. $$\\lim_{{x \\to 0}} \\frac{\\cosh x}{x}$$",
        choices: [],
        answer: "$$\\infty$$",
      },
      {
        question:
          "다음 극한값을 계산하시오. 6. $$\\lim_{{x \\to 0}} \\left( 1 + \\frac{\\cos(\\cos x)}{x} \\right)$$",
        choices: [],
        answer: "$$\\infty$$",
      },
      {
        question:
          "다음 극한값을 계산하시오. 7. $$\\lim_{{x \\to 0}} x^4 \\cos \\frac{2}{x}$$",
        choices: [],
        answer: "$$0$$",
      },
      {
        question:
          "다음 극한값을 계산하시오. 8. $$\\lim_{{n \\to \\infty}} \\frac{\\cos(n\\pi)}{n}$$",
        choices: [],
        answer: "$$0$$",
      },
      {
        question:
          "다음 극한값을 계산하시오. 9. $$\\lim_{{x \\to 0}} \\frac{\\sin^{-1} x + \\cos^{-1} x}{x}$$",
        choices: [],
        answer: "$$\\infty$$",
      },
      {
        question:
          "다음 극한값을 계산하시오. 10. $$\\lim_{{x \\to 3}} \\frac{2x+1}{x^2 - x - 6}$$",
        choices: [],
        answer: "$$\\infty$$",
      },
    ],

    9: [
      {
        question:
          "다음 극한값을 계산하시오. 11. $$\\lim_{{x \\to \\infty}} \\frac{x+1}{x+2}$$",
        choices: [],
        answer: "$$1$$",
      },
      {
        question:
          "다음 극한값을 계산하시오. 12. $$\\lim_{{x \\to \\infty}} \\frac{x+1}{x^2 + x + 1}$$",
        choices: [],
        answer: "$$0$$",
      },
      {
        question:
          "다음 극한값을 계산하시오. 13. $$\\lim_{{x \\to \\infty}} \\frac{x^2 + 1}{x - 4}$$",
        choices: [],
        answer: "$$\\infty$$",
      },
      {
        question:
          "다음 극한값을 계산하시오. 14. $$\\lim_{{x \\to \\infty}} \\frac{4x^2 + x + 1}{x^2 - 3x}$$",
        choices: [],
        answer: "$$4$$",
      },
      {
        question:
          "다음 극한값을 계산하시오. 15. $$\\lim_{{x \\to 0}} \\frac{\\sin x}{x}$$",
        choices: [],
        answer: "$$1$$",
      },
      {
        question:
          "다음 극한값을 계산하시오. 16. $$\\lim_{{x \\to 0}} \\frac{\\sin x - \\tan x}{x^3}$$",
        choices: [],
        answer: "$$-\\frac{1}{2}$$",
      },
      {
        question:
          "다음 극한값을 계산하시오. 17. $$\\lim_{{x \\to 0}} \\frac{\\sin^{-1} x}{x^2}$$",
        choices: [],
        answer: "$$\\infty$$",
      },
      {
        question:
          "다음 극한값을 계산하시오. 18. $$\\lim_{{x \\to 0}} \\frac{e^x - \\cos x - x}{x}$$",
        choices: [],
        answer: "$$0$$",
      },
      {
        question:
          "다음 극한값을 계산하시오. 19. $$\\lim_{{x \\to \\infty}} \\frac{e^x}{x^{2020}}$$",
        choices: [],
        answer: "$$\\infty$$",
      },
      {
        question:
          "다음 극한값을 계산하시오. 20. $$\\lim_{{n \\to \\infty}} \\frac{\\ln n^5}{n}$$",
        choices: [],
        answer: "$$0$$",
      },
      {
        question:
          "다음 극한값을 계산하시오. 21. $$\\lim_{{x \\to \\infty}} \\frac{e^x + 2x^5 + 3x + 4}{x^{2020} + 2021}$$",
        choices: [],
        answer: "$$\\infty$$",
      },
      {
        question:
          "다음 극한값을 계산하시오. 22. $$\\lim_{{x \\to \\infty}} \\frac{2\\sin x + \\ln x^3 + x^4 + 5}{3e^x + 4x}$$",
        choices: [],
        answer: "$$0$$",
      },
    ],
    11: [
      {
        question:
          "다음 극한값을 계산하시오. 23. $$\\lim_{{x \\to 1}} \\frac{\\sin(x-1)}{\\sqrt{x}-1}$$",
        choices: [],
        answer: "$$2$$",
      },
      {
        question:
          "다음 극한값을 계산하시오. 24. $$\\lim_{{x \\to 0}} \\frac{\\sin x}{\\sqrt{1+x} - \\sqrt{1-x}}$$",
        choices: [],
        answer: "$$1$$",
      },
      {
        question:
          "다음 극한값을 계산하시오. 25. $$\\lim_{{x \\to 1}} \\frac{e^{x - 1} - 1}{\\ln x}$$",
        choices: [],
        answer: "$$1$$",
      },
      {
        question:
          "다음 극한값을 계산하시오. 26. $$\\lim_{{x \\to \\frac{\\pi}{2}}} \\frac{\\ln \\sin x}{1 - \\sin x}$$",
        choices: [],
        answer: "$$-1$$",
      },
      {
        question:
          "다음 극한값을 계산하시오. 27. $$\\lim_{{x \\to 1}} \\log_2 \\left( \\frac{1 - \\sqrt{x}}{1 - x} \\right)$$",
        choices: [],
        answer: "$$-1$$",
      },
      {
        question:
          "다음 극한값을 계산하시오. 28. $$\\lim_{{x \\to \\sqrt{2}}} \\frac{(x^2 + x) \\sin(x - \\sqrt{2})}{x^2 - 2}$$",
        choices: [],
        answer: "$$\\frac{\\sqrt{2} + 1}{2}$$",
      },
      {
        question:
          "다음 극한값을 계산하시오. 29. $$\\lim_{{x \\to 1}} \\frac{x^{2019} + 2x - 3}{x - 1}$$",
        choices: [],
        answer: "$$2021$$",
      },
      {
        question:
          "다음 극한값을 계산하시오. 30. $$\\lim_{{x \\to \\frac{1}{2}}} \\frac{4x^2 - 1}{2x - 1}$$",
        choices: [],
        answer: "$$2$$",
      },
      {
        question:
          "다음 극한값을 계산하시오. 31. $$\\lim_{{x \\to 0}} \\sin x \\cot 3x$$",
        choices: [],
        answer: "$$\\frac{1}{3}$$",
      },
      {
        question:
          "다음 극한값을 계산하시오. 32. $$\\lim_{{x \\to \\frac{\\pi}{2}}} (\\sec x - \\tan x)$$",
        choices: [],
        answer: "$$0$$",
      },
      {
        question:
          "다음 극한값을 계산하시오. 33. $$\\lim_{{x \\to 1^+}} \\left( \\frac{x}{x - 1} - \\frac{1}{\\ln x} \\right)$$",
        choices: [],
        answer: "$$\\frac{1}{2}$$",
      },
      {
        question:
          "다음 극한값을 계산하시오. 34. $$\\lim_{{x \\to -2}} \\left( \\frac{1}{x^2 + x - 2} - \\frac{1}{2x^2 + 5x + 2} \\right)$$",
        choices: [],
        answer: "$$\\frac{1}{9}$$",
      },
    ],

    12: [
      {
        question:
          "다음 극한값을 계산하시오. 35. $$\\lim_{{x \\to 0^+}} \\frac{e^{-\\frac{1}{x}}}{x}$$",
        choices: [],
        answer: "$$0$$",
      },
      {
        question:
          "다음 극한값을 계산하시오. 36. $$\\lim_{{x \\to \\infty}} \\left( x e^{1/x} - x \\right)$$",
        choices: [],
        answer: "$$1$$",
      },
      {
        question:
          "다음 극한값을 계산하시오. 37. $$\\lim_{{x \\to \\infty}} \\left( \\sqrt{x^2 + x} - x \\right)$$",
        choices: [],
        answer: "$$\\frac{1}{2}$$",
      },
      {
        question:
          "다음 극한값을 계산하시오. 38. $$\\lim_{{x \\to \\infty}} \\left( \\sqrt{4x^2 + x} - 2x \\right)$$",
        choices: [],
        answer: "$$\\frac{1}{4}$$",
      },
      {
        question:
          "다음 극한값을 계산하시오. 39. $$\\lim_{{x \\to 0}} x \\ln x$$",
        choices: [],
        answer: "$$0$$",
      },
      {
        question:
          "다음 극한값을 계산하시오. 40. $$\\lim_{{x \\to \\infty}} x^x$$",
        choices: [],
        answer: "$$\\infty$$",
      },
      {
        question: "다음 극한값을 계산하시오. 41. $$\\lim_{{x \\to 0}} x^x$$",
        choices: [],
        answer: "$$1$$",
      },
      {
        question:
          "다음 극한값을 계산하시오. 42. $$\\lim_{{x \\to 0^+}} x^{\\frac{1}{x}}$$",
        choices: [],
        answer: "$$0$$",
      },
      {
        question:
          "다음 극한값을 계산하시오. 43. $$\\lim_{{x \\to \\infty}} x^{\\frac{1}{x}}$$",
        choices: [],
        answer: "$$1$$",
      },
      {
        question:
          "다음 극한값을 계산하시오. 44. $$\\lim_{{x \\to \\infty}} \\left( \\cos \\frac{1}{x} \\right)^x$$",
        choices: [],
        answer: "$$1$$",
      },
      {
        question:
          "다음 극한값을 계산하시오. 45. $$\\lim_{{x \\to 0}} \\left( \\sin \\frac{1}{x} \\right)^x$$",
        choices: [],
        answer: "$$1$$",
      },
    ],
    13: [
      {
        question:
          "다음 극한값을 계산하시오. 46. $$\\lim_{{n \\to \\infty}} \\left( 1 - \\frac{3}{2n - 5} \\right)^n$$",
        choices: [],
        answer: "$$ e^-\\frac{3}{2} $$",
      },
      {
        question:
          "다음 극한값을 계산하시오. 47. $$\\lim_{{n \\to \\infty}} \\left( \\frac{n - 1}{n} \\right)^{2n + 2020}$$",
        choices: [],
        answer: "$$ e^{-2} $$",
      },
      {
        question:
          "다음 극한값을 계산하시오. 48. $$\\lim_{{p \\to \\infty}} \\frac{p^{p+1}}{(p+1)^{p+1}}$$",
        choices: [],
        answer: "$$e^-1 $$",
      },
      {
        question:
          "다음 극한값을 계산하시오. 49. $$\\lim_{{x \\to \\infty}} \\left( \\frac{x + \\ln 3}{x - \\ln 3} \\right)^x$$",
        choices: [],
        answer: "$$9$$",
      },
      {
        question:
          "다음 극한값을 계산하시오. 50. $$\\lim_{{x \\to 0}} (1 + \\sin x)^{\\frac{1}{x}}$$",
        choices: [],
        answer: "$$e$$",
      },
      {
        question:
          "다음 극한값을 계산하시오. 51. $$\\lim_{{x \\to 0}} (e^x + \\sin 2x)^{\\frac{1}{x}}$$",
        choices: [],
        answer: "$$e^3$$",
      },
      {
        question:
          "다음 극한값을 계산하시오. 52. $$\\lim_{{x \\to 0}} (1 + \\sin 4x)^{\\cot x}$$",
        choices: [],
        answer: "$$e^4$$",
      },
      {
        question:
          "다음 극한값을 계산하시오. 53. $$\\lim_{{x \\to 0}} (\\cos x + 3x)^{\\frac{2}{x}}$$",
        choices: [],
        answer: "$$e^6$$",
      },
      {
        question:
          "다음 극한값을 계산하시오. 54. $$\\lim_{{x \\to \\infty}} \\left( \\sin \\frac{2}{x} + \\cos \\frac{3}{x} \\right)^x$$",
        choices: [],
        answer: "$$e^2$$",
      },
      {
        question:
          "다음 극한값을 계산하시오. 55. $$\\lim_{{n \\to \\infty}} (2^n + 3^n + 4^n)^{\\frac{1}{n}}$$",
        choices: [],
        answer: "$$4$$",
      },
      {
        question:
          "다음 극한값을 계산하시오. 56. $$\\lim_{{n \\to \\infty}} \\frac{n 2^n}{3^n}$$",
        choices: [],
        answer: "$$0$$",
      },
      {
        question:
          "$$ 0<a<b $$이ㄴ 상수 $$a, b$$에 대하여 $$\\lim_{{x \\to \\infty}} (a^{n} + b^{n})^{\\frac{1}{n}}$$의 값은?",
        choices: [],
        answer: "$$b$$",
      },
    ],

    16: [
      {
        question:
          "$$\\lim_{{x \\to 2}} \\frac{x^2 - ax - 2}{x - 2}$$ 가 극한값이 존재한다면 그 극한값은 얼마인가?",
        choices: [],
        answer: "$$3$$",
      },
      {
        question:
          "$$\\lim_{{x \\to 1}} \\frac{x^2 + ax + b}{x - 1} = 3$$일 때 $$2a + b$$의 값은?",
        choices: [],
        answer: "$$0$$",
      },
      {
        question:
          "$$\\lim_{{x \\to 0}} \\frac{1}{3 + 2^ \\frac{1}{x}}$$ 의 극한값은?",
        choices: [],
        answer: "존재X",
      },
      {
        question: "$$\\lim_{{x \\to 2}} 3^ \\frac{1}{x-2}$$ 의 극한값은?",
        choices: [],
        answer: "존재X",
      },
      {
        question:
          "$$\\lim_{{x \\to 1}} \\frac{x^2 - 1}{|x - 1|}$$ 의 극한값은?",
        choices: [],
        answer: "존재X",
      },
      {
        question:
          "$$\\lim_{{x \\to 5}} \\left\\lfloor \\frac{x}{5} \\right\\rfloor$$ 의 극한값은?",
        choices: [],
        answer: "존재X",
      },
      {
        question:
          "$$\\lim_{x \\to 3} \\left( \\left\\lfloor \\frac{x}{2} \\right\\rfloor - \\frac{\\lfloor x \\rfloor}{2} \\right)$$의 극한값은?",
        choices: [],
        answer: "존재X",
      },
      {
        question:
          "$$\\lim_{{x \\to \\infty}} \\frac{\\lfloor x^2 \\rfloor - x^2}{\\sqrt{x}}$$ 의 극한값은?",
        choices: [],
        answer: "$$0$$",
      },
      {
        question:
          "$$\\lim_{{x \\to 0^+}} \\frac{x}{2} \\left\\lfloor \\frac{3}{x} \\right\\rfloor$$ 의 극한값은?",
        choices: [],
        answer: "$$\\frac{3}{2}$$",
      },
      {
        question:
          "극한 $$\\lim_{{x \\to -2^+}} f(x)$$이 존재하고 $$\\frac{x^2 + x - 1}{x + 3} \\leq \\frac{f(x)}{x^2} \\leq \\frac{x^2 + 2x + 1}{x + 3}$$이 성립할 때 $$\\lim_{{x \\to -2^+}} f(x)$$의 값은?",
        choices: ["1", "2", "3", "4", "5"],
        answer: "④",
      },
    ],
    17: [
      {
        question:
          "$$f(x) = \\begin{cases} x \\sin \\frac{1}{x}, & x \\neq 0 \\\\ 0, & x = 0 \\end{cases}$$ 일 때, $$x = 0$$에서 연속성과 미분가능성은?",
        choices: [],
        answer: "연속, 미분불가능",
      },
      {
        question:
          "$$f(x) = \\begin{cases} \\sqrt{x} \\tan^{-1} \\frac{1}{x}, & x \\neq 0 \\\\ 0, & x = 0 \\end{cases}$$ 일 때, $$x = 0$$에서 연속성과 미분가능성은?",
        choices: [],
        answer: "연속, 미분불가능",
      },
      {
        question:
          "$$f(x) = |x|^{\\alpha}$$ 일 때, $$f(x)$$가 원점에서 미분가능하게 되는 $$\\alpha$$의 범위는?",
        choices: [],
        answer: "$$\\alpha > 1$$",
      },
      {
        question:
          "함수 $$f(x)$$에 대하여 $$f(x+y) = f(x) + f(y) + xy$$가 성립하고, $$f'(0) = 5$$ 일 때, $$f'(3)$$을 구하시오.",
        choices: [],
        answer: "$$8$$",
      },
      {
        question:
          "$$f(x)$$가 모든 $$x, y$$에 대해 $$f(x+y) = 4f(x)f(y)$$ 가 성립하고, $$f(2) = \\frac{1}{2}, f'(0) = 1$$ 일 때, $$f'(2)$$를 구하면?",
        choices: [],
        answer: "$$2$$",
      },
      {
        question:
          "$$-\\infty < a < b < \\infty$$ 일 때, 폐구간 $$[a, b]$$에서 정의된 함수 $$y = f(x)$$에 대하여 다음 중 옳은 것은?",
        choices: [
          "연속이면 미분가능하다",
          "적분가능하면 연속이다",
          "적분가능하면 미분가능하다",
          "연속이면 평등연속이다",
        ],
        answer: "④, $$~$$ 연속이면 평등연속이다.",
      },
    ],
    20: [
      {
        question: "음이 아닌 두 수의 곱이 $$25$$일 때, 두 수의 합의 최소값은?",
        choices: [],
        answer: "$$10$$",
      },
      {
        question: "$$x > 0$$일 때, $$x + \\frac{1}{x}$$ 의 최소값을 구하여라.",
        choices: [],
        answer: "$$2$$",
      },
      {
        question:
          "실수 $$x, y, z$$가 $$4x + y + 3z = 12$$를 만족할 때, $$4x^2 + y^2 + 9z^2$$ 의 최소값을 구하면?",
        choices: [],
        answer: "$$24$$",
      },
      {
        question:
          "구 $$x^2 + y^2 + z^2 = 19$$ 위에서 함수 $$f(x, y, z) = 2x + 3y + 5z$$ 의 최댓값은?",
        choices: [
          "$$19\\sqrt{3}$$",
          "$$19\\sqrt{2}$$",
          "$$38\\sqrt{3}$$",
          "$$38\\sqrt{2}$$",
        ],
        answer: "②",
      },
      {
        question:
          "방정식 $$2x^7 + 7x^3 + 4x - 15 = 0$$ 의 실근이 속하는 구간은?",
        choices: ["$$[-2, -1]$$", "$$[-1, 0]$$", "$$[0, 1]$$", "$$[1, 2]$$"],
        answer: "④",
      },
      {
        question:
          "$$f(0) = -3$$이고 모든 $$x$$값에 대해 $$f'(x) \\leq 5$$라고 가정하자. $$f(2)$$의 최댓값은?",
        choices: [],
        answer: "$$7$$",
      },
      {
        question:
          "함수 $$f(x) = \\sqrt{1 - x}$$ 가 $$[0,1]$$ 구간에 대하여 평균값 정리를 만족하는 점을 구하시오.",
        choices: [
          "$$\\frac{3}{4}$$",
          "$$\\frac{4}{3}$$",
          "$$\\frac{3}{2}$$",
          "$$\\frac{2}{3}$$",
        ],
        answer: "①",
      },
    ],
    21: [
      {
        question:
          "극한 $$\\lim_{{\\theta \\to 0}} \\frac{\\sin\\theta}{\\theta + \\tan\\theta}$$ 의 값은?",
        choices: [
          "$$1$$",
          "$$\\frac{1}{2}$$",
          "$$\\frac{1}{3}$$",
          "$$\\frac{1}{4}$$",
        ],
        answer: "②",
      },
      {
        question:
          "극한 $$\\lim_{{x \\to 0}} \\frac{\\sin x}{\\ln(x+1)}$$ 의 값은?",
        choices: ["$$1$$", "$$e$$", "$$e^2$$", "$$e^3$$"],
        answer: "①",
      },
      {
        question:
          "극한 $$\\lim_{{x \\to 0}} \\frac{1}{x} \\ln(2x^3 - x^2 - 2x + 1)$$ 의 값은?",
        choices: ["$$-2$$", "$$-1$$", "$$1$$", "$$2$$"],
        answer: "①",
      },
      {
        question:
          "극한 $$\\lim_{{x \\to 0}} \\left( \\frac{1}{x^2} - \\frac{\\tan x}{x^3} \\right)$$ 의 값은?",
        choices: [
          "$$-\\frac{1}{3}$$",
          "$$-\\frac{2}{3}$$",
          "$$\\frac{1}{3}$$",
          "$$\\frac{2}{3}$$",
        ],
        answer: "①",
      },
    ],
    22: [
      {
        question:
          "극한 $$\\lim_{{x \\to 0}} \\frac{x \\sin(x^2)}{\\tan^3 x}$$ 을 계산하면?",
        choices: [
          "$$0$$",
          "$$1$$",
          "$$\\frac{1}{2}$$",
          "$$\\frac{1}{3}$$",
          "$$\\frac{1}{6}$$",
        ],
        answer: "②",
      },
      {
        question:
          "구간 $$\\left(-\\frac{\\pi}{2}, \\frac{\\pi}{2}\\right)$$에서 정의된 연속함수 $$f(x)$$가 모든 $$x$$에 대하여 $$(\\sin 2x) f(x) = e^{3x} - 1$$을 만족시킬 때 $$f(0)$$의 값은?",
        choices: [
          "$$\\frac{3}{2}$$",
          "$$\\frac{1}{2}$$",
          "$$-\\frac{1}{2}$$",
          "$$-\\frac{3}{2}$$",
        ],
        answer: "①",
      },
      {
        question:
          "함수 $$f(x)$$가 구간 $$\\left[ -\\frac{1}{2}, \\frac{1}{2} \\right]$$ 에서 연속이고 $$\\arcsin x = 2x f(x)$$를 만족할 때, $$f(0)$$을 구하시오.",
        choices: ["$$-\\frac{1}{2}$$", "$$0$$", "$$\\frac{1}{2}$$", "$$1$$"],
        answer: "③",
      },
    ],
    23: [
      {
        question:
          "극한 $$\\lim_{{x \\to 0}} (\\cosh x)^\\frac{1}{x}$$ 의 값은?",
        choices: ["$$0$$", "$$1$$", "$$2$$", "$$e$$"],
        answer: "②",
      },
      {
        question:
          "극한 $$\\lim_{x \\to \\infty} x^{\\frac{1}{3 + \\ln x}}$$의 값은?",
        choices: ["$$e^{-2}$$", "$$e^{-1}$$", "$$1$$", "$$e$$", "$$e^2$$"],
        answer: "④",
      },
      {
        question:
          "극한 $$\\lim_{{n \\to \\infty}} n (\\sqrt[n]{3} - 1)$$ 의 값은?",
        choices: ["$$1$$", "$$\\sqrt{3}$$", "$$3$$", "$$\\ln 3$$"],
        answer: "④",
      },
      {
        question:
          "극한 $$\\lim_{x \\to \\infty} \\left( x e^{\\frac{1}{x}} - x \\right)$$의 값은?",
        choices: ["$$-\\infty$$", "$$0$$", "$$1$$", "$$e$$", "$$\\infty$$"],
        answer: "③",
      },
    ],
    24: [
      {
        question: "극한 $$\\lim_{{x \\to 0^+}} x(2 - 3 \\ln x)$$ 의 값은?",
        choices: ["$$-\\infty$$", "$$-3$$", "$$0$$", "$$2$$", "$$+\\infty$$"],
        answer: "③",
      },
      {
        question:
          "극한 $$\\lim_{{x \\to 0}} x^2 \\left( 1 + \\sin^2 \\frac{2\\pi}{x} \\right)$$ 의 값은?",
        choices: ["$$2\\pi$$", "$$1$$", "$$0$$", "$$2$$"],
        answer: "③",
      },
      {
        question:
          "극한 $$\\lim_{{x \\to e^e}} \\frac{\\ln(\\ln(\\ln x))}{e(x - e^e)}$$ 의 값은?",
        choices: [
          "$$e^{-e+2}$$",
          "$$e^{-e+1}$$",
          "$$e^{-e-1}$$",
          "$$e^{-e-2}$$",
        ],
        answer: "④",
      },
      {
        question:
          "극한 $$\\lim_{{x \\to \\infty}} \\frac{\\tan^{-1} x - \\frac{\\pi}{2}}{\\frac{1}{x}}$$ 의 값은?",
        choices: ["$$-2$$", "$$-1$$", "$$0$$", "$$1$$", "$$2$$"],
        answer: "②",
      },
    ],
    25: [
      {
        question:
          "극한 $$\\lim_{{x \\to \\infty}} \\left( \\tanh x + \\frac{\\cosh x}{1 + \\sinh^2 x} \\right)$$ 의 값은?",
        choices: [
          "$$0$$",
          "$$\\frac{1}{2}$$",
          "$$1$$",
          "$$\\frac{3}{2}$$",
          "$$2$$",
        ],
        answer: "③",
      },
      {
        question:
          "극한 $$\\lim_{{x \\to 0}} (1 - \\sin x)^{\\frac{1}{x}}$$ 을 구하시오.",
        choices: ["$$0$$", "$$1$$", "$$e$$", "$$\\frac{1}{e}$$"],
        answer: "④",
      },
      {
        question:
          "극한 $$\\lim_{{x \\to 0}} (1 - \\tan x)^{1/x}$$ 의 값을 구하시오.",
        choices: [
          "$$-e$$",
          "$$-\\frac{1}{e}$$",
          "$$1$$",
          "$$e$$",
          "$$\\frac{1}{e}$$",
        ],
        answer: "⑤",
      },
      {
        question:
          "극한 $$\\lim_{{x \\to \\infty}} (x+1)^ \\frac{2}{x}$$ 의 값을 구하면?",
        choices: ["$$1$$", "$$e$$", "$$e^2$$", "$$e^{-2}$$"],
        answer: "①",
      },
    ],
    26: [
      {
        question:
          "$$f(x) > 0$$이며 $$\\lim_{{x \\to \\infty}} f(x) = 0$$일 때, $$\\lim_{{x \\to -\\infty}} \\left[1 + 2f(x)\\right]^\\frac{1}{3f(x)}$$ 의 값은?",
        choices: ["$$e^2$$", "$$e^\\frac{2}{3}$$", "$$e^3$$", "$$1$$"],
        answer: "②",
      },
      {
        question:
          "극한 $$\\lim_{{n \\to \\infty}} \\sqrt[n]{2^n + 3^n}$$ 의 값은?",
        choices: ["$$1$$", "$$2$$", "$$3$$", "$$4$$", "$$5$$"],
        answer: "③",
      },
      {
        question:
          "상수 $$a, b$$에 대하여 극한 $$\\lim_{{n \\to \\infty}} \\left(1 + \\frac{a}{n} + \\frac{b}{n^2}\\right)^n$$ 의 값은?",
        choices: ["$$e^a$$", "$$e^b$$", "$$e^{a+b}$$", "$$1$$"],
        answer: "①",
      },
    ],
    27: [
      {
        question:
          "극한 $$\\lim_{{x \\to -2}} \\frac{1 - \\sqrt{x + a}}{x + 2} = b$$ 를 만족시키는 상수 $$a, b$$ 에 대하여 $$ab$$의 값은?",
        choices: ["$$-\\frac{3}{2}$$", "$$-1$$", "$$-\\frac{1}{2}$$", "$$1$$"],
        answer: "①",
      },
      {
        question:
          "극한 $$\\lim_{{x \\to 0}} \\left( \\frac{\\sin 2x}{x^3} + a + \\frac{b}{x^2} \\right) = 0$$ 일 때, $$a + b$$의 값을 구하면?",
        choices: [
          "$$-\\frac{4}{3}$$",
          "$$-\\frac{2}{3}$$",
          "$$\\frac{4}{3}$$",
          "$$2$$",
        ],
        answer: "②",
      },
      {
        question:
          "극한 $$\\lim_{{x \\to 0}} \\left( \\frac{\\tan x}{x^2} + \\alpha + \\frac{\\beta}{x} \\right) = 3$$ 을 만족시키는 $$\\alpha, \\beta$$에 대하여 $$\\alpha + \\beta$$의 값은?",
        choices: ["$$0$$", "$$1$$", "$$2$$", "$$3$$", "$$4$$"],
        answer: "③",
      },
    ],
    28: [
      {
        question:
          "$$f(x) = \\begin{cases} e^{-x}, & x < 0 \\\\ \\frac{1}{x + 1}, & 0 \\leq x < 1 \\\\ \\frac{\\sqrt{x} - 1}{x^2 - 1}, & x \\geq 1 \\end{cases}$$ 함수가 불연속인 점을 모두 구하면?",
        choices: [
          " 없다",
          "$$x = 0$$",
          "$$x = 1$$",
          "$$x = 0, x = 1$$",
          "$$x = -1, x = 0, x = 1$$",
        ],
        answer: "③",
      },
      {
        question:
          "함수 $$\\ f(x) = \\begin{cases} \\sin (1/x), & (x < 0일 때) \\\\ x^2, & (0 \\leq x < 1일 때) \\\\ \\cos(x-1), & (x \\geq 1일 때) \\end{cases}$$ 가 불연속인 점은?",
        choices: [
          "$$x = 0$$",
          "$$x = 1$$",
          "$$x = 0과 x = 1$$",
          "$$x = -1$$",
          "없다",
        ],
        answer: "①",
      },
      {
        question:
          "함수 $$\\ f(x) = \\begin{cases} \\frac{x^2 - x - 12}{x^2 - 10x + 24}, & x \\neq 4 \\\\ -\\frac{7}{2}, & x = 4 \\end{cases}$$ 의 불연속점을 모두 찾으면?",
        choices: ["$$4$$", "$$6$$", "$$-6, 4$$", "$$4, 6$$", "불연속점 없음"],
        answer: "②",
      },
    ],
    29: [
      {
        question:
          "다음 함수 $$f(x)$$가 $$x = 0$$에서 연속이라고 한다. $$a$$의 값은? $$f(x) = \\begin{cases} 1 - x \\sin \\frac{1}{e^{4x}}, & x \\neq 0 \\\\ a, & x = 0 \\end{cases}$$",
        choices: ["$$-2$$", "$$-1$$", "$$0$$", "$$1$$", "$$2$$"],
        answer: "④",
      },
      {
        question:
          "다음과 같이 정의된 함수 $$f$$가 연속이기 위한 실수 $$a$$의 값은? $$f(x) = \\begin{cases} (e^x + x)^{\\frac{1}{\\sin^{-1} x}}, & x \\neq 0 \\\\ a, & x = 0 \\end{cases}$$",
        choices: ["$$1$$", "$$e$$", "$$e^{-1}$$", "$$e^2$$"],
        answer: "④",
      },
      {
        question:
          "함수 $$\\ f(x) = \\begin{cases} \\frac{a \\sqrt{x+1} - b}{x-1}, & (x > 1) \\\\ 2x-1, & (x \\leq 1) \\end{cases}$$ 가 $$x = 1$$에서 연속이기 위한 상수 $$a, b$$ 에 대해 $$ab$$의 값을 구하면?",
        choices: ["$$4$$", "$$4\\sqrt{2}$$", "$$8$$", "$$8\\sqrt{2}$$"],
        answer: "④",
      },
    ],
    30: [
      {
        question:
          "$$a \\neq 0$$이고 함수 $$\\ f(x) = \\begin{cases} \\frac{|x|}{x}, & |x| \\geq 1 \\\\ ax^2 + bx + c, & |x| < 1 \\end{cases}$$ 가 실수 전체에서 연속일 때 항상 참인 것은?",
        choices: [
          "$$a + b > 0$$",
          "$$a + b < 0$$",
          "$$ab < 0$$",
          "$$abc < 0$$",
        ],
        answer: "④",
      },
      {
        question:
          "$$f(x) = \\begin{cases} \\frac{\\tan x}{x}, & x \\neq 0 \\\\ 1, & x = 0 \\end{cases}$$ 일 때, $$f'(0)$$ 의 값은?",
        choices: ["$$0$$", "$$\\frac{1}{2}$$", "$$1$$", " 존재하지 않는다."],
        answer: "①",
      },
      {
        question:
          "함수 $$\\ B(x) = \\begin{cases} \\frac{x}{e^x -1}, & x \\neq 0 \\\\ 1, & x = 0 \\end{cases}$$ 의 미분계수 $$B'(0)$$ 의 값은?",
        choices: [
          "$$-\\frac{1}{2}$$",
          "$$-\\frac{1}{6}$$",
          "$$\\frac{1}{6}$$",
          "$$\\frac{1}{2}$$",
        ],
        answer: "①",
      },
    ],
    31: [
      {
        question: "다음에서 $$x = 0$$ 에서 미분 가능한 함수를 모두 고르면?",
        example: [
          "(a) $$f(x) = \\begin{cases} \\sin \\frac{1}{x}, & x \\neq 0 \\\\ 0, & x = 0 \\end{cases}$$<br>(b)$$f(x) = \\begin{cases} x \\sin \\frac{1}{x}, & x \\neq 0 \\\\ 0, & x = 0 \\end{cases}$$<br>(c)$$f(x) = \\begin{cases} x^2 \\sin \\frac{1}{x}, & x \\neq 0 \\\\ 0, & x = 0 \\end{cases}$$",
        ],
        choices: ["(a)", "(b)", "(c)", "(a), (b)", "(b), (c)"],
        answer: "③",
      },
      {
        question:
          "다음 $$f$$에 대하여 $$x = 0$$에서의 연속성과 미분가능성을 옳게 기술한 것을 고르면? $$f(x) = \\begin{cases} x^2, & (x \\geq 0) \\\\ \\sinh(x^2), & (x < 0) \\end{cases}$$",
        choices: [
          " 연속이고 미분가능하다.",
          " 연속이지만 미분가능하지 않다.",
          " 연속은 아니지만 미분가능하다.",
          " 연속도 아니고 미분가능하지도 않다.",
        ],
        answer: "①",
      },
      {
        question:
          "$$f(x) = \\begin{cases} -x^2, & x < 0 \\\\ x^2, & 0 \\leq x < 1 \\\\ 2x - 1, & 1 \\leq x \\end{cases}$$ 에 대하여, 다음 중 옳은 것을 모두 고르면?",
        example: [
          "ㄱ \\( x = 0 \\)에서 연속이다.",
          "ㄴ \\( x = 0 \\)에서 미분가능하다.",
          "ㄷ \\( x = 1 \\)에서 연속이다.",
          "ㄹ \\( x = 1 \\)에서 미분가능하다.",
        ],
        choices: ["ㄱ, ㄷ", "ㄱ, ㄴ, ㄷ", "ㄱ, ㄷ, ㄹ", "ㄱ, ㄴ, ㄷ, ㄹ"],
        answer: "④",
      },
    ],
    32: [
      {
        question: "다음 보기의 함수 중 $$f'(0)$$ 가 존재하는 것의 개수는?",
        example: [
          "$$\\text{(가)}\\ f(x) = (x^2 - 1) \\sin|x|$$",
          "$$\\text{(나)}\\ f(x) = \\begin{cases} 3 \\sin x + x^3 \\cos \\dfrac{1}{x^2}, & x \\ne 0 \\\\ 0, & x = 0 \\end{cases}$$",
          "$$\\text{(다)}\\ f(x) = \\begin{cases} x \\tan^{-1} \\dfrac{1}{x}, & x \\ne 0 \\\\ 0, & x = 0 \\end{cases}$$",
        ],
        choices: ["$$0$$", "$$1$$", "$$2$$", "$$3$$"],
        answer: "②",
      },
      {
        question: "다음 함수 중 $$x = 0$$에서 미분 불가능한 것은?",
        choices: [
          "$$f(x) = |x| \\sin x$$",
          "$$f(x) = |x| \\cos x$$",
          "$$f(x) = |x| \\tan x$$",
          "$$f(x) = x|x|$$",
          "$$f(x) = |x|^3$$",
        ],
        answer: "②",
      },
      {
        question:
          "다음 보기 중 $$x = 0$$ 에서 미분 가능한 함수를 모두 고른 것은?",
        example:
          "(가) $$f(x) = |x| \\sin x$$  (나) $$g(x) = |x| \\cos x$$  (다) $$h(x) = |x| \\tan x$$  (라) $$i(x) = |x| e^x$$",
        choices: ["(가), (나)", "(가), (다)", "(나), (라)", "(가), (다), (라)"],
        answer: "②",
      },
    ],
    33: [
      {
        question:
          "$$f$$ 는 모든 실수 $$x, y$$ 에 대하여 다음을 만족하는 연속함수일 때, $$f'(2)$$ 의 값은?",
        example:
          "(i) $$f(x+y) = \\frac{1}{5} f(x) f(y)$$ <br> (ii) $$f(0) = 5$$ <br> (iii) $$f'(0) = 10$$",
        choices: ["$$f(2)$$", "$$2f(2)$$", "$$5f(2)$$", "$$50f(2)$$"],
        answer: "②",
      },
      {
        question:
          "함수 $$f$$가 $$x = 1$$에서 미분가능하며, 다음 식 $$f(x+y) = f(x) + f(y) + 5xy$$와 $$\\lim_{{h \\to 0}} \\frac{f(h)}{h} = 3$$을 만족한다. 이 때 $$f'(x)$$를 구하면?",
        choices: ["$$5x + 3$$", "$$5x - 3$$", "$$3x + 5$$", "$$3x - 5$$"],
        answer: "①",
      },
      {
        question:
          "$$[x]$$가 실수 $$x$$를 넘지 않는 최대 정수이고 $$f(x) = [x]^2 - x^2$$일 때, $$f'(0.4)$$의 값은?",
        choices: ["$$0$$", "$$-0.8$$", "$$0.8$$", "$$\\infty$$"],
        answer: "②",
      },
      {
        question: "방정식 $$x^5 - 2x^4 - x - 3 = 0$$ 의 근이 존재하는 구간은?",
        choices: ["$$(-1, 0)$$", "$$(0, 1)$$", "$$(1, 2)$$", "$$(2, 3)$$"],
        answer: "④",
      },
    ],
    34: [
      {
        question:
          "$$f : \\mathbb{R} \\to \\mathbb{R}$$ 이 미분가능하고, 구간 $$(2,5)$$에서 부등식 $$1 \\leq f'(x) \\leq 4$$를 만족할 때 $$a = f(5) - f(2)$$의 범위는?",
        choices: [
          "$$3 \\leq f(5) - f(2) \\leq 12$$",
          "$$5 \\leq f(5) - f(2) \\leq 15$$",
          "$$7 \\leq f(5) - f(2) \\leq 14$$",
          "$$10 \\leq f(5) - f(2) \\leq 21$$",
        ],
        answer: "①",
      },
      {
        question:
          "구간 $$(1,4)$$에서 미분가능인 함수 $$f$$가 $$f(1) = 2$$이고, 모든 $$x$$에 대하여 $$2 \\leq f'(x) \\leq 3$$의 조건을 만족한다고 할 때, $$f(4)$$ 가 취할 수 있는 값의 범위는?",
        choices: [
          "$$2 \\leq f(4) \\leq 3$$",
          "$$6 \\leq f(4) \\leq 8$$",
          "$$8 \\leq f(4) \\leq 11$$",
          "$$9 \\leq f(4) \\leq 12$$",
        ],
        answer: "③",
      },
      {
        question:
          "구간 $$(2,5)$$에서 미분가능인 함수 $$f$$가 $$f(5) = 3$$ 이고, 모든 $$x$$에 대하여 $$1 \\leq f'(x) \\leq 4$$의 조건을 만족한다고 할 때, $$f(2)$$ 가 취할 수 있는 값의 범위는?",
        choices: [
          "$$-12 \\leq f(2) \\leq -3$$",
          "$$-9 \\leq f(2) \\leq 0$$",
          "$$-8 \\leq f(2) \\leq -1$$",
          "$$-3 \\leq f(2) \\leq 2$$",
        ],
        answer: "②",
      },
      {
        question:
          "미분 가능한 함수 $$f : \\mathbb{R} \\to \\mathbb{R}$$가 $$\\lim_{{a \\to \\infty}} f'(a) = 5$$를 만족시킬 때 $$\\lim_{{a \\to \\infty}} \\{ f(2+a) - f(a) \\}$$ 의 값을 구하면?",
        choices: ["$$-10$$", "$$-5$$", "$$0$$", "$$5$$", "$$10$$"],
        answer: "⑤",
      },
    ],
    36: [
      {
        question:
          "극한 $$\\lim_{{x \\to \\infty}} \\frac{e^x -1}{\\cosh x}$$ 의 값은?",
        choices: ["$$0$$", "$$\\frac{1}{2}$$", "$$1$$", "$$2$$", "$$\\infty$$"],
        answer: "④",
      },
      {
        question:
          "다음 극한 $$\\lim_{x \\to \\infty} \\frac{x^{-\\frac{5}{4}}}{\\sin \\left(\\frac{1}{x}\\right)}$$ 의 값은?",
        choices: [
          "$$-\\frac{5}{4}$$",
          "$$-1$$",
          "$$\\frac{5}{4}$$",
          "$$1$$",
          "$$0$$",
        ],
        answer: "⑤",
      },
      {
        question:
          "극한 $$\\lim_{{x \\to 0}} \\frac{1 - \\cos(1 - \\cos x)}{x^n} = \\frac{1}{8}$$ 을 만족하는 자연수 $$n$$의 값은?",
        choices: ["$$4$$", "$$5$$", "$$6$$", "$$7$$", "$$8$$"],
        answer: "①",
      },
    ],
    37: [
      {
        question:
          "극한 $$\\lim_{x \\to \\infty} \\left( \\sqrt{2x^2 + 2x + 1} - \\sqrt{2x^2 - 2x + 1} \\right)$$ 의 값은?",
        choices: ["$$1$$", "$$\\sqrt{2}$$", "$$2\\sqrt{2}$$", "$$4$$"],
        answer: "②",
      },
      {
        question:
          "$$\\lim_{m \\to \\infty} \\left( \\sqrt{5m^2 - 2tm} - \\sqrt{5m^2 - 3} \\right) = 1$$ 을 만족하는 실수 $$t$$의 값을 구하면?",
        choices: [
          "$$-\\sqrt{10}$$",
          "$$-\\sqrt{5}$$",
          "$$1$$",
          "$$\\sqrt{5}$$",
          "$$\\sqrt{10}$$",
        ],
        answer: "②",
      },
      {
        question:
          "$$\\lim_{n \\to \\infty} \\frac{1}{\\sqrt{3n + \\sqrt{2n} - \\sqrt{3n}}}$$ 의 값은?",
        choices: ["$$\\sqrt{6}$$", "$$1$$", "$$\\sqrt{3}$$", "$$\\sqrt{2}$$"],
        answer: "①",
      },
    ],
    38: [
      {
        question: "$$\\lim_{x \\to 0} \\frac{1 - \\cos^3 x}{x^2}$$ 의 값은?",
        choices: [
          "$$0$$",
          "$$\\frac{1}{2}$$",
          "$$1$$",
          "$$\\frac{3}{2}$$",
          "$$2$$",
        ],
        answer: "④",
      },
      {
        question:
          "극한값 $$\\lim_{x \\to 1} \\left( \\frac{x}{x - 1} + (1 - x) \\tan \\frac{\\pi x}{2} - \\frac{1}{\\ln x} \\right)$$ 을 구하면?",
        choices: [
          "$$\\frac{\\pi + 1}{2\\pi}$$",
          "$$\\frac{\\pi + 2}{2\\pi}$$",
          "$$\\frac{\\pi + 4}{2\\pi}$$",
          "$$\\frac{\\pi + 6}{2\\pi}$$",
        ],
        answer: "③",
      },
      {
        question:
          "극한 $$\\lim_{x \\to 0} \\frac{4x^2 - \\sin^2(2x)}{x^4}$$ 의 값은?",
        choices: [
          "$$2$$",
          "$$\\frac{2}{3}$$",
          "$$\\frac{4}{3}$$",
          "$$\\frac{16}{3}$$",
        ],
        answer: "④",
      },
      {
        question:
          "극한 $$\\lim_{x \\to 0} \\frac{6x^2 \\sin x^3 - 6x^5 + x^{11}}{x^{17}}$$ 의 값은?",
        choices: [
          "$$\\frac{1}{10}$$",
          "$$\\frac{1}{15}$$",
          "$$\\frac{1}{20}$$",
          "$$\\frac{1}{60}$$",
        ],
        answer: "③",
      },
    ],

    39: [
      {
        question:
          "극한 $$\\lim_{{x \\to 0}} \\frac{4e^x + 3\\ln x + x^2}{e^x + 2\\ln x + 3x^2}$$ 의 값은?",
        choices: [
          "$$4$$",
          "$$\\frac{3}{2}$$",
          "$$\\frac{1}{3}$$",
          "$$\\frac{4}{3}$$",
        ],
        answer: "②",
      },
      {
        question:
          "극한 $$\\lim_{{h \\to 0}} \\frac{\\sin x (\\cosh - 1) + (\\cos x)(\\sinh)}{h}$$ 의 값은?",
        choices: ["$$0$$", "$$\\sin x$$", "$$\\cos x$$", "$$1$$"],
        answer: "③",
      },
      {
        question:
          "극한 $$\\lim_{{x \\to 0}} 2x \\cot 3x + \\lim_{{x \\to 5}} \\frac{4 \\sin (x-5)}{3x^2 - 18x + 15}$$ 의 값은?",
        choices: [
          "$$\\frac{2}{3}$$",
          "$$1$$",
          "$$\\frac{4}{3}$$",
          "$$\\frac{5}{3}$$",
          "$$2$$",
        ],
        answer: "②",
      },
      {
        question:
          "극한 $$\\lim_{{x \\to 0}} \\left( \\frac{\\tan x}{x} \\right)^{\\frac{1}{x^2}} + \\lim_{{x \\to \\infty}} \\left( \\frac{\\ln x}{x} \\right)^{\\frac{1}{x}}$$ 의 값은?",
        choices: [
          "$$1$$",
          "$$\\frac{4}{3}$$",
          "$$\\sqrt[3]{e}$$",
          "$$\\sqrt[3]{e} + 1$$",
        ],
        answer: "④",
      },
    ],
    40: [
      {
        question:
          "극한 $$\\lim_{{x \\to \\infty}} \\frac{(\\ln (x+1))^3}{x \\ln x}$$ 의 값은?",
        choices: [
          "$$0$$",
          "$$e$$",
          "$$1$$",
          "$$\\frac{1}{2}$$",
          "$$\\frac{1}{e}$$",
        ],
        answer: "①",
      },
      {
        question:
          "극한 $$\\lim_{{x \\to 0}} \\frac{(1 + x^2)^{2/x} - 1}{\\sin x}$$ 을 구하면?",
        choices: [
          "$$\\frac{1}{2}$$",
          "$$1$$",
          "$$\\frac{3}{2}$$",
          "$$2$$",
          "$$\\frac{5}{2}$$",
        ],
        answer: "④",
      },
      {
        question:
          "극한 $$\\lim_{{x \\to \\infty}} \\left[ \\frac{1}{e} \\left(1 + \\frac{1}{x} \\right)^x \\right]^x$$ 의 값은?",
        choices: [
          "$$\\frac{1}{e}$$",
          "$$\\frac{1}{\\sqrt{e}}$$",
          "$$\\sqrt{e}$$",
          "$$1$$",
        ],
        answer: "②",
      },
      {
        question: "$$a$$가 양수일 때, 다음 극한값은?",
        example:
          "$$\\lim_{{x \\to a}} \\frac{\\sqrt{2a^3 x - x^4} - a \\sqrt[3]{a^2 x}}{a - \\sqrt[4]{ax^3}}$$",
        choices: ["$$1$$", "$$a$$", "$$\\frac{16}{9}$$", "$$\\frac{16a}{9}$$"],
        answer: "④",
      },
    ],
    41: [
      {
        question:
          "다음 극한의 값은? $$\\lim_{{x \\to \\infty}} \\left[ x - x^2 \\ln \\left( \\frac{1 + x}{x} \\right) \\right]$$",
        choices: ["$$0$$", "$$\\frac{1}{2}$$", "$$1$$", "$$2$$"],
        answer: "②",
      },
      {
        question:
          "극한 $$\\lim_{{x \\to \\infty}} \\left[ \\frac{x}{2} - x^2 + x^3 \\ln \\left( \\frac{1 + x}{x} \\right) \\right]$$ 의 값은?",
        choices: [
          "$$1$$",
          "$$\\frac{2}{3}$$",
          "$$\\frac{1}{2}$$",
          "$$\\frac{1}{3}$$",
          "$$\\frac{1}{4}$$",
        ],
        answer: "④",
      },
      {
        question: "다음 극한값을 $$K$$라 할 때, $$\\ln K$$ 의 값을 구하면?",
        example:
          "$$\\lim_{{n \\to \\infty}} \\left\\{ \\frac{1}{2} \\left( 1 + \\frac{1}{n^2} \\right) \\left( 1 + \\frac{1}{n^2 + 1} \\right) \\cdots \\left( 1 + \\frac{1}{2n^2} \\right) \\right\\}^{n^2}$$",
        choices: ["$$\\frac{1}{2}$$", "$$1$$", "$$\\frac{3}{2}$$", "$$2$$"],
        answer: "①",
      },
    ],
    42: [
      {
        question: "다음 중 옳지 않은 것을 고르라.",
        choices: [
          "실수 전체에서 연속인 함수 $$f$$에 대하여 $$f(1) = 1$$ 이면 $$\\lim_{{x \\to 1}} \\ln(f(x)) = 0$$ 이다.",
          "$$\\lim_{{x \\to \\infty}} \\tan^{-1} (x) = \\frac{\\pi}{2}$$",
          "$$\\lim_{{x \\to 1}} (\\sin(x))^{-1} = \\frac{\\pi}{2}$$",
          "모든 실수 $$x$$에 대하여 $$\\tan(\\tan^{-1} x) = x$$",
          "$$0 < x < \\frac{\\pi}{2}$$ 이면, $$\\sin x > \\sin^2 x$$ 이 성립한다.",
        ],
        answer: "③",
      },
      {
        question:
          "다음과 같이 정의된 함수$$h(x)$$가 실수 전체에서 연속일 때,$$a$$의 값은?",
        example: [
          "$$h(x) = \\begin{cases} \\tan \\left( \\frac{\\pi x}{2} \\right), & x < -\\frac{1}{3} \\text{ or } x > \\frac{2}{3} \\\\ ax + b, & -\\frac{1}{3} \\leq x \\leq \\frac{2}{3} \\end{cases}$$",
        ],
        choices: [
          "$$\\frac{1}{\\sqrt{3}}$$",
          "$$\\frac{2}{\\sqrt{3}}$$",
          "$$\\frac{3}{\\sqrt{3}}$$",
          "$$\\frac{4}{\\sqrt{3}}$$",
          "$$\\frac{5}{\\sqrt{3}}$$",
        ],
        answer: "④",
      },
      {
        question: "$$f(x)$$가 연속함수일 때, $$\\alpha$$의 값은?",
        example: [
          "$$f(x) = \\begin{cases} \\alpha, & x = 0 \\\\ \\frac{\\sqrt{x^2 + 16} - 4}{x^2} + \\frac{\\sin x}{3x}, & x \\neq 0 \\end{cases}$$",
        ],
        choices: [
          "$$\\frac{11}{24}$$",
          "$$\\frac{13}{24}$$",
          "$$\\frac{17}{24}$$",
          "$$\\frac{19}{24}$$",
        ],
        answer: "①",
      },
    ],
    43: [
      {
        question:
          "다음과 같이 정의된 함수 $$f(x)$$가 모든 실수 $$x$$에 대하여 미분 가능할 때, $$a - b$$의 값은?",
        example: [
          "$$f(x) = \\begin{cases} ax, & x < 1 \\\\ ax^2 + bx + 4, & x \\geq 1 \\end{cases}$$",
        ],
        choices: ["$$5$$", "$$6$$", "$$7$$", "$$8$$", "$$9$$"],
        answer: "④",
      },
      {
        question:
          "다음 함수 $$f(x)$$가 실수 전체의 집합에서 미분가능 할 때, $$a + b$$의 값은? (단, $$a$$와 $$b$$는 상수이다.)",
        example: [
          "$$f(x) = \\begin{cases} \\dfrac{\\ln(x+1)}{x}, & x > 0 \\\\ ax + b, & x \\leq 0 \\end{cases}$$",
        ],
        choices: [
          "$$-1$$",
          "$$-\\frac{1}{2}$$",
          "$$0$$",
          "$$\\frac{1}{2}$$",
          "$$1$$",
        ],
        answer: "④",
      },
      {
        question:
          "구간 $$ (0, 2\\pi) $$에서 함수 $$f(x) = \\arcsin(\\sin x)$$ 가 미분가능하지 않은 점의 개수를 구하면?",
        choices: ["$$4$$", "$$3$$", "$$2$$", "$$1$$", "$$0$$"],
        answer: "③",
      },
      {
        question:
          "함수 $$f(x) = \\begin{cases} x \\sin \\left( \\frac{4}{x} \\right), & x \\neq 0 \\\\ 0, & x = 0 \\end{cases}$$ 가 $$x = 0$$에서 미분가능한지 결정하고, 미분가능하다면 $$f'(0)$$의 값은?",
        choices: ["미분불가능", "$$0$$", "$$1$$", "$$5$$", "$$\\sin 4$$"],
        answer: "①",
      },
    ],
    44: [
      {
        question: "다음 중 $$x = 0$$ 에서 미분가능 하지 않은 함수를 고르면?",
        choices: [
          "$$\\begin{cases} \\frac{\\sin x}{x}, & x \\neq 0 \\\\ 1, & x = 0 \\end{cases}$$",
          "$$\\begin{cases} x^2 \\cos \\left( \\frac{1}{x^5} \\right), & x \\neq 0 \\\\ 0, & x = 0 \\end{cases}$$",
          "$$\\begin{cases} e^{-1/x^2}, & x \\neq 0 \\\\ 0, & x = 0 \\end{cases}$$",
          "$$\\begin{cases} x \\tan \\left( \\frac{1}{x} \\right), & x \\neq 0 \\\\ 0, & x = 0 \\end{cases}$$",
        ],
        answer: "④",
      },
      {
        question:
          "다음은 함수 $$f$$가 $$a$$에서 미분가능하면 $$f$$가 $$a$$에서 연속임을 증명하는 과정이다. 이때, $$A - B + C$$의 값은?",
        example:
          "(증명) 함수 $$f$$가 $$a$$에서 미분 가능하므로 $$\\lim_{{h \\to 0}} A$$ 의 극한이 존재한다. <br> 그러므로 항등식 $$f(a+h) = f(a+h) - f(a) + f(a)$$ 를 이용해서 다음을 얻는다. <br> $$\\lim_{{x \\to a}} f(x) = \\lim_{{h \\to 0}} f(a+h) + f(a) = C \\lim_{{h \\to 0}} h + f(a) = f(a)$$ <br> 따라서 함수 $$f$$는 $$a$$에서 연속이다.",
        choices: ["$$-1$$", "$$0$$", "$$1$$", "$$f(a)$$", "$$f'(a)$$"],
        answer: "⑤",
      },
      {
        question: "함수 $$f_{m,n}(x)$$ 에 대한 설명으로 옳은 것은?",
        example: [
          "$$f_{m,n}(x) = \\begin{cases} x^m \\sin \\frac{1}{x^n}, & x > 0 \\\\ 0, & x \\leq 0 \\end{cases}$$",
        ],
        choices: [
          "$$y = f_{0,1}(x)$$ 는 $$x = 0$$ 에서 연속이다.",
          "$$y = f_{1,1}(x)$$ 는 최소값이 존재하지 않는다.",
          "$$y = f_{2,1}(x)$$ 는 $$x = 0$$ 에서 미분가능하다.",
          "$$\\lim_{{x \\to \\infty}} f_{1,2}(x) = 1$$ 이다.",
        ],
        answer: "③",
      },
    ],

    45: [
      {
        question:
          "다음 함수 중에서 점 $$x = 0$$에서 미분 가능한 것은? (단, $$Q$$는 유리수의 집합)",
        example: [
          "(a) $$f(x) = \\sqrt[3]{x}$$",
          "(b) $$g(x) = x|x|$$",
          "(c) $$h(x) = \\begin{cases} x & (x \\in {Q}) \\\\ 0 & (x \\notin {Q}) \\end{cases}$$",
          "(d) $$k(x) = \\begin{cases} x \\cos \\frac{1}{x} & (x \\neq 0) \\\\ 0 & (x = 0) \\end{cases}$$",
        ],
        choices: ["a", "b", "a, b", "a, c", "b, d"],
        answer: "②",
      },
      {
        question:
          "상수 $$a, b, c$$에 대하여 극한 $$\\lim_{x \\to 0} \\frac{ax^2 + \\sin bx + \\sin cx}{3x^2 + 5x^4 + 7x^6} = 8$$ 일 때, $$a + b + c$$의 값은?",
        choices: ["$$2$$", "$$4$$", "$$8$$", "$$16$$", "$$24$$"],
        answer: "⑤",
      },
      {
        question:
          "다음 중 방정식 $$x^3 + x - 1 = 0$$의 실근이 존재하는 구간이 아닌 것은?",
        choices: [
          "$$(0, 1)$$",
          "$$\\left(-\\frac{1}{2}, \\frac{1}{2}\\right)$$",
          "$$\\left(\\frac{1}{2}, 1\\right)$$",
          "$$\\left(\\frac{2}{3}, \\frac{3}{4}\\right)$$",
        ],
        answer: "②",
      },
      {
        question:
          "5차방정식 $$3x^5 + 2x^3 + 2x + 1 = 0$$은 꼭 하나의 실근을 갖는다. 다음 중 이 실근이 포함된 개구간은?",
        choices: [
          "$$(-5, -4)$$",
          "$$(-4, -3)$$",
          "$$(-3, -2)$$",
          "$$(-2, -1)$$",
          "$$(-1, 0)$$",
        ],
        answer: "⑤",
      },
    ],
    46: [
      {
        question:
          "함수 $$f(x) = x - \\cos x + 1$$ 의 역함수를 $$g(x)$$ 라고 할 때, $$\\lim_{{x \\to 0}} \\frac{{\\{ g(x) \\}^2}}{x - g(x)}$$ 의 값은?",
        choices: ["-2", "-1", "0", "1", "2"],
        answer: "⑤",
      },
      {
        question:
          "함수 $$f(x) = x - \\sin x$$ 의 역함수를 $$g(x)$$ 라고 할 때, $$\\lim_{{x \\to 0}} \\frac{{\\{ g(x) \\}^3}}{3x}$$ 의 값은?",
        choices: ["0", "1", "2", "6", "$\\infty$"],
        answer: "③",
      },
      {
        question:
          "다항식 $$P(x)$$ 로 정의된 함수 $$f(x) = \\frac{P(x)}{x^2 + x - 2}$$ 가 $$\\lim_{{x \\to 1}} f(x) = 1$$ , $$\\lim_{{x \\to \\infty}} f(x) = 2$$ 를 만족할 때, $$f(0)$$ 의 값은?",
        choices: [
          "$$-2$$",
          "$$-\\frac{1}{2}$$",
          "$$0$$",
          "$$\\frac{1}{2}$$",
          "$$2$$",
        ],
        answer: "④",
      },
      {
        question:
          "극한 $$\\lim_{{x \\to 0}} \\frac{\\cos \\left( \\frac{\\pi}{2} (1+x) \\right)}{\\tan(\\sin x)}$$ 의 값은?",
        choices: [
          "$$-\\frac{\\pi}{2}$$",
          "$$-\\frac{\\pi}{4}$$",
          "$$0$$",
          "$$\\frac{\\pi}{4}$$",
          "$$\\frac{\\pi}{2}$$",
        ],
        answer: "①",
      },
      {
        question:
          "미분 가능한 함수 $$f(x)$$ 가 다음을 만족시킬 때, $$f'(0)$$ 의 값은? <br> $$\\lim_{{x \\to 0}} \\frac{f(2x) \\ln (1+x)}{x^2} = 10$$",
        choices: ["1", "2", "3", "4", "5"],
        answer: "⑤",
      },
    ],
    47: [
      {
        question:
          "함수 $$f(x)$$ 가 $$f(1) = 2$$ 이고, 임의의 실수 $$x$$ 에 대해 $$f'(x) \\geq 1$$ 일 때, $$f(4) \\geq a$$ 이다. $$a$$ 의 최소값은?",
        choices: [
          "$$3$$",
          "$$\\frac{7}{2}$$",
          "$$4$$",
          "$$\\frac{9}{2}$$",
          "$$5$$",
        ],
        answer: "⑤",
      },
      {
        question:
          "구간 $$0 \\leq x \\leq 10$$ 에서 함수 $$f(x) = x + \\sin \\pi x$$ 의 평균변화율과 $$f'(c)$$ $$ (0 < c < 10) $$ 가 같아지는 점 $$c$$ 의 개수는?",
        choices: ["$$0$$", "$$5$$", "$$10$$", "$$20$$"],
        answer: "③",
      },
      {
        question:
          "정의역과 공역이 실수 전체인 함수 $$f(x)$$ 가 미분가능하고 $$\\lim_{{x \\to \\infty}} f'(x) = 3$$ 일 때, $$\\lim_{{x \\to \\infty}} [f(x+2) - f(x-2)]$$ 를 구하면?",
        choices: ["$$2$$", "$$4$$", "$$6$$", "$$12$$", "$$18$$"],
        answer: "④",
      },
      {
        question:
          "$$x$$를 동물의 눈동자에 비치는 빛의 세기라고 할 때 눈동자의 지름을 $$f(x)$$ 밀리미터라고 하자. $$f(x) = \\frac{160x^{-0.4} + 90}{4x^{-0.4} + 15}$$ 이라고 하고 최소의 빛이 $$ (a) $$ , 최대의 빛이 $$ (b) $$ 만큼 비칠 때 눈동자의 지름을 각각 구하여 $$ (a) - (b) $$ 의 값을 구하면?",
        choices: ["$$-34$$", "$$0$$", "$$34$$", "$$46$$"],
        answer: "③",
      },
    ],
    48: [
      {
        question: "다음 중 참인 것을 모두 고르시오.",
        example: [
          "(가). 폐구간 $$[a, b]$$에서 정의된 함수 $$f(x)$$가 연속이고 역함수 $$f^{-1}(x)$$가 존재하면, $$f(x)$$는 $$(a, b)$$에서 증가함수 또는 감소함수이다.<br> (나). 폐구간 $$[a, b]$$에서 연속인 함수 $$f(x)$$는 $$[a, b]$$에서 최댓값과 최솟값을 가진다. <br>    (다). 폐구간 $$[a, b]$$에서 정의된 함수 $$f(x)$$가 개구간 $$(a, b)$$에서 미분가능하면, $$f(x)$$는 $$[a, b]$$에서 최댓값을 가진다. <br>    (라). 미분 가능한 두 함수 $$f(x)$$와 $$g(x)$$가 개구간 $$(a, b)$$에서 $$f(x) > g(x)$$이면, 동일한 구간에서 $$f'(x) > g'(x)$$이다.",
        ],
        choices: ["(가), (나)", "(가), (다)", "(나), (라)", "(다), (라)"],
        answer: "①",
      },
      {
        question:
          "실수 전체의 집합에서 미분 가능한 두 함수 $$f(x), g(x)$$  와 두 실수 $$a, b$$  (0 < a < b)  에 대하여 $$\\langle$$ 보기 $$\\rangle$$ 에서 옳은 것을 있는 대로 고른 것은?",
        example: [
          "ㄱ. $$f(x) = \\cos x$$이면 $$ |f(b) - f(a)| \\leq b - a $$이다.<br> ㄴ. $$f(a) = g(a)$$이고 $$ a < x < b $$  인 모든 $$ x $$에 대하여 $$ f'(x) < g'(x) $$이면 $$ f(b) < g(b) $$이다.<br>ㄷ. 모든 실수 $$x$$에 대하여 $$f(-x) = -f(x) $$이면 $$f'(c) = \\frac{f(b)}{b} $$를 만족시키는 실수$$c$$가 열린 구간$$(-b, b)$$에 적어도 하나 존재한다.",
        ],
        choices: ["ㄱ", "ㄱ, ㄴ", "ㄱ, ㄷ", "ㄴ, ㄷ", "ㄱ, ㄴ, ㄷ"],
        answer: "⑤",
      },
      {
        question:
          "함수 $$f(x) = 2x^3 - 3x^2 + 2x + 1$$  와 그 역함수 $$g(x)$$  에 대하여 $$\\langle$$ 보기 $$\\rangle$$ 에서 옳은 것만을 있는 대로 고른 것은?",
        example:
          "$$\\begin{aligned}&\\text{ㄱ. 모든 실수 } x \\text{에 대하여 } f'(x) \\ge \\frac{1}{2} \\text{이다.} \\\\&\\text{ㄴ. 모든 실수 } x \\text{에 대하여 } 0 < g'(x) \\le 2 \\text{이다.} \\\\&\\text{ㄷ. } x < y \\text{인 모든 실수 } x, y \\text{에 대하여 } 0 < g(y) - g(x) \\le 2(y - x) \\text{이다.}\\end{aligned}$$",
        choices: ["ㄱ", "ㄱ, ㄴ", "ㄱ, ㄷ", "ㄴ, ㄷ", "ㄱ, ㄴ, ㄷ"],
        answer: "⑤",
      },
    ],
    49: [
      {
        question: "다음 서술 중 맞는 것을 모두 고른 것은?",
        example: [
          "ㄱ. 함수$$f : \\mathbb{R} \\to \\mathbb{R}$$가 일대일대응 함수이고 미분가능하면, 그것의 역함수$$f^{-1}$$도 미분가능하다.<br> ㄴ. 함수$$\\sin x$$의 역함수 $$\\sin^{-1}x$$의 정의역을$$[0, \\pi]$$  로 잡을 수 있다.<br> ㄷ. 함수$$\\sinh x$$의 역함수 $$\\sinh^{-1}x$$의 정의역은 실수의 집합$$\\mathbb{R}$$이다.",
        ],
        choices: ["ㄱ, ㄴ", "ㄱ, ㄷ", "ㄴ, ㄷ", "ㄷ", "ㄴ"],
        answer: "⑤",
      },
      {
        question: "연속함수에 대한 다음 설명 중 옳은 것을 모두 고르라?",
        example: [
          "ㄱ. 함수$$f(x) = \\frac{\\ln x + e^x}{x^2 - 1}$$는 구간$$(-\\infty, -1)$$과$$ (1, \\infty) $$에서 연속이다.<br> ㄴ. 방정식$$4x^3 - 6x^2 + 3x - 2 = 0$$의 해는 1과 2사이에 존재한다.<br> ㄷ. 함수$$f(x) = \\ln(1+\\cos x)$$  는 $$x = (2n-1)\\pi$$에서 불연속이다.(단,$$n$$은 정수이다.)<br> ㄹ. 합성함수$$f \\circ g$$가 $$x = a$$에서 연속이기 위해서는 반드시$$g$$가$$x = a$$에서 연속이고$$f$$가$$f(a)$$에서 연속이어야 한다.",
        ],
        choices: ["ㄱ, ㄴ", "ㄷ", "ㄴ, ㄷ", "ㄷ, ㄹ"],
        answer: "③",
      },
      {
        question: "다음 명제 중 참인 명제의 개수는?",
        example: [
          "(가). 함 $$f$$가 구간 $$[-1,1]$$ 에서 연속이고, 구간 $$(-1,1)$$에서 미분가능하 $$f(-1) = f(1)$$이면, $$|c| < 1$$이고, $$f'(c) = 0$$을 만족하는$$c$$가 존재한다.<br> (나). 모든 실 $$x, y$$에 대하여$$|\\sinh x - \\sinh y| \\geq |x - y|$$가 성립한다.<br> (다). 개구간$$(a, b)$$에서 정의된 함수$$f$$가 있다. 임의의$$ x \\in (a, b) $$에 대하여$$ f'(x) = 0 $$이라면 $$f$$는 반드시 상수함수이다.<br> (라). $$x = 0$$에서 미분 가능한 함수$$f(x)$$와 미분가능하지 않은 함수$$g(x)$$를 더한 함수$$f(x) + g(x)$$는$$x = 0$$에서 미분 가능하지 않으나, 곱한 함수$$f(x) \\cdot g(x)$$는$$x = 0$$에서 미분 가능할 수 있다.",
        ],
        choices: ["1개", "2개", "3개", "4개"],
        answer: "④",
      },
    ],    
    59: [
      {
        question: "다음 적분을 계산하시오. $$\\int \\frac{\\ln x}{x} \\, dx$$",
        choices: [],
        answer: "$$\\frac{1}{2}(\\ln x)^2 + C$$",
      },
      {
        question:
          "다음 적분을 계산하시오. $$\\int \\frac{1}{(1 + x^2) \\tan^{-1} x} \\, dx$$",
        choices: [],
        answer: "$$\\ln(\\tan^{-1}x) + C$$",
      },
      {
        question:
          "다음 적분을 계산하시오. $$\\int \\frac{x^2}{x^3 + 5} \\, dx$$",
        choices: [],
        answer: "$$\\frac{1}{3}\\ln(x^3 + 5) + C$$",
      },
      {
        question: "다음 적분을 계산하시오. $$\\int x (2x^2 + 1)^{10} \\, dx$$",
        choices: [],
        answer: "$$\\frac{1}{44}(2x^2 + 1)^{11} + C$$",
      },
      {
        question:
          "다음 적분을 계산하시오. $$\\int \\cos x (\\sin x + 3)^3 \\, dx$$",
        choices: [],
        answer: "$$\\frac{1}{4}(\\sin x + 3)^4 + C$$",
      },
      {
        question: "다음 적분을 계산하시오. $$\\int \\sin^4 x \\cos x \\, dx$$",
        choices: [],
        answer: "$$\\frac{1}{5}\\sin^5 x + C$$",
      },
      {
        question:
          "다음 적분을 계산하시오. $$\\int \\frac{\\cos x}{\\sin x + 2} \\, dx$$",
        choices: [],
        answer: "$$\\ln(\\sin x + 2) + C$$",
      },
      {
        question:
          "다음 적분을 계산하시오. $$\\int \\frac{\\sec^2 x}{\\tan x + 1} \\, dx$$",
        choices: [],
        answer: "$$\\ln(\\tan x + 1) + C$$",
      },
      {
        question: "다음 적분을 계산하시오. $$\\int x \\sqrt{1 - x^2} \\, dx$$",
        choices: [],
        answer: "$$-\\frac{1}{3}(\\sqrt{1 - x^2})^3 + C$$",
      },
      {
        question:
          "다음 적분을 계산하시오. $$\\int \\frac{x}{\\sqrt{1 - x^2}} \\, dx$$",
        choices: [],
        answer: "$$-\\sqrt{1 - x^2} + C$$",
      },
      {
        question: "다음 적분을 계산하시오. $$\\int \\sin \\frac{x}{2} \\, dx$$",
        choices: [],
        answer: "$$-2\\cos\\frac{x}{2} + C$$",
      },
      {
        question: "다음 적분을 계산하시오. $$\\int \\cos \\frac{x}{4} \\, dx$$",
        choices: [],
        answer: "$$4\\sin\\frac{x}{4} + C$$",
      },
      {
        question: "다음 적분을 계산하시오. $$\\int e^{3x} \\, dx$$",
        choices: [],
        answer: "$$\\frac{1}{3}e^{3x} + C$$",
      },
    ],
    60: [
      {
        question:
          "다음 적분을 계산하시오. 14. $$\\int_{0}^{\\frac{1}{2}} \\sqrt{1 - x^2} \\, dx$$",
        choices: [],
        answer: "$$\\frac{1}{4}\\left(\\frac{\\pi}{3} + \\frac{\\sqrt{3}}{2}\\right)$$",
      },
      {
        question:
          "다음 적분을 계산하시오. 15. $$\\int \\frac{dx}{\\sqrt{x^2 - 16}}$$",
        choices: [],
        answer: "$$\\cosh^{-1}\\left(\\frac{x}{4}\\right) + C$$",
      },
      {
        question:
          "다음 적분을 계산하시오. 16. $$\\int \\frac{dx}{\\sqrt{9 - x^2}}$$",
        choices: [],
        answer: "$$\\sin^{-1}\\left(\\frac{x}{3}\\right) + C$$"
      },
      {
        question:
          "다음 적분을 계산하시오. 17. $$\\int \\frac{1}{x^2 + 49} \\, dx$$",
        choices: [],
        answer: "$$\\frac{1}{7}\\tan^{-1}\\left(\\frac{x}{7}\\right) + C$$",
      },
      {
        question:
          "다음 적분을 계산하시오. 18. $$\\int_{0}^{1} \\frac{2x}{\\sqrt{1 + x^4}} \\, dx$$",
        choices: [],
        answer: "$$\\sinh^{-1}(1) = \\ln(1 + \\sqrt{2})$$",
      },
      {
        question:
          "다음 적분을 계산하시오. 19. $$\\int (1 + x) \\sqrt{1 - x} \\, dx$$",
        choices: [],
        answer:  "$$-\\frac{4}{3}(\\sqrt{1 - x})^3 + \\frac{2}{5}(\\sqrt{1 - x})^5 + C$$",
      },
      {
        question:
          "다음 적분을 계산하시오. 20. $$\\int \\frac{\\sqrt[4]{x}}{1 + \\sqrt{x}} \\, dx$$",
        choices: [],
        answer: "$$\\frac{4}{3}x^{\\frac{4}{3}} = 4\\sqrt[4]{x} + 4\\tan(\\sqrt[4]{x}) + C$$",
      },
      {
        question:
          "다음 적분을 계산하시오. 21. $$\\int \\frac{1}{\\sqrt{x^2 + 4x + 5}} \\, dx$$",
        choices: [],
        answer: "$$\\ln(x + 2 + \\sqrt{x^2 + 4x + 5}) + C$$",
      },
      {
        question:
          "다음 적분을 계산하시오. 22. $$\\int \\frac{1}{\\sqrt{x^2 - 2x - 10}} \\, dx$$",
        choices: [],
        answer: "$$\\ln(x - 1 + \\sqrt{x^2 - 2x - 10}) + C$$",
      },
    ],
    62: [
      {
        question:
          "다음 적분을 계산하시오. 27. $$\\int \\frac{9x}{(x-1)(x+2)^2} \\, dx$$",
        choices: [],
        answer: "$$\\ln\\frac{x - 1}{x + 1} - \\frac{6}{x + 2} + C$$",
      },
      {
        question:
          "다음 적분을 계산하시오. 28. $$\\int_{0}^{1} \\frac{1}{(x+2)(x+3)^2} \\, dx$$",
        choices: [],
        answer:  "$$\\ln\\frac{9}{8} - \\frac{1}{12}$$",
      },
      {
        question:
          "다음 적분을 계산하시오. 29. $$\\int \\frac{2x^2 + 1}{x(x-1)^2} \\, dx$$",
        choices: [],
        answer: "$$\\ln\\left(\\frac{x(x - 2)}{(x - 1)^2}\\right) + C$$",
      },
      {
        question:
          "다음 적분을 계산하시오. 30. $$\\int_{0}^{1} \\frac{x^2 + 3x}{(x+1)^2(x+2)} \\, dx$$",
        choices: [],
        answer:  "$$\\ln\\left(\\frac{32}{9} - 1\\right)$$",
      },
      {
        question:
          "다음 적분을 계산하시오. 31. $$\\int_{0}^{1} \\frac{1}{(x+1)(x^2+1)} \\, dx$$",
        choices: [],
        answer: "$$\\frac{1}{4}\\ln 2 + \\frac{\\pi}{8}$$",
      },
      {
        question:
          "다음 적분을 계산하시오. 32. $$\\int \\frac{5}{(x-1)(x^2+4)} \\, dx$$",
        choices: [],
        answer: "$$\\ln\\left(\\frac{x - 1}{\\sqrt{x^2 + 4}}\\right) + \\frac{1}{2}\\tan^{-1}\\frac{x}{2} + C$$"
      },
      {
        question:
          "다음 적분을 계산하시오. 33. $$\\int \\frac{1}{(x^2+1)(x^2+9)} \\, dx$$",
        choices: [],
        answer: "$$\\frac{1}{8}\\left(\\tan^{-1}x - \\frac{1}{3}\\tan^{-1}\\frac{x}{3}\\right) + C$$",
      },
      {
        question:
          "다음 적분을 계산하시오. 34. $$\\int \\frac{1}{(x^2+2)(x^2+6)} \\, dx$$",
        choices: [],
        answer: "$$\\frac{1}{4}\\left(\\frac{1}{\\sqrt{2}}\\tan^{-1}\\frac{x}{\\sqrt{2}} - \\frac{1}{\\sqrt{6}}\\tan^{-1}\\frac{x}{\\sqrt{6}}\\right) + C$$"
      },
      {
        question:
          "다음 적분을 계산하시오. 35. $$\\int_{0}^{\\ln 2} \\frac{2}{e^x + 2} \\, dx$$",
        choices: [],
        answer: "$$\\ln\\frac{3}{2}$$"
      },
      {
        question:
          "다음 적분을 계산하시오. 36. $$\\int \\frac{e^x - e^{-x}}{2} \\, dx$$",
        choices: [],
        answer: "$$\\cosh x + C$$"
      },
      {
        question:
          "다음 적분을 계산하시오. 37. $$\\int_{0}^{\\ln \\sqrt{3}} \\operatorname{sech} x \\, dx$$",
        choices: [],
        answer: "$$\\frac{\\pi}{6}$$"
      },
      {
        question:
          "다음 적분을 계산하시오. 38. $$\\int_{-\\infty}^{0} \\frac{e^{3x}}{1 + e^{2x}} \\, dx$$",
        choices: [],
        answer: "$$1 - \\frac{\\pi}{4}$$"
      },
    ],
    64: [
      {
        question: "다음 적분을 계산하시오. 39. $$\\int_{0}^{1} \\ln x \\, dx$$",
        choices: [],
        answer: "$$-1$$"
      },
      {
        question: "다음 적분을 계산하시오. 40. $$\\int_{1}^{e} x^2 \\ln x \\, dx$$",
        choices: [],
        answer: "$$\\frac{1}{9}(2e^3 + 1)$$"
      },
      {
        question:
          "다음 적분을 계산하시오. 41. $$\\int_{0}^{\\frac{1}{2}} \\sin^{-1} x \\, dx$$",
        choices: [],
        answer: "$$\\frac{\\pi + 6\\sqrt{3} - 12}{12}$$"
      },
      {
        question:
          "다음 적분을 계산하시오. 42. $$\\int_{0}^{1} \\cos^{-1} x \\, dx$$",
        choices: [],
        answer: "$$1$$"
      },
      {
        question:
          "다음 적분을 계산하시오. 43. $$\\int_{0}^{1} (\\sin^{-1} x)^2 \\, dx$$",
        choices: [],
        answer: "$$\\frac{\\pi^2}{4} - 2$$"
      },
      {
        question: "다음 적분을 계산하시오. 44. $$\\int_{1}^{e} (\\ln x)^2 \\, dx$$",
        choices: [],
        answer: "$$e - 2$$"
      },
      {
        question:
          "다음 적분을 계산하시오. 45. $$\\int_{0}^{1} 2x \\tan^{-1} x \\, dx$$",
        choices: [],
        answer: "$$\\frac{\\pi}{2} - 1$$"
      },
      {
        question:
          "다음 적분을 계산하시오. 46. $$\\int_{0}^{\\frac{\\pi}{4}} x \\sec^2 x \\, dx$$",
        choices: [],
        answer: "$$\\frac{1}{4} - \\frac{1}{2}\\ln 2$$"
      },
      {
        question: "다음 적분을 계산하시오. 47. $$\\int_{0}^{1} x^2 e^x \\, dx$$",
        choices: [],
        answer: "$$e - 2$$"
      },
      {
        question: "다음 적분을 계산하시오. 48. $$\\int_{0}^{1} (2x-1)e^x \\, dx$$",
        choices: [],
        answer: "$$3 - e$$"
      },
      {
        question:
          "다음 적분을 계산하시오. 49. $$\\int_{0}^{\\pi} (x+1) \\sin x \\, dx$$",
        choices: [],
        answer: "$$\\pi + 2$$"
      },
      {
        question: "다음 적분을 계산하시오. 50. $$\\int 2x \\cos x \\, dx$$",
        choices: [],
        answer: "$$2x\\sin x + 2\\cos x + C$$"
      },
      {
        question: "다음 적분을 계산하시오. 51. $$\\int \\sin (\\ln x) \\, dx$$",
        choices: [],
        answer: "$$\\frac{1}{2}\\left\\{x\\sin(\\ln x) - x\\cos(\\ln x)\\right\\} + C$$"
      },
      {
        question:
          "다음 적분을 계산하시오. 52. $$\\int_{0}^{\\frac{1}{2}} \\left( \\sin^{-1} x + \\frac{x}{\\sqrt{1 - x^2}} \\right) \\, dx$$",
        choices: [],
        answer: "$$\\frac{\\pi}{12}$$"
      },
      {
        question:
          "다음 적분을 계산하시오. 53. $$\\int e^x (\\tan x + \\sec^2 x) \\, dx$$",
        choices: [],
        answer: "$$e^x\\tan x + C$$"
      },
      {
        question:
          "다음 적분을 계산하시오. 54. $$\\int_{1}^{2} e^{-x} \\left( \\frac{1}{x} + \\frac{1}{x^2} \\right) \\, dx$$",
        choices: [],
        answer: "$$\\frac{1}{e} - \\frac{1}{2e^2}$$"
      },
    ],
    67: [
      {
        question:
          "다음 적분을 계산하시오. 55. $$\\int_{0}^{\\frac{\\pi}{2}} \\sin^5 x \\, dx$$",
        choices: [],
        answer: "$$\\frac{8}{15}$$"
      },
      {
        question:
          "다음 적분을 계산하시오. 56. $$\\int_{0}^{3\\pi} \\cos^5 x \\, dx$$",
        choices: [],
        answer: "$$0$$"
      },
      {
        question:
          "다음 적분을 계산하시오. 57. $$\\int_{-\\pi}^{\\frac{\\pi}{2}} \\sin^4 x \\, dx$$",
        choices: [],
        answer: "$$\\frac{9\\pi}{16}$$"
      },
      {
        question:
          "다음 적분을 계산하시오. 58. $$\\int_{-\\frac{\\pi}{2}}^{\\frac{3\\pi}{2}} \\cos^6 x \\, dx$$",
        choices: [],
        answer: "$$\\frac{5}{8}\\pi$$"
      },
      {
        question:
          "다음 적분을 계산하시오. 59. $$\\int_{0}^{\\pi} \\sin^2 x \\cos^2 x \\, dx$$",
        choices: [],
        answer: "$$\\frac{\\pi}{8}$$"
      },
      {
        question:
          "다음 적분을 계산하시오. 60. $$\\int_{0}^{\\frac{\\pi}{2}} \\sin^2 x \\cos^4 x \\, dx$$",
        choices: [],
        answer: "$$\\frac{\\pi}{32}$$"
      },
      {
        question:
          "다음 적분을 계산하시오. 61. $$\\int_{0}^{\\frac{\\pi}{4}} \\sin^3 x \\, dx$$",
        choices: [],
        answer: "$$\\frac{2}{3} - \\frac{5\\sqrt{2}}{12}$$"
      },
      {
        question:
          "다음 적분을 계산하시오. 62. $$\\int_{0}^{\\frac{\\pi}{4}} \\sec^4 x \\, dx$$",
        choices: [],
        answer: "$$\\frac{4}{3}$$"
      },
      {
        question:
          "다음 적분을 계산하시오. 63. $$\\int \\frac{1}{1 - \\sin x} \\, dx$$",
        choices: [],
        answer: "$$\\frac{2}{1 - \\tan\\frac{x}{2}} + C$$"
      },
      {
        question:
          "다음 적분을 계산하시오. 64. $$\\int \\frac{1}{4 + 5 \\cos x} \\, dx$$",
        choices: [],
        answer: "$$\\frac{1}{3}\\ln\\left(\\frac{3 + \\tan\\frac{x}{2}}{3 - \\tan\\frac{x}{2}}\\right) + C$$"
      },
      {
        question:
          "다음 적분을 계산하시오. 65. $$\\int \\frac{2}{1 + \\tan x} \\, dx$$",
        choices: [],
        answer: "$$\\ln\\left(\\frac{\\tan x + 1}{\\sqrt{\\tan^2 x + 1}}\\right) + x + C$$"
      },
      {
        question:
          "다음 적분을 계산하시오. 66. $$\\int_{0}^{\\frac{\\pi}{4}} \\frac{1}{2 + \\tan x} \\, dx$$",
        choices: [],
        answer: "$$\\frac{1}{5}\\left(\\ln\\left(\\frac{3}{2\\sqrt{2}}\\right) + \\frac{\\pi}{4}\\right)$$"
      },
      {
        question: "다음 적분을 계산하시오. 67. $$\\int \\sin 7x \\cos 5x \\, dx$$",
        choices: [],
        answer: "$$-\\frac{1}{24}\\cos 12x - \\frac{1}{4}\\cos 2x + C$$"
      },
      {
        question:
          "다음 적분을 계산하시오. 68. $$\\int \\sin 5\\theta \\sin 3\\theta \\, d\\theta$$",
        choices: [],
        answer: "$$\\frac{1}{4}\\sin 2\\theta - \\frac{1}{16}\\sin 8\\theta + C$$"
      },
      {
        question:
          "다음 적분을 계산하시오. 69.  $$\\int_{0}^{\\pi} e^x \\cos 2x \\, dx$$",
        choices: [],
        answer: "$$\\frac{1}{5}(e^\\pi - 1)$$"
      },
      {
        question:
          "다음 적분을 계산하시오. 70. $$\\int_{0}^{\\pi} e^{-3x} \\sin 4x \\, dx$$",
        choices: [],
        answer: "$$\\frac{4}{25}\\left(1 - e^{-3\\pi}\\right)$$"
      },
    ],
    68: [
      {
        question:
          "적분 $$\\int_{-10}^{10} \\frac{2e^x}{\\sinh x + \\cosh x} \\, dx$$ 의 값을 구하면?",
        choices: ["$$10$$", "$$20$$", "$$30$$", "$$40$$"],
        answer: "④",
      },
      {
        question:
          "$$\\int_{0}^{\\frac{1}{2}} (\\sin^{-1} x + \\cos^{-1} x)dx$$ 의 값은?",
        choices: [
          "$$0$$",
          "$$\\frac{\\pi}{4}$$",
          "$$1$$",
          "$$\\frac{\\pi}{2}$$",
        ],
        answer: "②",
      },
      {
        question:
          "$$\\int \\left( 2 \\cos^2 x + \\frac{1}{x(x-1)} \\right) \\, dx$$ 의 부정적분은?",
        choices: [
          "$$x + \\frac{\\sin 2x}{2} - \\ln |x| + \\ln |x-1| + C$$",
          "$$-x + \\frac{\\cos 2x}{2} - \\ln |x| + \\ln |x-1| + C$$",
          "$$x + \\frac{\\cos x}{2} - \\ln |x| + \\ln |x-1| + C$$",
          "$$x - \\frac{\\sin 2x}{2} - \\ln |x| + \\ln |x-1| + C$$",
          "$$x - \\frac{\\cos x}{3} - \\ln |x| + \\ln |x-1| + C$$",
        ],
        answer: "①",
      },
    ],
    69: [
      {
        question:
          "다음 부정적분 $$\\int \\cos x \\sqrt{\\sin x + 5} \\, dx$$ 을 구하면?",
        choices: [
          "$$\\frac{2}{3} \\sqrt{(\\sin x + 5)^3} + C$$",
          "$$\\frac{1}{3} \\sqrt{(\\sin x + 5)^3} + C$$",
          "$$\\frac{2}{3} \\sqrt{\\sin x + 5} + C$$",
          "$$\\frac{1}{3} \\sqrt{\\sin x + 5} + C$$",
        ],
        answer: "①",
      },
      {
        question:
          "$$\\int_{0}^{\\frac{\\pi}{3}} \\sec x \\tan x (1 + \\sec x) \\, dx$$ 의 값은?",
        choices: [
          "$$\\frac{1}{2}$$",
          "$$1$$",
          "$$\\frac{3}{2}$$",
          "$$\\frac{5}{2}$$",
          "$$2$$",
        ],
        answer: "④",
      },
      {
        question:
          "적분 $$\\int_{1}^{\\infty} \\frac{32 \\arctan x}{1 + x^2} \\, dx$$ 의 값은?",
        choices: [
          "$$3\\pi^2$$",
          "$$4\\pi^2$$",
          "$$5\\pi^2$$",
          "존재하지 않는다",
        ],
        answer: "①",
      },
      {
        question:
          "정적분 $$\\int_{0}^{\\frac{\\pi}{2}} \\cos^3 x \\sin 2x \\, dx$$ 의 값을 구하면?",
        choices: [
          "$$\\frac{\\sqrt{2}}{2}$$",
          "$$\\frac{1}{3}$$",
          "$$\\frac{2}{5}$$",
          "$$\\frac{\\sqrt{3}}{4}$$",
        ],
        answer: "③",
      },
    ],
    70: [
      {
        question: "부정적분 $$\\int \\frac{x+2}{x+1} \\, dx$$ 을 구하면?",
        choices: [
          "$$x - \\ln (x+1)$$",
          "$$x + \\ln (x+1)$$",
          "$$x + \\ln x$$",
          "$$1 + \\ln (x+1)$$",
        ],
        answer: "②",
      },
      {
        question:
          "적분 $$\\int_{0}^{\\frac{\\sqrt{3}}{2}} x (1 - x^2)^ \\frac{3}{2} \\, dx$$ 의 값은?",
        choices: [
          "$$\\frac{1}{5}$$",
          "$$\\frac{31}{32}$$",
          "$$\\frac{\\sqrt{3}}{5}$$",
          "$$\\frac{31 \\sqrt{3}}{32}$$",
          "$$\\frac{31}{160}$$",
        ],
        answer: "⑤",
      },
      {
        question:
          "다음 정적분 $$\\int_{0}^{\\frac{\\pi}{2}} \\frac{\\sin 2x}{2(1 + \\cos x)} \\, dx$$ 의 값은?",
        choices: [
          "$$1 - \\ln 3$$",
          "$$1 - \\ln 2$$",
          "$$1 + \\ln 2$$",
          "$$1 + \\ln 3$$",
        ],
        answer: "②",
      },
      {
        question:
          "정적분 $$\\int_{0}^{\\ln 3} \\ln (\\cosh x)^{\\sinh x} \\, dx$$ 의 값을 구하면?",
        choices: [
          "$$\\frac{2}{3} \\left( \\ln \\frac{5}{3} - 1 \\right)$$",
          "$$2 \\ln \\frac{5}{3} - \\frac{1}{2}$$",
          "$$\\frac{1}{3} \\left( 5 \\ln \\frac{5}{3} - 2 \\right)$$",
          "$$5 \\ln \\frac{5}{3} - 3$$",
        ],
        answer: "③",
      },
    ],

    71: [
      {
        question: "$$\\int_1^2 \\frac{e^{\\frac{1}{x}}}{x^2} \\, dx$$의 값은?",
        choices: [
          "$$e - \\sqrt{e}$$",
          "$$\\sqrt{e}$$",
          "$$e$$",
          "$$e + \\sqrt{e}$$",
        ],
        answer: "①",
      },
      {
        question:
          "정적분 $$\\int_0^{\\frac{1}{2}} \\frac{2 - 8x}{1 + 4x^2} \\, dx$$의 값은?",
        choices: [
          "$$\\frac{\\pi}{4} - 2\\ln 2$$",
          "$$\\frac{\\pi}{4} - \\ln 2$$",
          "$$\\frac{\\pi}{4}$$",
          "$$\\frac{\\pi}{4} + \\ln 2$$",
          "$$\\frac{\\pi}{4} + 2\\ln 2$$",
        ],
        answer: "②",
      },
      {
        question:
          "정적분 $$\\int_0^1 x^3 \\sqrt{1 + x^2} \\, dx$$의 값을 구하면?",
        choices: [
          "$$\\frac{2 + 2\\sqrt{2}}{15}$$",
          "$$\\frac{2 + 3\\sqrt{2}}{15}$$",
          "$$\\frac{3 + 2\\sqrt{2}}{15}$$",
          "$$\\frac{3 + 3\\sqrt{2}}{15}$$",
          "$$\\frac{2 + 4\\sqrt{2}}{15}$$",
        ],
        answer: "①",
      },
    ],

    72: [
      {
        question:
          "정적분 $$\\int_{0}^{\\frac{1}{2}} \\frac{x^2}{\\sqrt{1 - x^2}} \\, dx$$ 의 값을 구하세요.",
        choices: [
          "$$\\frac{\\sqrt{3}}{2}$$",
          "$$\\frac{1}{24}$$",
          "$$\\frac{\\pi}{12} - \\frac{\\sqrt{3}}{4}$$",
          "$$\\frac{\\pi}{12} + \\frac{\\sqrt{3}}{8}$$",
          "$$\\frac{\\pi}{12} - \\frac{\\sqrt{3}}{8}$$",
        ],
        answer: "⑤",
      },
      {
        question:
          "적분 $$\\int_{1/2}^{1} \\frac{dx}{x^2 \\sqrt{4x^2 - 1}}$$ 의 값을 구하세요.",
        choices: [
          "$$\\sqrt{2}$$",
          "$$2$$",
          "$$\\sqrt{3}$$",
          "$$3$$",
          "$$\\sqrt{5}$$",
        ],
        answer: "③",
      },
      {
        question:
          "정적분 $$\\int_{0}^{2} \\frac{128}{(x^2 + 4)^3} \\, dx$$ 의 값을 구하면?",
        choices: [
          "$$\\frac{9\\pi}{16} - 1$$",
          "$$\\frac{16\\pi}{3} + 1$$",
          "$$\\frac{\\pi}{3} - \\frac{1}{2}$$",
          "$$\\frac{3\\pi}{8} + 1$$",
        ],
        answer: "④",
      },
    ],
    73: [
      {
        question:
          "정적분 $$\\int_{0}^{64} \\frac{dx}{\\sqrt{1 + \\sqrt{x}}}$$ 의 값을 구하면?",
        choices: [
          "$$\\frac{35}{2}$$",
          "$$\\frac{55}{4}$$",
          "$$\\frac{63}{3}$$",
          "$$\\frac{80}{3}$$",
        ],
        answer: "④",
      },
      {
        question:
          "정적분 $$\\int_{0}^{1} \\sqrt{x} \\, e^{\\sqrt{x}} \\, dx$$ 의 값은?",
        choices: [
          "$$2(e - 1)$$",
          "$$2(e + 1)$$",
          "$$e - 1$$",
          "$$e + 1$$",
          "$$2(e - 2)$$",
        ],
        answer: "⑤",
      },
      {
        question:
          "정적분 $$\\int_{1}^{4} \\frac{e^{\\sqrt{x}}}{\\sqrt{x}} \\, dx$$ 의 값은?",
        choices: [
          "$$e (2e - 5)$$",
          "$$2e (e - 2)$$",
          "$$e (2e - 3)$$",
          "$$2e (e - 1)$$",
          "$$e (2e - 1)$$",
        ],
        answer: "④",
      },
      {
        question: "$$\\int_{-1}^{1} \\sqrt{3 + 2x - x^2} \\, dx$$ 의 값은?",
        choices: ["$$0$$", "$$\\frac{1}{2} \\pi$$", "$$\\pi$$", "$$4\\pi$$"],
        answer: "③",
      },
    ],
    74: [
      {
        question:
          "정적분 $$\\int_{3}^{7} \\frac{1}{(x + 1)(x - 2)} \\, dx$$ 의 값을 구하면?",
        choices: [
          "$$-\\frac{1}{3} \\ln \\frac{2}{5}$$",
          "$$\\frac{3}{2} \\ln 5$$",
          "$$-\\frac{1}{4} \\ln \\frac{1}{2}$$",
          "$$\\frac{1}{2} \\ln \\frac{1}{5}$$",
        ],
        answer: "①",
      },
      {
        question:
          "$$\\int_{1}^{2} \\frac{x^2 + 1}{3x - x^2} \\, dx = a + b \\ln 2$$ 일 때, $$a + b$$의 값은? (단, $$a$$와 $$b$$는 유리수이다.)",
        choices: [
          "$$\\frac{4}{3}$$",
          "$$2$$",
          "$$\\frac{8}{3}$$",
          "$$\\frac{10}{3}$$",
          "$$4$$",
        ],
        answer: "③",
      },
      {
        question:
          "다음 중 부정적분을 계산하였을 때, $$\\ln |x+1|$$ 항이 있는 식을 고르면?",
        example: [
          "(ㄱ) $$\\int \\frac{2x}{x^2 - 1}dx$$",
          "(ㄴ) $$\\int \\frac{x^2 + 1}{x(x+1)^2}dx$$",
          "(ㄷ) $$\\int \\frac{2}{x(x+1)(x+2)}dx$$",
        ],
        choices: ["ㄱ, ㄴ", "ㄱ, ㄷ", "ㄴ, ㄷ", "ㄱ, ㄴ, ㄷ", "없음"],
        answer: "②",
      },
    ],
    75: [
      {
        question:
          "$$\\int_{0}^{1} \\frac{x^2 + 3x}{(x+1)^2(x+2)} \\, dx$$ 의 값을 구하면?",
        choices: [
          "$$\\ln \\frac{32}{9} - 1$$",
          "$$\\ln \\frac{32}{9}$$",
          "$$\\ln \\frac{32}{9} + 1$$",
          "$$\\ln \\frac{16}{3} - 1$$",
        ],
        answer: "①",
      },
      {
        question:
          "정적분 $$\\int_{0}^{1} \\frac{1}{(x+1)(x^2 + 1)} \\, dx$$ 를 계산하면?",
        choices: [
          "$$\\frac{1}{4} \\log 2 + \\frac{\\pi}{8}$$",
          "$$\\log 2 + \\frac{\\pi}{2}$$",
          "$$\\frac{1}{2} \\log 2 + \\frac{\\pi}{4}$$",
          "$$\\frac{3}{8}$$",
        ],
        answer: "①",
      },
      {
        question:
          "적분 $$\\int_{0}^{1} \\frac{9}{1 + x^3} \\, dx$$ 의 값이 $$\\ln a + \\sqrt{3}\\pi$$일 때, $$a$$의 값은?",
        choices: ["3", "8", "9", "16"],
        answer: "②",
      },
    ],
    76: [
      {
        question:
          "정적분 $$\\int_{0}^{\\ln 2} \\frac{2}{e^x + 2} \\, dx$$ 의 값을 구하면?",
        choices: ["$$e$$", "$$1$$", "$$\\ln 2$$", "$$\\ln \\frac{3}{2}$$"],
        answer: "④",
      },
      {
        question:
          "정적분 $$\\int_{\\ln \\frac{2}{\\sqrt{3}}}^{\\ln \\frac{2}{3}} \\frac{e^x}{4 + 9e^{2x}} \\, dx$$ 의 값을 구하면?",
        choices: [
          "$$-\\frac{\\pi}{72}$$",
          "$$-\\frac{\\pi}{16}$$",
          "$$\\frac{2}{33}$$",
          "$$\\frac{1}{16}$$",
        ],
        answer: "①",
      },
      {
        question: "$$\\int e^x \\sinh x \\, dx$$ 를 계산하면?",
        choices: [
          "$$\\frac{1}{2} e^{2x} - \\frac{1}{2} e^{-x} + C$$",
          "$$\\frac{1}{4} e^{2x} - \\frac{1}{2} x + C$$",
          "$$\\frac{1}{4} e^{-2x} - \\frac{1}{4} x + C$$",
          "$$\\frac{1}{4} e^{2x} - \\frac{1}{4} e^{-x} + C$$",
        ],
        answer: "②",
      },
    ],
    77: [
      {
        question: "적분 $$\\int_{1}^{e} (\\ln x)^2 \\, dx$$ 의 값은?",
        choices: ["$$e - 2$$", "$$e - 1$$", "$$e$$", "$$e + 1$$", "$$e + 2$$"],
        answer: "①",
      },
      {
        question: "적분 $$\\int_{0}^{1} x \\ln (x+1) \\, dx$$ 의 값은?",
        choices: [
          "$$\\frac{1}{4}$$",
          "$$\\frac{1}{3}$$",
          "$$\\frac{1}{2}$$",
          "$$\\frac{2}{3}$$",
          "$$1$$",
        ],
        answer: "①",
      },
      {
        question:
          "적분 $$\\int_{0}^{\\frac {\\pi}{2}} \\sin^2 x \\cos x \\ln(\\sin x) \\, dx$$ 의 값을 구하면?",
        choices: [
          "$$\\frac{1}{3}$$",
          "$$-\\frac{1}{5}$$",
          "$$\\frac{1}{7}$$",
          "$$-\\frac{1}{9}$$",
        ],
        answer: "④",
      },
      {
        question:
          "정적분 $$\\int_{0}^{2\\pi} (x^2 + 1) \\sin x \\, dx$$ 의 값을 구하면?",
        choices: [
          "$$-8\\pi^2$$",
          "$$-4\\pi^2$$",
          "$$0$$",
          "$$\\frac{\\pi^2}{2}$$",
        ],
        answer: "②",
      },
    ],
    78: [
      {
        question:
          "$$\\int_{0}^{\\sqrt{3}} x \\tan^{-1} x + \\frac{x^2}{2(1 + x^2)} dx$$ 의 값은?",
        choices: [
          "$$\\frac{\\pi}{8}$$",
          "$$\\frac{\\pi}{4}$$",
          "$$\\frac{\\pi}{2}$$",
          "$$\\pi$$",
        ],
        answer: "③",
      },
      {
        question:
          "$$\\int_{\\frac{1}{2}}^{1} \\left( \\frac{\\cos (\\pi x)}{x} - \\frac{3}{2\\pi} \\frac{\\sin(\\pi x)}{x^2} \\right) \\cdot \\frac{1}{\\sqrt{x}} \\, dx$$ 의 값은?",
        choices: [
          "$$2\\sqrt{2}$$",
          "$$-2\\sqrt{2}\\pi$$",
          "$$-\\frac{\\sqrt{2}}{\\pi}$$",
          "$$-\\frac{2\\sqrt{2}}{\\pi}$$",
        ],
        answer: "④",
      },
      {
        question:
          "이상적분 $$\\int_{0}^{1} \\left( 2x \\sin \\frac{1}{x^2} - \\frac{2}{x} \\cos \\frac{1}{x^2} \\right) dx$$ 의 값은?",
        choices: [
          "$$-\\sin 2$$",
          "$$-\\sin 1$$",
          "$$0$$",
          "$$\\sin 1$$",
          "$$\\sin 2$$",
        ],
        answer: "④",
      },
    ],
    79: [
      {
        question:
          "정적분 $$\\int_{0}^{\\frac{\\pi}{4}} \\sin^4 2x \\, dx$$ 의 값을 구하면?",
        choices: [
          "$$\\frac{3\\pi}{32}$$",
          "$$\\frac{3}{16}$$",
          "$$\\frac{3\\pi}{16}$$",
          "$$\\frac{3}{8}$$",
        ],
        answer: "①",
      },
      {
        question:
          "정적분 $$\\int_{0}^{\\frac{\\pi}{2}} \\frac{5}{4 \\sin x + 3 \\cos x} \\, dx$$ 의 값은?",
        choices: [
          "$$\\ln \\frac{3}{2}$$",
          "$$\\ln 2$$",
          "$$\\ln 3$$",
          "$$\\ln 6$$",
        ],
        answer: "④",
      },
      {
        question:
          "정적분 $$\\int_{0}^{\\frac{\\pi}{4}} \\left[ \\frac{1}{1 + \\tan x} - \\frac{1}{2} \\right] dx$$ 의 값은?",
        choices: [
          "$$\\frac{1}{8} \\ln 2$$",
          "$$\\frac{1}{4} \\ln 2$$",
          "$$\\frac{3}{4} \\ln 2$$",
          "$$\\frac{\\pi}{8}$$",
          "$$\\frac{3\\pi}{4}$$",
        ],
        answer: "②",
      },
      {
        question:
          "$$\\int_{0}^{\\frac{\\pi}{2}} \\cos^3 x \\sin^3 x \\, dx$$ 의 값은?",
        choices: [
          "$$\\frac{1}{12}$$",
          "$$\\frac{1}{6}$$",
          "$$\\frac{1}{3}$$",
          "$$\\frac{1}{2}$$",
        ],
        answer: "①",
      },
    ],
    80: [
      {
        question:
          "정적분 $$6 \\int_{0}^{\\frac{\\pi}{8}} (\\sin^5 2x \\cos^2 x - \\sin^5 2x \\sin^2 x) dx$$ 의 값을 구하면?",
        choices: [
          "$$-\\frac{1}{4}$$",
          "$$\\frac{1}{16}$$",
          "$$\\frac{1}{32}$$",
          "$$\\frac{1}{64}$$",
        ],
        answer: "②",
      },
      {
        question:
          "$$\\int_{0}^{x} \\sin 5\\theta \\sin 3\\theta \\, d\\theta$$ 와 같은 식을 구하면?",
        choices: [
          "$$-\\frac{1}{16} \\sin 8x - \\frac{1}{4} \\sin 2x$$",
          "$$-\\frac{1}{16} \\sin 8x + \\frac{1}{4} \\sin 2x$$",
          "$$-\\frac{1}{16} \\cos 8x - \\frac{1}{4} \\sin 2x$$",
          "$$-\\frac{1}{16} \\cos 8x + \\frac{1}{4} \\sin 2x$$",
        ],
        answer: "②",
      },
      {
        question:
          "$$1$$보다 큰 자연수 $$n$$에 대하여 $$a_n$$과 $$b_n$$을 다음의 등식\n$$\\int \\sin^n x \\, dx = -a_n \\sin^{n-1}x \\cos x + b_n \\int \\sin^{n-2}x \\, dx$$\n가 성립하도록 정의할 때, $$a_n + b_n$$의 값을 구하면?",
        choices: [
          "$$\\frac{1}{n}$$",
          "$$\\frac{n-2}{n}$$",
          "$$\\frac{n-1}{n}$$",
          "$$1$$",
        ],
        answer: "④",
      },
      {
        question:
          "$$n$$은 $$3$$이상의 자연수이다. $$\\int \\tan^n x \\, dx = \\frac{\\tan^{n-1}x}{n-1} - \\int B \\, dx$$ 를 만족하는 $$B$$는?",
        choices: [
          "$$\\tan^{n-1}x$$",
          "$$\\sec^{n-1}x$$",
          "$$\\tan^{n-2}x$$",
          "$$\\sec^2 x$$",
        ],
        answer: "③",
      },
    ],
    81: [
      {
        question:
          "$$\\int_{0}^{1} \\sin(\\tan^{-1}x) \\cos(\\tan^{-1}x) \\, dx$$의 값은?",
        choices: [
          "$$\\frac{1}{2} \\ln 2$$",
          "$$\\frac{1}{3} \\ln 2$$",
          "$$\\frac{1}{4} \\ln 2$$",
          "$$\\frac{1}{5} \\ln 2$$",
        ],
        answer: "①",
      },
      {
        question:
          "정적분 $$\\int_{0}^{\\frac{\\pi}{3}} \\sec^3 x \\, dx$$의 값은?",
        choices: [
          "$$\\sqrt{3} + \\frac{1}{2} \\ln (2 - \\sqrt{3})$$",
          "$$\\sqrt{3} + \\ln (1 + \\sqrt{3})$$",
          "$$\\sqrt{3} + \\ln (2 + \\sqrt{3})$$",
          "$$\\sqrt{3} + \\frac{1}{2} \\ln (1 + \\sqrt{3})$$",
          "$$\\sqrt{3} + \\frac{1}{2} \\ln (2 + \\sqrt{3})$$",
        ],
        answer: "⑤",
      },
      {
        question:
          "정적분 $$\\int_{0}^{\\frac{\\pi}{4}} (1 + \\tan^2 x) \\tan x \\, dx$$의 값은?",
        choices: ["$$1$$", "$$\\frac{1}{2}$$", "$$\\frac{1}{3}$$", "$$2$$"],
        answer: "②",
      },
    ],
    82: [
      {
        question:
          "상수 $$a, b, c$$에 대하여 다음의 식이 성립할 때, 합 $$a + b + c$$의 값은?\n$$\\int \\left( 2x + \\frac{1}{x} \\right) \\ln x \\, dx = ax^2 \\ln x + b (\\ln x)^2 + cx^2 + \\text{(적분상수)}$$",
        choices: [
          "$$-1$$",
          "$$-\\frac{1}{2}$$",
          "$$0$$",
          "$$\\frac{1}{2}$$",
          "$$1$$",
        ],
        answer: "⑤",
      },
      {
        question:
          "양수 $$a$$에 대하여 $$\\int_{0}^{a} \\sinh x \\, dx = 2$$일 때, $$\\int_{0}^{a} \\tanh x \\, dx$$의 값은?",
        choices: ["$$1$$", "$$\\ln 2$$", "$$\\ln 3$$", "$$2$$"],
        answer: "③",
      },
      {
        question:
          "$$\\int_{0}^{a} \\sin x (1 + \\cos x) \\, dx = 2$$일 때, $$a$$의 값은? (단, $$0 \\leq a \\leq \\pi$$)",
        choices: [
          "$$\\frac{\\pi}{4}$$",
          "$$\\frac{\\pi}{2}$$",
          "$$\\frac{3\\pi}{4}$$",
          "$$\\pi$$",
        ],
        answer: "④",
      },
    ],
    83: [
      {
        question:
          "정적분 $$\\int_{0}^{\\frac{\\pi}{3}} \\sec^{2021} x \\tan x \\, dx$$의 값은?",
        choices: [
          "$$2^{2020} - 1$$",
          "$$2^{2020} + 1$$",
          "$$\\frac{2^{2021} - 1}{2021}$$",
          "$$\\frac{2^{2021} + 1}{2021}$$",
        ],
        answer: "③",
      },
      {
        question:
          "$$\\int_{0}^{\\sqrt{\\frac{\\pi}{2}}} x \\cos^3 (x^2) \\sin(x^2) \\, dx$$는?",
        choices: [
          "$$-\\frac{1}{4}$$",
          "$$-\\frac{1}{8}$$",
          "$$0$$",
          "$$\\frac{1}{8}$$",
          "$$\\frac{1}{4}$$",
        ],
        answer: "④",
      },
      {
        question:
          "적분 $$\\int_{0}^{\\frac{\\pi}{3}} \\tan^3 x \\sec^5 x \\, dx$$의 값은?",
        choices: [
          "$$\\frac{412}{35}$$",
          "$$\\frac{414}{35}$$",
          "$$\\frac{416}{35}$$",
          "$$\\frac{418}{35}$$",
          "$$\\frac{84}{7}$$",
        ],
        answer: "④",
      },
    ],
    84: [
      {
        question:
          "함수 $$f$$가 구간 $$[1, 2]$$에서 연속이고 $$\\int_{1}^{2} x^k f(x) dx = 2 + k^2 \\quad (k = 0, 1, 2)$$를 만족시킬 때, $$\\int_{1}^{4} f(\\sqrt{x}) dx$$의 값은?",
        choices: ["3", "4", "6", "8", "11"],
        answer: "③",
      },
      {
        question:
          "정적분 $$\\int_{7}^{62} \\frac{dx}{\\sqrt{1 + \\sqrt{2 + x}}}$$의 값은?",
        choices: ["$$\\frac{52}{3}$$", "$$\\frac{64}{3}$$", "$$52$$", "$$64$$"],
        answer: "②",
      },
      {
        question:
          "다음 정적분 $$\\int_{1}^{5} \\frac{1}{\\sqrt{t^2 - 6t + 13}} \\, dt$$의 값은?",
        choices: [
          "$$\\ln (3 + 2\\sqrt{2})$$",
          "$$\\ln (1 + \\sqrt{2})$$",
          "$$\\ln (3 - \\sqrt{2})$$",
          "$$\\ln (2 + \\sqrt{2})$$",
        ],
        answer: "①",
      },
      {
        question:
          "정적분 $$\\int_{-2}^{-1} \\frac{x}{(x^2 + 4x + 5)^2} \\, dx$$의 값은?",
        choices: [
          "$$-\\frac{1}{4} (\\pi + 1)$$",
          "$$-\\frac{\\pi}{2} + \\frac{1}{2} \\ln 2$$",
          "$$-\\frac{1}{2}(\\pi + 1)$$",
          "$$-\\pi + \\ln 2$$",
        ],
        answer: "①",
      },
    ],
    85: [
      {
        question: "$$\\int_{1}^{2} \\frac{\\sqrt{x^2 - 1}}{x} \\, dx$$의 값은?",
        choices: [
          "$$\\sqrt{3} - \\frac{\\pi}{3}$$",
          "$$\\sqrt{3} - \\frac{\\pi}{6}$$",
          "$$2\\sqrt{3} - \\frac{\\pi}{3}$$",
          "$$2\\sqrt{3} - \\frac{\\pi}{6}$$",
        ],
        answer: "①",
      },
      {
        question:
          "정적분 $$\\int_{0}^{\\frac{1}{\\sqrt{2}}} x \\sqrt{1 - x^4} \\, dx$$를 계산하면?",
        choices: [
          "$$\\frac{1}{4} \\left( \\frac{\\pi}{6} + \\frac{\\sqrt{2}}{4} \\right)$$",
          "$$\\frac{1}{4} \\left( \\frac{\\pi}{6} - \\frac{\\sqrt{2}}{4} \\right)$$",
          "$$\\frac{1}{4} \\left( \\frac{\\pi}{6} + \\frac{\\sqrt{3}}{4} \\right)$$",
          "$$\\frac{1}{4} \\left( \\frac{\\pi}{6} - \\frac{\\sqrt{3}}{4} \\right)$$",
        ],
        answer: "③",
      },
      {
        question:
          "정적분 $$\\int_{\\frac{1}{2}}^{1} \\sqrt{\\frac{1}{x}- 1} \\, dx$$ 의 값을 구하면?",
        choices: [
          "$$\\frac{\\pi}{4} - \\frac{1}{2}$$",
          "$$\\frac{\\pi}{3} - \\frac{1}{2}$$",
          "$$\\frac{\\pi}{4} + \\frac{1}{2}$$",
          "$$\\frac{\\pi}{3} + \\frac{1}{2}$$",
        ],
        answer: "①",
      },
      {
        question:
          "$$\\int_{0}^{1} \\sqrt{\\frac{1 - x}{1 + x}} \\, dx$$의 값은?",
        choices: [
          "$$-1 - \\frac{\\pi}{2}$$",
          "$$-1 + \\frac{\\pi}{2}$$",
          "$$1 - \\frac{\\pi}{2}$$",
          "$$1 + \\frac{\\pi}{2}$$",
        ],
        answer: "②",
      },
    ],
    86: [
      {
        question:
          "$$f(1) = 1,\\ f(4) = 0,\\ f'(1) = 3,\\ f'(4) = 4$$이고 $$f''$$이 연속일 때, 정적분 $$\\int_{1}^{4} x f''(x) \\, dx$$의 값은?",
        choices: ["12", "13", "14", "15", "16"],
        answer: "③",
      },
      {
        question:
          "함수 $$f_n(x) = n|x|$$에 대하여 $$\\lim_{n \\to \\infty} \\int_{-1}^{1} \\{ f_n(x) - f_{n-1}(x) \\}^2 dx$$를 구하면?",
        choices: [
          "$$0$$",
          "$$\\frac{1}{2}$$",
          "$$\\frac{2}{3}$$",
          "$$1$$",
          "존재하지 않는다.",
        ],
        answer: "③",
      },
      {
        question:
          "적분 $$\\int_{0}^{1} \\frac{1}{(x+1)(x+2)(x+3)(x+4)} \\, dx$$의 값은?",
        choices: [
          "$$2\\ln2 - \\ln3 - \\frac{1}{6}\\ln5$$",
          "$$\\ln2 + \\ln3 - \\frac{1}{6}\\ln5$$",
          "$$\\ln2 - \\ln3 + \\frac{1}{6}\\ln5$$",
          "$$2\\ln2 - \\ln3 + \\frac{1}{6}\\ln5$$",
          "$$\\ln2 + \\ln3 + \\frac{1}{6}\\ln5$$",
        ],
        answer: "①",
      },
    ],
    87: [
      {
        question:
          "미분가능한 함수 $$f : \\left( -\\frac{\\pi}{2}, \\frac{\\pi}{2} \\right) \\to \\mathbb{R}$$에 대하여 곡선 $$y = f(x)$$가 점 $$\\left( \\frac{\\pi}{4}, \\frac{3}{2} \\right)$$을 지나고, 이 곡선 위의 임의의 점 $$(x, f(x))$$에서의 접선의 기울기가 $$\\frac{\\tan x}{\\sin 2x}$$일 때, $$f\\left( \\frac{\\pi}{3} \\right)$$의 값은?",
        choices: [
          "$$\\sqrt{3} + 1$$",
          "$$\\sqrt{3} - 1$$",
          "$$\\frac{\\sqrt{3}}{2} + 1$$",
          "$$\\frac{\\sqrt{3}}{2} - 1$$",
        ],
        answer: "③",
      },
      {
        question:
          "함수 $$f(t) = \\begin{cases} 0 ,& -\\pi \\leq t < 0 \\\\ 5 \\sin t ,& 0 \\leq t \\leq \\pi \\end{cases}$$ 에 대하여 $$a_n = \\frac{1}{\\pi} \\int_{-\\pi}^{\\pi} f(t) \\cos nt \\, dt$$라 할 때, $$a_2 + a_4$$의 값은?",
        choices: [
          "$$-\\frac{4}{\\pi}$$",
          "$$-\\frac{3}{\\pi}$$",
          "$$-\\frac{2}{\\pi}$$",
          "$$-\\frac{1}{\\pi}$$",
        ],
        answer: "①",
      },
      {
        question:
          "다음 적분값을 계산하시오.\n$$\\int_{1}^{e} \\frac{(\\ln x)^2}{x(1 + (\\ln x)^3)} \\, dx$$",
        choices: [
          "$$\\frac{\\ln 2}{3}$$",
          "$$\\ln 2$$",
          "$$\\frac{\\ln(1 + e^3) - \\ln 2}{3}$$",
          "$$\\ln(1 + e^3) - \\ln 2$$",
          "$$\\frac{1}{2e}$$",
        ],
        answer: "①",
      },
    ],
    88: [
      {
        question:
          "정적분 $$\\int_{1}^{2} x \\arcsin\\left(\\frac{1}{x}\\right) dx$$ 를 구하면?",
        choices: [
          "$$\\frac{\\pi}{16} + \\frac{\\sqrt{3}}{2}$$",
          "$$\\frac{\\pi}{12} + \\frac{\\sqrt{3}}{2}$$",
          "$$\\frac{\\pi}{12} + \\frac{\\sqrt{3}}{3}$$",
          "$$\\frac{\\pi}{8} + \\frac{\\sqrt{3}}{3}$$",
          "$$\\frac{\\pi}{8} + \\frac{\\sqrt{3}}{2}$$",
        ],
        answer: "②",
      },
      {
        question: "정적분 $$\\int_{0}^{1} \\pi (\\arccos x)^2 dx$$ 를 구하면?",
        choices: [
          "$$\\pi^2 - 2\\pi$$",
          "$$\\pi^2 - \\pi$$",
          "$$\\pi^2$$",
          "$$\\pi^2 + \\pi$$",
          "$$\\pi^2 + 2\\pi$$",
        ],
        answer: "①",
      },
      {
        question: "정적분 $$\\int_{0}^{1} \\sin(2 \\arccos x) dx$$의 값은?",
        choices: [
          "$$\\frac{2}{3}$$",
          "$$\\frac{7}{12}$$",
          "$$\\frac{1}{2}$$",
          "$$\\frac{5}{12}$$",
          "$$\\frac{1}{3}$$",
        ],
        answer: "①",
      },
    ],
    89: [
      {
        question: "정적분 $$\\int_{0}^{1} x^5 e^{x^2} dx$$ 의 값은?",
        choices: [
          "$$\\frac{1}{2}e - 1$$",
          "$$\\frac{1}{2}e$$",
          "$$e - 1$$",
          "$$e$$",
        ],
        answer: "①",
      },
      {
        question: "$$\\int_{0}^{1} x^5 e^{-x^3} dx$$ 의 값은?",
        choices: [
          "$$\\frac{1}{3}\\left(1 - \\frac{2}{e}\\right)$$",
          "$$-\\frac{1}{3e}$$",
          "$$\\frac{1}{3e}$$",
          "$$\\frac{1}{3}\\left(1 + \\frac{2}{e}\\right)$$",
        ],
        answer: "①",
      },
      {
        question:
          "정적분 $$\\int_{\\ln(1/\\pi)}^{\\ln(2/\\pi)} \\frac{1 + \\cos(e^{-x})}{e^x} dx$$ 의 값은?",
        choices: [
          "$$\\frac{\\pi}{2} + 1$$",
          "$$1 - \\frac{\\pi}{4}$$",
          "$$2 - \\frac{\\pi}{2}$$",
          "$$\\frac{\\pi}{2} - 1$$",
        ],
        answer: "④",
      },
    ],
    90: [
      {
        question:
          "$$\\frac{\\int_{0}^{\\pi/2} (\\cos x)^{2020} dx}{\\int_{0}^{\\pi/2} (\\cos x)^{2018} dx}$$ 의 값을 계산하시오.",
        choices: [
          "$$\\frac{2019}{2020}$$",
          "$$-\\frac{2019}{2020}$$",
          "$$\\frac{2019}{2}$$",
          "$$-\\frac{2019}{2}$$",
          "$$\\frac{2020}{2018}$$",
        ],
        answer: "①",
      },
      {
        question:
          "$$\\frac{\\int_{0}^{1} (1 - x^2)^{2020} dx}{\\int_{0}^{1} (1 - x^2)^{2019} dx}$$ 의 값은?",
        choices: [
          "$$\\frac{1010}{1011}$$",
          "$$\\frac{2019}{2020}$$",
          "$$\\frac{2020}{2021}$$",
          "$$\\frac{4039}{4040}$$",
          "$$\\frac{4040}{4041}$$",
        ],
        answer: "⑤",
      },
      {
        question:
          "정적분 $$\\int_{0}^{\\frac{1}{2}} \\frac{x^3 + x}{(x^2 - 1)^3} dx$$ 를 구하면?",
        choices: [
          "$$-\\frac{1}{9}$$",
          "$$-\\frac{2}{9}$$",
          "$$-\\frac{1}{3}$$",
          "$$-\\frac{4}{9}$$",
          "$$-\\frac{5}{9}$$",
        ],
        answer: "②",
      },
    ],
    91: [
      {
        question: "$$\\int_{1}^{2} \\frac{3x + 1}{x^2 + x} dx$$ 의 값은?",
        choices: [
          "$$\\ln 3$$",
          "$$\\ln \\frac{7}{2}$$",
          "$$\\ln 4$$",
          "$$\\ln \\frac{9}{2}$$",
          "$$\\ln 5$$",
        ],
        answer: "④",
      },
      {
        question:
          "정적분 $$\\int_{0}^{1} \\frac{x^2 - 2x}{(x + 1)^3} dx$$ 의 값은?",
        choices: [
          "$$-\\frac{7}{8} + \\ln 2$$",
          "$$-\\frac{5}{4} + \\ln 2$$",
          "$$\\frac{7}{8} + \\ln 2$$",
          "$$\\frac{9}{8} + \\ln 2$$",
        ],
        answer: "①",
      },
      {
        question: "정적분 $$\\int_{0}^{1} \\frac{xe^x}{(x+1)^2} dx$$ 의 값은?",
        choices: [
          "$$e - 1$$",
          "$$e^2 - 1$$",
          "$$\\frac{e}{2} - 1$$",
          "$$\\frac{e}{4} - \\frac{1}{2}$$",
        ],
        answer: "③",
      },
    ],
    92: [
      {
        question: "$$\\int_{0}^{1} \\ln(1 + x^2) dx$$ 의 값은?",
        choices: [
          "$$\\ln 2 - 2 + \\frac{\\pi}{2}$$",
          "$$\\ln 2 - 2 + \\pi$$",
          "$$\\ln 2 + 2 - \\pi$$",
          "$$\\ln 2 + 2 - \\frac{\\pi}{2}$$",
        ],
        answer: "①",
      },
      {
        question: "정적분 $$\\int_{0}^{1} \\tanh^3 x dx$$를 구하면?",
        choices: [
          "$$\\ln(\\cosh 1) - \\frac{\\tanh^2 1}{2}$$",
          "$$\\ln(\\cosh 1) + \\frac{\\tanh^2 1}{2}$$",
          "$$\\frac{\\ln(\\cosh 1)}{2} - \\frac{\\tanh^2 1}{3}$$",
          "$$\\frac{\\ln(\\cosh 1)}{2} + \\frac{\\tanh^2 1}{3}$$",
          "$$\\ln(\\cosh 1) - \\frac{\\tanh^2 1}{3}$$",
        ],
        answer: "①",
      },
      {
        question:
          "함수 $$f(x)$$가 다음과 같다. $$f(x) = \\begin{cases} \\frac{e^x + 1}{e^x + x}, & 0 \\le x \\le 1 \\\\ \\frac{(\\ln x)^2}{x + 1}, & x \\ge 1 \\end{cases}$$ 이 때, $$\\int_{0}^{2} f(x) dx$$를 구하시오.",
        choices: [
          "$$\\ln(e^2 + 2) + \\frac{(\\ln 2)^3}{3} + 1$$",
          "$$\\ln(e + 1) + \\frac{(\\ln 2)^3}{3} + 1$$",
          "$$\\frac{e^2 + 1}{e^2 + 2} + \\frac{(\\ln 2)^2}{2}$$",
          "$$-\\infty$$",
        ],
        answer: "②",
      },
    ],
    93: [
      {
        question:
          "정적분 $$\\int_{1}^{2} \\frac{x^2 - 1}{x^3 + x} dx$$ 의 값은?",
        choices: [
          "$$\\ln\\left(\\frac{5}{4}\\right)$$",
          "$$\\ln\\left(\\frac{3}{2}\\right)$$",
          "$$\\ln\\left(\\frac{7}{4}\\right)$$",
          "$$\\ln 2$$",
          "$$\\ln\\left(\\frac{9}{4}\\right)$$",
        ],
        answer: "①",
      },
      {
        question:
          "정적분 $$\\int_{0}^{\\sqrt{2}} x^3 \\sqrt{x^2 + 2} dx$$ 의 값은?",
        choices: [
          "$$\\frac{8}{15}(2 + \\sqrt{2})$$",
          "$$\\frac{8}{15}(2 - \\sqrt{2})$$",
          "$$\\frac{16}{15}(2 + \\sqrt{2})$$",
          "$$\\frac{16}{15}(2 - \\sqrt{2})$$",
        ],
        answer: "①",
      },
      {
        question:
          "적분 $$\\int_{\\frac{1}{2}}^{1} (\\arccos x)^2 dx$$ 를 구하면?",
        choices: [
          "$$\\frac{\\pi}{6} - 2 + \\sqrt{3} - \\frac{\\pi^2}{72}$$",
          "$$\\frac{\\pi}{6} + 2 + \\sqrt{3} - \\frac{\\pi^2}{72}$$",
          "$$\\frac{\\sqrt{3}}{3}\\pi + 1 - \\frac{\\pi^2}{18}$$",
          "$$\\frac{\\sqrt{3}}{3}\\pi - 1 - \\frac{\\pi^2}{18}$$",
          "$$\\frac{\\sqrt{3}}{3}\\pi - 1 + \\frac{\\pi^2}{18}$$",
        ],
        answer: "④",
      },
    ],
    94: [
      {
        question:
          "적분값 $$\\int_{0}^{1} \\ln(1 + e^x) dx - \\int_{-1}^{0} \\ln(1 + e^x) dx$$ 를 구하면?",
        choices: [
          "$$-\\frac{e}{2}$$",
          "$$-\\frac{1}{2}$$",
          "$$0$$",
          "$$\\frac{1}{2}$$",
          "$$\\frac{e}{2}$$",
        ],
        answer: "④",
      },
      {
        question:
          "$$\\int_{0}^{\\infty} \\frac{x + x \\ln x}{1 + x^4} dx$$ 의 값은?",
        choices: [
          "$$\\frac{\\pi - 2}{4}$$",
          "$$\\frac{\\pi - 1}{4}$$",
          "$$\\frac{\\pi}{4}$$",
          "$$\\frac{\\pi + 1}{4}$$",
        ],
        answer: "③",
      },
      {
        question:
          "이차함수 $$f(x)$$에 대하여 부정적분 $$\\int \\frac{f(x)}{x^2(x+1)^3} dx$$ 가 유리함수이다. $$f(0) = 1$$ 일 때, $$f'(0)$$의 값은?",
        choices: ["1", "2", "3", "4", "5"],
        answer: "③",
      },
      {
        question: "이차함수$$f(x)$$가 다음을 만족시킨다. $$f'(0)$$의 값은?",
        example:
          "(가) $$f(0) = 9$$ ,             \n\n(나) $$\\int \\frac{f(x)}{x^2(x+3)^2} dx$$ 는 유리함수이다.",
        choices: ["$$-6$$", "$$-3$$", "$$0$$", "$$3$$", "$$6$$"],
        answer: "⑤",
      },
    ],
    102: [
      {
        question:
          "다음을 계산하시오. $$\\lim_{n \\to \\infty} \\sum_{k=n}^{3n} \\frac{1}{n+k}$$",
        choices: [],
        answer: "$$\\ln 2$$"
      },
      {
        question:
          "다음을 계산하시오. $$\\lim_{n \\to \\infty} \\sum_{k=1}^{n} \\frac{1}{2n + k} \\ln\\left(2 + \\frac{k}{n}\\right)$$",
        choices: [],
        answer: "$$\\frac{1}{2}\\{(\\ln 3)^2 - (\\ln 2)^2\\}$$" 
      },
      {
        question:
          "다음을 계산하시오. $$\\lim_{n \\to \\infty} \\frac{7}{\\sqrt[3]{n^2}} \\sum_{k=1}^{n} \\frac{1}{\\sqrt[3]{n + 7k}}$$",
        choices: [],
        answer: "$$\\frac{9}{2}$$" 
      },
      {
        question:
          "다음을 계산하시오. $$\\lim_{n \\to \\infty}n \\left( \\frac{1}{n^2 + 1^2} + \\frac{1}{n^2 + 2^2} + \\cdots + \\frac{1}{n^2 + n^2} \\right)$$",
        choices: [],
        answer: "$$\\frac{\\pi}{4}$$" 
      },
      {
        question:
          "다음을 계산하시오. $$\\lim_{n \\to \\infty} \\left( \\frac{1}{\\sqrt{n^2 + 1^2}} + \\frac{1}{\\sqrt{n^2 + 2^2}} + \\cdots + \\frac{1}{\\sqrt{n^2 + n^2}} \\right)$$",
        choices: [],
        answer: "$$\\ln(1 + \\sqrt{2})$$" 
      },
      {
        question:
          "다음을 계산하시오. $$\\lim_{n \\to \\infty} \\left( \\frac{1}{n+2} + \\frac{1}{n+4} + \\frac{1}{n+6} + \\cdots + \\frac{1}{n+2n} \\right)$$",
        choices: [],
        answer: "$$\\frac{1}{2}\\ln 3$$" 
      },
    ],
    104: [
      {
        question:
          "다음을 계산하시오. $$f(x) = \\int_{0}^{x^2 + x} \\sin(e^t) dt$$ 의 $$f'(0)$$은?",
        choices: [],
        answer: "$$\\sin 1$$" 
      },
      {
        question:
          "다음을 계산하시오. $$y = \\int_{\\tan^{-1} x}^{\\frac{\\pi}{4}} e^{\\sqrt{t}} dt$$ 일 때, $$x = 1$$에서 $$\\frac{dy}{dx}$$ 를 구하시오.",
        choices: [],
        answer: "$$-\\frac{e^{\\sqrt{\\pi}}}{2}$$" 
      },
      {
        question:
          "다음을 계산하시오. $$f(x) = \\int_{0}^{x} (x - t) \\sin t \\ dt$$ 에서 $$f'(\\pi)$$의 값은?",
        choices: [],
        answer: "$$2$$" 
      },
      {
        question:
          "다음을 계산하시오. $$f(x) = \\int_{0}^{x} (e^{x} - t) e^t dt$$ 에서 $$f'(0)$$의 값은?",
        choices: [],
        answer: "$$1$$" 
      },
      {
        question:
          "다음을 계산하시오. $$y > 0$$일 때, $$\\frac{d}{dy} \\int_{0}^{1} \\frac{e^x - e^{-xy}}{x} dx$$ 를 계산하면?",
        choices: [],
        answer: "$$\\frac{1 - e^{-y}}{y}$$" 
      },
      {
        question:
          "다음을 계산하시오. 함수 $$f(x) = \\int_{0}^{x^2 + x - 2} \\sqrt{x + t^2} dt$$일 때, $$f'(1)$$의 값은?",
        choices: [],
        answer: "$$3$$"
      },
    ],
    105: [
      {
        question:
          "다음 극한 $$\\lim_{x \\to 2} \\frac{1}{x - 2} \\int_{2}^{x} e^{t^2} dt$$ 값은?",
        choices: [],
        answer: "$$e^4$$" 
      },
      {
        question:
          "다음 극한 $$\\lim_{x \\to \\pi} \\frac{1}{x - \\pi} \\int_{\\pi}^{x} \\frac{\\sin t \\cos t}{t + \\pi} dt$$ 값을 구하면?",
        choices: [],
        answer: "$$0$$" 
      },
      {
        question:
          "다음 극한 $$\\lim_{x \\to 0^+} \\frac{1}{x} \\int_{x}^{3x} \\frac{\\sin 3t}{t} dt$$ 값을 구하면?",
        choices: [],
        answer: "$$6$$" 
      },
      {
        question:
          "구간 $$[0, 3]$$에서 $$f(x) = x^2 - 2x + 2$$일 때, $$f(x)$$의 평균값은?",
        choices: [],
        answer: "$$2$$" 
      },
      {
        question:
          "실수 $$a, b$$가 $$0 \\le a < b \\le 1$$을 만족할 때, $$\\frac{1}{b - a} \\int_{a}^{b} \\frac{1}{1 + x^3} dx$$의 값이 될 수 있는 것은?",
        choices: ["$$1/3$$", "$$2/3$$", "$$4/3$$", "$$8/3$$"],
        answer: "②",
      },
    ],
    107: [
      {
        question:
          "다음을 계산하시오. $$\\int_{-\\frac{\\pi}{3}}^{\\frac{\\pi}{3}} \\cos x + x \\sin^2 x + x^3 \\cos x\\, dx$$의 값을 계산하시오.",
        choices: [],
        answer: "$$\\sqrt{3}$$" 
      },
      {
        question:
          "다음을 계산하시오. $$\\int_{-1}^{1} \\left( x^5 - 6x^9 + \\frac{\\sin x}{(1+x^4)^2} + xe^{-x^2} \\right) dx$$의 값은?",
        choices: [],
        answer: "$$0$$" 
      },
      {
        question:
          "다음을 계산하시오. $$\\int_{\\frac{1}{2}}^{\\frac{1}{2}} \\sin^{-1} x\\, dx$$의 값을 계산하시오.",
        choices: [],
        answer: "$$0$$" 
      },
      {
        question:
          "다음을 계산하시오. $$\\int_{-\\frac{1}{2}}^{\\frac{1}{2}} \\cos^{-1} x\\, dx$$의 값을 계산하시오.",
        choices: [],
        answer: "$$\\frac{\\pi}{2}$$"
      },
      {
        question:
          "다음을 계산하시오. $$k = \\int_{0}^{2\\pi} |\\sin x| dx$$일 때, $$3^k - 1$$의 값은?",
        choices: [],
        answer: "$$80$$" 
      },
      {
        question:
          "다음을 계산하시오. $$\\int_{1}^{2} \\lfloor x^2 \\rfloor dx$$의 값은? (단, $$\\lfloor t \\rfloor$$는 $$t$$보다 크지 않은 최대의 정수값을 나타낸다.)",
        choices: [],
        answer: "$$5 - \\sqrt{2} - \\sqrt{3}$$" 
      },
    ],
    108: [
      {
        question:
          "함수 $$y = f(x) = x^3 + x$$의 역함수를 $$x = f^{-1}(y)$$라 할 때 $$\\int_0^2 f^{-1}(y)dy$$의 값은?",
        choices: [],
        answer: "$$\\frac{5}{4}$$" 
      },
      {
        question:
          "구간 $$[1,3]$$에서 정의된 연속함수 $$f$$가 단조증가하고, $$f(1)=2$$, $$f(3)=5$$, $$\\int_1^3 f(x)dx = \\frac{9}{2}$$의 조건을 만족할 때, $$f$$의 역함수 $$f^{-1}$$에 관한 정적분 $$\\int_2^5 f^{-1}(y)dy$$의 값은?",
        choices: [],
        answer: "$$\\frac{17}{2}$$" 
      },
      {
        question:
          "$$f(x) = 1 + x + x^3$$일 때 $$\\int_1^3 \\pi \\left\\{ f^{-1}(y) \\right\\}^2 dy$$의 값은?",
        choices: [],
        answer: "$$\\frac{14}{15}\\pi$$" 
      },
      {
        question:
          "$$\\int_0^{\\frac{\\pi}{2}} \\frac{\\sin^n x}{\\sin^n x + \\cos^n x} dx$$의 값을 계산하시오.",
        choices: [],
        answer: "$$\\frac{\\pi}{4}$$" 
      },
      {
        question:
          "$$\\int_0^{2020} \\frac{\\sqrt{2020 - x}}{\\sqrt{x} + \\sqrt{2020 - x}} dx$$의 값을 계산하시오.",
        choices: [],
        answer: "$$1010$$"
      },
    ],
    109: [
      {
        question:
          "극한 $$\\lim_{n \\to \\infty} \\sum_{k=1}^{n} \\frac{n}{n^2 + k^2}$$의 값은?",
        choices: [
          "$$\\frac{\\pi}{4}$$",
          "$$\\frac{\\pi}{3}$$",
          "$$\\frac{\\pi}{2}$$",
          "$$2\\pi$$",
        ],
        answer: "①",
      },
      {
        question:
          "$$\\lim_{n \\to \\infty} \\sum_{k=1}^{n} \\frac{k n^2}{n^4 + k^4}$$의 값은?",
        choices: [
          "$$\\frac{\\pi}{10}$$",
          "$$\\frac{\\pi}{9}$$",
          "$$\\frac{\\pi}{8}$$",
          "$$\\frac{\\pi}{7}$$",
        ],
        answer: "③",
      },
      {
        question:
          "$$a_n = \\sum_{k=1}^{n} \\frac{\\pi}{2n} \\sin\\left(\\frac{k\\pi}{n}\\right)$$일 때, $$\\lim_{n \\to \\infty} a_n$$의 값은?",
        choices: ["$$0$$", "$$1$$", "$$\\frac{\\pi}{2}$$", "$$\\pi$$"],
        answer: "②",
      },
    ],
    110: [
      {
        question:
          "다음 극한 $$\\lim_{n \\to \\infty} \\sum_{k=1}^{n} \\frac{2}{n} \\sqrt{1 + \\frac{3k}{n}}$$의 값은?",
        choices: [
          "$$\\frac{28}{9}$$",
          "$$\\frac{32}{9}$$",
          "$$\\frac{48}{9}$$",
          "$$\\frac{64}{9}$$",
        ],
        answer: "①",
      },
      {
        question:
          "극한 $$\\lim_{n \\to \\infty} \\sum_{k=1}^{n} \\frac{1}{\\sqrt{n^2 + 3kn}}$$의 값은?",
        choices: [
          "$$2$$",
          "$$\\frac{1}{3}$$",
          "$$\\frac{2}{3}$$",
          "$$\\frac{4}{3}$$",
        ],
        answer: "③",
      },
      {
        question:
          "수열 $$a_n = \\frac{1}{\\sqrt{n}} \\left( \\frac{1}{\\sqrt{1}} + \\frac{1}{\\sqrt{2}} + \\cdots + \\frac{1}{\\sqrt{n}} \\right)$$의 극한값 $$\\lim_{n \\to \\infty} a_n$$은?",
        choices: ["$$1$$", "$$\\frac{3}{2}$$", "$$2$$", "$$\\infty$$"],
        answer: "③",
      },
      {
        question:
          "극한 $$\\lim_{n \\to \\infty} \\sum_{i=1}^{n} \\frac{\\pi}{4n} \\tan \\frac{i\\pi}{4n}$$의 값은?",
        choices: ["$$\\sqrt{2}$$", "$$2$$", "$$\\ln\\sqrt{2}$$", "$$\\ln 2$$"],
        answer: "③",
      },
    ],
    111: [
      {
        question:
          "함수 $$f$$가 자연수 $$n$$에 대하여 $$f(n) = \\frac{1}{n} \\sum_{k = 1}^{n} \\left[ 1 + \\left( \\frac{k\\sqrt{\\pi}}{n} \\right) \\sin \\pi \\left( \\frac{k}{n} \\right) \\right]^2$$ 와 같이 정의될 때, $$\\lim_{n \\to \\infty} f(n)$$의 값은?",
        choices: [
          "$$\\frac{1 - \\sqrt{\\pi}}{\\sqrt{\\pi}}$$",
          "$$\\frac{1 + \\sqrt{\\pi}}{\\sqrt{\\pi}}$$",
          "$$\\frac{1 + \\sqrt{\\pi}}{\\sqrt{2}}$$",
          "$$\\frac{1 - \\sqrt{\\pi}}{\\sqrt{2}}$$",
        ],
        answer: "②",
      },
      {
        question:
          "함수 $$f(x) = e^x$$와 양의 정수 $$n$$에 대하여 $$g_n(x) = \\sum_{k=1}^{n} f\\left( \\frac{k}{n} x \\right) \\frac{x^2}{n}$$ 이라고 정의할 때, 극한 $$\\lim_{n \\to \\infty} g_n'(1)$$의 값은?",
        choices: [
          "$$e$$",
          "$$2e - 1$$",
          "$$3e - 2$$",
          "$$4e - 3$$",
          "$$5e - 4$$",
        ],
        answer: "②",
      },
      {
        question:
          "$$\\lim_{n \\to \\infty} \\sum_{k=n+1}^{2n} \\frac{3\\sqrt{k}}{n\\sqrt{n}}$$의 값은?",
        choices: [
          "$$\\sqrt{2} - 1$$",
          "$$2\\sqrt{2} - 1$$",
          "$$2\\sqrt{2} - 2$$",
          "$$4\\sqrt{2} - 2$$",
        ],
        answer: "④",
      },
      {
        question:
          "$$\\lim_{n \\to \\infty} \\left( \\frac{8}{n} + \\frac{8n}{n^2 + 1} + \\frac{8n}{n^2 + 4} + \\frac{8n}{n^2 + 9} + \\cdots + \\frac{8n}{2n^2 - 2n + 1} \\right)$$의 값은?",
        choices: [
          "$$\\pi$$",
          "$$2\\pi$$",
          "$$3\\pi$$",
          "$$4\\pi$$",
          "$$5\\pi$$",
        ],
        answer: "②",
      },
    ],
    112: [
      {
        question:
          "$$f(x) = \\int_{-1}^{x} e^{t^2} dt$$ 이고 곡선 $$y = f(x)$$ 위의 점 $$P$$의 $$x$$좌표가 $$-1$$일 때, 점 $$P$$에서 곡선 $$y = f(x)$$에 접하는 접선의 $$y$$절편은?",
        choices: ["$$1$$", "$$e$$", "$$2e$$", "$$4e^2$$"],
        answer: "②",
      },
      {
        question:
          "$$f(x) = \\int_{8}^{x^3} \\ln(t^2 + 4)\\,dt$$에 대하여, $$y = f(x)$$와 점 $$(2, 0)$$에서 접하는 직선의 $$y$$절편은?",
        choices: [
          "$$-4\\ln 6$$",
          "$$-2\\ln 68$$",
          "$$-48\\ln 6$$",
          "$$-24\\ln 68$$",
        ],
        answer: "④",
      },
      {
        question:
          "곡선 $$y = \\int_0^{\\sqrt{x}} \\sqrt{1 - t^2} dt$$와 $$x = \\frac{1}{2}$$에서의 접선의 방정식은?",
        choices: [
          "$$y = \\frac{1}{2}x + \\frac{\\pi}{8}$$",
          "$$y = \\frac{1}{\\sqrt{2}}x + \\frac{\\pi}{2}$$",
          "$$y = \\frac{1}{2}x + \\frac{\\pi + 2}{8}$$",
          "$$y = \\frac{1}{\\sqrt{2}}x + \\frac{\\pi - \\sqrt{2}}{2}$$",
        ],
        answer: "①",
      },
    ],
    113: [
      {
        question:
          "$$\\lim_{x \\to 0} \\frac{1}{x^3} \\left\\{ \\int_0^{x} \\frac{\\sin t}{t} dt - x \\right\\}$$의 값은?",
        choices: [
          "$$\\frac{1}{18}$$",
          "$$-\\frac{1}{18}$$",
          "$$\\frac{1}{9}$$",
          "$$-\\frac{1}{9}$$",
        ],
        answer: "②",
      },
      {
        question:
          "$$\\lim_{x \\to a} \\frac{1}{x - a} \\int_{\\sqrt{a}}^{\\sqrt{x}} te^{t} \\sin t dt$$ 를 구하시오. $$(a > 0)$$",
        choices: [
          "$$\\frac{1}{2} e^{\\sqrt{a}} \\sin \\sqrt{a}$$",
          "$$e^{\\sqrt{a}}$$",
          "$$\\sqrt{a} e^{\\sqrt{a}} \\sin \\sqrt{a}$$",
          "$$\\frac{e^{\\sqrt{a}} \\sin \\sqrt{a}}{2\\sqrt{a}}$$",
        ],
        answer: "①",
      },
      {
        question:
          "$$\\lim_{x \\to 0^+} \\frac{1}{x} \\int_{x}^{2x} \\frac{2 + \\sin t}{t} dt$$의 값은?",
        choices: ["$$\\ln 2$$", "$$1$$", "$$2$$", "$$5$$", "$$\\infty$$"],
        answer: "②",
      },
      {
        question:
          "$$f(x) = \\int_0^{2x} \\frac{1}{\\sqrt{1 + t^3}} dt$$일 때 극한 $$\\lim_{h \\to 0} \\frac{f(1 + 3h) - f(1 - h)}{h}$$의 값은?",
        choices: [
          "$$\\frac{2}{3}$$",
          "$$\\frac{4}{3}$$",
          "$$\\frac{8}{3}$$",
          "$$\\frac{16}{3}$$",
        ],
        answer: "③",
      },
    ],
    114: [
      {
        question:
          "$$\\lim_{x \\to 0} \\frac{1}{x^3} \\int_0^{\\sin x} \\tan(t^2) dt = \\frac{n}{m}$$ 이라고 할 때, $$m + n$$의 값은? (단, $$m, n$$은 서로 소인 자연수이다.)",
        choices: ["$$1$$", "$$2$$", "$$3$$", "$$4$$"],
        answer: "④",
      },
      {
        question:
          "극한 $$\\lim_{x \\to 0} \\left( \\frac{\\int_0^{x} \\sin 2t\\,dt}{\\int_0^{x^2} x^2 \\tan t\\,dt} \\right)$$의 값은?",
        choices: ["$$1$$", "$$2$$", "$$3$$", "$$4$$", "$$5$$"],
        answer: "②",
      },
      {
        question:
          "함수 $$f(x) = x + e^x - e - 1$$일 때, $$g(x) = \\frac{d}{dx}\\left(f^{-1}(x)\\right)$$라 하자. $$\\lim_{x \\to 0} \\frac{1}{x} \\int_x^{2x} g(t) dt$$의 값은?",
        choices: [
          "$$-1$$",
          "$$0$$",
          "$$\\frac{1}{1 + e}$$",
          "$$\\frac{1}{e}$$",
          "$$e$$",
        ],
        answer: "③",
      },
      {
        question:
          "$$f(x) = \\begin{cases} \\frac{1}{x^2} \\int_0^x \\sin(t^2) dt & (x \\ne 0) \\\\ 0 & (x = 0) \\end{cases}$$ 으로 정의된 함수 $$f(x)$$에 대하여 $$f'(0)$$의 값은?",
        choices: [
          "$$1$$",
          "$$\\frac{1}{2}$$",
          "$$\\frac{1}{3}$$",
          "$$\\frac{1}{4}$$",
        ],
        answer: "③",
      },
    ],
    115: [
      {
        question:
          "$$\\lim_{x \\to 1} \\frac{a}{a^{x-1} - b^{x-1}} \\int_1^x \\left( e^{c}(c+1) - ec \\right) \\, dc$$ 의 값은 얼마인가? (단, $$a, b$$는 모두 $$1$$이 아님.)",
        choices: [
          "$$0$$",
          "$$\\frac{ae}{\\ln a - \\ln b}$$",
          "$$\\frac{1}{2} \\frac{e}{\\ln a - \\ln b}$$",
          "$$\\frac{1}{2} \\frac{ae}{\\ln a - \\ln b}$$",
        ],
        answer: "②",
      },
      {
        question:
          "두 함수 $$f(x)$$와 $$g(x)$$가 $$f(x) = \\int_0^{\\tan x} \\sqrt{1 + t^2} dt$$, $$g(x) = \\int_0^{2x} f(t) dt$$를 만족시킬 때, $$g''\\left(\\frac{\\pi}{6}\\right)$$의 값은?",
        choices: ["$$20$$", "$$24$$", "$$28$$", "$$32$$"],
        answer: "④",
      },
    ],
    116: [
      {
        question:
          "함수 $$f(x) = x - \\int_0^x \\ln(x - t) dt$$에 대하여, 점 $$(1, f(1))$$에서 곡선 $$y = f(x)$$의 접선의 방정식은?",
        choices: [
          "$$y = x + 1$$",
          "$$y = x + 2$$",
          "$$y = x + 3$$",
          "$$y = 2x + 1$$",
          "$$y = 2x + 2$$",
        ],
        answer: "①",
      },
      {
        question:
          "함수 $$f(x) = \\int_0^{x^2} \\sin(xt) dt$$의 미분 $$f'(1)$$의 값은?",
        choices: [
          "$$\\cos 1 + 3\\sin 1 + 1$$",
          "$$3\\cos 1 + \\sin 1 + 1$$",
          "$$\\cos 1 + 3\\sin 1 - 1$$",
          "$$3\\cos 1 + \\sin 1 - 1$$",
          "$$\\cos 1 - 3\\sin 1 - 1$$",
        ],
        answer: "③",
      },
      {
        question:
          "함수 $$f(x)$$와 양의 실수 $$a$$가 $$2016 + \\int_{2a}^{x} \\frac{f(t)}{\\sqrt{t^2 - 3a^2}} dt = x^2$$을 만족할 때, $$f(3a)$$의 값은?",
        choices: [
          "$$3\\sqrt{6} \\times 504$$",
          "$$3\\sqrt{6} \\times 2016$$",
          "$$6\\sqrt{6} \\times 504$$",
          "$$6\\sqrt{6} \\times 2016$$",
        ],
        answer: "③",
      },
    ],
    117: [
      {
        question:
          "함수 $$f(x)$$가 $$f(x) = \\tanh x - x + \\int_0^x f'(t) \\tanh^2 t\\,dt$$를 만족시킬 때, $$f\\left(\\frac{1}{2}\\right)$$의 값은?",
        choices: [
          "$$\\frac{1 + \\cosh 1}{4}$$",
          "$$\\frac{1 - \\cosh 1}{4}$$",
          "$$\\frac{1 + \\sinh 1}{4}$$",
          "$$\\frac{1 - \\sinh 1}{4}$$",
        ],
        answer: "④",
      },
      {
        question:
          "함수 $$f(t)$$와 상수 $$a$$가 다음 등식을 만족할 때, $$a + f(4)$$의 값은?",
        example:
          "$$8 + \\int_a^x \\frac{f(t)}{t^2} dt = 2\\sqrt{x}, \\quad x > 0$$",
        choices: ["$$4$$", "$$10$$", "$$16$$", "$$24$$"],
        answer: "④",
      },
      {
        question:
          "연속함수 $$f$$가 $$\\int_1^{2x} f(t) dt = x \\sin^{-1} x$$를 만족할 때, $$f(1)$$의 값은?",
        choices: [
          "$$0$$",
          "$$\\frac{\\pi + 3\\sqrt{3}}{12}$$",
          "$$\\frac{\\pi + 2\\sqrt{3}}{12}$$",
          "$$\\frac{\\pi + \\sqrt{3}}{6}$$",
        ],
        answer: "③",
      },
      {
        question:
          "양의 실수 $$x$$에 대하여 함수 $$F(x), f(x)$$는 다음 세 조건을 만족한다. 이 때, $$f\\left(\\frac{\\pi}{4}\\right)$$의 값은?",
        example:
          "① $$F'(x) = f(x)$$ <br> ② $$F(x) = x f(x) + x \\sin x + \\cos x$$ <br> ③ $$f\\left(\\frac{\\pi}{2}\\right) = -1$$",
        choices: [
          "$$-\\frac{\\sqrt{3}}{2}$$",
          "$$-\\frac{\\sqrt{2}}{2}$$",
          "$$\\frac{\\sqrt{2}}{2}$$",
          "$$\\frac{\\sqrt{3}}{2}$$",
        ],
        answer: "②",
      },
    ],
    118: [
      {
        question:
          "$$\\alpha \\geq -1$$일 때, 정적분 $$\\int_0^1 \\frac{x^\\alpha - 1}{\\ln x} dx$$의 값을 구하면?",
        choices: [
          "$$\\alpha + 1$$",
          "$$\\alpha \\ln(\\alpha + 1)$$",
          "$$\\ln(\\alpha + 1)$$",
          "$$\\frac{\\ln(\\alpha + 1)}{\\alpha}$$",
        ],
        answer: "③",
      },
      {
        question:
          "함수 $$f(x) = \\int_{\\sin x}^{1 + x} e^{t^2 + 2xt} dt$$일 때, $$f'(0)$$의 값은?",
        choices: ["$$e - 1$$", "$$2e - 2$$", "$$e + 2$$", "$$2e + 1$$"],
        answer: "②",
      },
      {
        question:
          "$$f(x) = \\int_1^{x^2} \\sin(x + t^2) dt$$일 때, $$f'(1)$$의 값은?",
        choices: [
          "$$0$$",
          "$$\\sin 1$$",
          "$$2\\sin 1$$",
          "$$\\sin 2$$",
          "$$2\\sin 2$$",
        ],
        answer: "⑤",
      },
      {
        question: "$$f(x) = \\int_x^1 e^{t^2 + xt} dt$$일 때, $$f'(0)$$은?",
        choices: [
          "$$e \\cos(1) - 2$$",
          "$$-2 + e$$",
          "$$\\frac{e}{2} - \\frac{3}{2}$$",
          "$$\\frac{e}{2} + \\frac{1}{2}$$",
          "$$\\frac{e}{2} - \\frac{1}{2}$$",
        ],
        answer: "②",
      },
    ],
    119: [
      {
        question: "$$\\int_0^{\\pi} |\\sin x - \\sqrt{3} \\cos x| dx$$의 값은?",
        choices: ["$$1$$", "$$2$$", "$$3$$", "$$4$$", "$$5$$"],
        answer: "④",
      },
      {
        question:
          "정적분 $$\\int_0^{\\frac{\\pi}{2}} |2\\sin 2x - 1| dx$$의 값은?",
        choices: [
          "$$2\\sqrt{3} - 2 - \\frac{\\pi}{6}$$",
          "$$2\\sqrt{3} - 2 + \\frac{\\pi}{6}$$",
          "$$2\\sqrt{3} - 1 - \\frac{\\pi}{6}$$",
          "$$2\\sqrt{3} - 1 + \\frac{\\pi}{6}$$",
          "$$2\\sqrt{3} + 1 - \\frac{\\pi}{6}$$",
        ],
        answer: "①",
      },
      {
        question:
          "$$f(x) = 2x + \\cos x$$일 때, 적분 $$\\int_1^{2\\pi - 1} f^{-1}(x) dx$$의 값은?",
        choices: [
          "$$\\pi^2 - \\pi$$",
          "$$\\pi^2 - 1$$",
          "$$2\\pi + 1$$",
          "$$\\frac{\\pi^2}{2} + 1$$",
        ],
        answer: "①",
      },
      {
        question:
          "함수 $$f(x) = \\sqrt{4x + 5x^4}$$ ($$x \\ge 0$$)의 역함수 $$g(x)$$라 할 때, 정적분 $$\\int_0^3 xg(x) dx$$의 값은?",
        choices: ["$$1$$", "$$2$$", "$$3$$", "$$4$$", "$$5$$"],
        answer: "④",
      },
    ],
    120: [
      {
        question:
          "$$\\lim_{n \\to \\infty} \\int_0^1 \\frac{1}{1 + x^n} dx$$의 값은?",
        choices: ["$$0$$", "$$1$$", "$$e$$", "$$\\frac{1}{e}$$", "$$e^2$$"],
        answer: "③",
      },
      {
        question:
          "$$f$$가 닫힌구간 $$[0, 1]$$에서 연속함수일 때, 적분 $$\\int_0^1 \\frac{\\sin x}{\\sin x + \\sin(1 - x)} dx$$의 값은?",
        choices: [
          "$$\\frac{3}{2}$$",
          "$$\\frac{5}{4}$$",
          "$$1$$",
          "$$\\frac{3}{4}$$",
          "$$\\frac{1}{2}$$",
        ],
        answer: "⑤",
      },
      {
        question:
          "정적분 $$\\int_0^{\\frac{\\pi}{2}} \\sum_{k=1}^{100} \\frac{\\sin^k x}{\\sin^k x + \\cos^k x} dx$$의 값은?",
        choices: [
          "$$25\\pi$$",
          "$$50\\pi$$",
          "$$100\\pi$$",
          "$$125\\pi$$",
          "$$150\\pi$$",
        ],
        answer: "①",
      },
      {
        question:
          "적분 $$\\int_0^{\\frac{\\pi}{2}} \\frac{\\sqrt{\\tan^3 x}}{\\sqrt{\\tan^3 x} + \\sqrt{\\cot^3 x}} dx$$의 값은?",
        choices: [
          "$$1$$",
          "$$2$$",
          "$$\\frac{\\pi}{4}$$",
          "$$\\frac{\\pi}{3}$$",
        ],
        answer: "③",
      },
    ],
    121: [
      {
        question:
          "연속함수 $$f(x)$$가 $$f(x) + f(-x) = x^2 - 1$$을 만족할 때, $$\\int_{-1}^{1} f(x) dx$$의 값은?",
        choices: [
          "$$-\\frac{2}{3}$$",
          "$$-\\frac{1}{3}$$",
          "$$\\frac{1}{3}$$",
          "$$\\frac{2}{3}$$",
        ],
        answer: "①",
      },
      {
        question:
          "연속함수 $$f(x)$$가 다음 두 조건을 만족시킬 때, 상수 $$a$$의 값은?",
        example:
          "$$f(x) + f(-x) = ax^2 + 1, \\quad \\int_{-1}^{1} f(x) dx = 3$$",
        choices: ["$$3$$", "$$4$$", "$$5$$", "$$6$$"],
        answer: "④",
      },
      {
        question:
          "함수 $$f(x)$$가 $$[0, \\pi]$$에서 연속이고 모든 $$x \\in [0, \\pi]$$에 대하여 $$f(x) + f(\\pi - x) = \\sin x$$를 만족할 때 $$\\int_0^{\\pi} f(x) dx$$의 값은?",
        choices: [
          "$$1$$",
          "$$\\frac{4}{3}$$",
          "$$\\frac{3}{2}$$",
          "$$2$$",
          "$$\\frac{\\pi}{2}$$",
        ],
        answer: "①",
      },
      {
        question:
          "정적분 $$\\int_{-1}^{1} \\left(e^{x^3} - e^{-x^3}\\right) dx$$의 값은?",
        choices: [
          "$$\\sqrt[3]{e} - \\frac{1}{\\sqrt[3]{e}}$$",
          "$$e - \\frac{1}{e}$$",
          "$$0$$",
          "$$e + \\frac{1}{e}$$",
          "$$\\sqrt[3]{e} + \\frac{1}{\\sqrt[3]{e}}$$",
        ],
        answer: "③",
      },
    ],
    122: [
      {
        question:
          "적분 $$\\int_{-\\frac{1}{2}}^\\frac{1}{2} \\frac{x^2 \\sin^{-1}x - 6 \\cos^{-1}x}{\\sqrt{1 - x^2}} dx$$의 값은?",
        choices: ["$$-\\pi^2$$", "$$-\\pi$$", "$$\\pi$$", "$$\\pi^2$$"],
        answer: "①",
      },
      {
        question: "$$a_n$$을 다음과 같이 정의할 때, $$a_{2020}$$의 값은?",
        example:
          "$$a_n = \\int_{-1}^{1} x^2 (\\cos(n \\pi x) + \\sin(n \\pi x)) dx$$",
        choices: [
          "$$-\\frac{8}{3(2020\\pi)^3}$$",
          "$$-\\frac{4}{(2020\\pi)^2}$$",
          "$$\\frac{4}{(2020\\pi)^2}$$",
          "$$\\frac{8}{3(2020\\pi)^3}$$",
        ],
        answer: "③",
      },
      {
        question:
          "정적분 $$\\int_{-\\pi}^{\\pi} \\{ \\sin(mx)\\cos(nx) + \\sin(mx)\\sin(nx) + \\cos(mx)\\cos(nx) \\} dx$$의 값은? <br> (단, $$m, n$$은 양의 정수이고, $$m \\ne n$$이다.)",
        choices: ["$$m + n$$", "$$m - n$$", "$$0$$", "$$\\pi$$", "$$2\\pi$$"],
        answer: "③",
      },
      {
        question:
          "함수 $$f(x) = \\int_x^{\\frac{\\pi}{2}} \\frac{1}{(2 + \\cos t)^2} dt$$에 대하여 정적분 $$\\int_0^{\\frac{\\pi}{2}} f(x) \\cos x dx$$의 값은?",
        choices: [
          "$$\\frac{1}{6}$$",
          "$$\\frac{1}{5}$$",
          "$$\\frac{1}{4}$$",
          "$$\\frac{1}{3}$$",
          "$$\\frac{1}{2}$$",
        ],
        answer: "①",
      },
    ],
    123: [
      {
        question:
          "실수에서 미분 가능한 함수 $$f(x)$$가 $$f(x) = (x^2 + 1)^2 - \\int_0^x t^2 f'(t) dt$$를 만족할 때, $$f(2)$$의 값은?",
        choices: ["$$1$$", "$$3$$", "$$5$$", "$$7$$", "$$9$$"],
        answer: "⑤",
      },
      {
        question:
          "$$f(x) = x \\cos x + \\int_0^{\\frac{\\pi}{2}} f(x) dx$$를 만족할 때, $$f(\\pi)$$의 값을 구하면?",
        choices: [
          "$$-\\pi - 1$$",
          "$$-2\\pi + 2$$",
          "$$-\\pi + 1$$",
          "$$-\\frac{\\pi}{2} + 4$$",
        ],
        answer: "①",
      },
      {
        question: "다음 극한을 구하시오.",
        example:
          "$$\\lim_{n \\to \\infty} \\left( \\frac{n^2}{n^2 + 1^2} \\right)^{\\frac{1}{n^2 + 1^2}} \\left( \\frac{n^2}{n^2 + 2^2} \\right)^{\\frac{2}{n^2 + 2^2}} \\cdots \\left( \\frac{n^2}{n^2 + n^2} \\right)^{\\frac{n}{n^2 + n^2}}$$",
        choices: [
          "$$\\frac{\\ln 2}{2}$$",
          "$$-\\frac{(\\ln 2)^2}{4}$$",
          "$$e^{-\\frac{\\ln 2}{2}}$$",
          "$$e^{-\\frac{(\\ln 2)^2}{4}}$$",
        ],
        answer: "④",
      },
      {
        question:
          "$$\\lim_{n \\to \\infty} \\left\\{ \\left( \\sum_{k=1}^{n} \\sqrt{1 + \\cos \\frac{\\pi k}{2n}} \\right) \\sqrt{1 - \\cos \\frac{\\pi k}{2n}} \\right\\} $$의 값은?",
        choices: ["$$1$$", "$$\\sqrt{2}$$", "$$2$$", "$$2\\sqrt{2}$$", "$$4$$"],
        answer: "②",
      },
    ],
    124: [
      {
        question: "아래 적분을 구하라.",
        example: "$$\\int_0^1 \\sin^{-1} x\\,dx$$",
        choices: [
          "존재하지 않음",
          "$$\\frac{\\pi}{2} - 1$$",
          "$$1$$",
          "$$\\frac{\\pi}{3}$$",
          "$$\\frac{\\pi}{2}$$",
        ],
        answer: "②",
      },
      {
        question:
          "적분 $$\\int_0^1 \\ln\\left(x + \\sqrt{x^2 + 1}\\right) dx$$를 구하면?",
        choices: [
          "$$1 - \\sqrt{2} + \\ln(1 + \\sqrt{2})$$",
          "$$1 + \\sqrt{2} + \\ln(1 + \\sqrt{2})$$",
          "$$3 - \\sqrt{2} + \\ln(3 + \\sqrt{2})$$",
          "$$3 + \\sqrt{2} + \\ln(3 + \\sqrt{2})$$",
          "$$1 + \\sqrt{2} + \\ln(3 + \\sqrt{2})$$",
        ],
        answer: "①",
      },
      {
        question:
          "모든 실수 $$x$$에 대하여 $$f(-x) = f(x),\\ f(x + 3) = f(x)$$를 만족하는 연속함수 $$f(x)$$에 대하여 $$\\int_0^2 f(x) dx = 5$$와 $$\\int_0^3 f(x) dx = 7$$이 성립한다. 이때, $$\\int_{-4}^9 f(x) dx$$의 값은?",
        choices: ["$$26$$", "$$28$$", "$$30$$", "$$32$$"],
        answer: "③",
      },
      {
        question:
          "정적분 $$\\int_0^1 \\left( \\sqrt[3]{1 - x^5} - \\sqrt[5]{1 - x^3} + 1 \\right) dx$$의 값은?",
        choices: [
          "$$\\sqrt[5]{3} - 1$$",
          "$$\\sqrt[3]{5} - 1$$",
          "$$1$$",
          "$$\\sqrt[5]{3} + 1$$",
          "$$\\sqrt[3]{5} + 1$$",
        ],
        answer: "③",
      },
    ],
    131: [
      {
        question: "다음 적분을 계산하시오.",
        example: "$$\\int_1^{\\infty} e^{-x} dx$$",
        answer: "$$\\frac{1}{e}$$"
      },
      {
        question: "다음 적분을 계산하시오.",
        example: "$$\\int_0^{\\infty} \\frac{1}{x^2 + 4} dx$$",
        answer: "$$\\frac{\\pi}{4}$$" 
      },
      {
        question: "다음 적분을 계산하시오.",
        example: "$$\\int_0^{\\infty} xe^{-x^2} dx$$",
        answer: "$$\\frac{1}{2}$$", 
      },
      {
        question: "다음 적분을 계산하시오.",
        example: "$$\\int_1^{\\infty} \\frac{1}{(3x + 1)^2} dx$$",
        answer: "$$\\frac{1}{12}$$"
      },
      {
        question: "다음 적분을 계산하시오.",
        example: "$$\\int_0^{\\infty} e^{-x} \\cos x\\,dx$$",
        answer: "$$\\frac{1}{2}$$" 
      },
      {
        question: "다음 적분을 계산하시오.",
        example: "$$\\int_0^{\\infty} xe^{-x} dx$$",
        answer: "$$1$$" 
      },
      {
        question: "다음 적분을 계산하시오.",
        example: "$$\\int_0^1 (\\ln x)^3 dx$$",
        answer: "$$-6$$" 
      },
      {
        question: "다음 적분을 계산하시오.",
        example: "$$\\int_0^{\\infty} e^{-\\sqrt{x}} dx$$",
        answer: "$$2$$"
      },
      {
        question: "다음 적분을 계산하시오.",
        example: "$$\\int_{-\\infty}^0 x e^x dx$$",
        answer: "$$-1$$"
      },
      {
        question: "다음 적분을 계산하시오.",
        example: "$$\\int_0^{\\frac{\\pi}{2}} \\sec x\\,dx$$",
        answer: " 발산",
      },
      {
        question: "다음 적분을 계산하시오.",
        example: "$$\\int_0^{\\infty} e^{-x^2} dx$$",
        answer: "$$\\frac{\\sqrt{\\pi}}{2}$$"
      },
      {
        question: "다음 적분을 계산하시오.",
        example: "$$\\int_0^{\\infty} \\frac{e^{-x}}{\\sqrt{x}} dx$$",
        answer: "$$\\sqrt{\\pi}$$" 
      },
      {
        question: "다음 적분을 계산하시오.",
        example: "$$\\int_0^{\\infty} \\sqrt{x} e^{-x} dx$$",
        answer: "$$\\frac{\\sqrt{\\pi}}{2}$$" 
      },
      {
        question: "다음 적분을 계산하시오.",
        example: "$$\\int_0^{\\infty} x^2 e^{-x^2} dx$$",
        answer: "$$\\frac{\\sqrt{\\pi}}{4}$$"
      },
      {
        question:
          "$$\\Gamma(n) = \\int_0^{\\infty} x^{n - 1} e^{-x} dx \\quad (단,\\ n > 0)$$이라 정의할 때, $$\\Gamma$$에 대한 성질 중 옳지 않은 것은?",
        choices: [
          "$$\\Gamma(n + 1) = n \\Gamma(n)$$",
          "$$\\Gamma(n + 1) = n!\\quad (단,\\ n \\text{은 자연수})$$",
          "$$\\Gamma(n) = \\int_0^{\\infty} s^{2n - 3} e^{-s^2} ds$$",
          "$$\\frac{\\Gamma(5/2)}{\\Gamma(1/2)} = \\frac{3}{4}$$",
        ],
        answer: "③",
      },
    ],
    133: [
      {
        question:
          "다음 적분의 수렴, 발산을 판단하고 수렴한다면 적분값을 계산하시오.",
        example: "$$\\int_0^1 \\frac{1}{x} dx$$",
        answer: "$$\\infty$$"
      },
      {
        question:
          "다음 적분의 수렴, 발산을 판단하고 수렴한다면 적분값을 계산하시오.",
        example: "$$\\int_0^1 \\frac{1}{\\sqrt{x}} dx$$",
        answer: "$$2$$" 
      },
      {
        question:
          "다음 적분의 수렴, 발산을 판단하고 수렴한다면 적분값을 계산하시오.",
        example: "$$\\int_1^2 \\frac{1}{(x - 1)^\\frac{2}{3}} dx$$",
        answer: "$$3$$" 
      },
      {
        question:
          "다음 적분의 수렴, 발산을 판단하고 수렴한다면 적분값을 계산하시오.",
        example: "$$\\int_2^{\\infty} \\frac{dx}{x (\\ln x)^2}$$",
        answer: "$$\\frac{1}{\\ln 2}$$" 
      },
      {
        question: "이상적분 $$\\int_0^1 \\frac{\\ln x}{\\sqrt{x}} dx$$의 값은?",
        choices: [],
        answer: "$$-4$$"
      },
      {
        question: "다음 특이적분 중 수렴하는 것은?",
        choices: [
          "$$\\int_1^{\\infty} \\frac{1}{x^2} dx$$",
          "$$\\int_1^{\\infty} \\frac{1}{\\sqrt{x}} dx$$",
          "$$\\int_1^{\\infty} \\frac{1}{x} dx$$",
          "$$\\int_2^{\\infty} \\frac{1}{x \\sqrt{\\ln x}} dx$$",
        ],
        answer: "③",
      },
      {
        question: "다음 특이적분 중 수렴하는 것은?",
        choices: [
          "$$\\int_0^1 \\frac{1}{x^2} dx$$",
          "$$\\int_{-1}^2 \\frac{1}{x + 1} dx$$",
          "$$\\int_0^1 \\frac{1}{\\sqrt[3]{x^2}} dx$$",
          "$$\\int_0^1 \\frac{1}{(1 - x)^2} dx$$",
        ],
        answer: "③",
      },
      {
        question:
          "이상적분(improper integral) $$\\int_0^1 x^p \\ln x\\,dx$$이 수렴하기 위한 $$p$$의 조건은?",
        choices: ["$$p \\ge 1$$", "$$p < 1$$", "$$p > -1$$", "$$p < -1$$"],
        answer: "③",
      },
      {
        question: "다음 중 발산하는 적분은?",
        choices: [
          "$$\\int_0^1 \\frac{dx}{x^2 + \\sqrt{x}}$$",
          "$$\\int_0^1 \\frac{1}{\\sqrt{x}(1 + x^2)} dx$$",
          "$$\\int_0^{\\frac{\\pi}{2}} \\frac{1}{x \\cos x} dx$$",
          "$$\\int_0^1 \\frac{e^x}{\\sqrt{x}} dx$$",
        ],
        answer: "③",
      },
    ],
    134: [
      {
        question:
          "특이적분 $$\\int_0^1 \\frac{dx}{\\sqrt{1 - x^2}}$$의 값을 구하면?",
        choices: [
          "$$\\frac{\\pi}{4}$$",
          "$$\\frac{\\pi}{2}$$",
          "$$\\frac{3\\pi}{4}$$",
          "$$\\pi$$",
          "$$\\frac{5\\pi}{4}$$",
        ],
        answer: "②",
      },
      {
        question: "정적분 $$\\int_1^{\\infty} \\frac{\\ln x}{x^2} dx$$의 값은?",
        choices: ["$$0$$", "$$1$$", "$$e^{-1}$$", "발산한다."],
        answer: "②",
      },
      {
        question:
          "$$\\int_e^{\\infty} \\frac{dx}{x \\ln x (\\ln \\ln x)^3}$$의 값은?",
        choices: [
          "$$\\frac{1}{(\\ln\\ln 3)^2}$$",
          "$$\\frac{3}{(\\ln 3)^4}$$",
          "$$\\frac{1}{2(\\ln 3)^2}$$",
          "발산한다.",
        ],
        answer: "③",
      },
    ],
    135: [
      {
        question: "이상적분 $$\\int_0^1 x \\ln 4x\\,dx$$의 값은?",
        choices: [
          "$$\\ln 2 - \\frac{1}{4}$$",
          "$$\\ln 2 - \\frac{1}{2}$$",
          "$$\\ln 2 - \\frac{3}{4}$$",
          "$$\\ln 2 - 1$$",
        ],
        answer: "①",
      },
      {
        question:
          "$$A = \\int_0^{\\infty} \\frac{x \\sqrt{\\tan^{-1}(x^2)}}{1 + x^4} dx$$일 때, $$A^2$$의 값은?",
        choices: [
          "$$\\frac{\\pi^3}{24}$$",
          "$$\\frac{\\pi^3}{36}$$",
          "$$\\frac{\\pi^3}{72}$$",
          "$$\\frac{\\pi^3}{144}$$",
          "$$\\frac{\\pi^3}{216}$$",
        ],
        answer: "③",
      },
      {
        question:
          "이상 적분 $$\\int_{\\frac{1}{2}}^{\\infty} \\frac{dx}{1 + 4x^2}$$의 값은?",
        choices: [
          "$$\\frac{\\pi}{6}$$",
          "$$\\frac{\\pi}{16} + 1$$",
          "$$\\frac{\\pi}{8}$$",
          "$$\\frac{\\pi}{8} + 1$$",
          "$$\\frac{\\pi}{4} + \\frac{1}{2}$$",
        ],
        answer: "③",
      },
      {
        question:
          "특이적분 $$\\int_{-\\infty}^{\\infty} \\frac{1}{x^2 + 4x + 6} dx$$의 값을 구하시오.",
        choices: [
          "$$\\sqrt{2} \\pi$$",
          "$$\\pi$$",
          "$$\\frac{\\pi}{\\sqrt{2}}$$",
          "$$\\frac{\\pi}{2}$$",
        ],
        answer: "③",
      },
    ],
    136: [
      {
        question: "$$\\int_0^{\\infty} xe^{-x} dx$$의 값은?",
        choices: [
          "$$0$$",
          "$$\\frac{1}{2}$$",
          "$$1$$",
          "$$\\frac{3}{2}$$",
          "$$2$$",
        ],
        answer: "③",
      },
      {
        question: "$$\\int_0^{\\infty} x^5 e^{-x} dx$$의 값은?",
        choices: ["$$120$$", "$$122$$", "$$124$$", "$$126$$"],
        answer: "①",
      },
      {
        question: "이상적분 $$\\int_0^{\\infty} x^2 e^{-x^2} dx$$의 값은?",
        choices: [
          "$$\\frac{\\sqrt{\\pi}}{4}$$",
          "$$\\frac{\\sqrt{\\pi}}{2}$$",
          "$$\\sqrt{\\pi}$$",
          "$$2\\sqrt{\\pi}$$",
          "$$4\\sqrt{\\pi}$$",
        ],
        answer: "①",
      },
      {
        question: "특이적분 $$\\int_0^1 (-\\ln t)^5 dt$$의 값은?",
        choices: ["$$-120$$", "$$-5$$", "$$5$$", "$$120$$", "$$250$$"],
        answer: "④",
      },
    ],
    137: [
      {
        question: "특이적분 $$\\int_1^4 \\frac{dx}{(x - 2)^2}$$의 값은?",
        choices: [
          "$$\\frac{1}{2}$$",
          "$$\\ln 2$$",
          "$$-\\infty$$",
          "$$\\infty$$",
          "$$3$$",
        ],
        answer: "④",
      },
      {
        question:
          "특이적분(improper integral) $$\\int_0^5 \\frac{1}{\\sqrt{|x - 1|}} dx$$의 값은?",
        choices: ["$$0$$", "$$2$$", "$$4$$", "$$6$$", "$$\\infty$$"],
        answer: "④",
      },
      {
        question:
          "이상적분(improper integral) $$\\int_0^{\\infty} \\left( \\frac{1}{\\sqrt{x^2 + 4}} - \\frac{k}{x + 2} \\right) dx$$가 수렴하는 $$k$$에 대하여 그 적분값은?",
        choices: ["$$\\ln 2$$", "$$\\ln 3$$", "$$\\ln 4$$", "$$\\ln 5$$"],
        answer: "①",
      },
      {
        question:
          "두 실수 $$a, b$$에 대하여 $$\\int_0^{\\infty} \\frac{a}{2x + 1} - \\frac{x^{2021}}{x^{2022} + 1} dx = b$$일 때, $$ab$$의 값은?",
        choices: [
          "$$\\ln 2$$",
          "$$2 \\ln 2$$",
          "$$\\ln 5$$",
          "$$2 \\ln 3$$",
          "$$3 \\ln 3$$",
        ],
        answer: "②",
      },
    ],
    138: [
      {
        question: "다음 중 적분의 계산이 잘못된 것을 고르시오.",
        choices: [
          "$$\\int_1^2 (\\ln x)^2 dx = 2(\\ln 2)^2 - 4 \\ln 2 + 2$$",
          "$$\\int_0^{\\infty} x^5 e^{-x} dx = 120$$",
          "$$\\int_0^3 \\frac{1}{(x - 1)^2} dx = -\\frac{3}{2}$$",
          "$$\\int_0^{\\frac{\\pi^2}{4}} \\sin \\sqrt{x} dx = 2$$",
        ],
        answer: "③",
      },
      {
        question:
          "특이적분 $$I_n = \\int_0^{\\infty} x^n e^{-x} dx$$ (단, $$n$$은 자연수)에 대한 다음 설명 중 옳지 않은 것은?",
        choices: [
          "$$\\text{모든 자연수 } n \\text{에 대하여 } I_n = (n^2 - n) I_{n - 2} \\text{이 성립한다.}$$",
          "$$I_3 = 6$$",
          "$$\\text{등식 } I_2 = \\int_0^{\\infty} x^5 e^{-x^2} dx \\text{가 성립한다.}$$",
          "$$\\text{등식 } I_3 = -\\int_0^1 (\\ln x)^3 dx \\text{가 성립한다.}$$",
        ],
        answer: "③",
      },
      {
        question: "이상적분 $$\\int_0^1 \\frac{\\ln x}{\\sqrt{x}} dx$$의 값은?",
        choices: ["발산", "$$-6$$", "$$-4$$", "$$-1$$"],
        answer: "③",
      },
    ],
    139: [
      {
        question: "다음 특이적분 중 발산하는 것은?",
        choices: [
          "$$\\int_1^2 \\frac{dx}{x^2 - 1}$$",
          "$$\\int_2^{\\infty} \\frac{\\ln x}{x^2} dx$$",
          "$$\\int_1^2 \\frac{dx}{\\sqrt{x - 1}}$$",
          "$$\\int_2^{\\infty} \\frac{dx}{x (\\ln x)^2}$$",
        ],
        answer: "①",
      },
      {
        question: "다음 이상적분 중 수렴하지 않는 것을 고르면?",
        choices: [
          "$$\\int_{-\\infty}^0 \\frac{1}{1 + x^2} dx$$",
          "$$\\int_2^5 \\frac{1}{\\sqrt{x - 2}} dx$$",
          "$$\\int_1^{\\infty} e^{-x^2} dx$$",
          "$$\\int_1^{\\infty} \\frac{1 + e^{-x}}{x} dx$$",
        ],
        answer: "④",
      },
      {
        question: "다음 이상적분 중에서 수렴하는 것은?",
        choices: [
          "$$\\int_1^\\infty \\frac{1}{x + \\sqrt{x}} dx$$",
          "$$\\int_0^1 \\frac{\\ln x}{x} dx$$",
          "$$\\int_1^{\\infty} \\frac{1}{x + e^x} dx$$",
          "$$\\int_0^1 \\frac{1}{x^2} dx$$",
        ],
        answer: "③",
      },
    ],
    140: [
      {
        question: "다음 이상적분의 수렴, 발산을 올바르게 고른 것은?",
        example:
          "(가) $$\\int_1^{\\infty} \\frac{x}{x^3 + 1} dx$$  (나) $$\\int_0^1 \\frac{1}{\\sqrt{x}} dx$$",
        choices: [
          "(가) 수렴, (나) 수렴",
          "(가) 발산, (나) 수렴",
          "(가) 수렴, (나) 발산",
          "(가) 발산, (나) 발산",
        ],
        answer: "①",
      },
      {
        question: "다음 이상적분의 내용 중 틀린 것은?",
        choices: [
          "$$\\int_0^2 \\ln x\\,dx = -\\infty$$",
          "$$\\int_1^{\\infty} \\frac{1}{x} dx = \\infty$$",
          "$$\\int_{-\\infty}^0 x e^x dx = -1$$",
          "$$\\int_{-\\infty}^{\\infty} \\frac{1}{x^2 + 1} dx = \\pi$$",
          "$$\\int_1^{\\infty} \\frac{1}{x^{p + 1}} dx$$는 $$p > 0$$일 때 수렴하고, $$p \\le 0$$일 때 발산한다.",
        ],
        answer: "①",
      },
      {
        question: "다음 특이적분 중 수렴하는 것은?",
        choices: [
          "$$\\int_0^{\\infty} \\frac{x}{1 + x^2} dx$$",
          "$$\\int_1^{\\infty} \\frac{1}{x \\ln x} dx$$",
          "$$\\int_0^1 \\ln x\\,dx$$",
          "$$\\int_1^{\\infty} \\frac{1}{x - 1} dx$$",
        ],
        answer: "③",
      },
    ],
    141: [
      {
        question: "다음의 이상적분 중 수렴하는 것을 모두 몇 개인가?",
        example:
          "(가) $$\\int_0^1 \\frac{1}{x \\ln x} dx$$ (나) $$\\int_0^1 \\frac{1}{x (\\ln x)^2} dx$$ (다) $$\\int_0^1 \\frac{\\sin x}{x} dx$$ (라) $$\\int_0^1 \\frac{1}{x^{\\frac{1}{2}}} dx$$",
        choices: ["0개", "1개", "2개", "3개"],
        answer: "③",
      },
      {
        question: "다음 특이적분 중 수렴하는 것을 모두 찾으시오.",
        example:
          "(ㄱ) $$\\int_0^1 \\frac{dx}{\\sqrt{x} + x^3}$$ (ㄴ) $$\\int_1^2 \\frac{dx}{x \\ln x}$$ (ㄷ) $$\\int_2^{\\infty} \\frac{1}{x^2 - x} dx$$",
        choices: ["ㄱ, ㄴ", "ㄱ, ㄷ", "ㄴ, ㄷ", "ㄱ, ㄴ, ㄷ"],
        answer: "②",
      },
      {
        question:
          "다음 중 수렴하는 이상적분(특이적분)만을 있는 대로 고른 것은?",
        example:
          "(ㄱ) $$\\int_0^4 \\frac{1}{x - 3} dx$$ (ㄴ) $$\\int_0^{\\frac{\\pi}{2}} \\sec x \\tan x dx$$ (ㄷ) $$\\int_\\pi^{\\infty} \\frac{1}{x^2} dx$$ (ㄹ) $$\\int_0^{\\infty} x e^{-x} dx$$",
        choices: ["ㄱ, ㄴ", "ㄱ, ㄷ", "ㄴ, ㄷ", "ㄴ, ㄹ", "ㄷ, ㄹ"],
        answer: "⑤",
      },
      {
        question: "다음 이상적분 중에서 값이 유한한 것의 개수는?",
        example:
          "(ㄱ) $$\\int_0^{\\infty} \\frac{1}{1 + x^2} dx$$ (ㄴ)$$\\int_0^1 \\frac{1}{\\sqrt{x}} dx$$ (ㄷ)$$\\int_1^{\\infty} \\frac{1}{x + e^x} dx$$ (ㄹ)$$\\int_2^{\\infty} \\frac{1}{x \\ln x} dx$$",
        choices: ["1개", "2개", "3개", "4개"],
        answer: "③",
      },
    ],
    142: [
      {
        question: "다음 중 수렴하는 것을 모두 고르면?",
        example:
          "(ㄱ) $$\\int_0^1 \\frac{1}{\\sqrt{x}} dx$$ (ㄴ) $$\\int_{-3}^3 \\frac{1}{x^2} dx$$ (ㄷ) $$\\int_1^{\\infty} \\frac{e + \\sin x}{\\pi \\sqrt{x}} dx$$ (ㄹ) $$\\int_{-\\infty}^{\\infty} x e^{-x^2} dx$$",
        choices: ["ㄱ, ㄴ", "ㄴ, ㄷ", "ㄷ, ㄹ", "ㄱ, ㄹ"],
        answer: "④",
      },
      {
        question: "다음 이상적분들 중에서 수렴하는 것은?",
        choices: [
          "$$\\int_2^{\\infty} \\frac{dx}{(x - 1)^{3/2}}$$",
          "$$\\int_0^1 \\frac{dx}{x}$$",
          "$$\\int_1^{\\infty} \\frac{x}{x^2 + 1} dx$$",
          "$$\\int_0^{\\infty} \\frac{dx}{\\sqrt{x + 1}}$$",
          "$$\\int_1^3 \\frac{dx}{x - 2}$$",
        ],
        answer: "①",
      },
      {
        question: "다음 적분 중 수렴하는 값을 갖는 것을 고르시오.",
        choices: [
          "$$\\int_1^{\\infty} \\frac{1}{x} dx$$",
          "$$\\int_0^2 \\frac{1}{(x - 1)^2} dx$$",
          "$$\\int_0^{\\frac{\\pi}{2}} \\sec x dx$$",
          "$$\\int_{-\\infty}^0 x e^x dx$$",
        ],
        answer: "④",
      },
      {
        question: "다음 보기의 특이적분 가운데 수렴하는 적분을 모두 고른 것은?",
        example:
          "(가) $$\\int_0^1 x \\ln x\\,dx$$ (나) $$\\int_0^1 \\frac{1}{x \\ln x} dx$$ (다) $$\\int_0^1 \\frac{\\ln x}{x} dx$$",
        choices: ["가", "나", "가, 나", "가, 다", "나, 다"],
        answer: "①",
      },
    ],
    143: [
      {
        question: "다음 특이적분 중 수렴하는 것을 모두 찾으시오.",
        example:
          "(ㄱ) $$\\int_1^{\\infty} \\frac{1}{x + e^x} dx$$ (ㄴ) $$\\int_1^e \\frac{1}{x (\\ln x)^2} dx$$ (ㄷ) $$\\int_{2\\pi}^{\\infty} \\frac{x \\cos^2 x + 1}{x^3} dx$$",
        choices: ["ㄴ", "ㄴ, ㄷ", "ㄷ", "ㄱ, ㄴ", "ㄱ, ㄷ"],
        answer: "⑤",
      },
      {
        question: "다음의 이상적분 중에서 수렴하는 것만을 있는 대로 고른 것은?",
        example:
          "(ㄱ) $$\\int_{-\\infty}^{\\infty} e^{-x^2 + 2x} dx$$ (ㄴ) $$\\int_1^{\\infty} \\frac{1 + e^{-2x}}{2x} dx$$ (ㄷ) $$\\int_0^1 (x + 1) \\ln x\\,dx$$",
        choices: ["ㄱ", "ㄴ", "ㄱ, ㄷ", "ㄴ, ㄷ", "ㄱ, ㄴ, ㄷ"],
        answer: "③",
      },
      {
        question: "다음 중 발산하는 것은?",
        choices: [
          "$$\\int_0^{\\infty} \\frac{x}{x^3 + 1} dx$$",
          "$$\\int_0^{\\infty} \\frac{\\tan^{-1} x}{2 + e^x} dx$$",
          "$$\\int_1^{\\infty} \\frac{x + 1}{\\sqrt{x^4 - x}} dx$$",
          "$$\\int_0^{\\infty} \\frac{\\sin^2 x}{\\sqrt{x}} dx$$",
        ],
        answer: "③",
      },
      {
        question: "다음의 적분 중 수렴하는 것을 모두 고르시오.",
        example:
          "(ㄱ) $$\\int_1^{\\infty} \\frac{\\cos^4 x}{x^3 + 1} dx$$ (ㄴ) $$\\int_0^1 \\frac{e^{-x}}{x^2} dx$$ (ㄷ) $$\\int_2^{\\infty} \\frac{x^2}{\\sqrt{x^5 - 1}} dx$$",
        choices: ["ㄱ", "ㄱ, ㄴ", "ㄱ, ㄷ", "ㄴ, ㄷ", "ㄱ, ㄴ, ㄷ"],
        answer: "①",
      },
    ],
    144: [
      {
        question:
          "다음 <보기>의 이상적분(improper integral) 중에서 수렴하는 것만을 있는 대로 고른 것은?",
        example:
          "(ㄱ) $$\\int_0^{\\infty} x^2 e^{-\\sqrt{x}} dx$$ (ㄴ) $$\\int_0^1 \\frac{\\sin(\\pi x)}{1 - x} dx$$ (ㄷ) $$\\int_0^1 \\frac{1}{x \\ln x} dx$$",
        choices: ["ㄱ", "ㄴ", "ㄱ, ㄴ", "ㄴ, ㄷ", "ㄱ, ㄴ, ㄷ"],
        answer: "③",
      },
      {
        question: "다음의 이상적분(improper integral) 중에서 발산하는 것은?",
        choices: [
          "$$\\int_1^\\infty \\frac{1}{x + x^2} dx$$",
          "$$\\int_0^{\\infty} \\frac{e^{-3x}}{\\sqrt{x}} dx$$",
          "$$\\int_0^1 \\frac{\\sin x}{x^{3/2}} dx$$",
          "$$\\int_0^1 \\frac{\\cos \\pi x}{1 - x} dx$$",
        ],
        answer: "④",
      },
      {
        question: "<보기>의 이상적분 중 수렴하는 것을 모두 고르면?",
        example:
          "(ㄱ) $$\\int_0^1 \\frac{1}{x (\\ln x)} dx$$ (ㄴ) $$\\int_0^1 \\frac{1}{x (\\ln x)^2} dx$$ (ㄷ) $$\\int_0^1 \\frac{\\sin x}{x} dx$$ (ㄹ) $$\\int_0^1 \\frac{1}{x^{1/2}} dx$$",
        choices: ["ㄱ, ㄴ, ㄷ, ㄹ", "ㄴ, ㄷ, ㄹ", "ㄷ, ㄹ", "ㄹ"],
        answer: "③",
      },
      {
        question: "다음 이상적분 중 수렴하는 것을 모두 고르면?",
        example:
          "(가) $$\\int_1^{\\infty} e^{-x^2} dx$$ (나) $$\\int_0^{\\infty} \\frac{1 + e^{-x}}{x} dx$$ (다) $$\\int_0^1 \\frac{1}{x - 1} dx$$ (라) $$\\int_{-\\infty}^{\\infty} \\frac{1}{1 + x^2} dx$$",
        choices: ["(가), (나)", "(나), (다)", "(다), (라)", "(가), (라)"],
        answer: "④",
      },
    ],
    145: [
      {
        question: "다음 중 수렴하는 특이적분의 개수는?",
        example:
          "(ㄱ) $$\\int_0^1 \\frac{x}{1 - x} dx$$ (ㄴ) $$\\int_{-1}^1 \\frac{1}{x^2} dx$$ (ㄷ) $$\\int_{-2}^2 \\frac{1}{\\sqrt{4 - x^2}} dx$$ (ㄹ) $$\\int_{-\\infty}^{\\infty} \\frac{1}{(x^2 + 1)^2} dx$$",
        choices: ["1개", "2개", "3개", "4개"],
        answer: "②",
      },
      {
        question: "다음의 특이적분 중 수렴하는 것을 모두 고르시오.",
        example:
          "(a) $$\\int_0^1 x \\ln x dx$$ (b) $$\\int_{-\\infty}^{\\infty} \\frac{1}{1 + x^2} dx$$ (c) $$\\int_0^{\\infty} x^2 e^{-x^2} dx$$ (d) $$\\int_0^1 \\frac{\\ln \\sqrt{x}}{\\sqrt{x}} dx$$",
        choices: ["a, b, c, d", "a, b, c", "a, b, d", "a, c, d", "b, c, d"],
        answer: "①",
      },
      {
        question:
          "<보기>에서 수렴하는 특이적분(improper integral)을 있는 대로 모두 고른 것은?",
        example:
          "(ㄱ) $$\\int_0^{\\frac{\\pi}{2}} \\frac{\\sqrt{x}}{\\sin x} dx$$ (ㄴ) $$\\int_0^{\\pi} \\frac{x}{1 - \\cos x} dx$$ (ㄷ) $$\\int_{-\\infty}^{\\infty} \\frac{x}{(x^2 + 2) \\ln(x^2 + 2)} dx$$",
        choices: ["ㄱ", "ㄴ", "ㄱ, ㄴ", "ㄱ, ㄷ", "ㄴ, ㄷ"],
        answer: "④",
      },
      {
        question: "다음 <보기>에서 발산하는 이상 적분은 모두 몇 개인가?",
        example:
          "(ㄱ) $$\\int_1^{\\infty} \\frac{\\sin x}{x} dx$$ (ㄴ) $$\\int_0^1 \\frac{\\sqrt{x}}{\\sin x} dx$$ (ㄷ) $$\\int_0^1 \\frac{1}{\\ln(2x)} dx$$ (ㄹ) $$\\int_0^1 \\frac{1}{x (\\ln(2x))^2} dx$$",
        choices: ["0개", "1개", "2개", "3개", "4개"],
        answer: "③",
      },
    ],
    146: [
      {
        question: "다음 중 수렴하는 특이적분의 개수는?",
        example:
          "(ㄱ) $$\\int_1^{\\infty} \\frac{\\ln x}{x^2} dx$$ (ㄴ) $$\\int_2^{\\infty} \\frac{2 + e^{-x}}{x} dx$$ (ㄷ) $$\\int_1^2 \\frac{x}{1 - x^2} dx$$ (ㄹ) $$\\int_1^3 \\frac{1}{\\sqrt{x - 1}} dx$$",
        choices: ["0", "1", "2", "3"],
        answer: "③",
      },
      {
        question: "다음 중 수렴하는 특이적분의 개수는?",
        example:
          "(ㄱ) $$\\int_1^{\\infty} \\frac{\\ln x}{x} dx$$ (ㄴ) $$\\int_0^2 x^2 \\ln x dx$$ (ㄷ) $$\\int_0^{\\infty} e^{-x^2} dx$$ (ㄹ) $$\\int_0^{\\infty} \\frac{x}{1 + x^2} dx$$",
        choices: ["0", "1", "2", "3"],
        answer: "③",
      },
      {
        question:
          "<보기>에서 수렴하는 이상적분 (improper integral)은 모두 몇 개인가?",
        example:
          "(가)$$\\int_0^{\\infty} \\frac{e^{-x^2}}{|x - 2|^{\\frac{3}{2}}} dx$$ (나)$$\\int_0^{\\infty} \\frac{1 + x^{2022}}{\\sqrt{x}} dx$$ (다)$$\\int_0^{\\infty} e^{-(\\ln x)^2} dx$$(라) $$\\int_0^{\\infty} \\frac{x}{1 + 2x + x^2} dx$$",
        choices: ["0개", "1개", "2개", "3개", "4개"],
        answer: "②",
      },
    ],
    147: [
      {
        question: "다음 이상적분 중 발산하는 것을 모두 고른 것은?",
        example:
          "(가) $$\\int_0^1 \\frac{\\cos x}{2x} dx$$ (나) $$\\int_{-\\infty}^{-1} \\frac{1}{\\sqrt{3 - x}} dx$$ (다) $$\\int_0^1 \\frac{e^x}{\\sqrt{2x}} dx$$ (라) $$\\int_0^1 \\frac{\\ln x}{1 + x^3} dx$$",
        choices: ["(가), (나)", "(나), (다)", "(다), (라)", "(가), (라)"],
        answer: "①",
      },
      {
        question: "다음 이상적분 중 수렴하는 것을 있는 대로 고른 것은?",
        example:
          "(ㄱ) $$\\int_0^1 \\ln x dx$$ (ㄴ) $$\\int_{-\\infty}^{\\infty} \\frac{x}{x^2 + 1} dx$$ (ㄷ) $$\\int_1^{\\infty} \\frac{\\ln x}{x^2} dx$$",
        choices: ["ㄱ", "ㄱ, ㄴ", "ㄱ, ㄷ", "ㄴ, ㄷ", "ㄱ, ㄴ, ㄷ"],
        answer: "③",
      },
      {
        question:
          "$$\\int_0^{\\infty} \\frac{dx}{x^p + x^q}$$ 가 수렴하기 위한 필요충분조건으로 옳은 것은? (단, $$0 < p < q < \\infty$$)",
        choices: [
          "$$p < 1,\\ q > 1$$",
          "$$p \\leq 1,\\ q \\geq 1$$",
          "$$q > p \\geq 1$$",
          "$$p + q > 2$$",
          "$$p + q \\geq 2$$",
        ],
        answer: "①",
      },
    ],
  },
};
