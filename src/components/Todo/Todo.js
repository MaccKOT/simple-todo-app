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
          Удалить
        </button>
      </div>
    );
  }
}

export default Todo;
