## 브라우저 구조

![](https://images.velog.io/images/dnjstd/post/762e0872-1b36-407c-b95b-08788a1edef4/img.png)

- `User Interface`: 주소 표시줄, 이전/다음 버튼, 북마크 메뉴 등. 페이지를 보여주는 창 외 모든 부분
- `Browser Engine`: User Interface와 Rendering Engine 사이의 동작을 제어
- `Rendering Engine`: 요청한 콘텐츠를 표시, 웹페이지를 요청하면 HTML과 CSS를 파싱 하여 화면에 표시
- `Networking`: HTTP 요청과 같은 네트워크 호출에 사용
- `Javascript Interpreter`(또는 Engine): 자바스크립트 코드를 해석하고 실행. 크롬에서는 V8 엔진을 사용
- `UI Backend`: 기본적인 위젯(select, input 등)을 그림
- `Data Persistence`: Local Storage, 쿠키 등 클라이언트 사이드에서 데이터를 저장하는 영역
  <br/><br/>

## 렌더링 엔진

브라우저에서 요청된 웹페이지에 포함된 요소들(html,css,js, 이미지 등)을 화면에 보여주기 위해 `렌더링 엔진`이 동작한다.

#### 각 브라우저가 사용하는 렌더링 엔진

> Chrome - Blink(Webkit에서 갈라져나온 엔진)
> Safari - Webkit
> Firefox - Gecko

<br/><br/>

## 렌더링 엔진의 동작과정 Critical Rendering Path (CRP)

![](https://images.velog.io/images/dnjstd/post/68b74d15-c02c-4ec8-9291-99b37aa84034/understanding-the-critical-rendering-path.png)
크게 5단계로 구성된다.

#### 🌱 1. HTML 문서 파싱 → DOM 트리 구축

DOM(Document Object Model) : 구문 분석 된 HTML페이지의 객체 표현.

#### 🌱 2. CSS 문서 파싱 → CSSOM 트리 구축

CSSOM(CSS Object Model): DOM과 연관된 스타일의 객체 표현. DOM이 어떻게 화면에 표시될지 알려주는 역할

#### 🌱 3. DOM + CSSOM → ‘Render 트리’라는 또 다른 트리를 생성

#### 🌱 4. Layout 생성

- 뷰포트 내에서 요소들의 정학한 위치와 크기를 계산하는 과정
- 박스 모델에 따라 텍스트나 요소의 박스가 화면에서 차지하는 영역이나 여백 이외의 스타일 속성이 계산된다.
- %, em 같은 상대적인 단위를 사용했을 때는 기기의 뷰포트에 맞춰서 픽셀단위로 변환된다.
- 메타 뷰포트 값은 해당 장치 너비에 맞게 뷰포트 크기를 설정하는 것이 가장 일반적이므로 아래와 같은 코드를 사용한다.

```
<meta name="viewport" content="width=device-width,initial-scale=1">
```

#### 🌱 5. Painting

- 마지막 Painting 단계에서 페이지의 내용을 픽셀로 변환하여 화면에 표시한다.
- 렌더트리에 포함된 요소나 , 텍스트, 이미지들이 실제 픽셀로 그려진다.

<br/>

![](https://images.velog.io/images/dnjstd/post/41e562f2-1111-43ae-814b-58cba4904711/helloworld-59361-3.png)

> Critical Rendering Path의 시간을 줄이면, 브라우저가 웹 페이지를 보여주는데 걸리는 시간을 줄일 수 있다.
