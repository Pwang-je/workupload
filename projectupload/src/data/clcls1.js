export const clcls1 = {
  subject: "calculus1",
  questions: {
    공식: [
      {
        question: "곱셈공식",
        example: [
          "$$\\text{1. } ~ a(x + y) =$$",
          "$$\\text{2. } ~ (x \\pm y)^2 =$$",
          "$$\\text{3. } ~ (x + y)(x - y) =$$",
          "$$\\text{4. } ~ (x + a)(x + b) =$$",
          "$$\\text{5. } ~ (ax + b)(cx + d) =$$",
          "$$\\text{6. } ~ (x + y)^3 =$$",
          "$$\\text{7. } ~ (x - y)^3 =$$",
          "$$\\text{8. } ~ x^3 + y^3 =$$",
          "$$\\text{9. } ~ x^3 - y^3 =$$",
          "$$\\text{10. } ~ (x + y + z)^2 =$$",
          "$$\\text{11. } ~ (x + y + z)(x^2 + y^2 + z^2 - xy - yz - zx) =$$",
          "$$\\text{12. } ~ x^2 + y^2 + z^2 - xy - yz - zx =$$",
        ],
        answer: [
          "$$\\text{1. } ~ ax + ay $$",
          "$$\\text{2. } ~ x^2 \\pm 2xy + y^2$$",
          "$$\\text{3. } ~ x^2-y^2$$",
          "$$\\text{4. } ~ x^2 + (a+b)x + ab$$",
          "$$\\text{5. } ~ acx^2 + (ad+bc)x + bd$$",
          "$$\\text{6. } ~ x^3+3x^{2}y+3xy^2+y^3$$",
          "$$\\text{7. } ~ x^3-3x^{2}y+3xy^2-y^3$$",
          "$$\\text{8. } ~ (x+y)(x^{2}-xy+y^2)$$",
          "$$\\text{9. } ~ (x-y)(x^{2}+xy+y^2)$$",
          "$$\\text{10. } ~ x^2 + y^2 + z^2 + 2(xy+yz+zx)$$",
          "$$\\text{11. } ~ x^3 + y^3 + z^3 - 3xyz$$",
          "$$\\text{12. } ~ \\frac{1}{2} \\{(x-y)^2 + (y-z)^2 + (z-x)^2 \\}$$",
        ],
      },
      {
        question: "이중근호",
        example: [
          "$$\\text{1. } ~ \\sqrt{a + b + 2\\sqrt{ab}} =$$",
          "$$\\text{2. } ~ \\sqrt{a + b - 2\\sqrt{ab}} =$$",
        ],
        answer: [
          "$$\\text{1. } ~ \\sqrt{a} + \\sqrt{b}$$",
          "$$\\text{2. } ~ \\sqrt{a} - \\sqrt{b}$$",
        ],
      },
      {
        question: "지수법칙",
        example: [
          "$$\\text{1. } ~ x^0 =$$",
          "$$\\text{2. } ~ x^{-n} =$$",
          "$$\\text{3. } ~ x^m \\times x^n =$$",
          "$$\\text{4. } ~ \\frac{x^m}{x^n} =$$",
          "$$\\text{5. } ~ (x^m)^n =$$",
          "$$\\text{6. } ~ (xy)^m =~~~~~~~~~~~~~~~~~~~~$$ , $$\\left(\\frac{y}{x}\\right)^m =$$",
          "$$\\text{7. } ~ x^{\\frac{1}{m}} =~~~~~~~~~~~~~~~$$ , $$x^{\\frac{n}{m}} = ( ~~~~~~~~~~ )^n = \\sqrt[m]{ ~~~~~~~~~~ } = ( ~~~~~~~~~~ )^{\\frac{1}{m}}$$",
        ],
        answer: [
          "$$\\text{1. } ~ 1$$ <br><br>",
          "$$\\text{2. } ~ \\frac{1}{x^n}$$",
          "$$\\text{3. } ~ x^{m+n}$$",
          "$$\\text{4. } ~ x^{m-n}$$",
          "$$\\text{5. } ~ x^{mn}$$",
          "$$\\text{6. } ~ x^m y^m , ~ \\frac{y^m}{x^m}, ~ (\\frac{y}{x})^m$$",
          "$$\\text{7. } ~ \\sqrt[m]{x} , ~~ x^{\\frac{n}{m}} = (x^{\\frac{1}{m}})^n = \\sqrt[m]{x^n} = (x^n)^\\frac{1}{m}$$",
        ],
      },
      {
        question: "로그의 성질",
        example: [
          "$$\\text{1. } ~ \\log_a a =$$ , $$\\log_a 1 =$$",
          "$$\\text{2. } ~ \\log_a M^n =$$",
          "$$\\text{3. } ~ \\log_a (M \\times N) =$$",
          "$$\\text{4. } ~ \\log_a (M \\div N) =$$",
          "$$\\text{5. } ~ \\log_a x =$$",
          "$$\\text{6. } ~ a^{\\log_a x} =$$",
        ],
        answer: [
          "$$\\text{1. } ~ 1 , ~ 0$$",
          "$$\\text{2. } ~ n \\log_a M$$",
          "$$\\text{3. } ~ \\log_a M + \\log_a N$$",
          "$$\\text{4. } ~ \\log_a M - \\log_a N$$",
          "$$\\text{5. } ~ \\frac{1}{\\log_x a}$$",
          "$$\\text{6. } ~ x$$",
        ],
      },
      {
        question: "삼각함수의 기본공식",
        example: [
          "$$\\text{1. } ~ \\sin^2 \\theta + \\cos^2 \\theta =$$",
          "$$\\text{2. } ~ 1 + \\tan^2 \\theta =$$",
          "$$\\text{3. } ~ 1 + \\cot^2 \\theta =$$",
        ],
        answer: [
          "$$\\text{1. } ~ 1$$",
          "$$\\text{2. } ~ \\sec^2 \\theta$$",
          "$$\\text{3. } ~ \\csc^2 \\theta$$",
        ],
      },
      {
        question: "특수 예각의 삼각비의 값",
        example: [
          `$$
          \\begin{array}{|c|c|c|c|c|c|}
          \\hline
          & 0^\\circ\\ (0) & 30^\\circ\\ \\left(\\frac{\\pi}{6}\\right) & 45^\\circ\\ \\left(\\frac{\\pi}{4}\\right) & 60^\\circ\\ \\left(\\frac{\\pi}{3}\\right) & 90^\\circ\\ \\left(\\frac{\\pi}{2}\\right) \\\\ \\hline
          \\sin \\theta &  &  &  &  &  \\\\ \\hline
          \\cos \\theta &  &  &  &  &  \\\\ \\hline
          \\tan \\theta &  &  &  &  &  \\\\ \\hline
          \\end{array}
          $$`,
        ],
        answer: [
          "$$\\sin \\theta = 0, \\frac{1}{2}, \\frac{\\sqrt{2}}{2}, \\frac{\\sqrt{3}}{2}, 1$$",
          "$$\\cos \\theta = 1, \\frac{\\sqrt{3}}{2}, \\frac{\\sqrt{2}}{2}, \\frac{1}{2}, 0$$",
          "$$\\tan \\theta = 0, \\frac{1}{\\sqrt{3}}, 1, \\sqrt{3}, \\infty$$",
        ],
      },
      {
        question: "삼각함수의 합성",
        example: [
          "$$a \\sin A + b \\cos A$$ 의 최댓값 : $$~~~~~~~~~~~~~~~~~~~$$, 최솟값 : $$~~~~~~~~~~~~~~~~~~~$$",
        ],
        answer: [
          "$$\\text{최대 : } ~ \\sqrt{a^2 + b^2}$$",
          "$$\\text{최소 : } ~ -\\sqrt{a^2 + b^2}$$",
        ],
      },
      {
        question: "삼각함수의 가법정리",
        example: [
          "$$\\text{1. } ~ \\sin(A + B) =$$",
          "$$\\text{2. } ~ \\sin(A - B) =$$",
          "$$\\text{3. } ~ \\cos(A + B) =$$",
          "$$\\text{4. } ~ \\cos(A - B) =$$",
          "$$\\text{5. } ~ \\tan(A + B) =$$",
          "$$\\text{6. } ~ \\tan(A - B) =$$",
        ],
        answer: [
          "$$\\text{1. } ~ \\sin A \\cos B + \\cos A \\sin B$$",
          "$$\\text{2. } ~ \\sin A \\cos B - \\cos A \\sin B$$",
          "$$\\text{3. } ~ \\cos A \\cos B - \\sin A \\sin B$$",
          "$$\\text{4. } ~ \\cos A \\cos B + \\sin A \\sin B$$",
          "$$\\text{5. } ~ \\frac{\\tan A + \\tan B}{1 - \\tan A \\tan B}$$",
          "$$\\text{6. } ~ \\frac{\\tan A - \\tan B}{1 + \\tan A \\tan B}$$",
        ],
      },
      {
        question: "삼각함수의 합차공식",
        example: [
          "$$\\text{1. } ~ \\sin(A + B) + \\sin(A - B) =$$",
          "$$\\text{2. } ~ \\sin(A + B) - \\sin(A - B) =$$",
          "$$\\text{3. } ~ \\cos(A + B) + \\cos(A - B) =$$",
          "$$\\text{4. } ~ \\cos(A + B) - \\cos(A - B) =$$",
        ],
        answer: [
          "$$\\text{1. } ~ 2 \\sin A \\cos B$$",
          "$$\\text{2. } ~ 2 \\cos A \\sin B$$",
          "$$\\text{3. } ~ 2 \\cos A \\cos B$$",
          "$$\\text{4. } ~ -2 \\sin A \\sin B$$",
        ],
      },
      {
        question: "삼각함수의 2배각 공식",
        example: [
          "$$\\text{1. } ~ \\sin 2A =$$",
          "$$\\text{2. } ~ \\cos 2A = ~~~~~~~~~~~~~~~~~~~~ = ~~~~~~~~~~~~~~~~~~~~ = $$",
          "$$\\text{3. } ~ \\tan 2A =$$",
        ],
        answer: [
          "$$\\text{1. } ~ 2 \\sin A \\cos A$$",
          "$$\\text{2. } ~ \\cos^2 A - \\sin^2 A = 1-2 \\sin^{2} A = 2 \\cos^{2} A - 1$$",
          "$$\\text{3. } ~ \\frac{2 \\tan A}{1 - \\tan^2 A}$$",
        ],
      },
      {
        question: "삼각함수의 반각 공식",
        example: [
          "$$\\text{1. } ~ \\sin^2 \\frac{A}{2} =$$",
          "$$\\text{2. } ~ \\cos^2 \\frac{A}{2} =$$",
          "$$\\text{3. } ~ \\tan^2 \\frac{A}{2} =$$",
        ],
        answer: [
          "$$\\text{1. } ~ \\frac{1 - \\cos A}{2}$$",
          "$$\\text{2. } ~ \\frac{1 + \\cos A}{2}$$",
          "$$\\text{3. } ~ \\frac{1 - \\cos A}{1 + \\cos A}$$",
        ],
      },
      {
        question: "역삼각함수의 성질",
        example: [
          "$$\\text{1. } ~ \\sin^{-1} x + \\cos^{-1} x =$$",
          "$$\\text{2. } ~ \\cos^{-1} x + \\cos^{-1}(-x) =$$",
          "$$\\text{3. } ~ \\tan^{-1} x + \\cot^{-1} x =$$",
          "$$\\text{4. } ~ \\sec^{-1} x + \\csc^{-1} x =$$",
        ],
        answer: [
          "$$\\text{1. } ~ \\frac{\\pi}{2}$$",
          "$$\\text{2. } ~ \\pi$$",
          "$$\\text{3. } ~ \\frac{\\pi}{2}$$",
          "$$\\text{4. } ~ \\frac{\\pi}{2}$$",
        ],
      },
      {
        question: "삼각함수와 역삼각함수의 주치범위",
        example: [
          `$$
          \\begin{array}{c|c}            
            \\sin^{-1}(\\sin x) = x & ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ &\\sin(\\sin^{-1} x) = x & ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~\\\\
            \\hline
            \\cos^{-1}(\\cos x) = x & ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ &\\cos(\\cos^{-1} x) = x & ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~\\\\
            \\hline
            \\tan^{-1}(\\tan x) = x & ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ &\\tan(\\tan^{-1} x) = x & ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~    
          \\end{array}
          $$`,
        ],
        answer: [
          `$$
          \\begin{array}{c|c}            
            \\sin^{-1}(\\sin x) = x & -\\frac{\\pi}{2} \\le x \\le \\frac{\\pi}{2} &\\sin(\\sin^{-1} x) = x & -1 \\le x \\le 1 \\\\
            \\hline
            \\cos^{-1}(\\cos x) = x & 0 \\le x \\le \\pi &\\cos(\\cos^{-1} x) = x & -1 \\le x \\le 1 \\\\
            \\hline
            \\tan^{-1}(\\tan x) = x & -\\frac{\\pi}{2} < x < \\frac{\\pi}{2} &\\tan(\\tan^{-1} x) = x & x \\text{는 모든 실수}    
          \\end{array}
          $$`,
        ],
      },
      {
        question: "쌍곡선함수",
        example: [
          "$$\\text{1. } ~ \\sinh A =$$",
          "$$\\text{2. } ~ \\cosh A =$$",
          "$$\\text{3. } ~ \\tanh A =$$",
          "$$\\text{4. } ~ \\coth A =$$",
          "$$\\text{5. } ~ \\operatorname{sech} A =$$",
          "$$\\text{6. } ~ \\operatorname{csch} A =$$",
        ],
        answer: [
          "$$\\text{1. } ~ \\frac{e^A - e^{-A}}{2}$$",
          "$$\\text{2. } ~ \\frac{e^A + e^{-A}}{2}$$",
          "$$\\text{3. } ~ \\frac{e^{A}-e^{-A}}{e^{A}+e^{-A}}$$",
          "$$\\text{4. } ~ \\frac{e^{A}+e^{-A}}{e^{A}-e^{-A}} = \\frac{1}{\\tanh A}$$",
          "$$\\text{5. } ~ \\frac{2}{e^{A}+e^{-A}} = \\frac{1}{\\cosh A}$$",
          "$$\\text{6. } ~ \\frac{2}{e^{A}-e^{-A}} = \\frac{1}{\\sinh A}$$",
        ],
      },
      {
        question: "쌍곡선함수의 기본공식",
        example: [
          "$$\\text{1. } ~ \\cosh^2 A - \\sinh^2 A =$$",
          "$$\\text{2. } ~ 1 - \\tanh^2 A =$$",
          "$$\\text{3. } ~ 1 - \\coth^2 A =$$",
        ],
        answer: [
          "$$\\text{1. } ~ 1$$",
          "$$\\text{2. } ~ \\operatorname{sech}^2 A$$",
          "$$\\text{3. } ~ -\\operatorname{csch}^2 A$$",
        ],
      },
      {
        question: "쌍곡선함수의 가법정리",
        example: [
          "$$\\text{1. } ~ \\sinh(A + B) =$$",
          "$$\\text{2. } ~ \\sinh(A - B) =$$",
          "$$\\text{3. } ~ \\cosh(A + B) =$$",
          "$$\\text{4. } ~ \\cosh(A - B) =$$",
          "$$\\text{5. } ~ \\tanh(A + B) =$$",
          "$$\\text{6. } ~ \\tanh(A - B) =$$",
        ],
        answer: [
          "$$\\text{1. } ~ \\sinh A \\cosh B + \\cosh A \\sinh B$$",
          "$$\\text{2. } ~ \\sinh A \\cosh B - \\cosh A \\sinh B$$",
          "$$\\text{3. } ~ \\cosh A \\cosh B + \\sinh A \\sinh B$$",
          "$$\\text{4. } ~ \\cosh A \\cosh B - \\sinh A \\sinh B$$",
          "$$\\text{5. } ~ \\frac{\\tanh A + \\tanh B}{1 + \\tanh A \\tanh B}$$",
          "$$\\text{6. } ~ \\frac{\\tanh A - \\tanh B}{1 - \\tanh A \\tanh B}$$",
        ],
      },
      {
        question: "쌍곡선함수의 배각공식",
        example: [
          "$$\\text{1. } ~ \\sinh 2A =$$",
          "$$\\text{2. } ~ \\cosh 2A = ~~~~~~~~~~~~~~~~~~ = ~~~~~~~~~~~~~~~~~~~ = $$",
          "$$\\text{3. } ~ \\tanh 2A =$$",
        ],
        answer: [
          "$$\\text{1. } ~ 2 \\sinh A \\cosh A$$",
          "$$\\text{2. } ~ \\cosh^2 A + \\sinh^2 A = 2\\cosh^2 A - 1 = 1 + 2\\sinh^2 A$$",
          "$$\\text{3. } ~ \\frac{2\\tanh A}{1 + \\tanh^2 A}$$",
        ],
      },
      {
        question: "쌍곡선함수의 반각공식",
        example: [
          "$$\\text{1. } ~ \\sinh^2 \\frac{A}{2} =$$ , $$\\sinh^2 A =$$",
          "$$\\text{2. } ~ \\cosh^2 \\frac{A}{2} =$$ , $$\\cosh^2 A =$$",
          "$$\\text{3. } ~ \\tanh^2 \\frac{A}{2} =$$ , $$\\tanh^2 A =$$",
        ],
        answer: [
          "$$\\text{1. } ~ \\frac{\\cosh A - 1}{2} , ~~ \\frac{\\cosh 2 A-1}{2} $$",
          "$$\\text{2. } ~ \\frac{\\cosh A + 1}{2} , ~~ \\frac{\\cosh 2 A+1}{2} $$",
          "$$\\text{3. } ~ \\frac{\\cosh A - 1}{\\cosh A + 1} , ~~ \\frac{\\cosh 2 A-1}{\\cosh 2 A+1}$$",
        ],
      },
      {
        question: "역쌍곡선함수의 정의",
        example: [
          "$$\\text{1. } ~ \\sinh^{-1} A =$$",
          "$$\\text{2. } ~ \\cosh^{-1} A =$$",
          "$$\\text{3. } ~ \\tanh^{-1} A =$$",
          "$$\\text{4. } ~ \\coth^{-1} A =$$",
          "$$\\text{5. } ~ \\operatorname{sech}^{-1} A =$$",
          "$$\\text{6. } ~ \\operatorname{csch}^{-1} A =$$",
        ],
        answer: [
          "$$\\text{1. } ~ \\ln(A + \\sqrt{A^2 + 1}), ~ (-\\infty < A < \\infty)$$",
          "$$\\text{2. } ~ \\ln(A + \\sqrt{A^2 - 1}), ~ (A \\ge 1)$$",
          "$$\\text{3. } ~ \\frac{1}{2} \\ln\\left(\\frac{1 + A}{1 - A}\\right), ~ (-1 < A < 1)$$",
          "$$\\text{4. } ~ \\frac{1}{2} \\ln\\left(\\frac{A + 1}{A - 1}\\right), ~ (A > 1 \\text{or} A < -1)$$",
          "$$\\text{5. } ~ \\ln \\left( \\frac{1}{A} + \\sqrt{ \\frac{1}{A^2} + 1} \\right), ~ (0 < A \\le 1)$$",
          "$$\\text{6. } ~ \\ln \\left( \\frac{1}{A} + \\sqrt{ \\frac{1}{A^2} - 1} \\right), ~ (A \\neq 0)$$",
        ],
      },
      {
        question: "삼각함수 미분공식",
        example: [
          "$$\\text{1. } ~ \\frac{d}{dx}(\\sin x) =$$",
          "$$\\text{2. } ~ \\frac{d}{dx}(\\cos x) =$$",
          "$$\\text{3. } ~ \\frac{d}{dx}(\\tan x) =$$",
          "$$\\text{4. } ~ \\frac{d}{dx}(\\csc x) =$$",
          "$$\\text{5. } ~ \\frac{d}{dx}(\\sec x) =$$",
          "$$\\text{6. } ~ \\frac{d}{dx}(\\cot x) =$$",
        ],
        answer: [
          "$$\\text{1. } ~ \\cos x$$",
          "$$\\text{2. } ~ -\\sin x$$",
          "$$\\text{3. } ~ \\sec^2 x$$",
          "$$\\text{4. } ~ -\\csc x \\cot x$$",
          "$$\\text{5. } ~ \\sec x \\tan x$$",
          "$$\\text{6. } ~ -\\csc^2 x$$",
        ],
      },
      {
        question: "역삼각함수 미분공식",
        example: [
          "$$\\text{1. } ~ \\frac{d}{dx}(\\sin^{-1} x) =$$",
          "$$\\text{2. } ~ \\frac{d}{dx}(\\cos^{-1} x) =$$",
          "$$\\text{3. } ~ \\frac{d}{dx}(\\tan^{-1} x) =$$",
          "$$\\text{4. } ~ \\frac{d}{dx}(\\csc^{-1} x) =$$",
          "$$\\text{5. } ~ \\frac{d}{dx}(\\sec^{-1} x) =$$",
          "$$\\text{6. } ~ \\frac{d}{dx}(\\cot^{-1} x) =$$",
        ],
        answer: [
          "$$\\text{1. } ~ \\frac{1}{\\sqrt{1 - x^2}}$$",
          "$$\\text{2. } ~ \\frac{-1}{\\sqrt{1 - x^2}}$$",
          "$$\\text{3. } ~ \\frac{1}{1 + x^2}$$",
          "$$\\text{4. } ~ \\frac{-1}{|x| \\sqrt{x^2 - 1}}$$",
          "$$\\text{5. } ~ \\frac{1}{|x| \\sqrt{x^2 - 1}}$$",
          "$$\\text{6. } ~ \\frac{-1}{1 + x^2}$$",
        ],
      },
      {
        question: "쌍곡선함수 미분공식",
        example: [
          "$$\\text{1. } ~ \\frac{d}{dx}(\\sinh x) =$$",
          "$$\\text{2. } ~ \\frac{d}{dx}(\\cosh x) =$$",
          "$$\\text{3. } ~ \\frac{d}{dx}(\\tanh x) =$$",
          "$$\\text{4. } ~ \\frac{d}{dx}(\\operatorname{csch} x) =$$",
          "$$\\text{5. } ~ \\frac{d}{dx}(\\operatorname{sech} x) =$$",
          "$$\\text{6. } ~ \\frac{d}{dx}(\\coth x) =$$",
        ],
        answer: [
          "$$\\text{1. } ~ \\cosh x$$",
          "$$\\text{2. } ~ \\sinh x$$",
          "$$\\text{3. } ~ \\operatorname{sech}^2 x$$",
          "$$\\text{4. } ~ -\\operatorname{csch} x \\cdot \\coth x$$",
          "$$\\text{5. } ~ -\\operatorname{sech} x \\cdot \\tanh x$$",
          "$$\\text{6. } ~ -\\operatorname{csch}^2 x$$",
        ],
      },
      {
        question: "역쌍곡선함수 미분공식",
        example: [
          "$$\\text{1. } ~ \\frac{d}{dx}(\\sinh^{-1} x) =$$",
          "$$\\text{2. } ~ \\frac{d}{dx}(\\cosh^{-1} x) =$$",
          "$$\\text{3. } ~ \\frac{d}{dx}(\\tanh^{-1} x) =$$",
          "$$\\text{4. } ~ \\frac{d}{dx}(\\operatorname{csch}^{-1} x) =$$",
          "$$\\text{5. } ~ \\frac{d}{dx}(\\operatorname{sech}^{-1} x) =$$",
          "$$\\text{6. } ~ \\frac{d}{dx}(\\coth^{-1} x) =$$",
        ],
        answer: [
          "$$\\text{1. } ~ \\frac{1}{\\sqrt{x^2 + 1}}$$",
          "$$\\text{2. } ~ \\frac{1}{\\sqrt{x^2 - 1}}$$",
          "$$\\text{3. } ~ \\frac{1}{1 - x^2}, ~ (|x|<1)$$",
          "$$\\text{4. } ~ \\frac{-1}{x \\sqrt{x^2 + 1}}$$",
          "$$\\text{5. } ~ \\frac{-1}{x \\sqrt{x^2 - 1}}$$",
          "$$\\text{6. } ~ \\frac{1}{1 - x^2}, ~ (|x|>1)$$",
        ],
      },
      {
        question: "지수함수 & 로그함수 미분공식",
        example: [
          "$$\\text{1. } ~ \\frac{d}{dx}(e^x) =$$",
          "$$\\text{2. } ~ \\frac{d}{dx}(a^x) =$$",
          "$$\\text{3. } ~ \\frac{d}{dx}\\ln|x| =$$",
          "$$\\text{4. } ~ \\frac{d}{dx}(\\log_a x) =$$",
        ],
        answer: [
          "$$\\text{1. } ~ e^x$$",
          "$$\\text{2. } ~ a^x \\ln a$$",
          "$$\\text{3. } ~ \\frac{1}{x}$$",
          "$$\\text{4. } ~ \\frac{1}{x \\ln a}$$",
        ],
      },
      {
        question: "곱의 미분법",
        example: ["$$y = f(x) \\cdot g(x) \\Rightarrow y' =$$"],
        answer: ["$$f'(x) g(x) + f(x) g'(x)$$"],
      },
      {
        question: "분수함수의 미분법",
        example: ["$$y = \\frac{g(x)}{f(x)} =$$"],
        answer: ["$$\\frac{ g'(x) f(x)- g(x) f'(x)}{(f(x))^2}$$"],
      },
      {
        question: "이항정리",
        example: [
          "$$(a + b)^n = ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ = \\sum_{r=0}^{n}$$",
        ],
        answer: [
          "$$ _nC_0 a^n + _nC_1 a^{n-1}b + _nC_2 a^{n-2}b^2 + \\cdots + _nC_{n-1} ab^{n-1} + _nC_nb^n $$",
        ],
      },
      {
        question: "라이프니츠의 정리",
        example: [
          "$$(fg)^{(n)} = ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ = \\sum_{r=0}^{n} {_nC_r} f^{(n-r)} g^{(r)}$$",
        ],
        answer: [
          "$$ {_nC_0} f^{(n)} g + {_nC_1} f^{(n)} g' + \\cdots {_nC_{n-1}} f' g^{n-1} + {_nC_n} f g^{n} $$",
        ],
      },
      {
        question: "이항계수의 합",
        example: [
          "$$\\text{1.}~ _n\\mathrm{C}_0 + _n\\mathrm{C}_1 + \\cdots + _n\\mathrm{C}_n =$$",
          "$$\\text{2.}~ _n\\mathrm{C}_0 + _n\\mathrm{C}_2 + \\cdots + _n\\mathrm{C}_{n-2} + _n\\mathrm{C}_n =$$",
          "$$\\text{3.}~ _n\\mathrm{C}_1 + _n\\mathrm{C}_3 + \\cdots + _n\\mathrm{C}_{n-1} =$$",
        ],
        answer: ["$$2^n$$", "$$2^{n-1}$$", "$$2^{n-1}$$"],
      },
    ],

    6: [
      {
        question:
          "다음 계산을 하시오:$$-\\frac{1}{3} + \\frac{1}{2} - \\frac{3}{4}$$",
        choices: [],
        answer: "$$-\\frac{7}{12}$$",
      },
      {
        question: "다음 계산을 하시오:$$-\\frac{4}{3} + \\frac{3}{2}$$",
        choices: [],
        answer: "$$4$$",
      },
      {
        question:
          "다음 계산을 하시오:$$-\\frac{1}{2} \\times \\frac{3}{7} \\times -\\frac{4}{3}$$",
        choices: [],
        answer: "$$4 sqrt{2}$$",
      },
      {
        question:
          "다음 계산을 하시오:$$-\\frac{3}{4} \\div -\\frac{5}{3} \\times -20 =$$",
        choices: [],
        answer: "$$\\frac{sqrt{3}}{2}$$",
      },
      {
        question: "다음 식을 간단히 정리하시오:$$\\frac{1}{2} + \\frac{1}{3}$$",
        choices: [],
        answer: "$$\\frac{5}{6}$$",
      },
      {
        question:
          "다음 식을 간단히 정리하시오:$$\\frac{1}{x^2} + \\frac{1}{x}$$",
        choices: [],
        answer: "$$\\frac{1+x}{x^2}$$",
      },
      {
        question:
          "다음 식을 간단히 정리하시오:$$\\frac{1}{x} + \\frac{1}{x^2 + 1}$$",
        choices: [],
        answer: "$$\\frac{x^2+x+1}{x(x^2+1)}$$",
      },
      {
        question:
          "다음 식을 간단히 정리하시오:$$\\frac{2}{x} \\times \\frac{x^2}{4}$$",
        choices: [],
        answer: "$$\\frac{x}{2}$$",
      },
      {
        question:
          "변분수 계산을 이용하여 간단히 정리하시오:$$\\frac{1}{4} \\div \\frac{2}{3}$$",
        choices: [],
        answer: "$$\\frac{3}{8}$$",
      },
      {
        question:
          "변분수 계산을 이용하여 간단히 정리하시오:$$\\frac{3}{1} \\div \\frac{1}{2}$$",
        choices: [],
        answer: "$$6$$",
      },
      {
        question:
          "변분수 계산을 이용하여 간단히 정리하시오:$$\\frac{2}{3} \\div \\frac{4}{9}$$",
        choices: [],
        answer: "$$\\frac{3}{2}$$",
      },
      {
        question:
          "변분수 계산을 이용하여 간단히 정리하시오:$$\\frac{4}{5} \\div \\frac{8}{15}$$",
        choices: [],
        answer: "$$\\frac{3}{2}$$",
      },
    ],
    8: [
      {
        question: "다음 방정식을 풀어라:$$3x + 2 = 2x + 9$$",
        choices: [],
        answer: "$$x=7$$",
      },
      {
        question: "다음 방정식을 풀어라:$$\\frac{3}{2}x + 4 = \\frac{1}{4}x$$",
        choices: [],
        answer: "$$x= -\\frac{16}{5}$$",
      },
      {
        question: "다음 방정식을 풀어라:$$2x - \\frac{x - 4}{3} = 4$$",
        choices: [],
        answer: "$$x= \\frac{8}{5}$$",
      },
      {
        question: "다음 방정식을 풀어라:$$5 - 0.2x = 0.5x + 3$$",
        choices: [],
        answer: "$$x= \\frac{20}{7}$$",
      },
      {
        question: "다음은 연립일차방정식이다.$$y$$의 값을 구하여라.",
        example: [
          "$$\\begin{cases} 0.2x + 0.3y = 0.7 \\\\ \\frac{5}{2}x + 3y = 5 \\end{cases}$$",
        ],
        choices: [],
        answer: "$$5$$",
      },
    ],
    12: [
      {
        question: "다음 식을 전개하여라:$$(3x - 2y)^2$$",
        choices: [],
        answer: "$$9x^2 - 12xy + 4y^2$$",
      },
      {
        question: "다음 식을 전개하여라:$$(2 + \\sqrt{3})(2 - \\sqrt{3})$$",
        choices: [],
        answer: "$$1$$",
      },
      {
        question: "다음 식을 인수분해 하여라:$$m(x - y) + n(x - y)$$",
        choices: [],
        answer: "$$$(m + n)(x - y)$$",
      },
      {
        question: "다음 식을 인수분해 하여라:$$x(2y - 1) - 2y + 1$$",
        choices: [],
        answer: "$$$(x - 1)(2y - 1)$$",
      },
      {
        question: "다음 식을 인수분해 하여라:$$3x^2y + 6xy^2$$",
        choices: [],
        answer: "$$3xy(x + 2y)$$",
      },
      {
        question: "다음 식을 인수분해 하여라:$$x^2 - 10x + 16$$",
        choices: [],
        answer: "$$(x - 2)(x - 8)$$",
      },
      {
        question: "다음 식을 인수분해 하여라:$$2x^2 - 5x - 3$$",
        choices: [],
        answer: "$$(2x+1)(x-3)$$",
      },
      {
        question: "다음 식을 인수분해 하여라:$$3x^2 + 5x - 2$$",
        choices: [],
        answer: "$$(3x - 1)(x + 2)$$",
      },
      {
        question:
          "다음의 값을 구하여라: \n$$(2x + 1)^2 - (x - 2)^2 = (3x + a)(x + b)$$일 때,$$a + 3b$$의 값은?",
        choices: [],
        answer: "$$8$$",
      },
    ],
    13: [
      {
        question: "다음 이차방정식의 근을 구하시오:$$x^2 + 3x + 2 = 0$$",
        choices: [],
        answer: "$$-1, -2$$",
      },
      {
        question: "다음 이차방정식의 근을 구하시오:$$x^2 - 5x + 8 = 0$$",
        choices: [],
        answer: "$$\\frac{5 \\pm \\sqrt{7}}{2}$$",
      },
      {
        question: "다음 이차방정식의 근을 구하시오:$$x^2 + x + 3 = 0$$",
        choices: [],
        answer: "$$\\frac{-1 \\pm \\sqrt{11}}{2}$$",
      },
      {
        question: "다음 이차방정식의 근을 구하시오:$$x^2 + 2x - 1 = 0$$",
        choices: [],
        answer: "$$-1 \\pm \\sqrt{2}$$",
      },
      {
        question: "다음 이차방정식의 근을 판별하시오:$$x^2 + x + 1 = 0$$",
        choices: [],
        answer: "실수해가 존재하지 않는다.",
      },
      {
        question: "다음 이차방정식의 근을 판별하시오:$$2x^2 + 4x + 1 = 0$$",
        choices: [],
        answer: "서로 다른 두 실근",
      },
      {
        question: "다음 이차방정식의 근을 판별하시오:$$x^2 - x + 3 = 0$$",
        choices: [],
        answer: "실수해가 존재하지 않는다.",
      },
      {
        question: "다음 이차방정식의 근을 판별하시오:$$x^2 - 2x + 4 = 0$$",
        choices: [],
        answer: "실수해가 존재하지 않는다.",
      },
      {
        question: "이차함수$$x^2 - 3x + 1 = 0$$두 근의 합과 곱을 구하면?",
        choices: [],
        answer: "$$합 : 3, 곱 : 1$$",
      },
    ],
    14: [
      {
        question:
          "삼차방정식$$x^3 - 5x^2 - x + 5 = 0$$의 세 실근을 바르게 구한 것은?",
        choices: [
          "$$x = -1, 1, \\sqrt{3}$$",
          "$$x = -1, 1, 3$$",
          "$$x = -1, 1, \\sqrt{5}$$",
          "$$x = -1, 1, 5$$",
        ],
        answer: "④",
      },
      {
        question:
          "삼차방정식$$x^3 - 5x^2 + 2 = 0$$의 세 실근을 각각$$\\alpha, \\beta, \\gamma$$($$\\alpha < \\beta < \\gamma$$)라 할 때,$$\\gamma - (\\alpha + \\beta)$$의 값을 구하면?",
        choices: ["$$3$$", "$$4$$", "$$5$$", "$$6$$"],
        answer: "②",
      },
      {
        question:
          "연립방정식$$\\begin{cases} x + y + z = 5 \\\\ x - z = 3 \\\\ x + z = 5 \\end{cases}$$의 근을$$x = \\alpha, y = \\beta, z = \\gamma$$라 할 때,$$\\alpha^2 + \\beta^2 + \\gamma^2$$의 값은?",
        choices: ["$$11$$", "$$13$$", "$$15$$", "$$17$$"],
        answer: "④",
      },
    ],
    21: [
      {
        question:
          "다음 등식이$$x$$에 관한 항등식이 되도록 상수$$A, B, C$$의 값을 정하여라.\\n$$\\frac{5}{x^2 - x - 6} = \\frac{5}{(x - 3)(x + 2)} = \\frac{A}{x - 3} + \\frac{B}{x + 2}$$",
        choices: [],
        answer: "$$A = 1, B = -1$$",
      },
      {
        question:
          "다음 등식이$$x$$에 관한 항등식이 되도록 상수$$A, B, C$$의 값을 정하여라.\\n$$\\frac{3x}{x^2 - 3x + 2} = \\frac{A}{x - 1} + \\frac{B}{x - 2}$$",
        choices: [],
        answer: "$$A = -3, B = 6$$",
      },
      {
        question:
          "다음 등식이$$x$$에 관한 항등식이 되도록 상수$$A, B$$의 값을 정하여라.\\n$$\\frac{8}{x^2 - 4} = \\frac{A}{x - 2} + \\frac{B}{x + 2}$$",
        choices: [],
        answer: "$$A = 2, B = -2$$",
      },
      {
        question:
          "다음 등식이$$x$$에 관한 항등식이 되도록 상수$$A, B, C$$의 값을 정하여라.\\n$$\\frac{1}{(x - 1)(x - 2)(x - 3)} = \\frac{A}{x - 1} + \\frac{B}{x - 2} + \\frac{C}{x - 3}$$",
        choices: [],
        answer: "$$A = \\frac{1}{2}, B = -1, C = \\frac{1}{2}$$",
      },
    ],
    22: [
      {
        question: "다음 식을 분모 유리화 시키시오:$$\\frac{1}{\\sqrt{3}}$$",
        choices: [],
        answer: "$$\\frac{\\sqrt{3}}{3}$$",
      },
      {
        question: "다음 식을 분모 유리화 시키시오:$$\\frac{1}{\\sqrt{12}}$$",
        choices: [],
        answer: "$$\\frac{\\sqrt{3}}{6}$$",
      },
      {
        question:
          "다음 식을 분모 유리화 시키시오:$$\\frac{1}{2\\sqrt{2} - \\sqrt{7}}$$",
        choices: [],
        answer: "$$2\\sqrt{2} + \\sqrt{7}$$",
      },
      {
        question:
          "다음 식을 분모 유리화 시키시오:$$\\frac{1}{\\sqrt{x+1} - \\sqrt{x}}$$",
        choices: [],
        answer: "$$\\sqrt{x+1} + \\sqrt{x}$$",
      },
      {
        question: "다음을 간단히 하시오:$$\\sqrt{12} - \\frac{1}{\\sqrt{48}}$$",
        choices: [],
        answer: "$$\\frac{23 \\sqrt{3}}{3}$$",
      },
      {
        question:
          "다음을 간단히 하시오:$$\\sqrt{8} + 7\\sqrt{2} - \\sqrt{18}$$",
        choices: [],
        answer: "$$6 \\sqrt{2}$$",
      },
      {
        question:
          "다음을 간단히 하시오:$$\\frac{\\sqrt{6} - \\sqrt{8}}{\\sqrt{2}}$$",
        choices: [],
        answer: "$$\\sqrt{3} - 2$$",
      },
      {
        question:
          "다음을 간단히 하시오:$$\\frac{\\sqrt{2}}{3 - \\sqrt{2}} - \\frac{\\sqrt{2}}{3 + \\sqrt{2}}$$",
        choices: [],
        answer: "$$\\frac{3}{7}$$",
      },
    ],
    25: [
      {
        question: "다음 일차함수의 그래프를 그려보자:$$2x + y = 2$$",
        choices: [],
        answer: "",
      },
      {
        question: "다음 일차함수의 그래프를 그려보자:$$-x + 2y + 1 = 0$$",
        choices: [],
        answer: "",
      },
      {
        question: "다음 이차함수의 그래프를 그려보자:$$y = x^2 + 4x + 1$$",
        choices: [],
        answer: "",
      },
      {
        question: "다음 이차함수의 그래프를 그려보자:$$y = x^2 - 6x + 8$$",
        choices: [],
        answer: "",
      },
      {
        question: "다음 이차함수의 그래프를 그려보자:$$y = x^2 - 5x + 5$$",
        choices: [],
        answer: "",
      },
      {
        question: "다음 이차함수의 그래프를 그려보자:$$y = x^2 + 4x + 9$$",
        choices: [],
        answer: "",
      },
      {
        question: "점$$(4, -1)$$을 지나고 기울기가$$2$$인 직선의 방정식은?",
        choices: [],
        answer: "$$y = 2x - 9$$",
      },
    ],
    27: [
      {
        question:
          "다음 지수성질을 이용하여 간단히 정리하여라:$$x \\cdot x \\cdot x$$",
        choices: [],
        answer: "$$x^3$$",
      },
      {
        question: "다음 지수성질을 이용하여 간단히 정리하여라:$$2^0$$",
        choices: [],
        answer: "$$1$$",
      },
      {
        question: "다음 지수성질을 이용하여 간단히 정리하여라:$$1004^0$$",
        choices: [],
        answer: "$$1$$",
      },
      {
        question: "다음 지수성질을 이용하여 간단히 정리하여라:$$2^{-2}$$",
        choices: [],
        answer: "$$\\frac{1}{4}$$",
      },
      {
        question:
          "다음 지수성질을 이용하여 간단히 정리하여라:$$\\sqrt[3]{x^2}$$",
        choices: [],
        answer: "$$x^{\\frac{2}{3}}$$",
      },
      {
        question: "다음 지수성질을 이용하여 간단히 정리하여라:$$(x^{3})^2$$",
        choices: [],
        answer: "$$x^6$$",
      },
      {
        question:
          "다음 지수성질을 이용하여 간단히 정리하여라:$$(\\sqrt{x})^3$$",
        choices: [],
        answer: "$$x^{\\frac{3}{2}}$$",
      },
      {
        question:
          "다음 지수성질을 이용하여 간단히 정리하여라:$$\\frac{x^7}{x^5}$$",
        choices: [],
        answer: "$$x^2$$",
      },
      {
        question:
          "다음 지수성질을 이용하여 간단히 정리하여라:$$(x^{2} y^{3})^2$$",
        choices: [],
        answer: "$$x^4 y^6$$",
      },
      {
        question:
          "괄호에 주어진$$x$$의 값에 대하여 식의 값을 구하여라:$$y = -2x^2, \\quad (x = 4)$$",
        choices: [],
        answer: "$$-32$$",
      },
      {
        question:
          "괄호에 주어진$$x$$의 값에 대하여 식의 값을 구하여라:$$y = 3x^{-3}, \\quad (x = -1)$$",
        choices: [],
        answer: "$$-3$$",
      },
      {
        question:
          "괄호에 주어진$$x$$의 값에 대하여 식의 값을 구하여라:$$y = 2x^2, \\quad (x = -1)$$",
        choices: [],
        answer: "$$2$$",
      },
      {
        question:
          "괄호에 주어진$$x$$의 값에 대하여 식의 값을 구하여라:$$y = 2x^{\\frac{1}{2}}, \\quad (x = 9)$$",
        choices: [],
        answer: "$$6$$",
      },
      {
        question:
          "괄호에 주어진$$x$$의 값에 대하여 식의 값을 구하여라:$$y = 2 \\sqrt[3]{x}, \\quad (x = 8)$$",
        choices: [],
        answer: "$$4$$",
      },
      {
        question:
          "괄호에 주어진$$x$$의 값에 대하여 식의 값을 구하여라:$$y = 3 \\sqrt[3]{x}, \\quad (x = 16)$$",
        choices: [],
        answer: "$$6$$",
      },
    ],
    28: [
      {
        question:
          "다음 지수방정식을 풀어라:$$\\left( \\frac{2}{3} \\right)^{x^2 - 7} = \\left( \\frac{3}{2} \\right)^{1 - x}$$",
        choices: [],
        answer: "$$-2, 3$$",
      },
      {
        question: "다음 지수방정식을 풀어라:$$9^{x+1} = 3^{x^2 + x}$$",
        choices: [],
        answer: "$$-1, 2$$",
      },
      {
        question: "방정식$$4^x - 3 \\cdot 2^{x+1} - 16 = 0$$의 해를 구하면?",
        choices: ["$$-1$$", "$$\\frac{3}{2}$$", "$$3$$", "$$8$$"],
        answer: "③",
      },
      {
        question:
          "지수방정식$$8^x = \\left( \\frac{1}{2} \\right)^{x^2 - 4}$$의 두 근을$$\\alpha, \\beta$$라 할 때,$$\\alpha - \\beta$$의 값은? (단,$$\\alpha > \\beta$$)",
        choices: ["$$2$$", "$$3$$", "$$4$$", "$$5$$"],
        answer: "④",
      },
    ],
    30: [
      {
        question: "다음 값을 구하여라:$$\\log_2 \\sqrt[3]{16}$$",
        choices: [],
        answer: "$$\\frac{4}{3}$$",
      },
      {
        question: "다음 값을 구하여라:$$9^{\\log_9 2}$$",
        choices: [],
        answer: "$$2$$",
      },
      {
        question: "다음 값을 구하여라:$$3^{\\log_3 15}$$",
        choices: [],
        answer: "$$15$$",
      },
      {
        question: "다음 값을 구하여라:$$\\log_2 \\sqrt[3]{4}$$",
        choices: [],
        answer: "$$\\frac{2}{3}$$",
      },
      {
        question:
          "방정식$$\\log_2 (3x + 1) + \\log_2 (x + 2) = 3$$의 실근을$$\\alpha$$라 할 때,$$30 \\alpha$$의 값을 구하시오.",
        choices: [],
        answer: "$$20$$",
      },
      {
        question:
          "$$2^{2017}$$과 가장 비슷한 값을 고르시오. (단,$$\\log_{10} 2 = 0.301 \\cdots$$)",
        choices: [
          "$$10^{27}$$",
          "$$10^{201}$$",
          "$$10^{301}$$",
          "$$10^{607}$$",
          "$$10^{903}$$",
        ],
        answer: "④",
      },
    ],
    32: [
      {
        question: "다음 두 점 사이의 거리를 구하시오.",
        choices: [
          "$$(0,0), (1,1)$$",
          "$$(2,3), (5,1)$$",
          "$$(1,2), (4,5)$$",
          "$$(3,3), (5,5)$$",
        ],
        answer:
          "$$\\sqrt{2}$$, $$\\sqrt{13}$$, $$3 \\sqrt{2}$$, $$2 \\sqrt{2}$$",
      },
      {
        question: "점$$(1,2)$$와 일차함수$$y = x - 1$$의 거리는?",
        choices: [],
        answer: "$$\\sqrt{2}$$",
      },
    ],
    33: [
      {
        question:
          "점$$(-1,1)$$을 중심으로 하고 반지름의 길이가$$2$$인 원의 방정식은?",
        choices: [],
        answer: "$$$(x + 1)^2 + (y - 1)^2 = 4$$",
      },
      {
        question: "다음 중 반지름이 가장 큰 원은?",
        choices: [
          "$$x^2 + y^2 = 8$$",
          "$$(x - 1)^2 + (y - 2)^2 = 3^2$$",
          "$$x^2 + y^2 + 4x + 8y = 0$$",
          "$$x^2 + y^2 - 2x + 6y - 6 = 0$$",
        ],
        answer: "③",
      },
      {
        question:
          "원$$x^2 + y^2 - 6x - 8y - 3 = 0$$위의 점$$A$$와 원점$$O$$에 대하여 선분$$OA$$길이의 최댓값과 최솟값을 각각$$M, m$$이라 할 때,$$M + m$$의 값은?",
        choices: [],
        answer: "$$4 \\sqrt{7}$$",
      },
    ],
    42: [
      {
        question:
          "다음을 계산하시오:$$\\sin \\left( \\frac{2\\pi}{3} \\right)$$",
        choices: [],
        answer: "$$\\frac{\\sqrt{3}}{2}$$",
      },
      {
        question:
          "다음을 계산하시오:$$\\cos \\left( \\frac{4\\pi}{3} \\right)$$",
        choices: [],
        answer: "$$-\\frac{1}{2}$$",
      },
      {
        question:
          "다음을 계산하시오:$$\\sec \\left( \\frac{3\\pi}{4} \\right)$$",
        choices: [],
        answer: "$$-\\sqrt{2}$$",
      },
      {
        question:
          "다음을 계산하시오:$$\\csc \\left( \\frac{5\\pi}{6} \\right)$$",
        choices: [],
        answer: "$$-2$$",
      },
      {
        question:
          "다음을 계산하시오:$$\\sin \\left( \\frac{\\pi}{2} - \\theta \\right)$$",
        choices: [],
        answer: "$$\\cos \\theta$$",
      },
      {
        question: "다음을 계산하시오:$$\\cos (\\pi + \\theta)$$",
        choices: [],
        answer: "$$-\\cos \\theta$$",
      },
      {
        question:
          "다음 주어진 삼각방정식$$\\sqrt{3} \\sin x + \\cos x = \\sqrt{2}$$의 해를 구하시오. (단,$$0 \\leq x \\leq \\frac{\\pi}{2}$$)",
        choices: [],
        answer: "$$x = \\frac{\\pi}{12}$$",
      },
      {
        question:
          "함수$$y = 3 \\sin x - 2 \\cos \\left( x - \\frac{\\pi}{6} \\right) + 1$$의 최댓값을$$M$$, 최솟값을$$m$$이라 할 때,$$M - m$$의 값은?",
        choices: [],
        answer: "$$2 \\sqrt{7}$$",
      },
      {
        question:
          "$$\\tan \\alpha = -\\frac{3}{4}$$일 때,$$\\sin 2\\alpha, \\cos 2\\alpha, \\tan 2\\alpha$$의 값은? (단,$$\\frac{3\\pi}{2} < \\alpha < 2\\pi$$)",
        choices: [],
        answer:
          "$$\\sin 2\\alpha = \\frac{24}{25}, \\cos 2\\alpha = \\frac{7}{25}, \\tan 2\\alpha = -\\frac{24}{7}$$",
      },
      {
        question:
          "$$\\sin \\alpha = -\\frac{4}{5} \\quad \\left( \\pi < \\alpha < \\frac{3}{2} \\pi \\right)$$일 때,$$\\tan \\frac{\\alpha}{2}$$의 값을 구하시오.",
        choices: [],
        answer: "$$-2$$",
      },
    ],
    43: [
      {
        question:
          "다음을 계산하시오:$$\\sin^{-1} \\left( \\frac{1}{2} \\right)$$",
        choices: [],
        answer: "$$\\frac{\\pi}{6}$$",
      },
      {
        question:
          "다음을 계산하시오:$$\\cos^{-1} \\left( -\\frac{1}{2} \\right)$$",
        choices: [],
        answer: "$$- \\frac{1}{2}$$",
      },
      {
        question:
          "다음을 계산하시오:$$\\tan^{-1} \\left( -\\frac{1}{\\sqrt{3}} \\right)$$",
        choices: [],
        answer: "$$-\\frac{\\pi}{6}$$",
      },
      {
        question: "다음을 계산하시오:$$\\sin^{-1} (0)$$",
        choices: [],
        answer: "$$0$$",
      },
      {
        question: "다음을 계산하시오:$$\\cos^{-1} (0)$$",
        choices: [],
        answer: "$$\\frac{\\pi}{2}$$",
      },
      {
        question: "다음을 계산하시오:$$\\sec^{-1} (2)$$",
        choices: [],
        answer: "$$\\frac{\\pi}{3}$$",
      },
      {
        question: "다음을 계산하시오:$$\\csc^{-1} (\\sqrt{2})$$",
        choices: [],
        answer: "$$\\frac{\\pi}{4}$$",
      },
      {
        question:
          "다음을 계산하시오:$$\\cos \\left( \\tan^{-1} \\frac{2}{3} \\right)$$",
        choices: [],
        answer: "$$\\frac{3}{\\sqrt{13}}$$",
      },
      {
        question:
          "다음을 계산하시오:$$\\tan \\left( \\sin^{-1} \\frac{2}{5} \\right)$$",
        choices: [],
        answer: "$$\\frac{2}{\\sqrt{21}}$$",
      },
      {
        question:
          "다음을 계산하시오:$$\\sin^{-1} \\left( \\sin \\frac{2\\pi}{3} \\right)$$",
        choices: [],
        answer: "$$\\frac{\\pi}{3}$$",
      },
      {
        question:
          "다음을 계산하시오:$$\\cos^{-1} \\left( \\cos \\left( -\\frac{\\pi}{2} \\right) \\right)$$",
        choices: [],
        answer: "$$\\frac{\\pi}{2}$$",
      },
      {
        question:
          "다음을 계산하시오:$$\\sin \\left( 2\\cos^{-1} \\frac{1}{3} \\right)$$",
        choices: [],
        answer: "$$\\frac{4 \\sqrt{2}}{9}$$",
      },
      {
        question:
          "다음을 계산하시오:$$\\cos \\left( 2\\sin^{-1} \\frac{5}{13} \\right)$$",
        choices: [],
        answer: "$$\\frac{119}{169}$$",
      },
      {
        question:
          "다음을 계산하시오:$$\\sin \\left( \\cos^{-1} \\frac{1}{5} \\right) + \\tan \\left( \\cos^{-1} \\frac{1}{5} \\right)$$",
        choices: [],
        answer: "$$\\frac{12 \\sqrt{6}}{5}$$",
      },
      {
        question:
          "다음을 계산하시오:$$\\sin^{-1} \\left( \\frac{4}{5} \\right) + \\cos^{-1} \\left( \\frac{4}{5} \\right)$$",
        choices: [],
        answer: "$$\\frac{\\pi}{2}$$",
      },
      {
        question:
          "다음을 계산하시오:$$\\tan^{-1} \\frac{1}{2} + \\cot^{-1} \\frac{1}{2}$$",
        choices: [],
        answer: "$$\\frac{\\pi}{2}$$",
      },
      {
        question: "$$f(x) = \\sin^{-1} (x^2 - 1)$$의 정의역을 구하여라.",
        choices: [],
        answer: "$$- \\sqrt{2} \\leq x \\leq \\sqrt{2}$$",
      },
    ],
    47: [
      {
        question: "다음을 계산하시오:$$\\tanh(1)$$의 값은?",
        choices: [],
        answer: "$$\\frac{e^{2}-1}{e^{2}+1}$$",
      },
      {
        question: "$$e^{2x} = 3$$일 때,$$\\sinh 4x$$의 값은?",
        choices: [],
        answer: "$$\\frac{40}{9}$$",
      },
      {
        question:
          "$$e^x \\sinh x = 2$$일 때,$$\\operatorname{sech} 2x$$의 값은?",
        choices: [],
        answer: "$$\\frac{5}{13}$$",
      },
      {
        question:
          "$$\\ln (\\sinh x + \\cosh x) + \\ln (\\cosh x - \\sinh x)$$을 간단히 하면?",
        choices: [],
        answer: "$$0$$",
      },
      {
        question:
          "$$\\ln (e \\cosh x + e \\sinh x) + \\ln (e \\cosh x - e \\sinh x)$$의 값은?",
        choices: [],
        answer: "$$2$$",
      },
      {
        question:
          "$$(\\cosh x + \\sinh x)^2 + (\\cosh x - \\sinh x)^2$$을 간단히 하면?",
        choices: [],
        answer: "$$e^{2x} + e^{-2x}$$",
      },
      {
        question: "$$\\sinh^{-1} \\left( \\frac{1}{2} \\right)$$의 값은?",
        choices: [],
        answer: "$$\\ln \\left( \\frac{1+ \\sqrt{5}}{2} \\right)$$",
      },
      {
        question:
          "실수 전체의 집합에서 정의된 함수$$f(x) = \\frac{e^x + e^{-x}}{2}$$의 역함수를 구하면?",
        choices: [],
        answer: "$$cosh^{-1} x = \\ln(x+ \\sqrt{x^{2}-1})$$",
      },
    ],
    48: [
      {
        question:
          "$$\\tan x = \\frac{12}{5}$$일 때,$$\\sin x + \\cos x$$의 값은? (단,$$x$$는 예각)",
        choices: [
          "$$\\frac{13}{5}$$",
          "$$\\frac{17}{13}$$",
          "$$\\frac{1}{5}$$",
          "$$5$$",
        ],
        answer: "②",
      },
      {
        question:
          "$$\\frac{\\sin \\theta}{1 - \\cos \\theta} + \\frac{1 - \\cos \\theta}{\\sin \\theta}$$를 간단히 하면?",
        choices: [
          "$$-2 \\csc \\theta$$",
          "$$2 \\csc \\theta$$",
          "$$2 \\sec \\theta$$",
          "$$2 \\sin \\theta$$",
        ],
        answer: "②",
      },
      {
        question:
          "$$\\tan \\alpha = \\frac{1}{2}, \\quad \\tan \\beta = \\frac{1}{3}$$일 때,$$\\tan (\\alpha + \\beta)$$의 값은?",
        choices: [
          "$$-\\frac{5}{6}$$",
          "$$\\frac{5}{7}$$",
          "$$1$$",
          "$$\\frac{13}{6}$$",
        ],
        answer: "③",
      },
      {
        question:
          "$$x = a \\sec \\theta, \\quad y = b \\tan \\theta$$로 표현되는 평면곡선을 대수적 함수로 표현하면?",
        choices: [
          "$$\\frac{x^2}{a^2} + \\frac{y^2}{b^2} = 1$$",
          "$$\\frac{2x^2}{a^2} + \\frac{2y^2}{b^2} = 1$$",
          "$$\\frac{x^2}{a^2} - \\frac{y^2}{b^2} = 1$$",
          "$$\\frac{2x^2}{a^2} - \\frac{2y^2}{b^2} = 1$$",
        ],
        answer: "③",
      },
    ],
    49: [
      {
        question:
          "$$\\tan \\frac{\\alpha}{2} = t$$일 때,$$\\sin \\alpha$$를$$t$$의 함수로 나타내시오.",
        choices: [
          "$$\\frac{2}{1 - t^2}$$",
          "$$\\frac{2t}{1 - t^2}$$",
          "$$\\frac{2}{1 + t^2}$$",
          "$$\\frac{2t}{1 + t^2}$$",
        ],
        answer: "④",
      },
      {
        question: "$$\\sin 2\\alpha = t$$라고 할 때,$$\\sin 4\\alpha$$의 값은?",
        choices: [
          "$$2t \\sqrt{1 - t^2}$$",
          "$$t \\sqrt{1 + t^2}$$",
          "$$\\frac{2t}{\\sqrt{1 - t^2}}$$",
          "$$\\frac{4t}{\\sqrt{1 - t^2}}$$",
        ],
        answer: "①",
      },
      {
        question: "다음 중$$\\sin x$$와 값이 일치하는 함수는?",
        choices: [
          "$$\\sin (-x)$$",
          "$$\\sin \\left( x + \\frac{\\pi}{2} \\right)$$",
          "$$\\sin (\\pi + x)$$",
          "$$\\sin (\\pi - x)$$",
        ],
        answer: "④",
      },
      {
        question: "다음 중 틀린 것은? (단,$$0 < \\theta < \\frac{\\pi}{2}$$)",
        choices: [
          "$$\\sin (\\pi + \\theta) = -\\sin \\theta$$",
          "$$\\sin (3\\pi - \\theta) = \\sin \\theta$$",
          "$$\\cos \\left( \\frac{\\pi + \\theta}{2} \\right) = -\\sin \\theta$$",
          "$$\\cos \\left( \\frac{3\\pi - \\theta}{2} \\right) = -\\sin \\frac{\\theta}{2}$$",
        ],
        answer: "③",
      },
    ],
    50: [
      {
        question: "다음 중$$\\cos \\left( \\frac{x}{2} \\right)$$와 다른 것은?",
        choices: [
          "$$\\cos \\left( -\\frac{x}{2} \\right)$$",
          "$$\\sin \\left( \\frac{\\pi - x}{2} \\right)$$",
          "$$\\sin \\left( \\frac{\\pi + x}{2} \\right)$$",
          "$$\\sin \\left( -\\pi + \\frac{x}{2} \\right)$$",
        ],
        answer: "④",
      },
      {
        question:
          "$$\\theta = \\sin^{-1} \\left( \\frac{3}{5} \\right)$$일 때,$$\\tan \\theta$$의 값은?",
        choices: [
          "$$\\frac{3}{4}$$",
          "$$1$$",
          "$$\\frac{5}{4}$$",
          "$$\\frac{5}{3}$$",
        ],
        answer: "①",
      },
      {
        question:
          "함수$$f(x) = 3 \\sin x + a \\cos x$$의 최댓값이$$5$$일 때$$a$$의 값은? (단,$$a \\geq 0$$)",
        choices: ["$$1$$", "$$\\sqrt{2}$$", "$$2$$", "$$4$$"],
        answer: "④",
      },
      {
        question:
          "함수$$f(x) = \\sqrt{3} \\sin x + \\cos x$$는$$x = \\alpha$$일 때 최댓값이다. 이때,$$\\cos \\alpha$$의 값은?",
        choices: [
          "$$\\frac{1}{2}$$",
          "$$\\frac{\\sqrt{2}}{2}$$",
          "$$\\frac{\\sqrt{3}}{2}$$",
          "$$1$$",
        ],
        answer: "①",
      },
    ],
    52: [
      {
        question:
          "$$\\cos \\left( \\sin^{-1} \\left( -\\frac{1}{4} \\right) \\right)$$의 값은?",
        choices: [
          "$$-\\frac{\\sqrt{15}}{4}$$",
          "$$\\frac{\\sqrt{15}}{4}$$",
          "$$-\\frac{\\sqrt{3}}{4}$$",
          "$$\\frac{\\sqrt{3}}{4}$$",
        ],
        answer: "②",
      },
      {
        question:
          "$$\\sin \\left( \\cos^{-1} \\left( -\\frac{3}{5} \\right) \\right)$$의 값은?",
        choices: [
          "$$-\\frac{4}{5}$$",
          "$$-\\frac{3}{5}$$",
          "$$\\frac{3}{5}$$",
          "$$\\frac{4}{5}$$",
        ],
        answer: "④",
      },
      {
        question:
          "$$\\tan \\left( \\tan^{-1} 11 - \\tan^{-1} 9 \\right)$$의 값은?",
        choices: [
          "$$\\frac{7}{100}$$",
          "$$-\\frac{7}{9}$$",
          "$$\\frac{2}{3}$$",
          "$$\\frac{1}{50}$$",
        ],
        answer: "④",
      },
      {
        question:
          "$$\\theta = \\cos^{-1} \\left( \\frac{3}{5} \\right) + \\cos^{-1} \\left( -\\frac{12}{13} \\right)$$일 때,$$\\sin \\theta$$의 값은?",
        choices: [
          "$$-\\frac{16}{65}$$",
          "$$\\frac{16}{65}$$",
          "$$-\\frac{33}{65}$$",
          "$$\\frac{33}{65}$$",
        ],
        answer: "③",
      },
    ],
    53: [
      {
        question:
          "$$\\tan^{-1} \\left( \\frac{1}{2} \\right) + \\tan^{-1} (\\alpha) = \\frac{\\pi}{4}$$를 만족하는$$\\alpha$$를 구하면?",
        choices: [
          "$$\\frac{4}{5}$$",
          "$$\\frac{1}{3}$$",
          "$$\\frac{2}{3}$$",
          "$$-\\frac{1}{2}$$",
        ],
        answer: "②",
      },
      {
        question:
          "방정식$$x + 1 = 2 \\sin \\left( 2 \\tan^{-1} x \\right)$$의 모든 해를 모두 곱한 값은?",
        choices: ["$$-1 - \\sqrt{2}$$", "$$-1$$", "$$1$$", "$$1 + \\sqrt{2}$$"],
        answer: "②",
      },
      {
        question:
          "$$-1 \\leq x \\leq 1$$일 때,$$y = \\sin (\\cos^{-1} x)$$를 대수함수로 나타내면?",
        choices: [
          "$$\\sqrt{1 + x}$$",
          "$$1 - x$$",
          "$$\\sqrt{1 + x^2}$$",
          "$$\\sqrt{1 - x^2}$$",
        ],
        answer: "④",
      },
      {
        question:
          "$$0 \\leq x \\leq 1$$인 범위에서$$\\cos \\left( \\sin^{-1} (-\\sqrt{1 - x}) \\right)$$를 간단히 하면?",
        choices: [
          "$$\\sqrt{x}$$",
          "$$-\\sqrt{x}$$",
          "$$\\sqrt{1 - x}$$",
          "$$-\\frac{\\sqrt{x}}{2}$$",
        ],
        answer: "①",
      },
    ],
    54: [
      {
        question:
          "모든 실수$$x$$에서 정의된 함수$$f(x) = \\arccos (\\cos x)$$에 대하여$$f(x + \\pi)$$를 구하면? <br> (단,$$\\arccos 1 = 0$$)",
        choices: [
          "$$\\pi - f(x)$$",
          "$$\\pi - x$$",
          "$$\\pi + f(x)$$",
          "$$-x$$",
          "$$\\pi + x$$",
        ],
        answer: "①",
      },
      {
        question:
          "다음 중$$\\cos \\left[ 2 \\cos^{-1} \\left( \\frac{4}{5} \\right) \\right] - \\sin \\left( \\cos^{-1} \\frac{4}{5} \\right)$$와 같은 값은?",
        choices: [
          "$$\\frac{2}{5}$$",
          "$$\\frac{4}{25}$$",
          "$$-\\frac{2}{5}$$",
          "$$-\\frac{8}{25}$$",
        ],
        answer: "④",
      },
      {
        question: "$$\\sin (\\sin^{-1} x) = x$$가 성립하는$$x$$의 범위는?",
        choices: [
          "모든 실수",
          "모든 양의 실수",
          "모든 음의 실수",
          "$$-1 < x < 1$$",
          "$$-1 \\leq x \\leq 1$$",
        ],
        answer: "⑤",
      },
    ],
    55: [
      {
        question: "함수$$f(x) = \\sinh 2x$$의 함수값$$f(\\ln 2)$$은?",
        choices: [
          "$$\\frac{3}{4}$$",
          "$$\\frac{5}{4}$$",
          "$$\\frac{15}{8}$$",
          "$$\\frac{17}{8}$$",
        ],
        answer: "③",
      },
      {
        question: "$$\\cosh (\\ln 2)$$의 값을 구하면?",
        choices: [
          "$$\\frac{1}{4}$$",
          "$$\\frac{1}{2}$$",
          "$$\\frac{3}{4}$$",
          "$$1$$",
          "$$\\frac{5}{4}$$",
        ],
        answer: "⑤",
      },
      {
        question: "$$\\tanh x = \\frac{1}{3}$$일 때,$$8 \\cosh 4x$$의 값은?",
        choices: [
          "$$\\frac{8}{\\sqrt{10}}$$",
          "$$\\frac{24}{\\sqrt{10}}$$",
          "$$15$$",
          "$$17$$",
        ],
        answer: "④",
      },
      {
        question: "$$\\sinh x = \\frac{1}{\\sqrt{3}}$$을 만족하는$$x$$의 값은?",
        choices: [
          "$$\\ln \\sqrt{2}$$",
          "$$\\ln 2$$",
          "$$\\ln \\sqrt{3}$$",
          "$$\\ln 3$$",
        ],
        answer: "③",
      },
    ],
    56: [
      {
        question:
          "$$e^{2x} = 2$$일 때,$$\\frac{e^{3x} + e^{-3x}}{e^{2x} - e^{-3x}}$$의 값을 구하면?",
        choices: [
          "$$\\frac{27}{17}$$",
          "$$\\frac{9}{2}$$",
          "$$\\frac{18}{31}$$",
          "$$\\frac{32}{9}$$",
        ],
        answer: "③",
      },
      {
        question: "다음 중$$\\tanh (\\sinh^{-1} x)$$와 같은 함수는?",
        choices: [
          "$$\\sqrt{1 + x^2}$$",
          "$$\\frac{1}{\\sqrt{1 + x^2}}$$",
          "$$\\frac{x}{\\sqrt{1 + x^2}}$$",
          "$$\\frac{x}{1 + x^2}$$",
        ],
        answer: "③",
      },
      {
        question: "$$\\operatorname{sech}^{-1} \\frac{1}{\\sqrt{3}}$$의 값은?",
        choices: [
          "$$\\ln \\sqrt{2}$$",
          "$$\\ln (\\sqrt{2} + \\sqrt{3})$$",
          "$$\\ln \\sqrt{3}$$",
          "$$\\ln \\sqrt{6}$$",
        ],
        answer: "②",
      },
      {
        question: "다음은 쌍곡선함수의 성질이다. 다음 중 옳은 것은?",
        choices: [
          "$$\\ln (\\sinh x + \\cosh x) + \\ln (\\cosh x - \\sinh x) = 4x$$",
          "$$\\sinh 2x = 2 \\sinh x \\cosh x$$",
          "$$\\cosh (x + y) = \\cosh x \\cosh y - \\sinh x \\sinh y$$",
          "$$\\cosh^2 x + \\sinh^2 x = 1$$",
        ],
        answer: "②",
      },
    ],
    57: [
      {
        question: "다음 중$$\\sin x$$와 같은 것은 모두 몇 개인가?",
        example: [
          "(가)$$\\sin (\\pi - x)$$\n\n(나)$$\\cos \\left( \\frac{3\\pi}{2} + x \\right)$$\n\n(다)$$\\sin (2\\pi - x)$$\n\n(라)$$\\cos \\left( \\frac{\\pi}{2} + x \\right)$$",
        ],
        choices: ["1개", "2개", "3개", "4개"],
        answer: "②",
      },
      {
        question:
          "다음 보기 안의 등식 가운데 항상 성립하는 것을 모두 고른 것은?",
        example: [
          "(가)$$\\sin \\left( x - \\frac{3\\pi}{2} \\right) = \\cos x$$\n\n(나)$$\\sin (\\pi - x) = -\\sin x$$\n\n(다)$$\\cos (x - \\pi) = \\sin \\left( \\frac{\\pi}{2} + x \\right)$$",
        ],
        choices: ["(가)", "(나)", "(나), (다)", "(가), (다)"],
        answer: "①",
      },
      {
        question:
          "$$\\sin \\alpha = -\\frac{4}{5} \\left( \\pi < \\alpha < \\frac{3}{2} \\pi \\right)$$일 때,$$\\tan \\frac{\\alpha}{2}$$의 값을 구하면?",
        choices: [
          "$$-2$$",
          "$$-\\frac{4}{3}$$",
          "$$-\\frac{3}{4}$$",
          "$$-\\frac{1}{2}$$",
        ],
        answer: "①",
      },
    ],
    58: [
      {
        question:
          "방정식$$\\sin \\theta = \\cos^2 \\theta$$를 만족시키는$$\\theta$$에 대하여 함수$$f(\\theta) = \\frac{2 - \\sin \\theta}{\\sin \\theta + 1} - \\frac{\\sin \\theta + 2}{1 - \\sin \\theta}$$의 값을 구하면?",
        choices: ["$$-9$$", "$$-6$$", "$$0$$", "$$2$$", "$$4$$"],
        answer: "②",
      },
      {
        question:
          "함수$$f(x) = (x - \\sqrt{1 - x^2}) \\arccos x$$에 대하여$$f \\left( \\cos \\frac{4}{3} \\pi \\right)$$를 구하면?",
        choices: [
          "$$\\frac{(-1 + \\sqrt{3}) \\pi}{3}$$",
          "$$-\\frac{(1 + \\sqrt{3}) \\pi}{3}$$",
          "$$\\frac{2(-1 + \\sqrt{3}) \\pi}{3}$$",
          "$$-\\frac{2(1 + \\sqrt{3}) \\pi}{3}$$",
          "$$\\frac{2(1 + \\sqrt{3}) \\pi}{3}$$",
        ],
        answer: "②",
      },
      {
        question: "다음 중, 옳지 않은 것은?",
        choices: [
          "$$\\sin^{-1} \\left( -\\frac{1}{2} \\right) = -\\sin^{-1} \\left( \\frac{1}{2} \\right)$$",
          "$$\\tan^{-1} (-2) = -\\tan^{-1} (2)$$",
          "$$\\cos^{-1} \\left( -\\frac{1}{2} \\right) = \\pi + \\cos^{-1} \\left( \\frac{1}{2} \\right)$$",
          "$$\\cos^{-1} \\left( \\frac{1}{2} \\right) = \\frac{\\pi}{2} - \\sin^{-1} \\left( \\frac{1}{2} \\right)$$",
        ],
        answer: "③",
      },
      {
        question: "다음 보기의 등식 중 항상 성립하는 것을 모두 고른 것은?",
        example: [
          "(가)$$\\sin^{-1} (\\cos x) = \\frac{\\pi}{2} - x$$(단,$$0 \\leq x \\leq \\frac{\\pi}{2}$$)<br> (나)$$\\tan^{-1} x + \\tan^{-1} \\frac{1}{x} = \\frac{\\pi}{2}$$(단,$$x > 0$$)<br> (다)$$\\sin^{-1} (\\sin 1) = 1$$<br> (라)$$\\tan^{-1} \\left( \\tan \\frac{2\\pi}{3} \\right) = \\frac{2\\pi}{3}$$",
        ],
        choices: [
          "(가), (다)",
          "(나), (라)",
          "(가), (나), (다)",
          "(가), (나), (다), (라)",
        ],
        answer: "③",
      },
    ],
    59: [
      {
        question:
          "아래 값을 구하라.\n\n$$\\sin \\left( \\cos^{-1} \\left( -\\frac{1}{3} \\right) \\right)$$",
        choices: [
          "$$-\\frac{2\\sqrt{2}}{3}$$",
          "$$-\\frac{\\sqrt{2}}{3}$$",
          "$$-\\frac{1}{3}$$",
          "$$\\frac{\\sqrt{2}}{3}$$",
          "$$\\frac{2\\sqrt{2}}{3}$$",
        ],
        answer: "⑤",
      },
      {
        question: "$$\\cos (-2 \\sec^{-1} 3)$$의 값은?",
        choices: [
          "$$-\\frac{1}{9}$$",
          "$$-\\frac{1}{3}$$",
          "$$-\\frac{7}{9}$$",
          "$$\\frac{1}{3}$$",
        ],
        answer: "③",
      },
      {
        question:
          "함수$$f(x)$$가 실수$$0 < x < \\pi$$에 대하여$$f(\\cot x) = x$$를 만족할 때,$$f \\left( \\frac{1}{3} \\right) + f(1) + f(3)$$의 값은?",
        choices: [
          "$$\\frac{1}{2} \\pi$$",
          "$$\\frac{2}{3} \\pi$$",
          "$$\\frac{3}{4} \\pi$$",
          "$$\\frac{4}{5} \\pi$$",
          "$$\\frac{5}{6} \\pi$$",
        ],
        answer: "③",
      },
      {
        question:
          "함수$$f: \\left( -\\frac{\\pi}{2}, \\frac{\\pi}{2} \\right) \\to \\mathbb{R}$$,$$f(x) = \\tan x$$의 역함수를$$g(x)$$라고 할 때,$$g \\left( \\frac{1}{2} \\right) + g \\left( \\frac{1}{3} \\right)$$의 값을 구하면?\n\n(단,$$\\mathbb{R}$$는 실수 전체의 집합이다.)",
        choices: [
          "$$-\\frac{\\pi}{2}$$",
          "$$-\\frac{\\pi}{4}$$",
          "$$0$$",
          "$$\\frac{\\pi}{4}$$",
          "$$\\frac{\\pi}{2}$$",
        ],
        answer: "④",
      },
    ],
    60: [
      {
        question: "$$\\cot^{-1} (\\tan 1)$$의 값은?",
        choices: [
          "$$\\frac{\\pi}{2} - 1$$",
          "$$\\frac{\\pi}{2}$$",
          "$$1$$",
          "$$\\frac{\\pi}{4} + 1$$",
        ],
        answer: "①",
      },
      {
        question:
          "함수$$f(x) = \\sin^{-1} \\left( \\frac{x - 1}{x + 1} \\right) \\quad (x \\geq 0)$$와 함수$$g(x) = 2 \\tan^{-1} \\sqrt{x} \\quad (x \\geq 0)$$에 대하여$$g(x) - f(x)$$와 같은 것은?",
        choices: [
          "$$-\\frac{\\pi (x - 1)}{2 (x + 1)}$$",
          "$$-\\frac{\\pi (x + 1)}{2 (x - 1)}$$",
          "$$\\frac{\\pi}{2}$$",
          "$$-\\frac{\\pi (x - 1)^2}{2 (x + 1)^2}$$",
          "$$-\\frac{\\pi (x + 1)^2}{2 (x - 1)^2}$$",
        ],
        answer: "③",
      },
      {
        question:
          "음이 아닌 모든 실수$$x$$에 대하여 다음의 수식$$\\sin^{-1} \\left( \\frac{x - 1}{x + 1} \\right) = a \\tan^{-1} (x^b) + c$$를 만족시키는 상수$$a, b, c$$를 구하고$$2b - ac$$의 값을 구하시오.\n\n(단,$$\\sin^{-1}: [-1, 1] \\to \\left[ -\\frac{\\pi}{2}, \\frac{\\pi}{2} \\right]$$,$$\\tan^{-1}: (-\\infty, \\infty) \\to (-1, 1)$$이다.)",
        choices: [
          "$$-1 + \\frac{\\pi}{2}$$",
          "$$-2 + \\frac{\\pi}{2}$$",
          "$$\\pi$$",
          "$$1 + \\pi$$",
          "$$2 + \\pi$$",
        ],
        answer: "④",
      },
    ],
    61: [
      {
        question: "다음 중 옳지 않은 것을 고르시오.",
        choices: [
          "$$-1 \\leq x \\leq 0$$이면$$\\sin (\\cos^{-1} x) \\leq 0$$이다.",
          "$$0 \\leq x \\leq 1$$이면$$\\sin (\\cos^{-1} x) \\geq 0$$이다.",
          "$$\\tan^{-1} x$$는 모든 실수$$x$$에 대하여 잘 정의된다.",
          "$$\\sin^{-1} \\left( \\sin \\frac{\\pi}{11} \\right) = \\frac{\\pi}{11}$$가 성립한다.",
          "모든 실수$$x$$에 대하여$$\\sin (\\sin^{-1} (\\sin x)) = \\sin x$$가 성립한다.",
        ],
        answer: "①",
      },
      {
        question:
          "$$\\ln (2 \\cosh x + 2 \\sinh x) + \\ln (2 \\cosh x - 2 \\sinh x)$$와 같은 값은?",
        choices: ["$$0$$", "$$2x$$", "$$-4x$$", "$$2 \\ln 2$$"],
        answer: "④",
      },
      {
        question:
          "실수 전체의 집합에서 정의된 함수$$f(x) = \\operatorname{sech} x$$의 역함수는?",
        choices: [
          "$$\\ln (x + \\sqrt{x^2 + 1})$$",
          "$$\\ln (x + \\sqrt{x^2 - 1})$$",
          "$$\\frac{1}{2} \\ln \\frac{1 + x}{1 - x}$$",
          "$$\\ln \\frac{1 + \\sqrt{1 - x^2}}{x}$$",
          "$$\\frac{e^x + e^{-x}}{2}$$",
        ],
        answer: "④",
      },
    ],
    62: [
      {
        question:
          "$$f(x) = \\cosh (\\ln (\\sec x + \\tan x))$$일 때,$$f \\left( \\frac{\\pi}{3} \\right)$$의 값은?",
        choices: [
          "$$\\frac{1}{2}$$",
          "$$\\frac{\\sqrt{3}}{2}$$",
          "$$\\frac{2 \\sqrt{3}}{3}$$",
          "$$\\sqrt{2}$$",
          "$$2$$",
        ],
        answer: "⑤",
      },
      {
        question:
          "$$x = \\ln (\\sec \\theta + \\tan \\theta)$$일 때,$$\\sec \\theta$$를 바르게 구한 것은?",
        choices: [
          "$$\\sinh x$$",
          "$$\\cosh x$$",
          "$$\\tanh x$$",
          "$$\\operatorname{sech} x$$",
        ],
        answer: "②",
      },
      {
        question: "$$x = \\ln (\\sec y + \\tan y)$$일 때,$$\\cosh x$$의 값은?",
        choices: [
          "$$\\sin y$$",
          "$$\\tan y$$",
          "$$\\cot y$$",
          "$$\\sec y$$",
          "$$\\csc y$$",
        ],
        answer: "④",
      },
      {
        question: "$$\\cosh (\\sinh^{-1} (1))$$의 값을 구하면?",
        choices: ["$$\\sqrt{2}$$", "$$1$$", "$$e$$", "$$\\sqrt{e}$$"],
        answer: "①",
      },
    ],
    63: [
      {
        question: "다음 중 옳은 것을 모두 고르면?",
        example: [
          "$$\\text{ㄱ. 모든 실수 } x \\text{에 대하여, } \\tan^{-1}x + \\cot^{-1}x = \\frac{\\pi}{2}$$",
          "$$\\text{ㄴ. } 0 < x < 1 \\text{인 임의의 실수 } x \\text{에 대하여, } 2\\sin^{-1}x = \\cos^{-1}(1 - 2x^2)$$",
          "$$\\text{ㄷ. } x > 1 \\text{인 임의의 실수 } x \\text{에 대하여 } \\cosh^{-1}x = \\ln(x + \\sqrt{x^2 - 1})$$",
          "$$\\text{ㄹ. } |x| < 1 \\text{인 임의의 실수 } x \\text{에 대하여 } \\tanh^{-1}x = \\ln\\left(\\frac{1 + x}{1 - x}\\right)$$",
        ],
        choices: [
          "$$\\text{ㄱ, ㄴ}$$",
          "$$\\text{ㄷ, ㄹ}$$",
          "$$\\text{ㄱ, ㄴ, ㄷ}$$",
          "$$\\text{ㄴ, ㄷ, ㄹ}$$",
        ],
        answer: "③",
      },
      {
        question: "다음 중 잘못된 명제는 모두 몇 개인가?",
        example: [
          "$$\\text{가. } \\sinh^{-1}x = \\ln(x + \\sqrt{x^2 + 1})$$",
          "$$\\text{나. } \\cosh^2x - \\sinh^2x = 1$$",
          "$$\\text{다. } \\cosh(2\\ln x) = \\frac{x^4 + 1}{2x^2}$$",
          "$$\\text{라. } \\cosh 3x - \\sinh 3x = e^{-3x}$$",
          "$$\\text{마. } (\\cosh x + \\sinh x)^2 = e^{2x}$$",
        ],
        choices: ["없음", "$$1$$", "$$2$$", "$$3$$"],
        answer: "②",
      },
      {
        question: "다음 중 옳은 것을 모두 몇 개인가?",
        example: [
          "$$\\text{가. } \\sinh(-x) = -\\sinh x$$",
          "$$\\text{나. } \\cosh(-x) = \\cosh x$$",
          "$$\\text{다. } \\sinh(x + y) = \\sinh x \\cosh y + \\cosh x \\sinh y$$",
          "$$\\text{라. } \\cosh(x + y) = \\cosh x \\cosh y - \\sinh x \\sinh y$$",
        ],
        choices: ["없음", "$$1$$", "$$2$$", "$$3$$"],
        answer: "③",
      },
      {
        question: "다음 중 옳은 것을 모두 몇 개인가?",
        example: [
          "$$\\text{ㄱ. } \\cosh x + \\sinh x = e^x$$",
          "$$\\text{ㄴ. } y = \\tanh x \\text{의 정의역은 모든 실수이고, 치역은 } \\left(-\\frac{\\pi}{2}, \\frac{\\pi}{2}\\right)$$",
          "$$\\text{ㄷ. } 0 < x \\leq 1 \\text{일 때, } \\cosh^{-1}\\left(\\frac{1}{x}\\right) = \\operatorname{sech}^{-1}x$$",
        ],
        choices: ["없음", "$$1$$", "$$2$$", "$$3$$"],
        answer: "③",
      },
    ],
    69: [
      {
        question: "다음 미분 공식을 구하시오. $$\\frac{d}{dx} c$$",
        choices: [],
        answer: "",
      },
      {
        question: "다음 미분 공식을 구하시오. $$\\frac{d}{dx} (cx)$$",
        choices: [],
        answer: "",
      },
      {
        question: "다음 미분 공식을 구하시오. $$\\frac{d}{dx} (cx^n)$$",
        choices: [],
        answer: "",
      },
    ],
    70: [
      {
        question:
          "다음 미분 공식을 구하시오. $$\\frac{d}{dx} \\{f(x) \\pm g(x) \\pm h(x) \\pm \\cdots\\}$$",
        choices: [],
        answer: "",
      },
      {
        question: "다음 미분 공식을 구하시오. $$\\frac{d}{dx} (e^x)$$",
        choices: [],
        answer: "",
      },
      {
        question: "다음 미분 공식을 구하시오. $$\\frac{d}{dx} (a^x)$$",
        choices: [],
        answer: "",
      },
      {
        question: "다음 미분 공식을 구하시오. $$\\frac{d}{dx} \\ln|x|$$",
        choices: [],
        answer: "",
      },
      {
        question: "다음 미분 공식을 구하시오. $$\\frac{d}{dx} (\\log_a x)$$",
        choices: [],
        answer: "",
      },
      {
        question:
          "다음 미분 공식을 구하시오. $$\\frac{d}{dx} \\left( \\frac{1}{x} \\right)$$",
        choices: [],
        answer: "",
      },
      {
        question: "다음 미분 공식을 구하시오. $$\\frac{d}{dx} (\\sqrt{x})$$",
        choices: [],
        answer: "",
      },
      {
        question: "다음 미분 공식을 구하시오. $$\\frac{d}{dx} (\\sin x)$$",
        choices: [],
        answer: "",
      },
      {
        question: "다음 미분 공식을 구하시오. $$\\frac{d}{dx} (\\cos x)$$",
        choices: [],
        answer: "",
      },
      {
        question: "다음 미분 공식을 구하시오. $$\\frac{d}{dx} (\\tan x)$$",
        choices: [],
        answer: "",
      },
      {
        question: "다음 미분 공식을 구하시오. $$\\frac{d}{dx} (\\cot x)$$",
        choices: [],
        answer: "",
      },
      {
        question: "다음 미분 공식을 구하시오. $$\\frac{d}{dx} (\\sec x)$$",
        choices: [],
        answer: "",
      },
      {
        question: "다음 미분 공식을 구하시오. $$\\frac{d}{dx} (\\csc x)$$",
        choices: [],
        answer: "",
      },
      {
        question: "다음 미분 공식을 구하시오. $$\\frac{d}{dx} (\\sin^{-1} x)$$",
        choices: [],
        answer: "",
      },
      {
        question: "다음 미분 공식을 구하시오. $$\\frac{d}{dx} (\\cos^{-1} x)$$",
        choices: [],
        answer: "",
      },
    ],
    71: [
      {
        question: "다음 미분 공식을 구하시오. $$\\frac{d}{dx} (\\tan^{-1} x)$$",
        choices: [],
        answer: "",
      },
      {
        question: "다음 미분 공식을 구하시오. $$\\frac{d}{dx} (\\cot^{-1} x)$$",
        choices: [],
        answer: "",
      },
      {
        question: "다음 미분 공식을 구하시오. $$\\frac{d}{dx} (\\sec^{-1} x)$$",
        choices: [],
        answer: "",
      },
      {
        question: "다음 미분 공식을 구하시오. $$\\frac{d}{dx} (\\csc^{-1} x)$$",
        choices: [],
        answer: "",
      },
      {
        question:
          "다음 미분 공식을 구하시오. $$\\frac{d}{dx} (\\operatorname{sinh} x)$$",
        choices: [],
        answer: "",
      },
      {
        question: "다음 미분 공식을 구하시오. $$\\frac{d}{dx} (\\cosh x)$$",
        choices: [],
        answer: "",
      },
      {
        question: "다음 미분 공식을 구하시오. $$\\frac{d}{dx} (\\tanh x)$$",
        choices: [],
        answer: "",
      },
      {
        question: "다음 미분 공식을 구하시오. $$\\frac{d}{dx} (\\coth x)$$",
        choices: [],
        answer: "",
      },
      {
        question:
          "다음 미분 공식을 구하시오. $$\\frac{d}{dx} (\\operatorname{sech} x)$$",
        choices: [],
        answer: "",
      },
      {
        question:
          "다음 미분 공식을 구하시오. $$\\frac{d}{dx} (\\operatorname{csch} x)$$",
        choices: [],
        answer: "",
      },
      {
        question:
          "다음 미분 공식을 구하시오. $$\\frac{d}{dx} (\\sinh^{-1} x)$$",
        choices: [],
        answer: "",
      },
      {
        question:
          "다음 미분 공식을 구하시오. $$\\frac{d}{dx} (\\cosh^{-1} x)$$",
        choices: [],
        answer: "",
      },
      {
        question:
          "다음 미분 공식을 구하시오. $$\\frac{d}{dx} (\\tanh^{-1} x)$$",
        choices: [],
        answer: "",
      },
      {
        question:
          "다음 미분 공식을 구하시오. $$\\frac{d}{dx} (\\coth^{-1} x)$$",
        choices: [],
        answer: "",
      },
      {
        question:
          "다음 미분 공식을 구하시오. $$\\frac{d}{dx} (\\operatorname{sech}^{-1} x)$$",
        choices: [],
        answer: "",
      },
      {
        question:
          "다음 미분 공식을 구하시오. $$\\frac{d}{dx} (\\operatorname{csch}^{-1} x)$$",
        choices: [],
        answer: "",
      },
    ],
    72: [
      {
        question:
          "다음 함수$$f(x) = 8x^2 + 7e^x - 3 \\tan x + \\ln x$$의 도함수는?",
        choices: [],
        answer: "$$f'(x) = 16x + 7e^x - 3 \\sec^2 x + \\frac{1}{x}$$",
      },
      {
        question: "$$f(x) = x^2 + \\sin^{-1} x$$일 때$$f(x)$$의 도함수는?",
        choices: [],
        answer: "$$f'(x) = 2x + \\frac{1}{\\sqrt{1 - x^2}}$$",
      },
      {
        question:
          "$$f(x) = \\ln \\left( \\frac{\\sin^2 x \\tan^3 x}{\\sqrt{x}} \\right)$$에 대해$$f' \\left( \\frac{\\pi}{4} \\right)$$의 값은?",
        choices: [],
        answer: "$$8 - \\frac{2}{\\pi}$$",
      },
      {
        question:
          "$$f(x) = e^{x} \\cos x$$일 때,$$x = \\frac{\\pi}{2}$$에서 도함수는?",
        choices: [],
        answer: "$$-e^{\\frac{\\pi}{2}}$$",
      },
    ],
    73: [
      {
        question:
          "$$f(x) = \\frac{x}{\\tan^{-1} x}$$일 때,$$x = 1$$에서 도함수는?",
        choices: [],
        answer: "$$\\frac{4 \\pi - 8}{\\pi ^2}$$",
      },
      {
        question:
          "$$f(x) = \\frac{\\sqrt{x}}{1 + x^2}$$일 때,$$x = 1$$에서 도함수는?",
        choices: [],
        answer: "$$-\\frac{1}{4}$$",
      },
      {
        question: "$$f(x) = \\cos (2x + 4)$$일 때,$$x = 0$$에서 도함수는?",
        choices: [],
        answer: "$$-2 \\sin 4$$",
      },
      {
        question: "$$f(x) = \\sec (x^2)$$의 도함수는?",
        choices: [],
        answer: "$$2x \\sec (x^2) \\tan (x^2)$$",
      },
      {
        question: "$$f(x) = e^{\\tan x}$$의 도함수는?",
        choices: [],
        answer: "$$e^{\\tan x} \\sec^2 x$$",
      },
      {
        question: "$$f(x) = \\log (x^2 + 2)$$의 도함수는?",
        choices: [],
        answer: "$$\\frac{2x}{x^2 + 2}$$",
      },
      {
        question: "$$f(x) = \\ln (\\ln x)$$의 도함수는?",
        choices: [],
        answer: "$$\\frac{1}{x \\ln x}$$",
      },
      {
        question: "$$y = \\sin (x^2)$$의 도함수는?",
        choices: [],
        answer: "$$2x \\cos (x^2)$$",
      },
    ],
    74: [
      {
        question: "$$y = (x^3 - 1)^{100}$$의 도함수는?",
        choices: [],
        answer: "$$300 x^2 (x^3 - 1)^{99}$$",
      },
      {
        question: "$$y = \\ln (x \\sqrt{x^2 + 1})$$의 도함수는?",
        choices: [],
        answer: "$$\\frac{1}{x} + \\frac{x}{\\sqrt{x^2 + 1}}$$",
      },
      {
        question: "$$y = \\sqrt{\\sinh 3x}$$의 도함수는?",
        choices: [],
        answer: "$$\\frac{3 \\cosh 3x}{2 \\sqrt{\\sinh 3x}}$$",
      },
      {
        question: "$$y = \\ln (\\sec x + \\tan x)$$의 도함수는?",
        choices: [],
        answer: "$$\\sec x$$",
      },
      {
        question:
          "$$f(x) = (x^2 + x + 1)(x^2 - x + 1)$$의 $$x = 1$$에서 미분계수는?",
        choices: [],
        answer: "$$6$$",
      },
      {
        question:
          "$$f(1) = 2, f'(1) = 3, g(1) = 4, g'(1) = 5$$이고$$h(x) = g(x) \\times f(x)$$일 때$$h'(1)$$의 값은?",
        choices: [],
        answer: "$$22$$",
      },
      {
        question:
          "$$f(2) = -1, f'(2) = 4, g(2) = 1$$그리고$$g'(2) = -5$$이다.$$F(x) = f(x)/g(x)$$일 때,$$F'(2)$$의 값은?",
        choices: [],
        answer: "$$-1$$",
      },
      {
        question:
          "$$f(0) = 0, f'(0) = 2$$일 때,$$y = (f \\circ f \\circ f)(x)$$의$$x = 0$$에서의 미분계수는?",
        choices: [],
        answer: "$$8$$",
      },
    ],
    78: [
      {
        question: "$$y = x^x$$의 도함수는?",
        choices: [],
        answer: "$$e^{x \\ln x} (\\ln x + 1)$$",
      },
      {
        question: "$$y = x^{\\ln x}$$의 도함수는?",
        choices: [],
        answer: "$$\\frac{2 \\ln x}{x} e^{(\\ln x)^{2}}$$",
      },
      {
        question:
          "$$f(x) = \\frac{(x+2)^3}{x^4 (x-1)^2}$$의$$x = 2$$에서 도함수는?",
        choices: [],
        answer: "$$-13$$",
      },
      {
        question:
          "$$f(x) = 2x + \\ln x$$일 때,$$\\left(f^{-1}(2)\\right)',~ \\left(f^{-1}(2)\\right)''$$의 값은?",
        choices: [],
        answer: "$$\\frac{1}{3}, \\frac{1}{27}$$",
      },
      {
        question: "$$y^2 = 4x$$의 도함수는?",
        choices: [],
        answer: "$$\\frac{2}{y}$$",
      },
      {
        question: "$$x^2 + y^2 = 2xy$$의 도함수는?",
        choices: [],
        answer: "$$1$$",
      },
      {
        question:
          "$$x = 3 \\cos \\theta, \\quad y = 3 \\sin \\theta$$의 도함수는?",
        choices: [],
        answer: "$$- \\frac{x}{y}$$",
      },
    ],
    79: [
      {
        question: "$$y = (\\ln x)^{2x}$$의$$(e,1)$$에서 도함수는?",
        choices: [],
        answer: "$$2$$",
      },
      {
        question: "$$y = x^{\\frac{1}{x}}$$의$$(1,1)$$에서 도함수는?",
        choices: [],
        answer: "$$1$$",
      },
      {
        question: "$$x^2 + y^2 = 4$$의$$(1,√3)$$에서 도함수는?",
        choices: [],
        answer: "$$-\\frac{1}{\\sqrt{3}}$$",
      },
      {
        question: "$$x^3 - \\sin y - x^2 y - 1 = 0$$의$$(1,0)$$에서 도함수는?",
        choices: [],
        answer: "$$\\frac{3}{2}$$",
      },
      {
        question: "$$x^5 = 1 + e^y - x e^{y^2}$$의$$(1,0)$$에서 도함수는?",
        choices: [],
        answer: "$$6$$",
      },
      {
        question:
          "$$\\begin{cases} x = \\theta - \\sin \\theta \\\\ y = 1 - \\cos \\theta \\end{cases}$$의$$\\theta = \\frac{\\pi}{3}$$에서 도함수는?",
        choices: [],
        answer: "$$\\sqrt{3}$$",
      },
      {
        question:
          "$$\\begin{cases} x = \\theta + \\cos \\theta \\\\ y = \\theta - \\sin \\theta \\end{cases}$$의$$\\theta = \\frac{\\pi}{4}$$에서 도함수는?",
        choices: [],
        answer: "$$1$$",
      },
      {
        question:
          "$$\\begin{cases} x = t^2 + 2 \\\\ y = t^2 + 2t \\end{cases}$$의$$(3,3)$$에서 도함수는?",
        choices: [],
        answer: "$$2$$",
      },
    ],
    80: [
      {
        question:
          "함수$$y = \\sin (\\ln x)$$에 대해$$x = 1$$일 때,$$y'$$의 값은?",
        choices: ["1", "0", "2", "sine"],
        answer: "①",
      },
      {
        question:
          "$$g(x) = \\cos (\\sin^{-1} x)$$일 때,$$g' \\left( \\frac{\\sqrt{3}}{2} \\right)$$의 값은?",
        choices: [
          "$$-\\sqrt{3}$$",
          "$$\\frac{\\sqrt{3}}{2}$$",
          "$$\\frac{2\\pi}{3}$$",
          "$$-\\frac{\\pi}{2}$$",
        ],
        answer: "①",
      },
      {
        question: "$$f(x) = \\tan^{-1} (x^2 \\ln x)$$일 때,$$f'(e)$$의 값은?",
        choices: [
          "$$-1$$",
          "$$0$$",
          "$$\\frac{3e}{1 + e^4}$$",
          "$$\\frac{e}{1 + e^4}$$",
        ],
        answer: "③",
      },
      {
        question:
          "$$y = x^2 \\ln (\\cos x)$$일 때,$$x = \\frac{\\pi}{4}$$에서$$y'$$의 값은?",
        choices: [
          "$$-\\frac{\\pi}{2} (\\ln 2 + \\frac{\\pi}{2})$$",
          "$$-\\frac{\\pi}{4} (\\ln 2 + \\frac{\\pi}{4})$$",
          "$$\\frac{\\pi}{4} (\\ln 2 - \\frac{\\pi}{4})$$",
          "$$\\frac{\\pi}{2} (\\ln 2 + \\frac{\\pi}{2})$$",
        ],
        answer: "②",
      },
    ],
    81: [
      {
        question:
          "함수$$f(x) = \\frac{1}{x} \\tan^{-1} \\frac{1}{x}$$의 미분계수$$\\frac{d}{dx} f(-1)$$은?",
        choices: [
          "$$-\\frac{\\pi}{4} - 1$$",
          "$$-\\frac{\\pi}{4} - \\frac{1}{2}$$",
          "$$\\frac{\\pi}{4} + \\frac{1}{2}$$",
          "$$\\frac{\\pi}{4} + 1$$",
        ],
        answer: "③",
      },
      {
        question:
          "$$f(x) = (x + \\alpha) \\tan^{-1} x^{2}$$이$$f'(1) = f(1)$$을 만족할 때, 상수$$\\alpha$$의 값은?",
        choices: [
          "$$1$$",
          "$$\\frac{2}{\\pi - 2}$$",
          "$$\\frac{4}{x + 4}$$",
          "$$\\frac{4}{\\pi - 4}$$",
        ],
        answer: "④",
      },
      {
        question:
          "$$y = \\cos^2 x e^{\\sec x}$$에 대해$$x = \\frac{\\pi}{4}$$에서$$\\frac{dy}{dx}$$의 값은?",
        choices: [
          "$$0$$",
          "$$e^{\\sqrt{2}} \\left( \\frac{\\sqrt{2}}{2} - 1 \\right)$$",
          "$$e^{\\sqrt{2}} \\left( \\frac{\\sqrt{2}}{2} - \\frac{1}{2} \\right)$$",
          "$$\\frac{\\sqrt{2}}{2} e^{\\sqrt{2}}$$",
        ],
        answer: "②",
      },
      {
        question:
          "$$f'(x) = \\frac{1}{(\\ln x)^2}$$이고,$$f(e) = 1$$,$$g(x) = e^{f(x)}$$일 때,$$g'(e)$$의 값은?",
        choices: ["$$0$$", "$$1$$", "$$e$$", "$$e^2$$"],
        answer: "③",
      },
    ],
    82: [
      {
        question:
          "$$f(x) = \\frac{x \\cos x}{1 + e^x}$$에 대해$$f'(0)$$의 값은?",
        choices: ["$$1$$", "$$-1$$", "$$\\frac{1}{2}$$", "$$-\\frac{1}{4}$$"],
        answer: "③",
      },
      {
        question:
          "곡선$$y = \\frac{\\sqrt{x}}{1 + x^2}$$위의 점$$(1, \\frac{1}{2})$$에서의 접선의 기울기는?",
        choices: [
          "$$-\\frac{3}{5}$$",
          "$$-\\frac{1}{4}$$",
          "$$\\frac{1}{2}$$",
          "$$2$$",
        ],
        answer: "②",
      },
      {
        question:
          "$$f(x) = \\frac{\\sec x}{1 + \\tan x}$$의 그래프에서$$x$$축과 평행인 접선을 가지는$$x$$의 값은?",
        choices: [
          "$$\\frac{\\pi}{2}$$",
          "$$\\frac{\\pi}{6}$$",
          "$$\\frac{2\\pi}{3}$$",
          "$$\\frac{5\\pi}{4}$$",
        ],
        answer: "④",
      },
      {
        question: "$$f(x) = \\sqrt{x} (\\ln x)^3$$에서$$f'(e^2)$$의 값은?",
        choices: ["$$4e$$", "$$14e$$", "$$\\frac{8}{e}$$", "$$\\frac{16}{e}$$"],
        answer: "④",
      },
    ],
    83: [
      {
        question:
          "$$f(x) = \\tan^3 x \\sec^2 x$$에서 $$\\dfrac{df\\left(\\frac{\\pi}{3}\\right)}{dx}$$의 값은?",
        choices: ["$$204$$", "$$216$$", "$$228$$", "$$248$$"],
        answer: "②",
      },
      {
        question:
          "$$f(x) = \\sqrt{{7} + \\sqrt{x}}$$에 대하여 $$x = 4$$일 때 $$f'(x)$$의 값은?",
        choices: [
          "$$1$$",
          "$$\\frac{2}{3}$$",
          "$$\\frac{1}{8}$$",
          "$$\\frac{1}{24}$$",
        ],
        answer: "④",
      },
      {
        question:
          "함수$$f(x) = (\\arctan x)^2$$에 대하여,$$f'(-\\sqrt{3})$$의 값은?",
        choices: [
          "$$\\frac{\\pi}{6}$$",
          "$$\\frac{\\pi}{12}$$",
          "$$-\\frac{\\pi}{6}$$",
          "$$-\\frac{\\pi}{12}$$",
        ],
        answer: "③",
      },
      {
        question:
          "함수$$f(x) = \\sinh x$$에 대하여$$f(a) = \\frac{12}{5}$$일 때,$$f'(a)$$의 값은?",
        choices: [
          "$$-\\frac{5}{12}$$",
          "$$\\frac{5}{12}$$",
          "$$-\\frac{13}{5}$$",
          "$$\\frac{13}{5}$$",
        ],
        answer: "④",
      },
    ],
    84: [
      {
        question:
          "함수$$y = \\sqrt{x} \\cos^{-1} \\sqrt{x}$$에 대하여$$x = \\frac{1}{4}$$에서$$\\frac{dy}{dx}$$의 값은? (단,$$0 \\leq x \\leq 1$$)",
        choices: [
          "$$\\frac{\\pi}{3} - \\frac{1}{\\sqrt{3}}$$",
          "$$\\frac{\\pi}{6} - \\frac{1}{\\sqrt{3}}$$",
          "$$\\frac{\\pi}{3} + \\frac{1}{\\sqrt{3}}$$",
          "$$\\frac{\\pi}{6} + \\frac{1}{\\sqrt{3}}$$",
        ],
        answer: "①",
      },
      {
        question:
          "함수$$f(x) = (\\ln x)^{3x}$$일 때,$$\\frac{1}{3} f'(e)$$의 값은?",
        choices: ["$$0$$", "$$1$$", "$$2$$", "$$3$$"],
        answer: "②",
      },
      {
        question: "$$f(x) = (x^2 + 1)^x$$에서$$f'(2)$$의 값은?",
        choices: [
          "$$25 \\ln 5 + 8$$",
          "$$25 \\ln 5 + 40$$",
          "$$50 \\ln 5 + 40$$",
          "$$50 \\ln 5 + 80$$",
        ],
        answer: "②",
      },
      {
        question:
          "$$f(x) = x^{\\sin x}$$,$$x > 0$$일 때,$$x = \\frac{\\pi}{2}$$에서$$f' \\left( \\frac{\\pi}{2} \\right)$$를 구하면?",
        choices: [
          "$$1$$",
          "$$\\frac{\\pi}{2}$$",
          "$$\\frac{2}{\\pi}$$",
          "$$\\frac{\\pi^2}{2}$$",
        ],
        answer: "①",
      },
    ],
    85: [
      {
        question:
          "함수$$f(x) = \\frac{\\tan^4 x}{\\sin^3 x \\cos 3x}$$일 때,$$f' \\left( \\frac{\\pi}{4} \\right)$$의 값은?",
        choices: ["$$-64$$", "$$-32$$", "$$-8$$", "$$8 \\sqrt{2}$$"],
        answer: "③",
      },
      {
        question:
          "$$f(x) = \\frac{(x+2)^3}{x^4 (x-1)^2}$$으로 정의된 함수$$f(x)$$의$$x=2$$에서 도함수 값은?",
        choices: ["$$-13$$", "$$-11$$", "$$11$$", "$$13$$", "$$15$$"],
        answer: "①",
      },
      {
        question:
          "실수 전체에서 정의된 함수$$f(x) = 2e^{x+1} - 2x - x^2$$의 역함수를$$g$$라 할 때,$$g'(3)$$의 값은?",
        choices: [
          "$$1$$",
          "$$\\frac{1}{2}$$",
          "$$\\frac{1}{3}$$",
          "$$\\frac{1}{6}$$",
          "$$\\frac{1}{7}$$",
        ],
        answer: "②",
      },
    ],
    86: [
      {
        question:
          "함수$$f(x) = \\sqrt{x^3 + 2x + 4} \\quad (x \\geq 0)$$는 역함수$$g(x)$$를 갖는다. 이때,$$g'(4)$$의 값은?",
        choices: [
          "$$\\frac{2}{7}$$",
          "$$\\frac{4}{7}$$",
          "$$\\frac{6}{7}$$",
          "$$\\frac{8}{7}$$",
        ],
        answer: "②",
      },
      {
        question:
          "함수$$f(x) = e^{\\cos x + 2x}$$의 역함수를$$g$$라고 놓자.$$g'(e^{\\pi})$$의 값은?",
        choices: ["$$-1$$", "$$1$$", "$$\\frac{1}{e^{\\pi}}$$", "$$e^{\\pi}$$"],
        answer: "③",
      },
      {
        question:
          "$$f$$는 미분가능하고 역함수$$f^{-1}$$를 갖는다.$$G(x) = \\frac{1}{f^{-1}(x)}$$이고$$f(3) = 2, f'(3) = \\frac{1}{9}$$일 때,$$G'(2)$$의 값은?",
        choices: ["$$1$$", "$$\\frac{9}{2}$$", "$$-\\frac{9}{2}$$", "$$-1$$"],
        answer: "④",
      },
    ],
    87: [
      {
        question: "$$x^2 + 5xy + y^2 = 4$$의$$(0,2)$$에서$$\\frac{dy}{dx}$$는?",
        choices: [
          "$$\\frac{1}{2}$$",
          "$$2$$",
          "$$\\frac{3}{2}$$",
          "$$-4$$",
          "$$-\\frac{5}{2}$$",
        ],
        answer: "⑤",
      },
      {
        question:
          "곡선$$4x^3 - 9xy - 4y^2 = 10$$위의 점$$(2,1)$$에서 그은 접선의 기울기는?",
        choices: [
          "$$-\\frac{1}{2}$$",
          "$$-2$$",
          "$$\\frac{3}{2}$$",
          "$$-4$$",
          "$$2$$",
        ],
        answer: "③",
      },
      {
        question:
          "$$\\sin(x^2 + y^3) + 3y^2 + x + y = 0$$으로 주어진 곡선 위의 점$$(0,0)$$에서 접선의 기울기는?",
        choices: ["$$1$$", "$$-1$$", "$$3$$", "$$-3$$"],
        answer: "②",
      },
      {
        question:
          "곡선$$xy^2 + x^2y = 2$$위의 점 중에서 접선의 기울기가$$-1$$인 점이$$(a, b)$$라 할 때,$$ab$$의 값은?",
        choices: ["$$0$$", "$$1$$", "$$2$$", "$$4$$"],
        answer: "②",
      },
      {
        question:
          "곡선$$x^2 = y^3 - y + 3$$위의 점$$(3,2)$$에서 접선의 기울기는?",
        choices: [
          "$$\\frac{6}{11}$$",
          "$$\\frac{3}{11}$$",
          "$$\\frac{1}{2}$$",
          "$$-\\frac{1}{2}$$",
          "$$-1$$",
        ],
        answer: "①",
      },
    ],
    88: [
      {
        question:
          "매개변수 방정식$$x = t^3 - t^2, y = t^2 - 1$$로 주어지는 곡선의 원점에서의 기울기$$\\frac{dy}{dx}$$는?",
        choices: ["$$0$$", "$$1$$", "$$-1$$", "$$2$$", "$$-2$$"],
        answer: "④",
      },
      {
        question:
          "싸이클로이드(cycloid)가$$x = \\theta - \\sin\\theta, y = 1 - \\cos\\theta$$로 주어져 있다. 이 때,$$\\theta = \\frac{\\pi}{3}$$에서$$\\frac{dy}{dx}$$의 값은?",
        choices: [
          "$$\\sqrt{3}$$",
          "$$\\frac{1}{\\sqrt{3}}$$",
          "$$-\\sqrt{2}$$",
          "$$-2$$",
        ],
        answer: "①",
      },
      {
        question:
          "$$x = \\cosh\\theta, y = \\sinh\\theta, 0 < \\theta < \\infty$$일 때,$$\\frac{dy}{dx}$$를 구하면?",
        choices: [
          "$$x^2 - 1$$",
          "$$\\sqrt{x^2 - 1}$$",
          "$$\\frac{x}{\\sqrt{x^2 - 1}}$$",
          "$$\\frac{1}{\\sqrt{x^2 - 1}}$$",
        ],
        answer: "③",
      },
      {
        question:
          "곡선$$C: x = \\sin 2t, y = 2\\cos t$$위의 점$$(\\sqrt{3}/2, \\sqrt{3})$$에서 접선의 기울기는?",
        choices: [
          "$$-1$$",
          "$$\\frac{1}{2}$$",
          "$$\\sqrt{3}$$",
          "$$-\\frac{1}{\\sqrt{3}}$$",
        ],
        answer: "①",
      },
    ],
    89: [
      {
        question: "다음 서술 중 옳은 것을 모두 고른 것은?",
        example: [
          "$$\\begin{aligned}\n\\text{ㄱ. } & \\sinh^2 x - \\cosh^2 x = 1 \\\\\n\\text{ㄴ. } & \\frac{d}{dx} \\sinh x = \\cosh x \\\\\n\\text{ㄷ. } & \\frac{d}{dx} \\sinh^{-1}x = \\frac{1}{\\sqrt{x^2 + 1}}\n\\end{aligned}$$",
        ],
        choices: [
          "$$\\text{ㄱ}$$",
          "$$\\text{ㄴ}$$",
          "$$\\text{ㄷ}$$",
          "$$\\text{ㄴ, ㄷ}$$",
          "$$\\text{ㄱ, ㄴ, ㄷ}$$",
        ],
        answer: "④",
      },
      {
        question:
          "$$f(x) = \\ln\\left(\\frac{x^2 - 1}{(3x - 1)^2}\\right)$$일 때,$$f'(2)$$의 값을 구한 것은?",
        choices: [
          "$$\\frac{2}{15}$$",
          "$$\\frac{3}{5}$$",
          "$$\\ln 2$$",
          "$$\\frac{2}{3}$$",
        ],
        answer: "①",
      },
      {
        question:
          "함수$$f(x) = \\frac{x}{1 + x^2}$$에 대해$$f'(2)$$의 값을 구하면?",
        choices: [
          "$$\\frac{2}{9}$$",
          "$$-\\frac{8}{25}$$",
          "$$-\\frac{3}{25}$$",
        ],
        answer: "④",
      },
    ],
    90: [
      {
        question:
          "방정식$$y = \\sin^{-1}(\\cos x)$$의$$\\frac{dy}{dx}$$를 간단히 한 것은? (단,$$0 < x < \\frac{\\pi}{2}$$)",
        choices: ["$$-1$$", "$$1$$", "$$\\sin x$$", "$$\\cos x$$"],
        answer: "①",
      },
      {
        question:
          "함수$$f(x) = \\frac{1}{\\sqrt{\\sin x}}$$에 대해$$f\\left(\\frac{\\pi}{6}\\right)$$의 값을 구한 것은?",
        choices: [
          "$$-1$$",
          "$$-\\frac{\\sqrt{6}}{4}$$",
          "$$\\frac{\\sqrt{3}}{2}$$",
          "$$-\\frac{\\sqrt{3}}{2}$$",
          "$$-\\frac{\\sqrt{6}}{2}$$",
        ],
        answer: "④",
      },
      {
        question:
          "$$f$$는 실수 전체에서 정의된 미분 가능한 함수이다. 함수$$f$$에 대한 다음 표의 값을 이용하여$(f \\circ f \\circ f)'(0)$의 값을 구하면?",
        example: [
          "$$\\begin{array}{|c|c|c|c|c|c|c|c|}\n\\hline\n a & -2 & -1 & 0 & 1 & 2 & 4 \\\\\n\\hline\n f(a) & 4 & 0 & 1 & -1 & 1 & 0 \\\\\n\\hline\n f'(a) & 3 & 2 & -3 & 1 & 4 & 2 \\\\\n\\hline\n\\end{array}$$",
        ],
        choices: ["$$-8$$", "$$-6$$", "$$-4$$", "$$2$$", "$$8$$"],
        answer: "②",
      },
      {
        question:
          "함수$$y = \\ln(x^2 - 2x + 1)$$에 대하여$$x = 2$$에서 미분계수를 구하면?",
        choices: ["$$1$$", "$$2$$", "$$3$$", "$$4$$"],
        answer: "②",
      },
    ],
    91: [
      {
        question:
          "곡선$$y = \\cosh x$$위의 점들 중 접선의 기울기가 1인 점을 구하시오.",
        choices: [
          "$$(\\ln(\\sqrt{2}), 1)$$",
          "$$(\\ln(1 + \\sqrt{2}), \\sqrt{2})$$",
          "$$(\\ln(1 + \\sqrt{3}), \\sqrt{3})$$",
          "$$(\\ln 3, 2)$$",
          "$$(\\ln(1 + \\sqrt{5}), \\sqrt{5})$$",
        ],
        answer: "②",
      },
      {
        question:
          "좌표평면에서 매개곡선$$x = \\frac{t^2}{4}, \\quad y = t^3 + 2$$위의 점$$(1,10)$$에서 접선의 기울기는?",
        choices: ["$$6$$", "$$10$$", "$$12$$", "$$14$$", "$$16$$"],
        answer: "③",
      },
      {
        question:
          "함수$$f(x) = \\cosh x$$에 대하여$$f'(\\ln 2)$$의 값을 구하면?",
        choices: [
          "$$-\\frac{3}{4}$$",
          "$$-\\frac{1}{4}$$",
          "$$0$$",
          "$$\\frac{1}{4}$$",
          "$$\\frac{3}{4}$$",
        ],
        answer: "⑤",
      },
      {
        question:
          "다음 매개곡선에 대하여$$t = \\ln 2$$일 때$$\\frac{dy}{dx}$$의 값을 구하면? $$x = t - e^t, \\quad y = t + e^{-t}$$",
        choices: [
          "$$-2$$",
          "$$-1$$",
          "$$-\\frac{1}{2}$$",
          "$$-\\frac{1}{3}$$",
          "$$-\\frac{1}{4}$$",
        ],
        answer: "③",
      },
    ],
    92: [
      {
        question:
          "함수$$f(x) = x^3 + x + 3 + \\tan\\left(\\frac{\\pi x}{2}\\right), (-1 < x < 1)$$에 대하여$$(f^{-1})'(3)$$의 값은?",
        choices: [
          "$$\\frac{2}{2 + \\pi}$$",
          "$$-\\frac{2}{2 + \\pi}$$",
          "$$\\frac{4}{4 + \\pi}$$",
          "$$-\\frac{4}{4 + \\pi}$$",
          "$$1$$",
        ],
        answer: "①",
      },
      {
        question:
          "함수$$f(x) = x^{\\sin(\\pi x / 3)} \\quad (x > 0)$$에 대하여,$$f'(1)$$의 값은?",
        choices: [
          "$$0$$",
          "$$\\frac{1}{4}$$",
          "$$\\frac{\\sqrt{3}}{4}$$",
          "$$\\frac{1}{2}$$",
          "$$\\frac{\\sqrt{3}}{2}$$",
        ],
        answer: "⑤",
      },
      {
        question:
          "곡선$$y^2 = x^3 + x + 2$$위의 점$$(1,2)$$에서의 접선의 기울기는?",
        choices: ["$$0$$", "$$1$$", "$$2$$", "$$4$$", "$$8$$"],
        answer: "②",
      },
      {
        question:
          "$$y = \\frac{(x + 1)(x + 2)^2}{(x + 3)^3(x + 4)^4}$$에 대하여$$y$$의 도함수는$$y' = \\left(\\frac{A}{x + 1} + \\frac{B}{x + 2} + \\frac{C}{x + 3} + \\frac{D}{x + 4} \\right)y$$이다. 이때,$$A + B + C + D$$의 값은?",
        choices: ["$$-10$$", "$$-8$$", "$$-4$$", "$$2$$", "$$10$$"],
        answer: "③",
      },
    ],
    93: [
      {
        question:
          "곡선$$\\cos x + \\sin y = 1$$위의 점$$\\left(\\frac{\\pi}{3}, \\frac{\\pi}{6}\\right)$$에서의 접선의 기울기는?",
        choices: ["$$-1$$", "$$0$$", "$$\\frac{\\sqrt{3}}{2}$$", "$$1$$"],
        answer: "④",
      },
      {
        question:
          "함수$$f(x) = x^{\\sin x}$$에 대하여$$f'\\left(\\frac{3\\pi}{2}\\right)$$를 구하시오.",
        choices: [
          "$$\\frac{4}{9\\pi^2}$$",
          "$$\\frac{5}{9\\pi^2}$$",
          "$$-\\frac{5}{9\\pi^2}$$",
          "$$-\\frac{4}{9\\pi^2}$$",
          "$$-\\frac{2}{9\\pi^2}$$",
        ],
        answer: "④",
      },
    ],
    94: [
      {
        question:
          "$$x(t) = 3\\sin t - 4, \\quad y(t) = 5 + 2\\cos t$$에 대해 점$$\\left( x\\left(\\frac{\\pi}{4}\\right), y\\left(\\frac{\\pi}{4}\\right) \\right)$$에서 법선의 기울기를 구하면?",
        choices: ["$$\\frac{2}{3}$$", "$$1$$", "$$\\frac{3}{2}$$", "$$2$$"],
        answer: "③",
      },
      {
        question:
          "함수$$f(x) = \\sin x + 4x + 1$$의 역함수$$g(x)$$를 하자. 이 때,$$h(x) = g(2x+1)$$를 정의할 때,$$h(0)$$의 값은?",
        choices: [
          "$$\\frac{1}{5}$$",
          "$$\\frac{2}{5}$$",
          "$$\\frac{3}{5}$$",
          "$$\\frac{4}{5}$$",
        ],
        answer: "②",
      },
      {
        question:
          "함수$$f(x) = 3e^x + 2x^3 - 2$$의 역함수를$$g(x)$$라 할 때,$$g'(1)$$의 값은?",
        choices: [
          "$$\\frac{1}{3}$$",
          "$$\\frac{1}{2}$$",
          "$$1$$",
          "$$2$$",
          "$$3$$",
        ],
        answer: "①",
      },
      {
        question:
          "곡선$$y + 2\\cosh(xy) - 2x\\cos(x - 1) = 0$$위의 점$$(1,0)$$에서의 접선의 기울기는?",
        choices: ["$$-4$$", "$$-2$$", "$$0$$", "$$2$$", "$$4$$"],
        answer: "④",
      },
    ],
    95: [
      {
        question:
          "$$f(x) = \\frac{(2x + 3)^2 \\sec^2 x}{(x^2 + 4)}$$일 때,$$f'(0)$$의 값은?",
        choices: ["$$0$$", "$$\\frac{16}{27}$$", "$$\\frac{4}{3}$$", "$$3$$"],
        answer: "④",
      },
      {
        question: "$$f(x) = 5 + 9x + e^{-x+1}$$일 때,$$(f^{-1})'(15)$$의 값은?",
        choices: [
          "$$\\frac{1}{8}$$",
          "$$\\frac{1}{4}$$",
          "$$\\frac{1}{2}$$",
          "$$1$$",
        ],
        answer: "①",
      },
      {
        question:
          "$$y = \\frac{\\tan^{-1} x}{1 + x^2}$$이고$$\\frac{dx}{dt} = 4$$일 때,$$x = 1$$에서$$\\frac{dy}{dt}$$는?",
        choices: [
          "$$-\\frac{\\pi}{2}$$",
          "$$\\frac{\\pi}{2}$$",
          "$$1 - \\frac{\\pi}{2}$$",
          "$$\\frac{\\pi + 1}{2}$$",
        ],
        answer: "③",
      },
      {
        question:
          "$$x > 0$$에서 정의된 함수$$y = f(x)$$가 항상 식$$f(x)e^{f(x)} = x$$를 만족할 때,$$f'(e)$$의 값은?",
        choices: ["$$1$$", "$$e$$", "$$\\frac{1}{e}$$", "$$\\frac{1}{2e}$$"],
        answer: "④",
      },
    ],
    96: [
      {
        question:
          "이차곡선$$x^2 - xy + y^2 = 12$$위의 점 중에서 접선의 기울기가$$0$$인 점의 좌표를 모두 고르면?",
        choices: [
          "$$(-4, -2), (2, -4)$$",
          "$$(-4, -2), (4, 2)$$",
          "$$(-2, -4), (-4, -2)$$",
          "$$(-2, -4), (2, 4)$$",
        ],
        answer: "④",
      },
      {
        question:
          "방정식$$x^2 y^2 + xy = 2$$에 대하여$$x = a, y = b$$일 때,$$y' = -2$$이다. 이때,$$2a^2 + b^2$$의 값은?",
        choices: ["$$3$$", "$$4$$", "$$5$$", "$$6$$"],
        answer: "①",
      },
      {
        question:
          "함수$$y = f(x)$$가 매개방정식$$\\begin{cases} x = 2\\cos t \\newline y = 3\\sin t \\end{cases} (0 < t < \\frac{\\pi}{2})$$로 주어질 때, 두 점$$(1, f(1))$$과$$(\\sqrt{3}, f(\\sqrt{3}))$$을 지나는 직선의 기울기와$$y = f(x)$$의 점$$(a, f(a))$$에서 <br>접선의 기울기가 같게 되는$$a$$의 값은?",
        choices: [
          "$$\\sqrt{2}$$",
          "$$\\frac{1}{\\sqrt{2}}$$",
          "$$1$$",
          "$$\\sqrt{3}$$",
        ],
        answer: "①",
      },
      {
        question:
          "$$y = \\sqrt[3]{2x - 1}$$에 대하여 다음 중$$\\frac{dy}{dx}$$와 같은 것은?",
        choices: [
          "$$\\frac{2}{3y^3}$$",
          "$$\\frac{2}{3y^2}$$",
          "$$\\frac{2}{3y}$$",
          "$$\\frac{2}{3\\sqrt{y}}$$",
        ],
        answer: "②",
      },
    ],
    97: [
      {
        question: "함수$$y = \\sinh^{-1} x$$의 도함수와 같은 것은?",
        choices: [
          "$$\\sin(\\tan^{-1} x)$$",
          "$$\\cos(\\tan^{-1} x)$$",
          "$$\\frac{1}{\\sqrt{1 - x^2}}$$",
          "$$\\frac{1}{\\sqrt{x^2 - 1}}$$",
        ],
        answer: "②",
      },
      {
        question:
          "함수$$f(x) = 25\\arctan(\\sqrt{9 + x^2} - 2)$$에 대하여$$f'(4)$$를 구하면?",
        choices: ["$$1$$", "$$2$$", "$$3$$", "$$4$$", "$$5$$"],
        answer: "②",
      },
      {
        question:
          "함수$$f(x) = \\frac{\\pi}{3} x +\\arcsin x$$에 대하여$$\\left(f^{-1}\\right)'\\left(\\frac{\\pi}{3}\\right)$$를 구하면?",
        choices: [
          "$$\\frac{3}{\\pi + 2\\sqrt{3}}$$",
          "$$\\frac{3}{2\\pi - 2\\sqrt{3}}$$",
          "$$\\frac{3}{-\\pi + 2\\sqrt{3}}$$",
          "$$\\frac{3}{\\pi - \\sqrt{3}}$$",
          "$$\\frac{3}{\\pi + \\sqrt{3}}$$",
        ],
        answer: "①",
      },
      {
        question:
          "실수 전체에서 정의된 미분가능 함수$$f$$에 대하여$$g(x) = \\sqrt{3e^x + (f(x))^2}$$라 하자. 이때,$$f(0) = 1$$,$$f'(0) = -5$$이면,$$g'(0)$$의 값은?",
        choices: [
          "$$-\\frac{9}{4}$$",
          "$$-\\frac{7}{4}$$",
          "$$1$$",
          "$$\\frac{7}{4}$$",
          "$$\\frac{9}{4}$$",
        ],
        answer: "②",
      },
    ],
    98: [
      {
        question:
          "$$y$$가 다음 방정식으로 정의된$$x$$의 음함수일 때,$$\\frac{dy}{dx}$$는? (단,$$|x| > |y|$$)",
        example: "$$\\ln(x^2 - y^2) = \\tanh^{-1}\\left(\\frac{y}{x}\\right)$$",
        choices: [
          "$$\\frac{-x + 2y}{2x + y}$$",
          "$$\\frac{x + 2y}{2x + y}$$",
          "$$\\frac{-2x + y}{x + 2y}$$",
          "$$\\frac{2x + y}{x + 2y}$$",
        ],
        answer: "④",
      },
      {
        question:
          "곡선$$y = x + \\arctan y$$위의 점$$\\left(1 - \\frac{\\pi}{4}, 1\\right)$$에서 접선의 기울기는?",
        choices: ["$$-2$$", "$$-1$$", "$$1$$", "$$2$$"],
        answer: "④",
      },
      {
        question:
          "함수$$f(x) = x\\sqrt{3 + x^2}$$에 대하여 역함수 $$f^{-1}$$의 미분계수$$\\left(f^{-1}\\right)'(-2)$$의 값은?",
        choices: [
          "$$\\frac{1}{5}$$",
          "$$\\frac{2}{5}$$",
          "$$\\frac{3}{5}$$",
          "$$\\frac{4}{5}$$",
          "$$1$$",
        ],
        answer: "②",
      },
      {
        question:
          "함수$$f(x) = \\frac{1}{\\sqrt[3]{x^2 + x + 1}}$$에 대하여$$f'(-1)$$의 값은?",
        choices: [
          "$$-\\frac{1}{3}$$",
          "$$-\\frac{1}{2}$$",
          "$$\\frac{1}{2}$$",
          "$$\\frac{1}{3}$$",
        ],
        answer: "④",
      },
    ],
    99: [
      {
        question:
          "$$\\frac{d}{dx} \\left( \\frac{1}{2} \\tan^{-1} x + \\frac{1}{4} \\ln \\frac{(x+1)^2}{x^2 + 1} \\right) = \\frac{c}{(a + x)(b + x^2)}$$를 만족하는 상수$$a, b, c$$에 대하여$$abc$$의 값은?",
        choices: ["$$\\frac{1}{2}$$", "$$1$$", "$$3$$", "$$8$$"],
        answer: "②",
      },
      {
        question:
          "$$f(x) + x^2[f(x)]^3 = 10$$,$$f(1) = 2$$일 때$$f'(1)$$의 값은?",
        choices: [
          "$$-28$$",
          "$$-\\frac{16}{13}$$",
          "$$-\\frac{11}{13}$$",
          "$$-14$$",
        ],
        answer: "②",
      },
      {
        question:
          "$$x[f(x)]^2 + 2f(x) = 8$$, ($$f(x) > 0$$)일 때,$$f'(1)$$의 값은?",
        choices: [
          "$$1$$",
          "$$-\\frac{1}{2}$$",
          "$$-\\frac{1}{4}$$",
          "$$-\\frac{2}{3}$$",
        ],
        answer: "④",
      },
      {
        question:
          "좌표평면에서 매개방정식$$x = t^2 - 1$$,$$y = t^3 - t$$로 주어지는 곡선 위의 점$$(a, b)$$에서의 접선이$$x$$축에 평행할 때,$$a^2 + b^2$$의 값은?",
        choices: [
          "$$\\frac{4}{9}$$",
          "$$\\frac{13}{27}$$",
          "$$\\frac{14}{27}$$",
          "$$\\frac{5}{9}$$",
          "$$\\frac{16}{27}$$",
        ],
        answer: "⑤",
      },
    ],
    100: [
      {
        question:
          "미분가능한 함수$$f$$가$$-\\frac{\\pi}{2} < x < \\frac{\\pi}{2}$$일 때,$$f(\\tan x) = \\sin x$$를 만족한다.$$f'(1)$$의 값은?",
        choices: [
          "$$\\frac{1}{4}$$",
          "$$\\frac{\\sqrt{2}}{4}$$",
          "$$\\frac{1}{2}$$",
          "$$\\frac{\\sqrt{2}}{2}$$",
          "$$1$$",
        ],
        answer: "②",
      },
      {
        question:
          "함수$$f(x) = \\arctan (\\arcsin \\sqrt{x})$$에 대하여$$f' \\left( \\frac{1}{4} \\right) = \\frac{a}{b + \\pi^2} \\cdot \\frac{1}{\\sqrt{3}}$$일 때,$$a + b$$의 값은?<br> (단,$$a, b$$는 정수이다.)",
        choices: ["$$84$$", "$$96$$", "$$108$$", "$$120$$", "$$136$$"],
        answer: "③",
      },
      {
        question:
          "영역$$(-\\infty, -\\frac{3}{4})$$에서 정의된 함수$$f(x) = x^4 - x^3 + 1$$에 대하여$$g(x) = f(7f^{-1}(x))$$라 할 때,<br>$$g'(3)$$을 구하시오.",
        choices: ["$$-1519$$", "$$-217$$", "$$217$$", "$$1519$$", "$$-1$$"],
        answer: "④",
      },
    ],
    107: [
      {
        question:
          "곡선$$y = x^{2} - x + 2$$위의$$x$$좌표가$$1$$인 점에서 그은 접선의 방정식은?",
        choices: [],
        answer: "$$y = x + 1$$",
      },
      {
        question:
          "곡선$$y = \\frac{1}{1 + x^2}$$위의 점$$\\left(1, \\frac{1}{2}\\right)$$에서의 접선의 방정식은?",
        choices: [],
        answer: "$$y = -\\frac{1}{2}x + 1$$",
      },
      {
        question:
          "점$$(3,3)$$에서 함수$$x^2 + 2y^2 - 3xy = 0$$의 접선의 방정식은?",
        choices: [],
        answer: "$$y = x$$",
      },
      {
        question:
          "$$x(t) = 3\\sin t - 4$$,$$y(t) = 5 + 3\\cos t$$일 때, 점$$\\left( x\\left( \\frac{\\pi}{4} \\right), y\\left( \\frac{\\pi}{4} \\right) \\right)$$에서 법선의 방정식을 구하면?",
        choices: [],
        answer: "$$y = x+9 $$",
      },
      {
        question:
          "두 곡선$$y = x^2$$과$$y = x^2 - x + 1$$의 교각을$$\\Phi$$라 할 때,$$\\tan \\Phi$$의 값은?",
        choices: [
          "$$\\frac{1}{3}$$",
          "$$\\frac{1}{\\sqrt{3}}$$",
          "$$1$$",
          "$$\\sqrt{3}$$",
        ],
        answer: "①",
      },
      {
        question:
          "초깃값$$x_1 = 3$$일 때, 뉴턴 방법으로 방정식$$x^2 - 2x - 2 = 0$$의 근을 구할 때 두 번째 근삿값$$x_2$$는?",
        choices: ["$$2.71$$", "$$2.72$$", "$$2.73$$", "$$2.74$$", "$$2.75$$"],
        answer: "⑤",
      },
    ],
    108: [
      {
        question:
          "곡선$$y = \\sqrt{1 + 4\\sin x}$$에 대하여 곡선 위의 점$$(0,1)$$에서의 접선의 방정식을 구하면?",
        choices: [
          "$$y = x - 1$$",
          "$$y = x + 1$$",
          "$$y = 2x - 1$$",
          "$$y = 2x + 1$$",
        ],
        answer: "④",
      },
      {
        question:
          "다음과 같이 정의된 함수$$f(x) = x + \\frac{1}{x}, \\quad x \\neq 0$$의 그래프 위의 점$$\\left( 2, \\frac{5}{2} \\right)$$에서 접선의 방정식을 구하면?",
        choices: [
          "$$y = \\frac{1}{4}x + 1$$",
          "$$y = \\frac{5}{4}x + 1$$",
          "$$y = \\frac{3}{4}x + 1$$",
          "$$y = \\frac{3}{2}x - \\frac{1}{2}$$",
        ],
        answer: "③",
      },
      {
        question:
          "곡선$$y = x^{\\csc x}$$위의 점$$\\left( \\frac{\\pi}{2}, \\frac{\\pi}{2} \\right)$$에서의 접선의 방정식을$$y = f(x)$$라 할 때,$$f(1)$$의 값은?",
        choices: ["$$1$$", "$$2$$", "$$3$$", "$$4$$"],
        answer: "①",
      },
      {
        question:
          "곡선$$y = x^{e^x} \\quad (x > 0)$$위의 점 (1,1)에서의 접선을$$y = ax + b$$라고 하자.$$b - \\ln a$$의 값은?",
        choices: ["$$-e$$", "$$-1$$", "$$0$$", "$$1$$", "$$e$$"],
        answer: "①",
      },
    ],
    109: [
      {
        question:
          "곡선$$x^2 + y^2 = (2x^2 + 2y^2 - x)^2$$상의 점$$\\left( 0, \\frac{1}{2} \\right)$$에서 접선의 방정식은?",
        choices: [
          "$$y = -x + \\frac{1}{2}$$",
          "$$y = x + \\frac{1}{2}$$",
          "$$y = -\\frac{9}{13}x + \\frac{1}{2}$$",
          "$$y = \\frac{9}{13}x + \\frac{1}{2}$$",
          "$$y = \\frac{1}{2}x + \\frac{1}{2}$$",
        ],
        answer: "②",
      },
      {
        question:
          "함수$$y = \\ln(x^2 - 2x + 1)$$위의 점$$(2,0)$$에서 접선의 방정식이$$y = ax + b$$일 때,$$a - b$$의 값은?",
        choices: ["$$5$$", "$$6$$", "$$7$$", "$$8$$"],
        answer: "②",
      },
      {
        question:
          "곡선$$y = \\tan\\left(\\frac{\\pi x^2}{4}\\right)$$위의 점$$(1,1)$$에서의 접선의$$y$$절편은?",
        choices: [
          "$$-\\pi - 1$$",
          "$$-\\pi$$",
          "$$-\\pi + 1$$",
          "$$-\\pi + 2$$",
        ],
        answer: "③",
      },
      {
        question:
          "곡선$$x^2 + 2xy + 5y^2 = 13$$에서 점$$(2,1)$$에서 접하는 직선의$$x$$절편은?",
        choices: [
          "$$\\frac{13}{3}$$",
          "$$\\frac{11}{3}$$",
          "$$\\frac{13}{7}$$",
          "$$\\frac{11}{7}$$",
        ],
        answer: "①",
      },
    ],
    110: [
      {
        question:
          "곡선$$y = \\tan^{-1}(3x)$$위의$$x$$좌표가$$\\frac{\\sqrt{3}}{3}$$인 점에서의 법선의 방정식은? (단,$$|y| < \\frac{\\pi}{2}$$이다.)",
        choices: [
          "$$\\frac{4}{3}x + y - \\frac{\\pi}{3} - \\frac{4\\sqrt{3}}{9} = 0$$",
          "$$-\\frac{4}{3}x + y - \\frac{\\pi}{3} + \\frac{4\\sqrt{3}}{9} = 0$$",
          "$$\\frac{3}{4}x + y - \\frac{\\pi}{3} - \\frac{\\sqrt{3}}{4} = 0$$",
          "$$-\\frac{3}{4}x + y - \\frac{\\pi}{3} + \\frac{\\sqrt{3}}{4} = 0$$",
          "$$\\frac{3}{4}x + y - \\frac{\\pi}{3} + \\frac{\\sqrt{3}}{4} = 0$$",
        ],
        answer: "①",
      },
      {
        question:
          "$$y = 3x^2 - 4x + 6$$에 접하고 직선$$y = -\\frac{1}{2}x + \\frac{9}{2}$$와 수직인 직선의 방정식을$$y = ax + b$$라 할 때,$$a + b$$는?",
        choices: ["$$1$$", "$$4$$", "$$5$$", "$$\\frac{11}{2}$$"],
        answer: "③",
      },
      {
        question:
          "매개변수방정식$$x = \\frac{t}{t^2 + 1}, y = (t - 2)e^t$$로 주어진 곡선과$$x$$축과 만나는 점에서 이 곡선에 그은 접선의 방정식은?",
        choices: [
          "$$y = \\frac{5}{2}e^x - e^2$$",
          "$$y = -\\frac{25}{8}e^x + \\frac{5}{4}e^2$$",
          "$$y = \\frac{25}{3}e^x - \\frac{10}{3}e^2$$",
          "$$y = -\\frac{25}{3}e^x + \\frac{10}{3}e^2$$",
        ],
        answer: "④",
      },
      {
        question:
          "평면곡선$$\\mathbf{r}(t) = \\langle \\cosh(t), \\sinh(t) \\rangle$$위의 점$$(\\sqrt{2}, 1)$$에서 접선의 기울기는?",
        choices: [
          "$$-\\sqrt{2}$$",
          "$$-\\frac{\\sqrt{2}}{2}$$",
          "$$\\frac{\\sqrt{2}}{2}$$",
          "$$\\sqrt{2}$$",
        ],
        answer: "④",
      },
    ],
    111: [
      {
        question:
          "직선$$y = ax + 3$$이 곡선$$y = 2\\sqrt{x} + 1$$에 접할 때,$$a$$의 값은?",
        choices: [
          "$$\\frac{1}{4}$$",
          "$$\\frac{1}{3}$$",
          "$$\\frac{1}{2}$$",
          "$$1$$",
        ],
        answer: "③",
      },
      {
        question:
          "직선$$y = ax$$($$a$$는 상수)와 곡선$$y = \\sqrt{{x^3} + 1}$$이 접할 때,$$a^6$$의 값은?",
        choices: [
          "$$27$$",
          "$$\\frac{27}{16}$$",
          "$$\\frac{3}{4}$$",
          "$$\\frac{27}{4}$$",
        ],
        answer: "④",
      },
      {
        question:
          "$$f(x) = 2x - 3$$이 곡선$$g(x) = \\frac{k}{x^2}$$에 접하도록 하는$$k$$의 값을 구하면?",
        choices: ["$$-4$$", "$$-1$$", "$$\\frac{1}{2}$$", "$$1$$"],
        answer: "②",
      },
      {
        question:
          "곡선$$y = \\ln x$$와$$y = \\alpha x^2 - 1$$이 접하도록 하는 양수$$\\alpha$$의 값을 정하면?",
        choices: [
          "$$\\frac{1}{\\sqrt{e}}$$",
          "$$\\frac{e}{2}$$",
          "$$\\ln 2$$",
          "$$\\frac{1}{2} \\ln 2$$",
        ],
        answer: "②",
      },
    ],
    112: [
      {
        question:
          "곡선$$y^3 + x^2 - 2y = 4$$와 직선$$ax + by = 4$$이 점$$(2,0)$$에서 접한다. 이때,$$ab$$의 값은?",
        choices: ["$$-4$$", "$$-2$$", "$$1$$", "$$4$$"],
        answer: "②",
      },
      {
        question:
          "두 곡선$$y = \\ln(x + 1)$$과$$y = \\ln(3 - x)$$의 교각을$$\\theta$$라 할 때,$$\\theta$$의 값은?",
        choices: [
          "$$\\frac{\\pi}{3}$$",
          "$$\\frac{\\pi}{4}$$",
          "$$\\sin^{-1} \\frac{4}{5}$$",
          "$$\\tan^{-1} \\frac{1}{3}$$",
        ],
        answer: "③",
      },
      {
        question:
          "곡선$$y = e^x$$위의 점$$P$$에서 그은 접선이 원점$$O$$를 지날 때 선분$$\\overline{OP}$$의 길이는?",
        choices: ["$$1$$", "$$e$$", "$$\\sqrt{e + 1}$$", "$$\\sqrt{e^2 + 1}$$"],
        answer: "④",
      },
      {
        question:
          "곡선$$y = \\frac{2}{x}$$위의 점$$P(3, a)$$에서 이 곡선에 그은 접선이$$x$$축과 만나는 점을$$A$$라 할 때, 삼각형$$OAP$$의 넓이는? (단,$$O$$는 원점)",
        choices: ["$$1$$", "$$2$$", "$$3$$", "$$4$$"],
        answer: "②",
      },
    ],
    113: [
      {
        question:
          "미분가능한 함수$$f$$가$$-\\frac{\\pi}{2} < x < \\frac{\\pi}{2}$$일 때,$$f(\\sin x) = x^2 + 1$$을 만족한다.<br>$$x = \\frac{1}{2}$$에서 접선의 기울기는?",
        choices: [
          "$$-\\frac{2 \\sqrt{3} \\pi}{9}$$",
          "$$-\\frac{\\sqrt{3} \\pi}{9}$$",
          "$$0$$",
          "$$\\frac{\\sqrt{3} \\pi}{9}$$",
          "$$\\frac{2 \\sqrt{3} \\pi}{9}$$",
        ],
        answer: "⑤",
      },
      {
        question:
          "곡선$$y = \\sqrt{x^2 + ax + b}$$위에$$x$$좌표가$$1$$인 점에서의 접선의 방정식이$$2x - 4y + 5 = 0$$일 때,$$a + 4b$$의 값은?",
        choices: ["$$-5$$", "$$-1$$", "$$7$$", "$$9$$"],
        answer: "④",
      },
      {
        question:
          "곡선$$x = 3 \\sin \\theta - 4, y = 5 + 2 \\cos \\theta, 0 \\leq \\theta \\leq 2\\pi$$위에 있는$$\\theta = \\frac{5\\pi}{4}$$일 때의 점에서의 접선의 방정식을 구하시오.",
        choices: [
          "$$y = -\\frac{2}{3} x - 2 \\sqrt{2} + \\frac{7}{3}$$",
          "$$y = -\\frac{2}{3} x - \\sqrt{2} + \\frac{5}{3}$$",
          "$$y = -\\frac{2}{3} x - 2 \\sqrt{2} + \\frac{3}{3}$$",
          "$$y = -\\frac{1}{3} x - 2 \\sqrt{2} + \\frac{4}{3}$$",
          "$$y = -\\frac{2}{3} x - 2 \\sqrt{2} + \\frac{1}{3}$$",
        ],
        answer: "①",
      },
    ],
    114: [
      {
        question:
          "매개변수방정식$$x = t^2 + 1, y = 4\\sqrt{t}$$로 나타나는 곡선 위의 점$$(2,4)$$에서 접선의 방정식은?",
        choices: [
          "$$\\begin{cases} x(t) = 2 - t \\\\ y(t) = 4 + 2t \\end{cases}$$",
          "$$\\begin{cases} x(t) = 2 + 2t \\\\ y(t) = 4 + 2t \\end{cases}$$",
          "$$\\begin{cases} x(t) = 2 + 2t \\\\ y(t) = 2 - t \\end{cases}$$",
          "$$\\begin{cases} x(t) = 1 + t \\\\ y(t) = 4 + 2t \\end{cases}$$",
        ],
        answer: "②",
      },
      {
        question:
          "$$x = 2\\sin 2t, y = 2\\sin t$$위의 한 점$$(\\sqrt{3},1)$$에서 그은 접선과$$x$$축,$$y$$축이 이루는 도형의 면적은?",
        choices: [
          "$$\\frac{\\sqrt{3}}{4}$$",
          "$$\\frac{1}{2 \\sqrt{3}}$$",
          "$$\\frac{1}{4 \\sqrt{3}}$$",
          "$$\\frac{2}{\\sqrt{3}}$$",
        ],
        answer: "③",
      },
      {
        question:
          "평면 위의 한 점$$P(4,3)$$에서 중심이 원점이고 반지름이 1인 원에 그은 두 접선과 원과의 접점을 각각$$A$$와$$B$$라고 하자. 이 때,$$ \\overline{PA} \\cdot \\overline{PB}$$의 값은?",
        choices: ["$$24$$", "$$25$$", "$$26$$", "$$27$$", "$$28$$"],
        answer: "①",
      },
    ],
    115: [
      {
        question:
          "평면곡선 $x^2 + xy + y^2 + x - 3 = 0$ 위에서 $y$ 축에 평행한 접선을 갖는 점들은?",
        choices: [
          "$\\left( \\frac{-1 + \\sqrt{37}}{6}, \\frac{2 - 2\\sqrt{37}}{6} \\right)$, $\\left( \\frac{-1 - \\sqrt{37}}{6}, \\frac{2 + 2\\sqrt{37}}{6} \\right)$",
          "$\\left( \\frac{-2 - 2\\sqrt{10}}{3}, \\frac{1 + \\sqrt{10}}{3} \\right)$, $\\left( \\frac{-2 + 2\\sqrt{10}}{3}, \\frac{1 - \\sqrt{10}}{3} \\right)$",
          "$\\left( \\frac{1 + \\sqrt{37}}{6}, \\frac{2 - 2\\sqrt{37}}{6} \\right)$, $\\left( \\frac{1 - \\sqrt{37}}{6}, \\frac{-2 + 2\\sqrt{37}}{6} \\right)$",
          "$\\left( \\frac{2 + 2\\sqrt{10}}{3}, \\frac{1 + \\sqrt{10}}{3} \\right)$, $\\left( \\frac{2 - 2\\sqrt{10}}{3}, \\frac{1 - \\sqrt{10}}{3} \\right)$",
        ],
        answer: "②",
      },
    ],
    116: [
      {
        question:
          "$$y = x^3 - 2x + 1$$과$$y = \\frac{a}{x - 1}$$이 직교하는$$a$$의 값의 합을 구하면?",
        choices: ["$$0$$", "$$1$$", "$$-1$$", "$$\\sqrt{2}$$"],
        answer: "①",
      },
      {
        question:
          "곡선$$y = f(x)$$위의 점$$(1,1)$$에서의 접선의 방정식이$$y = 2x - 1$$일 때, 곡선$$y = \\sqrt{f(x)}$$위의$$x = 1$$인 점에서의 법선의 방정식은?",
        choices: [
          "$$y = -x + 1$$",
          "$$y = -x + 2$$",
          "$$y = x - 1$$",
          "$$y = x$$",
        ],
        answer: "②",
      },
      {
        question:
          "타원$$x^2 + 4y^2 = 5$$위의 점$$(a,b)$$에서의 접선이 두 점$$(3,2)$$과$$(c,0)$$을 통과할 때,$$a + b + c$$의 값은? (단,$$b > 0$$이다.)",
        choices: ["$$-5$$", "$$-8$$", "$$-10$$", "$$-12$$"],
        answer: "①",
      },
    ],
    117: [
      {
        question:
          "두 곡선$$y^2 = x^3$$과$$\\frac{x^2}{a^2} + \\frac{y^2}{b^2} = 1$$의 1 사분면 위 교점을$$(x_0, y_0)$$라 하자. 점$$(x_0, y_0)$$에서의 두 곡선에 대한 접선이 서로 수직일 때$$a$$와$$b$$의 관계식을 옳은 것은?",
        choices: [
          "$$3a^2 = 2b^2$$",
          "$$2a^2 = 3b^2$$",
          "$$a^2 = b^3$$",
          "$$2a^2 = 3b^3$$",
        ],
        answer: "②",
      },
      {
        question:
          "곡선$$y = x + \\arctan y$$위의 점$$\\left(1 - \\frac{\\pi}{4}, 1 \\right)$$에서 접선의 기울기는?",
        choices: ["$$-2$$", "$$-1$$", "$$1$$", "$$2$$"],
        answer: "④",
      },
      {
        question:
          "곡선$$y = \\arctan x$$에 접하고 기울기가$$\\frac{1}{2}$$인 두 직선의$$y$$절편 사이의 거리가$$d$$일 때,$$d$$가 속하는 범위는?",
        choices: [
          "$$0 < d \\leq \\frac{1}{2}$$",
          "$$\\frac{1}{2} < d \\leq 1$$",
          "$$1 < d \\leq \\frac{3}{2}$$",
          "$$d > \\frac{3}{2}$$",
        ],
        answer: "②",
      },
    ],
    118: [
      {
        question:
          "곡선$$2x^3 + 2y^3 = 9xy$$의 그래프 위의 점$$(1,2)$$에서의 법선의 방정식을 구하면?",
        choices: [
          "$$4x - 5y + 6 = 0$$",
          "$$5x + 4y - 13 = 0$$",
          "$$4x + 5y - 14 = 0$$",
          "$$5x - 4y + 3 = 0$$",
        ],
        answer: "②",
      },
      {
        question:
          "곡선$$y = \\tanh^{-1} (2x)$$의$$x = 0$$에서의 접선의 방정식을 구하면?",
        choices: [
          "$$y = -2x$$",
          "$$y = \\frac{1}{2}x$$",
          "$$y = x$$",
          "$$y = 2x$$",
        ],
        answer: "④",
      },
      {
        question:
          "곡선$$e^{\\frac{x}{y}} = x - y$$위의 점$$(0, a)$$에서 접선이 직선$$y = x + 3$$과 점$$(b, c)$$에서 만날 때,$$a + b + c$$의 값은?",
        choices: ["$$5$$", "$$10$$", "$$20$$", "$$40$$"],
        answer: "②",
      },
    ],
    119: [
      {
        question:
          "함수$$f(x) = 2e^x + e^{2x} - 10$$에 대하여$$f(x) = 0$$의 해를 근사적으로 구하기 위해 뉴턴의 방법을 적용하려고 한다. 첫 번째 근사값이$$0$$일 때, 두 번째 근사값은 얼마인가?",
        choices: [
          "$$-\\frac{7}{4}$$",
          "$$-\\frac{4}{7}$$",
          "$$\\frac{4}{7}$$",
          "$$\\frac{7}{4}$$",
        ],
        answer: "④",
      },
    ],
    120: [
      {
        question:
          "초기값$$x_1 = 3$$일 때, 뉴턴방법으로 방정식$$x^2 - 2x - 2 = 0$$의 근을 구할 때 두 번째 근사값$$x_2$$는?",
        choices: ["$$2.71$$", "$$2.72$$", "$$2.73$$", "$$2.74$$", "$$2.75$$"],
        answer: "⑤",
      },
      {
        question:
          "뉴턴 방법을 사용하여$$x^3 + x + a = 0$$의 해를 구하려고 한다. 초기 근사값$$x_1 = 1$$이고, 두 번째 근사값$$x_2 = \\frac{3}{4}$$일 때,$$a$$의 값은? (단,$$a$$는 상수)",
        choices: ["$$-2$$", "$$-1$$", "$$0$$", "$$1$$"],
        answer: "②",
      },
      {
        question:
          "뉴턴의 방법을 이용하여$$x^3 + 3x^2 - 3 = 0$$의 근사해를 구하고자 한다. 첫 번째 근사해$$x_1 = 1$$을 선택하였을 때, 두 번째 근사해는$$x_2 = \\frac{a}{b}$$이다. 이 때$$a + b$$의 값은? (단,$$a$$와$$b$$는 서로소이다.)",
        choices: ["$$15$$", "$$16$$", "$$17$$", "$$18$$"],
        answer: "③",
      },
    ],
    121: [
      {
        question:
          "함수$$f(x) = e^x + x + a$$에 대하여$$f(x) = 0$$의 해를 뉴턴의 방법을 적용하여 구하려고 한다. 첫 번째 근사값이$$0$$일 때, 두 번째 근사값이$$0.5$$라면$$a$$의 값은?",
        choices: ["$$-5$$", "$$-4$$", "$$-3$$", "$$-2$$"],
        answer: "④",
      },
      {
        question:
          "방정식$$x = 2\\cos x$$은 구간$$[0, \\pi]$$에서 유일한 해를 가진다. 근사해를 찾는 고정점 반복법 중 뉴턴방법은?",
        choices: [
          "$$x_{n+1} = 2\\cos x_n$$",
          "$$x_{n+1} = \\frac{1}{2} (x_n + \\cos x_n)$$",
          "$$x_{n+1} = x_n + \\frac{\\cos x_n}{\\sin x_n}$$",
          "$$x_{n+1} = x_n - \\frac{x_n - 2\\cos x_n}{1 - 2\\sin x_n}$$",
          "$$x_{n+1} = x_n + \\frac{2\\cos x_n - x_n}{2\\sin x_n + 1}$$",
        ],
        answer: "⑤",
      },
      {
        question:
          "뉴턴의 방법을 이용하여$$\\sqrt[3]{3}$$의 근사값을 구할 때$$x_1 = 1$$이면$$x_3$$의 값은?",
        choices: [
          "$$\\frac{5}{3}$$",
          "$$\\frac{13}{9}$$",
          "$$\\frac{331}{225}$$",
          "$$\\frac{487}{325}$$",
        ],
        answer: "③",
      },
    ],
    127: [
      {
        question: "$$y = \\sec x$$에 대해$$\\frac{d^2y}{dx^2}$$를 구하시오.",
        choices: [],
        answer: "$$\\sec x \\tan^2 x + \\sec^3 x$$",
      },
      {
        question: "$$y = x^2 \\ln x$$에 대해$$\\frac{d^2y}{dx^2}$$를 구하시오.",
        choices: [],
        answer: "$$y= 2 \\ln x + 3$$",
      },
      {
        question:
          "$$y = x^4 + 3x^2 - 5x$$에 대해$$\\frac{d^2y}{dx^2}$$를 구하시오.",
        choices: [],
        answer: "$$y = 12x^2 + 6$$",
      },
      {
        question: "$$y = (3x + 1)^2$$에 대해$$\\frac{d^2y}{dx^2}$$를 구하시오.",
        choices: [],
        answer: "$$18x$$",
      },
      {
        question: "$$y = x^3 e^x$$에 대해$$\\frac{d^{2}y}{dx^2}$$를 구하시오.",
        choices: [],
        answer: "$$e^x(x^3 + 6x^2 + 6x)$$",
      },
      {
        question:
          "$$y = e^{2x} \\sin 3x$$에 대해$$\\frac{d^2y}{dx^2}$$를 구하시오.",
        choices: [],
        answer: "$$e^{2x} (-5 \\sin 3x + 12 \\cos 3x)$$",
      },
      {
        question:
          "$$y = \\frac{1}{\\ln x}$$에 대해$$\\frac{d^2y}{dx^2}$$를 구하시오.",
        choices: [],
        answer: "$$\\frac{\\ln x+2}{x^2(\\ln x)^3}$$",
      },
      {
        question: "$$x^2 + y^2 = 4$$에 대해$$\\frac{d^2y}{dx^2}$$를 구하시오.",
        choices: [],
        answer: "$$- \\frac{4}{y^3}$$",
      },
      {
        question:
          "$$\\begin{cases} x = \\theta - \\sin \\theta \\\\ y = 1 - \\cos \\theta \\end{cases}$$에 대해$$\\frac{d^2y}{dx^2}$$를 구하시오.",
        choices: [],
        answer: "$$\\frac{1+ \\cos \\theta}{(1- \\cos \\theta)}$$",
      },
      {
        question:
          "$$\\begin{cases} x = t^2 \\\\ y = t^3 - 2t \\end{cases}$$에 대해$$\\frac{d^2y}{dx^2}$$를 구하시오.",
        choices: [],
        answer: "$$\\frac{3}{4t}$$",
      },
      {
        question:
          "함수$$f(x) = 3x^8 + 2x^5 - 12x^2 + 6$$일 때,$$f^{(5)}(0)$$의 값은?",
        choices: [],
        answer: "$$240$$",
      },
      {
        question: "$$\\sin^{(2020)} \\left( \\frac{\\pi}{2} \\right)$$의 값은?",
        choices: [],
        answer: "$$1$$",
      },
    ],
    128: [
      {
        question: "$$y = \\tan^{-1} x$$의 2 차도함수는?",
        choices: [
          "$$-4x^2(1 + x^2)$$",
          "$$-2x(1 + x^2)^2$$",
          "$$-\\frac{2x}{1 + x^2}$$",
          "$$-\\frac{2x}{(1 + x^2)^2}$$",
        ],
        answer: "④",
      },
      {
        question:
          "함수$$f(x) = \\ln \\left( x^3 \\sqrt{\\frac{x - 1}{x + 1}} \\right)$$에 대해$$f''(2)$$을 구하면?",
        choices: [
          "$$\\frac{7}{4}$$",
          "$$\\frac{11}{7}$$",
          "$$-\\frac{43}{36}$$",
          "$$-\\frac{40}{41}$$",
        ],
        answer: "③",
      },
      {
        question:
          "함수$$f(x) = \\ln (x + \\sqrt{x^2 + 1})$$에 대해$$f''(\\frac{1}{2})$$을 구하면?",
        choices: [
          "$$-\\frac{2 \\sqrt{5}}{25}$$",
          "$$-\\frac{4 \\sqrt{5}}{25}$$",
          "$$-\\frac{8 \\sqrt{5}}{25}$$",
          "$$-\\frac{12 \\sqrt{5}}{25}$$",
        ],
        answer: "②",
      },
    ],
    129: [
      {
        question: "함수$$f(x) = x^{\\ln x}$$일 때,$$f''(1)$$의 값은?",
        choices: ["$$\\frac{1}{2}$$", "$$\\frac{1}{e}$$", "$$2$$", "$$e$$"],
        answer: "③",
      },
      {
        question: "함수$$f(x) = (\\sin^{-1} x)^2$$일 때,$$f''(0)$$의 값은?",
        choices: ["$$1$$", "$$2$$", "$$3$$", "$$4$$", "$$5$$"],
        answer: "②",
      },
      {
        question:
          "변수$$x, y$$가 매개변수$$t$$로 표현되어 있다. 함수$$f(t) = \\frac{dy}{dx}$$일 때,$$\\frac{d f}{dt}$$를 바르게 구한 것은?",
        choices: [
          "$$\\frac{d^2 y}{dx^2}$$",
          "$$\\frac{d^2 y}{dx^2} \\frac{dx}{dt}$$",
          "$$\\frac{d^2 x}{dt^2} \\frac{dy}{dx}$$",
          "$$\\frac{d^2 y}{dx^2} / \\frac{d^2 x}{dt^2}$$",
        ],
        answer: "②",
      },
    ],
    130: [
      {
        question:
          "함수$$f$$가 일대일 대응이고 두 번 미분 가능한 함수라 하자.$$f$$의 역함수를$$g$$라 할 때,$$g''(x) = \\alpha \\frac{f''(g(x))}{ \\left\\{f'(g(x)) \\right\\}^\\beta }$$가 성립한다. 이 때$$\\alpha + \\beta$$의 값은?",
        choices: ["$$0$$", "$$1$$", "$$2$$", "$$3$$", "$$4$$"],
        answer: "③",
      },
      {
        question:
          "$$f(x) = 3x + 2\\cos x$$의 역함수를$$g$$라 할 때,$$g''(2)$$의 값을 구하면?",
        choices: [
          "$$\\frac{1}{27}$$",
          "$$\\frac{2}{27}$$",
          "$$\\frac{1}{9}$$",
          "$$\\frac{2}{9}$$",
        ],
        answer: "②",
      },
      {
        question: "$$f(x) = 2x + \\ln x$$일 때,$$(f^{-1})''(2)$$의 값은?",
        choices: [
          "$$-1$$",
          "$$-\\frac{1}{9}$$",
          "$$\\frac{1}{9}$$",
          "$$\\frac{1}{27}$$",
        ],
        answer: "③",
      },
      {
        question:
          "$$y = f(x), x = g(z)$$이고$$f$$와$$g$$는 모두 2계도함수가 존재한다고 할 때$$\\frac{d^2 y}{dx^2}$$의 값은?",
        choices: [
          "$$f''(x) g'(z) + f'(x) g''(z)$$",
          "$$f''(x)(g'(z))^2 + f'(x) g''(z)$$",
          "$$f''(x) g'(z) + (f'(x))^2 g''(z)$$",
          "$$2f''(x) g'(z) + f'(x) g''(z)$$",
          "$$f''(x) g'(z) + 2f'(x) g''(z)$$",
        ],
        answer: "②",
      },
    ],
    131: [
      {
        question:
          "매개방정식$$x = t^2, y = t^3$$에서$$t = 6$$일 때,$$\\frac{d^2 y}{dx^2}$$의 값은?",
        choices: [
          "$$0$$",
          "$$\\frac{1}{16}$$",
          "$$\\frac{1}{8}$$",
          "$$1$$",
          "$$2$$",
        ],
        answer: "③",
      },
      {
        question:
          "함수$$x = \\tanh \\theta, y = \\text{sech} \\theta$$라 할 때, 2계도함수$$\\frac{d^2 y}{dx^2}$$는?",
        choices: [
          "$$\\frac{1}{(1-x^2)x}$$",
          "$$-\\frac{\\sqrt{1-x^2}}{x}$$",
          "$$-\\frac{\\sqrt{1-y^2}}{y}$$",
          "$$-\\frac{1}{y^3}$$",
        ],
        answer: "④",
      },
      {
        question:
          "$$x = t + t^2, y = t - \\frac{4}{3} t^3$$일 때,$$t = 1$$에서$$\\frac{d^2 y}{dx^2}$$의 값은?",
        choices: ["$$-1$$", "$$-\\frac{2}{3}$$", "$$0$$", "$$\\frac{4}{3}$$"],
        answer: "②",
      },
      {
        question:
          "매개곡선$$x = t^2 + 1, y = t^2 + t$$위의 점$$(5,6)$$에서$$\\frac{d^2 y}{dx^2}$$의 값은?",
        choices: [
          "$$-\\frac{1}{16}$$",
          "$$-\\frac{1}{32}$$",
          "$$0$$",
          "$$\\frac{1}{32}$$",
          "$$\\frac{1}{16}$$",
        ],
        answer: "②",
      },
    ],
    132: [
      {
        question:
          "실수$$t$$의 함수$$x = \\sin t, y = 5 - 4\\cos t$$에 대하여$$t = \\frac{\\pi}{3}$$에서$$\\frac{d^2 y}{dx^2}$$의 값을 구하면?",
        choices: [
          "$$\\frac{8\\sqrt{3}}{3}$$",
          "$$8\\sqrt{3}$$",
          "$$16$$",
          "$$32$$",
        ],
        answer: "④",
      },
      {
        question:
          "$$x = 2t, y = t^2 - 3$$일 때,$$\\frac{d^2 y}{dx^2}$$의 값은?",
        choices: ["$$-\\frac{1}{2}$$", "$$-1$$", "$$\\frac{1}{2}$$", "$$1$$"],
        answer: "③",
      },
      {
        question:
          "$$t$$에서 어떤 점의 위치가$$(2t+1, 2t^2+2t+1)$$일 때,$$\\frac{d^2 y}{dx^2}$$는?",
        choices: ["$$1$$", "$$2$$", "$$3$$", "$$4$$"],
        answer: "①",
      },
      {
        question:
          "$$x = \\cos \\theta, y = \\sin \\theta \\quad (0 < \\theta < \\frac{\\pi}{2})$$일 때,$$\\frac{d^2 y}{dx^2}$$는?",
        choices: [
          "$$\\frac{1}{(1-x^2)x}$$",
          "$$\\frac{1}{x^2(\\sqrt{1-x^2})}$$",
          "$$\\frac{-1}{(1-x^2)\\sqrt{1-x^2}}$$",
          "$$\\frac{-\\sqrt{1-x^2}}{x}$$",
        ],
        answer: "③",
      },
    ],
    133: [
      {
        question:
          "$$t = \\frac{7\\pi}{4} \\text{일 때, 다음 매개 방정식에 대해 } \\frac{dy}{dx} / \\frac{d^2y}{dx^2} \\text{의 값은?}$$",
        example: ["$$x(t) = a + 20 \\cos t, \\quad y(t) = c + 19 \\sin t$$"],
        choices: [
          "$$\\frac{20}{c^2}$$",
          "$$\\frac{10}{\\sqrt{2}}$$",
          "$$\\frac{a^2}{19}$$",
          "$$\\frac{19}{10}$$",
          "$$-\\frac{19}{2\\sqrt{2}}$$",
        ],
        answer: "②",
      },
      {
        question:
          "매개방정식$$x = e^{-2t} \\sin t, y = e^{-2t} \\cos t$$위의 점$$(0,1)$$에서$$\\frac{d^2 y}{dx^2}$$의 값은?",
        choices: ["$$-5$$", "$$-\\frac{3}{2}$$", "$$1$$", "$$3$$"],
        answer: "①",
      },
      {
        question:
          "음함수$$xy + 2x^2 - y^2 = 0$$에 대해 점$$(1,-1)$$에서$$\\frac{d^2 y}{dx^2}$$의 값은?",
        choices: ["$$0$$", "$$-3$$", "$$\\frac{1}{3}$$", "$$-9$$"],
        answer: "①",
      },
      {
        question: "$$x^4 + y^4 = 16$$일 때, 이계도함수$$y''$$를 구하면?",
        choices: [
          "$$\\frac{3x^3 y^3 - 3x^2 y^3}{y^6}$$",
          "$$\\frac{24x^2}{y^7}$$",
          "$$\\frac{-48x^2}{y^7}$$",
          "$$\\frac{48x^2}{y^7}$$",
        ],
        answer: "③",
      },
    ],
    134: [
      {
        question:
          "$$\\frac{1}{2} x^2 - \\frac{1}{3} y^3 = \\frac{1}{4}$$일 때,$$\\frac{d^2 y}{dx^2}$$의 값은?",
        choices: [
          "$$\\frac{x}{y^3}$$",
          "$$\\frac{y - 2x}{y^3}$$",
          "$$\\frac{y^3 - 2x^2}{y^5}$$",
          "$$\\frac{y^3 + 2x^2}{y}$$",
        ],
        answer: "③",
      },
      {
        question:
          "곡선$$x^4 + y^2 = 4$$위의 점$$(-1, \\sqrt{3})$$에서$$\\frac{d^2 y}{dx^2}$$를 구하라.",
        choices: [
          "$$-\\frac{22}{3\\sqrt{3}}$$",
          "$$-22\\sqrt{3}$$",
          "$$0$$",
          "$$22\\sqrt{3}$$",
          "$$\\frac{22}{3\\sqrt{3}}$$",
        ],
        answer: "①",
      },
      {
        question:
          "$$x^2 + xy - y^2 = 1$$위의 점$$(1,1)$$에서$$\\frac{d^2 y}{dx^2}$$는?",
        choices: ["$$-5$$", "$$-\\frac{23}{5}$$", "$$0$$", "$$10$$", "$$-10$$"],
        answer: "⑤",
      },
      {
        question:
          "곡선$$x^4 + y^4 = 16$$위의 점$$(\\sqrt[4]{8}, -\\sqrt[4]{8})$$에서$$y''$$의 값은?",
        choices: [
          "$$\\sqrt[4]{2}$$",
          "$$2\\sqrt[4]{2}$$",
          "$$3\\sqrt[4]{2}$$",
          "$$4\\sqrt[4]{2}$$",
        ],
        answer: "③",
      },
    ],
    135: [
      {
        question:
          "관계식$$x^3 + y^3 - xy = 1$$에 의해 점$$(1,1)$$근처에서 정의된 함수$$y = f(x)$$를 생각한다. 이 때$$f'(1) + f''(1)$$의 값을 구하면?",
        choices: ["$$-5$$", "$$-6$$", "$$-7$$", "$$-8$$"],
        answer: "④",
      },
      {
        question:
          "$$\\sin(x+y) = y^2 \\cos x$$를 만족 할 때,$$(x,y) = (0,0)$$에서$$\\frac{d^2 y}{dx^2}$$을 구하면?",
        choices: ["$$1$$", "$$2$$", "$$-1$$", "$$-2$$"],
        answer: "②",
      },
      {
        question:
          "곡선$$x^4 + y^4 = 16$$위의 점$$(\\sqrt[4]{8}, -\\sqrt[4]{8})$$에서$$y''$$의 값은?",
        choices: [
          "$$\\sqrt[4]{2}$$",
          "$$2\\sqrt[4]{2}$$",
          "$$3\\sqrt[4]{2}$$",
          "$$4\\sqrt[4]{2}$$",
        ],
        answer: "③",
      },
      {
        question:
          "곡선$$x^4 + y^2 = 4$$위의 점$$(-1, \\sqrt{3})$$에서$$\\frac{d^2 y}{dx^2}$$를 구하라.",
        choices: [
          "$$-\\frac{22}{3\\sqrt{3}}$$",
          "$$-22\\sqrt{3}$$",
          "$$0$$",
          "$$22\\sqrt{3}$$",
          "$$\\frac{22}{3\\sqrt{3}}$$",
        ],
        answer: "①",
      },
      {
        question:
          "다음 매개곡선$$\\begin{cases} x = t - 3\\sin t \\\\ y = 3 - 2\\cos t \\end{cases}$$에 대하여$$t = \\frac{\\pi}{3}$$에서$$\\frac{d^2 y}{dx^2}$$의 값은?",
        choices: [
          "$$-15\\sqrt{3} - 26$$",
          "$$-40$$",
          "$$0$$",
          "$$40$$",
          "$$15\\sqrt{3} - 26$$",
        ],
        answer: "④",
      },
    ],
    136: [
      {
        question:
          "방정식$$x^4 + y^4 = 2$$가 변수$$y$$를$$x$$의 음함수로 정의할 때,$$0$$이 아닌$$y$$에서$$y$$의 이계도함수는$$y'' = ax^b y^c$$이다. 이때$$a + b + c$$의 값은? (단,$$a,b,c$$는 실수)",
        choices: ["$$-15$$", "$$-11$$", "$$1$$", "$$3$$", "$$15$$"],
        answer: "②",
      },
      {
        question:
          "매개곡선$$x = t^4 - 1, y = t^3 - 17t + 1$$에 대하여$$t = 1$$일 때,$$\\frac{d^2 y}{dx^2}$$의 값을 구하면?",
        choices: ["$$0$$", "$$1$$", "$$2$$", "$$3$$", "$$4$$"],
        answer: "④",
      },
      {
        question:
          "두 번 미분가능한 함수$$f(x)$$가$$x > 0$$에서$$\\frac{d^2}{dx^2} f(2x) = \\sin^2 x f(2x)$$,$$f(\\frac{\\pi}{2}) = 1$$,$$f'(\\frac{\\pi}{2}) = 0$$을 만족한다.$$x = \\frac{\\pi}{4}$$일 때,$$\\frac{d^2}{dx^2} f(\\sqrt{x})$$의 값은?",
        choices: [
          "$$\\frac{1}{16 \\pi^2}$$",
          "$$\\frac{1}{8 \\pi^2}$$",
          "$$\\frac{1}{4 \\pi^2}$$",
          "$$\\frac{1}{2 \\pi^2}$$",
        ],
        answer: "②",
      },
      {
        question:
          "두 번 미분가능한 함수$$f(x)$$가$$x > 0$$에서$$\\frac{d^2}{dx^2} f(2x) = x \\tan^{-1} x f(2x)$$,$$f(2) = 1$$,$$f'(2) = -1$$을 만족한다.$$x = \\frac{1}{2}$$일 때,$$\\frac{d^2}{dx^2} f(\\frac{1}{x})$$의 값은?",
        choices: [
          "$$\\frac{\\pi}{2}$$",
          "$$\\frac{\\pi}{12} - 4$$",
          "$$\\frac{\\pi}{2} - 16$$",
          "$$\\pi - 16$$",
        ],
        answer: "④",
      },
    ],
    137: [
      {
        question: "함수$$y = x^{10}$$의$$10$$계 도함수는?",
        choices: ["$$10$$", "$$10!$$", "$$11$$", "$$0$$"],
        answer: "②",
      },
      {
        question: "$$\\frac{d^9}{dx^9} (x^8 \\ln x)$$는?",
        choices: [
          "$$\\frac{9!}{x}$$",
          "$$\\frac{8!}{x}$$",
          "$$\\frac{9!}{x^2}$$",
          "$$\\frac{8!}{x^2}$$",
        ],
        answer: "②",
      },
      {
        question:
          "$$x = \\pi$$에서 미분값$$\\frac{d^{2019}}{dx^{2019}}(\\sin x)$$을 구하면?",
        choices: ["$$-1$$", "$$0$$", "$$1$$", "$$\\infty$$"],
        answer: "③",
      },
    ],
    138: [
      {
        question:
          "$$y = \\frac{1}{1 - 3x}$$일 때,$$\\frac{d^n y}{dx^n}$$를 구하면?",
        choices: [
          "$$n!3^{n+1}(1 - 3x)^{-n}$$",
          "$$n!3^n(1 - 3x)^{-(n+1)}$$",
          "$$(-1)^n n! 3^n (1 - 3x)^{-(n+1)}$$",
          "$$(-1)^n (n-1)! 3^n (1 - 3x)^{-(n+1)}$$",
        ],
        answer: "②",
      },
      {
        question: "$$y = \\sin \\alpha x$$의$$n$$계 도함수는?",
        choices: [
          "$$\\alpha^n \\sin \\left( \\frac{n\\pi}{2} + \\alpha x \\right)$$",
          "$$\\alpha^n \\sin \\left( \\frac{n\\pi}{4} - \\alpha x \\right)$$",
          "$$\\alpha^n + \\cos \\left( \\frac{n\\pi}{2} + \\alpha x \\right)$$",
          "$$\\alpha^n \\cos \\left( \\frac{n\\pi}{4} + \\alpha x \\right)$$",
        ],
        answer: "①",
      },
      {
        question:
          "$$f(x) = (x+1)\\ln(x+1)$$에 대해$$f$$의$$n$$계도함수$$\\frac{d^n f(x)}{dx^n}$$($$n \\geq 2$$)를 구하면?",
        choices: [
          "$$(-1)^n(n-1)! (x+1)^{-n}$$",
          "$$(-1)^{n+1} (n-1)! (x+1)^{-n-1}$$",
          "$$(-1)^n (n-2)! (x+1)^{-n+1}$$",
          "$$(-1)^{n+1} (n-2)! (x+1)^{-n}$$",
        ],
        answer: "③",
      },
    ],
    139: [
      {
        question:
          "$$f(x) = \\frac{d^{35}}{dx^{35}} (x \\sin x)$$라 할 때,$$f(\\pi)$$의 값은?",
        choices: ["$$-\\pi$$", "$$\\pi$$", "$$35$$", "$$35\\pi$$"],
        answer: "②",
      },
      {
        question:
          "함수$$f(x) = x e^x$$에 대해 미분값$$f^{(2013)}(1)$$을 구하면?",
        choices: [
          "$$2012e$$",
          "$$2014e$$",
          "$$2013$$",
          "$$2013e$$",
          "$$2015$$",
        ],
        answer: "②",
      },
      {
        question: "$$f(x) = x^2 e^x$$일 때$$f^{(100)}(1)$$의 값을 구하면?",
        choices: ["$$e$$", "$$100e$$", "$$101e$$", "$$10001e$$", "$$10101e$$"],
        answer: "⑤",
      },
    ],
    140: [
      {
        question:
          "임의의 자연수$$n$$에 대하여 두 함수$$f(x)$$와$$g(x)$$는$$n$$번 미분 가능하다. 두 함수의 곱$$fg$$의 4계 도함수가 다음과 같을 때$$\\sum_{r=0}^4 a_r$$의 값을 구하면?",
        example: "$$\\sum_{r=0}^4 a_r f^{(4-r)}(x) g^{(r)}(x)$$",
        choices: ["$$15$$", "$$16$$", "$$17$$", "$$18$$", "$$19$$"],
        answer: "②",
      },
      {
        question:
          "7번 미분 가능한 임의의 두 함수$$f, g : \\mathbb{R} \\to \\mathbb{R}$$에 대하여$$(fg)^{(7)} = f^{(7)}g + a_6 f^{(6)}g^{(1)} + a_5 f^{(5)}g^{(2)} + \\cdots + a_1 f^{(1)}g^{(6)} + f g^{(7)}$$으로 나타낼 때, 상수$$a_1, a_2, ..., a_6$$의 평균은?",
        choices: ["$$20$$", "$$21$$", "$$24$$", "$$28$$", "$$35$$"],
        answer: "②",
      },
      {
        question:
          "구간$$I$$에서 무한 번 미분 가능한 두 함수$$f$$와$$g$$의 곱$$fg$$의 10계 도함수를 다음과 같이 쓸 때,$$a_0 + a_2 + a_4 + a_6 + a_8 + a_{10}$$의 값은?",
        example:
          "$$(fg)^{(10)}(x) = \\sum_{r=0}^{10} a_r f^{(10 - r)}(x) g^{(r)}(x), \\quad x \\in I$$",
        choices: ["$$512$$", "$$511$$", "$$1024$$", "$$1023$$", "$$1025$$"],
        answer: "①",
      },
    ],
    141: [
      {
        question:
          "집합$$I$$에서 두 함수$$f$$와$$g$$의$$n$$계 도함수가 존재할 때 다음 식의 값을 구하면?",
        example:
          "$$\\left(fg\\right)^{(n)}(x) = \\sum_{r=1}^{n} \\frac{n!}{(n - r)!r!} f^{(n - r)}(x)g^{(r)}(x), \\quad x \\in I$$",
        choices: [
          "$$0$$",
          "$$f^{(n)}(x)g(x)$$",
          "$$f(x)g^{(n)}(x)$$",
          "$$1$$",
          "$$-1$$",
        ],
        answer: "②",
      },
      {
        question:
          "급수$$\\sum_{k=2}^{2021} \\binom{2021}{k} k^{k-1} (-1)^{2021-k}$$의 값을 구하시오. (단,$$\\binom{2021}{k}=_{2021}C_k$$)",
        choices: ["$$-4040$$", "$$-2021$$", "$$2020$$", "$$2021$$", "$$4040$$"],
        answer: "①",
      },
      {
        question:
          "실수전체집합에서 무한히 미분가능한 두 함수$$f(x), g(x)$$의$$x=1$$에서$$n$$차 도함수의 값이 각각$$(-2)^n$$,$$(-3)^n$$이라 할 때,$$x=1$$에서$$f(x)g(x)$$의 8 차 도함수의 값은?",
        choices: ["$$1$$", "$$2^8$$", "$$3^8$$", "$$5^3$$"],
        answer: "④",
      },
    ],
  },
};
