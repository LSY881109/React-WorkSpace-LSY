import React, { useReducer } from 'react';

// 리듀서 함수 정의
function reducer(state, action) {
  switch (
    action.type // action.type 에 따라서, 다른 작업 수행
  ) {
    case 'INCREMENT': // 행위 2개 밖에 없음, 증가, 감소
      return { value: state.value + 1 };
    case 'DECREMENT': //
      return { value: state.value - 1 };
    default:
      return state;
  }
}

const CountUseReducer = () => {
  const [state, dispatch] = useReducer(reducer, { value: 0 });
  return (
    <div>
      <p>
        현재 값 : <b>{state.value}</b>
      </p>
      <button onClick={() => dispatch({ type: 'INCREMENT' })}>+1</button>
      <button onClick={() => dispatch({ type: 'DECREMENT' })}>-1</button>
    </div>
  );
};

export default CountUseReducer;
