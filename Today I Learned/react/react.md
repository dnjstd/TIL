# React

- [라이프사이클(LifeCycle)](#💡️-라이프사이클-lifecycle)
- [리액트의 상태관리](#💡️-리액트의-상태관리-방법)

## 💡️ 라이프사이클-LifeCycle

리액트는 컴포넌트 기반의 뷰를 중심으로 한 라이브러리이다. 각각의 컴포넌트에는 라이프사이클, 즉 수명주기가 존재한다. 컴포넌트의 수명은 보통 페이지에서 렌더링되기 전인 준비 과정에서 시작하여 페이지에서 사라질 때 끝이난다. <br/>
라이프 사이클은 크게 세가지 유형으로 나눌 수 있다. 컴포넌트가 처음 실행되어 돔이 만들어지고 웹 프라우저에 렌더링 되기까지의 과정인 `마운트`, 데이터에 변화가 있을 때인 `업데이트`, 컴포넌트가 제거될때의 `언마운트`이다.

## 💡️ 리액트의 상태관리 방법

리액트의 상태관리에는 Context API, MobX, Redux, Recoil을 사용하는 방법이 있다. 그 중 Redux는 전역 상태를 생성하고 관리하며, 상태 관리 라이브러리 중 압도적으로 많이 사용된다. Redux는 컴포넌트에서 액션 크리에이터로 액션을 생성하고, 그 액션은 디스패치 함수로 실행시킨다. 스토어에서 해당 리듀서로 매칭되는 액션이 있는지 확인 후, 스토어에 저장된 상태를 변경해주는 원리로 작동한다. Redux는 Context API와 다르게 전역 상태 관리 외에도 redux-saga, redux-thunk와 같은 추가 라이브러리를 사용하여 비동기 작업 처리를 쉽게 할 수 있다는 장점이 있다. 그러나, 코드의 양이 많아지고 복잡해지기 때문에 이런 부가기능이 필요하지 않은 소규모 프로젝트에는 Context API, recoil을 사용하는 것이 나을 수 있다.

## 💡️ 클래스형 컴포넌트 vs 함수형 컴포넌트

리액트에서 컴포넌트를 선언하는 두가지 방식. <br/>
과거에는 클래스형을 주로 사용했지만, 2019년 v16.8부터 함수형 컴포넌트에 리액트 hook 지원을 시작해 현재는 함수형 컴포넌트와 훅을 함께 사용할 것을 권장하고 있다.

1. `클래스형 컴포넌트`

- state를 사용하여 상태를 저장하고, 라이프사이클 메서드를 사용할 수 있다.
- 함수가 아닌 class이기 때문에 return문이 없고 render() 함수가 필수적으로 있어야 JSX반환이 가능하다.

2. `함수형 컴포넌트`

- 클래스형 컴포넌트보다 선언하기가 좀 더 편하다.
- 클래스형 컴포넌트보다 메모리 자원을 덜 사용한다. (함수는 한번 실행되고 나면 메모리 상에서 사라지기 때문)
- return을 사용한다.
- 리액트 훅이 도입되면서 state와 라이프사이클 API를 사용할 수 있게 되었다.
