# Axios

브라우저와 Node.js를 위한 HTTP 통신 라이브러리. <br/>
비동기로 HTTP 통신을 할 수 있으며 return을 promise객체(Json형식)로 해준다.

## Axios 장점

- Promise 기반으로 만들어졌기 때문에 데이터를 다루기 편리하다.
- response timeout 처리 방법이 존재한다.
- 브라우저 호환성이 뛰어나다. fetch와 다르게 IE11까지도 지원한다.

## Axios 단점

- 사용을 위해 npm 설치가 필요하다.

<br/><br/>

# fetch

ES6부터 지원된 비동기 통신을 위한 JavaScript 내장 라이브러리. <br/>

## fetch 장점

- Promise 기반으로 만들어졌기 때문에 데이터를 다루기 편리하다.
- JS 내장 라이브러리여서 별도로 import 할 필요가 없다.
- 내장 라이브러리라는 장점으로 상당히 편리하며 업데이트에 따른 에러 방지가 가능하다.

## fetch 단점

- 지원하지 않는 브라우저가 있다. (IE11)
- response timeout이 없다. 네트워크 에러 발생 시 기다려야 한다.
- json으로 변환해주는 과정이 필요하다.
- axios에 비해 상대적으로 기능이 부족하다.
