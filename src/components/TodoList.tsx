import React, { useState } from "react";
import './TodoList.css';
interface Itodolist {
    text: string;
    id: number;
}
export const TodoList = () => {

    const [todos, setTodos] = useState<Itodolist[]>([]);
    const [input, setInput] = useState("");
    const handleClick = () => {
        const todo = { text: input, id: Date.now() }
        if (todo.text !== "") {
            setTodos([...todos, todo]);
            setInput("");
        }
        else {
            window.alert('Please Enter Todo.');
        }
    }
    const handleDelete = (id: number) => {
        setTodos(todos.filter((todo) => {
            return todo.id !== id;
        }))
    };

    return <>
        <div className="mainTodoContainer">
            <h1>Todo List</h1><br />
            <div className="inputField">
                <input placeholder="Todos..." onChange={(e) => setInput(e.target.value)} value={input}></input>
                <button className="addBtn" onClick={handleClick}>Add</button>
            </div>

            <div className="todoItemContainer">
                {todos.map((todo) => {
                    return (<div className="todoItem">
                        <li>{todo.text}</li>

                        <button className="delBtn" onClick={() => handleDelete(todo.id)}>X</button>
                    </div>
                    )
                })}
            </div>

        </div>
    </>
}
