import React, { Component } from "react";
import "./ValidationSample.css";

class ValidationSample extends Component {
  state = {
    password: "",
    clicked: false,
    validated: false,
  };

  // 특정 DOM 에 접근 하기 위해서, 어쩔수 없이,
  // ref 라는 속성을 사용하는 데, 1) 포커스 2) 스크롤 부분에 접근.
  // 포커스 용, 이벤트 핸들러 추가

  // 방법1, 순서1, 설정.
  input1 = null;
  // 방법2, 순서1, 설정
  input2 = React.createRef();

  // 방법1
  handleFocus1 = () => {
    this.input1.focus();
  };

  // 방법2
  handleFocus2 = () => {
    this.input2.current.focus();
  };

  // 이벤트 핸들러 추가,
  handleChange = (e) => {
    this.setState({
      password: e.target.value,
    });
  };
  handleButtonClick = () => {
    // 여기서부터 작업하기.
    this.setState({
      clicked: true,
      validated: this.state.password === "0000",
    });
    this.input1.focus();
  };

  render() {
    return (
      <>
        <div>
          <h2>1 리액트에서, ref 테스트 1</h2>
          <input
            type="text"
            value={this.state.password}
            onChange={this.handleChange}
            className={
              this.state.clicked
                ? this.state.validated
                  ? "success"
                  : "failure"
                : ""
            }
            placeholder="포커스 방법1"
            //방법1, 순서2, 적용, 콜백 함수 사용, 태그에 접근하기.
            ref={(ref) => {
              this.input1 = ref;
            }}
            // 방법2, 순서2, 적용
            // ref={this.input}
          />
          <input
            type="text"
            placeholder="포커스 방법2"
            // 방법2, 순서2, 적용
            ref={this.input2}
          />
          <button onClick={this.handleButtonClick}>체크</button>
          <button onClick={this.handleFocus1}>포커스1</button>
          <button onClick={this.handleFocus2}>포커스2</button>
        </div>
      </>
    );
  }
}

export default ValidationSample;
