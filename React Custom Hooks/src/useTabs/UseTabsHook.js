import { useTabs } from "./useTabs";

const content = [
  { tab: "section 1", content: "I'm the content of the Section 1" },
  { tab: "section 2", content: "I'm the content of the Section 2" },
  { tab: "section 3", content: "I'm the content of the Section 3" },
];

const UseTabsHook = () => {
  const { currentItem, changeItem } = useTabs(0, content);
  return (
    <div>
      <h1>useTabs</h1>
      {content.map((section, index) => (
        <button onClick={() => changeItem(index)}>{section.tab}</button>
      ))}
      <div>{currentItem.content}</div>
    </div>
  );
};

export default UseTabsHook;
