const ReplyList = ({reply}) => {
    return(
        <div>
        <h4>댓글목록</h4>
        <tr>
            {reply.map((reply, index) => (
                <li key={index}>{reply.userId} : {reply.text}</li>
            ))}
        </tr>
        </div>
    )
}

export default ReplyList;