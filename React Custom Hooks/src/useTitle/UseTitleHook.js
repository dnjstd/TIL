import { useTitle } from "./useTitle";

const UseTitleHook = () => {
  const titleUploader = useTitle("Loading...");

  setTimeout(() => titleUploader("Home"), 5000);

  return (
    <div>
      <h1>useTitle</h1>
      <p>5초 후 탭 타이틀 바뀜</p>
    </div>
  );
};

export default UseTitleHook;
