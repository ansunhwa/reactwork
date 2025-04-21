import { useState } from "react";
import './SearchBar.css'

const SearchBar = ({search, setSearch, searchKeyword}) => {
    return(
        
        <div>
        <input className="searchinput" type="text" placeholder="        게시판에서 검색 " 
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        /> 
        
        {/* <button className="searchbarbtn" onClick={searchKeyword}>검색</button> */}
        <button className="searchbarbtn1" onClick={searchKeyword}><img src="/img/search.png " /></button>
        </div>
        
    )
}

export default SearchBar;