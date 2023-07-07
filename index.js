const leftInput = document.getElementById("left");
const centerInput = document.getElementById("center");
const rightInput = document.getElementById("right");
const resultDom = document.getElementById("result");
const actionButton = document.getElementById("action");

/**
 * a, b의 숫자 값과 operator를 이용하여 계산기를 만드시오.
 * 기본 적으로 +, -, -, / 가 동작해야함.
 * 결과값을 return 만 해주면 됨.
 */
function calculate(a, b, operator) {
  if (operator === "+") {
    return a + b;
  }

  return 0;
}

function renderResult() {
  const a = Number(leftInput.value);
  const b = Number(rightInput.value);
  const operator = centerInput.value;

  const result = calculate(a, b, operator);

  resultDom.innerHTML = `${result}`;
}

actionButton.addEventListener("click", renderResult);
