/*
  * 컴포넌트
    - 리액트는 Component 기반의 구조를 가지고 있다.
    - 모든 페이지가 Component로 구성되어 있고 하나의 Component는 또 다른 여러개의 
                    Component의 조합으로 이루어져 있다
    - 마치 블럭을 조립하듯 여러개의 새로운 Component를 이용하여 프로젝트를 만든다

    * Component사용시 장점
      - 코드의 양을 줄일 수 있다
      - 개발시간을 줄일 수 있다
      - 유지보수 비용이 줄어든다

    * 컴포넌트의 구성요소
      1) property(props) - 데이터는 무조건 위에서 아래로
        : 부모 컴포넌트에서 자식 컴포넌트에 전달되는 데이터. 자식 컴포넌트에서는 수정할 수 없다
      2) state
        : 컴포넌트의 상태를 저장하고 수정 가능한 데이터
      3) context
        : 부모컴포넌트에서 생성하여 모든 자식 컴포넌트에게 전달하는 데이터

      * 컴포넌트의 종류
        - 함수 컴포넌트 : 현재는 함수 컴포넌트만 사용
        - 클래스 컴포넌트

      * 컴포넌트의 규칙
        - 첫글자는 대문자로 시작
        - return구문으로 jsx형식의 마크업을 반환
*/
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
