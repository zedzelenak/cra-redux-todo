import React from 'react';
import './App.css';
import {add, remove, removeAll} from './actions.js';

function App(props) {
  const store = props.store;
  const state = store.getState();

  const addTodo = () => {
    store.dispatch(add());
  };
  const removeTodo = (e) => {
    const parentListItem = e.target.parentElement;
    store.dispatch(remove(parentListItem.dataset.todo));
  };
  const removeAllTodos = () => {
    store.dispatch(removeAll());
  };


  const removeButton = <button className='remove' onClick={removeTodo}>X</button>;
  const todoListItems = state?.map((todo, i) => {
    return (
      <li key={i} data-todo={todo}>{todo} {removeButton}</li>
    );
  });

  return (
    <div id="app">
      <div id="controls">
        <h3>Controls for ToDo List</h3>
        <div>
          <input type='text' id='add' />
          <button onClick={addTodo}>Add todo</button>
        </div>
      </div>
      <div id="todo-list">
        <h3>ToDo List</h3>
        <ul>
          {todoListItems}
        </ul>
        <div>
          <button onClick={removeAllTodos}>Remove All Todos</button>
        </div>
      </div>
    </div>
  );
}

export default App;