- [비동기 프로그래밍](#비동기-프로그래밍이란)
- [비동기 방식](#비동기-방식이란)
- [AJAX](#ajax)
- [콜백함수](#콜백함수의-개념)
- [Promise](#promise의-개념)
- [async / await](#async-await)

## 동기(Sync)와 비동기(Async)의 차이?

- `동기식 프로그래밍` 어떠한 코드가 실행되고 완료될 때까지 기다렸다가 다음 코드가 순차적으로 처리되는 것
- `비동기식 프로그래밍` 코드가 실행되고 완료되길 기다리지 않고 다음 코드를 먼저 실행하는 것

<br/>

## 비동기 프로그래밍이란

특정 코드의 완료 여부와 무관하게 즉시 다음 코드로 넘어간다. 비동기 방식이 필요한 이유는 코드가 실행되고 완료될 때까지 기다리게 된다면 그동안 빈 화면이 렌더링 되는 문제가 생긴다. 기다리는 동안 다른 작업을 하면서 자원의 효율적 사용이 가능하게 된다.

## 비동기 방식이란

웹페이지를 리로드하지 않고 데이터를 불러오는 방식.
Ajax를 통해 서버에 요청한 후 멈춰있는 것이 아니라 프로그램은 계속 돌아간다는 의미를 내포하고 있다.

<br/><br/>

## AJAX

Asynchronous JavaScript and XML의 약자.
자바스크립트를 이용해 서버와 브라우저가 비동기 방식으로 데이터를 교환할 수 있는 통신 기능이다.

- 페이지 전체를 리로드하지 않고 페이지에서 데이터가 변경되는 일부만 리로드하는 기법이다.
- 최근에는 XML보다 JSON을 많이 사용한다.

### AJAX의 장단점

장점

- 전체를 리로드하지 않고 필요한 부분만 리로드하기 때문에 웹페이지의 속도가 향상된다.
- 서버에서 데이터만 전송하면 되므로 전체적인 코드 양이 줄어든다.

단점

- SEO에 불리하다. AJAX 방식의 웹 어플리케이션은 한 번 받은 HTML을 렌더링 한 후, 서버에서 비동기적으로 필요한 데이터를 가져와 그려내는데 처음 받는 HTML 파일에는 데이터를 채우기 위한 틀만 작성되어 있는 경우가 많기때문에 사이트의 정보 수집이 어렵다.
- 히스토리 관리가 되지 않는다.
- 연속으로 데이터를 요청하면 서버에 과부하를 줄 수 있다.
- 페이지의 이동이 없는 통신으로 보안상의 문제가 있다.

<br/><br/>

## 콜백함수의 개념

- 다른함수의 인자로써 이용되는 함수이다.
- 순차적으로 코드를 실행하고 싶을 때 사용한다.
- ES6 이전에 비동기 프로그래밍을 할 때 사용된 방법이다.
- 콜백지옥에 빠지면 들여쓰기 수준이 높아지며 가독성이 떨어진다. Promise나 Async/Await를 이용해 보완한다.

<br/><br/>

## Promise의 개념

- 비동기를 간편하게 처리할 수 있도록 도와주는 오브젝트이다.
- 콜백 함수의 단점을 보완해 ES6에서 새로 나온 문법이다.
- 성공(resolve), 실패(reject)를 return
- new Promise의 인자인 콜백함수는 호출할 때 바로 실행, 내부에 resolve 또는 reject 함수를 호출하는 구분이 실행되기 전까지는 다음 then or catch 구문으로 넘어가지 않는다.

### Promise의 상태

new Promise()로 프로미스를 생성하고 종료될 때까지 3가지 상태를 갖는다.

1. Pending(대기) : 비동기 처리 로직이 아직 완료되지 않은 상태
2. Fulfilled(이행) : 비동기 처리가 완료되어 프로미스가 결과 값을 반환해준 상태
3. Rejected(실패) : 비동기 처리가 실패하거나 오류가 발생한 상태

### Promise 사용 예제 코드

```
function getData(){
  return new Promise(function (resolve, reject){
    $.get('url 주소/products/1', function(response){
      if(response){
        resolve(response);
      }
      reject(new Error('Request is failed'));
    });
  });
}

//Fulfilled 또는 Rejected의 결과 값 출력

getData().then(function(data){
  console.log(data); //response 값 출력
}).catch(function(err){\
console.log(err); //error출력
})
```

<br/><br/>

## async await

- 기존의 비동기 처리 방식인 콜백 함수와 Promise의 단점을 보완해서 나온 문법.
- Promise 위에 조금 더 간편한 api를 제공한다.
- 다수의 비동기 처리 작업을 할 때 유용하다.
- try/catch를 이용해서 에러를 핸들링 한다.

### async / await 사용 예제 코드

```
async function 함수명(){
  await 비동기_처리_메서드_명();
}
```

함수 내부 로직 중 HTTP 통신을 하는 비동기 처리 코드 앞에 `await`를 붙인다.
! 주의해야할 점 ! : 비동기 처리 메서드가 꼭 Promise 객체를 반환해야 await가 의도대로 동작한다.

<br/>

일반적으로 await의 대상이 되는 비동기 처리 코드는 `axios`등 프로미스를 반환하는 API호출 함수이다.

<br/><br/>

## async / await 와 Promise의 차이

✔️ 에러 핸들링

- Promise는 .catch()문으로 에러 핸들링이 가능하다.
- Async / await은 에러 핸들링 기능이 따로 없어 try/catch()문을 활용한다.
- Promise는 .then()이 이어지는 then 지옥의 가능성이 있기 때문에, 코드가 길어질수록 async/await를 사용하는것이 가독성에 좋다.
