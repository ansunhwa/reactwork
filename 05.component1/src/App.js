import './App.css';

const user = {   //어디서든 사용 가능
  firstName : 'Hong',
  lastName : 'GilDong'
};

function Student(user) {
  return user.firstName + ' ' + user.lastName;
}

function App() {   //출력, 보여줄 내용은 여기에다!
  const isStudent = true;
  return (
    <div className="App">
      <h1>Start React 2025 Tjoeun</h1>
      <h3>Component 실습</h3>

      {isStudent == true ? <h4>{Student(user)}님 환영합니다</h4> : <h4>학원생이 아닙니다</h4>}

      <Com1></Com1>
      <Com1/>
      <Com1/>
    </div>
  );
}

function Com1() {
  return (
    <>
     <h2>[COMPONENT 입니다]</h2>
     <p>고용노동부 취업캠프</p>
     <ul>
        <li>java</li>
        <li>orcal</li>
        <li>springboot</li>
        <li>react</li>
     </ul>
    </>
  )
}

export default App;
