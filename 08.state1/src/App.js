/*
  *state
    : 내부에서 변경가능한 데이터를 다루기 위해 사용하는 객체
      js에서는 변수에 담지만 리액트에서는 useState()라는 리액트 함수 사용
  * 특징
    - state를 정의할 때 렌더링을 하거나 데이터 흐름에 사용되는 것만 state를 사용한다.
    - state가 변경될 때 컴포넌트가 재랜더링이 되기 떄문에 렌더링이 필요없다던지,
      데이터 흐름에 관련이 없는 값을 포함하면 계속 재 랜더링이 되기 때문에 성능저하를 일으킴
*/
import './App.css';
import Counter from './component/Counter';
import LightOnOff from './component/Light-on-off';
import MemberEnroll from './component/Member-enroll';

function App() {
  return (
    <div className="App">
      <MemberEnroll/>
      <hr/>
      <Counter/>
      <br/>
      <hr/>
      <br/>
      <LightOnOff/>
    </div>
  );
}

export default App;
