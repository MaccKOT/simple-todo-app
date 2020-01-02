import React from "react";
import { Switch, Route } from "react-router-dom";

import Todos from "./Todos/Todos";
import AddTodo from "./AddTodo/AddTodo";

import "./App.css";

import axios from "axios";

// function App() {
//   return <h1>Hello World</h1>;
// }
// const text = "some text";

class App extends React.Component {
  state = {
    todos: null
  };

  //фильтруем массив и оставляем в нём только те значения, которые не равны переданному id. Получившийся отфильтрованный массив записываем в новый стейт
  deleteTodo = (e, id) => {
    console.log("Delete id:" + id);
    this.setState({ todos: this.state.todos.filter(todo => todo.id !== id) });
  };

  //жизненный цикл компонентов
  componentDidMount() {
    console.log("component did mount (after render");

    axios
      .get("https://jsonplaceholder.typicode.com/todos?_limit=5")
      .then(res => {
        this.setState({ todos: res.data });
      });
  }

  // componentDidUpdate(prevProps, prevState) {
  //   console.log("component updated");
  // }
  // //вызывается когда надо синхронизироваться новые пропсы со стейтом
  // static getDerivedStateFromState(nextProps, prevState) {
  //   //
  //   return null;
  // }

  render() {
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
