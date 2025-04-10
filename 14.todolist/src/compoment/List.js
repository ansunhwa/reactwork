import { useState } from "react";
import Todoitem from "./Todoitem";
// todos = 넘어온배열을 {todos}풀어서 받음 / 삭제하려고 만든 update
const List = ({todos, onUpdate}) => {  
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
                        <Todoitem todo={todo} onUpdate={onUpdate} onDelete={onDelete} />)
                    //<Todoitem {...todo} />)
                }
            </div> 
        
        </div>
    )
}
export default List;