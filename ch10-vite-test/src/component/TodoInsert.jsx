import React from 'react';
// 검색창 : 리액트 아이콘 사용하기.
//https://react-icons.github.io/react-icons/
// 예시) mdadd, schedule
// 사용 방법, 1) 임포트 2) 사용하고 싶은 곳에 컴포넌트 위치 시키기
import { MdAdd } from 'react-icons/md';
import '../styles/TodoInsert.scss';
import { useState, useCallback } from 'react';

const TodoInsert = ({ onInsert }) => {
  const [value, setValue] = useState('');

  // 최초 1회만 생성후, 함수를 재사용.
  const onChange = useCallback((e) => {
    setValue(e.target.value);
  }, []);

  // 글 작성.
  const onSubmit = useCallback(
    (e) => {
      onInsert(value);
      setValue('');
      e.preventDefault();
    },
    [onInsert, value],
  );

  return (
    <form className="TodoInsert" onSubmit={onSubmit}>
      <input placeholder="할 일 입렵하세요" value={value} onChange={onChange} />
      <button type="submit">
        <MdAdd />
      </button>
    </form>
  );
};

export default TodoInsert;
