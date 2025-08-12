import React, { useState, useMemo, useCallback } from 'react';

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

const AverageUseCallback = () => {
  const [list, setList] = useState([]);
  const [number, setNumber] = useState('');

  // 변경1, useCallback 이용해서, 함수를 기억해서 재사용하자.
  // 전
  // const onChange = (e) => {
  //   setNumber(e.target.value);
  // };
  // 후
  const onChange = useCallback((e) => {
    setNumber(e.target.value);
    console.log('onChange : useCallback ');
  }, []);

  // 변경 전
  // const onInsert = (e) => {
  //   const nextList = list.concat(parseInt(number));
  //   setList(nextList);
  //   setNumber('');
  // };
  // 후
  const onInsert = useCallback(
    (e) => {
      const nextList = list.concat(parseInt(number));
      setList(nextList);
      setNumber('');
      console.log('onInsert : useCallback ');
    },
    [number, list],
  );

  // 평균을 구할 때, useMemo 이용해보기.
  const avg = useMemo(() => getAverage(list), [list]);
  return (
    <div>
      <input value={number} onChange={onChange} />
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

export default AverageUseCallback;
