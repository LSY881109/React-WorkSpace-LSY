import React, { useReducer } from 'react';

// 리듀서 함수 생성, 새로운 상태를 반환하는 함수
function reducer(state, action) {
  return {
    ...state,
    [action.name]: action.value,
  };
}

const InfoUseReducer = () => {
  const [state, dispatch] = useReducer(reducer, {
    name: '',
    email: '',
  });

  const { name, email } = state;

  const onChange = (e) => {
    dispatch(e.target);
  };

  return (
    <div>
      <div>
        <h2>useReducer 2</h2>
        <input name="name" value={name} onChange={onChange} type="text" />
        <input name="email" value={email} onChange={onChange} type="text" />
      </div>
      <div>
        <b>이름 : </b> {name}
        <b>이메일 : </b> {email}
      </div>
    </div>
  );
};

export default InfoUseReducer;
