import "./TodoItem.css";
const TodoItem = ({todo, onUpdate}) => {
    const onChangeCheckbox = () => {
        onUpdate(todo.id);
    }
    return (
        <div className="TodoItem">
            <input 
                checked = {todo.isDone}
                readOnly
                type="checkbox"
                onChange={onChangeCheckbox}
            />
            <div className="content">{todo.content}</div>
            <div className="date">{new Date(todo.date).toDateString()}</div>
            <button>삭제</button>
        </div>
    )
}

export default TodoItem;