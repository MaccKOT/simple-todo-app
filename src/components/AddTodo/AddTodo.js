import React, { Component } from "react";
import "./AddTodo.css";

export class AddTodo extends Component {
  state = {
    title: "",
    date: ""
  };

  onChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  onSubmit = e => {
    e.preventDefault();
    console.log(
      "Submit item: " + this.state.title + " date:" + this.state.date
    );
    //добавляем новой элемент в список дел

    this.setState({ title: "", date: "" });
  };

  render() {
    return (
      <form onSubmit={e => this.onSubmit(e)}>
        <input
          type="text"
          name="title"
          placeholder="Добавить элемент в список..."
          value={this.state.title}
          onChange={e => this.onChange(e)}
        />
        <input
          type="text"
          name="date"
          placeholder="Введите дату..."
          value={this.state.date}
          onChange={e => this.onChange(e)}
        />
        <button className="btn" type="submit">
          Добавить
        </button>
      </form>
    );
  }
}

export default AddTodo;
