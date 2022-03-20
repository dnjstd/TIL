## 호이스팅(Hoisting)이란?
변수를 선언하고 초기화했을 때, 선언 부분이 최상단으로 끌어올려지는 현상.

> ✨ <b>변수 선언 3단계</b><br/>
선언 → 초기화 → 할당



## 호이스팅 대상

- `var 변수 선언`, `함수선언문`
- let, const 변수 선언도 호이스팅이 발생하지만, TDZ의 영향으로 호이스팅이 발생되지 않는 것처럼 동작한다.
<br/>

## 변수 호이스팅 (var, let, const)

```
console.log(name1) // undefined 출력
var name1 = ‘123’

console.log(name2) // ReferenceError 에러 출력
let name2 = ‘123’; 

console.log(name3) // ReferenceError 에러 출력
const name3 = ‘123’; 
```

- 모든 변수 선언에는 호이스팅이 일어난다.
- let, const 변수 선언은 호이스팅이 발생하지 않는 것처럼 동작한다.
- `let 변수 선언`은 선언문 이전에 참조하면 `참조 에러(ReferenceError)가 발생`한다.
  - 선언만 호이스팅되고 초기화 되기 전까지 `일시적 사각지대`(Temporal Dead Zone; TDZ)영역에 속하기 때문

### 호이스팅 예시

```jsx
console.log(name1) // undefined 출력
var name1 = ‘123’

// 아래와 같이 실행된다.

var name1 ; //선언 분리되어 상단으로 호출
console.log(name1) //undefined
name1 = '123' // 할당
console.log(name1) // 123 출력
```
- 변수 선언만 끌어올리고, 할당은 끌어 올려지지 않는다. 
- 변수에 값이 할당되기 전 호출했기 때문에 undefined가 출력된다.
<br/>

## 함수 선언문/함수 표현식 호이스팅

- 일반 함수선언문은 호이스팅이 발생하고, 함수표현식은 호이스팅이 발생하지 않는다.

### 호이스팅 예시

```jsx
🌱 함수 선언문

myName();

function myName(){
	console.log('soyeon');
} 
// 정상 작동
// 아래와 같이 실행된다.

function myName(){
	console.log('soyeon')
}

myName(); //soyeon 출력
```

- 함수 선언이 최상단으로 끌어올려지기 때문에 myName()을 먼저 호출해도 정상 동작한다.
<br/>

```jsx
🌱 함수 표현식

myName(); 

var myName = function(){
	console.log('soyeon');
}

// 에러 발생
// 아래와 같이 실행된다.

var myName; //선언과 할당 분리

myName();

myName = function(){
	console.log('soyeon')
}

```

- 함수표현식은 변수 안에 함수를 할당하는 형태이다.
- 함수를 담은 변수가 호이스팅의 영향을 받기 때문에, 선언과 할당이 분리된다.
- 선언만 끌어올리고 할당은 끌어올리지 못하므로 ReferenceError가 발생한다.
