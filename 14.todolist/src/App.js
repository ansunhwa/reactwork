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
      content : content,          //content를 받아서 넘어와야 하기 때문
      date : new Date().getTime()
    }
    setTodos([newItem, ...todos])   //배열에 4개인 상태 똑같은 주소가 들어오면 랜더링 안되서 풀어서 가지고와야함
  }

  // 삭제 시 isDone의 체크박스를 true로 바꾸기
  const onUpdate = (targetId) => {   //id를 얻어옴
    console.log(targetId);
   setTodos(todos.map((todo) => {   //setTodos호출 후 전체배열을 돌면서 0번배열 들어옴
      if(todo.id == targetId) {     //선택한 아이디와같으면
        return {
          ...todo,                 // todo 풀어서
          isDone : !todo.isDone    //기존에 들어있던 todo 에 들어있던 isDone를 !(true)
        }
      }
      return todo;  // id:0, isDone:true, content:-, date:date 전체를 return
    })
  )}
    // setTodos(todos.map((todo) => todo.id == targetId ? {...todo, isDoan : !todo.isDone} : todo))}

    // 삭제하기
    const onDelete = (targetId) => {
      setTodos(todos.filter((todo) => todo.id != targetId))
    }


  return (
    <div className="App">
      <Header />
      <Editor onCreate={onCreate} />  {/* 내가적은거 추가하기
       */}
      <List todos={todos} onUpdate={onUpdate} />    {/* 위에 만들어둔 4개배열을 list로 보냄 */}
    </div>
  );
}

export default App;
