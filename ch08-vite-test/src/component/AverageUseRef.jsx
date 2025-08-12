import React, { useState, useMemo, useRef } from 'react';

// 화면을 그려주는 기능,
// 연산한다.(실제로 예를 무거운 동작을 한다. 예시로 단순 계산)
// 만약 결과가 같으면, 메모했던 내용을 재사용을 한다, 또 계산을 안한다.

// 평균을 구하는 메서드 정의
const getAverage = (numbers) => {
  console.log('평균값 계산 중입니다..');
  if (numbers.length === 0) return 0;
  // 0812_7-reduce  함수.txt 참고하기.
  const sum = numbers.reduce((acc, cur) => acc + cur, 0);
  return sum / numbers.length;
};

const AverageUseRef = () => {
  const [list, setList] = useState([]);
  const [number, setNumber] = useState('');

  // 접근 하고 싶은 요소 설정.
  // useRef, 순서1
  const inputEl = useRef(null);

  const onChange = (e) => {
    setNumber(e.target.value);
  };

  const onInsert = (e) => {
    const nextList = list.concat(parseInt(number));
    setList(nextList);
    setNumber('');
    // useRef, 순서2
    // 숫자를 추가 후, 해당 커서가 계속 깜박(포커스) 되게 하기.
    // ref 를 이용해서, 직접 해다 input 태그의 포커스를 사용하기.
    inputEl.current.focus();
  };

  // 평균을 구할 때, useMemo 이용해보기.
  const avg = useMemo(() => getAverage(list), [list]);
  return (
    <div>
      {/*useRef, 순서3  접근하기 위한 요소를 설정. ref 설정. */}
      <input value={number} onChange={onChange} ref={inputEl} />
      <button onClick={onInsert}>등록</button>
      <ul>
        {list.map((value, index) => (
          <li key={index}>{value}</li>
        ))}
      </ul>
      <div>
        {/*<b>평균값: </b> {getAverage(list)}*/}
        <b>평균값: </b> {avg}
      </div>
    </div>
  );
};

export default AverageUseRef;
