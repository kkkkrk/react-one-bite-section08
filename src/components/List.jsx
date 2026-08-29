import { useEffect } from "react";
import "./List.css";
import TodoItem from "./TodoItem";
import { useState } from "react";
const List = ({todos}) => {
    const [search, setSearch] = useState("");
    const onChangeSearch = (e) => {
        setSearch(e.target.value);
    }
    const getFilterData = () => {
        if(search === ""){
            return todos;
        }
        return todos.filter((todo) => {
            return todo.content.toLowerCase().includes(search.toLowerCase());
        }) 
    }
    return <div className="List">
        <h4>Todo List🍀</h4>
        <input 
            value={search}
            onChange={onChangeSearch}
            placeholder="검색어를 입력하세요"/>
        <div className="todos_wrapper">
            
            {
                getFilterData(todos)?.map((todo) => {
                    return <TodoItem key={todo.id} todo = {todo}/>;
                })
            }
        </div>
    </div>;
}

export default List;