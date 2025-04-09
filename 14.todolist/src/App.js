import { useState, useRef  } from 'react';
import './App.css';
import Editor from './compoment/Editor';
import Header from './compoment/Header';
import List from './compoment/List';
import Todoitem from './compoment/Todoitem';

const tmpData = [
  {
    id : 0,
    isDone : false,
    content : 'React 공부하기',
    date : new Date().getTime()
  },
  {
    id : 1,
    isDone : false,
    content : '운동하기!!',
    date : new Date().getTime()
  },
  {
    id : 2,
    isDone : false,
    content : '저녁먹기',
    date : new Date().getTime()
  }
]

function App() {
  const [todos, setTodos] = useState(tmpData);   //tmp:하나씩 배열에 넣었음

  /*
    * useRef()
      : 변경되는 값 저장
        DOM 요소에 직접 접근가능
        재랜더링이 되지 않음
  */

  // 새로운 todolist추가 시 id의 번호 부여하는 변수
  const idRef = useRef(3);  //아이디에 들어 갈 값을 3

  // 새로운 todolist 추가하는 함수
  const onCreate = (content) => {
    const newItem = {
      id : idRef.current++ ,
      isDone : false,
      content : content,
      date : new Date().getTime()
    }
    setTodos([newItem, ...todos])   //배열에 4개인 상태 똑같은 주소가 들어오면 랜더링 안되서 풀어서 가지고와야함
  }

  // 삭제 시 isDone의 체크박스를 true로 바꾸기
  const onUpdate = (targetId) => {
   setTodos(todos.map((todo) => {   //0번배열 들어옴
      if(todo.id == targetId) {
        return {
          ...todo,                 // todo 풀어서
          isDone : !todo.isDone    //기존에 들어있던 todo 에 들어있던 isDone를 !
        }
      }
      return todo;  // id:0, isDone:true, content:-, date:date 전체를 return
    })
  )}



  return (
    <div className="App">
      <Header />
      <Editor onCreate={onCreate} />
      <List todos={todos} />
    </div>
  );
}

export default App;
