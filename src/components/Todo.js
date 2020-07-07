import React from 'react';


class Todo extends React.Component{
    constructor() {
        super();
        this.state = {
            todo: ""
        };
    }

    render() {
        return (
            <div
                onClick={() => this.props.toggleToDo(this.props.todo.id)}
                className={`todo${this.props.todo.completed ? ' completed ' : ''}`}
            >
                <p>{this.props.todo.task}</p>
            </div>
        );
    }
}

export default Todo;