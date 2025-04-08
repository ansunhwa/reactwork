/*
  *props
    : 부모가 자식컴포넌트에게 전달하는 데이터
      자식컴포넌트는 값 변경 불가
      자식 -> 부모 : 불가
      형제끼리 : 불가
*/
import './App.css';
import Button from './component/Button';
import Compo from './component/Compo';

/* 1. 문자 혹은 변수로 값 넘겨주기
function App() {
  //const name="홍길동";
  const addr ="서초구 강남대로";
  return (
    <div className="App">
      <Compo user={"홍길동"} addr={addr} />
    </div>
  );
}
*/

/*
function App() {
  const userInfo ={
    name:"김땡떙",
    addr:"경기도 광주시",
    likeList:['캐릭터', '만화', '웹툰']
  }
  //return (<Compo user={userInfo}/>);  // 2. 객체로 넘겨주기
  return  <Compo {...userInfo}  />      // 3. 객체를 스프레드 연산자로 풀어서 넘겨주기
}
  */

function App() {
  return <Compo></Compo>
}

export default App;
