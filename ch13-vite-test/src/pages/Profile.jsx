import React from 'react';
import { useParams } from 'react-router-dom';

const data = {
  lsy: {
    name: '이상용',
    description: '오늘 점심 뭐 먹지?',
  },
  lsy2: {
    name: '이상용2',
    description: '오늘 점심 뭐 먹지2?',
  },
};

const Profile = () => {
  // App.jsx 에서 설정한 :username 파라미터 객체의 키 값을 이용해서 정보를 가져오기
  //예시, http://localhost:5174/profile/lsy
  // params.username -> 값 : lsy
  // data[params.username] -> data[lsy]
  // data[lsy]  ->
  // 예)  lsy: {
  //     name: '이상용',
  //     description: '오늘 점심 뭐 먹지?',
  //   },
  const params = useParams();
  const profile = data[params.username];

  return (
    <div>
      <h1>사용자 프로필</h1>
      {profile ? (
        <div>
          <h2>{profile.name}</h2>
          <p>{profile.description}</p>
        </div>
      ) : (
        <p>존재하지 않는 프로필입니다. </p>
      )}
    </div>
  );
};

export default Profile;
