import './App.css';
import Community from './pages/Community';
import { Route, Routes } from "react-router-dom";
import MyPost from "./pages/MyPost";
import Write from './pages/Write';
import Edit from './pages/Edit';
import { useState } from 'react';


function App() {

  const [post, setPost] = useState([
    {
        id: 1, 
        title: "첫 번째 글",
        content: "내용입니다",
        writer: "user01",
        date: "2025-04-18",
        views: 10,
    }
  ]);


  return (
    <div className="App">
      <h3>칼로리 | 챌린지 | 운동 | 커뮤니티 | 달력 </h3>
      
      <Routes>
        <Route path="/" element={<Community post={post}/>} />
        <Route path="/mypost" element={<MyPost />} />
        <Route path="/write" element={<Write post={post} setPost={setPost}/>} />
        <Route path="/edit" element={<Edit />} />
      </Routes>
      
    
    </div>
  );
}

export default App;
