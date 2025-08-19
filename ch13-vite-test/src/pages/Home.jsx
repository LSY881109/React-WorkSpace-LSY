import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div>
      <h1>홈 화면</h1>
      <ul>
        <li>
          <Link to="/about">소개</Link>
        </li>
        <li>
          <Link to="/profile/lsy">lsy 의 프로필 </Link>
        </li>
        <li>
          <Link to="/profile/lsy2">lsy2 의 프로필 </Link>
        </li>
        <li>
          <Link to="/articles">게시글 목록</Link>
        </li>
      </ul>
    </div>
  );
};

export default Home;
