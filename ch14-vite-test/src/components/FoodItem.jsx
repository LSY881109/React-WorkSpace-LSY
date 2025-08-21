import React from 'react';
import styled from 'styled-components';

const FoodItemBlock = styled.div`
  display: flex;
  flex-direction: column;
  padding: 1rem;
  border: 1px solid #ddd;
  border-radius: 8px;
  margin-bottom: 1rem;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);

  & + & {
    margin-top: 1rem;
  }
`;

const FoodTitle = styled.h2`
  font-size: 1.5rem;
  font-weight: bold;
  color: #333;
  margin: 0 0 0.5rem 0;
`;

const Address = styled.p`
  font-size: 1rem;
  color: #666;
  margin: 0;
`;

const Tel = styled.p`
  font-size: 1rem;
  color: #666;
  margin: 0;
`;

const FoodItem = ({ article }) => {
  const { MAIN_TITLE, ADDR1, CNTCT_TEL } = article;

  return (
    <FoodItemBlock>
      {MAIN_TITLE && <FoodTitle>{MAIN_TITLE}</FoodTitle>}
      {ADDR1 && <Address>주소: {ADDR1}</Address>}
      {CNTCT_TEL && <Tel>전화번호: {CNTCT_TEL}</Tel>}
    </FoodItemBlock>
  );
};

export default FoodItem;
