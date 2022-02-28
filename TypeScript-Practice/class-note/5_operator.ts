//union type: 특정 변수나 파라미터에 한가지 이상의 타입을 쓰고 싶을때 사용

function logMessage(value: string | number) {
  console.log(value);
}

logMessage("hello");
logMessage(100);
