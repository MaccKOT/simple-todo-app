import React from "react";
import { Switch, Route } from "react-router-dom";
import { connect } from "react-redux";

import { getTodos } from "../store/actions/todoActions";

import Todos from "./Todos/Todos";
import AddTodo from "./AddTodo/AddTodo";
import Navbar from "./Navbar/Navbar";
import About from "./About/About";

import "./App.css";

// function App() {
//   return <h1>Hello World</h1>;
// }
// const text = "some text";

class App extends React.Component {
  componentDidMount() {
    this.props.getTodos();
  }

  //убраны в редюсер

  // state = {
  //   todos: null
  // };

  //фильтруем массив и оставляем в нём только те значения, которые не равны переданному id. Получившийся отфильтрованный массив записываем в новый стейт
  // deleteTodo = (e, id) => {
  //   console.log("Delete id:" + id);
  //   this.setState({ todos: this.state.todos.filter(todo => todo.id !== id) });
  // };

  // addTodo = todo => {
  //   this.setState({ todos: [todo, ...this.state.todos] });
  // };

  //жизненный цикл компонентов
  // componentDidMount() {
  //   console.log("component did mount (after render)");

  //   //лучше использовать fetch
  //   axios
  //     .get("https://jsonplaceholder.typicode.com/todos?_limit=5")
  //     .then(res => {
  //       this.setState({ todos: res.data });
  //     });

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
        <Navbar />

        <Switch>
          <Route
            exact
            path="/add"
            render={() => {
              return <AddTodo />;
            }}
          />

          <Route
            exact
            path="/about"
            render={() => {
              return <About />;
            }}
          />

          <Route
            exact
            path="/"
            render={() => {
              return <Todos todos={this.props.todos} />;
            }}
          />
        </Switch>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    todos: state.todoReducer.todos
  };
};

export default connect(mapStateToProps, { getTodos })(App);
