import "./App.css";
import React, { Component } from "react";
import MyComponent from "./component/MyComponent";
import Counter from "./component/Counter";
import Say from "./component/Say";

// 1. 함수형 컴포넌트
// function App() {
//   const name = "오늘 점심 뭐 먹지?";
//   return (
//     <>
//       <h1>ch3 컴포넌트 개념</h1>
//       <div className="react">{name}</div>
//       <h2>
//         현재: App.jsx , 1 부모 컴포넌트에서, 자식 컴포넌트 MyComponent
//         사용하기(불러오기)!
//       </h2>
//       <MyComponent />
//       {/* <h2>
//         현재: App.jsx , 2 부모 컴포넌트에서, 자식 컴포넌트 MyComponent props
//         전달해보기.{" "}
//       </h2>
//       <MyComponent name="이상용" /> */}
//     </>
//   );
// }

//2. 클래스형 컴포넌트
class App extends Component {
  render() {
    const name2 = "오늘 점심 뭐 먹지?";
    return (
      <>
        <h1>ch3 컴포넌트 개념</h1>
        <div className="react">{name2}</div>
        <h2>
          현재: App.jsx , 1 부모 컴포넌트에서, 자식 컴포넌트 MyComponent
          사용하기(불러오기)!
        </h2>
        <MyComponent />
        <h2>
          현재: App.jsx , 2 부모 컴포넌트에서, 자식 컴포넌트 MyComponent props
          전달하기
        </h2>
        <MyComponent name="이상용" />
        <h2>
          현재: App.jsx , 3 부모 컴포넌트에서, 자식 컴포넌트(MyComponent)
          children 전달하기.
        </h2>
        <MyComponent name="이상용3">
          children 자리에 값을 사용해서 전달하기.test
        </MyComponent>
        <h2>현재: App.jsx , 4 자식 컴포넌트(Counter) state 확인하기.</h2>
        <Counter />;
        <h2>현재: App.jsx , 5 자식 컴포넌트(Say) state 확인하기.</h2>
        <Say />
      </>
    );
  }
}

export default App;
