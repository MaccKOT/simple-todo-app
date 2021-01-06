// import axios from 'axios';

import * as actions from './index';

export const addTodo = (todo) => {
  return {
    type: actions.ADD_TODO,
    todo,
  };
};

export const getTodos = () => async (dispatch) => {
  // переписано на fetch, потому что axios небезопасен
  await fetch('https://jsonplaceholder.typicode.com/todos?_limit=5')
    .then((response) => response.json())
    .then((json) => dispatch({ type: actions.GET_TODOS, todos: json }));

  // const res = await axios.get(
  //   'https://jsonplaceholder.typicode.com/todos?_limit=5'
  // );

  // dispatch({ type: actions.GET_TODOS, todos: res.data });
};

export const deleteTodo = (id) => {
  return {
    type: actions.DELETE_TODO,
    id,
  };
};
