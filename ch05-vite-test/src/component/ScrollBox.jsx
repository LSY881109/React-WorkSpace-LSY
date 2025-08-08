import React, { Component } from "react";

class ScrollBox extends Component {
  // 맨밑으로 이동하는 이벤트 핸들러 ,
  // 준비물 )
  // 1) scrollHeight, : 안쪽 박스 높이 : 650px
  // 2) clientHeight, : 바깥쪽 박스 높이 : 300px
  // 3) scrollTop : 실제 스크롤의 위치, 상단, :0, 맨 하단: 350

  // ref 순서2, 함수 생성, 스크롤 맨밑으로
  scrollToBottom = () => {
    const { scrollHeight, clientHeight } = this.box;
    this.box.scrollTop = scrollHeight - clientHeight;
  };

  scrollToTop = () => {
    const { scrollHeight, clientHeight } = this.box;
    this.box.scrollTop = 0;
  };

  scrollToMiddle = () => {
    const { scrollHeight, clientHeight } = this.box;
    this.box.scrollTop = (scrollHeight - clientHeight) / 2;
  };

  render() {
    // out 영역
    const style = {
      border: "1px solid black",
      height: "300px",
      width: "300px",
      overflow: "auto",
      position: "relative",
    };

    // inside 영역
    const innerStyle = {
      width: "100%",
      height: "650px",
      background: "linear-gradient(white,black)",
    };
    return (
      <>
        <h2>2 스크롤을 이용한 ref로 접근하기 </h2>
        <div
          style={style}
          // ref 순서1,
          // 설정하기, 요소를 선택하기.
          // this.box -> 여기 div 태그를 가리킴
          ref={(ref) => {
            this.box = ref;
          }}
        >
          <div style={innerStyle}></div>
        </div>
      </>
    );
  }
}

export default ScrollBox;
