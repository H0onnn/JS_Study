// x의 n제곱을 반환해주는 함수, pow(x,n)를 만들어보세요. x의 n 제곱은 x를 n번 곱해서 만들 수 있습니다.

// pow(3, 2) = 3 * 3 = 9
// pow(3, 3) = 3 * 3 * 3 = 27

// 프롬프트 대화상자를 띄워 사용자로부터 x와 n을 입력받고 pow(x,n)의 반환 값을 보여주는 코드를 작성해 보세요.

// 주의사항: n은 1 이상의 자연수이어야 합니다. 이외의 경우엔 자연수를 입력하라는 얼럿 창을 띄워주어야 합니다.

// answer
function pow(x, n) {
  let result = 1;

  for (let i = 0; i < n; i++) {
    result *= x;
  }

  return result;
}

let x = prompt("x를 입력해주세요.", "");
let n = prompt("n을 입력해주세요.", "");

if (n < 1) {
  alert("자연수를 입력하세요.");
} else {
  alert(pow(x, n));
}
