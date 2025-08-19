// import { useState, useEffect } from 'react';
// import axios from 'axios';
//
// import styled from 'styled-components';
// import NewsItem from './NewsItem';
//
// //css 작업
// const NewsListBlock = styled.div`
//   box-sizing: border-box;
//   padding-bottom: 3rem;
//   width: 768px;
//   margin: 0 auto;
//   margin-top: 2rem;
//   @media screen and (max-width: 768px) {
//     width: 100%;
//     padding-left: 1rem;
//     padding-right: 1rem;
//   }
// `;
//
// const NewsList = ({ category }) => {
//   //실제 데이터 연동,
//   const [articles, setArticles] = useState([]);
//   const [loading, setLoading] = useState(false);
//
//   //
//   useEffect(() => {
//     const fetchData = async () => {
//       setLoading(true);
//       try {
//         // category 의 값에 따라, url 주소가 동적으로 변경하는 코드로 작성.
//         //https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=본인꺼
//         const query = category === 'all' ? '' : `&category=${category}`;
//         const response = await axios.get(
//           // 'https://newsapi.org/v2/top-headlines?country=us&apiKey=본인꺼',
//           `https://newsapi.org/v2/top-headlines?country=us${query}&apiKey=본인꺼
// `,
//         );
//         setArticles(response.data.articles);
//         console.log(response.data);
//       } catch (e) {
//         console.log(e);
//       }
//       setLoading(false);
//     };
//     fetchData();
//   }, [category]);
//
//   return (
//     <NewsListBlock>
//       {articles.map((article) => (
//         <NewsItem key={article.url} article={article} />
//       ))}
//     </NewsListBlock>
//   );
// };
//
// export default NewsList;
