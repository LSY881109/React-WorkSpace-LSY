import React, { useEffect, useState } from 'react';

const Info = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');

  useEffect(() => {
    console.log('렌더링 완료');
    console.log({ name, email });
    //뒷정리 함수 추가
    return () => {
      console.log('뒷정리 함수 호출 ');
      console.log(name);
    };
  }, [email]);

  //화면에 input 태그에서 값이 변경 할 때 마다, state 의 값을 변경 해주는
  // onChangeXXX , 이벤트 핸들러 추가하기.
  const onChangeName = (e) => {
    setName(e.target.value);
  };

  const onChangeEmail = (e) => {
    setEmail(e.target.value);
  };

  return (
    <div>
      <div>
        <input value={name} onChange={onChangeName} type="text" />
        <input value={email} onChange={onChangeEmail} type="text" />
      </div>
      <div>
        <b>이름 : </b> {name}
        <b>이메일 : </b> {email}
      </div>
    </div>
  );
};

export default Info;
