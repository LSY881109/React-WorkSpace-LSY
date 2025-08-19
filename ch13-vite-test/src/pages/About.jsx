// 쿼리 스트링 가져오기 기능 확인 중.
// 방법1
// import { useLocation } from 'react-router-dom';
// 방법2
import { useSearchParams } from 'react-router-dom';

const About = () => {
  // 방법1
  // const location = useLocation();
  // 방법2
  const [searchParams, setSearchParams] = useSearchParams();
  const detail = searchParams.get('detail');
  const mode = searchParams.get('mode');

  const onToggleDetails = () => {
    setSearchParams({
      mode,
      detail: detail === 'true' ? false : true,
    });
  };

  const onIncreaseMode = () => {
    const nextMode = mode === null ? 1 : parseInt(mode) + 1;
    setSearchParams({ mode: nextMode, detail });
  };

  return (
    <div>
      <h1>About 화면</h1>
      {/*방법1*/}
      {/*<p>쿼리스트링 : {location.search}</p>*/}
      {/*<p>pathname : {location.pathname}</p>*/}
      {/*<p>hash : {location.hash}</p>*/}
      {/*<p>state : {location.state}</p>*/}
      {/*방법2*/}
      <p>detail : {detail}</p>
      <p>mode : {mode}</p>
      <button onClick={onToggleDetails}>Toggle Details </button>
      <button onClick={onIncreaseMode}>Increase Mode</button>
    </div>
  );
};

export default About;
