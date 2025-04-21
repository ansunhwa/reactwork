import { useState } from "react";

const ReplyForm = ({addReply, userId}) => {

    const [text, setText] = useState("");

    const replySubmit = () => {
        if(!text.trim()) {
            alert("댓글을 입력해주세요");
            return;
        }

        const newReply = {
            userId: userId,
            text: text.trim()
        };
        
        addReply(newReply);
        setText("");
    };

    return(
        <div>
        <h4>댓글작성</h4>
        <p>아이디 : {userId} </p>
        <textarea 
        value={text}
        onChange={(e) => setText(e.target.value)}
        />
        <button onClick={replySubmit}>등록</button>
       
        </div>
    )
}

export default ReplyForm;