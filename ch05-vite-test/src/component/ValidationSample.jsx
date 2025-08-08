import React, { Component } from "react";
import "./ValidationSample.css";

class ValidationSample extends Component {
  state = {
    password: "",
    clicked: false,
    validated: false,
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
  };
  render() {
    return (
      <>
        <div>
          <h2>리액트에서, ref 테스트 1</h2>
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
          />
          <button onClick={this.handleButtonClick}>체크</button>
        </div>
      </>
    );
  }
}

export default ValidationSample;
