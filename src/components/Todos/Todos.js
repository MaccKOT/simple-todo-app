import React, { Component } from "react";
import { connect } from "react-redux";

import Todo from "../Todo/Todo";

export class Todos extends Component {
  render() {
    return (
      <div>
        <h1>Список дел</h1>

        {this.props.todos ? (
          this.props.todos.map(todo => {
            return (
              <Todo
                key={todo.id}
                id={todo.id}
                title={todo.title}
                deleteTodo={this.props.deleteTodo}
              />
            );
          })
        ) : (
          <h2>Загрузка</h2>
        )}
      </div>
    );
  }
}

export default Todos;
