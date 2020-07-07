// your components will all go in this `component` directory.
// feel free to change this component.js into TodoList.js
import React from 'react';
import Todo from "./Todo";

const TodoList = props => {
    return (
        <div className="task-list">
            {/* <h3>This is TodoList Component</h3> */}
            {props.list.map(todo => (
                <Todo
                toggleToDo={props.toggleToDo} 
                key={todo.id}
                todo={todo}
                />
            ))}
        </div>
    );
};

export default TodoList;