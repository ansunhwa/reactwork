import { useNavigate } from "react-router-dom";
import List from "../component/List";
import SearchBar from "../component/SearchBar";
import { Route, Routes } from "react-router-dom";
import MyPost from "./pages/MyPost";
import Write from './pages/Write';
import Edit from './pages/Edit';
import { useState } from 'react';

<Routes>
<Route path="/" element={<Community post={post}/>} />
<Route path="/mypost" element={<MyPost />} />
<Route path="/write" element={<Write post={post} setPost={setPost}/>} />
<Route path="/edit" element={<Edit />} />
</Routes>


const Community = ({post}) => {

    const nav = useNavigate();
    
    return(

        <div>
        <SearchBar />
        <List postlist={post}/>

                <button onClick={() => {nav('/mypost')}} >내글보기</button>             
                <button  onClick={() => {nav('/write')}} >작성하기</button>
       
        </div>
    );
};

export default Community;