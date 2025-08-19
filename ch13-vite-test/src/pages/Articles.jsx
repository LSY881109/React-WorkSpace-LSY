import React from 'react';
// 중첩 라우팅 하기 위해서, Outlet 컴포넌트를 이용해야함.
import { Link, Outlet } from 'react-router-dom';

const Articles = () => {
  return (
    <div>
      {/*중첩 라우팅 적용하기.*/}
      <Outlet />
      <ul>
        <li>
          <Link to="/articles/1">게시글 1</Link>
        </li>
        <li>
          <Link to="/articles/2">게시글 2</Link>
        </li>
        <li>
          <Link to="/articles/3">게시글 3</Link>
        </li>
      </ul>
    </div>
  );
};

export default Articles;
