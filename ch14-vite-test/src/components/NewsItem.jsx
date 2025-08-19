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

const NewsItem = ({ article }) => {
  // 사용할 데이터 목록
  // title, 제목
  // description, 내용
  // url, 기사 원본 링크
  // urlToImage, 뉴스 이미지
  const { title, description, url, urlToImage } = article;
  return (
    <NewsItemBlock>
      {urlToImage && (
        <div className="thumbnail">
          <a href={url} target="_blank" rel="noopener noreferrer">
            <img src={urlToImage} alt="thumbnail" />
          </a>
        </div>
      )}
      <div className="contents">
        <h2>
          <a href={url} target="_blank" rel="noopener noreferrer">
            {title}
          </a>
        </h2>
        <p>{description}</p>
      </div>
    </NewsItemBlock>
  );
};

export default NewsItem;
