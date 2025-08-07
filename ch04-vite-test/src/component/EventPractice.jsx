import React, { Component } from "react";

class EventPractice extends Component {
  render() {
    return (
      <>
        <h1>이벤트 연습</h1>
        <h2>onChange 연습 해보기. </h2>
        <input
          type="text"
          name="message"
          placeholder="아무거나 입력하세요"
          onChange={(e) => {
            console.log(e.target.value);
          }}
        />
      </>
    );
  }
}

export default EventPractice;
