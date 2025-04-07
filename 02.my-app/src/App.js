/*
// 1. style을 별도의 파일로 저장하여 사용
import './App.css';

function App() {
  return (
   <>
    <h1>오신것을 환영합니다.</h1>
    <h3>JAVA풀 스택 웹&앱 개발자 취업캠프</h3>
    <p className="class1">react class로 style 적용하기</p>
    <p id="id2">id로 스타일 적용하기</p>
   </>
  );
}
*/

/*
// 2. style을 변수에 객체로 저장하여 사용
function App() {
  const style = {
    div : {
      backgroundColor : 'pink',
      padding : '50px',
      textAlign : 'center',
      fontSize : '30px'
    }, 
    h1 : {color : 'red'},
    h3 : {color : "green"},
    class1 : {color : 'blue'},
    id2 : {color : "gray"}
  }
  return (
   <div style={style.div}>
    <h1 style={style.h1}>오신것을 환영합니다.</h1>
    <h3 style={style.h3}>JAVA풀 스택 웹&앱 개발자 취업캠프</h3>
    <p style={style.class1}>react class로 style 적용하기</p>
    <p style={style.id2}>id로 스타일 적용하기</p>
   </div>
  );
}
*/

// 3. inline방식으로 style 주기
function App() {
  return (
   <div style={ {textAlign:'center'} }>
    <h1 style={{color:'red'}}>오신것을 환영합니다.</h1>
    <h3 style={{color:'blue', backgroundColor:'pink'}}>JAVA풀 스택 웹&앱 개발자 취업캠프</h3>
    <p className="class1">react class로 style 적용하기</p>
    <p id="id2">id로 스타일 적용하기</p>
   </div>
  );
}
export default App;  // 중요! 꼭 있어야 함

