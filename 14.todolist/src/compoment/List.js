import { useState } from "react";
import Todoitem from "./Todoitem";
// todos = 배열 4개 들어있음
const List = ({todos}) => {
    const [search, setSearch] = useState('');

    const getSearchData = () => {
        if(search == "") {
            return todos;
        }
        return todos.filter((todo) =>    //index0번 들어옴 시작
            todo.content.toLowerCase().includes(search.toLowerCase()) 
            // 0번에 사용자가 넣은 글씨가 포함되어 있으면 변수에 저장
        )
    }

    const filterTodos = getSearchData();
    
    return(
        <div className="itemlist">
            <h3>- Todo List -</h3>
            <input type='text' placeholder="검색어를 입력하세요" onChange={(e) => {
                    setSearch(e.target.value)
                }}  />
            <div className="todos_wrapper">
                {
                    filterTodos.map((todo) => 
                        <Todoitem todo={todo} />)
                    //<Todoitem {...todo} />)
                }
            </div> 
        
        </div>
    )
}
export default List;