//union type: 특정 변수나 파라미터에 한가지 이상의 타입을 쓰고 싶을때 사용

var seho: string | number | boolean;
function logMessage(value: string | number) {
  if (typeof value === "number") {
    value.toLocaleString();
  }
  if (typeof value === "string") {
    value.toString();
  }
  throw new TypeError("value must be string or number");
}

logMessage("hello");
logMessage(100);

//유니온 타입의 특징

interface Developer {
  name: string;
  skill: string;
}

interface Person {
  name: string;
  age: number;
}

// function askSomeone(someone: Developer | Person) {
//   someone.name; //공통된 속성만 사용 가능
// }
// askSomeone({ name: "soyeon", skill: "웹 개발" });
// askSomeone({ name: "soyeon", age: 27 });

//인터섹션 타입
function askSomeone(someone: Developer & Person) {
  someone.name;
  someone.skill;
  someone.age;
}

askSomeone({ name: "soyeon", skill: "웹 개발", age: 27 });

// var seho: string | number | boolean;
// var seho: string & number & boolean;
