import React from 'react';

//note from Vick: For this project only, I should move the handleChanges and handleSubmit to the App.js, also add this.props.handleSubmit and this.props.handleChanges on this page on lines 29 and 34. Also add on App.js line 88 handleChanges={this.handleChanges}. This is in order to pass down the handles as props, for this assignment. But in the real world, I would write it as I have done here.

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