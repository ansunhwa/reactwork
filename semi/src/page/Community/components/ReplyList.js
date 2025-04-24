import { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import './ReplyList.css';

const ReplyList = () => {

        const { id } = useParams();  // 게시글 id
        const [replies, setReplies] = useState([]);
        const [newReply, setNewReply] = useState("");
        const userId = localStorage.getItem("userId");

        console.log("userId :", userId); 
        console.log("댓글 등록 요청:", userId, newReply);
      
        useEffect(() => {
         fetchReplies(); // 게시글 ID가 바뀔 때마다 댓글 새로 가져옴
            },[id]);

        //댓글목록 불러오기
        const fetchReplies = () => {
        axios.get(`http://localhost:8080/posts/${id}/comments`)
        .then(res => setReplies(res.data))
        .catch(err => console.error("댓글 불러오기 실패:", err));
    };

    //댓글등록
     const handleReplySubmit = (e) => {
    e.preventDefault();

    if (newReply.trim() === "") return;

    axios.post(`http://localhost:8080/posts/${id}/comments`, {  
      userId: userId,  
      content: newReply
    }).then(() => {
      setNewReply("");
      fetchReplies();  // 댓글 등록 후 목록 갱신
    }).catch(err => console.error("댓글 작성 실패:", err));
  };

  //댓글 삭제
  const handleDelete = (commentId) => {
    axios.post(`http://localhost:8080/posts/${id}/comments/${commentId}/delete`, {
        userId: userId  // 백엔드에서 권한 확인용
      })
    .then(() => {
      fetchReplies(); // 삭제 후 목록 갱신
    })
    .catch(err => {
      console.error("댓글 삭제 실패:", err);
      alert("삭제 권한이 없습니다.");
    });
  };
   

    return(
        <div className="reply-section">
        <h3>댓글</h3>
        <ul className="reply-list">
          {replies.map((reply, index) => (
            <li key={index}>
              <strong>{reply.user.userId}</strong>: {reply.content}
                {reply.user.userId === userId && (
                <button onClick={() => handleDelete(reply.id)} className="delete-btn">
                    삭제</button>
      )}
            </li>
          ))}
        </ul>
        <form onSubmit={handleReplySubmit} className="reply-form">
          <input 
            type="text" 
            value={newReply}
            onChange={(e) => setNewReply(e.target.value)}
            placeholder="댓글을 입력하세요"
          />
          <button className="reply-button" type="submit">등록</button>
        </form>       
      </div>
    );
  };

export default ReplyList;