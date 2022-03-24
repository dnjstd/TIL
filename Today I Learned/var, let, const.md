## 함수 레벨 스코프(Function-level scope) - var

함수 내에서 선언된 변수는 **함수 내에서만 유효**하며 함수 외부에서는 참조할 수 없다. 즉, 함수 내부에서 선언한 변수는 지역 변수이며 함수 외부에서 선언한 변수는 모두 전역 변수이다.

✔️대부분의 프로그래밍 언어는 블록 레벨 스코프를 적용하지만, 자바스크립트는 함수 레벨 스코프를 적용한다.

## 블록 레벨 스코프(Block-level scope) - let, const

모든 코드 블록(함수, if 문, for 문, try/catch 문 등) 내에서 선언된 변수는 코드 블록 내에서만 유효하며 코드 블록 외부에서는 참조할 수 없다. 즉, 코드 블록 내부에서 선언한 변수는 지역 변수이다
- 코드 블록 : 간단히 {} 중괄호로 묶여진 코드
```
let foo = 123;

{
  let foo = 456; //지역변수
  let bar = 456; //지역변수
}

console.log(foo); // 123

console.log(bar); // ReferenceError: bar is not defined
```

---
## var

```jsx
var foo = 123;

console.log(foo); // '123'
var foo = 456;  // 중복 선언 허용

console.log(foo); // '456'
```

- **Function level scope**
    - `var` 키워드는 **함수 레벨 스코프**만을 허용한다. (함수를 제외한 다른 문에서 선언된 함수는 모두 전역함수가 된다. **전역변수의 남발**로 이어질 수 있다.)
- 변수 재선언 가능
- 코드량이 많아지면 같은 이름의 변수명을 남용하여, 값이 바뀌는 문제가 생길 수 있다.
- ✨ 이를 보완하기 위해 ES6부터 새로운 변수 선언 방식 let, const가 추가되었다.


## let

```jsx
let foo = '123'; 
console.log(foo); // '123'

foo = '456'; //재할당
console.log(foo); // '456'

let foo = 789'; //재선언
console.log(foo); //Uncaught SyntaxError: Identifier 'variable' has already been declared
```

- **Block-level scope**
- 변수 재선언 불가능, 재할당 가능
- let 키워드로 선언된 변수를 선언문 이전에 참조하면 참조 에러(ReferenceError)가 발생한다. 이는 let 키워드로 선언된 변수는 스코프의 시작에서 변수의 선언까지 **일시적 사각지대(Temporal Dead Zone; TDZ)** 에 빠지기 때문



## const

- **Block-level scope**
- 변수 재선언, 재할당 불가능하다. (선언과 동시에 할당이 되기때문)
- let과 다른점은 재할당도 불가능 하다는것이다.

<br/><br/>

---
정리

**var 와 let, const의 차이점은 무엇인가? (function scope와 block scope의 개념에서)**
var는 함수 레벨 스코프를 적용하고 let,const는 블록레벨 스코프를 적용한다. 함수 레벨 스코프는 함수를 제외한 다른 문에서 선언된 변수는 모두 전역으로 관리되기 때문에. 전역 변수의 남용과 중복 사용으로 이어져 값이 바뀌는 문제가 생길 수 있다. 이를 보완하기 위해 let, const 가 만들어졌다. let과 const는 공통적으로 재선언이 되지 않는다. 그러나 let은 재할당이 가능하고, const는 재선언,재할당이 불가능하다. 
<br/>

**let 과 const 의 공통점, 차이점?**
차이점 : let은 재할당이 가능하고, const는 선언과 동시에 할당이 되기에 재할당이 불가능하다.
공통점 : block-scope를 적용하다는것, 재선언이 불가능하다는것.
<br/>

**어떤 변수 선언 방식을 써야하는지?**
변수 선언에는 기본적으로 const를 사용하고, 재할당이 필요한 경우에 한정해 let을 사용하는 것이 좋다.
