import { useInput } from "./useInput";

const UseInputHook = () => {
  const maxLength = (value) => !value.includes("@");
  const name = useInput("Soyeon", maxLength);
  return (
    <div>
      <h1>useInput</h1>
      <input placeholder="Name" {...name} />
      {/* <input placeholder="Name" value={name.value} onChange={name.onChange} /> */}
    </div>
  );
};

export default UseInputHook;
