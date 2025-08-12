// import React, { useEffect, useState } from 'react';
// 커스텀 훅스 불러오기. 순서1
import useInputs from './useInputs.jsx';

const InfoCustomHookSample = () => {
  // 변경 전, useState 형식
  // const [name, setName] = useState('');
  // const [email, setEmail] = useState('');

  // 순서2
  // 변경 후, 커스텀 훅스를 이용한 같은 기능 구현.
  const [state, onChange] = useInputs({
    name: '',
    email: '',
  });

  // 순서3
  const { name, email } = state;

  //화면에 input 태그에서 값이 변경 할 때 마다, state 의 값을 변경 해주는
  // onChangeXXX , 이벤트 핸들러 추가하기.

  // 변경 전,
  // const onChangeName = (e) => {
  //   setName(e.target.value);
  // };
  //
  // const onChangeEmail = (e) => {
  //   setEmail(e.target.value);
  // };

  return (
    <div>
      <div>
        {/*순서4 적용, */}
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

export default InfoCustomHookSample;
