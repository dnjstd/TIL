import { useClick } from "./useClick";

const UseClickHook = () => {
  const sayHello = () => console.log("say Hello");
  const title = useClick(sayHello);

  return (
    <div>
      <h1>useClick</h1>
      <h2 ref={title}>Hi</h2>
    </div>
  );
};

export default UseClickHook;
