// import { useReducer } from "react";
import useInputs from "./useInputs";

// function reducer(state, action) {
//   return {
//     ...state,
//     [action.name]: action.value,
//   };
// }

//useInputs라는 커스텀 hooks 사용
const InfoUseReducer = () => {
  const [state, onChange] = useInputs({
    name: "",
    nickname: "",
  });

  const { name, nickname } = state;

  // const onChange = (e) => {
  //   dispatch(e.target);
  // };

  return (
    <div>
      <div>
        <input name="name" value={name} onChange={onChange} />
        <input name="nickname" value={nickname} onChange={onChange} />
      </div>

      <div>
        <div>
          <b>이름:</b> {name}
        </div>
        <div>
          <b>닉네임:</b> {nickname}
        </div>
      </div>
    </div>
  );
};

export default InfoUseReducer;
