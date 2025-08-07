import React, { useState } from "react";

const Say = () => {
  const [message, setMessage] = useState("");
  // useState의 정의
  // useState("") -> 초깃값을 빈 문자열로 할당.
  // 2개를 반환함, 1) 변수,message 2) 함수(세터) setMessage
  const onClickEnter = () => setMessage("안녕하세요");
  const onClickLeave = () => setMessage("안녕히 가세요");

  // 2번째 useState, 색깔 변경해보기.
  const [color, setColor] = useState("black");
  const onClickChageColorRed = () => setColor("red");
  const onClickChageColorBlue = () => setColor("blue");
  const onClickChageColorGreen = () => setColor("green");
  return (
    <>
      <div>
        <button onClick={onClickEnter}>입장</button>
        <button onClick={onClickLeave}>퇴장</button>
        <h1 style={{ color }}>{message}</h1>
        {/* 색을 변경하는 버튼을 클릭시, 위에 있는 message 글자 색을 변경하기. */}
        <button onClick={onClickChageColorRed}>빨간색</button>
        <button onClick={onClickChageColorBlue}>파란색</button>
        <button onClick={onClickChageColorGreen}>초록색</button>
      </div>
    </>
  );
};

export default Say;
