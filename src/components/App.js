import React from "react";
import { Switch, Route } from "react-router-dom";

import Todos from "./Todos/Todos";
import AddTodo from "./AddTodo/AddTodo";

import "./App.css";

// function App() {
//   return <h1>Hello World</h1>;
// }
// const text = "some text";

class App extends React.Component {
  state = {
    todos: [
      { id: 1, title: "Задача 1" },
      { id: 2, title: "Задача 2" },
      { id: 3, title: "Задача 3" }
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

    //при роутинге корневой компонент должен быть снизу
    return (
      <div className="container">
        <h1>Список дел</h1>

        <Switch>
          <Route exact path="/add" component={AddTodo} />

          <Route
            exact
            path="/"
            render={() => {
              return <Todos todos={this.state.todos} />;
            }}
          />
        </Switch>
      </div>
    );
  }
}

export default App;
