import { useNavigate } from "react-router-dom";
import List from "../component/List";
import SearchBar from "../component/SearchBar";


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