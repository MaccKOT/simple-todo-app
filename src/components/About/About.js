import React, { Component } from "react";

export class About extends Component {
  render() {
    return (
      <div>
        <h3>Простое приложение "Список дел"</h3>
        <p className="flow-text">
          <b>Инструменты</b>: <a href="https://reactjs.org">React</a>,&nbsp;
          <a href="https://materializecss.com/">MaterializeCSS</a>
          <br />
          <b>Редактор кода</b>:{" "}
          <a href="https://code.visualstudio.com">VS Code</a>
        </p>
      </div>
    );
  }
}

export default About;
