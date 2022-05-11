import "./App.css";
import { useState } from "react";

const useInput = (initialValue) => {
  const [value, setValue] = useState(initialValue);
  const onChange = (e) => {
    console.log(e.target.value);
  };
  return { value, onChange };
};

function App() {
  const name = useInput("Soyeon");
  return (
    <div className="App">
      <input placeholder="Name" {...name} />
    </div>
  );
}

export default App;
