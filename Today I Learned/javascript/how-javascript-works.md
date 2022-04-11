## 자바스크립트 엔진이 코드를 실행하는 과정

자바스크립트를 실행하기 위해서는 `자바스크립트 엔진`이 필요하다. <br/>
웹 브라우저는 자바스크립트 엔진을 내장하고 있다.

### 브라우저마다 다른 JS엔진

크롬 - `V8` <br/>
사파리 - `웹킷`



### 실행 과정

1. 소스코드를 파싱하여 AST(Abstract Syntax Tree)로 변환한다. - 추상적 문법 트리
2. 인터프리터는 AST를 바이트코드로 생성한다.
    - 인터프리터? 해석기. 프로그래밍 언어를 바로 실행하는 컴퓨터 프로그램 환경
    - 바이트코드? 하드웨어가 아닌 가상 컴퓨터 실행 프로그램을 위한 이진 표현법
3. 인터프리터가 바이트코드와 프로파일링 데이터(자주 사용되는 함수, 타입 정보)를 최적화 컴파일러(Optimizing compiler)에 보낸다.
4. 최적화 컴파일러는 프로파일링 데이터를 기반으로 최적화된 코드(Optimizing code)를 생성한다.
5. 하지만, 프로파일링 데이터 중 오류가 있으면 최적화 해제(Deoptimize)를 하고 다시 바이트코드를 실행해서 이전 동작을 반복한다.
<br/>
<br/>

![](https://images.velog.io/images/dnjstd/post/7fca3724-8cb4-4012-8989-8d9bfe8c9041/js%E1%84%8B%E1%85%A6%E1%86%AB%E1%84%8C%E1%85%B5%E1%86%AB%20%E1%84%8F%E1%85%A9%E1%84%83%E1%85%B3%20%E1%84%89%E1%85%B5%E1%86%AF%E1%84%92%E1%85%A2%E1%86%BC.png)