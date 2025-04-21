import { useNavigate } from "react-router-dom";
import List from "../component/List";
import SearchBar from "../component/SearchBar";
import { useEffect, useState } from "react";
import './Community.css'


const Community = ({post , setPost, clickView}) => {
    const nav = useNavigate();

    const[search, setSearch] = useState("");
    const[filter, setFilter] = useState(post);


    const searchKeyword = () => {
        const result = post.filter((p) =>
            p.title.includes(search) ||
            p.content.includes(search)
        );
        setFilter(result);
    } 

    const user = [
        { id : "bana01", name : "바나", score: 150},
        { id : "user01", name : "유저", score: 110},
        { id : "bana55", name : "바나55", score: 90},
        { id : "bana03", name : "유저33", score: 130},
    ];

    const top3 = [...user]
    .sort((a, b) => b.score - a.score)
    .slice(0, 3);

    useEffect(() => {
        if (search === "") {
            setFilter(post);
        }
    },[search,post])
    
    
    return(

        <div className="community"> 
        <div className="rank-box">
            <h4>🏆 챌린지 랭킹 TOP 3</h4>
            <ol>
                {top3.map((user, index) => (
                    <li key={user.id}>
                        {index + 1}위 - {user.name} ({user.score}점)
                    </li>
                ))}
            </ol>

        </div>
            
        <SearchBar 
            search={search}
            setSearch = {setSearch}
            searchKeyword={searchKeyword}
        />

            <div className="communitymain" >
                <button onClick={() => {nav('/mypost')}} >내글보기</button>             
                <button  onClick={() => {nav('/write')}} >작성하기</button>      
            </div>

        <List postlist={filter} clickView={clickView} />
                
        </div>
    );
};

export default Community;