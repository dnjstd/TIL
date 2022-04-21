- [React Hook](#💡️-React-Hook)
- [useMemo vs useCallback](#💡️-useMemo-vs-useCallback)
- [memoization](<#💡️-memoization(메모이제이션)이란?>)
- [useMemo](#💡️-useMemo)
- [useCallback](#💡️-useCallback)

# 💡️ React Hook

- 함수형 컴포넌트에서도 클래스형 컴포넌트의 기능을 사용할 수 있게 한다.
- 함수형 컴포넌트에서도 상태값을 관리하고, 생명주기 함수를 이용할 수 있다.
- Hook을 사용하면 재사용 가능한 로직을 쉽게 만들 수 있다.
- React 내장 Hook(useState, useEffect, useCallback)외에 새로운 커스텀 Hook을 만들 수 있다.

# 💡️ useMemo vs useCallback

- useMemo와 useCallback은 메모이제이션 훅으로, 리액트에서 불필요한 렌더링을 방지하여 퍼포먼스 최적화를 위해 사용된다.

### 💡️ memoization(메모이제이션)이란?

동일한 계산을 반복해야 할 때, 이전에 계산한 값을 `메모리에 저장함`으로써 동일한 계산의 반복 수행을 제거하여 프로그램 실행 속도를 빠르게 하는 기술. <br/>
➡️ 동일한 입력이 들어오면 `재활용`하는 기법 <br/>
❕ 메모이제이션을 적절히 활용하면 중복 연상을 피하기 때문에 앱의 `성능을 최적화`할 수 있다.
<br/><br/>

## 💡️ useMemo

```
import {useMemo} from 'react';

useMemo(()=> function, [deps])
```

- 메모이제이션된 `값`을 반환한다.

## 💡️ useCallback

```
import {useCallback} from 'react';

useCallback(function, [deps])
```

- 메모이제이션된 `함수`를 반환한다.
- 함수와 상관 없는 상태값이 변할 때, 함수 컴포넌트에서 불필요하게 함수를 업데이트 하는 것을 방지해준다.
- 자식컴포넌트에 함수를 props로 넘길 때 반드시 useCallback을 사용하여 리렌더링을 방지해야한다.
