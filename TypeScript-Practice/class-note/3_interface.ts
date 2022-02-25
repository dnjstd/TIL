interface User {
  age: number;
  name: string;
}

//변수에 인터페이스 활용
const yeon: User = {
  age: 26,
  name: "sy",
};

//함수에 인터페이스 활용
function getUser(user: User) {
  console.log(user);
}
const capt = {
  name: "캡틴",
  age: 100,
};
getUser(capt);

//함수의 스펙(구조)에 인터페이스를 활용
interface SumFuntion {
  (a: number, b: number): number;
}

let sum: SumFuntion;
sum = function (a: number, b: number) {
  return a + b;
};

//인덱싱
interface StringArray {
  [index: number]: string;
}

var arr: StringArray = ["a", "b", "c"];
arr[0]; //'a'
