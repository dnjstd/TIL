import Counter from "./Counter";
import { useState } from "react";
import Info from "./info";
import InfoUseReducer from "./info-useReducer";

function App() {
  const [visible, setVisible] = useState(false);
  return (
    <div>
      <Counter />
      <button
        onClick={() => {
          setVisible(!visible);
        }}
      >
        {visible ? "숨기기" : "보이기"}
      </button>
      <hr />
      {visible && <Info />}

      <button
        onClick={() => {
          setVisible(!visible);
        }}
      >
        {visible ? "숨기기" : "보이기"}
      </button>
      <hr />
      {visible && <InfoUseReducer />}
    </div>
  );
}

export default App;
