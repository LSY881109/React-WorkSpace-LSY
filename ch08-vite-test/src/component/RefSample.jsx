import React, { useRef } from 'react';

// useRef 를 이용해서, 렌더링에 영향을 주지 않는 값을 설정.

const RefSample = () => {
  const id = useRef(1);
  const setId = (n) => {
    id.current = n;
  };
  const printId = () => {
    console.log('id의 현재 값 : ', id.current);
  };
  return (
    <div>
      <h2>refSample , 화면 업데이트에 영향을 주지 않는 값 , useRef</h2>
      <h3>현재 값 : {id.current}</h3>
      <button onClick={() => setId(id.current + 1)}>ID 증가</button>
      <button onClick={printId}>콘솔 출력</button>
    </div>
  );
};

export default RefSample;
