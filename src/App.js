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
  }
];

class App extends React.Component {
  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state
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

  render() {
    return (
      <div>
        <div>
          <h2>Keep Track of your To-Do List Items Here!</h2>
          <TodoList />
        </div>
        <TodoForm />
      </div>
    );
  }
}

export default App;
