import { useHover } from "./useHover";

const UseClickHook = () => {
  const sayHello = () => console.log("say Hello");
  const title = useHover(sayHello);

  return (
    <div>
      <h1>useHover</h1>
      <div ref={title}>Hi</div>
    </div>
  );
};

export default UseClickHook;
