import React, { Component } from "react";
import TodoList from "./TodoList";
import "./css/App.css";
import Form from "./Form";

class App extends Component {
  constructor() {
    super();
    const todos = [];
    this.state = {
      todos: todos,
      countTodo: todos.length + 1
    };
  }
  handleSubmit(e) {
    e.preventDefault();
    const title = e.target.title.value;
    const desc = e.target.desc.value;
    const todos = this.state.todos.slice();
    const countTodo = this.state.countTodo;
    if (title) {
      todos.push({
        id: countTodo,
        title: title,
        desc: desc,
        done: false
      });

      this.setState({ todos });
      this.setState({ countTodo: countTodo + 1 });
      
      e.target.title.value = "";
      e.target.desc.value = "";
    }
  }
  setTodoStatus(clickTodo) {
    const todos = this.state.todos.slice();
    const todo = todos[clickTodo.id - 1];
    todo.done = !todo.done;
    todos[clickTodo - 1] = todo;

    this.setState({ todos: todos });
  }
 

  render() {
    return (
      <div className="app">
        <h1>todo</h1>
        <Form handleSubmit={this.handleSubmit.bind(this)} />
        <TodoList
          todos={this.state.todos}
          setTodoStatus={this.setTodoStatus.bind(this)}
        />
      </div>
    );
  }
 
}

export default App;
