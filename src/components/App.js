import React from "react";

import Todo from "./Todo/Todo";

import "./App.css";

// function App() {
//   return <h1>Hello World</h1>;
// }
// const text = "some text";

const data = [
  { id: 1, title: "Todo 1" },
  { id: 2, title: "Todo 2" },
  { id: 3, title: "Todo 3" }
];

class App extends React.Component {
  render() {
    return (
      <div>
        <h1>Список дел</h1>

        {data.map(todo => {
          return <Todo key={todo.id} title={todo.title} />;
        })}
      </div>
    );
  }
}

export default App;
