import React from 'react';
import styled, { css } from 'styled-components';
// 장점, 따로  css, scss 파일없이, 해당 컴포넌트 내부에서, 한번에 작업을 같이 할수 있다.

const Box = styled.div`
  //부모로부터 전달 받은 props로 이용하기.
  background: ${(props) => props.color || 'red'};
  padding: 1rem;
  display: flex;
`;

const Button = styled.button`
  background: white;
  color: black;
  border-radius: 4px;
  padding: 0.5rem;
  display: flex;
  align-items: center;
  justify-content: center;
  box-sizing: border-box;
  font-size: 1rem;
  font-weight: 600;

  /* &:hover로 hover 상태 스타일 지정 */
  &:hover {
    background: rgba(255, 255, 255, 0.9);
  }

  /* inverted 값이 true일 때 특정 스타일 */
  ${(props) =>
    props.inverted &&
    css`
      background: none;
      border: 2px solid white;
      color: white;

      &:hover {
        background: white;
        color: black;
      }
    `}

  /* Button 사이에 마진 추가 */
  & + button {
    margin-left: 1rem;
  }
`;

const StyledComponent = () => {
  return (
    <Box>
      <Button>Hello</Button>
      <Button inverted={true}>오늘 점심 뭐 먹지?</Button>
    </Box>
  );
};

export default StyledComponent;
