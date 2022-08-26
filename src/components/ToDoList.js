import React, { useState } from "react";

const ToDoList = () => {
    const [currentTodo, setCurrentTodo] = useState("");
    const [todos, setTodos] = useState([]);

    const createNewTodo = (currentTodo) => {
        let copyOfTodosArray = [...todos];

        if (currentTodo.length > 0) {

            copyOfTodosArray.push(
                {
                    todo: currentTodo,
                    isCompleted: false
                });

            setTodos(copyOfTodosArray);
            setCurrentTodo("")
        }
    };

    const completeTodo = (index) => {
        let copyOfTodosArray = [...todos];
        copyOfTodosArray[index].isCompleted = !copyOfTodosArray[index].isCompleted;
        setTodos(copyOfTodosArray);
    };

    const deleteTodo = (index) => {
        let copyOfTodosArray = [...todos];
        copyOfTodosArray.splice(index, 1);
        setTodos(copyOfTodosArray);
    };



    return (
        <>
            <h4 className="todo-title content">This is a To Do List app that I have created using useState() with object arrays.</h4>
            <div className="todolist">
                <h2 className="todo-subtitle">To Do List</h2>

                <p className="todoinstructions">1. Enter a task in the box below and click 'Add to task list'. </p>
                <p className="todoinstructions">2. When a task has been completed, click the checkbox to cross it off the list.</p>
                <p className="todoinstructions">3. If you would like to remove a completed task from the list, click the trash can next to it.</p>
                <div className="input-div">
                    <input className="todo-input" value={currentTodo} placeholder="Enter a new task" onChange={(e) => { setCurrentTodo(e.target.value) }} onKeyPress={(e) => { if (e.key === "Enter") { createNewTodo(currentTodo) } }} />

                    <button className="todo-btn" onClick={() => { createNewTodo(currentTodo) }}>Add to task list</button>
                </div>


                {todos.length === 0 && <p className="task-number content">You have {todos.length} tasks on your To Do List.</p>}
                {todos.length === 1 && <p  className="task-number content">You have {todos.length} task on your To Do List:</p>}
                {todos.length > 1 && <p  className="task-number content">You have {todos.length} tasks on your To Do List:</p>}

                {todos.map((todo, index) => (
                    <div key={todo} className="todo">
                        <div className="checkbox" onClick={() => {
                            completeTodo(index)
                        }}>
                            {todo.isCompleted && (<span>&#x2714;</span>)}
                        </div>

                        <div className={todo.isCompleted ? "done task" : "task"}><p>{todo.todo}</p></div>

                        <div className="delete" onClick={() => { deleteTodo(index) }}>&#128465;</div>
                    </div>
                ))}
            

            </div>
            <div className="whitespace"></div>
        </>
    );
};

export default ToDoList;