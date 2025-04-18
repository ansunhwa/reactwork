import './App.css';
import { Link, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import New from './pages/New';
import Detail from './pages/Detail';
import Edit from './pages/Edit';
import { createContext, useReducer, useRef } from 'react';
import Ed from './pages/Ed';

const mockData = [
  {
    id : 1,
    createDate : new Date("2025-04-15").getTime(),
    emotionId : 1,
    content : "1번 일기 내용 😊"
  },
  {
    id : 2,
    createDate : new Date("2025-04-03").getTime(),
    emotionId : 2, 
    content : "2번 일기 내용 😭"
  },
  {
    id : 3,
    createDate : new Date("2025-3-24").getTime(),
    emotionId : 3, 
    content : "3번 일기 내용 🤔 "
  },
  {
    id : 4,
    createDate : new Date("2025-05-11").getTime(),
    emotionId : 4, 
    content : "4번 일기 내용 😐"
  }
]

function reducer(state, action) {  //상태관리
  switch(action.type) {
    case "CREATE" : 
      return [action.data, ...state]; // 풀어서 배열로 만들고 앞에 추가
    case "UPDATE" :
      return state.map((item) =>
        String(item.id) === String(action.data.id) ? action.data : item
      )                 // 아이디 {1}{2}{3}이 내가 누른거랑 같으면
    case "DELETE" :
      return state.filter((item) => String(item.id) != String(action.id))
  }
}

    /*
      createContext() : 전역상태를 공유하여 관리 
    */
      export const DiaryStateContext = createContext();  //상태저장용
      export const DiaryDispathContext = createContext(); // dispath(액션처리용)

function App() {
    /*
      useReducer() : 상태관리, 상태 업데이트 hook / 자주업데이트되지않는거 / 트리구조 / useState도 가능
    */
    const [data, dispatch] = useReducer(reducer, mockData);  //새로운내용 -> dispatch
    const idRef = useRef(5); // 고유한 아이디/ 이거부터 시작

    // 일기추가
    const onCreate = (createDate, emotionId, content)=> {   // 날짜, 이모션, 내용 담기 -> 추가
      dispatch({
        type: "CREATE",
        data : {
          id : idRef.current++,
          createDate,
          emotionId,
          content
        }
      })
  }

  // 일기 update
    const onUpdate = (id, createDate, emotionId, content) => {   //id를 꼭 가지고 와야 함
      dispatch({
        type: "UPDATE",
        data: {
          id,
          createDate,
          emotionId,
          content
        }
      })
    }

    // 일기 삭제
    const onDelete = (id) => {   //id 를 삭제하면 됨
      dispatch ({
        type : "DELETE",
        id
      })
    }

  return (
    <div className="App">
      <DiaryStateContext.Provider value={data} >
        <DiaryDispathContext.Provider value={{onCreate, onUpdate, onDelete}} >
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/new" element={<New />} />
        <Route path="/detail/:id" element={<Detail />} />
        <Route path="/edit" element={<Edit />} />
        <Route path="/ed/:id" element={<Ed />} />
        <Route path='*'  element={<div>없는 페이지 입니다</div>} />
      </Routes>
        </DiaryDispathContext.Provider>
      </DiaryStateContext.Provider>
    
    </div>
  );
}

export default App;
