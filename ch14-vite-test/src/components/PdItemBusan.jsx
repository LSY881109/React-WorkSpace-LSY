import React from 'react';
import styled from 'styled-components';

// styled-components 이용해서,
// 컴포넌트 안에 , css 스타일 작업 같이 진행하기.

const NewsItemBlock = styled.div`
  display: flex;

  //썸네일 이미지
  .thumbnail {
    margin-right: 1rem;
    img {
      display: block;
      width: 160px;
      height: 160px;
      object-fit: cover;
    }
  }

  // 내용
  .contents {
    h2 {
      margin: 0;
      a {
        color: black;
      }
    }
    p {
      margin: 0;
      line-height: 1.5;
      margin-top: 0.5rem;
      white-space: normal;
    }
  }

  // 뉴스 아이템 서로 간의 간격 조절,
  & + & {
    margin-top: 3rem;
  }
`;

const PdItemBusan = ({ article }) => {
  // 사용할 데이터 목록
  // title, 제목
  // description, 내용
  // url, 기사 원본 링크
  // urlToImage, 뉴스 이미지

  // 공공데이터 추가 작업 6
  const { MAIN_TITLE, ADDR1, ITEMCNTNTS, MAIN_IMG_THUMB, HOMEPAGE_URL } =
    article;
  return (
    <NewsItemBlock>
      {/*공공데이터 추가 작업 7*/}
      {MAIN_IMG_THUMB && (
        <div className="thumbnail">
          <a href={HOMEPAGE_URL} target="_blank" rel="noopener noreferrer">
            <img src={MAIN_IMG_THUMB} alt="thumbnail" />
          </a>
        </div>
      )}
      <div className="contents">
        {/*공공데이터 추가 작업 8*/}
        <h2>제목 : {MAIN_TITLE}</h2>
        <p>소개 : {ITEMCNTNTS}</p>
        <p>주소 : {ADDR1}</p>
      </div>
    </NewsItemBlock>
  );
};

export default PdItemBusan;
