import './Detail.css';
import ReplyForm from "../component/ReplyForm";
import ReplyList from "../component/ReplyList";
import { useParams } from 'react-router-dom';
import { useState } from 'react';

const Detail = ({post}) => {

    const { id } = useParams();
    const targetPost = post.find((p) => p.id === Number(id));

    const [reply, setReply] = useState([]);

    const loginUserId = "bana01";  //임시아이디

    const addReply = (newReply) => {
        setReply([...reply, newReply]);
    };

    return(
        <>
        <div className="detail">
        <h2 className="title">제목 : {targetPost.title}</h2>
        <p className="writer">작성자 : {targetPost.writer} </p>
        <p className="date">작성일 : {targetPost.date} </p>
        <p className="content">내용 : </p>
        <div>{targetPost.content}</div>
        <p className="views">조회수 : {targetPost.views}</p>
        </div>

        <ReplyForm addReply={addReply} userId={loginUserId} />
        <ReplyList reply={reply}/>
        
        </>
    );
};

export default Detail;