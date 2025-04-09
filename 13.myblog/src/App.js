import { useState } from 'react';
import './App.css';
/*
  * 동적 UI를 만드는 법(모달창 만들기)
    : 유저가 조작시 형태가 바뀌는 모달창, 탭, 서브메뉴, 툴팁, 경고문 등 UI들 (만들때)

  * 순서
    1. html과 css로 ui디자인하기
    2. UI의 현재 상태를 state에 저장
    3. state에 따라 UI가 어떻게 보일 지 조건문 등으로 작성
*/
function App() {
  const [like, setLike] = useState([0,0,0]);

  //let titleArr = ['얌샘김밥', '라그릴리아', '맛있는초밥'];
  //const [title, setTitle] = useState(titleArr);
  const [title, setTitle] = useState(['얌샘김밥', '라그릴리아', '맛있는초밥']);

  const [modal, setModal] = useState(false);   //기본은 닫혀있는 상태
 
  const[modalIndex, setModalIndex] = useState(0);

  const [input, setinputValue] = useState('');

  return (
    <div className="App">
    <h2>FOODIE SPOT</h2>

    {
     title.map(function(value, i){
      return(
        <div className='list' key={i}>
        <h4 onClick={() => {setModal(!modal); setModalIndex(i)}}>{title[i]}</h4>
        <p>04월 09일 <span onClick={() => {
          let copy = [...like];
          copy[i] = copy[i] + 1;
          setLike(copy);
        }}>👍{like[i]}</span></p>       
      </div>
      )
    })
    }
    <br/>

    <input onChange={(e) => {setinputValue(e.target.value)}} />

    {modal ? <Modal title={title} setTitle={setTitle} modalIndex={modalIndex} inputValue={input} /> : null }  
    {/* 모달을 띄워줄지 말지 */}
    </div>
  );
}

function Modal(props) {
  return (
    <div className='modal'>
      <h4>{props.title[props.modalIndex]}</h4>
      <p>날짜</p>
      <p>상세내용</p>
      <br/>
    <button onClick={() => {
      let copy = [...props.title];
      copy[props.modalIndex] = props.inputValue;
      props.setTitle(copy);
    }}>글수정</button>
    </div>
  )
}

export default App;
