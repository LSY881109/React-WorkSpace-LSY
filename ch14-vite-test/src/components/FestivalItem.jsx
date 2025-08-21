import React from 'react';
import styled from 'styled-components';

const ItemBlock = styled.div`
  display: flex;
  .thumbnail {
    margin-right: 1rem;
    img {
      display: block;
      width: 160px;
      height: 100px;
      object-fit: cover;
    }
  }
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
  & + & {
    margin-top: 3rem;
  }
`;

const FestivalItem = ({ festival }) => {
  const { MAIN_TITLE, GUGUN_NM, MAIN_IMG_THUMB, HOMEPAGE_URL, ITEMCNTNTS } =
    festival;

  return (
    <ItemBlock>
      {MAIN_IMG_THUMB && (
        <div className="thumbnail">
          <a href={HOMEPAGE_URL} target="_blank" rel="noopener noreferrer">
            <img src={MAIN_IMG_THUMB} alt="thumbnail" />
          </a>
        </div>
      )}
      <div className="contents">
        <h2>
          <a href={HOMEPAGE_URL} target="_blank" rel="noopener noreferrer">
            {MAIN_TITLE || '제목 없음'} ({GUGUN_NM})
          </a>
        </h2>
        <p>
          {ITEMCNTNTS
            ? ITEMCNTNTS.substring(0, 200) + '...'
            : '내용 정보가 없습니다.'}
        </p>
      </div>
    </ItemBlock>
  );
};

export default FestivalItem;
