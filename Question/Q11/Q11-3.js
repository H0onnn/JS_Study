// a와 b 중 작은 값을 반환해주는 함수, min(a,b)을 만들어보세요.

// 만든 함수는 아래와 같이 동작해야 합니다.

// answer
function min(a, b) {
  return a < b ? a : b;
}

min(2, 5) == 2;
min(3, -1) == -1;
min(1, 1) == 1;
