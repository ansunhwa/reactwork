import './App.css';
import Community from './pages/Community';
import { Route, Routes } from "react-router-dom";
import MyPost from "./pages/MyPost";
import Write from './pages/Write';
import Edit from './pages/Edit';
import { useState } from 'react';
import Detail from './pages/Detail';


function App() {

  const [post, setPost] = useState([
    {
        id: 1, 
        title: "첫 번째 글",
        content: "내용입니다",
        writer: "user01",
        date: "2025-04-18",
        views: 5,
    }
  ]);

  //조회수 증가
  const clickView = (id) => {
    const updated = post.map((p) => 
      p.id === id ? {...p, views: p.views + 1} : p
    );
    setPost(updated);
  }


  return (
    <div className="App">
      <h3>칼로리 | 챌린지 | 운동 | 커뮤니티 | 달력 </h3>
      
      <Routes>
        <Route path="/" element={<Community post={post} setPost={setPost} clickView={clickView}/>} />
        <Route path="/mypost" element={<MyPost />} />
        <Route path="/write" element={<Write post={post} setPost={setPost}/>} />
        <Route path="/edit" element={<Edit />} />
        <Route path="/detail/:id" element={<Detail post={post} />} />
      </Routes>
      
    
    </div>
  );
}

export default App;
