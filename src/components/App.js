import React from "react";

import Todo from "./Todo/Todo";

import "./App.css";

// function App() {
//   return <h1>Hello World</h1>;
// }
// const text = "some text";

class App extends React.Component {
  state = {
    todos: [
      { id: 1, title: "Todo 1" },
      { id: 2, title: "Todo 2" },
      { id: 3, title: "Todo 3" }
    ]
  };

  //фильтруем массив и оставляем в нём только те значения, которые не равны переданному id. Получившийся отфильтрованный массив записываем в новый стейт
  deleteTodo = (e, id) => {
    console.log("Delete id:" + id);
    this.setState({ todos: this.state.todos.filter(todo => todo.id !== id) });
  };

  render() {
    if (this.state.todos.length === 0) {
      return <h2>Задач нет</h2>;
    }

    return (
      <div>
        <h1>Список дел</h1>

        {this.state.todos.map(todo => {
          return (
            <Todo
              key={todo.id}
              id={todo.id}
              title={todo.title}
              deleteTodo={this.deleteTodo}
            />
          );
        })}
      </div>
    );
  }
}

export default App;
