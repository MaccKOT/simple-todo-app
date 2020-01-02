import React from "react";

import "./Todo.css";

class Todo extends React.Component {
  // delete = (evt, title) => {
  //   console.log("Delete " + title);
  // };

  render() {
    return (
      <div className="todo">
        <p>{this.props.title}</p>
        <button
          onClick={e => this.props.deleteTodo(e, this.props.id)}
          className="btn"
        >
          <i className="material-icons right">delete</i>
          Удалить
        </button>
        <div className="divider"></div>
      </div>
    );
  }
}

export default Todo;
