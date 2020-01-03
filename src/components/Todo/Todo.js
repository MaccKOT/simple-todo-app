import React from "react";
import { connect } from "react-redux";

import { deleteTodo } from "../../store/actions/todoActions";

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
          onClick={() => this.props.deleteTodo(this.props.id)}
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

export default connect(null, { deleteTodo })(Todo);
