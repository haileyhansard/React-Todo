import React from 'react';
import TodoList from "./components/TodoList";
import TodoForm from "./components/TodoForm";

const list = [
  {
    task: 'Organize Garage',
    id: 1528817077286,
    completed: false   
  },
  {
    task: 'Bake Cookies',
    id: 1528817084358,
    completed: false
  },
  {
    task: 'Buy Groceries',
    id: 12345,
    completed: false
  },
  {
    task: 'Send Gift to Mom',
    id: 123456,
    completed: false
  }
];

class App extends React.Component {
  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers   you need to work with your state
  constructor() {
    super();
    this.state = {
      list: list
    };
  }

  addToDo = toDoName => {
    const newToDo = {
      task: toDoName,
      id: new Date(),
      completed: false
    };

    this.setState({
      list: [...this.state.list, newToDo]
    });
  };

  toggleToDo = todoId => {
    this.setState({
      list: this.state.list.map(todo => {
        if (todo.id === todoId) {
          return {
            ...todo,
            completed: !todo.completed
          };
        } else {
          return todo;
        }
      })
    });
  };


  render() {
    return (
      <div className="App">
        <div className="header">
          <h2>Today's To Do List</h2>
          <h4>July 6, 2020</h4>
        </div> 
        <div className="container"> 
          <div>
            <TodoList 
              toggleToDo={this.toggleToDo}
              list={this.state.list}
            />
          </div>
          <div>
            <TodoForm addToDo={this.addToDo} />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
