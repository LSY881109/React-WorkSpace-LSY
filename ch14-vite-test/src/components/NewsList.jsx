import React from 'react';
import axios from 'axios';

import styled from 'styled-components';
import NewsItem from './NewsItem';
import usePromise from '../lib/usePromise.jsx';
import PdItemBusan from './PdItemBusan.jsx';
import WeatherItem from './WeatherItem.jsx';
import FoodItem from './FoodItem.jsx';
import FestivalItem from './FestivalItem.jsx';

//css 작업
const NewsListBlock = styled.div`
  box-sizing: border-box;
  padding-bottom: 3rem;
  width: 768px;
  margin: 0 auto;
  margin-top: 2rem;
  @media screen and (max-width: 768px) {
    width: 100%;
    padding-left: 1rem;
    padding-right: 1rem;
  }
`;

const NewsList = ({ category }) => {
  const sendData = () => {
    const getBaseDateTime = () => {
      const now = new Date();
      const year = '2025';
      const month = '08';
      const date = '20';

      const base_date = `${year}${month}${date}`;
      const base_time = `${String(now.getHours()).padStart(2, '0')}00`; // 현재 시간 사용

      return { base_date, base_time };
    };

    const { base_date, base_time } = getBaseDateTime();

    const query = category === 'all' ? '' : `&category=${category}`;
    console.log(`category 1 : ${category}`);
    if (category === 'busanAtt') {
      return axios.get(
        `https://apis.data.go.kr/6260000/AttractionService/getAttractionKr?serviceKey=apikey&numOfRows=100&pageNo=1&resultType=json`,
      );
    } else if (category === 'busanFood') {
      return axios.get(
        `https://apis.data.go.kr/6260000/FoodService/getFoodKr?serviceKey=apikey&numOfRows=100&pageNo=1&resultType=json`,
      );
    } else if (category === 'busanWeather') {
      return axios.get(
        `https://apis.data.go.kr/1360000/VilageFcstInfoService_2.0/getUltraSrtNcst?serviceKey=apikey&pageNo=1&numOfRows=10&dataType=json&base_date=${base_date}&base_time=${base_time}&nx=98&ny=76`,
      );
    } else if (category === 'busanFestival') {
      return axios.get(
        `https://apis.data.go.kr/6260000/FestivalService/getFestivalKr?serviceKey=apikey&numOfRows=100&pageNo=1&resultType=json`,
      );
    } else {
      return axios.get(
        `https://newsapi.org/v2/top-headlines?country=us${query}&apiKey=newsapikey`,
      );
    }
  };

  const [loading, response, error] = usePromise(sendData, [category]);

  if (loading) {
    return <NewsListBlock>대기중입니다.</NewsListBlock>;
  }
  if (!response) {
    return null;
  }
  if (error) {
    return <NewsListBlock>에러 발생</NewsListBlock>;
  }

  const data =
    category === 'busanAtt'
      ? response.data.getAttractionKr.item || []
      : category === 'busanFood'
        ? response.data.getFoodKr.item || []
        : category === 'busanWeather'
          ? response.data.response.body?.items?.item || []
          : category === 'busanFestival'
            ? response.data.getFestivalKr.item || []
            : response.data.articles || [];

  return (
    <NewsListBlock>
      {category === 'busanAtt'
        ? data.map((data, index) => <PdItemBusan key={index} article={data} />)
        : category === 'busanFood'
          ? data.map((data, index) => <FoodItem key={index} article={data} />)
          : category === 'busanWeather'
            ? data.map((data, index) => (
                <WeatherItem key={index} weather={data} />
              ))
            : category === 'busanFestival'
              ? // 🎯 화면에 그리는 부분도 FestivalItem 컴포넌트를 사용하도록 변경합니다.
                data.map((data, index) => (
                  <FestivalItem key={index} festival={data} />
                ))
              : data.map((data, index) => (
                  <NewsItem key={index} article={data} />
                ))}
    </NewsListBlock>
  );
};

export default NewsList;
