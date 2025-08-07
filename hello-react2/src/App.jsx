import { Fragment } from 'react';
import './App.css';

function App() {
  // 리액트에서는 컴포넌트에서, 요소 여러 개를 왜 하나의 요소로 꼭
  // 감싸 주어야하나?
  // Virtrual DOM에서 컴포넌트 변화를 감지할 때, 효율적으로 비교하기 위해서.
  const name = '이상용';
  const number = 0;
  const unVar = undefined;
  const style = {
    backgroundColor: 'black', //background-color
    color: 'aqua',
    fontSize: '48px', // font-size
    fontWeight: 'bold', //font-weight
    padding: 16, // 기본 px
  };
  return (
    // jsx 기본 문법(기존 HTML 형식으로 사용 가능 -> 변환을 자동으로 해준다. ),
    // vs jsx 기본 문법 사용 안하면, 모양? 실제 동작은,
    // 예)return React.createElement("div", null, "Hello ", React.createElement ("b", null, "react"));
    // <div>
    //방법2
    // <Fragment>
    // 방법3
    <>
      <h1>리액트 jsx 문법 처음 해보기</h1>
      <h2>1 기본 jsx 문법 규칙, 감싸는 부모 태그가 필요함. 현재 오류가 남. </h2>
      <h3>
        2 자바스크립트 표현식을 이용해서, 변수 불러오기 이름 중괄호 사용 :{' '}
        {name}
      </h3>
      <h3>
        3 조건부 연산자(삼항 연산자) 이용해보기. (조건식) ? (참일경우 나올
        컴포넌트) : (거짓일 경우 나올 컴포넌트){' '}
      </h3>
      {name === '이상용' ? (
        <h4>이상용이 맞습니다.</h4>
      ) : (
        <h4>이상용이 아닙니다.</h4>
      )}
      <h3>
        4 아무것도 나타내고 싶지 않을 경우, 빈 화면으로 나올 경우, null
        이용해보기.{' '}
      </h3>
      {name === '이상용' ? <h4>이상용이 맞습니다.</h4> : null}
      <h3>5 && 연산자 이용해보기.</h3>
      {name === '이상용' && <h4>이상용이 맞습니다.</h4>}
      <h3>6 falsy 값 0 확인해보기, </h3>
      {number && <h4>0 값 </h4>}
      <h3>7 undefined ,OR(||)확인해보기, </h3>
      {unVar || '값 : undefined'}
      <h3 style={style}>
        8 인라인 스타일링 , 기존 : background-color, 변경 : backgroundColor
      </h3>
      <h3 className="react">9 class 대신 className 속성을 사용함.</h3>
      <h3>
        10 닫아야 하는 태그, br 태그, input 태그는 열기만해도 상관없음. 하지만,
        jsx 안에서 조금 다름. 반드시 짝을 맞춰 주기, 아니면 혼자이면, 반드시
        닫는 태그 같이 작성.
        <intput />
      </h3>
      <h3>11 주석 은 , 중괄호를 열고, /* */ 중괄호 닫기</h3>
      {/*주석은 이런 형식으로 사용합니다. */}
      // 이런 주석은 그대로 나타남. /* 이런 주석도 그대로 나타남. */
      {/* 주석을 사용시 */}
    </>
    // </Fragment>
    // </div>
  );
}

export default App;
