import React from "react";
import { useState } from "react";

const EventPractice_Function = () => {
  // 방법1, 빈문자열을 초깃값으로 사용함.
  // const [username, setUsername] = useState("");
  // const [message, setMessage] = useState("");
  // 방법2, 빈문자열 -> 객체로 변경해서 사용해보기.
  const [form, setForm] = useState({
    username: "",
    message: "",
  });

  // form 객체에서, username, message 각각을 꺼내는 작업, 자동 데이터 바인딩.
  const { username, message } = form;

  // 방법1, 각각의 useState 의 setter 메서드를 이용.
  // const onChangeUsername = (e) => setUsername(e.target.value);
  // const onChangeMessage = (e) => setMessage(e.target.value);

  // 방법2, form 객체를 이용하기, spread(...) 연산자를 이용해서, 기존 값을 복사를 하고, 변경을 하기.
  const onChange = (e) => {
    const nextForm = {
      ...form, // 기존 form 객체에서 복사해오기, ... spread 연산자 이용.
      // 기존값에 덮어쓰기 작업, ex) username : 값, message : 값 , 형태.
      [e.target.name]: [e.target.value],
    };
    setForm(nextForm);
  };

  const onKeyPress = (e) => {
    if (e.key === "Enter") {
      onClick();
    }
  };

  const onClick = () => {
    alert(username + ":" + message);
    // alert 출력 후, form 객체의 멤버 2개를 초기화하기. 빈 문자열로.
    setForm({
      username: "",
      message: "",
    });
  };

  return (
    <>
      <h1>이벤트 연습, 함수형 컴포넌트 </h1>
      <h2>1 onClick, onChange 연습 해보기. </h2>
      <h3>username : {username}</h3>
      <h3>message : {message}</h3>
      <input
        type="text"
        name="username"
        placeholder="username 아무거나 입력하세요"
        value={username} // getter, state 객체 안의 message 조회
        onChange={onChange}
        // 추가 키 이벤트 리스너, 엔터 키를 입력시, 클릭 하는 효과 주기.
        onKeyPress={onKeyPress}
      />

      <input
        type="text"
        name="message"
        placeholder="message 아무거나 입력하세요"
        value={message} // getter, state 객체 안의 message 조회
        // onClick={onClick}
        onChange={onChange}
        // 추가 키 이벤트 리스너, 엔터 키를 입력시, 클릭 하는 효과 주기.
        onKeyPress={onKeyPress}
      />
      <button onClick={onClick}>확인</button>
    </>
  );
};

export default EventPractice_Function;
