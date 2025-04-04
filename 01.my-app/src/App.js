import logo from './logo.svg';
import './App.css';
import { React } from 'react';

function App() {
  // 주석
  /*
    여러줄 주석
  */
  return (  //주석
    // 주석
    <> {/* <>안에서 쓰는 주석 : 여러 줄 일때는 반드시 최상위 태그가 있어야 한다 */}
      <h1>React Test Page</h1>
      <p>리액트 시작</p>
      <h2>저장하면 자동으로 새로고침 된다</h2>
      {/* 주석 */}
    </>
  );
}

export default App;
