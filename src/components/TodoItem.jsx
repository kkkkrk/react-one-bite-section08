import "./TodoItem.css";
const TodoItem = ({todo}) => {
    return (
        <div className="TodoItem">
            <input checked = {todo.isDone} type="checkbox" />
            <div className="content">{todo.content}</div>
            <div className="date">{new Date(todo.date).toDateString()}</div>
            <button>삭제</button>
        </div>
    )
}

export default TodoItem;