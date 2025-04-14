const Todoitem = ({id, isDone, content, date, onUpdate}) => {   //({props})
    return(
        <div className="Todoitem">
            <input type='checkbox' checked={isDone} onChange={() => {onUpdate(id)}} />
            <span>{content}</span>    {/* {props.todos.content} */}
            <span>{new Date(date).toLocaleDateString()}</span> {/* {new Date(date).toLocal} */}
            <button onClick={() =>  {onDelete(id)} }>삭제</button>
        </div>
    )
}
export default Todoitem;