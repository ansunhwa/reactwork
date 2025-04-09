const Todoitem = (props) => {   //({isDone, content, date})
    return(
        <div className="Todoitem">
            <input type='checkbox'  />
            <span>{props.todo.content}</span>    {/* {content} */}
            <span>{new Date(props.todo.date).toLocaleDateString()}</span> {/* {new Date(date).toLocal} */}
            <button>삭제</button>
        </div>
    )
}
export default Todoitem;