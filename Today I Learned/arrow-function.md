## 화살표 함수
ES6에서 새로 추가되었다. 아래 예시처럼 사용할 수 있다.
```
const pow = x => x * x;
console.log(pow(10)); // 100
```

```
const arr = [1, 2, 3];
const pow = arr.map(x => x * x);

console.log(pow); // [ 1, 4, 9 ]
```

### 화살표 함수는 언제 쓸까?

이름이 없는 익명 함수로, **즉시 실행이 필요할 경우** 사용한다.

### 화살표 함수 왜 쓰는지?

1. 코드의 간결성
	- 기존 함수 표현식과 비교하면 간단하게 사용 가능
	- 본문이 짧은경우 retrun과 중괄호를 생략 가능
2. 콜백함수 this에 값을 참조시킬때 (this 값에 lexical scope를 참조시킬 때)
3. map 사용할 때 this를 넘격주어 코드를 더 쉽게 작성할 수 있음. // 어려워서 잠시 보류

### 화살표 함수 단점?

- 객체 프로토타입으로 메소드를 선언할 때 적합하지 않음
    - 프로토타입 프로퍼티를 가지고 있지 않기 때문에 생성자 함수 사용이 어려움.(일반 함수는 생성자 함수로 사용 가능)
    - arguments변수가 전달되지 않는다. 일반함수에서는 함수가 실행될 때 암묵적으로 arguments변수가 전달되어 사용할 수 있음.

---
## 일반 함수와 화살표 함수의 차이

들어가기전 this와 binding을 알아보자.

### this?
this가 바라보고 있는 객체를 의미한다, **상황에 따라 this의 대상이 달라진다.**
✨ **_this는 함수를 호출할때 결정된다._**

```
const hello = {
  hi: function () {
    console.log(this)
  },
}
hello.hi()// this => hi 출력
```

### binding이란?

- 함수 호출과 실제 함수를 연결하는 방법이다.
- 정적 바인딩(static binding)과 동적 바인딩(dynamic binding)으로 구분할 수 있다.

동적 - 실행 시간에 이루어지거나 실행 시간에 변경됨.
정적 - 실행 시간 전에 일어남. 실행 시간에는 변하지 않는 상태로 유지.

---

## 일반 함수 this

- 일반 함수는 실행될 때마다 함수 내부에 this라는 객체가 추가
- 함수 호출 방식에 의해 this에 바인딩할 객체가 동적으로 결정된다.

```
function fun() {
	this.name = "하이";
    return {
    	name: "바이",
        speak: function () {
        	console.log(this.name);
        },
    };
}

const fun1 = new fun();
fun1.speak(); // 바이
```

## 화살표 함수의 this

- 함수를 선언할 때 this에 바인딩할 객체가 정적으로 결정된다.
- this의 대상이 어떤 객체가 호출했느냐로 결정되지 않는다! 함수 내부에 this가 없기 때문!
- 언제나 상위 스코프(외부)의 this를 가리킨다. 이를 Lexical this라고 한다.

```
function arrFun() {
	this.name = "하이";
    return {
    	name: "바이",
        speak: () => {
        	console.log(this.name);
        },
    };
}

const arrfun1 = new arrFun();
arrfun1.speak(); // 하이
```

---

정리

**화살표 함수는 왜? 언제? 쓰는걸까**
화살표 함수는 ES6에서 새로 추가된 문법, 익명함수이고 함수를 즉시 실행이 필요할 경우에 사용하기 적합하다. 기존 함수 표현식과 비교했을 때 간단하게 사용 가능하다는 장점이 있고, this의 값으로 lexical scope를 참조 시킬 때나 map 사용 시 this를 넘겨주어 코드를 더 쉽게 작성할 수 있기 때문에 사용한다.

**일반함수 this vs 화살표함수 this ?**
일반함수는 this가 동적으로 바인딩되면서 자신이 종속된 객체를 this로 가리킨다. 화살표 함수에서 this는 상위 스코프의 this로 가리키는데 이를 Lexical this 라고 한다. 화살표 함수는 생성자 함수로 사용이 어렵고, arguments변수가 전달되지 않는다. 객체 프로토타입으로 메소드를 선언할 때 화살표 함수는 적합하지 않다.
