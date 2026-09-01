import "./TodoItem.css";
import { memo } from "react";
const TodoItem = ({todo, onUpdate, onDelete}) => {
    const onChangeCheckbox = () => {
        onUpdate(todo.id);
    }
    const onDeleteButton = () => {
        onDelete(todo.id);
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
            <button onClick={onDeleteButton}>삭제</button>
        </div>
    )
}

export default memo(TodoItem);