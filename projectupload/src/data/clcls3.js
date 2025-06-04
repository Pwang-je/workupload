export const clcls3 = {
  subject: "calculus3",
  questions: {
    공식: [
      {
  "question": "정적분의 응용 공식",
  "example": [
    "$$\\small\\begin{array}{|c|c|c|c|} \\hline \\text{종류}\\rule{0pt}{2.5em} & ~~~~~~~~~~~~\\text{직교좌표계}~~~~~~~~~~~~ & ~~~~~~~~~~~~\\text{매개변수함수}~~~~~~~~~~~~ & ~~~~~~~~~~~~~~~\\text{극좌표계}~~~~~~~~~~~~~~~~~ \\\\ \\hline \\text{함수 정의}\\rule{0pt}{2.5em} & & & \\\\ \\hline \\text{면적}\\rule{0pt}{2.5em} & & & \\\\ \\hline \\text{곡선의 길이}\\rule{0pt}{2.5em} & & & \\\\ \\hline \\text{회전체의 체적}\\rule{0pt}{2.5em} & & & \\\\ \\hline \\text{회전체의 표면적}\\rule{0pt}{2.5em} & & & \\\\ \\hline \\end{array}$$"
  ],
  "answer": [
    "$$\\small\\begin{array}{|c|c|c|c|} \\hline",
    "\\textbf{종류} & \\textbf{직교좌표계} & \\textbf{매개변수함수} & \\textbf{극좌표계} \\\\ \\hline",
    "\\text{함수 정의} & y = f(x) \\quad (a \\leq x \\leq b) & \\begin{cases} x = f(t) \\\\ y = g(t) \\end{cases} \\quad (t_1 \\leq t \\leq t_2) & r = f(\\theta) \\quad (\\alpha \\leq \\theta \\leq \\beta) \\\\ \\hline",
    "\\text{면적} & A = \\int_a^b |y| dx & A = \\int_{t_1}^{t_2} y(t) x'(t) dt & A = \\frac{1}{2} \\int_{\\alpha}^{\\beta} r^2 d\\theta \\\\ \\hline",
    "\\text{곡선의 길이} & L = \\int_a^b \\sqrt{1 + (y')^2} dx & L = \\int_{t_1}^{t_2} \\sqrt{(x'(t))^2 + (y'(t))^2} dt & L = \\int_{\\alpha}^{\\beta} \\sqrt{r^2 + \\left(\\frac{dr}{d\\theta}\\right)^2} d\\theta \\\\ \\hline",
    "\\text{회전체의 체적} & \\begin{aligned} V_x &= \\pi \\int_a^b y^2 dx \\\\ V_y &= 2\\pi \\int_a^b x y dx \\end{aligned} & \\begin{aligned} V_x &= \\pi \\int_{t_1}^{t_2} \\{y(t)\\}^2 x'(t) dt \\\\ V_y &= \\pi \\int_{t_1}^{t_2} \\{x(t)\\}^2 y'(t) dt \\end{aligned} & - \\\\ \\hline",
    "\\text{회전체의 표면적} & \\begin{aligned} S_x &= 2\\pi \\int_a^b y \\sqrt{1 + (y')^2} dx \\\\ S_y &= 2\\pi \\int_a^b x \\sqrt{1 + (y')^2} dx \\end{aligned} & \\begin{aligned} S_x &= 2\\pi \\int_{t_1}^{t_2} y(t) \\sqrt{(x')^2 + (y')^2} dt \\\\ S_y &= 2\\pi \\int_{t_1}^{t_2} x(t) \\sqrt{(x')^2 + (y')^2} dt \\end{aligned} & \\begin{aligned} S_x &= 2\\pi \\int_{\\alpha}^{\\beta} r \\sin\\theta \\sqrt{r^2 + \\left(\\frac{dr}{d\\theta}\\right)^2} d\\theta \\\\ S_y &= 2\\pi \\int_{\\alpha}^{\\beta} r \\cos\\theta \\sqrt{r^2 + \\left(\\frac{dr}{d\\theta}\\right)^2} d\\theta \\end{aligned} \\\\ \\hline",
    "\\end{array}$$"
  ]
},

//       {
//   "question": "정적분의 응용 공식 - 직교좌표계",
//   "example": [
//     "종류: $$~~$$",
//     "면적: $$~~$$",
//     "곡선의 길이: $$~~$$",
//     "회전체의 체적 ($$x$$축): $$~~$$",
//     "회전체의 체적 ($$y$$축): $$~~$$",
//     "회전체의 표면적 ($$x$$축): $$~~$$",
//     "회전체의 표면적 ($$y$$축): $$~~$$"
//   ],
//   "answer": [
//     "종류: $$~ y = f(x) \\quad (a \\leq x \\leq b)$$",
//     "면적: $$~ A = \\int_a^b |y| dx$$",
//     "곡선의 길이: $$~  L = \\int_a^b \\sqrt{1 + (y')^2} dx$$",
//     "회전체의 체적 ($$x$$축): $$~ V_x = \\pi \\int_a^b y^2 dx$$",
//     "회전체의 체적 ($$y$$축): $$~ V_y = 2\\pi \\int_a^b xy dx$$",
//     "회전체의 표면적 ($$x$$축): $$~ S_x = 2\\pi \\int_a^b y \\sqrt{1 + (y')^2} dx$$",
//     "회전체의 표면적 ($$y$$축): $$~ S_y = 2\\pi \\int_a^b x \\sqrt{1 + (y')^2} dx$$"
//   ]
// },
// {
//   "question": "정적분의 응용 공식 - 매개변수함수",
//   "example": [
//     "종류: $$~~$$",
//     "면적: $$~~$$",
//     "곡선의 길이: $$~~$$",
//     "회전체의 체적 ($$x$$축): $$~~$$",
//     "회전체의 체적 ($$y$$축): $$~~$$",
//     "회전체의 표면적 ($$x$$축): $$~~$$",
//     "회전체의 표면적 ($$y$$축): $$~~$$"
//   ],
//   "answer": [
//     "종류:  $$~ \\begin{cases} x = f(t) \\\\ y = g(t) \\end{cases} \\quad (t_1 \\leq t \\leq t_2)$$",
//     "면적:  $$~ A = \\int_{t_1}^{t_2} y(t) x'(t) dt$$",
//     "곡선의 길이:  $$~ L = \\int_{t_1}^{t_2} \\sqrt{(x')^2 + (y')^2} dt$$",
//     "회전체의 체적 ($$x$$축):  $$~ V_x = \\pi \\int_{t_1}^{t_2} (y(t))^2 x'(t) dt$$",
//     "회전체의 체적 ($$y$$축):  $$~ V_y = \\pi \\int_{t_1}^{t_2} (x(t))^2 y'(t) dt$$",
//     "회전체의 표면적 ($$x$$축):  $$~ S_x = 2\\pi \\int_{t_1}^{t_2} y(t) \\sqrt{(x')^2 + (y')^2} dt$$",
//     "회전체의 표면적 ($$y$$축):  $$~ S_y = 2\\pi \\int_{t_1}^{t_2} x(t) \\sqrt{(x')^2 + (y')^2} dt$$"
//   ]
// },
// {
//   "question": "정적분의 응용 공식 - 극좌표계",
//   "example": [
//     "종류: $$~~$$",
//     "면적: $$~~$$",
//     "곡선의 길이: $$~~$$",
//     "회전체의 표면적 ($$x$$축): $$~~$$",
//     "회전체의 표면적 ($$y$$축): $$~~$$"
//   ],
//   "answer": [
//     "종류: $$~ r = f(\\theta) \\quad (\\alpha \\leq \\theta \\leq \\beta)$$",
//     "면적: $$~ A = \\frac{1}{2} \\int_\\alpha^\\beta r^2 d\\theta$$",
//     "곡선의 길이: $$~ L = \\int_\\alpha^\\beta \\sqrt{r^2 + \\left( \\frac{dr}{d\\theta} \\right)^2} d\\theta$$",
//     "회전체의 표면적 ($$x$$축): $$~ S_x = 2\\pi \\int_\\alpha^\\beta r \\sin\\theta \\sqrt{r^2 + \\left( \\frac{dr}{d\\theta} \\right)^2} d\\theta$$",
//     "회전체의 표면적 ($$y$$축): $$~ S_y = 2\\pi \\int_\\alpha^\\beta r \\cos\\theta \\sqrt{r^2 + \\left( \\frac{dr}{d\\theta} \\right)^2} d\\theta$$"
//   ]
// },
{
  "question": "도형별 면적, 곡선 길이, 회전체 공식 정리",
  "example": [
    "$$\\small\\begin{array}{|c|c|c|c|c|c|c|} \\hline \\textbf{항목}\\rule{0pt}{2.5em} & \\text{사이클로이드} & \\text{애스터로이드} & ~~~~~ \\text{심장형} ~~~~~ & ~~~~~ \\text{연주형} ~~~~~ & ~~~~~~ \\text{4엽장미} ~~~~ & ~~~~ \\text{3엽장미} ~~~~ \\\\ \\hline \\text{곡선}\\rule{0pt}{2.5em} & & & & & & \\\\ \\hline \\text{면적}\\rule{0pt}{2.5em} & & & & & & \\\\ \\hline \\text{곡선의 길이}\\rule{0pt}{2.5em} & & & & & & \\\\ \\hline \\text{회전체의 체적}\\rule{0pt}{2.5em} & & & & & & \\\\ \\hline \\text{회전체의 표면적}\\rule{0pt}{2.5em} & & & & & & \\\\ \\hline \\end{array}$$"
  ],
  "answer": [
    "$$\\small\\begin{array}{|c|c|c|c|c|c|c|} \\hline",
    "\\textbf{항목} & \\text{사이클로이드} & \\text{애스터로이드} & \\text{심장형} & \\text{연주형} & \\text{4엽장미} & \\text{3엽장미} \\\\ \\hline",
    "\\text{곡선} & \\begin{cases} x = a(t - \\sin t) \\\\ y = a(1 - \\cos t) \\end{cases} & \\begin{cases} x = a \\cos^3 t \\\\ y = a \\sin^3 t \\end{cases} & r = a(1 + \\cos\\theta) & r^2 = a^2 \\cos 2\\theta & r = a \\cos 2\\theta & r = a \\cos 3\\theta \\\\ \\hline",
    "\\text{면적} & 3\\pi a^2 & \\frac{3}{8}\\pi a^2 & \\frac{3}{2}\\pi a^2 & a^2 & \\frac{1}{2}\\pi a^2 & \\frac{\\pi}{4}a^2 \\\\ \\hline",
    "\\text{곡선의 길이} & 8a & 6a & 8a & \\text{--} & \\text{--} & \\text{--} \\\\ \\hline",
    "\\text{회전체의 체적} & 5\\pi^2 a^3 & \\frac{32}{105}\\pi a^3 & \\text{--} & \\text{--} & \\text{--} & \\text{--} \\\\ \\hline",
    "\\text{회전체의 표면적} & \\frac{64}{3}\\pi a^2 & \\frac{12}{5}\\pi a^2 & \\text{--} & \\text{--} & \\text{--} & \\text{--} \\\\ \\hline",
    "\\end{array}$$"
  ]
},
{
  "question": "무한급수의 성질",
  "example": [
    "$$\\text{(1) } \\sum_{k=1}^n k = ~~$$",
    "$$\\text{(2) } \\sum_{k=1}^{n-1} k = ~~$$"
  ],
  "answer": [
    "$$\\text{(1) } 1 + 2 + 3 + \\cdots + n = \\frac{n(n+1)}{2}$$",
    "$$\\text{(2) } 1 + 2 + 3 + \\cdots + (n - 1) = \\frac{n(n-1)}{2}$$",
  ]
},
{
  "question": "Maclaurin 급수 공식 ($$ \\sum $$까지 작성)",
  "example": [
    "$$\\text{(1)} \\quad \\frac{1}{1 - x} = ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ = ~~~~~~~~~~~~~~~~~~~~$$",
    "$$\\text{(2)} \\quad \\frac{1}{1 + x} = ~~~~~~~~~~~~~~~~~~~~$$",
    "$$\\text{(3)} \\quad e^x = ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ = ~~~~~~~~~~~~~~~~~~~~$$",
    "$$\\text{(4)} \\quad e^{-x} = ~~~~~~~~~~~~~~~~~~~~$$",
    "$$\\text{(5)} \\quad \\ln(1 + x) = ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ = ~~~~~~~~~~~~~~~~~~~~$$",
    "$$\\text{(6)} \\quad -\\ln(1 - x) = ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ = ~~~~~~~~~~~~~~~~~~~~$$",
    "$$\\text{(7)} \\quad \\sin x = ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ = ~~~~~~~~~~~~~~~~~~~~$$",
    "$$\\text{(8)} \\quad \\sinh x = ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ = ~~~~~~~~~~~~~~~~~~~~$$",
    "$$\\text{(9)} \\quad \\cos x = ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ = ~~~~~~~~~~~~~~~~~~~~$$",
    "$$\\text{(10)} \\quad \\cosh x = ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ = ~~~~~~~~~~~~~~~~~~~~$$",
    "$$\\text{(11)} \\quad \\tan^{-1} x = ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ = ~~~~~~~~~~~~~~~~~~~~$$",
    "$$\\text{(12)} \\quad \\tanh^{-1} x = ~~~~~~~~~~~~~~~~~~~~$$",
    "$$\\text{(13)} \\quad \\sin^{-1}x = ~~~~~~~~~~~~~~~~~~~~$$",
    "$$\\text{(14)} \\quad \\sinh^{-1}x = ~~~~~~~~~~~~~~~~~~~~$$",
    "$$\\text{(15)} \\quad \\tan x = ~~~~~~~~~~~~~~~~~~~~$$",
    "$$\\text{(16)} \\quad (1 + x)^p = ~~~~~~~~~~~~~~~~~~~~$$",

  ],
  "answer": [
    "$$\\text{(1)} \\quad \\frac{1}{1 - x} = 1 + x + x^2 + x^3 + \\cdots = \\sum_{n=0}^{\\infty} x^n \\quad (|x| < 1)$$",
    "$$\\text{(2)} \\quad \\frac{1}{1 + x} = 1 - x + x^2 - x^3 + \\cdots$$",
    "$$\\text{(3)} \\quad e^x = 1 + \\frac{x^2}{2!} + \\frac{x^3}{3!} + \\frac{x^4}{4!} + \\cdots = \\sum_{n=0}^{\\infty} \\frac{x^n}{n!} \\quad (-\\infty, \\infty)$$",
    "$$\\text{(4)} \\quad e^{-x} = 1 - \\frac{x^2}{2!} + \\frac{x^3}{3!} - \\frac{x^4}{4!} + \\cdots$$",
    "$$\\text{(5)} \\quad \\ln(1 + x) = x - \\frac{x^2}{2} + \\frac{x^3}{3} - \\cdots = \\sum_{n=1}^{\\infty} \\frac{(-1)^{n-1} x^n}{n} \\quad (-1, 1]$$",
    "$$\\text{(6)} \\quad -\\ln(1 - x) = x + \\frac{x^2}{2} + \\frac{x^3}{3} + \\frac{x^4}{4} + \\cdots = \\sum_{n=1}^{\\infty} \\frac{x^n}{n}$$",
    "$$\\text{(7)} \\quad \\sin x = x - \\frac{x^3}{3!} + \\frac{x^5}{5!} - \\frac{x^7}{7!} + \\cdots = \\sum_{n=0}^{\\infty} \\frac{(-1)^n x^{2n+1}}{(2n+1)!} \\quad (-\\infty, \\infty)$$",
    "$$\\text{(8)} \\quad \\sinh x = x + \\frac{x^3}{3!} + \\frac{x^5}{5!} + \\frac{x^7}{7!} + \\cdots = \\sum_{n=0}^{\\infty} \\frac{x^{2n+1}}{(2n+1)!} \\quad (-\\infty, \\infty)$$",
    "$$\\text{(9)} \\quad \\cos x = 1 - \\frac{x^2}{2!} + \\frac{x^4}{4!} - \\frac{x^6}{6!} + \\cdots = \\sum_{n=0}^{\\infty} \\frac{(-1)^n x^{2n}}{(2n)!} \\quad (-\\infty, \\infty)$$",
    "$$\\text{(10)} \\quad \\cosh x = 1 + \\frac{x^2}{2!} + \\frac{x^4}{4!} + \\frac{x^6}{6!} + \\cdots = \\sum_{n=0}^{\\infty} \\frac{x^{2n}}{(2n)!} \\quad (-\\infty, \\infty)$$",
    "$$\\text{(11)} \\quad \\tan^{-1} x = x - \\frac{x^3}{3} + \\frac{x^5}{5} - \\frac{x^7}{7} + \\cdots = \\sum_{n=0}^{\\infty} \\frac{(-1)^n x^{2n+1}}{2n+1} \\quad (|x| < 1)$$",
    "$$\\text{(12)} \\quad \\tanh^{-1} x = x + \\frac{x^3}{3} + \\frac{x^5}{5} + \\frac{x^7}{7} + \\cdots$$",
    "$$\\text{(13)} \\quad \\sin^{-1}x = x + \\frac{1}{6}x^3 + \\frac{3}{40}x^5 + \\cdots$$",
    "$$\\text{(14)} \\quad \\sinh^{-1}x = x - \\frac{1}{6}x^3 + \\frac{3}{40}x^5 + \\cdots$$",
    "$$\\text{(15)} \\quad \\tan x = x + \\frac{1}{3}x^3 + \\frac{2}{15}x^5 + \\cdots$$",
    "$$\\text{(16)} \\quad (1 + x)^p = 1 + px + \\frac{p(p-1)}{2!}x^2 + \\frac{p(p-1)(p-2)}{3!}x^3 + \\cdots$$",
  ]
},
{
  "question": "함수 비교 판정",
  "example": [
    "$$~~~~~~~~~~ \\rightarrow ~~~~~~~~~~ \\rightarrow ~~~~~~~~~~ \\rightarrow ~~~~~~~~~~ \\rightarrow ~~~~~~~~~~ \\rightarrow $$"
  ],
  "answer": [
    "$$\\sin n \\text{ or } \\cos n \\rightarrow \\ln n \\rightarrow n^p \\rightarrow a^n \\rightarrow n! \\rightarrow n^n$$"
  ]
},


    ],
    6: [
      {
        question:
          "극좌표로 서술된 다음의 점들을 직교좌표로 나타내었을 때, 제2사분면 위에 점은?",
        choices: [
          "$$(-1, -\\frac{\\pi}{4})$$",
          "$$(-1, \\frac{\\pi}{4})$$",
          "$$(1, -\\frac{\\pi}{4})$$",
          "$$(1, \\frac{\\pi}{4})$$",
        ],
        answer: "①",
      },
      {
        question: "제 3사분면에 속하는 점은?",
        choices: [
          "$$(1, \\frac{\\pi}{3})$$",
          "$$(-2, \\frac{5\\pi}{4})$$",
          "$$(2, -\\frac{\\pi}{6})$$",
          "$$(1, \\frac{4\\pi}{3})$$",
        ],
        answer: "④",
      },
      {
        question:
          "극좌표로 주어진 곡선$$r = 4\\sin\\theta$$를 직교좌표의 식으로 바꾼 것은?",
        choices: [
          "$$\\frac{(x - 2)^2}{4} + y^2 = 1$$",
          "$$x^2 + \\frac{(y - 2)^2}{4} = 1$$",
          "$$(x - 2)^2 + y^2 = 4$$",
          "$$x^2 + (y - 2)^2 = 4$$",
        ],
        answer: "④",
      },
      {
        question:
          "$$\\left(1, \\frac{\\pi}{6}\\right)$$을 직교좌표로 나타내면?",
        choices: [],
        answer: "$$\\left(\\frac{\\sqrt{3}}{2}, \\frac{1}{2}\\right)$$",
      },
      {
        question:
          "극좌표로 주어진 두 점$$P\\left(1, \\frac{\\pi}{3}\\right)$$과$$Q\\left(\\sqrt{2}, \\frac{\\pi}{6}\\right)$$사이의 거리는?",
        choices: [
          "$$\\sqrt{ {3} - \\sqrt{6}}$$",
          "$$\\sqrt{ {3} - \\sqrt{3}}$$",
          "$$\\sqrt{ {3} + \\sqrt{3}}$$",
          "$$\\sqrt{ {3} + \\sqrt{6}}$$",
        ],
        answer: "①",
      },
    ],

    8: [
      {
        question:
          "극곡선$$r = \\cos \\theta - \\sin \\theta$$로 둘러싸인 영역의 면적을 구하면?",
        choices: [
          "$$\\frac{\\pi}{2}$$",
          "$$\\pi$$",
          "$$2\\pi$$",
          "$$\\sqrt{2}\\pi$$",
        ],
        answer: "①",
      },
      {
        question: "곡선$$r = 2(\\cos \\theta + \\sin \\theta)$$의 길이는?",
        choices: [
          "$$\\sqrt{2}\\pi$$",
          "$$2\\sqrt{2}\\pi$$",
          "$$2\\pi$$",
          "$$4\\sqrt{2}\\pi$$",
        ],
        answer: "②",
      },
      {
        question: "다음은 원들의 방정식들이다. 이 중 반지름이 가장 작은 것은?",
        choices: [
          "$$r = -\\frac{2}{5}$$",
          "$$r = \\frac{3}{2} \\sin \\frac{\\theta}{2} \\cos \\frac{\\theta}{2}$$",
          "$$r = 2\\left(\\cos^2 \\frac{\\theta}{2} - \\sin^2 \\frac{\\theta}{2}\\right)$$",
          "$$r = -2 \\cos \\theta$$",
        ],
        answer: "②",
      },
      {
        question: "극좌표로 표현된 곡선 중에서 원점을 지나지 않는 것을 고르면?",
        choices: [
          "$$r = \\sin \\theta$$",
          "$$r = \\cos \\theta$$",
          "$$r = \\tan \\theta$$",
          "$$r = \\sec \\theta$$",
        ],
        answer: "④",
      },
    ],
    10: [
      {
        question:
          "극곡선$$r = 4\\sin\\theta$$에 대하여$$\\theta = \\frac{\\pi}{2}$$에서의 접선의 기울기는?",
        choices: [],
        answer: "$$0$$",
      },
      {
        question:
          "극곡선$$r = 2\\cos\\theta$$에 대하여$$\\theta = \\frac{\\pi}{4}$$에서의 접선의 기울기는?",
        choices: [],
        answer: "$$0$$",
      },
      {
        question:
          "평면상에서 극방정식$$r = 1 - 2\\cos\\theta$$로 주어지는 곡선상의 점 $$P$$의 직교 좌표는$$(0, 1)$$이다. 점$$P$$에서의 접선의 기울기는?",
        choices: [],
        answer: "$$-2$$",
      },
      {
        question:
          "곡선$$r = 2\\cos\\theta$$위의 점$$P\\left(1, \\frac{\\pi}{3}\\right)$$에서의 접선이 동경$$OP$$와 이루는 각의 크기는?",
        choices: [
          "$$\\frac{\\pi}{3}$$",
          "$$\\frac{\\pi}{6}$$",
          "$$\\frac{\\pi}{4}$$",
          "$$\\frac{\\pi}{2}$$",
        ],
        answer: "②",
      },
      {
        question:
          "극곡선$$r = 2\\sin\\theta$$위에서 동경과 접선 사이의 각이$$\\frac{\\pi}{6}$$인 점의 극좌표는?",
        choices: [],
        answer: "$$ \\left( 1, \\frac{pi}{6} \\right) $$",
      },
    ],
    11: [
      {
        question:
          "극방정식$$r = \\tan \\theta \\sec \\theta$$를 직교방정식으로 나타낸 것은?",
        choices: [
          "$$y = x^3$$",
          "$$y = x^2$$",
          "$$y = \\sqrt{x}$$",
          "$$y = \\sqrt{1 - x^2}$$",
        ],
        answer: "②",
      },
      {
        question:
          "점$$(r, \\theta) = \\left(\\sqrt{2}, \\frac{\\pi}{4}\\right)$$과 극 곡선$$r = \\frac{4}{2\\cos\\theta - \\sin\\theta}$$사이의 최단거리는?",
        choices: [
          "$$\\frac{1}{\\sqrt{5}}$$",
          "$$\\frac{3}{\\sqrt{5}}$$",
          "$$1$$",
          "$$\\sqrt{2}$$",
        ],
        answer: "②",
      },
      {
        question: "곡선$$r = \\frac{6}{3 + 2\\sin \\theta}$$는?",
        choices: ["직선", "포물선", "타원", "쌍곡선"],
        answer: "③",
      },
      {
        question:
          "좌표평면에서 극좌표$$(r, \\theta)$$로 나타낸 두 점$$\\left(-2, \\frac{2\\pi}{3}\\right), \\left(\\sqrt{3}, \\frac{\\pi}{6}\\right)$$사이의 거리는?",
        choices: [
          "$$\\sqrt{3}$$",
          "$$2$$",
          "$$\\sqrt{5}$$",
          "$$\\sqrt{6}$$",
          "$$\\sqrt{7}$$",
        ],
        answer: "⑤",
      },
    ],
    12: [
      {
        question:
          "$$xy$$평면에 두 극방정식$$r = 2\\cos\\theta$$와$$r = 0$$의 그래프를 그렸을 때, 두 그래프가 만나는 점의 개수는?",
        choices: ["0개", "1개", "2개", "4개"],
        answer: "③",
      },
      {
        question: "다음 극방정식의 그래프의 모양을 잘못 나타낸 것을 고르시오.",
        choices: [
          "$$r = \\theta, \\theta > 0$$: 나선형",
          "$$r = \\sin 4\\theta$$: 8개 잎의 꽃잎모양",
          "$$r = 4\\sin\\theta$$: 원점을 지나는 원 (반지름 2)",
          "$$r = \\sec\\theta$$: 수평선",
        ],
        answer: "④",
      },
      {
        question:
          "극 좌표로 주어진 곡선$$r = 1 - \\cos\\theta$$를$$xy$$좌표평면에 나타낼 때, 이 곡선이$$x$$축 또는$$y$$축과 만나는 4개 점들의$$x$$좌표값과$$y$$좌표값을 모두 더하면?",
        choices: ["$$-2$$", "$$-1$$", "$$0$$", "$$1$$", "$$2$$"],
        answer: "①",
      },
      {
        question:
          "두 극 방정식$$r = 1 + \\sin\\theta$$,$$r = 1 - \\cos\\theta$$로 정의된 두 곡선의 교점의 개수는?",
        choices: ["0개", "1개", "2개", "3개", "4개"],
        answer: "④",
      },
      {
        question: "직교방정식$$(x - 2)^2 + y^2 = 4$$를 극방정식으로 나타내면?",
        choices: [
          "$$r = 4 + 8\\cos \\frac{\\theta}{2}$$",
          "$$r = 4 + 8\\sin \\frac{\\theta}{2}$$",
          "$$r = 4 - 8\\cos^2 \\frac{\\theta}{2}$$",
          "$$r = 4 - 8\\sin^2 \\frac{\\theta}{2}$$",
        ],
        answer: "④",
      },
    ],
    13: [
      {
        question:
          "극곡선$$r = \\sin \\theta + \\cos \\theta$$으로 둘러싸인 영역의 넓이는?",
        choices: [
          "$$\\frac{\\pi}{2}$$",
          "$$\\pi$$",
          "$$\\frac{3\\pi}{2}$$",
          "$$2\\pi$$",
        ],
        answer: "①",
      },
      {
        question: "심장선$$r = 1 + \\sin \\theta$$로 둘러싸인 영역의 넓이는?",
        choices: [
          "$$\\frac{11\\pi}{8}$$",
          "$$\\frac{3\\pi}{2}$$",
          "$$\\frac{13\\pi}{8}$$",
          "$$\\frac{7\\pi}{4}$$",
        ],
        answer: "②",
      },
      {
        question:
          "극좌표평면상에서 곡선$$r = 2\\sqrt{2}(1 + \\cos \\theta)$$로 둘러싸인 영역의 넓이는?",
        choices: ["$$6\\pi$$", "$$12\\pi$$", "$$8\\pi$$", "$$16\\pi$$"],
        answer: "②",
      },
      {
        question:
          "극방정식$$r = 2 + \\cos \\theta + \\sin \\theta$$로 주어진 곡선으로 둘러싸인 영역의 넓이는?",
        choices: [
          "$$\\pi$$",
          "$$2\\pi$$",
          "$$3\\pi$$",
          "$$4\\pi$$",
          "$$5\\pi$$",
        ],
        answer: "⑤",
      },
    ],
    14: [
      {
        question:
          "극좌표로 표현된 곡선$$r = 1 + \\cos\\theta$$,$$ \\left( 0 \\leq \\theta \\leq \\frac{\\pi}{2} \\right)$$와$$x$$축,$$y$$축으로 둘러싸인 부분의 넓이를 구하면?",
        choices: [
          "$$\\frac{3\\pi}{8} + 1$$",
          "$$\\frac{\\pi}{2} + 1$$",
          "$$\\frac{5\\pi}{8} + 1$$",
          "$$\\frac{5\\pi}{8} + \\frac{1}{2}$$",
        ],
        answer: "①",
      },
      {
        question:
          "극좌표로 표현된 곡선$$r = 1 + \\cos\\theta$$의 내부와 단위원$$x^2 + y^2 = 1$$의 내부의 공통 부분의 넓이는?",
        choices: [
          "$$\\frac{3}{4}\\pi - 2$$",
          "$$\\frac{5}{4}\\pi - 2$$",
          "$$\\frac{7}{4}\\pi - 2$$",
          "$$\\frac{9}{4}\\pi - 2$$",
        ],
        answer: "②",
      },
      {
        question: "곡선$$r = 5 + 4\\cos\\theta$$로 둘러싸인 부분의 넓이는?",
        choices: ["$$32\\pi$$", "$$33\\pi$$", "$$31\\pi$$", "$$35\\pi$$"],
        answer: "②",
      },
      {
        question:
          "극곡선$$r = 1 + \\sin\\theta$$에 의해 둘러싸인 영역의 넓이를$$a$$, 둘레의 길이를$$b$$라 할 때,$$ab$$의 값은?",
        choices: ["$$16\\pi$$", "$$16\\pi^2$$", "$$12\\pi$$", "$$12\\pi^2$$"],
        answer: "③",
      },
    ],
    15: [
      {
        question:
          "극방정식$$r = 1 + \\cos \\theta$$($$0 \\leq \\theta \\leq 2\\pi$$)로 주어진 닫힌 곡선의 길이는?",
        choices: ["$$4$$", "$$5$$", "$$6$$", "$$7$$", "$$8$$"],
        answer: "⑤",
      },
      {
        question:
          "극방정식$$r = 2(1 - \\cos \\theta)$$으로 주어진 곡선의 길이는?",
        choices: ["$$8$$", "$$10$$", "$$12$$", "$$14$$", "$$16$$"],
        answer: "⑤",
      },
      {
        question:
          "극좌표계에서 곡선$$r = 3 \\cos \\theta$$($$0 \\leq \\theta \\leq \\frac{\\pi}{2}$$)의 길이는?",
        choices: [
          "$$\\frac{\\pi}{4}$$",
          "$$\\frac{\\pi}{2}$$",
          "$$\\frac{3\\pi}{4}$$",
          "$$\\frac{3\\pi}{2}$$",
        ],
        answer: "④",
      },
      {
        question:
          "곡선$$r = 3\\sin\\theta + 4\\cos\\theta$$($$0 \\leq \\theta \\leq 2\\pi$$)의 길이는?",
        choices: [
          "$$9\\pi$$",
          "$$10\\pi$$",
          "$$11\\pi$$",
          "$$12\\pi$$",
          "$$13\\pi$$",
        ],
        answer: "②",
      },
    ],
    16: [
      {
        question:
          "극방정식$$r = 1 + \\sin \\theta$$로 주어진 곡선의$$\\theta = \\frac{\\pi}{3}$$인 점에서 접선의 기울기는?",
        choices: ["$$-2$$", "$$-1$$", "$$0$$", "$$1$$", "$$2$$"],
        answer: "②",
      },
      {
        question:
          "극좌표로$$r = 1 + \\cos \\theta$$로 표시되는 곡선이 있다.$$\\theta = \\frac{\\pi}{6}$$로 지정된 점에서 이 곡선의 접선의 기울기는?",
        choices: [
          "$$-2$$",
          "$$-1$$",
          "$$-\\frac{1}{3}$$",
          "$$-\\frac{1}{2}$$",
          "$$-\\frac{\\sqrt{3}}{2}$$",
        ],
        answer: "②",
      },
      {
        question:
          "극방정식$$r = 1 + 2\\cos \\theta$$의 그래프를 생각하자. 직교좌표로 표시된 이 곡선 위의 점$$(1, \\sqrt{3})$$에서의 접선의 방정식의 기울기는?",
        choices: [
          "$$\\frac{1}{9}$$",
          "$$\\frac{\\sqrt{3}}{9}$$",
          "$$\\frac{1}{3}$$",
          "$$\\frac{\\sqrt{3}}{3}$$",
          "$$1$$",
        ],
        answer: "②",
      },
      {
        question:
          "극곡선$$r = 3 + 4\\sin \\theta$$위의$$\\theta = \\frac{\\pi}{6}$$에 대응하는 점에서의 접선의 기울기는?",
        choices: [
          "$$\\sqrt{3}$$",
          "$$3\\sqrt{3}$$",
          "$$5\\sqrt{3}$$",
          "$$7\\sqrt{3}$$",
          "$$9\\sqrt{3}$$",
        ],
        answer: "④",
      },
      {
        question:
          "극방정식으로 주어진 곡선$$r = 2\\sin \\theta$$위의 점$$\\left(\\sqrt{3}, \\frac{\\pi}{3}\\right)$$에서 접선의 기울기는?",
        choices: [
          "$$-\\sqrt{3}$$",
          "$$-\\frac{1}{\\sqrt{3}}$$",
          "$$\\frac{1}{\\sqrt{3}}$$",
          "$$\\sqrt{3}$$",
        ],
        answer: "①",
      },
    ],
    17: [
      {
        question:
          "극방정식$$r = 2\\sin 3\\theta$$에 대하여$$\\theta = \\frac{\\pi}{6}$$에서의 접선의 기울기는?",
        choices: [
          "$$-\\sqrt{3}$$",
          "$$-\\frac{\\sqrt{3}}{2}$$",
          "$$\\frac{\\sqrt{3}}{2}$$",
          "$$\\sqrt{3}$$",
        ],
        answer: "①",
      },
      {
        question:
          "극좌표로 정의된 곡선$$r = 1 + 2\\sin \\theta$$에 있는 점$$\\left(2, \\frac{\\pi}{6}\\right)$$에서의 접선의 방정식은?",
        choices: [
          "$$y = 3\\sqrt{3}x - 8$$",
          "$$y = 3\\sqrt{3}x + \\frac{\\pi}{6} - 9$$",
          "$$y = \\frac{\\sqrt{3}}{4}x - \\frac{5}{2}$$",
          "$$y = \\frac{3\\sqrt{3}}{2}x - \\frac{7}{2}$$",
          "$$y = \\frac{3\\sqrt{3}}{2}x + \\frac{\\pi}{6} - 3\\sqrt{3}$$",
        ],
        answer: "①",
      },
      {
        question:
          "극좌표로 나타낸 곡선$$r = e^{2 \\theta}$$위의 점$$(e^{2\\pi}, \\pi)$$에서의 접선의 방정식을 직교좌표계의 식으로 나타낸 것은?",
        choices: [
          "$$y = \\frac{1}{3}(x + e^{2\\pi})$$",
          "$$y = \\frac{1}{2}(x + e^{2\\pi})$$",
          "$$y = \\frac{1}{3}(x - e^{2\\pi})$$",
          "$$y = \\frac{1}{2}(x - e^{2\\pi})$$",
        ],
        answer: "②",
      },
      {
        question:
          "곡선$$r = 1 + \\cos \\theta$$위의 점에서의 접선의 방정식이$$y = a$$이다. 양수$$a$$의 값은?",
        choices: [
          "$$\\frac{\\sqrt{19}}{4}$$",
          "$$\\frac{\\sqrt{21}}{4}$$",
          "$$\\frac{\\sqrt{23}}{4}$$",
          "$$\\frac{5}{4}$$",
          "$$\\frac{3\\sqrt{3}}{4}$$",
        ],
        answer: "⑤",
      },
    ],
    18: [
      {
        question:
          "선분$$P₁$$은 극방정식으로 표현된 곡선$$r = 1 - \\cos \\theta$$위의 점$$\\left( 1, \\frac{\\pi}{2} \\right)$$에서의 접선이고, 선분$$P₂$$는 극방정식으로 표현된 곡선$$r = 2\\sin \\theta$$위의 점$$\\left(\\sqrt{2}, \\frac{\\pi}{4}\\right)$$에서의 접선일 때, 두 접선$$P₁$$과$$P₂$$의 교점은?",
        choices: [
          "$$(1, 0)$$",
          "$$\\left(1, \\frac{\\pi}{2} \\right)$$",
          "$$(1, \\pi)$$",
          "$$\\left(1, \\frac{3\\pi}{2} \\right)$$",
        ],
        answer: "①",
      },
      {
        question:
          "극방정식$$r = \\sqrt{3} + \\cos \\theta$$,$$ \\left( 0 \\leq \\theta < 2\\pi \\right) $$로 주어진 곡선에서 수직 접선을 갖는 모든$$\\theta$$값의 합은?",
        choices: [
          "$$\\frac{3}{2}\\pi$$",
          "$$2\\pi$$",
          "$$\\frac{5}{2}\\pi$$",
          "$$3\\pi$$",
          "$$\\frac{7}{2}\\pi$$",
        ],
        answer: "④",
      },
      {
        question:
          "곡선$$r = 2\\cos \\theta$$위의 점$$P \\left(1, \\frac{\\pi}{3} \\right)$$에서의 접선이 동경 $$OP$$와 이루는 각의 크기는?",
        choices: [
          "$$\\frac{\\pi}{3}$$",
          "$$\\frac{\\pi}{6}$$",
          "$$\\frac{\\pi}{4}$$",
          "$$\\frac{\\pi}{2}$$",
        ],
        answer: "②",
      },
      {
        question:
          "두 곡선$$r = 2\\cos \\theta$$와$$r = 3\\tan \\theta$$는 점$$\\left(\\sqrt{3}, \\frac{\\pi}{6}\\right)$$에서 만난다. 이 점에서의 교각은?",
        choices: [
          "$$\\frac{\\pi}{4}$$",
          "$$\\frac{\\pi}{2}$$",
          "$$\\tan^{-1} 2\\sqrt{5}$$",
          "$$\\tan^{-1} 5\\sqrt{3}$$",
        ],
        answer: "④",
      },
      {
        question:
          "두 곡선$$r = \\cos 2\\theta$$와$$r = \\sin 2\\theta$$가 극좌표$$\\left(\\frac{\\sqrt{2}}{2}, \\frac{\\pi}{8}\\right)$$에서 만날 때, 두 곡선의 교각을$$\\alpha$$라 하자. 이때$$\\tan \\alpha$$의 값은?",
        choices: [
          "$$0$$",
          "$$\\frac{1}{3}$$",
          "$$\\frac{2}{3}$$",
          "$$1$$",
          "$$\\frac{4}{3}$$",
        ],
        answer: "⑤",
      },
    ],
    24: [
      {
        question:
          "다음 함수의 임계점과 변곡점을 구하여라.$$y = \\frac{1}{3}x^3 - \\frac{1}{2}x^2 - 2x$$",
        choices: [],
        answer: "임계점 : $$ x=-1, 2 $$ , 변곡점 : $$ x = \\frac{1}{2} $$",
      },
      {
        question:
          "다음 함수의 임계점과 변곡점을 구하여라.$$y = 3x^5 + 10x^3 + 15x + 1$$",
        choices: [],
        answer: "임계점 : $$x$$ , 변곡점 : $$ x = 0 $$",
      },
      {
        question:
          "다음 함수의 극댓값, 극솟값을 구하여라.$$y = x + \\frac{1}{x}$$",
        choices: [],
        answer: "극댓값 : $$-2$$, 극솟값 : $$2$$",
      },
      {
        question:
          "다음 함수의 극댓값, 극솟값을 구하여라.$$y = x^3 - 9x^2 + 15x - 5$$",
        choices: [],
        answer: "극댓값 : $$6$$, 극솟값 : $$-30$$",
      },
      {
        question:
          "함수$$f(x) = \\ln x + \\frac{2}{x^2}$$의 그래프가 증가하는 구간으로 옳은 것은?",
        choices: [
          "$$2 \\leq x$$",
          "$$0 < x$$",
          "$$1 \\leq x$$",
          "$$0 < x \\leq 1$$",
        ],
        answer: "①",
      },
      {
        question: "방정식$$4x^5 + 2x^3 + 8x - 10 = 0$$의 실근의 개수를 구하면?",
        choices: ["0개", "1개", "3개", "5개"],
        answer: "②",
      },
      {
        question:
          "함수$$f(x) = 3x^6 + 4x^3 - x$$에 대한 역함수가 존재하지 않는 구간은?",
        choices: ["$$(-3, -2)$$", "$$(-2, -1)$$", "$$(-1, 1)$$", "$$(1, 2)$$"],
        answer: "③",
      },
      {
        question:
          "함수 $$y = xe^{-2x}$$는$$x = a$$에서 극값$$b$$를 갖는다고 할 때,$$ab$$는 얼마인가?",
        choices: [
          "$$\\frac{e^{-1}}{2}$$",
          "$$\\frac{e^{-1}}{4}$$",
          "$$e^{-2}$$",
          "$$\\frac{e^{-2}}{4}$$",
        ],
        answer: "①",
      },
      {
        question:
          "함수$$f(x) = x^3 - 3ax^2 + a^2$$($$a > 0$$)의 극댓값과 극솟값의 차가$$32$$일 때,$$a$$의 값은?",
        choices: ["$$1$$", "$$2$$", "$$4$$", "$$6$$"],
        answer: "②",
      },
      {
        question: "함수$$f(x) = \\frac{1}{3}x^{2/3}(5 - 2x)$$의 극소점은?",
        choices: [
          "$$(1, 1)$$",
          "$$(-1, 7/3)$$",
          "$$(8, -44/3)$$",
          "$$(0, 0)$$",
        ],
        answer: "④",
      },
    ],
    27: [
      {
        question:
          "$$x$$축 위에 두 꼭짓점을 그리고 포물선$$y = 1 - x^2$$위에 두 꼭짓점을 갖는 직사각형의 넓이의 최댓값은?",
        choices: [],
        answer: "$$ \\frac{4}{3 \\sqrt{3}} $$",
      },
      {
        question:
          "$$x$$축 위에 두 꼭짓점을 그리고 포물선$$y = 12 - x^2$$위에 두 꼭짓점을 갖는 직사각형의 넓이의 최댓값은?<br>(단,$$y > 0$$)",
        choices: [],
        answer: "$$32$$",
      },
      {
        question:
          "점$$(5, -1)$$에서 곡선$$y = x^2$$위의 점까지의 거리 중 최단거리는?",
        choices: [],
        answer: "$$2 \\sqrt{5}$$",
      },
      {
        question:
          "구 모양의 기구 안으로 공기를 불어넣을 때, 기구의 부피는$$200\\ \\text{cm}^3/\\text{s}$$의 비율로 증가한다. 직경(지름)이$$40\\ \\text{cm}$$일 때, 기구의 반지름은 얼마나 빨리 증가하겠는가?",
        choices: [],
        answer: "①",
      },
      {
        question:
          "어떤 정육면체의 겉넓이가 매초$$24\\text{cm}^2$$의 비율로 일정하게 증가한다면 이 정육면체의 모서리의 길이가$$1\\text{cm}$$가 되는 순간의 부피의 변화율은 얼마인가?",
        choices: [],
        answer: "$$6$$",
      },
    ],
    28: [
      {
        question:
          "곡선$$x^2y^2 + 2x^2y + x^2 - 4y^2 - 7 = 0$$의 점근선이 아닌 것은?",
        choices: ["$$x = 2$$", "$$x = -2$$", "$$y = 1$$", "$$y = -1$$"],
        answer: "③",
      },
      {
        question:
          "함수$$f(x) = \\frac{2x^3 - 3x^2 + 4x - 1}{x^2 + x + 1}$$의 사점근선을 구하면?",
        choices: [],
        answer: "$$ y=2x-5 $$",
      },
    ],
    29: [
      {
        question:
          "함수$$f(x) = \\frac{2x^4 + ax + b}{x^3}$$($$a, b$$는 상수)가$$x = 1$$에서 극값 $$5$$를 가질 때,$$f(-1)$$의 값은?",
        choices: ["$$9$$", "$$-9$$", "$$5$$", "$$-5$$"],
        answer: "①",
      },
      {
        question: "$$f(x) = (3x + 1)(x - 1)^3$$일 때, 극댓값과 극솟값의 값은?",
        choices: [
          "극댓값 : $$-1$$, 극솟값 : $$0$$",
          "극댓값 : $$0$$, 극솟값 : $$-1$$",
          "극댓값 : $$0$$, 극솟값은 존재하지 않는다",
          "극댓값은 존재하지 않는다, 극솟값 : $$-1$$",
        ],
        answer: "④",
      },
    ],
    30: [
      {
        question:
          "함수$$f(x) = -x^3 - kx^2 + kx - 4$$가$$x_1 < x_2$$인 임의의 실수$$x_1, x_2$$에 대하여 항상$$f(x_1) > f(x_2)$$를 만족하도록 하는 실수$$k$$의 범위를 구하면?",
        choices: ["$$(-3, 0)$$", "$$(-2, 1)$$", "$$(-1, 3)$$", "$$(0, 3)$$"],
        answer: "①",
      },
      {
        question:
          "함수$$f : (a, b) \\to \\mathbb{R}$$가$$c \\in (a, b)$$의 근방에서 연속인 2계 도함수를 가질 때, <보기>의 명제 중 항상 참인 것을 모두 고르면?",
        example: [
          "$$\\text{가. } f \\text{가 } c \\text{에서 극값을 가지면 } f'(c) = 0 \\text{이다.}$$",
          "$$\\text{나. } f'(c) = 0 \\text{이면 } f \\text{는 } c \\text{에서 극댓값 또는 극솟값을 갖는다.}$$",
          "$$\\text{다. } f'(c) = 0 \\text{이고 } f''(c) > 0 \\text{이면 } f \\text{는 } c \\text{에서 극댓값을 갖는다.}$$",
        ],
        choices: ["가", "가, 나", "가, 나, 다", "가, 다"],
        answer: "①",
      },
      {
        question:
          "미분 가능한 두 함수$$f, g$$가 모든 실수$$x$$에 대하여$$f'(x) > g'(x)$$를 만족시킨다. <br>함수$$y = f(x)$$와$$y = g(x)$$의 그래프에 대한 설명 중 옳은 것은?",
        choices: [
          "두 그래프는 만나지 않는다.",
          "두 그래프는 단 한 번 만난다.",
          "두 그래프는 많아야 한 번 만난다.",
          "두 그래프는 두 번 이상 만난다.",
          "두 그래프는 공통 접선을 가진다.",
        ],
        answer: "②",
      },
      {
        question:
          "미분 가능한 함수$$f, g$$가 모든 실수$$x$$에 대하여$$f'(x) > g'(x)$$이다.$$f(2) = g(2)$$일 때, 다음 중 옳은 것은?",
        choices: [
          "$$f(0) > g(0)$$",
          "$$f(1) > g(1)$$",
          "$$f(3) > g(3)$$",
          "$$f(4) < g(4)$$",
        ],
        answer: "③",
      },
    ],
    31: [
      {
        question:
          "$$f(x)$$의 도함수가$$f'(x) = x^2 - 2x$$일 때, 다음 중 옳은 것을 고르면?",
        choices: [
          "$$f(x)$$는 증가함수이다.",
          "$$f(x)$$의 그래프는 구간$$( -\\infty, 2 ]$$에서 위로 볼록이다.",
          "$$f(x)$$의 그래프는 구간$$[1, \\infty)$$에서 아래로 볼록이다.",
          "$$f(x)$$는 최소값$$-1$$을 갖는다.",
        ],
        answer: "③",
      },
      {
        question:
          "두 함수$$f(x) = x^3 - 5x^2 + x - 3$$,$$g(x) = -2x^2 + x + a$$에 대하여$$x > 0$$에서$$f(x) > g(x)$$가 성립하는$$a$$의 값의 범위는?",
        choices: [
          "$$-12 < a < -7$$",
          "$$a > -4$$",
          "$$3 < a < 7$$",
          "$$a < -7$$",
        ],
        answer: "④",
      },
      {
        question:
          "$$f(x) = x^3 - 3x^2 + 5x + 1$$의 그래프에서 서로 다른 두 점$$P = (x_1, f(x_1))$$,$$Q = (x_2, f(x_2))$$를 임의로 선택하였다. <br> 단, 점$$x_1, x_2$$는 조건$$2 \\leq x_1 \\leq 3,\\ 2 \\leq x_2 \\leq 3$$을 만족한다. 다음 중에서 직선$$PQ$$의 기울기가 될 수 없는 것은?",
        choices: ["$$5.5$$", "$$6$$", "$$13.5$$", "$$15.5$$"],
        answer: "④",
      },
    ],
    32: [
      {
        question: "방정식$$10x^4 - 5x + 1 = 0$$의 실근의 개수는?",
        choices: ["$$0$$개", "$$1$$개", "$$2$$개", "$$4$$개"],
        answer: "③",
      },
      {
        question: "방정식$$x - 2 = \\ln x$$의 실수해의 개수를 구하면?",
        choices: ["$$0$$개", "$$1$$개", "$$2$$개", "$$4$$개"],
        answer: "③",
      },
      {
        question:
          "$$x$$에 대한 방정식$$x^4 + 4ax + 5 = 0$$이 실근을 갖지 않게 하는$$a$$의 값 중에 정수인 것의 개수는?",
        choices: ["$$1$$개", "$$2$$개", "$$3$$개", "$$4$$개"],
        answer: "③",
      },
    ],
    33: [
      {
        question:
          "구간$$[0, 2]$$에서 함수$$f(x) = \\frac{\\ln(1 + x)}{(1 + x)^2}$$의 최댓값은?",
        choices: [
          "$$\\frac{\\ln 2}{4}$$",
          "$$\\frac{\\ln 3}{9}$$",
          "$$\\frac{1}{2e}$$",
          "$$\\frac{1}{e}$$",
        ],
        answer: "③",
      },
      {
        question:
          "$$x = 2 \\cos t$$일 때, 함수$$f(x) = \\frac{1}{1 + e^{-x}}$$의 최댓값과 최솟값의 차이는?",
        choices: [
          "$$e^2 - 1$$",
          "$$\\sinh 1$$",
          "$$\\text{sech} 1$$",
          "$$\\tanh 1$$",
        ],
        answer: "④",
      },
      {
        question:
          "구간$$[1, 5]$$에서 함수$$f(x) = (x - 1)^2 - 4 \\ln x$$의 최댓값을$$a + b \\ln c$$라 할 때$$a - b + c$$의 값은?",
        choices: ["$$7$$", "$$12$$", "$$17$$", "$$25$$"],
        answer: "④",
      },
    ],
    34: [
      {
        question:
          "$$f(x) = x^2 e^{-x}$$의 구간$$[-1, 3]$$에서 최소값과 최댓값의 합은?",
        choices: [
          "$$e + \\frac{4}{e^2}$$",
          "$$\\frac{9}{e^3} + \\frac{4}{e^2}$$",
          "$$e$$",
          "$$e + \\frac{9}{e^3}$$",
        ],
        answer: "③",
      },
      {
        question:
          "$$0 \\leq x \\leq \\frac{\\pi}{2}$$에서 함수$$y = 2\\sin x + \\cos 2x$$의 최댓값은?",
        choices: [
          "$$1$$",
          "$$2$$",
          "$$3$$",
          "$$\\frac{5}{2}$$",
          "$$\\frac{3}{2}$$",
        ],
        answer: "②",
      },
      {
        question:
          "$$[0, \\infty)$$에서 함수$$f(x) = e^{-2x} - e^{-3x}$$의 최댓값은?",
        choices: [
          "$$\\frac{4}{27}$$",
          "$$\\frac{5}{27}$$",
          "$$\\frac{2}{9}$$",
          "$$\\frac{7}{27}$$",
          "$$\\frac{8}{27}$$",
        ],
        answer: "①",
      },
    ],
    35: [
      {
        question:
          "원점에서 곡선 $$x^2 - x + \\frac{5}{4} - y^2 = 0$$에 가장 가까운 점의 좌표는?",
        choices: [
          "$$\\left(0, \\frac{\\sqrt{5}}{2} \\right)$$",
          "$$\\left(1, \\frac{\\sqrt{5}}{2} \\right)$$",
          "$$\\left(\\frac{1}{4}, \\frac{\\sqrt{17}}{4} \\right)$$",
          "$$\\left(\\frac{1}{2}, 1 \\right)$$",
        ],
        answer: "④",
      },
      {
        question: "$$x^2 + y^2 = 1$$에서$$f(x, y) = -\\sqrt{2}xy$$의 최댓값은?",
        choices: [
          "$$0$$",
          "$$\\frac{1}{\\sqrt{2}}$$",
          "$$\\sqrt{2}$$",
          "$$2$$",
        ],
        answer: "②",
      },
      {
        question:
          "타원 $$x^2 + 2y^2 = 1$$,$$f(x, y) = 2x^2 - y^2$$의 최댓값과 최솟값의 합은?",
        choices: ["$$-\\frac{1}{2}$$", "$$0$$", "$$1$$", "$$\\frac{3}{2}$$"],
        answer: "④",
      },
    ],
    36: [
      {
        question: "$$x > 0$$일 때, 다음 부등식 중에서 옳지 않은 것은?",
        choices: [
          "$$\\sin x < 2x$$",
          "$$x \\ln x < x - 1$$",
          "$$x \\geq \\ln x + 1$$",
          "$$\\ln(1 + x) > \\frac{x}{1 + x}$$",
        ],
        answer: "②",
      },
      {
        question:
          "다음 <보기> 중 $$0 \\leq x \\leq \\frac{\\pi}{2}$$에서 항상 성립하는 절대부등식을 모두 고르면?",
        example:
          "$$(a) \\ x \\cos x \\leq \\sin x <br> (b) \\ \\sin x \\leq \\frac{|\\sqrt{2}}{2}\\left(x-{\\frac{\\pi}{4}} + 1\\right) <br> (c) \\ \\cos x \\leq \\frac{\\pi}{2} - x$$",
        choices: [
          "$$(a), (b)$$",
          "$$(a), (c)$$",
          "$$(b), (c)$$",
          "$$(a), (b), (c)$$",
        ],
        answer: "④",
      },
      {
        question: "$$0 < x < 1$$일 때, 다음 중 옳지 않은 것은?",
        choices: [
          "$$\\sin^{-1} x < \\frac{x}{\\sqrt{1 - x^2}}$$",
          "$$\\tan^{-1} x < x$$",
          "$$\\tan^{-1} x > \\frac{x}{1 + x^2}$$",
          "$$\\sin^{-1} x < x$$",
        ],
        answer: "④",
      },
    ],
    37: [
      {
        question:
          "어떤 물체가 곡선$$y = \\sqrt{1 + x^3}$$위에서 움직이고 있다. 점$$(2, 3)$$을 지나는 순간$$y$$좌표가$$4\\,m/s$$의 속력으로 움직이고 있을 때$$x$$좌표의 속력은?",
        choices: ["$$0.5\\,m/s$$", "$$1\\,m/s$$", "$$2\\,m/s$$", "$$3\\,m/s$$"],
        answer: "③",
      },
      {
        question:
          "두 대의 차가 동일 지점에서 출발한다. 그 중 한 대는 시속$$30\\,km$$로 남쪽으로 향하고, 다른 한 대는 시속$$72\\,km$$로 서쪽을 향해 달린다. 30분 후 두 대의 차가 멀어지는 속력은 시속 몇$$km$$인가?",
        choices: ["$$75$$", "$$76$$", "$$77$$", "$$78$$"],
        answer: "④",
      },
      {
        question:
          "북쪽으로부터 십자교차로로 접근하는 경찰차가 방금 교차로를 지나 동쪽으로 움직이는 속도위반 차량을 추적하고 있다. 경찰차가 교차로의 북쪽 $$600m$$, 속도위반 차량이 동쪽 $$800m$$에 있을 때, 경찰차와 속도위반 차량 사이의 거리가$$20\\,km/h$$의 일정한 속도로 증가하고 있다. 경찰차가$$60\\,km/h$$의 속도로 교차로로 접근하고 있다면 속도위반 차량의 속도는 얼마인가?",
        choices: [
          "$$60\\,km/h$$",
          "$$70\\,km/h$$",
          "$$65\\,km/h$$",
          "$$75\\,km/h$$",
        ],
        answer: "②",
      },
    ],
    38: [
      {
        question:
          "곡선$$y = 9 - x^2$$과$$x$$축으로 둘러싸인 도형에 내접하는 직사각형의 최대 넓이는?",
        choices: [
          "$$12$$",
          "$$12\\sqrt{3}$$",
          "$$18\\sqrt{3}$$",
          "$$4\\sqrt{6}$$",
        ],
        answer: "②",
      },
      {
        question:
          "곡선$$y = \\sqrt{4 - x^2}$$과$$x$$축으로 둘러싸인 부분에 내접하고 한 변이$$x$$축에 놓여 있는 직사각형의 넓이의 최댓값을 구하면?",
        choices: ["$$2$$", "$$2\\sqrt{2}$$", "$$4$$", "$$4\\sqrt{2}$$"],
        answer: "③",
      },
      {
        question:
          "곡선$$x^2 + 2y = 10$$과$$x$$축으로 둘러싸인 영역에 내접하는 직사각형의 최대 둘레의 길이는?",
        choices: [
          "$$11$$",
          "$$14$$",
          "$$6 + 2\\sqrt{10}$$",
          "$$8 + 4\\sqrt{2}$$",
        ],
        answer: "②",
      },
      {
        question:
          "좌표평면에서 포물선$$y = 1 - x^2$$위의 점$$P$$에서의 접선이$$x$$축,$$y$$축과 만나는 점을 각각$$A$$,$$B$$라 할 때, 삼각형$$OAB$$의 넓이의 최소값은? (단, 점$$O$$는 원점이고 점$$P$$는 제 1 사분면에 있다.)",
        choices: [
          "$$\\frac{2\\sqrt{3}}{9}$$",
          "$$\\frac{\\sqrt{3}}{3}$$",
          "$$\\frac{4\\sqrt{3}}{9}$$",
          "$$\\frac{5\\sqrt{3}}{9}$$",
          "$$\\frac{2\\sqrt{3}}{3}$$",
        ],
        answer: "③",
      },
    ],
    39: [
      {
        question:
          "원$$x^2 + y^2 = 49$$에 내접하면서 면적이 최대가 되는 직사각형의 면적은?",
        choices: ["$$12$$", "$$14$$", "$$28$$", "$$42$$", "$$98$$"],
        answer: "⑤",
      },
      {
        question:
          "타원$$\\frac{x^2}{16} + \\frac{y^2}{9} = 1$$에 내접하면서 면적이 최대가 되는 직사각형의 면적은?",
        choices: ["$$12$$", "$$24$$", "$$48$$", "$$12\\pi$$"],
        answer: "②",
      },
      {
        question:
          "반지름의 길이가$$2$$인 구에 내접하는 직육면체의 최대 부피는?",
        choices: [
          "$$\\frac{1}{3}$$",
          "$$\\frac{2}{3}$$",
          "$$\\frac{8}{3\\sqrt{3}}$$",
          "$$\\frac{64}{3\\sqrt{3}}$$",
        ],
        answer: "④",
      },
      {
        question:
          "곡면$$\\frac{x^2}{4} + y^2 + \\frac{z^2}{9} = 1$$에 내접하는 직육면체의 최대 부피는?",
        choices: [
          "$$\\frac{2}{\\sqrt{3}}$$",
          "$$\\frac{8}{3\\sqrt{3}}$$",
          "$$\\frac{16}{\\sqrt{3}}$$",
          "$$\\frac{40}{3\\sqrt{3}}$$",
        ],
        answer: "③",
      },
      {
        question:
          "반지름의 길이가$$\\sqrt{3}$$인 구에 내접하는 원기둥의 최대 부피는?",
        choices: ["$$\\pi$$", "$$2\\pi$$", "$$2\\sqrt{2}\\pi$$", "$$4\\pi$$"],
        answer: "④",
      },
    ],
    40: [
      {
        question:
          "반지름이 매초$$2\\text{cm}$$씩 증가하는 구가 있다. 반지름이$$10\\text{cm}$$되는 순간의 이 구의 표면적의 증가율은?",
        choices: ["$$2\\pi$$", "$$20\\pi$$", "$$80\\pi$$", "$$160\\pi$$"],
        answer: "④",
      },
      {
        question:
          "$$5\\text{cm}^3/sec$$의 비율로 부풀고 있는 정육면체 모양의 물체가 있다. 한 변의 길이가$$10\\text{cm}$$일 때, 이 물체의 표면적의 증가율은?",
        choices: ["$$1$$", "$$2$$", "$$3$$", "$$4$$"],
        answer: "②",
      },
      {
        question:
          "공 모양의 고무용기에 매초$$200\\text{mm}^3$$의 비율로 액체가 주입되고 있다. 반지름이$$10\\text{mm}$$가 될 때의 겉넓이의 변화율은 얼마인가? (단, 용기의 두께는 무시하고, 처음 용기의 반지름은$$5\\text{mm}$$이다)",
        choices: [
          "$$20\\text{mm}^2/sec$$",
          "$$40\\text{mm}^2/sec$$",
          "$$2000\\text{mm}^2/sec$$",
          "$$4000\\text{mm}^2/sec$$",
        ],
        answer: "②",
      },
      {
        question:
          "반지름이$$5\\text{m}$$인 원통형 탱크에$$3\\text{m}^3/\\text{min}$$의 속력으로 물이 채워지고 있을 때, 물의 높이의 변화율은?",
        choices: [
          "$$\\frac{1}{25\\pi} \\text{m/min}$$",
          "$$\\frac{2}{25\\pi} \\text{m/min}$$",
          "$$\\frac{3}{25\\pi} \\text{m/min}$$",
          "$$\\frac{4}{25\\pi} \\text{m/min}$$",
        ],
        answer: "③",
      },
    ],
    41: [
      {
        question:
          "수직인 벽에$$13\\text{m}$$길이의 사다리가 세워져 있다. 사다리의 밑바닥은 벽으로부터$$2\\text{m}/\\text{초}$$의 비율로 멀어 진다고 한다. 사다리의 밑바닥이 벽으로부터$$5\\text{m}$$일 때, 사다리의 꼭대기가 벽으로부터 미끄러져 내려는 속도를 구하면?",
        choices: [
          "$$\\frac{1}{2}$$",
          "$$\\frac{3}{4}$$",
          "$$\\frac{5}{6}$$",
          "$$\\frac{7}{8}$$",
        ],
        answer: "③",
      },
      {
        question:
          "시태양의 고도각이$$0.25\\text{ rad}/h$$의 비율로 감소하고 있다. 태양의 고도각이$$\\frac{\\pi}{3}$$일 때,$$100\\text{ m}$$높이의 건물에 대한 그림자는 얼마의 속도로 증가하는가?",
        choices: [
          "$$\\frac{100}{3} \\text{ m/h}$$",
          "$$\\frac{97}{3} \\text{ m/h}$$",
          "$$25 \\text{ m/h}$$",
          "$$\\frac{95}{2} \\text{ m/h}$$",
        ],
        answer: "①",
      },
      {
        question:
          "뜨거운 공기가 들어 있는 풍선이 지면으로부터 수직인 방향으로 올라가고 있고, 풍선이 처음 출발한 지점으로부터 거리가$$500\\text{ m}$$의 지점에서 풍선을 바라보고 있다. 지면과 풍선이 이루는 각의 크기가$$\\frac{\\pi}{4}$$일 때, 지면과 풍선이 이루는 각의 크기가$$0.14\\text{ rad}/\\text{min}$$의 속도로 증가하고 있다. 풍선이 상승하는 속도는?",
        choices: [
          "$$130 \\text{ m/min}$$",
          "$$136 \\text{ m/min}$$",
          "$$140 \\text{ m/min}$$",
          "$$142 \\text{ m/min}$$",
        ],
        answer: "③",
      },
    ],
    42: [
      {
        question:
          "부피가$$100\\,cm^3$$인 실린더 모양의 통조림통을 만들려고 한다. 통조림통 제작에 소요되는 철판의 넓이를 최소화할 때, 통조림통의 반지름은 얼마인가?",
        choices: [
          "$$\\frac{10}{3}\\,cm$$",
          "$$\\frac{10}{\\pi}\\,cm$$",
          "$$\\frac{20}{\\pi}\\,cm$$",
          "$$\\sqrt{\\frac{30}{\\pi}}\\,cm$$",
          "$$\\sqrt{\\frac{50}{\\pi}}\\,cm$$",
        ],
        answer: "⑤",
      },
      {
        question:
          "어떤 상품을 매주$$x$$개씩 판매할 때 개당 판매가격은$$P(x) = 500 - 0.02x$$원이고 이 상품을 매주$$x$$개씩 생산할 때, 총생산비는$$C(x) = 100x + 40,000$$원이다. 주당 얻는 이익을 최대로 하려면 매주 몇 개씩 생산해야 하는가?",
        choices: ["$$10^2$$개", "$$10^3$$개", "$$10^4$$개", "$$10^5$$개"],
        answer: "③",
      },
      {
        question:
          "직선위에서 움직이는 물체의 시간$$t$$에서의 위치를$$x(t)$$라 하자. 이 물체의 속도$$\\frac{dx}{dt}$$가 식$$\\frac{dx}{dt} = 1 + \\sin x$$를 항상 만족한다면 다음 주어진 위치 중에서 물체의 가속도$$\\frac{d^2x}{dt^2}$$가 가장 클 경우는?",
        choices: [
          "$$x = 0$$",
          "$$x = \\frac{\\pi}{6}$$",
          "$$x = \\frac{\\pi}{4}$$",
          "$$x = \\frac{\\pi}{3}$$",
        ],
        answer: "②",
      },
    ],
    43: [
      {
        question:
          "$$y = \\frac{2x^3 + 2x^2 - x + 1}{x^2 - 1}$$의 그래프의 점근선 중 수직 또는 수평 점근선이 아닌 점근선은?",
        choices: [
          "$$y = x + 1$$",
          "$$y = -x - 1$$",
          "$$y = 2x + 2$$",
          "$$y = 2x - 1$$",
          "$$y = 2x + 1$$",
        ],
        answer: "③",
      },
      {
        question:
          "함수$$f(x) = \\frac{3x^2 + 2x^2 - 3x - 2}{x^2 + x + 1}$$의 점근선으로 올바른 것은?",
        choices: [
          "$$y = x + 3$$",
          "$$y = x - 3$$",
          "$$y = 3x + 1$$",
          "$$y = 3x - 1$$",
        ],
        answer: "④",
      },
      {
        question:
          "$$x \\in [0, \\infty)$$일 때, 곡선$$y = \\frac{3x^2}{x^2 - 1}$$의 수직점근선과 수평점근선을 각각$$x = \\alpha,\\ y = \\beta$$라 하면$$\\alpha - \\beta$$의 값은?",
        choices: ["$$0$$", "$$1$$", "$$-1$$", "$$2$$", "$$-2$$"],
        answer: "⑤",
      },
    ],
    44: [
      {
        question:
          "$$f > 0$$인 함수$$f$$에 대해 함수$$F$$를 다음과 같이 정의할 때, 다음 설명 중 옳은 것은?",
        example: "$$F(x) = \\int_0^x f(t)(x - t)\\,dt, \\quad x > 0$$",
        choices: [
          "$$F$$는 증가 함수이면서 위로 볼록이다.",
          "$$F$$는 증가 함수이면서 아래로 볼록이다.",
          "$$F$$는 감소 함수이면서 위로 볼록이다.",
          "$$F$$는 감소 함수이면서 아래로 볼록이다.",
          "$$F$$는 1차 함수이다.",
        ],
        answer: "②",
      },
    ],
    45: [
      {
        question:
          "곡선$$y = x^4$$을$$y$$축 주위로 회전하여 얻어진 물탱크에 물을 넣고 있다. 물의 깊이가$$4\\text{cm}$$일 때 수면의 높이가$$2\\text{cm/sec}$$의 속도로 증가하고 있다면, 그때 수면의 넓이의 변화율은 몇$$\\text{cm}^2/\\text{sec}$$인가?",
        choices: [
          "$$4\\pi$$",
          "$$2\\pi$$",
          "$$\\pi$$",
          "$$\\frac{3}{2}\\pi$$",
          "$$\\frac{\\pi}{2}$$",
        ],
        answer: "⑤",
      },
      {
        question:
          "함수$$f(x) = \\int_0^{x^2} (1 - t)\\sqrt{1 - 4t^2} dt$$의 최댓값을 구하면?",
        choices: [
          "$$\\frac{1}{8}\\left(\\pi - \\frac{1}{3}\\right)$$",
          "$$\\frac{1}{8}\\left(\\pi - \\frac{2}{3}\\right)$$",
          "$$\\frac{1}{8}(\\pi - 1)$$",
          "$$\\frac{1}{8}\\left(\\pi - \\frac{4}{3}\\right)$$",
          "$$\\frac{1}{8}\\left(\\pi - \\frac{5}{3}\\right)$$",
        ],
        answer: "②",
      },
      {
        question:
          "좌표평면의 원점에서 두 점$$A$$와$$B$$가 출발하여 각각$$x$$축과$$y$$축을 따라 움직인다.$$t$$초 후의 두 점$$A$$,$$B$$의 위치가 각각$$(10t - t^2, 0)$$과$$(0, 6t - t^2)$$이다.$$0 \\leq t \\leq 7$$인 범위에서 두 점 사이의 거리가 최대가 되는$$t$$의 값은?",
        choices: [
          "$$5 - \\sqrt{3}$$",
          "$$5 - \\sqrt{2}$$",
          "$$6 - \\sqrt{3}$$",
          "$$6 - \\sqrt{2}$$",
          "$$7$$",
        ],
        answer: "④",
      },
    ],
    46: [
      {
        question:
          "타원의 장축과 단축의 증가율이 각각$$3\\text{cm/s}$$와$$4\\text{cm/s}$$이다. 장축이$$8\\text{cm}$$이고 단축이$$6\\text{cm}$$일 때, 타원 넓이의 변화율은?",
        choices: [
          "$$\\frac{25\\pi}{2}\\text{cm}^2/\\text{s}$$",
          "$$25\\pi\\text{cm}^2/\\text{s}$$",
          "$$36\\pi\\text{cm}^2/\\text{s}$$",
          "$$50\\pi\\text{cm}^2/\\text{s}$$",
        ],
        answer: "①",
      },
    ],
    47: [
      {
        question:
          "$$1L$$를 담을 수 있는 뚜껑이 없는 원기둥 모양의 저장 용기의 겉넓이가 최소가 되는 반지름$$r$$와 높이$$h$$에 대하여,$$\\frac{h}{r}$$는? (단, 저장용기의 두께는 무시한다.)",
        choices: ["$$\\frac{1}{4}$$", "$$\\frac{1}{2}$$", "$$1$$", "$$2$$"],
        answer: "③",
      },
      {
        question:
          "어떤 함수 $$f$$의 도함수가$$f'(x) = \\sin(3x + 2)$$일 때,$$0 < x < 5$$에서$$f$$의 극대점의 개수는?",
        choices: ["2", "3", "4", "5"],
        answer: "②",
      },
      {
        question:
          "함수 $$f(x) = x^3 e^{-kx}$$가$$x = 1$$에서 변곡점을 갖게 하는 모든$$k$$값들의 곱은?",
        choices: ["$$-15$$", "$$6$$", "$$9$$", "$$15$$"],
        answer: "②",
      },
      {
        question:
          "삼각형 $$\\triangle ABC$$에서 $$c = \\overline{AB}$$는 $$3\\,\\mathrm{cm/sec}$$, $$b = \\overline{AC}$$는 $$1\\,\\mathrm{cm/sec}$$, 그리고 이 두 변 사이의 각 $$\\alpha$$는 $$0.1\\,\\mathrm{rad/sec}$$의 변화율로 각각 증가한다면, $$c = 10\\,\\mathrm{cm}$$, $$b = 8\\,\\mathrm{cm}$$, $$\\alpha = \\frac{\\pi}{6}$$일 때 삼각형의 넓이의 변화율은 몇 $$\\mathrm{cm^2/sec}$$인가?",
        choices: [
          "$$2\\sqrt{3} + 8.5$$",
          "$$2\\sqrt{3} + 7$$",
          "$$\\sqrt{3} + 8.5$$",
          "$$\\sqrt{3} + 7.5$$",
          "$$\\sqrt{3} + 7$$",
        ],
        answer: "①",
      },
    ],
    48: [
      {
        question:
          "점$$(1, 4)$$이 곡선$$y = x^3 + ax^2 + bx + 1$$의 변곡점일 때,$$b$$의 값은? (단,$$a, b$$는 상수)",
        choices: ["1", "3", "5", "7"],
        answer: "③",
      },
      {
        question:
          "좌표평면에서 곡선$$y = e^{-|x|}$$과$$x$$축 사이에 있고, 한 변이$$x$$축에 평행한 직사각형의 최대 넓이는?",
        choices: [
          "$$\\frac{1}{e}$$",
          "$$\\frac{2}{e}$$",
          "$$\\frac{3}{e}$$",
          "$$\\frac{4}{e}$$",
        ],
        answer: "②",
      },
      {
        question:
          "구간$$[-1, 3]$$에서 정의된 함수$$f(x) = \\frac{16x}{x^2 + 4}$$의 최소값을$$m$$, 최대값을$$M$$이라 할 때,$$m + M$$의 값은?",
        choices: [
          "0",
          "$$\\frac{1}{3}$$",
          "$$\\frac{3}{4}$$",
          "$$\\frac{4}{5}$$",
        ],
        answer: "④",
      },
    ],
    49: [
      {
        question:
          "함수$$f(x) = \\int_3^{x^2} (1 - t)e^t dt$$에 대하여 곡선$$y = f(x)$$가 위로 오목(아래로 볼록)인 구간에 속하는 정수는?",
        choices: ["−2", "−1", "0", "1", "2"],
        answer: "③",
      },
      {
        question:
          "함수$$f(x) = 5x + 11 + \\frac{20}{x}$$가$$x = a$$에서 극댓값을 갖고$$x = b$$에서 극솟값을 가질 때$$f(a) − f(b)$$의 값은?",
        choices: ["25", "30", "35", "40", "−40"],
        answer: "⑤",
      },
      {
        question:
          "정육면체의 부피가$$10cm^3/sec$$의 비율로 증가하고 있다. 한 변의 길이가$$30cm$$일 때 겉넓이의 증가율은?",
        choices: [
          "$$\\frac{1}{3}cm^2/sec$$",
          "$$\\frac{2}{3}cm^2/sec$$",
          "$$1cm^2/sec$$",
          "$$\\frac{3}{4}cm^2/sec$$",
          "$$\\frac{5}{3}cm^2/sec$$",
        ],
        answer: "④",
      },
    ],
    55: [
      {
        question:
          "1. 좌표평면에서 곡선$$y = \\arccos x$$와 직선$$x = \\frac{1}{\\sqrt{2}}$$및$$x$$축으로 둘러싸인 영역의 넓이는?",
        choices: [],
        answer: "$$\\frac{1}{\\sqrt{2}} - \\frac{\\pi}{4\\sqrt{2}}$$" 
      },
      {
        question:
          "2. 함수$$f(x) = x^2 - 3$$과$$g(x) = x - 1$$로 둘러싸인 영역의 넓이는?",
        choices: [],
        answer: "$$\\frac{9}{2}$$" 
      },
      {
        question:
          "3. 매개함수$$\\begin{cases} x(\\theta) = a(\\theta - \\sin \\theta) \\\\ y(\\theta) = a(1 - \\cos \\theta) \\end{cases}$$인 사이클로이드(Cycloid) ($$0 \\leq \\theta \\leq 2\\pi$$)와$$x$$축으로 둘러싸인 영역의 넓이는?",
        choices: [],
        answer: "$$3\\pi a^2$$" 
      },
      {
        question:
          "4. 곡선$$x = 5 \\cos^3 t, \\quad y = 5 \\sin^3 t \\left( 0 \\leq t \\leq \\frac{\\pi}{2} \\right)$$을$$x$$축으로 둘러싸인 영역의 넓이는?",
        choices: [],
        answer: "$$\\frac{75}{32}\\pi$$" 
      },
      {
        question:
          "5. 곡선$$r = 2 \\cos \\theta$$의 내부와 곡선$$r = 1$$의 외부의 공통부분 면적은?",
        choices: [],
        answer: "$$\\frac{\\pi}{3} + \\frac{\\sqrt{3}}{2}$$"
      },
      {
        question:
          "6. 심장선$$r = 2 + 2 \\sin \\theta$$의 내부와 원$$r = 4 \\sin \\theta$$의 외부에 놓인 영역의 넓이는?",
        choices: [],
        answer: "$$2\\pi$$" 
      },
      {
        question:
          "7. 밀면이$$y = \\sin x \\, (0 \\leq x \\leq \\pi)$$인 입체가 있다. 이 입체를$$x$$축에 수직인 평면으로 자른 단면이 정삼각형일 때 입체의 체적은?",
        choices: [],
        answer: "$$\\frac{\\pi}{2}$$" 
      },
      {
        question:
          "8. 곡선$$y = \\sqrt{x} + 1$$, 직선$$x = 1$$, 그리고$$x$$축으로 둘러싸인 영역이 밑면이고,$$x$$축에 수직인 단면이 정사각형인 입체도형의 부피는?",
        choices: [],
        answer: "$$\\frac{17}{6}$$" 
      },
    ],
    57: [
      {
        question:
          "9. 곡선$$y = \\frac{1}{4}x^2 - \\frac{1}{2}\\ln x \\, (1 \\leq x \\leq e)$$의 길이는?",
        choices: [],
        answer: "$$\\frac{1}{4}(e^2 + 1)$$" 
      },
      {
        question:
          "10. 곡선$$y = \\ln(\\sin(x)) \\, \\left( \\frac{\\pi}{6} \\leq x \\leq \\frac{\\pi}{2} \\right)$$의 길이를 구하면?",
        choices: [],
        answer: "$$\\ln(2 + \\sqrt{3})$$" 
      },
      {
        question:
          "11. 매개함수$$\\begin{cases} x(t) = a \\cos^{3} t \\\\ y(t) = a \\sin^{3} t \\end{cases}$$은 성망형(Astroid) ($$0 \\leq t \\leq 2\\pi$$)의 곡선이다. 이 곡선의 길이는?",
        choices: [],
        answer: "$$6a$$" 
      },
      {
        question:
          "12. 다음 곡선$$x(t) = 3 + t^2, \\quad y(t) = \\cosh(t^2) \\, (0 \\leq t \\leq 1)$$의 길이는?",
        choices: [],
        answer: "$$\\sinh(1)$$" 
      },
      {
        question:
          "13. 극곡선$$r = 1 + \\sin \\theta$$의$$0 \\leq \\theta \\leq \\frac{\\pi}{2}$$부분에 대한 길이는?",
        choices: [],
        answer: "$$\\frac{\\pi}{8}$$" 
      },
      {
        question:
          "14. $$-\\frac{\\pi}{4} \\leq \\theta \\leq \\frac{\\pi}{4}$$에서 곡선$$r = 2 \\sec \\theta$$의 호의 길이는?",
        choices: [],
        answer: "$$4\\sqrt{2}$$" 
      },
      {
        question:
          "15. 곡선$$r = \\sin \\theta$$를$$x$$축에 대하여 회전시켰을 때 생기는 곡면의 부피와 면적을 구하면?",
        choices: [],
        answer: "$$\\text{부피: } \\pi^2 ,\\ \\text{표면적: } 2\\pi^2$$" 
      },
      {
        question:
          "16. 극좌표 곡선$$r = -4\\cos\\theta$$를 직선$$r = \\sec \\theta$$에 관하여 회전시켰을 때 생긴 회전체의 부피와 표면적은?",
        choices: [],
        answer: "$$\\text{부피: } 24\\pi^2 ,\\ \\text{표면적: } 24\\pi^2$$" 
      },
    ],
    62: [
      {
        question:
          "17. $$x = 0$$에서$$x = 1$$까지 곡선$$y = \\sqrt{x}$$아래의 영역을$$x$$축으로 회전하여 생긴 입체의 부피를 구하시오.",
        choices: [],
        answer: "$$\\frac{\\pi}{2}$$" 
      },
      {
        question:
          "18. $$y = 0$$과$$y = 10x^2 - 5x^3$$으로 둘러싸인 영역을$$y$$축 중심으로 회전하여 생기는 입체의 부피는?",
        choices: [],
        answer: "$$16\\pi$$" 
      },
      {
        question:
          "19. 곡선$$x = \\cos t, y = \\sin t \\left(\\frac{\\pi}{t} \\leq t \\leq \\frac{3}{2}\\pi\\right)$$을$$y$$축 중심으로 회전시킨 회전체의 체적은?",
        choices: [],
        answer: "$$\\frac{2\\pi}{3}$$" 
      },
      {
        question:
          "20. 곡선$$y = x^2$$의 점$$(0,0)$$부터 점$$(\\sqrt{6}, 6)$$까지의 부분을$$y$$축으로 회전시킨 회전체의 곡면적은?",
        choices: [],
        answer: "$$\\frac{62}{3}\\pi$$" 
      },
      {
        question:
          "21. 곡선$$x = 3\\cos^3 t, y = 3\\sin^3 t (0 \\leq t \\leq 2\\pi)$$을$$x$$축을 중심으로 회전해서 생기는 회전곡면의 넓이는?",
        choices: [],
        answer: "$$\\frac{108}{5}\\pi$$" 
      },
      {
        question: "22. $$r = 3 - 3\\cos \\theta$$의 면적을 구하면?",
        choices: [],
        answer: "$$\\frac{27}{2}\\pi$$"
      },
      {
        question:
          "23. $$r = 3\\cos 2\\theta$$와$$r = 2\\cos 3\\theta$$의 면적을 각각$$A, B$$라 했을 때,$$AB$$의 값은?",
        choices: [],
        answer: "$$\\frac{9}{2}\\pi^2$$" 
      },
      {
        question:
          "24. 사이클로이드(Cycloid)$$x = 3(\\theta - \\sin \\theta), y = 3(1 - \\cos \\theta)$$의 한 호의 길이는?",
        choices: [],
        answer: "$$24$$",
      },
      {
        question: "25. 곡선$$r^2 = 4\\sin 2\\theta$$이 이루는 영역의 면적은?",
        choices: [],
        answer: "$$12$$",
      },
    ],
    63: [
      {
        question:
          "곡선$$y = \\sqrt{2x - 1}$$과 직선$$x = 5$$, 그리고$$x$$축으로 둘러싸인 영역의 넓이는?",
        choices: ["6", "7", "8", "9"],
        answer: "④",
      },
      {
        question:
          "$$y = \\frac{1}{4 + x^2}$$과 세 직선$$x = 2, x = 2\\sqrt{3}, y = 0$$으로 둘러싸인 영역의 넓이는?",
        choices: [
          "$$\\frac{\\pi}{6}$$",
          "$$\\frac{\\pi}{12}$$",
          "$$\\frac{\\pi}{24}$$",
          "$$\\frac{\\pi}{48}$$",
        ],
        answer: "③",
      },
      {
        question:
          "곡선$$y = 2e^x$$, 원점을 지나는 이 곡선의 접선,$$y$$축으로 둘러싸인 영역의 넓이는?",
        choices: ["$$2e$$", "$$e - 1$$", "$$2e - 1$$", "$$e - 2$$"],
        answer: "④",
      },
      {
        question:
          "$$y = -x, y = x + 6$$과 곡선$$y = x^3$$으로 둘러싸인 영역의 넓이는?",
        choices: ["17", "18", "19", "20"],
        answer: "③",
      },
    ],
    64: [
      {
        question:
          "곡선$$x = \\cos^3 t, y = \\sin^2t $$$$(0 \\leq t \\leq \\pi)$$와$$x$$축으로 둘러싸인 부분의 넓이는?",
        choices: [
          "$$\\frac{2}{5}$$",
          "$$\\frac{4}{5}$$",
          "$$\\frac{6}{5}$$",
          "$$\\frac{8}{5}$$",
          "$$2$$",
        ],
        answer: "②",
      },
      {
        question:
          "좌표평면에서 매개 방정식$$x = 3(\\theta - \\sin \\theta),\\ y = 3(1 - \\cos \\theta),\\ 0 \\leq \\theta \\leq 2\\pi$$으로 주어진 곡선과$$x$$축으로 둘러싸인 영역의 면적은?",
        choices: ["$$3\\pi$$", "$$9\\pi$$", "$$27\\pi$$", "$$81\\pi$$"],
        answer: "③",
      },
      {
        question:
          "극좌표평면상에서 곡선$$r = 2\\sqrt{2}(1 + \\cos \\theta)$$로 둘러싸인 영역의 넓이는?",
        choices: ["$$6\\pi$$", "$$12\\pi$$", "$$8\\pi$$", "$$16\\pi$$"],
        answer: "②",
      },
      {
        question:
          "$$r = 3 + \\sin \\theta\\ (0 \\leq \\theta \\leq 2\\pi)$$의 내부영역의 넓이를 구하면?",
        choices: [
          "$$6\\pi$$",
          "$$6\\sqrt{2}\\pi$$",
          "$$\\frac{19\\pi}{2}$$",
          "$$11\\pi$$",
        ],
        answer: "③",
      },
    ],
    65: [
      {
        question:
          "$$r = \\sqrt{1 + \\sin \\theta}$$과 두 사선$$\\theta = 0$$과$$\\theta = \\frac{\\pi}{3}$$로 둘러싸인 영역의 넓이는?",
        choices: [
          "$$\\frac{\\pi}{6}$$",
          "$$\\frac{\\pi}{6} + \\frac{1}{4}$$",
          "$$\\frac{\\pi}{3} + \\frac{1}{2}$$",
          "$$\\frac{\\pi}{3}$$",
        ],
        answer: "②",
      },
      {
        question:
          "극곡선$$r = \\sqrt{1 + \\cos \\theta}$$에 의하여 둘러싸인 영역의 넓이를 구하면?",
        choices: [
          "$$\\pi$$",
          "$$2\\pi$$",
          "$$\\frac{\\pi}{3}$$",
          "$$\\frac{\\pi}{4}$$",
        ],
        answer: "①",
      },
      {
        question:
          "곡선$$r = 7 \\cos 4\\theta$$의 한 잎(one loop)에 의해 둘러싸인 부분의 넓이를 구하면?",
        choices: [
          "$$\\frac{49\\pi}{16}$$",
          "$$16\\pi$$",
          "$$\\pi$$",
          "$$\\frac{49\\pi}{11}$$",
        ],
        answer: "①",
      },
      {
        question:
          "$$r = 1 + \\cos \\theta$$의 내부와$$r = \\sin \\theta$$의 내부로 된 영역의 넓이는?",
        choices: [
          "$$\\pi - 2$$",
          "$$\\pi + \\frac{1}{2}$$",
          "$$2\\pi$$",
          "$$\\frac{\\pi}{2} - 1$$",
        ],
        answer: "④",
      },
    ],
    66: [
      {
        question:
          "곡선$$y = \\sqrt{x}$$, 직선$$x = 2$$, 그리고$$x$$축으로 둘러싸인 영역이 밑면이고,$$x$$축에 수직인 단면이 정삼각형인 입체의 체적은?",
        choices: [
          "$$\\pi$$",
          "$$\\sqrt{3}$$",
          "$$\\frac{\\sqrt{3}}{2}$$",
          "$$\\frac{\\sqrt{3}}{2} \\pi$$",
        ],
        answer: "③",
      },
      {
        question:
          "영역$$\\{(x, y) : 0 \\le y \\le \\sin^2 x, 0 \\le x \\le \\pi \\}$$를 밑바닥으로 하는 입체가 있다. 이 입체를$$x$$축에 수직인 평면으로 자른 단면이 정사각형일 때, 이 입체의 부피는?",
        choices: [
          "$$\\frac{\\pi}{8}$$",
          "$$\\frac{\\pi}{4}$$",
          "$$\\frac{3\\pi}{8}$$",
          "$$\\frac{\\pi}{2}$$",
          "$$\\pi$$",
        ],
        answer: "③",
      },
      {
        question:
          "구간$$[-1, 1]$$에서 입체도형$$S$$를$$x$$축에 수직인 평면으로 자른 단면의 중심이 포물선$$y = \\frac{1}{2}(1 - x^2)$$에 있고$$x$$축에 접하는 원이다. 이 입체도형$$S$$의 부피는?",
        choices: [
          "$$\\frac{\\pi}{15}$$",
          "$$\\frac{2\\pi}{15}$$",
          "$$\\frac{\\pi}{5}$$",
          "$$\\frac{4\\pi}{15}$$",
          "$$\\frac{\\pi}{3}$$",
        ],
        answer: "④",
      },
    ],
    67: [
      {
        question: "$$y = \\cosh x$$,$$-1 \\le x \\le 1$$의 길이는?",
        choices: [
          "$$\\sinh 1$$",
          "$$\\cosh 1$$",
          "$$2\\sinh 1$$",
          "$$2\\cosh 1$$",
        ],
        answer: "③",
      },
      {
        question:
          "$$y = \\ln(\\sec x) \\quad (0 \\le x \\le \\frac{\\pi}{6})$$의 곡선의 길이는?",
        choices: [
          "$$\\ln 2$$",
          "$$\\ln 3$$",
          "$$\\ln \\sqrt{2}$$",
          "$$\\ln \\sqrt{3}$$",
        ],
        answer: "④",
      },
      {
        question:
          "매개변수 방정식$$x(t) = \\sin^3 t$$,$$y(t) = \\cos^3 t - 3 \\cos t \\quad (0 \\le t \\le \\pi)$$로 주어진 평면곡선의 길이는?",
        choices: [
          "$$3\\pi$$",
          "$$\\frac{3\\pi}{2}$$",
          "$$5\\pi$$",
          "$$\\frac{5\\pi}{2}$$",
        ],
        answer: "②",
      },
      {
        question:
          "곡선$$r = \\theta^2 \\quad (0 \\le \\theta \\le 1)$$이 그리는 곡선의 길이는?",
        choices: [
          "$$\\sqrt{2}\\pi$$",
          "$$\\sqrt{3}\\pi$$",
          "$$\\frac{1}{3}(5\\sqrt{5} - 8)$$",
          "$$\\frac{1}{5}(\\sqrt{2} - 1)$$",
        ],
        answer: "③",
      },
    ],
    68: [
      {
        question: "극곡선$$r = 1 - \\cos \\theta$$의 전체 길이를 구하면?",
        choices: ["4", "5", "6", "7", "8"],
        answer: "⑤",
      },
      {
        question:
          "극좌표계에서 곡선$$r = 3 \\cos \\theta \\quad (0 \\le \\theta \\le \\frac{\\pi}{2})$$의 길이는?",
        choices: [
          "$$\\frac{\\pi}{4}$$",
          "$$\\frac{\\pi}{2}$$",
          "$$\\frac{3\\pi}{4}$$",
          "$$\\frac{3\\pi}{2}$$",
        ],
        answer: "④",
      },
      {
        question:
          "사이클로이드(cycloid)$$x = 2(\\theta - \\sin \\theta), \\quad y = 2(1 - \\cos \\theta)$$의 한 호의 길이는?",
        choices: ["2", "4", "8", "16"],
        answer: "④",
      },
      {
        question:
          "곡선$$x = 3 \\cos^3 \\theta, \\quad y = 3 \\sin^3 \\theta$$의 전체 길이는?",
        choices: ["3", "6", "18", "36"],
        answer: "③",
      },
    ],
    69: [
      {
        question:
          "곡선$$x = 2y^2$$,$$x = 4 + y^2$$으로 둘러싸인 부분의 넓이는?",
        choices: [
          "$$\\frac{1}{2}$$",
          "$$\\frac{5}{2}$$",
          "3",
          "$$\\frac{32}{3}$$",
        ],
        answer: "④",
      },
      {
        question:
          "$$x = y^2$$,$$y - 2x = 4$$,$$y = -1$$,$$y = 2$$로 둘러싸인 영역의 넓이는?",
        choices: [
          "$$\\frac{26}{3}$$",
          "$$\\frac{33}{4}$$",
          "$$\\frac{34}{6}$$",
          "$$\\frac{91}{12}$$",
        ],
        answer: "②",
      },
      {
        question:
          "곡선$$x = \\frac{1}{3}\\sqrt{y}(y - 3)$$,$$1 \\leq y \\leq 9$$의 길이는?",
        choices: [
          "$$\\frac{128}{3}$$",
          "$$\\frac{64}{3}$$",
          "$$\\frac{32}{3}$$",
          "$$\\frac{16}{3}$$",
        ],
        answer: "③",
      },
      {
        question:
          "구간$$0 \\leq \\theta \\leq \\pi$$에서 극방정식$$r = \\theta$$가 나타내는 곡선의 길이에 대한 설명 중 옳은 것은?",
        choices: [
          " 1 보다 작다.",
          " 1 보다 크고 2 보다 작다.",
          " 2 보다 크고$$\\pi$$보다 작다.",
          "$$\\pi$$보다 크다.",
        ],
        answer: "④",
      },
    ],
    70: [
      {
        question:
          "원$$(x - 3)^2 + (y - 4)^2 = 1$$의 내부 영역을$$y$$축에 대해 회전시켰을 때의 회전체의 부피는?",
        choices: ["$$2\\pi^2$$", "$$4\\pi^2$$", "$$6\\pi^2$$", "$$8\\pi^2$$"],
        answer: "③",
      },
      {
        question:
          "곡선$$r = \\sin\\theta$$를$$x$$축에 대하여 회전시켰을 때 생기는 곡면의 면적을 구하면?",
        choices: [
          "$$\\frac{\\pi^2}{6}$$",
          "$$\\frac{\\pi^2}{4}$$",
          "$$\\frac{\\pi^2}{2}$$",
          "$$\\pi^2$$",
        ],
        answer: "④",
      },
      {
        question:
          "영역$$\\{(x, y) : (x - 1)^2 + (y - 2)^2 \\leq 1\\}$$을$$y$$축 둘레로 회전하여 생긴 회전체의 부피는?",
        choices: [
          "$$\\pi$$",
          "$$\\pi^2$$",
          "$$2\\pi$$",
          "$$2\\pi^2$$",
          "$$4\\pi$$",
        ],
        answer: "③",
      },
      {
        question:
          "영역$$\\{(x, y) \\in \\mathbb{R}^2\\ |\\ x^2 + (y - 2)^2 \\leq 1\\}$$을$$x$$축 중심으로 회전시켰을 때, 생기는 입체의 체적을 구하면?",
        choices: ["$$6\\pi^2$$", "$$4\\pi^2$$", "$$2\\pi^2$$", "$$\\pi^2$$"],
        answer: "②",
      },
    ],
    71: [
      {
        question:
          "타원$$x = 2\\cos t$$,$$y = 3\\sin t$$의 내부영역을 직선$$x = 3$$을 축으로 회전시킬 때 회전체의 부피는?",
        choices: [
          "$$36\\pi^2$$",
          "$$24\\pi^2$$",
          "$$12\\pi^2$$",
          "$$9\\pi^2$$",
        ],
        answer: "①",
      },
      {
        question:
          "$$x = \\cos\\theta + 1$$,$$y = \\sin\\theta$$의 호를$$y$$축에 관하여 회전시켰을 때 회전곡면의 겉넓이는?",
        choices: ["$$8\\pi^2$$", "$$4\\pi^2$$", "$$2\\pi^2$$", "$$\\pi^2$$"],
        answer: "②",
      },
      {
        question:
          "원$$r = 2\\sin\\theta$$를 직선$$r(\\sin\\theta + \\cos\\theta) = 5$$를 축으로 회전시킬 때 생긴 회전체의 겉넓이를 구하면?",
        choices: [
          "$$4\\sqrt{2}\\pi^2$$",
          "$$8\\sqrt{2}\\pi^2$$",
          "$$12\\sqrt{2}\\pi^2$$",
          "$$16\\sqrt{2}\\pi^2$$",
        ],
        answer: "②",
      },
      {
        question:
          "평면에서 꼭짓점이$$(3, 1), (5, 1), (4, 4)$$인 삼각형을 직선$$y = x + 1$$을 중심으로 한 바퀴 회전하여 얻은 회전체의 부피를 구하면?",
        choices: [
          "$$\\sqrt{2}\\pi$$",
          "$$2\\sqrt{2}\\pi$$",
          "$$4\\pi$$",
          "$$9\\sqrt{2}\\pi$$",
          "$$10\\sqrt{3}\\pi$$",
        ],
        answer: "④",
      },
    ],
    72: [
      {
        question:
          "곡선$$y = x^2 - 3x$$와 직선$$x + y = 0$$으로 둘러싸인 부분을$$y$$축을 중심으로 회전하여 얻은 입체의 부피는?",
        choices: [
          "$$\\frac{4}{3}\\pi$$",
          "$$\\frac{7}{3}\\pi$$",
          "$$\\frac{8}{3}\\pi$$",
          "$$\\frac{10}{3}\\pi$$",
        ],
        answer: "③",
      },
      {
        question:
          "두 곡선$$y = \\sqrt{x}, y = x^2$$으로 둘러싸인 영역을$$x$$축을 중심으로 회전시킬 때 생기는 회전체의 부피는?",
        choices: [
          "$$\\frac{3}{10}\\pi$$",
          "$$\\frac{2\\pi}{5}$$",
          "$$\\frac{1}{2}\\pi$$",
          "$$\\frac{3}{5}\\pi$$",
          "$$\\frac{7}{10}\\pi$$",
        ],
        answer: "①",
      },
      {
        question:
          "곡선$$y = 2x - x^2$$과$$x$$축으로 둘러싸인 영역을$$x$$축과$$y$$축 둘레로 각각 회전시킬 때 생기는 입체의 부피를$$V_x, V_y$$라 하자.$$\\frac{V_x}{V_y}$$의 값은?",
        choices: [
          "$$\\frac{1}{5}$$",
          "$$\\frac{2}{5}$$",
          "$$\\frac{3}{5}$$",
          "$$\\frac{4}{5}$$",
          "1",
        ],
        answer: "②",
      },
    ],
    73: [
      {
        question:
          "곡선$$y = \\sin x$$와 직선$$x = \\pi, x = \\frac{3\\pi}{2}, y = 0$$으로 둘러싸인 영역을$$x$$축을 중심으로 회전시켜 얻은 회전체의 체적은?",
        choices: [
          "$$\\frac{\\pi^2}{4}$$",
          "$$\\frac{\\pi^2}{8}$$",
          "$$\\frac{\\pi^2}{10}$$",
          "$$\\frac{\\pi^2}{12}$$",
        ],
        answer: "①",
      },
      {
        question:
          "타원$$\\frac{x^2}{4} + \\frac{y^2}{9} = 1$$로 둘러싸인 영역을$$x-$$축의 둘레로 회전시켜 만든 회전체의 부피는?",
        choices: [
          "$$8\\pi$$",
          "$$12\\pi$$",
          "$$16\\pi$$",
          "$$20\\pi$$",
          "$$24\\pi$$",
        ],
        answer: "④",
      },
    ],
    74: [
      {
        question:
          "곡선$$y = \\cos x \\left( \\frac{3}{2}\\pi \\le x \\le 2\\pi \\right)$$와 직선$$y = 0$$, 직선$$x = 2\\pi$$로 둘러싸인 영역을 직선$$x = \\pi$$를 축으로 회전했을 때 생긴 회전체의 체적은?",
        choices: [
          "$$\\pi(\\pi + 1)$$",
          "$$\\pi(\\pi + 2)$$",
          "$$\\pi(\\pi + 3)$$",
          "$$\\pi(\\pi + 4)$$",
        ],
        answer: "②",
      },
      {
        question:
          "$$xy$$평면에서$$y = 2\\sqrt{x}, y = 0, x = 2$$로 둘러싸인 영역을$$x = -2$$둘레로 회전시킬 때 생기는 입체의 부피는?",
        choices: [
          "$$\\frac{84}{5}\\pi$$",
          "$$\\frac{84\\sqrt{2}}{5}\\pi$$",
          "$$\\frac{254}{15}\\pi$$",
          "$$\\frac{254\\sqrt{2}}{15}\\pi$$",
          "$$\\frac{256\\sqrt{2}}{15}\\pi$$",
        ],
        answer: "⑤",
      },
      {
        question:
          "곡선$$x = t^{\\frac{3}{2}} y = t^{\\frac{1}{2}} \\quad (0 \\le t \\le 4)$$를$$y$$축에 대해 회전하여 생기는 회전체의 부피는?",
        choices: [
          "$$\\frac{2^7}{7}\\pi$$",
          "$$\\frac{4^7}{7}\\pi$$",
          "$$\\frac{6^7}{7}\\pi$$",
          "$$\\frac{8^7}{7}\\pi$$",
        ],
        answer: "①",
      },
      {
        question:
          "곡선$$x = 2 - y^2$$과 직선$$x = 1$$로 둘러싸인 영역을$$x$$축 중심으로 회전시켜 얻은 입체의 겉넓이$$S$$와 부피$$V$$의 비$$\\frac{S}{V}$$의 값은?",
        choices: [
          "$$\\frac{5(\\sqrt{5} - 1)}{3}$$",
          "$$\\frac{5\\sqrt{5} - 1}{3}$$",
          "$$\\frac{5\\sqrt{5}}{3}$$",
          "$$\\frac{5\\sqrt{5} + 1}{3}$$",
          "$$\\frac{5(\\sqrt{5} + 1)}{3}$$",
        ],
        answer: "②",
      },
    ],
    75: [
      {
        question:
          "구간$$0 \\le x \\le 2$$에서 곡선$$9y = x^3$$을$$x$$축에 관하여 회전했을 때 생긴 회전체의 겉넓이는?",
        choices: [
          "$$\\frac{\\pi}{25}$$",
          "$$\\frac{2\\pi}{9}$$",
          "$$\\frac{98\\pi}{81}$$",
          "$$\\frac{512\\pi}{7}$$",
        ],
        answer: "③",
      },
      {
        question:
          "곡선$$y = 2x^3 \\quad (0 \\le x \\le 1)$$을$$x$$축에 대해 회전한 곡면의 면적은?",
        choices: [
          "$$\\frac{\\pi}{27}(37^{\\frac{3}{2}} - 1)$$",
          "$$\\frac{\\pi}{54}(37^{\\frac{3}{2}} - 1)$$",
          "$$\\frac{\\pi}{81}(37^{\\frac{3}{2}} - 1)$$",
          "$$\\frac{\\pi}{54}(39^{\\frac{3}{2}} - 1)$$",
          "$$\\frac{\\pi}{81}(39^{\\frac{3}{2}} - 1)$$",
        ],
        answer: "②",
      },
      {
        question:
          "곡선$$y = \\sqrt{4 - x^2},\\quad -1 \\le x \\le 1$$을$$x$$축으로 회전시켜 얻은 곡면(회전체)의 겉넓이는?",
        choices: [
          "$$8\\pi$$",
          "$$10\\pi$$",
          "$$12\\pi$$",
          "$$14\\pi$$",
          "$$16\\pi$$",
        ],
        answer: "①",
      },
      {
        question:
          "구간$$0 \\le t \\le \\frac{\\pi}{2}$$에서 곡선$$x = e^t \\cos t, \\ y = e^t \\sin t$$의 호를$$x$$축에 관하여 회전했을 때 생긴 회전체의 곡면적을 구한 값은?",
        choices: [
          "$$\\frac{4}{5}\\sqrt{2}\\pi(2e^\\pi + 1)$$",
          "$$\\frac{2}{5}\\sqrt{2}\\pi\\left(e^\\pi + \\frac{1}{2}\\right)$$",
          "$$\\frac{2}{5}\\sqrt{2}\\pi(2e^\\pi + 1)$$",
          "$$\\frac{2}{5}\\sqrt{2}\\pi(e^\\pi + 1)$$",
        ],
        answer: "③",
      },
    ],
    76: [
      {
        question:
          "곡선$$r = 1 + \\cos\\theta$$는 곡선$$r = 3\\cos\\theta$$에 의해 세 부분으로 나누어진다. 이 때, 가장 긴 부분의 길이는?",
        choices: ["2", "4", "6", "8"],
        answer: "②",
      },
      {
        question:
          "극방정식$$r = 1 - \\cos\\theta \\quad (0 \\le \\theta \\le \\pi)$$의 그래프는 심장형 곡선의 윗 절반을 나타낸다. 이 곡선의 길이를$$l$$이라 할 때, 길이가$$\\frac{l}{2}$$이 되는 곡선 위의 점의 극좌표를 구하면?",
        choices: [
          "$$\\left(1 + \\frac{\\sqrt{3}}{2}, \\frac{5\\pi}{6}\\right)$$",
          "$$\\left(\\frac{7}{4}, \\cos^{-1}\\left(-\\frac{3}{4}\\right)\\right)$$",
          "$$\\left(\\frac{8}{5}, \\cos^{-1}\\left(-\\frac{3}{5}\\right)\\right)$$",
          "$$\\left(\\frac{3}{2}, \\frac{2\\pi}{3}\\right)$$",
        ],
        answer: "④",
      },
    ],
    77: [
      {
        question:
          "두 직선$$x = 2$$,$$y = 0$$과 다음 매개방정식으로 주어진 곡선$$\\begin{cases} x = 1 - \\cos t \\\\ y = t - \\sin t \\end{cases}, \\ (0 \\le t \\le \\pi)$$로 둘러싸인 영역의 넓이는?",
        choices: [
          "$$\\frac{\\pi}{4}$$",
          "$$\\frac{\\pi}{2}$$",
          "$$\\frac{3\\pi}{4}$$",
          "$$\\pi$$",
        ],
        answer: "②",
      },
    ],
    78: [
      {
        question:
          "함수$$f(x) = x^2 - 3$$과$$g(x) = x - 1$$로 둘러싸인 영역의 넓이는?",
        choices: ["$$\\frac{9}{2}$$", "$$5$$", "$$\\frac{11}{2}$$", "$$6$$"],
        answer: "①",
      },
      {
        question:
          "포물선$$y^2 = 2x$$와 직선$$y = x - 12$$로 둘러싸인 도형의 넓이는?",
        choices: [
          "$$\\frac{230}{3}$$",
          "$$80$$",
          "$$\\frac{250}{3}$$",
          "$$\\frac{260}{3}$$",
          "$$90$$",
        ],
        answer: "③",
      },
      {
        question:
          "극곡선$$r = \\sin\\theta + 2\\cos\\theta \\quad \\left(0 \\le \\theta \\le \\frac{\\pi}{2}\\right)$$의 길이는?",
        choices: [
          "$$\\frac{\\sqrt{5}}{2} \\pi$$",
          "$$\\frac{\\sqrt{6}}{2} \\pi$$",
          "$$\\frac{\\sqrt{7}}{2} \\pi$$",
          "$$\\sqrt{2} \\pi$$",
          "$$\\frac{3}{2} \\pi$$",
        ],
        answer: "①",
      },
      {
        question:
          "곡선$$r^2 = 9\\sin(2\\theta),\\ r > 0,\\ 0 \\le \\theta \\le \\frac{\\pi}{2}$$로 둘러싸인 영역의 넓이는?",
        choices: [
          "$$\\frac{9}{4}$$",
          "$$3$$",
          "$$4$$",
          "$$\\frac{9}{2}$$",
          "$$5$$",
        ],
        answer: "④",
      },
    ],
    79: [
      {
        question:
          "극방정식$$r = 4\\cos\\theta$$,$$r = 4\\sin\\theta$$로 주어진 두 곡선에 의해 둘러싸인 공통부분의 넓이는?",
        choices: [
          "$$2\\pi - 5$$",
          "$$2\\pi - 4$$",
          "$$2\\pi - 3$$",
          "$$2\\pi - 2$$",
          "$$2\\pi - 1$$",
        ],
        answer: "②",
      },
      {
        question:
          "다음 곡선$$x = 2\\cos^3\\theta$$,$$y = 2\\sin^3\\theta$$,$$0 \\le \\theta \\le \\frac{\\pi}{2}$$의 길이는?",
        choices: ["$$\\sqrt{2}$$", "$$\\sqrt{3}$$", "$$2$$", "$$3$$"],
        answer: "④",
      },
      {
        question:
          "$$r = 3\\sin\\theta$$의 내부와$$r = 1 + \\sin\\theta$$의 외부에 놓인 영역의 넓이는?",
        choices: [
          "$$\\frac{\\pi}{3}$$",
          "$$\\frac{2\\pi}{3}$$",
          "$$\\pi$$",
          "$$\\frac{4\\pi}{3}$$",
        ],
        answer: "③",
      },
      {
        question:
          "곡선$$r(\\theta) = 2\\cos3\\theta$$,$$0 \\le \\theta \\le 2\\pi$$으로 둘러싸인 영역의 넓이를 구하시오.",
        choices: [
          "$$\\frac{\\pi}{3}$$",
          "$$\\frac{\\pi}{2}$$",
          "$$\\frac{2\\pi}{3}$$",
          "$$\\pi$$",
          "$$\\frac{3\\pi}{2}$$",
        ],
        answer: "④",
      },
    ],
    80: [
      {
        question:
          "극좌표 방정식$$r = \\sqrt{\\sin^3 \\theta}$$,$$0 \\leq \\theta \\leq \\pi$$로 표현되는 곡선에 의해 둘러싸인 영역의 넓이는?",
        choices: [
          "$$\\frac{2}{3}$$",
          "$$\\frac{2}{3}\\pi$$",
          "$$\\frac{1}{3}$$",
          "$$\\frac{1}{3}\\pi$$",
          "$$\\pi$$",
        ],
        answer: "①",
      },
      {
        question:
          "영역$$\\{ (r\\cos\\theta, r\\sin\\theta)\\ |\\ 1 + 2\\cos\\theta \\leq r \\leq 4\\cos\\theta \\}$$의 넓이는?",
        choices: [
          "$$\\frac{8\\pi - \\sqrt{3}}{6}$$",
          "$$\\frac{9\\pi - 2\\sqrt{3}}{6}$$",
          "$$\\frac{10\\pi - 3\\sqrt{3}}{6}$$",
          "$$\\frac{11\\pi - 4\\sqrt{3}}{6}$$",
          "$$\\frac{12\\pi - 5\\sqrt{3}}{6}$$",
        ],
        answer: "③",
      },
      {
        question:
          "극좌표로 표현된 곡선$$r = 1 - \\sin\\theta$$에서, 원$$r = 1 - \\frac{\\sqrt{3}}{2}$$안에 있는 부분의 길이는?",
        choices: [
          "$$8 - 2\\sqrt{2} - 2\\sqrt{6}$$",
          "$$9 - 2\\sqrt{3} - 2\\sqrt{6}$$",
          "$$10 - 3\\sqrt{2} - 2\\sqrt{6}$$",
          "$$6 - 2\\sqrt{2} - \\sqrt{6}$$",
          "$$10 - 4\\sqrt{3} - \\sqrt{6}$$",
        ],
        answer: "①",
      },
      {
        question:
          "극곡선$$r = e^{-\\theta}$$($$0 \\leq \\theta \\leq 1$$)의 길이는?",
        choices: [
          "$$1 - \\frac{2}{e}$$",
          "$$\\sqrt{2}\\left(1 - \\frac{2}{e}\\right)$$",
          "$$\\sqrt{3}\\left(1 - \\frac{2}{e}\\right)$$",
          "$$\\sqrt{2}\\left(1 - \\frac{1}{e}\\right)$$",
          "$$\\sqrt{3}\\left(1 - \\frac{1}{e}\\right)$$",
        ],
        answer: "④",
      },
    ],
    81: [
      {
        question:
          "곡선$$y = \\frac{3x}{1 + x^3}$$와 세 직선$$y = 0$$,$$x = 1$$,$$x = 5$$로 둘러싸인 부분을$$y$$축을 중심으로 회전하여 얻은 입체의 부피는?",
        choices: [
          "$$3\\pi + \\ln 21$$",
          "$$\\pi + 3\\ln 21$$",
          "$$3\\pi \\ln 21$$",
          "$$2\\pi + \\ln 63$$",
          "$$2\\pi \\ln 63$$",
        ],
        answer: "⑤",
      },
      {
        question:
          "$$x = 1$$과$$x = 4$$사이의 곡선$$y = \\int_1^x \\sqrt{t^3 - 1} dt$$의 길이는?",
        choices: [
          "$$\\frac{62}{5}$$",
          "$$\\frac{14}{3}$$",
          "$$\\frac{\\pi}{6}$$",
          "$$\\frac{2\\sqrt{2}}{5}\\pi$$",
        ],
        answer: "①",
      },
      {
        question:
          "곡선$$y = \\int_1^x \\sqrt{\\sqrt{t} - 1} dt$$,$$1 \\leq x \\leq 16$$의 길이를 구하시오.",
        choices: [
          "$$\\frac{118}{5}$$",
          "$$\\frac{120}{5}$$",
          "$$\\frac{122}{5}$$",
          "$$\\frac{124}{5}$$",
          "$$\\frac{126}{5}$$",
        ],
        answer: "④",
      },
      {
        question:
          "곡선$$y = \\frac{1}{4}x^2 - \\frac{1}{2}\\ln x$$($$1 \\leq x \\leq 2$$)를$$y$$축 둘레로 회전시킬 때 생기는 곡면의 넓이는?",
        choices: [
          "$$2\\pi$$",
          "$$\\frac{7}{3}\\pi$$",
          "$$\\frac{8}{3}\\pi$$",
          "$$3\\pi$$",
          "$$\\frac{10}{3}\\pi$$",
        ],
        answer: "⑤",
      },
    ],
    82: [
      {
        question:
          "곡선$$x = (y - 1)^2$$과 직선$$x = 9$$로 둘러싸인 영역을 직선$$y = 5$$를 축으로 하여 회전시켰을 때 얻어지는 회전체의 부피는?",
        choices: ["$$120\\pi$$", "$$144\\pi$$", "$$240\\pi$$", "$$288\\pi$$"],
        answer: "④",
      },
      {
        question:
          "$$x$$축,$$y$$축과$$(x - 1)^2 + (y - 1)^2 = 1$$로 둘러싸인 부분을$$y$$축을 중심으로 회전시킬 때 생기는 회전체의 부피는?",
        choices: [
          "$$\\left( \\frac{5}{3} - \\frac{\\pi}{2} \\right)\\pi$$",
          "$$\\left( \\frac{7}{3} - \\frac{\\pi}{4} \\right)\\pi$$",
          "$$\\left( \\frac{\\pi}{2} - \\frac{3}{4} \\right)\\pi$$",
          "$$\\left( \\frac{\\pi}{4} - \\frac{3}{5} \\right)\\pi$$",
          "$$\\pi^2$$",
        ],
        answer: "①",
      },
      {
        question:
          "반원$$x^2 + y^2 = 1$$,$$y \\geq 0$$을 직선$$y = 1$$으로 회전시켜 얻은 곡면(회전체)의 겉넓이를 구하시오.",
        choices: [
          "$$2\\pi(\\pi - 2)$$",
          "$$2\\pi(\\pi - 3)$$",
          "$$2\\pi(\\pi + 2)$$",
          "$$2\\pi(\\pi + 3)$$",
          "$$2\\pi(\\pi + 4)$$",
        ],
        answer: "①",
      },
      {
        question:
          "곡선$$ x^\\frac{2}{3} + y^\\frac{2}{3} = 1$$을$$x$$축을 회전축으로 회전하여 얻은 곡면의 넓이는?",
        choices: [
          "$$\\frac{9}{5}\\pi$$",
          "$$\\frac{12}{5}\\pi$$",
          "$$3\\pi$$",
          "$$\\frac{18}{5}\\pi$$",
          "$$\\frac{21}{5}\\pi$$",
        ],
        answer: "②",
      },
    ],
    83: [
      {
        question:
          "두 곡선$$y = \\sin\\left( \\frac{\\pi x}{4} \\right),\\ y = x^2 - 4x$$로 둘러싸인 영역의 넓이는?",
        choices: [
          "$$\\frac{10}{\\pi} + \\frac{64}{3}$$",
          "$$\\frac{12}{\\pi} + \\frac{64}{3}$$",
          "$$\\frac{10}{\\pi} + \\frac{32}{3}$$",
          "$$\\frac{8}{\\pi} + \\frac{32}{3}$$",
          "$$\\frac{8}{\\pi} + \\frac{64}{3}$$",
        ],
        answer: "④",
      },
      {
        question:
          "곡선$$y = \\frac{\\sin x}{x}$$와 세 직선$$x = \\frac{\\pi}{3}, x = \\frac{2\\pi}{3}, y = 0$$으로 둘러싸인 영역을$$y$$축 둘레로 회전시켜 생기는 입체의 부피는?",
        choices: [
          "$$\\pi$$",
          "$$\\frac{3\\pi}{2}$$",
          "$$2\\pi$$",
          "$$\\frac{5\\pi}{2}$$",
          "$$3\\pi$$",
        ],
        answer: "③",
      },
      {
        question:
          "좌표평면 위에 곡선$$y = 9 - x^2$$과 두 개의 직선$$x = 1, y = 5$$에 의해 둘러싸인 영역을 직선$$y = 5$$둘레로 회전시켜 생기는 입체의 부피는? (단,$$x > 0$$)",
        choices: [
          "$$\\frac{53}{13}\\pi$$",
          "$$\\frac{53}{14}\\pi$$",
          "$$\\frac{53}{15}\\pi$$",
          "$$\\frac{53}{16}\\pi$$",
          "$$\\frac{53}{17}\\pi$$",
        ],
        answer: "③",
      },
      {
        question:
          "매개 곡선$$x = 2t - t^2,\\ y = \\sqrt{t}\\ (0 \\leq t)$$가$$y$$축으로 둘러싸인 영역의 넓이는?",
        choices: [
          "$$\\frac{8\\sqrt{2}}{15}$$",
          "$$\\frac{\\sqrt{2}}{3}$$",
          "$$\\frac{2\\sqrt{2}}{15}$$",
          "$$\\frac{\\sqrt{2}}{15}$$",
        ],
        answer: "①",
      },
    ],
    84: [
      {
        question:
          "두 곡선$$y = e^{-2x},\\ y = e^{-2}$$와$$y$$축으로 둘러싸인 영역을$$x$$축으로 회전하여 얻은 입체의 부피는?",
        choices: [
          "$$\\frac{\\pi}{2} -\\frac{\\pi e^{-4}}{2}$$",
          "$$\\frac{\\pi}{4} -\\frac{7\\pi e^{-4}}{12}$$",
          "$$\\frac{\\pi}{6} -\\frac{\\pi e^{-4}}{2}$$",
          "$$\\frac{\\pi}{3} +\\frac{\\pi e^{-4}}{2}$$",
          "$$\\frac{\\pi}{2} -\\frac{\\pi e^{-4}}{3}$$",
        ],
        answer: "②",
      },
      {
        question:
          "곡선$$y = x^2 - x^3$$과 직선$$y = 0$$으로 둘러싸인 영역을 직선$$x = -1$$을 축으로 회전하여 생긴 입체의 부피는?",
        choices: [
          "$$\\frac{4}{15}\\pi$$",
          "$$\\frac{\\pi}{3}$$",
          "$$\\frac{2}{5}\\pi$$",
          "$$\\frac{7}{15}\\pi$$",
          "$$\\frac{8}{15}\\pi$$",
        ],
        answer: "③",
      },
    ],
    85: [
      {
        question:
          "벡터방정식$$r(t) = ti + \\cosh t\\, j + \\sinh t\\, k$$를 갖는 곡선 위의 점$$(0,1,0)$$에서 점$$(1, \\cosh 1, \\sinh 1)$$까지 호의 길이는?",
        choices: [
          "$$e$$",
          "$$\\sqrt{2} \\cosh 1$$",
          "$$\\sqrt{2} \\sinh 1$$",
          "$$2\\cosh 1$$",
          "$$2\\sinh 1$$",
        ],
        answer: "③",
      },
      {
        question:
          "좌표공간에서 벡터함수$$r(t) = \\langle \\cos t, \\sin t, 4t \\rangle$$로 주어진 곡선에 대하여 점$$(1,0,0)$$에서 점$$(1,0,8\\pi)$$까지 곡선의 길이는?",
        choices: [
          "$$4\\pi$$",
          "$$\\sqrt{17}\\pi$$",
          "$$2\\sqrt{14}\\pi$$",
          "$$8\\pi$$",
          "$$2\\sqrt{17}\\pi$$",
        ],
        answer: "⑤",
      },
      {
        question:
          "곡선$$x^2 + y^2 - 4x + 3 = 0$$으로 둘러싸인 영역을$$y$$축을 중심으로 회전하여 얻은 회전체의 부피는?",
        choices: ["$$\\pi^2$$", "$$2\\pi^2$$", "$$4\\pi^2$$", "$$8\\pi^2$$"],
        answer: "③",
      },
      {
        question:
          "좌표평면의 두 점$$(1,3)$$과$$(3,1)$$을 잇는 선분을$$y$$축을 중심으로 한 바퀴 회전하여 얻는 곡면의 넓이는?",
        choices: [
          "$$6\\sqrt{2}\\pi$$",
          "$$7\\sqrt{2}\\pi$$",
          "$$8\\sqrt{2}\\pi$$",
          "$$9\\sqrt{2}\\pi$$",
          "$$10\\sqrt{2}\\pi$$",
        ],
        answer: "③",
      },
      {
        question:
          "평면상의 영역$$\\{(x, y) : |x + 1| + |y - 1| \\leq 1\\}$$을 직선$$y = 2x$$주위로 회전하여 얻어진 입체의 부피는?",
        choices: [
          "$$\\frac{12\\pi}{\\sqrt{5}}$$",
          "$$\\frac{8\\pi}{\\sqrt{5}}$$",
          "$$\\frac{4\\pi}{\\sqrt{5}}$$",
          "$$\\frac{\\sqrt{5}\\pi}{4}$$",
          "$$\\frac{\\sqrt{5}\\pi}{8}$$",
        ],
        answer: "①",
      },
    ],
    86: [
      {
        question:
          "극곡선$$r = 1 + \\sin \\theta$$이 있다.$$\\theta = \\frac{\\pi}{3},\\ \\theta = \\frac{2\\pi}{3}$$에서 이 곡선의 접선을 각각$$l_1, l_2$$라 하자.$$x-$$축,$$l_1, l_2$$로 둘러싸인 다각형의 면적은?",
        choices: [
          "$$\\frac{26 + 15\\sqrt{3}}{8}$$",
          "$$\\frac{26 - 15\\sqrt{3}}{8}$$",
          "$$\\frac{12 - \\sqrt{3}}{2}$$",
          "$$\\frac{12 + \\sqrt{3}}{2}$$",
          "$$\\frac{8 - 2\\sqrt{3}}{3}$$",
        ],
        answer: "①",
      },
      {
        question:
          "평면 위의 곡선이 다음과 같이 매개변수로 표현되었을 때 이 곡선의 길이는?",
        example:
          "$$x(t) = \\int_t^\\infty \\frac{\\cos x}{x}\\,dx,\\quad y(t) = \\int_t^\\infty \\frac{\\sin x}{x}\\,dx\\quad (1 \\leq t \\leq 2)$$",
        choices: [
          "$$\\sqrt{2}$$",
          "$$\\sqrt{3}$$",
          "$$\\ln 2$$",
          "$$\\ln 3$$",
          "$$\\sqrt{5}$$",
        ],
        answer: "③",
      },
      {
        question:
          "양수$$a$$에 대하여, 곡선$$y = \\frac{x}{(x^2 + 1)(x^2 + 4)(x^2 + 9)}$$, 그리고 직선$$x = a$$로 둘러싸인 영역을$$y$$축 둘레로 회전하여 얻어진 입체의 부피를$$V(a)$$라 할 때,$$\\lim_{a \\to \\infty} V(a)$$의 값을 구하면?",
        choices: [
          "$$\\frac{\\pi}{120}$$",
          "$$\\frac{\\pi}{60}$$",
          "$$\\frac{\\pi^2}{60}$$",
          "$$\\frac{\\pi}{240}$$",
          "$$\\frac{\\pi^2}{240}$$",
        ],
        answer: "③",
      },
      {
        question:
          "극 곡선$$r = \\sqrt{2\\cos 5\\theta + 3}$$의 외부 영역과 원$$r = 2$$의 내부영역의 공통부분의 넓이는?",
        choices: [
          "$$\\frac{2}{3}\\pi - \\sqrt{3}$$",
          "$$\\frac{4}{3}\\pi - \\sqrt{3}$$",
          "$$\\frac{2}{3}\\pi + \\sqrt{3}$$",
          "$$\\frac{4}{3}\\pi + \\sqrt{3}$$",
          "$$6\\pi$$",
        ],
        answer: "③",
      },
    ],
    87: [
      {
        question:
          "직선$$x = 0,\\ y = \\frac{1}{2}$$과$$y = \\cos x$$로 둘러싸인 영역을 직선$$y = -\\frac{1}{2}$$을 중심으로 회전하여 얻은 입체의 부피는?$$\\left(단 ,\\ 0 \\le x \\le \\frac{\\pi}{3}\\right)$$",
        choices: [
          "$$\\frac{(8\\sqrt{3} - \\pi)}{24}\\pi$$",
          "$$\\frac{(9\\sqrt{3} - 2\\pi)}{24}\\pi$$",
          "$$\\frac{(12\\sqrt{3} - \\pi)}{24}\\pi$$",
          "$$\\frac{(15\\sqrt{3} - 2\\pi)}{24}\\pi$$",
          "$$\\frac{(18\\sqrt{3} - \\pi)}{24}\\pi$$",
        ],
        answer: "④",
      },
      {
        question:
          "$$0 \\le x \\le \\frac{\\pi}{2}$$에서 정의된 두 함수$$y = \\cos x$$와$$y = \\sin 2x$$를 둘러싸인 영역을$$x$$축 둘레로 회전시킬 때 생기는 회전체의 부피는?",
        choices: [
          "$$\\frac{3\\sqrt{3}\\pi}{16}$$",
          "$$\\frac{3\\sqrt{3}\\pi}{8}$$",
          "$$\\frac{\\sqrt{3}\\pi}{4}$$",
          "$$\\frac{2\\sqrt{3}\\pi}{15}$$",
        ],
        answer: "①",
      },
      {
        question:
          "극좌표계에서 곡선$$r = 1 + 2\\cos \\theta$$로 둘러싸인 영역 중 가장 작은 부분의 넓이는?",
        choices: [
          "$$\\pi - \\frac{3\\sqrt{3}}{2}$$",
          "$$2\\sqrt{3} - \\pi$$",
          "$$3\\pi$$",
          "$$\\frac{3\\pi}{2}$$",
        ],
        answer: "①",
      },
      {
        question:
          "곡선$$r = 1 + 2\\cos \\theta$$의 큰 고리와 작은 고리 사이 영역의 넓이는?",
        choices: [
          "$$\\frac{1}{4}(\\pi + 3\\sqrt{3})$$",
          "$$\\frac{1}{2}(\\pi + 3\\sqrt{3})$$",
          "$$\\pi + 3\\sqrt{3}$$",
          "$$2(\\pi + 3\\sqrt{3})$$",
          "$$4(\\pi + 3\\sqrt{3})$$",
        ],
        answer: "③",
      },
    ],
    88: [
      {
        question:
          "곡선$$y = \\frac{2}{x^3 - x^2 - x + 1}$$와 세 직선$$y = 0,\\ x = 0,\\ x = \\frac{1}{2}$$로 둘러싸인 영역을$$y$$축을 중심으로 회전하여 얻은 회전체의 부피는?",
        choices: [
          "$$\\pi(2 - \\ln 2)$$",
          "$$\\pi(2 - \\ln 3)$$",
          "$$\\pi(3 - \\ln 2)$$",
          "$$\\pi(3 - \\ln 3)$$",
        ],
        answer: "②",
      },
      {
        question:
          "곡선$$y = \\cosh x, 0 \\le x \\le 1$$을$$x$$축을 중심으로 회전하여 얻은 곡면의 면적을 구하시오.",
        choices: [
          "$$2\\pi\\sinh 1$$",
          "$$\\frac{\\pi}{2}\\left(e^2 - e^{-2} + 4\\right)$$",
          "$$\\pi(e - e^{-1})$$",
          "$$\\pi\\left(\\frac{\\sinh 2}{2} + 1\\right)$$",
        ],
        answer: "④",
      },
      {
        question:
          "반원판$$x^2 + \\left(y - \\frac{16}{3\\pi}\\right)^2 \\le 1,\\ y \\ge \\frac{16}{3\\pi}$$을$$x$$축을 중심으로 회전하여 얻은 회전체의 부피는?",
        choices: [
          "$$\\frac{25}{3}\\pi$$",
          "$$\\frac{11\\sqrt{3}}{3}\\pi$$",
          "$$\\frac{5\\sqrt{3}}{3}\\pi$$",
          "$$\\frac{20}{3}\\pi$$",
        ],
        answer: "④",
      },
      {
        question:
          "$$x = 2$$에서$$x = \\pi + 2$$까지의 곡선$$y = \\sin(x - 2)$$와$$x$$축으로 둘러싸인 영역을$$y$$축을 중심으로 회전하여 얻은 입체의 부피는?",
        choices: [
          "$$2\\pi(2\\pi + 1)$$",
          "$$2\\pi(2\\pi + 2)$$",
          "$$2\\pi(2\\pi + 3)$$",
          "$$2\\pi(\\pi + 3)$$",
          "$$2\\pi(\\pi + 4)$$",
        ],
        answer: "⑤",
      },
      {
        question:
          "곡선$$y = \\frac{\\ln x}{x}\\ (x > 0)$$와 직선$$x = e$$, 직선$$y = 0$$로 둘러싸인 영역을 직선$$x = -3$$을 축으로 회전하여 만들어진 입체의 부피는?",
        choices: [
          "$$4\\pi - e$$",
          "$$4\\pi$$",
          "$$4\\pi + e$$",
          "$$5\\pi$$",
          "$$5\\pi + e$$",
        ],
        answer: "④",
      },
    ],
    96: [
      {
        question:
          "1. $$f(x) = x^5 - x^3 - x - 1$$을$$x = 1$$에서 Taylor급수를 전개했을 때,$$(x - 1)^3$$의 계수는?",
        choices: [],
        answer: "$$ 9 $$",
      },
      {
        question:
          "2. $$f(x) = x^2 \\ln x$$를$$x = e$$에서 Taylor급수 전개했을 때,$$(x - e)^2$$의 계수는?",
        choices: [],
        answer: "$$ \\frac{5}{2}$$",
      },
      {
        question:
          "3. $$f(x) = \\sin(x^2)$$를$$x = 0$$에서 Taylor급수 전개했을 때,$$x^2$$의 계수는?",
        choices: [],
        answer: "$$0$$",
      },
      {
        question:
          "4. $$f(x) = \\sqrt[3]{1 - 2x}$$를$$x = 0$$에서 Taylor급수 전개했을 때,$$x^2$$의 계수는?",
        choices: [],
        answer: "$$- \\frac{4}{9}$$",
      },
      {
        question:
          "5. $$f(x) = e^{-4x}$$의 Maclaurin급수가$$\\sum_{k=0}^{\\infty} c_k x^k$$일 때,$$c_4$$의 값은?",
        choices: [],
        answer: "$$\\frac{32}{3}$$",
      },
      {
        question: "6. $$f(x) = x \\ln(1 + x^2)$$에 대하여$$f^{(5)}(0)$$는?",
        choices: [],
        answer: "$$-60$$",
      },
      {
        question:
          "7. $$f(x) = \\int_0^x \\cos(t^{1011})\\,dt$$에 대하여$$\\frac{f^{(2023)}(0)}{2023!}$$는?",
        choices: [],
        answer: "$$- \\frac{1}{4046}$$",
      },
      {
        question:
          "8. 함수$$f(x) = \\sin^2 x$$의 Maclaurin 급수에서$$x^4$$항의 계수는?",
        choices: [],
        answer: "$$- \\frac{1}{3}$$",
      },
      {
        question:
          "9. 함수$$f(x) = x^5 - 4x^3 + 3x^2 - 2 + \\sin^4(x - 1)$$에 대한$$x = 1$$에서 2차의 테일러 다항식을$$P(x)$$라 할 때,$$P(2)$$는?",
        choices: ["$$-4$$", "$$-2$$", "$$4$$", "$$2$$"],
        answer: "②",
      },
    ],
    97: [
      {
        question:
          "10. $$f(x) = \\sqrt{x + 3}$$에 대한$$x = 1$$에서의 일차근사함수를 이용하여$$f(1.2)$$의 근삿값을 하면?",
        choices: ["$$1.92$$", "$$1.99$$", "$$2.05$$", "$$2.12$$", "$$2.32$$"],
        answer: "③",
      },
      {
        question:
          "11. 정적분 $$\\int_0^1 \\cos(\\sqrt{x})\\,dx$$을 소수 둘째자리까지 구한 값은?",
        choices: ["$$0.74$$", "$$0.75$$", "$$0.76$$", "$$0.77$$", "$$0.78$$"],
        answer: "③",
      },
      {
        question:
          "12. 정적분 $$\\int_0^1 \\frac{\\sin x}{x}\\,dx = \\sum_{k=1}^\\infty A_k$$를$$A_1 + A_2$$의 값으로 근사할 때, 오차의 크기는 얼마보다 작은가?",
        choices: [],
        answer: "$$\\frac{1}{600}$$",
      },
      {
        question: "13. $$\\sum_{n=0}^{\\infty} x^n =$$",
        choices: [],
        answer: "$$\\frac{1}{1-x}$$",
      },
      {
        question: "14. $$\\sum_{n=0}^{\\infty} (-1)^n x^n =$$",
        choices: [],
        answer: "$$\\frac{1}{1+x}$$",
      },
      {
        question: "15. $$\\sum_{n=1}^{\\infty} x^n =$$",
        choices: [],
        answer: "$$\\frac{1}{1-x} - 1$$",
      },
      {
        question: "16. $$\\sum_{n=1}^{\\infty} n x^n =$$",
        choices: [],
        answer: "$$\\frac{1}{(1-x)^{2}}$$",
      },
      {
        question: "17. $$\\sum_{n=1}^{\\infty} n^2 x^n =$$",
        choices: [],
        answer: "$$ \\frac{(x+1) x } {(1-x)^{3}} $$",
      },
      {
        question: "18. $$\\sum_{n=1}^{\\infty} n^3 x^n =$$",
        choices: [],
        answer: "$$ \\frac{(x^{2}+4x+1)x}{(1-x)^{4}} $$",
      },
      {
        question:
          "19. $$\\frac{\\pi^2}{2!} - \\frac{\\pi^4}{4!} + \\frac{\\pi^6}{6!} - \\frac{\\pi^8}{8!} + \\cdots$$",
        choices: ["$$2$$", "$$1$$", "$$0$$", "$$-1$$"],
        answer: "①",
      },
      {
        question: "20. $$\\sum_{n=1}^{\\infty} \\frac{(-1)^n}{2^{2n}}$$의 값은?",
        choices: [
          "$$-\\frac{1}{4}$$",
          "$$-\\frac{1}{5}$$",
          "$$\\frac{1}{2}$$",
          "$$\\frac{3}{2}$$",
        ],
        answer: "②",
      },
    ],
    98: [
      {
        question:
          "함수$$f(x) = x \\ln x$$를 점$$x = 3$$에서 Taylor급수로 전개할 때,$$(x - 3)^2$$항의 계수는?",
        choices: [
          "$$\\frac{1}{3}$$",
          "$$\\frac{1}{6}$$",
          "$$\\frac{1}{9}$$",
          "$$\\frac{1}{18}$$",
        ],
        answer: "②",
      },
      {
        question:
          "함수$$f(x) = \\ln x$$를 점$$x = 1$$에서 Taylor급수로 전개할 때,$$(x - 1)^n$$항의 계수는?",
        choices: [
          "$$\\frac{(-1)^n}{n - 1}$$",
          "$$\\frac{(-1)^{n + 1}}{n}$$",
          "$$(-1)^n n!$$",
          "$$(-1)^{n + 1} n!$$",
        ],
        answer: "②",
      },
      {
        question:
          "함수$$f(x) = \\sqrt{x}$$를$$x = 2$$에서 테일러 급수로 전개할 때,$$(x - 2)^3$$항의 계수는?",
        choices: [
          "$$-\\frac{3\\sqrt{2}}{64}$$",
          "$$\\frac{3\\sqrt{2}}{64}$$",
          "$$\\frac{\\sqrt{2}}{128}$$",
          "$$-\\frac{\\sqrt{2}}{128}$$",
        ],
        answer: "③",
      },
      {
        question:
          "테일러급수$$e^x = \\sum_{n=0}^{\\infty} a_n (x - 1)^n$$에서$$a_2$$의 값은?",
        choices: ["$$1$$", "$$\\frac{e}{2}$$", "$$e$$", "$$e^2$$"],
        answer: "②",
      },
      {
        question:
          "$$f(x) = \\frac{3}{x}$$을 중심이$$-2$$인 테일러 급수로 나타낼 때,$$(x + 2)^2$$항의 계수는?",
        choices: [
          "$$\\frac{3}{4}$$",
          "$$-\\frac{3}{4}$$",
          "$$\\frac{3}{8}$$",
          "$$-\\frac{3}{8}$$",
          "$$-\\frac{5}{16}$$",
        ],
        answer: "④",
      },
    ],
    99: [
      {
        question:
          "$$x = \\frac{\\pi}{3}$$에서$$f(x) = \\tan x$$의 선형근사식을 이용하여 구한$$\\tan 1$$의 근삿값은?",
        choices: [
          "$$\\frac{1}{4} + \\frac{\\sqrt{3}}{3} - \\frac{\\pi}{12}$$",
          "$$\\frac{1}{4} + \\sqrt{3} - \\frac{\\pi}{12}$$",
          "$$4 + \\frac{\\sqrt{3}}{3} - \\frac{4\\pi}{3}$$",
          "$$4 + \\sqrt{3} - \\frac{4\\pi}{3}$$",
        ],
        answer: "④",
      },
      {
        question:
          "함수$$f(x) = \\sqrt{25 - x^2}$$에 대한$$x = 3$$에서의 일차근사함수를 이용하여$$f(3.2)$$의 근삿값을 구하면?",
        choices: ["$$3.56$$", "$$3.85$$", "$$3.92$$", "$$4.00$$"],
        answer: "②",
      },
      {
        question:
          "$$x = 1$$에서$$f(x) = \\tan^{-1} x$$의 접선에 관한 선형근사식을 이용하여$$\\tan^{-1}\\left(\\frac{3}{4}\\right)$$의 근삿값을 구하면?",
        choices: [
          "$$\\frac{\\pi + 3}{8}$$",
          "$$\\frac{3\\pi + 2}{8}$$",
          "$$\\frac{3\\pi - 2}{8}$$",
          "$$\\frac{2\\pi + 1}{8}$$",
          "$$\\frac{2\\pi - 1}{8}$$",
        ],
        answer: "⑤",
      },
      {
        question:
          "실수 전체에서 정의된 함수$$f$$가$$f(3) = -4,\\ f'(x) = \\sqrt[3]{x^2 + 9}$$을 만족한다고 하자. 이 함수의$$x = 3$$에서의 일차 근사함수를 이용하여$$f(2.8)$$의 근삿값을 구하면?",
        choices: ["$$-5.2$$", "$$-5.1$$", "$$-4.9$$", "$$5.1$$", "$$4.9$$"],
        answer: "①",
      },
    ],
    100: [
      {
        question:
          "실수 전체에서 정의된 미분가능 함수$$f(x)$$가 아래 표에 나타낸 값을 가진다.<br>$$\\begin{array}{|c|c|c|c|c|c|}\n\\hline\nx & -2 & -1 & 0 & 1 & 2 \\\\\n\\hline\nf(x) & -8.5 & -1 & -0.5 & 0.25 & 2.5 \\\\\n\\hline\nf'(x) & 12 & 3 & 0 & 0.5 & 2 \\\\\n\\hline\n\\end{array}\n$$<br>함수$$g(x) = \\sqrt{x^3 - 3f(x)}$$의$$x = 1$$에서의 일차근사함수를 이용하여$$g(1.1)$$의 근삿값을 구하면?",
        choices: ["$$0.65$$", "$$0.68$$", "$$0.7$$", "$$0.72$$", "$$0.75$$"],
        answer: "①",
      },
      {
        question:
          "한 점에서$$f(a)$$와$$f'(a)$$를 알고 있을 때,$$a$$에 가까운 점$$b$$에서$$f(n)$$의 근삿값은 선형근사식$$f(b) \\approx f(a) + f'(a)(b - a)$$로 계산할 수 있다. 이 선형근사식을 이용하여$$\\sqrt[3]{26.7}$$의 근삿값을 계산하면?",
        choices: [
          "$$\\frac{267}{90}$$",
          "$$\\frac{269}{90}$$",
          "$$\\frac{271}{90}$$",
          "$$\\frac{273}{90}$$",
        ],
        answer: "②",
      },
      {
        question: "다음 중$$\\sqrt[3]{9}$$과 가장 가까운 근삿값은?",
        choices: ["$$2.08$$", "$$2.09$$", "$$2.10$$", "$$2.11$$", "$$2.12$$"],
        answer: "①",
      },
      {
        question: "다음 중$$\\sqrt{99}$$과 가장 가까운 근삿값은?",
        choices: [
          "$$\\frac{197}{20}$$",
          "$$\\frac{99}{10}$$",
          "$$\\frac{199}{20}$$",
          "$$\\frac{999}{100}$$",
        ],
        answer: "③",
      },
    ],
    101: [
      {
        question:
          "$$f(x) = \\frac{1}{5 - x}$$의$$x = 1$$에서 테일러급수 전개는?",
        choices: [
          "$$\\sum_{n=0}^{\\infty} \\frac{(x - 1)^n}{4^{n+1}}$$",
          "$$\\sum_{n=0}^{\\infty} (x - 1)^n$$",
          "$$\\sum_{n=0}^{\\infty} \\frac{(x - 1)^n}{5^n}$$",
          "$$\\sum_{n=0}^{\\infty} \\frac{(x - 1)^n}{n!}$$",
        ],
        answer: "①",
      },
      {
        question: "$$x = 0$$에서 Taylor전개가 불가능한 함수를 고르면?",
        choices: ["$$\\log x$$", "$$e^{x^2}$$", "$$\\tan x$$", "$$\\sin x$$"],
        answer: "①",
      },
      {
        question:
          "$$f(x) = \\begin{cases} e^{-\\frac{1}{x^2}}, & x \\ne 0 \\\\ 0, & x = 0 \\end{cases}$$일 때, 다음 중 옳은 것은?",
        example:
          "가.$$f$$는$$x = 0$$에서 연속이다.<br>나$$f$$는$$x = 0$$에서 미분가능이다.<br>다.$$f$$는$$x = 0$$에서 Taylor 급수 전개 가능하다.",
        choices: ["없다.", "가", "가, 나", "가, 나, 다"],
        answer: "④",
      },
    ],
    102: [
      {
        question:
          "$$f(x) = \\frac{1}{2 - \\cos x}$$이고$$f(x)$$의 매클로린급수가$$\\sum_{n=0}^{\\infty} a_n x^n$$일 때,$$a_0$$의 값은?",
        choices: [
          "$$\\frac{1}{2}$$",
          "$$\\frac{\\sqrt{2}}{2}$$",
          "$$\\frac{\\sqrt{3}}{2}$$",
          "$$1$$",
        ],
        answer: "④",
      },
      {
        question:
          "항등식$$(x^2 + x + 1)^{10} = a_0 + a_1 x + a_2 x^2 + a_3 x^3 + \\cdots + a_{20} x^{20}$$에서 계수$$a_2$$의 값은?",
        choices: ["$$45$$", "$$50$$", "$$55$$", "$$110$$"],
        answer: "③",
      },
      {
        question:
          "$$f(x) = \\tan x$$에 대하여$$x = 0$$에서 Taylor 급수를$$\\sum_{n=0}^{\\infty} a_n x^n$$일 때,$$a_4$$의 값은?",
        choices: ["$$\\frac{1}{2}$$", "$$0$$", "$$-\\frac{1}{3}$$", "$$1$$"],
        answer: "②",
      },
      {
        question:
          "함수$$f(x) = e^{x^2}$$을 매클로린 급수로 전개했을 때,$$x^6$$의 계수는?",
        choices: [
          "$$\\frac{1}{3!}$$",
          "$$\\frac{1}{4!}$$",
          "$$\\frac{1}{5!}$$",
          "$$\\frac{1}{6!}$$",
        ],
        answer: "①",
      },
    ],
    103: [
      {
        question:
          "$$|x| < \\frac{1}{2}$$인 모든 실수$$x$$에 대하여$$\\frac{1}{1 + x + x^2} = \\sum_{n=0}^{\\infty} a_n x^n$$라 하자.$$a_0 + a_3$$의 값을 구하여라. <br>(단,$$a_n$$은 상수이다.)",
        choices: ["$$1$$", "$$2$$", "$$3$$", "$$4$$"],
        answer: "②",
      },
      {
        question:
          "$$f(x) = x \\cos(2x)$$의 매클로린급수가$$\\sum_{n=0}^{\\infty} c_n x^n$$일 때,$$c_0 + c_1 + c_2 + c_3$$의 값은?",
        choices: ["$$-2$$", "$$-1$$", "$$0$$", "$$1$$"],
        answer: "②",
      },
      {
        question:
          "함수$$f(x) = e^{-2x} \\sin x$$의 매클로린 급수에서$$x^5$$의 계수는?",
        choices: [
          "$$\\frac{1}{3}$$",
          "$$\\frac{41}{120}$$",
          "$$\\frac{7}{20}$$",
          "$$\\frac{43}{120}$$",
          "$$\\frac{11}{30}$$",
        ],
        answer: "②",
      },
      {
        question:
          "함수$$f(x) = \\frac{x^3}{x + 2}$$을 매클로린 급수로 전개할 때,$$x^6$$의 계수는?",
        choices: [
          "$$-\\frac{1}{16}$$",
          "$$\\frac{1}{16}$$",
          "$$-\\frac{1}{8}$$",
          "$$\\frac{1}{8}$$",
        ],
        answer: "①",
      },
    ],
    104: [
      {
        question:
          "함수$$f(x) = \\sqrt[3]{1 + x^2}\\ \\ (-1 < x < 1)$$에 대하여$$f^{(6)}(0)$$의 값은?",
        choices: [
          "$$\\frac{5}{81}$$",
          "$$\\frac{10}{27}$$",
          "$$\\frac{400}{9}$$",
          "$$\\frac{2000}{3}$$",
        ],
        answer: "③",
      },
      {
        question: "$$f(x) = \\cos(x^2)$$일 때,$$f^{(6)}(0)$$의 값은?",
        choices: ["$$-8!$$", "$$-1$$", "$$0$$", "$$1$$", "$$8!$$"],
        answer: "③",
      },
      {
        question:
          "$$f(x) = x \\sin(x^2)$$에 대하여$$f^{(15)}(0) + f^{(17)}(0)$$의 값은?",
        choices: [
          "$$-\\frac{15!}{6!}$$",
          "$$-\\frac{15!}{7!}$$",
          "$$0$$",
          "$$\\frac{15!}{7!}$$",
          "$$\\frac{15!}{6!}$$",
        ],
        answer: "②",
      },
      {
        question:
          "$$f(x) = \\ln\\left(\\frac{1 + x^2}{1 - x^2}\\right)$$일 때,$$\\frac{f^{(10)}(0)}{10!}$$의 값은?",
        choices: [
          "$$\\frac{1}{5}$$",
          "$$\\frac{2}{5}$$",
          "$$\\frac{3}{5}$$",
          "$$\\frac{4}{5}$$",
        ],
        answer: "②",
      },
    ],
    105: [
      {
        question:
          "함수$$f(x) = \\frac{x}{1 - x}\\ (|x| < 1)$$를 나타내는 급수는?",
        choices: [
          "$$\\sum_{n=0}^{\\infty} x^n$$",
          "$$\\sum_{n=1}^{\\infty} x^n$$",
          "$$\\sum_{n=0}^{\\infty} nx^n$$",
          "$$\\sum_{n=1}^{\\infty} nx^n$$",
          "$$\\sum_{n=0}^{\\infty} (n + 1)x^n$$",
        ],
        answer: "②",
      },
      {
        question:
          "$$|x| < 1$$일 때, 급수$$\\sum_{n=1}^{\\infty} n^2 x^n$$의 합은?",
        choices: [
          "$$\\frac{1 + x}{(1 - x)^3}$$",
          "$$\\frac{x(1 + x)}{(1 - x)^3}$$",
          "$$\\frac{x}{(1 - x)^3}$$",
          "$$\\frac{x(1 + x) - 1}{(1 - x)^3}$$",
        ],
        answer: "②",
      },
      {
        question:
          "모든 양의 실수$$x$$에 대하여 다음 부등식이 성립하는$$a$$의 최소값은?",
        example: "$$3e^x - 3e^{-x} - 6x - x^3 > ax^5$$",
        choices: [
          "$$1$$",
          "$$\\frac{1}{4}$$",
          "$$\\frac{1}{5}$$",
          "$$\\frac{1}{20}$$",
          "$$\\frac{1}{100}$$",
        ],
        answer: "④",
      },
    ],
    106: [
      {
        question:
          "급수$$1 - \\ln 3 + \\frac{(\\ln 3)^2}{2!} - \\frac{(\\ln 3)^3}{3!} + \\cdots$$의 합은?",
        choices: [
          "$$0$$",
          "$$1$$",
          "$$\\frac{1}{2}$$",
          "$$\\frac{1}{3}$$",
          "$$\\frac{1}{4}$$",
        ],
        answer: "④",
      },
      {
        question:
          "급수$$\\sum_{n=1}^{\\infty} \\frac{n}{3^n}$$의 값을 구하시오.",
        choices: [
          "$$\\frac{3}{4}$$",
          "$$\\frac{1}{3}$$",
          "$$\\frac{1}{4}$$",
          "$$\\frac{4}{3}$$",
        ],
        answer: "①",
      },
      {
        question:
          "무한급수$$\\sum_{n=1}^{\\infty} (-1)^{n-1} \\frac{1}{n2^n}$$의 값은?",
        choices: [
          "$$\\frac{1}{2^n} \\ln\\left(\\frac{3}{2}\\right)$$",
          "$$\\frac{1}{2} \\ln\\left(\\frac{3}{2}\\right)$$",
          "$$\\ln\\left(\\frac{3}{2}\\right)$$",
          "$$2 \\ln\\left(\\frac{3}{2}\\right)$$",
        ],
        answer: "③",
      },
      {
        question:
          "무한급수$$\\sum_{n=1}^{\\infty} \\frac{1}{n(n+1)2^n}$$의 값은?",
        choices: [
          "$$\\frac{1}{2} -\\frac{\\ln 2}{2}$$",
          "$$\\frac{1}{2} -\\frac{\\ln 2}{4}$$",
          "$$1 - \\ln 2$$",
          "$$1 - \\frac{\\ln 2}{2}$$",
        ],
        answer: "③",
      },
    ],
    107: [
      {
        question:
          "무한급수$$\\sum_{n=1}^{\\infty} \\frac{11}{(3n - 1)(3n + 2)}$$의 값을 구하시오.",
        choices: [
          "$$\\frac{11}{6}$$",
          "$$\\frac{11}{3}$$",
          "$$\\frac{15}{2}$$",
          "$$3$$",
        ],
        answer: "①",
      },
      {
        question:
          "무한급수$$\\sum_{n=1}^{\\infty} \\left[ \\tan^{-1}(n+1) - \\tan^{-1} n \\right]$$의 값을 구하시오.",
        choices: [
          "$$\\frac{\\pi}{4}$$",
          "$$\\frac{\\pi}{2}$$",
          "$$\\pi$$",
          "$$2\\pi$$",
        ],
        answer: "①",
      },
      {
        question:
          "무한급수$$\\sum_{n=1}^{\\infty} \\frac{1}{n^2 + 4n + 3}$$의 값은?",
        choices: [
          "$$\\frac{1}{4}$$",
          "$$\\frac{1}{3}$$",
          "$$\\frac{5}{12}$$",
          "$$\\frac{1}{2}$$",
          "$$\\frac{5}{6}$$",
        ],
        answer: "③",
      },
      {
        question:
          "무한급수$$\\sum_{n=2}^{\\infty} \\ln\\left(1 - \\frac{1}{n^2}\\right)$$의 합은?",
        choices: ["$$-e$$", "$$-e^{-1}$$", "$$-\\ln 2$$", "$$-(\\ln 2)^{-1}$$"],
        answer: "③",
      },
      {
        question:
          "$$p > 1$$일 때,$$S_p = \\sum_{k=1}^{\\infty} \\frac{1}{k^p}$$의 값의 범위를 올바르게 나타낸 것은?",
        choices: [
          "$$\\frac{1}{p - 1} \\le S_p \\le \\frac{p}{p - 1}$$",
          "$$\\frac{p}{p - 1} \\le S_p \\le \\frac{p + 1}{p - 1}$$",
          "$$\\frac{p + 1}{p - 1} \\le S_p \\le \\frac{p + 2}{p - 1}$$",
          "$$S_p \\ge \\frac{p + 2}{p - 1}$$",
        ],
        answer: "①",
      },
    ],
    108: [
      {
        question:
          "다음 중 선형근사(linear approximation)를 이용하여$$(8.06)^{\\frac{2}{3}}$$의 근삿값을 구한 것은?",
        choices: ["$$4$$", "$$4.02$$", "$$4.07$$", "$$4.1$$"],
        answer: "②",
      },
      {
        question:
          "함수$$y = \\frac{\\sqrt{3x + 1}}{ax + b}$$의$$x = 0$$에서의 선형근사식이$$y = 2x + 1$$일 때,$$a + b$$의 값은?",
        choices: [
          "$$\\frac{1}{2}$$",
          "$$\\frac{5}{2}$$",
          "$$\\frac{9}{2}$$",
          "$$\\frac{13}{2}$$",
        ],
        answer: "①",
      },
      {
        question: "선형근사를 이용하여 구한$$\\sqrt{4.04}$$의 근삿값은?",
        choices: ["$$2.1$$", "$$2.01$$", "$$2.001$$", "$$2.02$$", "$$2.002$$"],
        answer: "②",
      },
      {
        question:
          "함수$$f(x) = \\frac{\\tan^{-1} x}{1 - x + x^2}$$의 3차의 Maclaurin 다항식$$T_3$$는?",
        choices: [
          "$$T_3 = x + x^2 - \\frac{1}{3}x^3$$",
          "$$T_3 = x + x^2 + \\frac{1}{3}x^3$$",
          "$$T_3 = x - x^2 - \\frac{1}{3}x^3$$",
          "$$T_3 = 1 - x - \\frac{1}{3}x^3$$",
          "$$T_3 = 1 - x^2 - \\frac{1}{3}x^3$$",
        ],
        answer: "①",
      },
    ],
    109: [
      {
        question:
          "함수$$f$$에 대한 표를 이용하여$$g(u) = f(u^2 + 1)$$의$$u = 1$$에서 일차 근사 함수(linear approximation)를 구하면?",
        example: [
          "$$\\begin{array}{|c|c|c|}\\hline\n a & f(a) & f'(a) \\\\\\hline\n 1 & 1 & 4 \\\\\n 2 & 3 & -2 \\\\\n 2.21 & 2 & 1 \\\\\\hline\n\\end{array}$$",
        ],
        choices: [
          "$$8u - 5$$",
          "$$-4u - 1$$",
          "$$8u + 3$$",
          "$$-4u + 7$$",
          "$$u + 1$$",
        ],
        answer: "④",
      },
      {
        question:
          "$$\\ln \\cos x$$의 매클로린 급수의 계수 중$$x^2$$의 계수와$$x^3$$의 계수의 합을 구하시오.",
        choices: [
          "$$\\frac{1}{2}$$",
          "$$-\\frac{1}{2}$$",
          "$$\\frac{3}{2}$$",
          "$$-\\frac{3}{2}$$",
          "$$\\frac{5}{2}$$",
        ],
        answer: "②",
      },
      {
        question:
          "$$y = x^2 \\ln(1 + x^2)$$일 때$$\\frac{d^6 y}{dx^6}(0)$$의 값은?",
        choices: ["$$0$$", "$$180$$", "$$-360$$", "$$540$$", "$$-720$$"],
        answer: "③",
      },
      {
        question:
          "$$f(x) = \\ln(1 + x^{10}) \\arctan(x^{10})$$에 대하여$$\\frac{f^{(10)}(0)}{40!}$$의 값은?",
        choices: [
          "$$-\\frac{1}{2}$$",
          "$$-\\frac{1}{3}$$",
          "$$0$$",
          "$$\\frac{1}{3}$$",
          "$$\\frac{1}{2}$$",
        ],
        answer: "③",
      },
    ],
    110: [
      {
        question:
          "함수$$f(x) = \\int_0^{x^2} e^{-t^2} dt$$에 대해$$f^{(10)}(0)$$의 값은?",
        choices: [
          "$$\\frac{9!}{2}$$",
          "$$-9!$$",
          "$$8!$$",
          "$$\\frac{8!}{2}$$",
          "$$9!$$",
        ],
        answer: "⑤",
      },
      {
        question:
          "함수$$f(x) = \\frac{\\sin x}{\\sqrt{1 - x^2}}$$의 테일러급수$$\\sum_{n=0}^{\\infty} a_n x^n$$에서$$a_0 + a_1 + a_2 + a_3$$의 값은?",
        choices: [
          "$$1$$",
          "$$\\frac{2}{3}$$",
          "$$\\frac{4}{3}$$",
          "$$\\frac{5}{3}$$",
        ],
        answer: "③",
      },
      {
        question:
          "함수$$f(x) = \\frac{\\sinh x}{\\cos x}$$의$$x = 0$$근방에서의 테일러 급수를$$\\sum_{n=0}^{\\infty} a_n x^n$$과 같이 나타낼 때,$$a_3 + a_4$$의 값은?",
        choices: [
          "$$\\frac{1}{5}$$",
          "$$\\frac{1}{2}$$",
          "$$\\frac{2}{3}$$",
          "$$\\frac{3}{5}$$",
          "$$1$$",
        ],
        answer: "③",
      },
      {
        question:
          "$$0 < x < 2$$에서$$\\frac{x}{x - 2} = \\sum_{n=0}^{\\infty} a_n (x - 1)^n$$일 때$$a_7$$의 값은?",
        choices: ["$$-2$$", "$$0$$", "$$\\frac{1}{7!}$$", "$$\\frac{2}{7!}$$"],
        answer: "①",
      },
    ],
    111: [
      {
        question:
          "$$|x| \\le 1$$의 구간에서$$f(x) = \\int_0^x s \\ln(1 + s^2)\\,ds$$의 매클로린 급수 (Maclaurin series)를 다음과 같이 구하였다.$$a_0 + a_1 + a_2 + a_3 + a_4 + a_5$$의 값은 얼마인가?",
        example:
          "$$f(x) = \\int_0^x s \\ln(1 + s^2)\\,ds = a_0 + a_1 x + a_2 x^2 + a_3 x^3 + a_4 x^4 + a_5 x^5 + \\cdots$$",
        choices: ["$$0$$", "$$\\frac{1}{4}$$", "$$\\frac{3}{16}$$", "$$6$$"],
        answer: "②",
      },
      {
        question:
          "급수$$1 - 2\\ln3 + \\frac{(2\\ln3)^2}{2!} - \\frac{(2\\ln3)^3}{3!} + \\cdots$$의 합은?",
        choices: ["$$9$$", "$$3$$", "$$\\frac{1}{3}$$", "$$\\frac{1}{9}$$"],
        answer: "④",
      },
      {
        question:
          "급수$$\\sum_{n=0}^{\\infty} \\frac{(-1)^n}{n + 1} \\left(\\frac{1}{2}\\right)^n$$의 합은?",
        choices: [
          "$$\\ln \\frac{3}{2}$$",
          "$$\\ln 2$$",
          "$$\\ln \\frac{9}{4}$$",
          "$$\\ln 3$$",
          "$$\\ln 4$$",
        ],
        answer: "③",
      },
      {
        question:
          "무한급수$$\\sum_{n=2}^{\\infty} \\frac{n + 1}{3^n (n - 1)}$$의 값은?",
        choices: [
          "$$\\frac{1}{6} - \\frac{2}{3} \\log \\frac{3}{2}$$",
          "$$\\frac{1}{6} - \\frac{2}{3} \\log \\frac{3}{2}$$",
          "$$\\frac{1}{6}$$",
          "$$\\frac{1}{6} + \\frac{2}{3} \\log \\frac{3}{2}$$",
          "$$\\frac{1}{6} + \\frac{4}{3} \\log \\frac{3}{2}$$",
        ],
        answer: "④",
      },
    ],
    112: [
      {
        question:
          "무한급수$$\\sum_{n=0}^{\\infty} \\frac{(-1)^n}{2n+1} \\frac{1}{3^n}$$의 값을 구하면?",
        choices: [
          "$$\\frac{\\sqrt{3}}{2} \\pi$$",
          "$$\\frac{\\sqrt{3}}{3} \\pi$$",
          "$$\\frac{\\sqrt{3}}{4} \\pi$$",
          "$$\\frac{\\sqrt{3}}{5} \\pi$$",
          "$$\\frac{\\sqrt{3}}{6} \\pi$$",
        ],
        answer: "⑤",
      },
      {
        question: "급수$$\\sum_{n=2}^{\\infty} \\frac{2}{n^2 - 1}$$의 합은?",
        choices: ["$$\\frac{3}{2}$$", "$$2$$", "$$\\frac{5}{2}$$", "$$4$$"],
        answer: "①",
      },
      {
        question: "다음 무한급수의 합은?",
        example:
          "$$\\sum_{n=1}^{\\infty} \\frac{(-1)^{n+1}}{n(n+1)} = \\frac{1}{1\\cdot2} - \\frac{1}{2\\cdot3} + \\frac{1}{3\\cdot4} - \\cdots$$",
        choices: [
          "$$\\ln 2$$",
          "$$\\ln 2 + 1$$",
          "$$2 \\ln 2$$",
          "$$2 \\ln 2 - 1$$",
          "$$3 \\ln 2 - 2$$",
        ],
        answer: "④",
      },
    ],
    113: [
      {
        question:
          "$$f(x) = \\sum_{n=0}^{\\infty} (n+1)x^n$$일 때,$$\\sum_{n=1}^{\\infty} n^2 x^{n}$$으로 나타내어 지는 것은?",
        choices: [
          "$$f'(x) - f(x)$$",
          "$$x(f'(x) + f(x))$$",
          "$$f'(x) + f(x)$$",
          "$$x(f'(x) - f(x))$$",
          "$$xf'(x) - f(x)$$",
        ],
        answer: "④",
      },
      {
        question:
          "$$f(x) = \\sum_{n=0}^{\\infty} (n+1)x^{2n}$$일 때$$\\sum_{n=0}^{\\infty} n^2 x^{2n}$$으로 표현되는 함수는?",
        choices: [
          "$$xf'(x) - x^2 f(x)$$",
          "$$\\frac{x}{2} f'(x) - x^2 f(x)$$",
          "$$xf'(x) - \\frac{x^2}{2} f(x)$$",
          "$$2xf'(x) - x^2 f(x)$$",
          "$$2xf'(x) + x^2 f(x)$$",
        ],
        answer: "②",
      },
      {
        question:
          "급수$$\\sum_{n=1}^{\\infty} \\frac{n(n+1)}{2^n}$$의 값을 구하면?",
        choices: ["$$7$$", "$$8$$", "$$9$$", "$$10$$", "$$11$$"],
        answer: "②",
      },
      {
        question:
          "급수$$\\sum_{n=1}^{\\infty} \\frac{n 2^{n-1}}{3^n}$$의 합은?",
        choices: [
          "$$\\frac{3}{2}$$",
          "$$2$$",
          "$$\\frac{5}{2}$$",
          "$$3$$",
          "$$\\frac{7}{2}$$",
        ],
        answer: "④",
      },
    ],
    114: [
      {
        question:
          "다음의 두 함수$$f(x)$$와$$g(x)$$에 대하여$$\\frac{(f+g)^{(2020)}(0)}{(2020)!}$$의 값은?",
        example: "$$f(x) = \\sinh x, \\quad g(x) = x \\ln(1 + x)$$",
        choices: [
          "$$\\frac{-1}{2019}$$",
          "$$\\frac{1}{2019}$$",
          "$$\\frac{-1}{2020}$$",
          "$$\\frac{1}{2020}$$",
          "$$\\frac{2019}{2020}$$",
        ],
        answer: "②",
      },
      {
        question:
          "다음 보기 중 적분$$\\int_0^1 \\sqrt{1 + x^3} dx$$의 값을 오차$$0.01$$이내로 근사한 값은?",
        choices: [
          "$$\\frac{33}{31}$$",
          "$$\\frac{31}{28}$$",
          "$$\\frac{32}{27}$$",
          "$$\\frac{31}{26}$$",
          "$$\\frac{33}{27}$$",
        ],
        answer: "②",
      },
      {
        question: "$$f(x) = 2x^2 \\sqrt{3 + x^2}$$일 때,$$f^{(6)}(0)$$의 값은?",
        choices: [
          "$$-20\\sqrt{3}$$",
          "$$-15\\sqrt{3}$$",
          "$$5\\sqrt{3}$$",
          "$$15\\sqrt{3}$$",
          "$$20\\sqrt{3}$$",
        ],
        answer: "①",
      },
      {
        question:
          "급수$$\\sum_{n=1}^{\\infty} \\frac{1}{n^6}$$를 오차가$$0.001$$보다 작게 계산하기 위한 항의 최소 개수는?",
        choices: ["$$2$$", "$$3$$", "$$4$$", "$$5$$", "$$6$$"],
        answer: "②",
      },
    ],
    115: [
      {
        question:
          "$$\\sum_{k=0}^{\\infty} (k+1)(k+2) \\left( \\frac{1}{2} \\right)^\\frac{2}{k}$$의 값은?",
        choices: [
          "$$38 + 26 \\sqrt{2}$$",
          "$$38 + 28 \\sqrt{2}$$",
          "$$40 + 26 \\sqrt{2}$$",
          "$$40 + 28 \\sqrt{2}$$",
        ],
        answer: "④",
      },
      {
        question: "$$f(x) = e^{x^2}$$일 때,$$f^{(2n)}(0)$$의 값은?",
        choices: [
          "$$\\frac{(2n - 1)!}{n!}$$",
          "$$\\frac{(2n)!}{(n + 1)!}$$",
          "$$\\frac{(2n)!}{(n - 1)!}$$",
          "$$\\frac{(2n)!}{n!}$$",
          "$$\\frac{(2n + 1)!}{n!}$$",
        ],
        answer: "④",
      },
      {
        question:
          "함수$$f(x) = (x + 3)^2 \\cos 2x$$에 대해$$f^{(10)}(0)$$의 값은?",
        choices: [
          "$$2^9 3^3$$",
          "$$-2^{10} 3^2$$",
          "$$2^{10} 3^2$$",
          "$$2^9 3^2 5$$",
          "$$-2^{10}$$",
        ],
        answer: "①",
      },
      {
        question:
          "함수$$f(x) = \\sum_{n=1}^{\\infty} \\frac{x^n}{n}$$에 대하여$$f\\left(\\frac{1}{2}\\right)$$의 값은?",
        choices: [
          "$$\\ln \\frac{3}{2}$$",
          "$$\\ln 2$$",
          "$$\\ln \\frac{5}{2}$$",
          "$$\\ln 3$$",
        ],
        answer: "②",
      },
    ],
    116: [
      {
        question:
          "$$x = -1$$에서 함수$$f(x) = \\frac{4}{2x + 3}$$의 테일러 급수의 7차항의 계수는?",
        choices: [
          "$$4 \\times 3^7$$",
          "$$4 \\times (-3)^7$$",
          "$$4 \\times 2^7$$",
          "$$4 \\times (-2)^7$$",
          "$$4 \\times (-1)^7$$",
        ],
        answer: "④",
      },
      {
        question: "다음 급수의 값은?",
        example: "$$\\sum_{k=0}^{\\infty} \\frac{1}{2^k (k + 1)}$$",
        choices: [
          "$$0$$",
          "$$\\ln 2$$",
          "$$2 \\ln 2$$",
          "$$1 + \\ln 2$$",
          "$$\\ln 3 + \\ln 2$$",
        ],
        answer: "③",
      },
      {
        question:
          "함수$$f(x) = \\frac{x^2 + x}{(1 - x)^3}$$의 거듭제급수 표현이$$\\sum_{n=1}^{\\infty} (an + b)^c x^n$$이면,$$a + b + c$$는?",
        choices: ["$$1$$", "$$2$$", "$$3$$", "$$4$$", "$$5$$"],
        answer: "③",
      },
      {
        question:
          "급수$$\\sum_{n=1}^{\\infty} \\frac{(-1)^{n-1}}{2n(2n - 1) 3^n}$$의 값을 구하면?",
        choices: [
          "$$\\frac{\\sqrt{3} \\pi}{18} - \\frac{1}{2} \\ln \\frac{4}{3}$$",
          "$$\\frac{\\sqrt{3} \\pi}{6} - \\frac{1}{2} \\ln \\frac{2}{3}$$",
          "$$\\frac{\\sqrt{3} \\pi}{18} - \\frac{1}{2} \\ln \\frac{2}{3}$$",
          "$$\\frac{\\sqrt{3} \\pi}{6} - \\frac{1}{2} \\ln \\frac{4}{3}$$",
          "$$\\frac{\\sqrt{3} \\pi}{18} - \\frac{1}{2} \\ln \\frac{1}{3}$$",
        ],
        answer: "①",
      },
    ],
    121: [
      {
        question:
          "다음 급수의 수렴, 발산을 판정하시오. (1)$$\\sum_{n=1}^{\\infty} \\cos \\frac{1}{n}$$",
        answer: "발산",
      },
      {
        question:
          "다음 급수의 수렴, 발산을 판정하시오. (2)$$\\sum_{n=1}^{\\infty} \\frac{1 - n^2}{3n^2 + 2}$$",
        answer: "발산",
      },
      {
        question:
          "다음 급수의 수렴, 발산을 판정하시오. (3)$$\\sum_{n=1}^{\\infty} \\frac{n^3}{2n^3 + n^2 + 1}$$",
        answer: "발산",
      },
      {
        question:
          "다음 급수의 수렴, 발산을 판정하시오. (4)$$\\sum_{n=1}^{\\infty} n \\sin \\frac{1}{n}$$",
        answer: "발산",
      },
      {
        question:
          "다음 급수의 수렴, 발산을 판정하시오. (5)$$\\sum_{n=1}^{\\infty} n^\\frac{1}{n}$$",
        answer: "발산",
      },
      {
        question:
          "다음 급수의 수렴, 발산을 판정하시오. (6)$$\\sum_{n=1}^{\\infty} \\left(1 - \\frac{1}{2k}\\right)^k$$",
        answer: "발산",
      },
      {
        question:
          "다음 급수의 수렴, 발산을 판정하시오. (1)$$\\sum_{k=1}^{\\infty} \\frac{1}{k \\log k}$$",
        answer: "발산",
      },
      {
        question:
          "다음 급수의 수렴, 발산을 판정하시오. (2)$$\\sum_{n=2}^{\\infty} \\frac{1}{n (\\log n)^2}$$",
        answer: "수렴",
      },
      {
        question:
          "다음 급수의 수렴, 발산을 판정하시오. (3)$$\\sum_{n=2}^{\\infty} \\frac{1}{(\\log n)^3}$$",
        answer: "발산",
      },
      {
        question:
          "다음 급수의 수렴, 발산을 판정하시오. (1)$$\\sum_{n=1}^{\\infty} \\frac{1}{n^3}$$",
        answer: "수렴",
      },
      {
        question:
          "다음 급수의 수렴, 발산을 판정하시오. (2)$$\\sum_{n=1}^{\\infty} \\frac{1}{n \\sqrt{n}}$$",
        answer: "수렴",
      },
      {
        question:
          "다음 급수의 수렴, 발산을 판정하시오. (3)$$\\sum_{n=1}^{\\infty} \\frac{\\ln n}{n}$$",
        answer: "발산",
      },
      {
        question:
          "다음 급수의 수렴, 발산을 판정하시오. (4)$$\\sum_{n=1}^{\\infty} \\frac{\\cos n}{n^2}$$",
        answer: "수렴",
      },
      {
        question:
          "다음 급수의 수렴, 발산을 판정하시오. (5)$$\\sum_{n=1}^{\\infty} \\frac{n^2}{n^3 + 3}$$",
        answer: "발산",
      },
      {
        question:
          "다음 급수의 수렴, 발산을 판정하시오. (6)$$\\sum_{n=1}^{\\infty} \\frac{n^n}{n!}$$",
        answer: "발산",
      },
      {
        question:
          "다음 급수의 수렴, 발산을 판정하시오. (7)$$\\sum_{n=1}^{\\infty} \\frac{1}{n^ {\\sin 1}}$$",
        answer: "발산",
      },
      {
        question:
          "다음 급수의 수렴, 발산을 판정하시오. (8)$$\\sum_{n=1}^{\\infty} \\frac{(n + 1)^2}{2^n}$$",
        answer: "수렴",
      },
      {
        question:
          "다음 급수의 수렴, 발산을 판정하시오. (9)$$\\sum_{n=1}^{\\infty} \\frac{n}{\\sqrt{n^3 + 1}}$$",
        answer: "발산",
      },
      {
        question:
          "다음 급수의 수렴, 발산을 판정하시오. (10)$$\\sum_{n=1}^{\\infty} \\frac{\\sqrt{n + 2} - \\sqrt{n - 2}}{n}$$",
        answer: "수렴",
      },
      {
        question:
          "다음 급수의 수렴, 발산을 판정하시오. (11)$$\\sum_{n=1}^{\\infty} \\frac{n!3^n}{n^n}$$",
        answer: "발산",
      },
    ],
    122: [
      {
        question:
          "다음 급수의 수렴, 발산을 판정하시오. (1)$$\\sum_{n=1}^{\\infty} \\frac{n}{2^n}$$",
        answer: "수렴",
      },
      {
        question:
          "다음 급수의 수렴, 발산을 판정하시오. (2)$$\\sum_{n=1}^{\\infty} \\frac{n!}{2 \\cdot 5 \\cdot 8 \\cdots (3n + 2)}$$",
        answer: "수렴",
      },
      {
        question:
          "다음 급수의 수렴, 발산을 판정하시오. (3)$$\\sum_{n=1}^{\\infty} \\frac{1 \\cdot 3 \\cdot 5 \\cdots (2n - 1)}{2 \\cdot 5 \\cdot 8 \\cdots (3n - 1)}$$",
        answer: "수렴",
      },
      {
        question:
          "다음 급수의 수렴, 발산을 판정하시오. (4)$$\\sum_{n=1}^{\\infty} \\frac{(2n)!}{(n!)^2}$$",
        answer: "발산",
      },
      {
        question:
          "다음 급수의 수렴, 발산을 판정하시오. (5)$$\\sum_{n=1}^{\\infty} \\frac{8^n (n!)^3}{(3n)!}$$",
        answer: "수렴",
      },
      {
        question:
          "다음 급수의 수렴, 발산을 판정하시오. (1)$$\\sum_{n=1}^{\\infty} \\left( \\frac{3 + 2n}{2 + 3n} \\right)^n$$",
        answer: "수렴",
      },
      {
        question:
          "다음 급수의 수렴, 발산을 판정하시오. (2)$$\\sum_{n=1}^{\\infty} \\frac{\\pi n}{(\\ln n)^n}$$",
        answer: "수렴",
      },
      {
        question:
          "다음 급수의 수렴, 발산을 판정하시오. (3)$$\\sum_{n=1}^{\\infty} \\left( 1 - \\frac{2}{n} \\right)^n$$",
        answer: "발산",
      },
      {
        question:
          "다음 급수의 수렴, 발산을 판정하시오. (4)$$\\sum_{n=3}^{\\infty} \\left( 1 - \\frac{2}{n} \\right)^{n^2}$$",
        answer: "수렴",
      },
      {
        question:
          "다음 급수의 수렴, 발산을 판정하시오. (1)$$\\sum_{n=1}^{\\infty} \\sin \\left( \\frac{1}{n} \\right)$$",
        answer: "발산",
      },
      {
        question:
          "다음 급수의 수렴, 발산을 판정하시오. (2)$$\\sum_{n=1}^{\\infty} \\sin \\left( \\frac{1}{n^2} \\right)$$",
        answer: "수렴",
      },
      {
        question:
          "다음 급수의 수렴, 발산을 판정하시오. (3)$$\\sum_{n=1}^{\\infty} \\tan \\left( \\frac{1}{\\sqrt{n}} \\right)$$",
        answer: "발산",
      },
      {
        question:
          "다음 급수의 수렴, 발산을 판정하시오. (4)$$\\sum_{n=1}^{\\infty} \\frac{1}{\\sqrt{n}} \\sin \\left( \\frac{1}{n} \\right)$$",
        answer: "수렴",
      },
      {
        question:
          "다음 급수의 수렴, 발산을 판정하시오. (5)$$\\sum_{n=1}^{\\infty} \\sinh^2 \\left( \\frac{1}{n} \\right)$$",
        answer: "수렴",
      },
      {
        question:
          "다음 급수의 수렴, 발산을 판정하시오. (6)$$\\sum_{n=1}^{\\infty} \\left( 1 - \\cos \\frac{1}{n} \\right)$$",
        answer: "수렴",
      },
      {
        question:
          "다음 급수의 수렴, 발산을 판정하시오. (7)$$\\sum_{n=1}^{\\infty} \\frac{1}{n^{1 + \\frac{1}{n}}}$$",
        answer: "발산",
      },
      {
        question:
          "다음 급수의 수렴, 발산을 판정하시오. (1)$$\\sum_{n=1}^{\\infty} \\frac{e^\\frac{1}{n}}{n}$$",
        answer: "발산",
      },
      {
        question:
          "다음 급수의 수렴, 발산을 판정하시오. (2)$$\\sum_{n=1}^{\\infty} \\frac{\\sqrt[n]{2}}{n^2}$$",
        answer: "수렴",
      },
    ],
    123: [
      {
        question:
          "다음 급수의 수렴과 발산을 판정하시오. (1)$$\\sum_{n=1}^{\\infty} \\frac{(n+1)^2}{2^n}$$",
        answer: "수렴",
      },
      {
        question:
          "다음 급수의 수렴과 발산을 판정하시오. (2)$$\\sum_{n=1}^{\\infty} \\frac{n^2}{100^n}$$",
        answer: "수렴",
      },
      {
        question:
          "다음 급수의 수렴과 발산을 판정하시오. (3)$$\\sum_{n=1}^{\\infty} \\frac{3^n}{n(n+1)(n+2)}$$",
        answer: "발산",
      },
      {
        question:
          "다음 급수의 수렴과 발산을 판정하시오. (4)$$\\sum_{n=1}^{\\infty} ne^{-n}$$",
        answer: "수렴",
      },
      {
        question:
          "다음 급수의 수렴과 발산을 판정하시오. (5)$$\\sum_{k=1}^{\\infty} \\frac{2^{k+1}}{k^5}$$",
        answer: "발산",
      },
      {
        question:
          "다음 급수의 수렴과 발산을 판정하시오. (6)$$\\sum_{n=1}^{\\infty} \\frac{1.01^n}{n^{2020}}$$",
        answer: "발산",
      },
      {
        question:
          "다음 급수의 수렴과 발산을 판정하시오. (7)$$\\sum_{n=1}^{\\infty} \\frac{1}{n + 3^{-n}}$$",
        answer: "발산",
      },
      {
        question:
          "다음 급수의 수렴과 발산을 판정하시오. (8)$$\\sum_{n=1}^{\\infty} \\frac{10^n}{8^n + 9^n}$$",
        answer: "발산",
      },
      {
        question:
          "다음 급수의 수렴과 발산을 판정하시오. (9)$$\\sum_{n=1}^{\\infty} \\frac{n^3}{n!}$$",
        answer: "수렴",
      },
      {
        question:
          "다음 급수의 수렴과 발산을 판정하시오. (10)$$\\sum_{k=1}^{\\infty} \\frac{k!}{k^{10} 10^k}$$",
        answer: "발산",
      },
      {
        question:
          "다음 급수의 수렴과 발산을 판정하시오. (11)$$\\sum_{n=1}^{\\infty} \\frac{2^n}{n!}$$",
        answer: "수렴",
      },
      {
        question:
          "다음 급수의 수렴과 발산을 판정하시오. (12)$$\\sum_{n=1}^{\\infty} \\frac{5^n}{1 \\cdot 3 \\cdot 5 \\cdots (2n - 1)}$$",
        answer: "발산",
      },
      {
        question:
          "다음 급수의 수렴과 발산을 판정하시오. (13)$$\\sum_{n=1}^{\\infty} \\frac{n^n}{4^n n!}$$",
        answer: "수렴",
      },
      {
        question:
          "다음 급수의 수렴과 발산을 판정하시오. (14)$$\\sum_{k=1}^{\\infty} \\frac{(2k)!}{3^k k!}$$",
        answer: "발산",
      },
      {
        question:
          "다음 급수의 수렴과 발산을 판정하시오. (15)$$\\sum_{n=1}^{\\infty} \\sin \\left( \\frac{1}{n^2} \\right)$$",
        answer: "수렴",
      },
      {
        question:
          "다음 급수의 수렴과 발산을 판정하시오. (16)$$\\sum_{n=1}^{\\infty} \\frac{1}{n} \\sin^2 \\left( \\frac{1}{n} \\right)$$",
        answer: "수렴",
      },
      {
        question:
          "다음 급수의 수렴과 발산을 판정하시오. (17)$$\\sum_{n=1}^{\\infty} \\tan^{-1} \\left( \\frac{1}{n} \\right)$$",
        answer: "발산",
      },
      {
        question:
          "다음 급수의 수렴과 발산을 판정하시오. (18)$$\\sum_{n=1}^{\\infty} \\frac{\\tan \\left( \\frac{1}{n} \\right)}{n}$$",
        answer: "수렴",
      },
      {
        question:
          "다음 급수의 수렴과 발산을 판정하시오. (19)$$\\sum_{n=1}^{\\infty} \\log \\left( 1 + \\frac{1}{n} \\right)$$",
        answer: "발산",
      },
      {
        question:
          "다음 급수의 수렴과 발산을 판정하시오. (20)$$\\sum_{n=1}^{\\infty} \\frac{2 + \\sin n}{n}$$",
        answer: "발산",
      },
    ],
    125: [
      {
        question:
          "다음 급수의 수렴과 발산을 판정하시오. (1)$$\\sum_{n=1}^{\\infty} \\frac{(-1)^n}{n}$$",
        answer: "수렴",
      },
      {
        question:
          "다음 급수의 수렴과 발산을 판정하시오. (2)$$\\sum_{n=1}^{\\infty} \\frac{(-1)^n}{\\sqrt{n}}$$",
        answer: "수렴",
      },
      {
        question:
          "다음 급수의 수렴과 발산을 판정하시오. (3)$$\\sum_{n=1}^{\\infty} (-1)^n \\frac{1}{\\sqrt{n^2 + 1}}$$",
        answer: "수렴",
      },
      {
        question:
          "다음 급수의 수렴과 발산을 판정하시오. (4)$$\\sum_{n=1}^{\\infty} \\frac{(-1)^n}{n^\\frac{5}{2} + n}$$",
        answer: "수렴",
      },
      {
        question:
          "다음 급수의 수렴과 발산을 판정하시오. (5)$$\\sum_{k=2}^{\\infty} \\frac{(-1)^k}{\\ln k}$$",
        answer: "수렴",
      },
      {
        question:
          "다음 급수의 수렴과 발산을 판정하시오. (6)$$\\sum_{n=1}^{\\infty} (-1)^n \\frac{n!}{n^n}$$",
        answer: "수렴",
      },
      {
        question:
          "다음 급수의 수렴과 발산을 판정하시오. (7)$$\\sum_{n=1}^{\\infty} (-1)^n \\frac{\\tan^{-1} n}{2 + n^2}$$",
        answer: "수렴",
      },
      {
        question:
          "다음 급수의 수렴과 발산을 판정하시오. (8)$$\\sum_{n=1}^{\\infty} \\frac{\\cos n\\pi}{n}$$",
        answer: "수렴",
      },
      {
        question:
          "다음 급수의 수렴과 발산을 판정하시오. (9)$$\\sum_{n=1}^{\\infty} \\frac{\\sin n\\pi}{n}$$",
        answer: "수렴",
      },
      {
        question:
          "다음 급수의 수렴과 발산을 판정하시오. (10)$$\\sum_{n=1}^{\\infty} \\frac{\\sin n}{n}$$",
        answer: "수렴",
      },
      {
        question:
          "다음 무한급수의 절대수렴, 조건부수렴, 발산을 판정하시오. (1)$$\\sum_{n=1}^{\\infty} (-1)^n \\frac{\\tan^{-1} n}{2 + n^2}$$",
        answer: "절대 수렴",
      },
      {
        question:
          "다음 무한급수의 절대수렴, 조건부수렴, 발산을 판정하시오. (2)$$\\sum_{n=1}^{\\infty} (-1)^n \\frac{1}{\\sqrt{n^2 + 1}}$$",
        answer: "조건부 수렴",
      },
      {
        question:
          "다음 무한급수의 절대수렴, 조건부수렴, 발산을 판정하시오. (3)$$\\sum_{n=1}^{\\infty} (-1)^n \\frac{\\sqrt{n}}{2 + \\sqrt{n}}$$",
        answer: "발산",
      },
      {
        question:
          "다음 무한급수의 절대수렴, 조건부수렴, 발산을 판정하시오. (4)$$\\sum_{n=1}^{\\infty} (-1)^n e^\\frac{1}{n}$$",
        answer: "발산",
      },
      {
        question:
          "다음 무한급수의 절대수렴, 조건부수렴, 발산을 판정하시오. (5)$$\\sum_{n=1}^{\\infty} (-1)^n \\frac{\\sqrt[n]{e}}{\\ln n}$$",
        answer: "절대 수렴",
      },
    ],
    127: [
      {
        question:
          "다음 급수의 수렴반경과 수렴구간을 구하여라.$$\\sum_{n=1}^{\\infty} \\frac{x^n}{n 8^n}$$",
        answer: "수렴반경: $$8$$, 수렴구간: $$-8 \\leq x \\leq 8$$",
      },
      {
        question:
          "다음 급수의 수렴반경과 수렴구간을 구하여라.$$\\sum_{n=1}^{\\infty} \\frac{x^n}{\\sqrt{n} 3^n}$$",
        answer: "수렴반경: $$3$$, 수렴구간: $$-3 \\leq x < 3$$",
      },
      {
        question:
          "다음 급수의 수렴반경과 수렴구간을 구하여라.$$\\sum_{n=1}^{\\infty} \\frac{(-2)^n}{\\sqrt{n}} x^n$$",
        answer: "수렴반경: $$\\frac{1}{2}$$, 수렴구간: $$-\\frac{1}{2} < x \\leq \\frac{1}{2}$$",
      },
      {
        question:
          "다음 급수의 수렴반경과 수렴구간을 구하여라.$$\\sum_{k=1}^{\\infty} \\frac{(x-2)^k}{k^2 2^k}$$",
        answer: "수렴반경: $$2$$, 수렴구간: $$0 \\leq x \\leq 4$$",
      },
      {
        question:
          "다음 급수의 수렴반경과 수렴구간을 구하여라.$$\\sum_{k=1}^{\\infty} \\frac{(-1)^k}{k^2 3^k} (x+2)^k$$",
        answer: "수렴반경: $$3$$, 수렴구간: $$-5 < x < 1$$",
      },
      {
        question:
          "다음 급수의 수렴반경과 수렴구간을 구하여라.$$\\sum_{n=0}^{\\infty} \\frac{n(x+3)^n}{5^{n+1}}$$",
        answer: "수렴반경: $$5$$, 수렴구간: $$-8 < x < 2$$",
      },
      {
        question:
          "다음 무한급수의 수렴구간을 구하여라.$$\\sum_{n=1}^{\\infty} (-1)^n \\frac{n}{5^{n+1}} x^n$$",
        answer: "수렴구간: $$-5 < x < 5$$",
      },
      {
        question:
          "다음 무한급수의 수렴구간을 구하여라.$$\\sum_{n=1}^{\\infty} (-1)^n \\frac{x^{n+1}}{n(n+1)}$$",
        answer: "수렴구간: $$-1 \\leq x \\leq 1$$",
      },
      {
        question:
          "다음 무한급수의 수렴구간을 구하여라.$$\\sum_{n=1}^{\\infty} \\frac{(2x - 5)^n}{\\sqrt{n}}$$",
        answer: "수렴구간: $$2 \\leq x < 3$$",
      },
      {
        question:
          "다음 무한급수의 수렴구간을 구하여라.$$\\sum_{k=0}^{\\infty} \\left( \\frac{\\sqrt{x}}{2} - 1 \\right)^k$$",
        answer: "수렴구간: $$0 < x < 16$$",
      },
      {
        question:
          "다음 무한급수의 수렴구간을 구하여라.$$\\sum_{n=1}^{\\infty} \\frac{n x^{3 n}}{8^n}$$",
        answer: "수렴구간: $$-2 < x < 2$$",
      },
    ],
    128: [
      {
        question: "다음 중 수렴하는 것을 모두 고른 것은?",
        example: [
          "$$\\text{ㄱ. } \\sum_{n=1}^{\\infty} \\frac{1}{n^\\sqrt{e}}$$",
          "$$\\text{ㄴ. } \\sum_{n=1}^{\\infty} \\frac{2n}{n^2 - 5n + 8}$$",
          "$$\\text{ㄷ. } \\sum_{n=1}^{\\infty} \\frac{n^2 - n + 5}{n^5 + 5n^4 - 2n^3 + n + 1}$$",
          "$$\\text{ㄹ. } \\sum_{n=1}^{\\infty} \\frac{(-1)^n(n - 1)}{n + 1}$$",
        ],
        choices: ["ㄱ, ㄷ", "ㄱ, ㄹ", "ㄴ, ㄷ", "ㄴ, ㄹ"],
        answer: "①",
      },
      {
        question: "다음 중 수렴하는 것을 모두 고른 것은?",
        example: [
          "ㄱ. $$\\sum_{n=2}^{\\infty} \\frac{1}{n \\ln n}$$ ㄴ. $$\\sum_{n=1}^{\\infty} \\frac{n!}{n^n}$$ ㄷ. $$\\sum_{n=1}^{\\infty} (\\log(n+1) - \\log n)$$ ㄹ. $$\\sum_{n=1}^{\\infty} \\tan^2 \\left( \\frac{\\pi}{n} \\right)$$",
        ],
        choices: ["ㄱ, ㄴ", "ㄴ, ㄷ", "ㄴ, ㄹ", "ㄷ, ㄹ"],
        answer: "③",
      },
      {
        question: "다음 중 발산하는 무한급수의 개수는?",
        example: [
          "ㄱ. $$\\sum_{n=1}^{\\infty} \\frac{1}{n^{1 + \\frac{1}{n}}}$$ ㄴ. $$\\sum_{n=1}^{\\infty} \\frac{1}{n \\ln n}$$ ㄷ. $$\\sum_{n=1}^{\\infty} \\frac{1}{n}$$ ㄹ. $$\\sum_{n=1}^{\\infty} \\ln\\left( 1 + \\frac{1}{n} \\right)$$",
        ],
        choices: ["1개", "2개", "3개", "4개"],
        answer: "④",
      },
    ],
    129: [
      {
        question: "다음 중 수렴하는 무한급수의 개수는?",
        example:
          "$$\\begin{aligned}\n&\\text{ㄱ. } \\sum_{n=1}^{\\infty} (-1)^n \\ln\\left(1 + \\sinh \\frac{1}{n}\\right) \\\\\n&\\text{ㄴ. } \\sum_{n=1}^{\\infty} \\frac{n! e^{2n}}{n^n} \\\\\n&\\text{ㄷ. } \\sum_{n=2}^{\\infty} \\frac{\\arctan\\left(\\frac{1}{n}\\right)}{\\ln n} \\\\\n&\\text{ㄹ. } \\sum_{n=1}^{\\infty} \\tan^2\\left(\\frac{4\\pi}{n}\\right)\n\\end{aligned}$$",
        choices: ["1개", "2개", "3개", "4개"],
        answer: "②",
      },
      {
        question: "다음 중 수렴하는 무한급수를 모두 고르면?",
        example:
          "$$\\begin{aligned}\n&\\text{ㄱ. } \\sum_{n=0}^{\\infty} \\frac{1}{n^2 + 1} \\\\\n&\\text{ㄴ. } \\sum_{n=1}^{\\infty} (-1)^n \\frac{n - 1}{2n + 1} \\\\\n&\\text{ㄷ. } \\sum_{n=2}^{\\infty} \\frac{\\sin n}{(n+1)(\\ln n)^2} \\\\\n&\\text{ㄹ. } \\sum_{n=1}^{\\infty} \\left(1 + \\frac{1}{n}\\right)^{n^2}\n\\end{aligned}$$",
        choices: ["ㄱ, ㄴ", "ㄱ, ㄷ", "ㄴ, ㄷ", "ㄷ, ㄹ"],
        answer: "②",
      },
      {
        question: "다음 중 수렴하는 무한급수의 개수는?",
        example:
          "$$\\begin{aligned}\n&\\text{ㄱ. } \\sum_{n=1}^{\\infty} \\left(e^-n - e^{-(n+1)}\\right) \\\\\n&\\text{ㄴ. } \\sum_{n=1}^{\\infty} \\frac{1}{\\sqrt[3]{n^2 + n + 1}} \\\\\n&\\text{ㄷ. } \\sum_{n=1}^{\\infty} (-1)^n \\frac{n - 999}{n + 1000} \\\\\n&\\text{ㄹ. } \\sum_{n=2}^{\\infty} \\frac{2n - 1}{(n - 1)(n + 1)^2} \\\\\n&\\text{ㅁ. } 1 - 2 + 4 - \\cdots + (-2)^n + \\cdots\n\\end{aligned}$$",
        choices: ["1개", "2개", "3개", "4개", "5개"],
        answer: "②",
      },
    ],
    130: [
      {
        question: "다음 중에서 수렴하지 않는 급수는?",
        choices: [
          "$$\\sum_{n=1}^{\\infty} \\frac{(-1)^n}{n+1}$$",
          "$$\\sum_{n=1}^{\\infty} \\frac{2^n}{3^n + 2^n}$$",
          "$$\\sum_{n=1}^{\\infty} \\frac{e^n}{(n+2)^2}$$",
          "$$\\sum_{n=1}^{\\infty} \\frac{n - 4}{n^4 + 4}$$",
          "$$\\sum_{n=1}^{\\infty} \\frac{\\sin n}{n^2}$$",
        ],
        answer: "③",
      },
      {
        question: "다음 중 수렴하는 급수는?",
        choices: [
          "$$\\sum_{n=1}^{\\infty} n^{-\\sin 1}$$",
          "$$\\sum_{n=1}^{\\infty} \\frac{\\sqrt{n+1} - \\sqrt{n - 1}}{n}$$",
          "$$\\sum_{n=1}^{\\infty} \\frac{(-1)^n n}{\\ln n}$$",
          "$$\\sum_{n=1}^{\\infty} \\frac{5^{2n}}{n^2 9^n}$$",
        ],
        answer: "②",
      },
      {
        question: "다음 중 수렴하는 급수는?",
        choices: [
          "$$\\sum_{n=1}^{\\infty} \\sin\\left( \\sin \\frac{1}{n} \\right)$$",
          "$$\\sum_{n=1}^{\\infty} \\left(\\frac{3 + 5n}{5 + 3n}\\right)^n$$",
          "$$\\sum_{n=1}^{\\infty} \\left( \\frac{n}{n + 1} \\right)^n$$",
          "$$\\sum_{n=1}^{\\infty} \\frac{\\sin\\left(\\frac{1}{n}\\right)}{n}$$",
        ],
        answer: "④",
      },
      {
        question: "다음 중 수렴하는 무한급수는?",
        choices: [
          "$$\\sum_{n=1}^{\\infty} \\frac{1}{(\\ln n)^3}$$",
          "$$\\sum_{n=1}^{\\infty} \\frac{2n + 1}{3n^2 + 1}$$",
          "$$\\sum_{n=1}^{\\infty} \\sin\\left(\\frac{1}{n}\\right)$$",
          "$$\\sum_{n=1}^{\\infty} \\frac{2^n n!}{n^n}$$",
        ],
        answer: "④",
      },
    ],
    131: [
      {
        question: "다음 중 발산하는 급수는?",
        choices: [
          "$$\\sum_{n=1}^{\\infty} \\frac{\\ln n}{\\sqrt{n} e^n}$$",
          "$$\\sum_{n=1}^{\\infty} (-1)^n \\sin\\left( \\frac{1}{n} \\right)$$",
          "$$\\sum_{n=2}^{\\infty} \\frac{1}{n (\\ln n)^2}$$",
          "$$\\sum_{n=1}^{\\infty} \\frac{(2n)!}{3^n n!}$$",
        ],
        answer: "④",
      },
      {
        question: "다음 중 발산하는 급수는?",
        choices: [
          "$$\\sum_{n=1}^{\\infty} \\frac{1 + \\sin n}{n^2}$$",
          "$$\\sum_{n=1}^{\\infty} \\frac{1}{n \\sqrt{n}}$$",
          "$$\\sum_{n=1}^{\\infty} \\frac{\\ln(n + 2)}{n^2}$$",
          "$$\\sum_{n=1}^{\\infty} \\frac{n \\sqrt{n + 1}}{\\sqrt{n^5 + 5n}}$$",
        ],
        answer: "④",
      },
      {
        question: "다음 중 발산하는 급수는?",
        choices: [
          "$$\\sum_{n=1}^{\\infty} \\left(1 - e^{-\\frac{1}{n^2}}\\right)$$",
          "$$\\sum_{n=1}^{\\infty} \\frac{\\sin n}{n}$$",
          "$$\\sum_{n=1}^{\\infty} n \\left( \\sin \\frac{1}{n} - \\frac{1}{n} \\right)$$",
          "$$\\sum_{n=1}^{\\infty} \\left( \\sum_{k=1}^{n} \\frac{1}{k^2} \\right) \\frac{1}{n}$$",
        ],
        answer: "④",
      },
      {
        question: "다음 중 발산하는 급수는?",
        choices: [
          "$$\\sum_{n=1}^{\\infty} \\frac{1}{n \\sqrt{n + 1}}$$",
          "$$\\sum_{n=1}^{\\infty} \\frac{2^n + n}{n!}$$",
          "$$\\sum_{n=1}^{\\infty} \\frac{n^2}{2 + n^3}$$",
          "$$\\sum_{n=1}^{\\infty} \\frac{2 \\sin\\left(\\frac{n}{3}\\pi\\right)}{n^2}$$",
        ],
        answer: "③",
      },
    ],
    132: [
      {
        question:
          "급수$$\\sum_{k=2}^{\\infty} \\frac{1}{k^p \\ln k}$$가 수렴하게 되는$$p$$의 범위를 구하면?",
        choices: [
          "$$p > 1$$",
          "$$-1 < p \\leq 1$$",
          "$$p \\leq 1$$",
          "$$0 < p \\leq 1$$",
        ],
        answer: "①",
      },
      {
        question:
          "무한급수$$\\sum_{n=1}^{\\infty} b^{ln n}$$가 수렴하기 위한 가능한 양수$$b$$의 값은?",
        choices: [
          "$$0 < b < \\frac{1}{e}$$",
          "$$0 < b < \\frac{1}{e^2}$$",
          "$$\\frac{1}{e} < b < 1$$",
          "$$\\frac{1}{e^2} < b < 1$$",
        ],
        answer: "①",
      },
      {
        question:
          "급수$$\\sum_{n=2}^{\\infty} \\frac{1}{n(\\ln n)^a}$$가 수렴하기 위한$$a$$의 범위는?",
        choices: ["$$a = 1$$", "$$a < 1$$", "$$a > 1$$", "$$a > 0$$"],
        answer: "③",
      },
      {
        question:
          "급수$$\\sum_{n=10}^{\\infty} \\frac{1}{n(\\ln n)(\\ln \\ln n)^p}$$가 수렴하기 위한$$p$$의 조건은?",
        choices: [
          "$$p \\leq 1$$",
          "$$-1 < p \\leq 1$$",
          "$$p > 1$$",
          "$$2 > p \\geq 1$$",
        ],
        answer: "①",
      },
      {
        question:
          "적분$$\\int_2^{\\infty} \\frac{1}{x^a (\\ln x)^b} \\, dx$$에 대하여 옳은 것은?",
        choices: [
          "$$a = 1, b = 0$$일 때, 수렴한다.",
          "$$a = 2, b = -1$$일 때, 발산한다.",
          "$$a = \\frac{3}{2}, b = -\\frac{1}{2}$$일 때, 수렴한다.",
          "$$a = 1, b = 1$$일 때, 수렴한다.",
        ],
        answer: "③",
      },
    ],
    133: [
      {
        question: "다음 중 수렴하는 급수는?",
        choices: [
          "$$\\sum_{k=1}^{\\infty} \\frac{2^k}{5^k}$$",
          "$$\\sum_{k=1}^{\\infty} \\left(3 - \\frac{1}{2k} \\right)^k$$",
          "$$\\sum_{k=1}^{\\infty} \\frac{1}{k \\log k}$$",
          "$$\\sum_{k=1}^{\\infty} \\frac{(k!)^2}{(2k)!}$$",
        ],
        answer: "④",
      },
      {
        question: "다음 무한급수 중 발산하는 것은?",
        choices: [
          "$$\\sum_{n=1}^{\\infty} (-1)^n \\frac{\\ln n}{n}$$",
          "$$\\sum_{n=1}^{\\infty} (-1)^n \\sin\\left(\\frac{2}{n^2 + 4n} \\right)$$",
          "$$\\sum_{n=1}^{\\infty} (-1)^n \\frac{n^n}{n!}$$",
          "$$\\sum_{n=1}^{\\infty} (-1)^n \\frac{e^n}{1 + e^{2n}}$$",
        ],
        answer: "③",
      },
      {
        question:
          "$$\\sum_{n=1}^{\\infty} a_n = 7$$이고,$$b_n = \\frac{1}{3} a_n$$일 때,$$S_n = b_1 + b_2 + \\cdots + b_n$$이면 다음 중 옳은 것은?",
        choices: [
          "$$\\lim_{n \\to \\infty} b_n = \\frac{7}{3}, \\quad \\lim_{n \\to \\infty} S_n = 0$$",
          "$$\\lim_{n \\to \\infty} b_n = 0, \\quad \\lim_{n \\to \\infty} S_n = 0$$",
          "$$\\lim_{n \\to \\infty} b_n = 0, \\quad \\lim_{n \\to \\infty} S_n = \\frac{7}{3}$$",
          "$$\\lim_{n \\to \\infty} b_n = \\frac{7}{3}, \\quad \\lim_{n \\to \\infty} S_n = \\frac{7}{3}$$",
        ],
        answer: "③",
      },
    ],
    134: [
      {
        question:
          "$$\\sum_{n=1}^{\\infty} \\frac{(x - 3)^n}{n2^n}$$를 수렴하게 하는 정수값$$x$$의 개수는?",
        choices: [
          "$$\\text{1개}$$",
          "$$\\text{2개}$$",
          "$$\\text{3개}$$",
          "$$\\text{4개}$$",
          "$$\\text{5개}$$",
        ],
        answer: "④",
      },
      {
        question:
          "멱급수$$\\sum_{n=0}^{\\infty} \\frac{n}{3^n} x^n$$의 수렴반경은?",
        choices: ["$$0$$", "$$\\frac{1}{3}$$", "$$1$$", "$$3$$", "$$\\infty$$"],
        answer: "④",
      },
      {
        question:
          "급수$$\\sum_{n=1}^{\\infty} \\frac{n^n}{n!} x^n$$의 수렴반경을 구하면?",
        choices: ["$$\\frac{1}{e}$$", "$$1$$", "$$e$$", "$$\\infty$$"],
        answer: "①",
      },
      {
        question:
          "$$\\sum_{n=1}^{\\infty} \\frac{(-1)^n n}{2^n}$$에 대한 수렴성에 대한 설명 중 옳은 것은?",
        choices: [
          "절대수렴",
          "조건부 수렴",
          "무한대로 발산",
          "진동",
          "답 없음",
        ],
        answer: "①",
      },
    ],
    135: [
      {
        question:
          "주어진 급수$$\\sum_{n=1}^{\\infty} a_n$$이 수렴한다. 다음에서 항상 수렴하는 것은?",
        choices: [
          "$$\\sum_{n=1}^{\\infty} (-1)^n a_n$$",
          "$$\\sum_{n=1}^{\\infty} (-1)^n \\frac{a_n}{2}$$",
          "$$\\sum_{n=1}^{\\infty} 100 a_n$$",
          "$$\\sum_{n=1}^{\\infty} a_n^2$$",
        ],
        answer: "③",
      },
      {
        question:
          "$$(a_n)$$이 수열일 때,$$\\sum_{n=1}^{\\infty} |a_n|$$이 수렴할 필요충분조건으로서 올바른 것은?",
        choices: [
          "$$\\lim_{n \\to \\infty} \\left| \\frac{a_{n+1}}{a_n} \\right| = \\rho < 1$$",
          "$$\\lim_{n \\to \\infty} \\sqrt[n]{|a_n|} = r < 1$$",
          "모든$$n$$에 대하여 $$\\sum_{k=1}^{n} |a_k| \\leq M$$인 양수$$M$$이 존재한다.",
          "$$|a_1| > |a_2| > \\cdots$$이고,$$\\lim_{n \\to \\infty} |a_n| = 0$$",
        ],
        answer: "③",
      },
      {
        question: "무한급수에 대하여 옳지 않은 것은?",
        choices: [
          "$$\\sum_{n=1}^{\\infty} a_n$$이 수렴하면$$\\lim_{n \\to \\infty} a_n = 0$$이다.",
          "$$\\lim_{n \\to \\infty} |a_n|^{\\frac{1}{n}} = \\frac{1}{2}$$이면$$\\sum_{n=1}^{\\infty} a_n$$은 수렴한다.",
          "$$\\sum_{n=1}^{\\infty} |a_n|$$이 수렴하면$$\\sum_{n=1}^{\\infty} a_n$$도 수렴한다.",
          "$$\\sum_{n=1}^{\\infty} a_n$$이 수렴하면$$\\sum_{n=1}^{\\infty} a_n^2$$도 수렴한다.",
        ],
        answer: "④",
      },
    ],
    136: [
      {
        question:
          "급수$$\\sum_{n=1}^{\\infty} |a_n| \\text{과} \\sum_{n=1}^{\\infty} b_n$$이 모두 수렴할 때, 다음 중 옳은 것을 모두 고른 것은?",
        example: [
          "가. $$\\sum_{n=1}^{\\infty} (a_n + b_n)$$ 나. $$\\sum_{n=1}^{\\infty} a_n^2$$ 다. $$\\sum_{n=1}^{\\infty} \\sin(|a_n|)$$ 라. $$\\sum_{n=1}^{\\infty} |a_n|b_n$$",
        ],
        choices: ["나, 다", "가, 나, 다", "가, 나, 라", "가, 나, 다, 라"],
        answer: "④",
      },
      {
        question:
          "급수$$\\sum_{n=0}^{\\infty} |a_n|$$이 수렴할 때, 다음 보기의 급수 가운데 항상 수렴하는 급수를 모두 고른 것은?",
        example:
          "ㄱ.$$\\sum_{n=0}^{\\infty} (-1)^n a_n$$ ㄴ.$$\\sum_{n=0}^{\\infty} a_n$$ ㄷ.$$\\sum_{n=0}^{\\infty} \\sin(a_n)$$",
        choices: ["ㄱ, ㄴ", "ㄱ, ㄷ", "ㄴ, ㄷ", "ㄱ, ㄴ, ㄷ"],
        answer: "④",
      },
      {
        question:
          "다음 급수$$\\sum_{n=1}^{\\infty} (-1)^{n+1} \\frac{1}{n}$$에 대한 설명으로 옳지 않은 것은?",
        choices: [
          "수렴한다.",
          "조건부 수렴한다.",
          "근사값이$$\\frac{5}{6}$$이면 최대오차의 절대값은$$\\frac{1}{4}$$이다.",
          "근사값이$$\\frac{7}{12}$$이면 최대오차의 절대값은$$0.2$$이상이다.",
        ],
        answer: "④",
      },
    ],
    137: [
      {
        question:
          "무한 급수$$\\sum_{n=1}^{\\infty} (-3)^n c_n$$가 수렴한다고 할 때, 다음 중 항상 성립하는 것은?",
        choices: [
          "$$\\sum_{n=1}^{\\infty} (-2)^n c_n$$은 발산한다.",
          "$$\\sum_{n=1}^{\\infty} (-1)^n c_n$$은 수렴하지만 절대 수렴하는 것은 아니다.",
          "$$\\sum_{n=1}^{\\infty} (-2)^n c_n$$은 수렴한다.",
          "$$\\sum_{n=1}^{\\infty} 4^n c_n$$은 발산한다.",
          "$$\\sum_{n=1}^{\\infty} 3^n c_n$$은 수렴한다.",
        ],
        answer: "③",
      },
      {
        question: "다음 (가)~(라) 명제 중 항상 참인 것은 몇 개인가?",
        example:
          "(가)$$\\lim_{n \\to \\infty} a_n = 0$$이면 급수$$\\sum a_n$$는 수렴한다.<br>(나)급수$$\\sum a_n$$이 발산하면 급수$$\\sum |a_n|$$도 발산한다.<br>(다)급수$$\\sum c_n 6^n$$이 수렴하면 급수$$\\sum c_n (-2)^n$$도 수렴한다.<br>(라)$$\\sum_{n=0}^{\\infty} \\frac{(-1)^n}{n!} = \\frac{1}{e}$$",
        choices: ["1개", "2개", "3개", "4개", "없다"],
        answer: "③",
      },
      {
        question:
          "멱급수$$\\sum_{n=0}^{\\infty} a_n (x - 2)^n$$이$$x = 5$$에서 수렴하고$$x = -2$$에서 발산한다. 다음 중 항상 참인 것을 모두 고르시오.",
        example:
          "(가)$$\\sum_{n=0}^{\\infty} (-3)^n a_n$$은 발산한다.<br>(나)$$\\sum_{n=0}^{\\infty} a_n$$은 수렴한다.<br>(다)$$\\sum_{n=0}^{\\infty} 5^n a_n$$은 발산한다.",
        choices: ["가, 나", "나, 다", "가, 다", "가, 나, 다", "없다"],
        answer: "②",
      },
    ],
    138: [
      {
        question: "다음 급수 중 수렴하는 것을 모두 고르면?",
        example:
          "$$\\begin{aligned}\n&\\text{(ㄱ)}\\ \\sum_{n=1}^{\\infty} \\frac{n!}{e^{n^2}} \\\\\n&\\text{(ㄴ)}\\ \\sum_{n=1}^{\\infty} \\left( \\frac{n}{n+1} \\right)^n \\\\\n&\\text{(ㄷ)}\\ \\sum_{n=1}^{\\infty} \\frac{2^n n^3}{n!}\n\\end{aligned}$$",
        choices: [
          "$$\\text{(ㄱ), (ㄴ)}$$",
          "$$\\text{(ㄱ), (ㄷ)}$$",
          "$$\\text{(ㄴ), (ㄷ)}$$",
          "$$\\text{(ㄱ), (ㄴ), (ㄷ)}$$",
        ],
        answer: "②",
      },
      {
        question:
          "급수$$\\sum_{n=1}^{\\infty} \\frac{(-1)^n}{n^p}$$가 수렴하는$$p$$의 범위를 구하면?",
        choices: [
          "$$0 < p \\leq 1$$",
          "$$0 \\leq p \\leq 1$$",
          "$$p \\geq 0$$",
          "$$p > 0$$",
          "$$p > 1$$",
        ],
        answer: "④",
      },
      {
        question:
          "멱급수$$\\sum_{n=0}^{\\infty} \\frac{(-2)^n x^{2n+1}}{\\sqrt{n^2 + n + 1}}$$의 수렴반경은?",
        choices: [
          "$$\\frac{1}{2}$$",
          "$$\\frac{1}{\\sqrt{2}}$$",
          "$$\\frac{1}{4}$$",
          "$$2$$",
        ],
        answer: "②",
      },
    ],
    139: [
      {
        question:
          "다음 중 무한급수$$\\sum_{n=1}^{\\infty} \\frac{(-1)^{nq}}{n^p (\\ln(n+2019))^{q/2}}$$가 발산하는 경우는?",
        choices: [
          "$$p = 3,\\ q = 1$$",
          "$$p = 2,\\ q = 2019$$",
          "$$p = 1,\\ q = 1$$",
          "$$p = 1,\\ q = 2$$",
          "$$p = 1,\\ q = 4$$",
        ],
        answer: "④",
      },
      {
        question:
          "멱급수$$\\sum_{n=0}^{\\infty} \\frac{n(2x + 4)^n}{6^{n + 1}}$$의 수렴구간은?",
        choices: [
          "$$(-5, 1)$$",
          "$$[-5, 1]$$",
          "$$\\{-2\\}$$",
          "$$(-8, 4)$$",
          "$$[-8, 4]$$",
        ],
        answer: "①",
      },
      {
        question: "다음 중 수렴하는 급수의 개수는?",
        example: [
          "$$\\text{ㄱ.}\\quad \\sum_{n=1}^{\\infty} \\frac{\\ln n}{n}$$",
          "$$\\text{ㄴ.}\\quad \\sum_{n=1}^{\\infty} \\frac{4n^2 + 10^5n}{\\sqrt{2+10n^5}}$$",
          "$$\\text{ㄷ.}\\quad \\sum_{n=3}^{\\infty} \\frac{(-1)^n}{10^n n}$$",
          "$$\\text{ㄹ.}\\quad \\sum_{n=0}^{\\infty} \\frac{\\sin((n+0.5)\\pi)}{2+\\sqrt[3]{2n}}$$",
          "$$\\text{ㅁ.}\\quad \\sum_{n=0}^{\\infty} \\frac{n^{1000} 1000^n}{n!}$$",
        ],
        choices: ["$$1$$", "$$2$$", "$$3$$", "$$4$$", "$$5$$"],
        answer: "③",
      },
    ],
    140: [
      {
        question:
          "다음 <보기>의 급수 중에서 수렴하는 것만을 있는 대로 고른 것은?",
        example:
          "$$\\text{ㄱ. } \\sum_{n=1}^{\\infty} \\frac{n!}{2^n} \\quad \\text{ㄴ. } \\sum_{n=1}^{\\infty} \\frac{1}{n+1} \\, \\cos\\left( \\frac{\\pi}{n} \\right) \\quad \\text{ㄷ. } \\sum_{n=2}^{\\infty} \\frac{\\ln n}{(n+1)(n+2)}$$",
        choices: ["ㄱ", "ㄴ", "ㄷ", "ㄴ, ㄷ", "ㄱ, ㄴ, ㄷ"],
        answer: "③",
      },
      {
        question: "다음 급수 중 수렴하는 것을 모두 고르시오.",
        example:
          "$$\\text{(가)}\\ \\sum_{n=1}^{\\infty} n e^{-n} \\quad \\text{(나)}\\ \\sum_{n=1}^{\\infty} \\left( 2 - \\frac{1}{n} \\right)^n \\quad \\text{(다)}\\ \\sum_{n=1}^{\\infty} \\frac{2}{\\left( 1 + \\frac{1}{n} \\right)^{n^2}} \\quad \\text{(라)}\\ \\sum_{n=2}^{\\infty} \\frac{(-1)^{n+1} n^2}{n^3 + 2}$$",
        choices: [
          "(가), (나)",
          "(나), (다)",
          "(가), (나), (다)",
          "(가), (다), (라)",
          "(나), (다), (라)",
        ],
        answer: "④",
      },
      {
        question:
          "멱급수$$\\sum_{n=1}^{\\infty} \\frac{(x - 5)^n}{n2^n}$$이 절대수렴하는$$x$$의 범위가$$a < x < b$$일 때,$$a + b$$의 값을 구하시오.",
        choices: ["$$8$$", "$$9$$", "$$10$$", "$$11$$", "$$12$$"],
        answer: "③",
      },
    ],
    141: [
      {
        question:
          "고정된 양의 실수$$y$$에 대해 급수$$\\sum_{n=0}^{\\infty} a_n y^n$$이 수렴할 때, 다음 중 옳지 않은 것은?",
        choices: [
          "$$\\lim_{n \\to \\infty} a_n y^n = 0$$이다.",
          "$$\\sum_{n=0}^{\\infty} a_n (-y)^n$$은 수렴한다.",
          "$$-y < x < y$$일 때$$\\sum_{n=0}^{\\infty} a_n x^n$$은 수렴한다.",
          "$$-y < x < y$$일 때$$\\sum_{n=1}^{\\infty} n a_n x^n$$은 수렴한다.",
        ],
        answer: "②",
      },
      {
        question:
          "무한급수$$\\sum_{n=1}^{\\infty} a_n$$의 수렴·발산에 대한 다음 설명 중 옳은 것은?",
        choices: [
          "모든$$n$$에 대해$$a_n \\leq b_n$$이고$$\\sum_{n=1}^{\\infty} b_n$$이 수렴하면$$\\sum_{n=1}^{\\infty} a_n$$은 수렴한다.",
          "모든$$n$$에 대해$$b_n \\leq a_n$$이고$$\\sum_{n=1}^{\\infty} b_n$$이 수렴하면$$\\sum_{n=1}^{\\infty} a_n$$은 수렴한다.",
          "모든$$n$$에 대해$$b_n \\leq a_n$$이고$$\\sum_{n=1}^{\\infty} b_n$$이 수렴하면$$\\sum_{n=1}^{\\infty} a_n$$은 발산한다.",
          "모든$$n$$에 대해$$|b_n| \\leq a_n$$이고$$\\sum_{n=1}^{\\infty} b_n$$이 수렴하면$$\\sum_{n=1}^{\\infty} a_n$$은 수렴한다.",
          "모든$$n$$에 대해$$|b_n| \\leq a_n$$이고$$\\sum_{n=1}^{\\infty} b_n$$이 발산하면$$\\sum_{n=1}^{\\infty} a_n$$은 발산한다.",
        ],
        answer: "⑤",
      },
    ],
    142: [
      {
        question:
          "멱급수$$f(x) = \\sum_{n=1}^{\\infty} \\frac{n!}{1 \\times 3 \\times 5 \\times \\cdots \\times (2n + 1)} x^n$$의 수렴반경은?",
        choices: ["$$0$$", "$$\\frac{1}{2}$$", "$$1$$", "$$2$$", "$$\\infty$$"],
        answer: "④",
      },
      {
        question: "다음 <보기> 중 수렴하는 급수의 개수는?",
        example: [
          "$$\\text{ㄱ.}\\sum_{n=1}^{\\infty} (-1)^{n+1} \\frac{7n+1}{n\\sqrt{n}}$$",
          "$$\\text{ㄴ.}\\sum_{n=1}^{\\infty} \\frac{\\ln n}{n\\sqrt{n}}$$",
          "$$\\text{ㄷ.}\\sum_{n=2}^{\\infty} \\frac{3}{n\\sqrt{2\\ln n + 3}}$$",
          "$$\\text{ㄹ.}\\sum_{n=1}^{\\infty} \\arcsin \\left( \\frac{1}{n\\sqrt{n}} \\right)$$",
        ],
        choices: [
          "$$\\text{1개}$$",
          "$$\\text{2개}$$",
          "$$\\text{3개}$$",
          "$$\\text{4개}$$",
        ],
        answer: "③",
      },
      {
        question:
          "멱급수$$\\sum_{n=0}^{\\infty} \\frac{(n!)^3}{(3n)!} (x - 30)^n$$의 수렴반경이$$r$$이고 수렴구간은$$(a, b)$$일 때,$$r + a + b$$의 값을 구하시오.",
        choices: ["$$27$$", "$$30$$", "$$84$$", "$$87$$", "$$90$$"],
        answer: "④",
      },
      {
        question:
          "멱급수$$\\sum_{n=1}^{\\infty} \\frac{(2x - 1)^n}{4^n \\ln(n + 1)}$$의 수렴반지름은?",
        choices: ["$$\\frac{1}{4}$$", "$$\\frac{1}{2}$$", "$$2$$", "$$4$$"],
        answer: "③",
      },
    ],
    143: [
      {
        question:
          "멱급수$$\\sum_{n=2}^{\\infty} \\frac{(x - 1)^n}{n2^n \\ln n}$$의 수렴구간에 속하는 모든 정수$$x$$의 합은?",
        choices: ["$$2$$", "$$3$$", "$$4$$", "$$5$$"],
        answer: "①",
      },
      {
        question:
          "멱급수$$\\sum_{n=1}^{\\infty} a_n x^n$$은$$x = -2$$일 때 수렴하고$$x = 3$$일 때 발산한다. 다음 보기의 급수 중 수렴하는 급수의 개수는?",
        example:
          "$$\\begin{aligned}\n&\\text{ㄱ. } \\sum_{n=1}^{\\infty} a_n \\\\\n&\\text{ㄴ. } \\sum_{n=1}^{\\infty} |a_n| \\\\\n&\\text{ㄷ. } \\sum_{n=1}^{\\infty} (-4)^n a_n \\\\\n&\\text{ㄹ. } \\sum_{n=1}^{\\infty} n a_n\n\\end{aligned}$$",
        choices: ["$$1$$", "$$2$$", "$$3$$", "$$4$$"],
        answer: "③",
      },
      {
        question:
          "멱급수$$\\sum_{n=0}^{\\infty} \\frac{(3 - 2x)^{2n}}{\\sqrt{2n + 1}}$$의 수렴구간은?",
        choices: [
          "$$(1, 2)$$",
          "$$[1, 2)$$",
          "$$(1, 2]$$",
          "$$[1, 2]$$",
          "$$(-\\infty, \\infty)$$",
        ],
        answer: "①",
      },
      {
        question:
          "멱급수$$\\sum_{n=0}^{\\infty} \\frac{(-1)^n}{n+1} (x-3)^n$$ 의 수렴구간은?",
        choices: [
          "$$(1, 5)$$",
          "$$[1, 5)$$",
          "$$(2, 4)$$",
          "$$(2, 4]$$",
          "$$[2, 4)$$",
        ],
        answer: "②",
      },
    ],
    144: [
      {
        question:
          "모든 항이 양수인 수열$$\\{na_n\\}$$이$$2$$로 수렴하는 증가수열일 때, 다음 급수 중 반드시 수렴하는 것을 모두 고르면?",
        example:
          "$$\\text{(a) } \\sum_{n=1}^{\\infty} a_n \\quad \\text{(b) } \\sum_{n=1}^{\\infty} a_n^2 \\quad \\text{(c) } \\sum_{n=1}^{\\infty} \\left( \\frac{1}{2} \\right)^{a_n}$$",
        choices: [
          "$$(a)$$",
          "$$(b)$$",
          "$$(c)$$",
          "$$(b), (c)$$",
          "$$(a), (b), (c)$$",
        ],
        answer: "③",
      },
      {
        question: "다음 수열 중에서 수렴하는 것을 모두 고르면?",
        example:
          "$$\\text{(a) } \\left\\langle \\frac{n^3}{3^n} \\right\\rangle \\quad \\text{(b) } \\left\\langle \\left( 3^n + 4^n \\right)^{1/n} \\right\\rangle \\quad \\text{(c) } \\left\\langle \\frac{1}{n} \\sin \\left( \\frac{1}{n^2} \\right) \\right\\rangle \\quad \\text{(d) } \\left\\langle \\frac{(-1)^n n^2}{n^2 + 1} \\right\\rangle$$",
        choices: [
          "$$(a)$$",
          "$$(a), (b)$$",
          "$$(a), (b), (c)$$",
          "$$(a), (b), (c), (d)$$",
          "$$(b), (d)$$",
        ],
        answer: "②",
      },
      {
        question: "다음 중 수렴하는 급수는?",
        choices: [
          "$$\\sum_{n=1}^{\\infty} \\left( \\frac{1}{n} + \\frac{1}{n + 1} \\right)$$",
          "$$\\sum_{n=1}^{\\infty} \\left( \\frac{1}{n} - \\frac{1}{n + 1} \\right)$$",
          "$$\\sum_{n=1}^{\\infty} \\left( \\frac{1}{n^2} + \\frac{1}{n + 1} \\right)$$",
          "$$\\sum_{n=1}^{\\infty} \\left( \\frac{1}{n^2} - \\frac{1}{n + 1} \\right)$$",
        ],
        answer: "④",
      },
    ],
    145: [
      {
        question: "다음 급수들 중 발산하는 것은?",
        choices: [
          "$$\\sum_{n=1}^{\\infty} \\left(1 + \\frac{1}{n}\\right)^2 e^{-n}$$",
          "$$\\sum_{n=1}^{\\infty} \\frac{\\sqrt{n + 2}}{2n^2 + n + 1}$$",
          "$$\\sum_{n=1}^{\\infty} \\frac{10^n}{n!}$$",
          "$$\\sum_{n=1}^{\\infty} \\left( \\frac{2n + 5}{3n + 1} \\right)^n$$",
          "$$\\sum_{n=1}^{\\infty} \\tan\\left( \\frac{1}{n} \\right)$$",
        ],
        answer: "⑤",
      },
      {
        question: "다음 급수들 중 조건부 수렴하는 것은?",
        choices: [
          "$$\\sum_{n=1}^{\\infty} (-1)^n \\left( \\frac{2}{3} \\right)^n$$",
          "$$\\sum_{n=1}^{\\infty} \\frac{(-1)^n e^\\frac{1}{n}}{n^3}$$",
          "$$\\sum_{n=1}^{\\infty} (-1)^n \\frac{2^n}{n^2}$$",
          "$$\\sum_{n=1}^{\\infty} \\frac{(-1)^n \\tan^{-1} n}{n^2}$$",
          "$$\\sum_{n=1}^{\\infty} \\frac{(-1)^n}{\\ln(n + 1)}$$",
        ],
        answer: "⑤",
      },
      {
        question: "다음 중 수렴반경이 제일 큰 멱급수는?",
        choices: [
          "$$\\sum_{n=0}^{\\infty} 2^n x^n$$",
          "$$\\sum_{n=0}^{\\infty} n! x^n$$",
          "$$\\sum_{n=1}^{\\infty} \\left(1 + \\frac{1}{n} \\right)^n x^n$$",
          "$$\\sum_{n=1}^{\\infty} \\left(1 + \\frac{1}{n} \\right)^{n^2} x^n$$",
        ],
        answer: "③",
      },
      {
        question:
          "멱급수$$\\sum_{n=1}^{\\infty} (-1)^n \\frac{2^n n!}{n^n} x^n$$의 수렴반경은?",
        choices: [
          "$$1$$",
          "$$\\frac{1}{e}$$",
          "$$e$$",
          "$$\\frac{2}{e}$$",
          "$$\\frac{e}{2}$$",
        ],
        answer: "⑤",
      },
    ],
    146: [
      {
        question: "다음 급수들 중 수렴하는 것을 모두 고르시오.",
        example:
          "$$\\begin{aligned}\n&\\text{a. } \\sum_{n=3}^{\\infty} \\frac{\\tan\\left( \\frac{1}{n} \\right)}{\\ln n} \\\\\n&\\text{b. } \\sum_{n=1}^{\\infty} \\frac{2n + (-1)^n}{n^3} \\\\\n&\\text{c. } \\sum_{n=1}^{\\infty} \\frac{2^n n!}{n^n} \\\\\n&\\text{d. } \\sum_{n=2}^{\\infty} \\left(1 - \\frac{1}{n} \\right)^{n^2}\n\\end{aligned}$$",
        choices: ["b, d", "a, b, c", "b, c, d", "a, b, d", "a, b, c, d"],
        answer: "③",
      },
      {
        question: "〈보기〉에서 수렴하는 급수만을 있는 대로 고른 것은?",
        example:
          "$$\\begin{aligned}\n&\\text{ㄱ. } \\sum_{n=2}^{\\infty} \\frac{1}{n (\\ln n)^2} \\\\\n&\\text{ㄴ. } \\sum_{n=1}^{\\infty} \\frac{1}{1 + (\\ln n)^2} \\\\\n&\\text{ㄷ. } \\sum_{n=1}^{\\infty} \\frac{1}{\\ln(n+1)} \\sin \\frac{1}{n^2} \n\\end{aligned}$$",
        choices: ["ㄱ", "ㄴ", "ㄱ, ㄷ", "ㄴ, ㄷ", "ㄱ, ㄴ, ㄷ"],
        answer: "③",
      },
      {
        question: "다음 급수들 중 발산하는 것은 모두 몇 개인가?",
        example:
          "$$\\begin{aligned}\n&\\text{a. } \\sum_{n=2}^{\\infty} \\frac{1}{n \\ln n} \\\\\n&\\text{b. } \\sum_{n=1}^{\\infty} \\frac{n!}{3^{n-1}} \\\\\n&\\text{c. } \\sum_{n=0}^{\\infty} \\frac{x}{1 + x^n} \\quad (0 < x < 1) \\\\\n&\\text{d. } \\sum_{n=2}^{\\infty} \\frac{(-1)^n}{\\ln n}\n\\end{aligned}$$",
        choices: ["0개", "1개", "2개", "3개", "4개"],
        answer: "④",
      },
    ],
    147: [
      {
        question:
          "멱급수(거듭제급급수)$$\\sum_{n=1}^{\\infty} \\frac{(-1)^n}{n 2^n} (x - 3)^n$$의 수렴구간은?",
        choices: [
          "$$-5 \\leq x \\leq -1$$",
          "$$-1 < x \\leq -1$$",
          "$$-1 \\leq x < -1$$",
          "$$1 < x \\leq 5$$",
          "$$1 \\leq x < 5$$",
        ],
        answer: "④",
      },
      {
        question:
          "멱급수$$\\sum_{n=2020}^{\\infty} \\frac{(x - 4)^{2021n}}{n + 3}$$의 수렴구간은?",
        choices: [
          "$$[3, 5)$$",
          "$$[3, 5]$$",
          "$$(2, 6]$$",
          "$$[2, 6)$$",
          "$$(-\\infty, \\infty)$$",
        ],
        answer: "①",
      },
      {
        question:
          "멱급수$$x - \\frac{x^2}{2} + \\frac{x^3}{3} - \\cdots + (-1)^{n-1} \\frac{x^n}{n} + \\cdots$$의 수렴구간은?",
        choices: [
          "$$0 \\leq x < 1$$",
          "$$-1 < x \\leq 1$$",
          "$$-1 \\leq x \\leq 1$$",
          "$$-1 < x < 1$$",
          "$$-1 < x \\leq 0$$",
        ],
        answer: "②",
      },
    ],
    148: [
      {
        question:
          "멱급수$$\\sum_{n=1}^{\\infty} \\frac{(x + 1)^n \\ln n}{n 3^n}$$이 수렴하게 되는 모든 정수$$x$$의 개수는?",
        choices: ["$$4$$개", "$$5$$개", "$$6$$개", "$$7$$개"],
        answer: "③",
      },
      {
        question:
          "멱급수(거듭제급급수)$$\\sum_{n=1}^{\\infty} \\frac{\\ln n}{n^2} x^n$$의 수렴반지름(radius of convergence)의 값은?",
        choices: [
          "$$\\frac{1}{e}$$",
          "$$\\frac{1}{2}$$",
          "$$\\frac{1}{\\sqrt{e}}$$",
          "$$\\frac{\\sqrt{2}}{2}$$",
          "$$1$$",
        ],
        answer: "⑤",
      },
      {
        question:
          "거듭제급급수$$\\sum_{n=1}^{\\infty} \\left( \\frac{n}{n+1} \\right)^{n^2} x^n$$의 수렴반지름을 구하시오.",
        choices: ["$$0$$", "$$1$$", "$$e$$", "$$\\infty$$"],
        answer: "③",
      },
      {
        question:
          "멱급수$$\\sum_{n=1}^{\\infty} \\frac{\\cos n\\pi}{\\sqrt{n}} \\cdot \\frac{(4x - 3)^n}{3^n}$$의 수렴구간은?",
        choices: [
          "$$\\left(0, \\frac{3}{2}\\right)$$",
          "$$\\left[0, \\frac{3}{2}\\right)$$",
          "$$\\left(0, \\frac{3}{2}\\right]$$",
          "$$\\left[0, \\frac{3}{2}\\right]$$",
        ],
        answer: "③",
      },
    ],
    149: [
      {
        question:
          "멱급수$$\\sum_{n=1}^{\\infty} \\frac{(-1)^n}{n^2} \\cdot \\frac{(2x - 1)^n}{5^n}$$이 수렴하는 모든 정수$$x$$의 개수는?",
        choices: ["$$3$$", "$$4$$", "$$5$$", "$$6$$"],
        answer: "④",
      },
      {
        question: "다음 급수 중 수렴하는 것을 모두 고르면?",
        example:
          "$$\\begin{aligned}&\\text{(a) } \\sum_{n=1}^{\\infty} \\frac{\\ln n}{n} \\\\&\\text{(b) } \\sum_{n=1}^{\\infty} \\frac{1}{n} \\sin\\left( \\frac{1}{n} \\right) \\\\&\\text{(c) } \\sum_{n=1}^{\\infty} \\frac{1}{n} \\sin\\left( \\arctan\\left( \\frac{1}{n} \\right) \\right)\\end{aligned}$$",
        choices: [
          "$$(a)$$",
          "$$(b)$$",
          "$$(a), (b)$$",
          "$$(a), (c)$$",
          "$$(b), (c)$$",
        ],
        answer: "⑤",
      },
      {
        question:
          "급수$$\\sum_{n=1}^{\\infty} (-1)^n n x^n$$,$$\\sum_{n=1}^{\\infty} \\frac{(-1)^n x^n}{\\sqrt[3]{n}}$$,$$\\sum_{n=0}^{\\infty} \\frac{n(x + 2)^n}{5^{n + 1}}$$,$$\\sum_{n=1}^{\\infty} \\frac{n! x^n}{1 \\cdot 3 \\cdot 5 \\cdots (2n - 1)}$$의 수렴 반지름을 각각$$\\alpha, \\beta, \\gamma, \\delta$$라 할 때,$$\\alpha + \\beta + \\gamma + \\delta$$의 값은?",
        choices: ["$$6$$", "$$7$$", "$$8$$", "$$9$$", "$$10$$"],
        answer: "④",
      },
      {
        question: "모든 실수에 대해 수렴하는 멱급수는?",
        choices: [
          "$$\\sum_{n=1}^{\\infty} \\frac{(x - 3)^n}{n}$$",
          "$$\\sum_{n=0}^{\\infty} \\frac{(-1)^n x^{2n}}{2^n (n!)^2}$$",
          "$$\\sum_{n=0}^{\\infty} x^n$$",
          "$$\\sum_{n=0}^{\\infty} (-1)^{n} \\frac{x^{2n + 1}}{2n + 1}$$",
          "$$\\sum_{n=1}^{\\infty} (-1)^{n - 1} \\frac{x^n}{n}$$",
        ],
        answer: "②",
      },
    ],
    150: [
      {
        question:
          "멱급수$$\\sum_{n=1}^{\\infty} \\frac{(-1)^n}{3^n \\sqrt{3n - 1}} (x - 2)^n$$의 수렴구간은?",
        choices: [
          "$$(-1, 5)$$",
          "$$(-1, 5]$$",
          "$$(-\\infty, \\infty)$$",
          "$$\\left(\\frac{5}{3}, \\frac{7}{3}\\right)$$",
          "$$\\left(\\frac{5}{3}, \\frac{7}{3}\\right]$$",
        ],
        answer: "②",
      },
      {
        question:
          "다음 〈보기〉의 급수 중에서 수렴하는 것만을 있는 대로 고른 것은?",
        example:
          "$$\\begin{aligned}\n&\\text{ㄱ. } \\sum_{n=2}^{\\infty} \\left( \\frac{n}{n - 1} \\right)^{n^2} \\\\\n&\\text{ㄴ. } \\sum_{n=1}^{\\infty} \\frac{1}{n} \\sin \\frac{1}{\\sqrt{n}} \\\\\n&\\text{ㄷ. } \\sum_{n=1}^{\\infty} (-1)^n \\frac{\\ln n}{n}\n\\end{aligned}$$",
        choices: ["ㄱ", "ㄷ", "ㄱ, ㄷ", "ㄴ, ㄷ", "ㄱ, ㄴ, ㄷ"],
        answer: "④",
      },
      {
        question: "다음 중 발산하는 급수를 모두 고른 것은?",
        example:
          "$$\\begin{aligned}\n&\\text{(가) } \\sum_{n=1}^{\\infty} \\frac{4}{\\pi^n} \\\\\n&\\text{(나) } \\sum_{n=1}^{\\infty} \\frac{2}{4+e^{-n}} \\\\\n&\\text{(다) } \\sum_{n=1}^{\\infty} \\frac{1 + \\cos \\frac{n\\pi}{2}}{e^n} \\\\\n&\\text{(라) } \\sum_{n=1}^{\\infty} \\frac{e^n}{n^2}\n\\end{aligned}$$",
        choices: ["가, 나", "나, 라", "다, 라", "라"],
        answer: "②",
      },
    ],
    151: [
      {
        question:
          "멱급수(거듭제급급수)$$\\sum_{n=0}^{\\infty} \\frac{(-4)^n x^n}{\\sqrt{n + 1}}$$의 수렴반지름은?",
        choices: [
          "$$1$$",
          "$$\\frac{1}{2}$$",
          "$$\\frac{1}{3}$$",
          "$$\\frac{1}{4}$$",
          "$$\\frac{1}{5}$$",
        ],
        answer: "④",
      },
      {
        question:
          "거듭제급급수$$\\sum_{n=1}^{\\infty} \\frac{n!}{2^n n^n} x^n$$의 수렴반지름을 구하시오.",
        choices: ["$$2$$", "$$\\frac{1}{2e}$$", "$$2e$$", "$$\\infty$$"],
        answer: "③",
      },
      {
        question:
          "$$c > 0$$일 때, 멱급수$$1 + \\sum_{n=1}^{\\infty} \\frac{(2)_n (-3)_n}{n! (c)_n} \\left( \\frac{x}{2} \\right)^{2n}$$의 수렴 반경을 구하면? (단, 임의의 실수$$a$$에 대하여$$(a)_n = a(a + 1)(a + 2) \\dots (a + n - 1)$$으로 정의한다.)",
        choices: ["$$2$$", "$$3c$$", "$$6c$$", "$$+\\infty$$"],
        answer: "④",
      },
    ],
    152: [
      {
        question:
          "급수$$\\sum_{n=1}^{\\infty} \\frac{(n + 1)^n}{p^n n!}$$이 수렴하는 자연수$$p$$의 최소값은?",
        choices: ["$$1$$", "$$2$$", "$$3$$", "$$4$$", "$$5$$"],
        answer: "③",
      },
      {
        question:
          "급수$$\\sum_{n=1}^{\\infty} \\frac{n^n \\cdot n!}{1 \\cdot 5 \\cdot 9 \\cdots (4n - 3)^2} x^{2n - 1}$$이 수렴하도록 하는 자연수$$x$$의 개수는?",
        choices: ["$$1$$", "$$2$$", "$$3$$", "$$4$$", "$$5$$"],
        answer: "②",
      },
      {
        question:
          "모든 항이 양수인 수열$$\\{n^2 a_n\\}$$이$$1$$로 수렴할 때,$$\\sum_{n=1}^{\\infty} (a_n)^p$$이 수렴하는 실수$$p$$만 있는 것은?",
        choices: [
          "$$-1$$",
          "$$-1, 1$$",
          "$$\\frac{1}{2}, 2$$",
          "$$1, 2$$",
          "$$\\frac{1}{2}, 1, 2$$",
        ],
        answer: "④",
      },
    ],
    153: [
      {
        question: "다음 중 옳은 것을 모두 고르면?",
        example:
          "$$\\begin{aligned}\n&\\text{ㄱ. } \\lim_{n \\to \\infty} a_n = 0 \\text{이면, 급수 } \\sum_{n=1}^{\\infty} a_n \\text{은 수렴한다.} \\\\\n&\\text{ㄴ. 두 급수 } \\sum_{n=1}^{\\infty} a_n \\text{과 } \\sum_{n=1}^{\\infty} b_n \\text{이 모두 발산하면, 급수 } \\sum_{n=1}^{\\infty}(a_n + b_n) \\text{도 발산한다.} \\\\\n&\\text{ㄷ. 두 급수 } \\sum_{n=1}^{\\infty} a_n^2 \\text{과 } \\sum_{n=1}^{\\infty} b_n^2 \\text{이 모두 수렴하면, 급수 } \\sum_{n=1}^{\\infty} a_n b_n \\text{도 수렴한다.} \\\\\n&\\text{ㄹ. 급수 } \\sum_{n=1}^{\\infty} \\frac{(-1)^{n+1}}{n} \\text{은 수렴한다.}\n\\end{aligned}$$",
        choices: ["ㄱ, ㄴ", "ㄱ, ㄷ", "ㄴ, ㄹ", "ㄷ, ㄹ"],
        answer: "④",
      },
      {
        question: "다음 중 옳은 것은 모두 몇 개인가?",
        example:
          "$$\\begin{aligned}\n&\\text{ⓐ } \\lim_{n \\to \\infty} a_n = 0 \\text{이면 급수 } \\sum_{n=1}^{\\infty} a_n \\text{은 수렴한다.} \\\\\n&\\text{ⓑ } \\sum_{n=100}^{\\infty} (a_n + b_n) = \\sum_{n=100}^{\\infty} a_n + \\sum_{n=100}^{\\infty} b_n \\\\\n&\\text{ⓒ 급수 } \\sum_{n=1}^{\\infty} n^{-p} \\text{는 } p \\ge 1 \\text{일 때 수렴하고, } 0 < p < 1 \\text{일 때 발산한다.} \\\\\n&\\text{ⓓ 임의의 자연수 } n \\text{에 대해 } a_n \\le b_n \\text{이다. 이때, } \\sum_{n=1}^{\\infty} a_n \\text{이 발산하면 } \\sum_{n=1}^{\\infty} b_n \\text{도 발산한다.} \\\\\n&\\text{ⓔ 절대 수렴하는 급수의 임의의 재배열 급수는 절대 수렴한다.}\n\\end{aligned}$$",
        choices: ["5개", "4개", "3개", "2개", "1개"],
        answer: "⑤",
      },
    ],
    154: [
      {
        question:
          "양항급수$$\\sum_{n=1}^{\\infty} a_n$$이 수렴할 때, 다음 중 옳은 것을 모두 고르면?",
        example:
          "$$\\begin{aligned}\n&\\text{가. } \\sum_{n=1}^{\\infty} a_n^2 \\text{은 수렴한다.} \\\\\n&\\text{나. } \\sum_{n=1}^{\\infty} (-1)^n a_n \\text{은 수렴한다.} \\\\\n&\\text{다. } \\sum_{n=1}^{\\infty} \\frac{\\sqrt{a_n}}{n} \\text{은 수렴한다.}\n\\end{aligned}$$",
        choices: ["가", "가, 나", "나, 다", "가, 나, 다"],
        answer: "④",
      },
      {
        question: "무한급수에 대한 <보기>의 내용 중 옳은 것은 모두 몇 개인가?",
        example:
          "$$\\begin{aligned}\n&\\text{가. } \\sum_{n=1}^{\\infty} \\frac{a_n}{n} \\text{이 수렴하면 } \\sum_{n=1}^{\\infty} (-1)^n \\frac{a_n}{n} \\text{은 수렴한다.} \\\\\n&\\text{나. } \\sum_{n=1}^{\\infty} (-1)^n \\frac{a_n}{n} \\text{이 수렴하면 } \\sum_{n=1}^{\\infty} \\frac{a_n}{n} \\text{은 수렴한다.} \\\\\n&\\text{다. } \\sum_{n=1}^{\\infty} \\frac{(-1)^n}{\\ln(\\ln(n+2018))} \\text{은 절대수렴한다. (absolutely convergent)} \\\\\n&\\text{라. } \\sum_{n=1}^{\\infty} (-1)^n \\sin^3\\left(\\frac{1}{\\sqrt{n}}\\right) \\text{은 조건수렴한다. (conditionally convergent)}\n\\end{aligned}$$",
        choices: ["0개", "1개", "2개", "3개", "4개"],
        answer: "①",
      },
    ],
    155: [
      {
        question: "다음 중 옳은 것을 모두 고르면?",
        example:
          "$$\\begin{aligned}\n&\\text{㉠ 급수 } \\sum_{n=1}^{\\infty} a_n \\text{ 이 수렴하면 } \\lim_{n \\to \\infty} a_n = 0 \\text{ 이다.} \\\\\n&\\text{㉡ 급수 } \\sum_{n=1}^{\\infty} n^{-\\frac{2}{3}} \\text{ 는 수렴한다.} \\\\\n&\\text{㉢ 두 급수 } \\sum_{n=1}^{\\infty} a_n \\text{ 과 } \\sum_{n=1}^{\\infty} b_n \\text{ 에 대하여 } \\lim_{n \\to \\infty} \\frac{a_n}{b_n} = 0 \\text{ 이고 } \\sum_{n=1}^{\\infty} b_n \\text{ 이 발산하면 } \\sum_{n=1}^{\\infty} a_n \\text{ 도 발산한다.}\n\\end{aligned}$$",
        choices: [" ㉠", " ㉡", " ㉢", " ㉡, ㉢", " ㉠, ㉢"],
        answer: "①",
      },
      {
        question: "다음 <보기>의 내용 중 옳은 것은 모두 몇 개인가?",
        example:
          "$$\\begin{aligned}\n&\\text{가. 무한급수 } \\sum_{n=1}^{\\infty} a_n \\text{ 이 조건부 수렴하면 (conditionally convergent) 무한급수 } \\sum_{n=1}^{\\infty} n^2 a_n \\text{ 은 발산한다.} \\\\\n&\\text{나. 무한급수 } \\sum_{n=1}^{\\infty} a_n \\text{ 이 수렴하면 무한급수 } \\sum_{n=1}^{\\infty} (-1)^n a_n \\text{ 은 수렴한다.} \\\\\n&\\text{다. } \\sum_{n=3}^{\\infty} \\frac{1}{n(\\ln n)^2} < \\frac{1}{\\ln 2} \\\\\n&\\text{라. 멱급수 } \\sum_{n=1}^{\\infty} a_n x^n \\text{ 의 수렴반경이 1이면 } \\sum_{n=1}^{\\infty} a_n \\text{ 은 수렴한다.}\n\\end{aligned}$$",
        choices: [" 0개", " 1개", " 2개", " 3개", " 4개"],
        answer: "③",
      },
    ],
  },
};
