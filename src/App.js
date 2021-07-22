import React from 'react';
import './App.css';
import {add, remove, removeAll} from './actions.js';

function App(props) {
  const store = props.store;
  const state = store.getState();

  const addTodo = () => {
    const input = document.querySelector('input#add-todo');

    if(state.includes(input.value)) {
      alert('can only add one todo of a given value');
      input.value = '';
      return;
    }
    
    if(input.value) {
      store.dispatch(add(input.value));
      input.value = '';
    }
  };

  const removeTodo = (e) => {
    const parentListItem = e.target.parentElement;
    const todoText = parentListItem.dataset.todo;
    
    store.dispatch(remove(todoText));
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
        <input type='text' id='add-todo' />
        <button onClick={addTodo}>Add todo</button>
      </div>
      <div id="todo-list">
        <h3>ToDo List</h3>
        <ul>
          <li></li>
          {todoListItems}
          <li></li>
        </ul>
        <div id="remove-all">
          <button onClick={removeAllTodos}>Remove All Todos</button>
        </div>
      </div>
    </div>
  );
}

export default App;