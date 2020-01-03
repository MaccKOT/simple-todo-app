import React, { Component } from "react";
import { connect } from "react-redux";

import { addTodo } from "../../store/actions/todoActions";

import "./AddTodo.css";

export class AddTodo extends Component {
  state = {
    title: ""
    // date: ""
  };

  onChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  onSubmit = e => {
    e.preventDefault();
    // console.log(
    //   "Submit item: " + this.state.title + " date:" + this.state.date
    // );

    //добавляем новой элемент в список дел, используя переданный в пропсах метод addTodo, который обновит нам стейт и внесёт новый туда наш новый элемент
    this.props.addTodo({
      id: Date.now(),
      title: this.state.title
    });

    //очистить ввод и перейти на главную страницу
    this.setState({ title: "" });
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
        {/* <input
          type="text"
          name="date"
          placeholder="Введите дату..."
          value={this.state.date}
          onChange={e => this.onChange(e)}
        /> */}
        <button className="btn" type="submit">
          Добавить
        </button>
      </form>
    );
  }
}

export default connect(null, { addTodo })(AddTodo);
