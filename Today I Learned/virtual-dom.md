## Virtual DOM?
📝 실제 DOM 변화를 최소화 시켜주는 역할을 한다.
<br/>

브라우저는 HTML파일을 보여주기위해
`브라우저 렌더링 과정` <strong>DOM 트리 생성 → 렌더 트리 생성 → Layout → Paint 과정</strong>을 거친다.
화면에 변화가 생길 때마다 매번 이 과정을 거치는 것은 <strong>비효율적</strong>이다.
<br/>

✨ `Virtual DOM`은 뷰의 변화를 Virtual DOM에 적용시키고 `최종 결과만 실제 DOM에 전달`한다.
따라서 10개의 변화가 있다면 
1. Virtual DOM은 변화된 부분만 가려내어
2. 실제 DOM에 전달하고
3. 실제 DOM은 그 변화를 1회로 인식하여
4. 단 한번의 렌더링 과정만 거치게 된다.

> DOM이 직접 변경된다면 사소한 변경사항에도 전체가 렌더링되기 때문에 브라우저에 과부하가 올 수 있다.
최대한 DOM에 직접 접근하지 말아야 한다.


### 정리

즉! React는 실제 DOM을 매번 조작하는 비효율적 방법 대신에, Virtual DOM이라는 가상의 돔을 유지하면서 필요한 부분을 미리 계산하여 실제 DOM에는 한번의 변화를 가하는 식으로 최적화를 구현한다.


<img width="1301" alt="스크린샷 2022-03-22 오후 4 28 31" src="https://user-images.githubusercontent.com/90748606/159429575-a7b87fb4-13e8-4c2d-8af1-8b2db2dc7e3b.png">
