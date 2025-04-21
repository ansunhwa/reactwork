import './Write.css';
import { useState } from "react";
import { useNavigate } from "react-router-dom";

    const Write = ({post, setPost}) => {
        const [title, setTitle] = useState("");      //제목
        const [content, setContent] = useState("");  //내용
        const [writer, setWriter] = useState("");   //작성자

        const nav = useNavigate();

        const submit = () => {    //등록버튼 클릭시 실행되는 함수
            // 비어있는부분이 없는지 확인
            if (!writer.trim() || !title.trim() || !content.trim()) {
              alert("모든 항목을 입력해주세요!");
              return;
            }
            
            const newPost = {
                id : post.length +1,  // 현재 글 + 1
                title,
                content,
                writer,   // 고정ID
                date : new Date().toISOString().split("T")[0], //오늘날짜
                views : 0   //조회수 기본값 0
            };

            setPost([newPost, ...post]);
            nav("/"); // 메인으로 이동

        }

        return(
            <div className="write">
            <h4>게시글 작성하기</h4>
            
            <table className="writetable">
            <tbody>
              <tr>
                <td>작성자 :</td>
                <td><input value={writer} onChange={(e) => setWriter(e.target.value)} /></td>
              </tr>
              <tr>
                <td>제목 :</td>
                <td><input value={title} onChange={(e) => setTitle(e.target.value)} /></td>
              </tr>
              <tr>
                <td>내용 :</td>
                <td><textarea value={content} onChange={(e) => setContent(e.target.value)}/></td>
              </tr>
              <tr>
                <td className="writebtn" colSpan={2}>
                  <button className="wbtn" onClick={submit}>등록</button>
                  <button className="wbtn" onClick={() => {
                    setWriter("");
                    setTitle("");
                    setContent("");
                  }}>초기화</button>
                </td>
              </tr>
            </tbody>
            </table>
            
            </div>
        )

    }

   


export default Write;