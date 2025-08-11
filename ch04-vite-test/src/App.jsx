import "./App.css";
import EventPractice from "./component/EventPractice";
import EventPractice_Function from "./component/EventPractice_Function";
import JoinForm from "./component/JoinForm";

function App() {
  return (
    <>
      <h1>ch4 이벤트 핸들링</h1>
      <h2>1 EventPractice, 클래스형 컴포넌트 자식 컴포넌트 호출하기</h2>
      <EventPractice />
      <h2>2 EventPractice_Function, 함수형 컴포넌트 자식 컴포넌트 호출하기</h2>
      <EventPractice_Function />
      <h2>3 회원 가입 형식으로 연습 해보기, 복습 </h2>
      <JoinForm />
    </>
  );
}

export default App;
