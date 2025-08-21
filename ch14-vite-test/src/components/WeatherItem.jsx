import React from 'react';
import styled from 'styled-components';

const WeatherItemBlock = styled.div`
  display: flex;
  flex-direction: column;
  padding: 1rem;
  border-bottom: 1px solid #ccc;
`;

const WeatherItem = ({ weather }) => {
  const { category, obsrValue } = weather;

  const getCategoryName = (cat) => {
    switch (cat) {
      case 'T1H':
        return '기온';
      case 'RN1':
        return '1시간 강수량';
      case 'UUU':
        return '풍속(동서)';
      case 'VVV':
        return '풍속(남북)';
      case 'VEC':
        return '풍향';
      case 'WSD':
        return '풍속';
      case 'PTY':
        return '강수 형태';
      case 'SKY':
        return '하늘 상태';
      case 'LGT':
        return '낙뢰';
      case 'REH':
        return '습도';
      default:
        return cat;
    }
  };

  return (
    <WeatherItemBlock>
      <h3>
        {getCategoryName(category)}: {obsrValue}
      </h3>
    </WeatherItemBlock>
  );
};

export default WeatherItem;
