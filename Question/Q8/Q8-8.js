// 아래 표현식에서 어떤 alert가 실행될까요?

// if(...) 안에 표현식이 있으면 어떤 일이 일어날까요?

if (-1 || 0) alert("first");
if (-1 && 0) alert("second");
if (null || (-1 && 1)) alert("third");

// first, third
