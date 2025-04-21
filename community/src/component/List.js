import './List.css';
import Item from "./Item";

const List = ({postlist, clickView }) => {

    return(
        <div className='List' >
        <table className="listTable" >
            <thead>
                <tr>
                    <th>글번호</th>
                    <th>제목</th>
                    {/* <th>내용</th> */}
                    <th>작성자</th>
                    <th>작성일</th>
                    <th>조회수</th>
                </tr>
            </thead>
            <tbody>
                {postlist.map((post) => (
                    <Item key={post.id} post={post} clickView={clickView} />
                ))}
            </tbody>     
        </table>  
        </div>
    )
}

export default List;