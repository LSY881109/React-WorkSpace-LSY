import { useState, useEffect } from 'react';
import axios from 'axios';

import styled from 'styled-components';
import NewsItem from './NewsItem';
import usePromise from '../lib/usePromise.jsx';
import PdItemBusan from './PdItemBusan.jsx';

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
  //실제 데이터 연동,
  // 커스텀 훅스 사용하기전, -> 리팩토링 하기전,
  // NewsList_backup2.jsx , 파일 참고,

  // 공공데이터 추가 작업 2
  const sendData = () => {
    const query = category === 'all' ? '' : `&category=${category}`;
    console.log(`category 1 : ${category}`);
    if (category === 'busanAtt') {
      return axios.get(
        `https://apis.data.go.kr/6260000/AttractionService/getAttractionKr?serviceKey=ALRX9GpugtvHxcIO%2FiPg1vXIQKi0E6Kk1ns4imt8BLTgdvSlH%2FAKv%2BA1GcGUQgzuzqM3Uv1ZGgpG5erOTDcYRQ%3D%3D&numOfRows=100&pageNo=1&resultType=json`,
      );
    } else {
      return axios.get(
        `https://newsapi.org/v2/top-headlines?country=us${query}&apiKey=b7adb4f936494b3bac62f446ab7686cb`,
      );
    }
  };

  // 변경 전
  // const [loading, response, error] = usePromise(() => {
  //   const query = category === 'all' ? '' : `&category=${category}`;
  //   return axios.get(
  //     `https://newsapi.org/v2/top-headlines?country=us${query}&apiKey=b7adb4f936494b3bac62f446ab7686cb`,
  //   );
  // }, [category]);

  // 공공데이터 추가 작업 3
  const [loading, response, error] = usePromise(sendData, [category]);

  // 대기 중
  if (loading) {
    return <NewsListBlock>대기중입니다.</NewsListBlock>;
  }
  // response 값이 설정이 안됐을 경우,
  if (!response) {
    return null;
  }

  // 에러가 발생할수도 있음.
  if (error) {
    return <NewsListBlock>에러 발생</NewsListBlock>;
  }
  // 정상 값을 받을 때.
  // 변경 전
  // const { articles } = response.data;

  // 공공데이터 추가 작업 4,
  // 데이터 구조를 반드시 확인 후,
  const data =
    category === 'busanAtt'
      ? response.data.getAttractionKr.item || []
      : response.data.articles || [];

  return (
    <NewsListBlock>
      {/*변경전*/}
      {/*{articles.map((article) => (*/}
      {/*  <NewsItem key={article.url} article={article} />*/}
      {/*))}*/}

      {/*공공데이터 추가 작업 5*/}
      {category === 'busanAtt'
        ? data.map((data, index) => <PdItemBusan key={index} article={data} />)
        : data.map((data) => <NewsItem article={data} />)}
    </NewsListBlock>
  );
};

export default NewsList;
