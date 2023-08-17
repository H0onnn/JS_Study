// for 반복문을 이용하여 2부터 10까지 숫자 중 짝수만을 출력해보세요.

// answer 1
for (let i = 2; i <= 10; i += 2) {
  if (i % 2 === 0) {
    console.log(i);
  }
}

// answer 2 continue를 사용한 방법
for (let i = 2; i <= 10; i++) {
  if (i % 2 === 0) {
    console.log(i);
  } else {
    continue;
  }
}
