import Item from "./Item";

const List = ({postlist}) => {

    // const postlist = [
    //     {
    //         id: 1, 
    //         title: "첫 번째 글",
    //         content: "내용입니다",
    //         writer: "user01",
    //         date: "2025-04-18",
    //         views: 10,
    //      },
    //     {
    //         id: 2,
    //         title: "두 번째 글",
    //         content: "내용입니다",
    //         writer: "user02",
    //         date: "2025-04-18",
    //         views: 20,
    //     },
    // ];

    return(
        <div>
        <table>
            <thead>
                <tr>
                    <th>글번호</th>
                    <th>제목</th>
                    <th>내용</th>
                    <th>작성자</th>
                    <th>작성일</th>
                    <th>조회수</th>
                </tr>
            </thead>
            <tbody>
                {postlist.map((post) => (
                    <Item key={post.id} post={post} />
                ))}
            </tbody>     
        </table>  
        </div>
    )
}

export default List;