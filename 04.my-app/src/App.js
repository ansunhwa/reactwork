import './App.css';

function App() {
  const isStudent = true;

  return (
    // return문 안에서 if문 사용 안됨
    // 문자로 인식
    /*
    <div className="App">
      isStrudent == true ? <h1>학생입니다</h1> : <h1>학생이 아닙니다</h1>
    </div>
    */

    //삼항연산자로 인식 하게 하려면 { } 안에 넣어준다
    <div className="App">
      {/* 
      <div>
        if(isStrudent) {
          <h1>학생입니다</h1>
        }
          <h1>학생이 아닙니다</h1>   -> 그냥 문자 형태로 나옴
        */}
      {isStudent == true ? <h1>학생입니다</h1> : <h1>학생이 아님니다</h1> }
    </div>
  );
}

export default App;
