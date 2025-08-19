// import './App.css';
// import React, { useState } from 'react';
// import axios from 'axios';
// import NewsList from './components/NewsList.jsx';
// import Categories from './components/Categories.jsx';
//
// function App() {
//   const [data, setData] = useState(null);
//   // 샘플 데이터 받는 ,  onClick 설정 하기.
//   // 비동기 함수 사용전  기본 문법
//   // const onClick = () => {
//   //   axios.get('http://jsonplaceholder.typicode.com/todos/1').then((res) => {
//   //     setData(res.data);
//   //   });
//   // };
//   // 비동기 함수 사용.
//   const onClick = async () => {
//     try {
//       const response = await axios.get(
//         // 'http://jsonplaceholder.typicode.com/todos/1',
//         'https://newsapi.org/v2/top-headlines?country=us&apiKey=본인꺼',
//       );
//       setData(response.data);
//     } catch (e) {
//       console.log(e);
//     }
//   };
//   return (
//     <>
//       <h1 className="react">ch14 REST API 연결 연습</h1>
//       {/*<div>*/}
//       {/*  <button onClick={onClick}>샘플 데이터 불러오기 테스트</button>*/}
//       {/*</div>*/}
//       {/*<div>*/}
//       {/*  {data && (*/}
//       {/*    <textarea*/}
//       {/*      rows={7}*/}
//       {/*      value={JSON.stringify(data, null, 2)}*/}
//       {/*      readOnly={true}*/}
//       {/*    />*/}
//       {/*  )}*/}
//       {/*</div>*/}
//       {/*카테고리 컴포넌트 추가 */}
//       <Categories />
//       <NewsList />
//     </>
//   );
// }
//
// export default App;
