import React from 'react';


class TodoForm extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            todo: ""
        };
    }

    handleChanges = e => {
        this.setState({
            todo: e.target.value
        });
    };

    handleSubmit = e => {
        e.preventDefault();
        this.props.addToDo(this.state.todo);
        this.setState({
            todo: ""
        });
    };

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <input
                type="text"
                name="todo"
                value={this.state.todo}
                onChange={this.handleChanges}
                placeholder="...add a task"
                />
                <button type="submit">Add Task</button>
                <button  type="button" className="clear-btn" onClick={this.props.clearCompleted}>Clear Completed Tasks</button>
            </form>
            
        );
    }
}

export default TodoForm;